// ============================================================
//  FarmShield AI — App Logic
// ============================================================

let selectedSample = null;
let uploadedImage  = false;

// ── File Upload ─────────────────────────────────────────────
document.getElementById('fileInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (ev) {
    document.getElementById('previewImg').src = ev.target.result;
    document.getElementById('previewArea').style.display = 'block';
    document.getElementById('uploadZone').style.display  = 'none';
    uploadedImage  = true;
    selectedSample = 'blight'; // default disease for uploaded image demo
    document.getElementById('detectBtn').disabled = false;
    document.querySelectorAll('.sample-chip').forEach(c => c.classList.remove('active'));
    document.getElementById('resultCard').style.display = 'none';
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
  // Hide preview if it was showing
  if (!uploadedImage) {
    document.getElementById('previewArea').style.display = 'none';
    document.getElementById('uploadZone').style.display  = 'block';
  }
}

// ── Reset Upload ─────────────────────────────────────────────
function resetUpload() {
  document.getElementById('previewArea').style.display = 'none';
  document.getElementById('uploadZone').style.display  = 'block';
  document.getElementById('fileInput').value = '';
  uploadedImage  = false;
  selectedSample = null;
  document.getElementById('detectBtn').disabled = true;
  document.getElementById('resultCard').style.display = 'none';
  document.querySelectorAll('.sample-chip').forEach(c => c.classList.remove('active'));
}

// ── Detection Flow ────────────────────────────────────────────
function detect() {
  const btn = document.getElementById('detectBtn');
  const lb  = document.getElementById('loadingBar');
  const lf  = document.getElementById('loadingFill');
  const lt  = document.getElementById('loadingText');

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span>&nbsp; Analyzing...';
  lb.style.display = 'block';
  document.getElementById('resultCard').style.display = 'none';

  const steps = [
    'Preprocessing image...',
    'Extracting leaf features...',
    'Running disease model...',
    'Generating treatment plan...',
    'Done!'
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i < steps.length) {
      lt.textContent    = steps[i];
      lf.style.width    = ((i + 1) / steps.length * 100) + '%';
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        lb.style.display  = 'none';
        lf.style.width    = '0';
        btn.disabled      = false;
        btn.innerHTML     = '<i class="ti ti-microscope"></i> Detect Disease';
        showResult(selectedSample || 'blight');
      }, 400);
    }
  }, 520);
}

// ── Render Result Card ────────────────────────────────────────
function showResult(key) {
  const d        = DISEASES[key];
  const sevClass = d.severity === 'high'   ? 'sev-high'
                 : d.severity === 'medium' ? 'sev-medium'
                 :                           'sev-low';
  const sevLabel = d.severity === 'high'   ? 'High Risk'
                 : d.severity === 'medium' ? 'Moderate'
                 :                           'Healthy';

  const card = document.getElementById('resultCard');

  card.innerHTML = `
    <!-- Header -->
    <div class="result-header">
      <div>
        <div class="disease-name">${d.name}</div>
        <div class="disease-sci">${d.sci} &middot; ${d.crop}</div>
      </div>
      <span class="severity-badge ${sevClass}">${sevLabel}</span>
    </div>

    <!-- Confidence -->
    <div class="confidence-row">
      <div class="conf-label">
        <span>AI Confidence Score</span>
        <strong>${d.confidence}%</strong>
      </div>
      <div class="conf-track">
        <div class="conf-fill" style="width: ${d.confidence}%"></div>
      </div>
    </div>

    <!-- Info Grid -->
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

    <!-- Symptoms -->
    <div class="section">
      <div class="sec-title"><i class="ti ti-eye"></i> Symptoms observed</div>
      <div class="symptom-tags">
        ${d.symptoms.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>

    <!-- Weather -->
    <div class="section">
      <div class="sec-title"><i class="ti ti-cloud"></i> Field weather conditions</div>
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

    <!-- Treatment -->
    <div class="section">
      <div class="sec-title"><i class="ti ti-medicine-syrup"></i> Treatment plan</div>
      <div class="treatment-tabs">
        <button class="t-tab active" onclick="switchTab(this, 'organic',  '${key}')">🌿 Organic</button>
        <button class="t-tab"        onclick="switchTab(this, 'chemical', '${key}')">⚗️ Chemical</button>
      </div>
      <div id="treatContent">${renderSteps(d.organic)}</div>
    </div>

    <!-- Language -->
    <div class="section">
      <div class="sec-title"><i class="ti ti-language"></i> Local language summary</div>
      <div class="lang-row">
        <button class="lang-btn active"  onclick="switchLang(this, 'hindi',   '${key}')">हिंदी</button>
        <button class="lang-btn"         onclick="switchLang(this, 'marathi', '${key}')">मराठी</button>
      </div>
      <div class="lang-output" id="langOutput">${d.hindi}</div>
    </div>

    <!-- Share -->
    <div class="share-row">
      <button class="share-btn" onclick="copyResult('${key}')">
        <i class="ti ti-copy"></i> Copy Report
      </button>
      <button class="share-btn" onclick="shareWhatsApp('${key}')">
        <i class="ti ti-brand-whatsapp"></i> Share on WhatsApp
      </button>
    </div>
  `;

  card.style.display = 'block';
  window._currentKey = key;
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── Helpers ───────────────────────────────────────────────────
function renderSteps(arr) {
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
  document.getElementById('treatContent').innerHTML = renderSteps(DISEASES[key][type]);
}

function switchLang(el, lang, key) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('langOutput').textContent = DISEASES[key][lang];
}

function copyResult(key) {
  const d = DISEASES[key];
  const text = `FarmShield AI Report\n\nDisease: ${d.name}\nCrop: ${d.crop}\nSeverity: ${d.severity.toUpperCase()}\nConfidence: ${d.confidence}%\n\nTreatment:\n${d.organic.map((s,i) => `${i+1}. ${s}`).join('\n')}`;
  navigator.clipboard.writeText(text).then(() => {
    alert('Report copied to clipboard!');
  }).catch(() => {
    alert('Could not copy. Please copy manually.');
  });
}

function shareWhatsApp(key) {
  const d = DISEASES[key];
  const msg = encodeURIComponent(`🌱 FarmShield AI Alert!\n\n🔍 Disease: ${d.name}\n🌾 Crop: ${d.crop}\n⚠️ Severity: ${d.severity.toUpperCase()}\n📊 Confidence: ${d.confidence}%\n\nTreatment: ${d.organic[0]}\n\nDetected by FarmShield AI`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}
