# 🌱 FarmShield AI — Crop Disease Detection

> AI-powered crop disease detection with multilingual support, treatment plans, and real-time field analytics.

Built for Hackathon 2025 — Prototype submission by Team FarmShield.

---

## 🚀 Live Demo

Open `index.html` in any browser — no server or build step needed!

---

## ✨ Features

| Feature | Description |
|---|---|
| 📷 Photo Upload | Upload your own crop image for analysis |
| 🧠 AI Detection | Identifies 5 major crop diseases with confidence score |
| ⚠️ Severity Meter | High / Moderate / Healthy classification |
| 💊 Treatment Plans | Toggle between Organic and Chemical treatments |
| 🌤️ Weather Correlation | Temperature, humidity, wind + risk alert |
| 🗣️ Multilingual | Results in Hindi and Marathi for rural farmers |
| 📋 Copy Report | One-click copy of full disease report |
| 📲 WhatsApp Share | Instantly share results with other farmers |

---

## 🌿 Diseases Detected

1. **Late Blight** (Tomato) — *Phytophthora infestans*
2. **Stem Rust** (Wheat) — *Puccinia graminis*
3. **Powdery Mildew** (Cucurbits/Grapes) — *Erysiphe cichoracearum*
4. **Mosaic Virus** (Chilli/Tobacco) — *TMV*
5. **Healthy Crop** — No disease detected

---

## 📁 Project Structure

```
farmshield-ai/
│
├── index.html          # Main HTML — UI structure
├── css/
│   └── style.css       # All styles
├── js/
│   ├── diseases.js     # Disease database & treatment data
│   └── app.js          # Detection logic, UI interactions
└── README.md
```

---

## 🛠️ How to Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/farmshield-ai.git

# Open in browser
cd farmshield-ai
open index.html
```

No npm, no build tools, no dependencies — just open and run!

---

## 🔌 Extending with Real AI

To integrate a real ML model (e.g. Roboflow):

```javascript
// In app.js → detect() function, replace the setTimeout with:
const response = await fetch('YOUR_ROBOFLOW_API_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ image: base64Image })
});
const result = await response.json();
showResult(result.predicted_class);
```

---

## 📊 Impact

- 🇮🇳 Targets 140M+ Indian farmers
- 🌾 Covers top 5 disease threats to Indian crops
- 🗣️ Hindi + Marathi language support for rural accessibility
- 📱 Mobile-first, works offline for demos

---

## 🏆 Hackathon Details

- **Topic:** Crop Disease Detection
- **Team:** FarmShield AI
- **Stack:** HTML5, CSS3, Vanilla JavaScript
- **AI Integration:** Rule-based + Roboflow-ready

---

## 📄 License

MIT License — free to use, modify and extend.
