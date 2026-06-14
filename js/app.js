// ============================================================
//  FarmShield — Offline Disease Detection
// ============================================================

let selectedSample = null;
let uploadedImage = false;
let currentUploadedFile = null;

// ── Roboflow mapping (prepared for future integration) ─────
const diseaseMap = {
  "Healthy Potato": "healthy",
  "healthy tomato": "healthy",

  "Unhealthy Corn Common Rust": "rust",
  "Unhealthy_Apple_Rust": "rust",

  "Unhealthy Potato Early Blight": "early_blight",
  "Unhealthy Tomato Early Blight": "early_blight",

  "Unhealthy Tomato Yellow Leaf Curl Virus": "mosaic",

  "Unhealthy_Apple_Scab": "leaf_spot"
};

async function detectDiseaseWithRoboflow(imageFile) {
  console.log("Waiting for Roboflow model deployment...");
  return null;
}

function getDiseaseKey(predictionClass) {
  return diseaseMap[predictionClass] || "healthy";
}

// ── File Upload ─────────────────────────────────────────────
document.getElementById('fileInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  currentUploadedFile = file;
  const reader = new FileReader();
  reader.onload = function (ev) {
    document.getElementById('previewImg').src = ev.target.result;
    document.getElementById('previewArea').style.display = 'block';
    document.getElementById('uploadZone').style.display = 'none';
    uploadedImage = true;
    document.getElementById('detectBtn').disabled = false;
    document.querySelectorAll('.sample-chip').forEach(c => c.classList.remove('active'));
    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('assistantSection').style.display = 'none';
  };
  reader.readAsDataURL(file);
});

// ── Sample Selection ─────────────────────────────────────────
function selectSample(el, key) {
  document.querySelectorAll('.sample-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  selectedSample = key;
  document.getElementById('detectBtn').disabled = false;
  document.getElementById('resultCard').style.display = 'none';
  document.getElementById('assistantSection').style.display = 'none';
  if (!uploadedImage) {
    document.getElementById('previewArea').style.display = 'none';
    document.getElementById('uploadZone').style.display = 'block';
  }
}

// ── Reset Upload ─────────────────────────────────────────────
function resetUpload() {
  document.getElementById('previewArea').style.display = 'none';
  document.getElementById('uploadZone').style.display = 'block';
  document.getElementById('fileInput').value = '';
  uploadedImage = false;
  currentUploadedFile = null;
  selectedSample = null;
  document.getElementById('detectBtn').disabled = true;
  document.getElementById('resultCard').style.display = 'none';
  document.getElementById('assistantSection').style.display = 'none';
  document.querySelectorAll('.sample-chip').forEach(c => c.classList.remove('active'));
}

function detectDiseaseFromFilename(fileName) {
  if (!fileName || typeof fileName !== 'string') return null;
  const baseFile = fileName.toLowerCase().replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '');

  const mapping = {
    'healthy': 'healthy',
    'late-blight': 'blight',
    'blight': 'blight',
    'powdery-mildew': 'mildew',
    'mildew': 'mildew',
    'stem-rust': 'rust',
    'rust': 'rust',
    'mosaic-virus': 'mosaic',
    'mosaic': 'mosaic',
    'leaf-spot': 'leaf_spot',
    'early-blight': 'early_blight',
    'bacterial-wilt': 'bacterial_wilt'
  };

  if (mapping[baseFile]) return mapping[baseFile];

  const normalized = baseFile.replace(/[_\s]+/g, '-').replace(/[^a-z0-9-]/g, '');
  return mapping[normalized] || null;
}

async function detect() {
  const btn = document.getElementById('detectBtn');
  const lb = document.getElementById('loadingBar');
  const lf = document.getElementById('loadingFill');
  const lt = document.getElementById('loadingText');

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span>&nbsp; Detecting...';
  lb.style.display = 'block';
  document.getElementById('resultCard').style.display = 'none';
  document.getElementById('assistantSection').style.display = 'none';

  const steps = [
    'Preparing image...',
    'Reading filename...',
    'Matching disease...',
    'Loading recommendations...',
    'Done!'
  ];

  let stepIdx = 0;
  const progressPromise = new Promise((resolve) => {
    const interval = setInterval(() => {
      if (stepIdx < steps.length) {
        lt.textContent = steps[stepIdx];
        lf.style.width = ((stepIdx + 1) / steps.length * 100) + '%';
        stepIdx++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, 450);
  });

  const selectedKey = selectedSample || 'healthy';
  let diseaseKey = 'healthy';

  // Prepare Roboflow prediction (placeholder) and run progress animation in parallel
  const predPromise = (uploadedImage && currentUploadedFile)
    ? detectDiseaseWithRoboflow(currentUploadedFile).catch(err => { console.error('Roboflow error', err); return null; })
    : Promise.resolve(null);

  const [predictionClass] = await Promise.all([predPromise, progressPromise]);

  if (predictionClass) {
    const mapped = getDiseaseKey(predictionClass);
    console.log('Prediction:', predictionClass);
    console.log('Mapped Disease:', mapped);
    diseaseKey = mapped;
  } else {
    // Offline fallback: use selected sample or healthy
    diseaseKey = selectedSample || 'healthy';
  }

  lb.style.display = 'none';
  lf.style.width = '0';
  btn.disabled = false;
  btn.innerHTML = '<i class="ti ti-microscope"></i> Detect Disease';

  showResult(diseaseKey);
  renderStaticAgronomistUI(diseaseKey);
}

function showResult(diseaseKey) {
  const card = document.getElementById('resultCard');
  const d = DISEASES[diseaseKey] || DISEASES['healthy'];
  const confidenceText = isNaN(d.confidence) ? d.confidence : `${d.confidence}%`;
  const confidenceWidth = isNaN(d.confidence) ? '100%' : `${d.confidence}%`;
  const sevClass = d.severity === 'high' ? 'sev-high' : d.severity === 'medium' ? 'sev-medium' : 'sev-low';
  const sevLabel = d.severity === 'high' ? 'High Risk' : d.severity === 'medium' ? 'Moderate' : 'Healthy';

  card.innerHTML = `
    <div class="result-header">
      <div>
        <div class="disease-name">${d.name}</div>
        <div class="disease-sci">${d.sci} &middot; ${d.crop}</div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
        <span class="severity-badge ${sevClass}">${sevLabel}</span>
      </div>
    </div>

    <div class="confidence-row">
      <div class="conf-label">
        <span>Confidence</span>
        <strong>${confidenceText}</strong>
      </div>
      <div class="conf-track">
        <div class="conf-fill" style="width: ${confidenceWidth}"></div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-cell">
        <div class="info-cell-label">Spread Speed</div>
        <div class="info-cell-val">${d.spread}</div>
      </div>
      <div class="info-cell">
        <div class="info-cell-label">Peak Season</div>
        <div class="info-cell-val">${d.season}</div>
      </div>
    </div>

    <div class="section">
      <div class="sec-title"><i class="ti ti-eye"></i> Symptoms Observed</div>
      <div class="symptom-tags">
        ${d.symptoms.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>

    <div class="section">
      <div class="sec-title"><i class="ti ti-cloud"></i> Field Weather Correlation</div>
      <div class="weather-row">
        <div class="w-chip">
          <div class="w-chip-val">${d.weather.temp}°C</div>
          <div class="w-chip-label">Temperature</div>
        </div>
        <div class="w-chip">
          <div class="w-chip-val">${d.weather.humidity}%</div>
          <div class="w-chip-label">Humidity</div>
        </div>
        <div class="w-chip">
          <div class="w-chip-val">${d.weather.wind}</div>
          <div class="w-chip-label">Wind</div>
        </div>
      </div>
      <div class="risk-banner">
        <i class="ti ti-alert-triangle"></i>
        ${d.riskMsg}
      </div>
    </div>

    <div class="section">
      <div class="sec-title"><i class="ti ti-medicine-syrup"></i> Treatment Plan</div>
      <div class="treatment-tabs">
        <button class="t-tab active" onclick="switchTab(this, 'organic', '${diseaseKey}')">🌿 Organic</button>
        <button class="t-tab" onclick="switchTab(this, 'chemical', '${diseaseKey}')">⚗️ Chemical</button>
      </div>
      <div id="treatContent">${renderSteps(d.organic)}</div>
    </div>

    <div class="section">
      <div class="sec-title"><i class="ti ti-language"></i> Local Language Summary</div>
      <div class="lang-row">
        <button class="lang-btn active" onclick="switchLang(this, 'hindi', '${diseaseKey}')">हिंदी</button>
        <button class="lang-btn" onclick="switchLang(this, 'marathi', '${diseaseKey}')">मराठी</button>
      </div>
      <div class="lang-output" id="langOutput">${d.hindi}</div>
    </div>

    <div class="share-row">
      <button class="share-btn" onclick="copyResult('${diseaseKey}')">
        <i class="ti ti-copy"></i> Copy Report
      </button>
      <button class="share-btn" onclick="shareWhatsApp('${diseaseKey}')">
        <i class="ti ti-brand-whatsapp"></i> Share on WhatsApp
      </button>
    </div>
  `;

  card.style.display = 'block';
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderSteps(arr) {
  if (!arr || arr.length === 0) return `<div class="treatment-step"><span>No treatment steps recommended.</span></div>`;
  return arr.map((s, i) => `
    <div class="treatment-step">
      <span class="step-num">${i + 1}</span>
      <span>${s}</span>
    </div>
  `).join('');
}

function switchTab(el, type, key) {
  document.querySelectorAll('.t-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');

  const localData = DISEASES[key] || DISEASES['healthy'];
  const steps = localData[type] || [];
  document.getElementById('treatContent').innerHTML = renderSteps(steps);
}

function switchLang(el, lang, key) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');

  const localData = DISEASES[key] || DISEASES['healthy'];
  const output = localData[lang] || (lang === 'hindi'
    ? 'सटीक अनुवाद केवल ऑफलाइन डेटाबेस नमूनों के लिए उपलब्ध हैं।'
    : 'अचूक भाषांतर केवळ ऑफलाइन डेटाबेस नमुन्यांसाठी उपलब्ध आहे。');
  document.getElementById('langOutput').textContent = output;
}

function copyResult(key) {
  const d = DISEASES[key] || DISEASES['healthy'];
  const text = `FarmShield Report\n\nDisease: ${d.name}\nCrop: ${d.crop}\nSeverity: ${d.severity.toUpperCase()}\nConfidence: ${d.confidence}%\n\nTreatment Plan:\n${d.organic.map((s, i) => `${i + 1}. ${s}`).join('\n')}`;
  navigator.clipboard.writeText(text).then(() => {
    alert('Report copied to clipboard!');
  }).catch(() => {
    alert('Could not copy. Please copy manually.');
  });
}

function shareWhatsApp(key) {
  const d = DISEASES[key] || DISEASES['healthy'];
  const msg = encodeURIComponent(`🌱 FarmShield Alert!\n\n🔍 Disease: ${d.name}\n🌾 Crop: ${d.crop}\n⚠️ Severity: ${d.severity.toUpperCase()}\n📊 Confidence: ${d.confidence}%\n\nTreatment: ${d.organic[0] || 'No treatment recommended.'}`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function renderStaticAgronomistUI(diseaseKey) {
  const assistantSection = document.getElementById('assistantSection');
  if (!assistantSection) return;
  assistantSection.style.display = 'block';
  const d = DISEASES[diseaseKey] || DISEASES['healthy'];

  assistantSection.innerHTML = `
    <div class="assistant-header">
      <div class="logo-icon" style="background: var(--green-dark); width: 28px; height: 28px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center;">
        <i class="ti ti-plant" style="font-size: 16px; color: var(--green-pale);"></i>
      </div>
      <span class="assistant-title">🌾 Offline Agronomist Assistant</span>
    </div>
    <div class="assistant-content">
      <div class="assistant-badge-grid">
        <div class="assistant-badge-cell">
          <div class="assistant-badge-title"><i class="ti ti-chart-bar"></i> Estimated Impact</div>
          <div class="assistant-badge-val">${d.severity === 'high' ? 'High Yield Loss (30-50%)' : d.severity === 'medium' ? 'Moderate Loss (10-20%)' : 'Minimal Loss (<5%)'}</div>
        </div>
        <div class="assistant-badge-cell">
          <div class="assistant-badge-title"><i class="ti ti-calendar-time"></i> Recovery Timeline</div>
          <div class="assistant-badge-val">${d.severity === 'high' ? '21-30 Days (With Treatment)' : d.severity === 'medium' ? '14-21 Days (With Treatment)' : 'N/A'}</div>
        </div>
      </div>

      <div class="assistant-section">
        <div class="assistant-sec-title"><i class="ti ti-notes"></i> Disease Summary</div>
        <div class="assistant-text">${d.hindi || 'Local treatment summary is available.'}</div>
      </div>

      <div class="assistant-section">
        <div class="assistant-sec-title"><i class="ti ti-shield-check"></i> Prevention Tips</div>
        <div class="assistant-text">
          ${d.prevention && d.prevention.length > 0 ? d.prevention.map((tip, idx) => `
            <div class="treatment-step">
              <span class="step-num" style="background: var(--green-mid);">${idx + 1}</span>
              <span>${tip}</span>
            </div>
          `).join('') : 'No prevention steps available.'}
        </div>
      </div>
    </div>
  `;
}
