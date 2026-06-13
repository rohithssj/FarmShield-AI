// ============================================================
//  FarmShield AI — Disease Database
//  Add more diseases here following the same schema
// ============================================================

const DISEASES = {
  blight: {
    name: "Late Blight",
    sci: "Phytophthora infestans",
    crop: "Tomato",
    severity: "high",
    confidence: 91,
    spread: "Fast (2–3 days)",
    season: "Monsoon / Humid",
    symptoms: [
      "Dark water-soaked lesions",
      "White mold on leaf underside",
      "Brown decaying stems",
      "Fruit rot & discoloration"
    ],
    organic: [
      "Remove and destroy all infected leaves immediately",
      "Apply Bordeaux mixture (copper sulfate + lime) spray",
      "Improve air circulation by pruning overcrowded branches",
      "Switch to drip irrigation — avoid overhead watering"
    ],
    chemical: [
      "Mancozeb 75 WP — 2.5g per litre of water",
      "Metalaxyl + Mancozeb (Ridomil Gold) — 2g per litre",
      "Spray every 7 days during humid weather",
      "Stop all spraying 7 days before harvest"
    ],
    weather: { temp: 22, humidity: 86, wind: "12 km/h" },
    riskMsg: "High humidity (86%) creates ideal blight conditions today. Spray preventively.",
    hindi: "Aapki tamatar ki fasal mein Jhulsa Rog (Late Blight) hai. Patte kale pad rahe hain aur safed fungus dikh rahi hai. Turant infected patte hatayein aur Bordeaux mixture ka spray karein. Agar ilaj nahi kiya toh 3 din mein poori fasal kharab ho sakti hai.",
    marathi: "Tumchya tomato pikala Jhulsa Rog jhala aahe. Lagech baadhit pane kadhun taka ani Bordeaux mixture phawara ghya. Upchar na kelta 3 divsat poora pik kharab hoil."
  },

  rust: {
    name: "Stem Rust",
    sci: "Puccinia graminis",
    crop: "Wheat",
    severity: "high",
    confidence: 88,
    spread: "Moderate (5–7 days)",
    season: "Rabi (Winter)",
    symptoms: [
      "Orange-brown pustules on stems",
      "Yellow halo around pustules",
      "Premature leaf death",
      "Reduced & shrivelled grain"
    ],
    organic: [
      "Remove and burn severely infected plants",
      "Apply neem oil spray — 5ml per litre of water",
      "Plant rust-resistant varieties next season",
      "Ensure proper plant spacing for adequate airflow"
    ],
    chemical: [
      "Propiconazole 25 EC — 1ml per litre of water",
      "Tebuconazole 250 EW — 1.5ml per litre",
      "Spray at very first sign of infection",
      "Give two sprays spaced 15 days apart"
    ],
    weather: { temp: 18, humidity: 72, wind: "8 km/h" },
    riskMsg: "Temperature and humidity are favorable for rust spread. Act within 48 hours.",
    hindi: "Aapki gehun ki fasal mein Stem Rust hai. Tanon pe narangi-bhoori phunsi dikh rahi hai. Neem oil ka spray karein ya Propiconazole use karein. Yeh bahut tezi se failti hai — jaldi ilaaj zaruri hai.",
    marathi: "Tumchya gehoo pikala Stem Rust jhala aahe. Kande ani pane taranche narangi dhabbe distat. Turant Propiconazole phawara ghya. Haa aajaar lavakar parto."
  },

  mildew: {
    name: "Powdery Mildew",
    sci: "Erysiphe cichoracearum",
    crop: "Cucurbits / Grapes",
    severity: "medium",
    confidence: 84,
    spread: "Slow (7–10 days)",
    season: "Dry + Warm",
    symptoms: [
      "White powdery patches on leaves",
      "Yellowing below the patches",
      "Leaf curl and distortion",
      "Reduced photosynthesis & growth"
    ],
    organic: [
      "Mix 1 tbsp baking soda + 1L water + few drops dish soap, spray weekly",
      "Apply potassium bicarbonate solution on affected areas",
      "Use diluted milk spray — 1 part milk to 9 parts water",
      "Prune overcrowded growth to improve air circulation"
    ],
    chemical: [
      "Sulfur 80 WP — 3g per litre (avoid use above 32°C)",
      "Hexaconazole 5 EC — 2ml per litre of water",
      "Spray on both upper and lower leaf surfaces",
      "Repeat weekly for 3 consecutive weeks"
    ],
    weather: { temp: 28, humidity: 55, wind: "6 km/h" },
    riskMsg: "Warm and dry conditions are ideal for mildew. Monitor fields closely.",
    hindi: "Aapki fasal mein Powdery Mildew hai. Patton pe safed powder jaisi coating aa gayi hai. Baking soda aur paani ka spray karein ya Sulfur fungicide use karein. Yeh dheere-dheere failta hai, lekin samay pe ilaaj zaroori hai.",
    marathi: "Tumchya pikala Powdery Mildew jhala aahe. Panyat baking soda milwun phawara ghya athawa Sulfur fungicide vapra. Kiti tari pane aadhich kadhun taka."
  },

  mosaic: {
    name: "Mosaic Virus",
    sci: "Tobacco Mosaic Virus (TMV)",
    crop: "Chilli / Tobacco",
    severity: "medium",
    confidence: 79,
    spread: "Via insects (aphids)",
    season: "All seasons",
    symptoms: [
      "Mosaic-like yellow-green leaf patches",
      "Distorted and curling leaves",
      "Stunted overall plant growth",
      "Dark green blistering on leaves"
    ],
    organic: [
      "No cure exists — remove and destroy all infected plants immediately",
      "Control aphid vectors with neem oil spray (5ml per litre)",
      "Use only certified virus-free seeds in next planting",
      "Wash hands thoroughly before handling healthy plants"
    ],
    chemical: [
      "Imidacloprid 17.8 SL — 0.5ml per litre (kills aphid carriers)",
      "Thiamethoxam 25 WG — 0.3g per litre water",
      "Apply systemic insecticide at the earliest sign",
      "Repeat application after 14 days"
    ],
    weather: { temp: 30, humidity: 60, wind: "15 km/h" },
    riskMsg: "Aphid activity is high in warm weather. Vector control is critical now.",
    hindi: "Aapki fasal mein Mosaic Virus hai jo aphids (maahu keede) se failta hai. Iska koi seedha ilaaj nahi — infected paudhon ko ukhaad kar jalaa dein. Aphids ko rokne ke liye Neem oil spray karein.",
    marathi: "Tumchya pikala Mosaic Virus jhala aahe. Haa aajaar baro hot naahi — baadhit jhade kadhun taka. Mawa keedyansathi Neem oil phawara ghya ani navi laguwaad sertified bijyanpasun kara."
  },

  healthy: {
    name: "No Disease Detected",
    sci: "Plant appears healthy",
    crop: "General",
    severity: "low",
    confidence: 96,
    spread: "N/A",
    season: "Monitor regularly",
    symptoms: [
      "Uniform deep green colour",
      "No visible lesions or spots",
      "Normal healthy growth pattern",
      "No wilting or drooping"
    ],
    organic: [
      "Continue your current watering schedule",
      "Apply organic compost or vermicompost monthly",
      "Monitor crops weekly for any early warning signs",
      "Maintain proper plant spacing for good airflow"
    ],
    chemical: [
      "Preventive copper-based spray once a month",
      "Balanced NPK fertilizer as per soil test results",
      "No pesticides needed at this stage",
      "Test soil pH at the start of each season"
    ],
    weather: { temp: 25, humidity: 65, wind: "10 km/h" },
    riskMsg: "Field conditions are normal. Keep up weekly monitoring to catch early signs.",
    hindi: "Badhayi ho! Aapki fasal bilkul swasth hai. Koi bimari nahi mili. Regular monitoring jari rakhein aur har mahine organic compost dete rahein. Mausam ke badlaav ke saath dhyan rakhein.",
    marathi: "Abhinandan! Tumcha pik poorna nirogas aahe. Koi aajaar aadhallela naahi. Avashyak te paani ani khate dyat raha. Aathavdyatun ek vela tari pikachi palpahanee kara."
  }
};
