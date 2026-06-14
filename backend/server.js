const express = require('express');
const multer = require('multer');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Multer config for image uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

// Classification endpoint
app.post('/api/classify', upload.single('image'), async (req, res) => {
  console.log("🔥 CLASSIFY ROUTE HIT");
  let roboflowUrl = '';
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No image provided' });
    }

    // Convert image to Base64
    const base64Image = req.file.buffer.toString('base64');

    // Call Roboflow API
    roboflowUrl = `https://serverless.roboflow.com/${process.env.ROBOFLOW_MODEL_ID}`;

    console.log("Model ID:", process.env.ROBOFLOW_MODEL_ID);
    console.log("API Key Exists:", !!process.env.ROBOFLOW_API_KEY);
    console.log("Uploaded File:", req.file?.originalname);
    console.log("Image Length:", base64Image.length);
    console.log("Request URL:", roboflowUrl);

    const roboflowResponse = await axios({
      method: "POST",
      url: roboflowUrl,
      params: {
        api_key: process.env.ROBOFLOW_API_KEY
      },
      data: base64Image,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    console.log("Roboflow Response:", roboflowResponse.data);

    const predictedClass = roboflowResponse.data.top;
    const confidence = roboflowResponse.data.confidence;

    // Return structured response
    res.json({
      success: true,
      className: predictedClass,
      confidence
    });

  } catch (error) {
    console.error("========== BACKEND ERROR ==========");
    console.error("Message:", error.message);
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Response Data:", error.response.data);
    }
    console.error("Full Error:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`FarmShield Backend running on http://localhost:${PORT}`);
  console.log('POST /api/classify - Image classification endpoint');
});
