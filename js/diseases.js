// ============================================================
//  FarmShield — Expanded Disease Database
//  Contains 15 entries for simulated and offline fallback mode
// ============================================================

const DISEASE_ALIASES = {
  blight: ['late blight', 'blight', 'phytophthora infestans'],
  early_blight: ['early blight', 'alternaria solani'],
  mildew: ['powdery mildew', 'mildew', 'erysiphe'],
  downy_mildew: ['downy mildew', 'peronospora', 'pseudoperonospora'],
  rust: ['stem rust', 'rust', 'puccinia graminis'],
  leaf_rust: ['leaf rust', 'puccinia recondita'],
  yellow_rust: ['yellow rust', 'stripe rust', 'puccinia striiformis'],
  mosaic: ['mosaic', 'mosaic virus', 'tmv'],
  leaf_spot: ['leaf spot', 'cercospora capsici'],
  healthy: ['healthy plant', 'no disease', 'healthy'],
  bacterial_wilt: ['bacterial wilt', 'wilt', 'ralstonia solanacearum'],
  anthracnose: ['anthracnose', 'colletotrichum gloeosporioides'],
  black_rot: ['black rot', 'xanthomonas campestris'],
  root_rot: ['root rot', 'pythium aphanidermatum'],
  canker: ['citrus canker', 'xanthomonas axonopodis']
};

const DISEASES = {
  early_blight: {
    name: "Early Blight",
    sci: "Alternaria solani",
    crop: "Tomato / Potato",
    severity: "medium",
    confidence: 85,
    spread: "Moderate (5–7 days)",
    season: "Warm + Humid",
    symptoms: [
      "Target-like concentric brown spots on leaves",
      "Yellow halos surrounding old lesions",
      "Lower leaves drop prematurely",
      "Dark, sunken spots on tomato stems"
    ],
    organic: [
      "Remove bottom leaves to prevent soil-splash inoculation",
      "Apply organic copper-based sprays weekly",
      "Mulch soil to prevent spore transfer from ground",
      "Ensure proper watering — do not wet foliage"
    ],
    chemical: [
      "Chlorothalonil 75 WP — 2g per litre of water",
      "Azoxystrobin (Amistar) — 1ml per litre of water",
      "Apply systemic fungicide every 10–14 days",
      "Use preventative sprays during rainy periods"
    ],
    prevention: [
      "Rotate crops with non-solanaceous crops for 3 years",
      "Maintain wide plant spacing for fast leaf drying",
      "Clear all crop debris after harvest",
      "Use certified disease-resistant seeds"
    ],
    weather: { temp: 26, humidity: 75, wind: "8 km/h" },
    riskMsg: "Warm daytime temperatures with moderate humidity create moderate risks of early blight today.",
    hindi: "फसल में अगेती झुलसा (Early Blight) रोग है। पत्तियों पर छल्लेदार भूरे धब्बे बनते हैं। पौधे के निचले हिस्सों के पत्ते हटा दें, सिंचाई नियंत्रित करें, और जैविक कॉपर का छिड़काव करें। रासायनिक उपचार के लिए क्लोरोथालोनिल का उपयोग करें।",
    marathi: "पिकावर अगेती झुलसा (Early Blight) रोग आढळला आहे. पानांवर चक्राकार तपकिरी ठिपके दिसतात. खालची बाधित पाने काढून टाका आणि सेंद्रिय तांब्याची फवारणी घ्या. रासायनिक संरक्षणासाठी क्लोरोथालोनिल वापरावे."
  },

  blight: {
    name: "Late Blight",
    sci: "Phytophthora infestans",
    crop: "Tomato / Potato",
    severity: "high",
    confidence: 91,
    spread: "Fast (2–3 days)",
    season: "Monsoon / Wet + Cool",
    symptoms: [
      "Dark water-soaked lesions on leaf tips",
      "White fuzzy mold on underside of leaves in wet weather",
      "Dark brown rotting of stems and stems collapse",
      "Large, hard brown spots on tomato fruits"
    ],
    organic: [
      "Remove and destroy all infected foliage immediately",
      "Spray copper sulfate + lime mixture (Bordeaux mixture)",
      "Provide excellent air ventilation in greenhouses",
      "Switch to drip irrigation to keep leaves dry"
    ],
    chemical: [
      "Mancozeb 75 WP — 2.5g per litre of water",
      "Metalaxyl + Mancozeb (Ridomil Gold) — 2g per litre",
      "Apply spray immediately after noticing symptoms",
      "Stop chemical spraying 7 days before harvest"
    ],
    prevention: [
      "Always use certified disease-free potato tubers",
      "Avoid planting tomatoes near potato fields",
      "Destroy volunteer host plants early in the season",
      "Clean farming tools with disinfectant regularly"
    ],
    weather: { temp: 22, humidity: 86, wind: "12 km/h" },
    riskMsg: "High humidity (86%) and cool weather are critical for late blight spread. Inspect fields daily.",
    hindi: "फसल में पछेती झुलसा (Late Blight) रोग है। पत्तियों के किनारों पर काले धब्बे और नीचे सफेद फंगस दिखाई देती है। तुरंत संक्रमित हिस्सों को नष्ट करें और बोर्डो मिश्रण या रिडोमिल गोल्ड का छिड़काव करें।",
    marathi: "पिकावर पछेती झुलसा (Late Blight) रोग पसरला आहे. पानांच्या कडांवर काळे डाग व पांढरी बुरशी दिसते. बाधित भाग नष्ट करून तात्काळ रिडोमिल गोल्ड किंवा बोर्डो मिश्रणाची फवारणी करा."
  },

  leaf_spot: {
    name: "Leaf Spot",
    sci: "Cercospora capsici",
    crop: "Pepper / Chilli",
    severity: "medium",
    confidence: 80,
    spread: "Moderate (7–10 days)",
    season: "Rainy Season",
    symptoms: [
      "Circular spots with light grey centers",
      "Dark brown margins around spots",
      "Leaves turn yellow and drop",
      "Lesions merge causing large dead leaf tissue"
    ],
    organic: [
      "Prune lower infected leaves to prevent spread",
      "Apply neem oil extract spray (5ml per litre)",
      "Maintain clean cultivation free from weeds",
      "Water crops early in the morning so leaves dry fast"
    ],
    chemical: [
      "Carbendazim 50 WP — 1g per litre of water",
      "Copper Oxychloride (Blitox) — 3g per litre",
      "Spray every 10 days if symptoms persist",
      "Apply systemic triazole fungicide in severe cases"
    ],
    prevention: [
      "Space plants properly to reduce moisture buildup",
      "Perform deep summer ploughing to bury spores",
      "Cultivate certified disease-tolerant cultivars",
      "Ensure proper nitrogen fertilizer balance"
    ],
    weather: { temp: 27, humidity: 80, wind: "5 km/h" },
    riskMsg: "Persistent rainfall and leaf wetness favor Cercospora leaf spot development.",
    hindi: "मिर्च की फसल में पत्तों के धब्बे (Leaf Spot) का प्रकोप है। पत्तों पर हल्के भूरे गोल धब्बे बनते हैं। नीम के तेल का छिड़काव करें। रासायनिक नियंत्रण के लिए कार्बेन्डाजिम या कॉपर ऑक्सीक्लोराइड का छिड़काव करें।",
    marathi: "मिरचीच्या पिकावर पानावरील ठिपके (Leaf Spot) रोग आहे. पानावरील डाग रोखण्यासाठी कडुलिंबाच्या तेलाची फवारणी करा. रासायनिक संरक्षणासाठी कार्बेन्डाझिम किंवा कॉपर ऑक्सीक्लोराईड वापरा."
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
      "White powdery spots on upper and lower leaves",
      "Leaves curl upwards and wither",
      "Premature leaf senescence and fruit sunburn",
      "Stunted vine growth and poor fruit quality"
    ],
    organic: [
      "Spray diluted milk (1 part milk to 9 parts water) weekly",
      "Use potassium bicarbonate or baking soda soap spray",
      "Expose crop to full sun if possible without burning",
      "Remove highly infected host leaves promptly"
    ],
    chemical: [
      "Sulfur 80 WP — 3g per litre of water (avoid hot sun)",
      "Hexaconazole 5 EC — 2ml per litre of water",
      "Apply preventative sulfur dust before canopy closes",
      "Alternate systemic fungicides to prevent resistance"
    ],
    prevention: [
      "Select resistant hybrid varieties for planting",
      "Avoid excessive nitrogen fertilization",
      "Keep plant density low for wind movement",
      "Clean weeds that serve as alternative hosts"
    ],
    weather: { temp: 28, humidity: 55, wind: "6 km/h" },
    riskMsg: "Dry conditions with low humidity create high powdery mildew risks. Keep soil moist.",
    hindi: "फसल में चूर्णी फफूंद (Powdery Mildew) रोग है। पत्तों पर सफेद रंग की पाउडर जैसी परत जम जाती है। बेकिंग सोडा घोल का छिड़काव करें या गंधक (Sulfur) फंगीसाइड का उपयोग करें।",
    marathi: "पिकावर भुरी रोग (Powdery Mildew) आला आहे. पानांवर पांढऱ्या रंगाची पावडर पसरल्यासारखी दिसते. बेकिंग सोडा द्रावण किंवा सल्फर बुरशीनाशकाची फवारणी करा."
  },

  downy_mildew: {
    name: "Downy Mildew",
    sci: "Pseudoperonospora cubensis",
    crop: "Cucurbits / Lettuce",
    severity: "high",
    confidence: 87,
    spread: "Fast (3–5 days)",
    season: "Wet + Cool",
    symptoms: [
      "Angular yellow spots on upper leaf surfaces",
      "Spots bounded strictly by leaf veins",
      "Purple-grey downy growth on leaf underside",
      "Leaves dry out, turn brown and die rapidly"
    ],
    organic: [
      "Apply copper fungicide before humid rain storms",
      "Prune overcrowding stems to dry leaves quickly",
      "Water soil directly; strictly avoid sprinklers",
      "Use wide row crop patterns to improve aeration"
    ],
    chemical: [
      "Metalaxyl-M + Mancozeb — 2g per litre of water",
      "Cymoxanil + Mancozeb — 2g per litre of water",
      "Apply systemic curative spray within 24 hours of symptoms",
      "Rotate chemical families to preserve efficacy"
    ],
    prevention: [
      "Plant in areas with excellent wind exposure",
      "Do not cultivate cucurbits back-to-back",
      "Select varieties with partial genetic resistance",
      "Clean weeds and wild host plants around the plot"
    ],
    weather: { temp: 21, humidity: 90, wind: "14 km/h" },
    riskMsg: "High leaf wetness and humidity (>90%) are critical for Downy Mildew. Immediate spray advised.",
    hindi: "फसल में डाउनी मिल्ड्यू (Downy Mildew) रोग है। पत्तों के ऊपर पीले चौकोर धब्बे और नीचे बैंगनी बुरशी होती है। तुरंत मेटलैक्सिल युक्त दवा छिड़कें और पत्तों को सूखा रखें।",
    marathi: "पिकावर डाउनी मिल्ड्यू (Downy Mildew) रोग आहे. पानांवर पिवळे कोन आकाराचे डाग दिसतात. तात्काळ मेटलॅक्सिल किंवा मँकोझेबची फवारणी करावी व पाणी देणे थांबवावे."
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
      "Elongated orange-brown pustules on stems and leaf sheaths",
      "Pustules rupture exposing powdery spores",
      "Lodging (falling) of weak infected stems",
      "Grains are light-weight, shrivelled, and small"
    ],
    organic: [
      "Apply neem leaf extract (5%) or neem oil (5ml/L)",
      "Destroy barberry bushes near fields (alternate host)",
      "Apply wood ash to soil to build stem strength",
      "Harvest early if infection occurs late in season"
    ],
    chemical: [
      "Propiconazole 25 EC (Tilt) — 1ml per litre of water",
      "Tebuconazole 250 EW — 1.5ml per litre of water",
      "Apply systemic triazole spray at first signs",
      "Ensure uniform coverage of stems and sheaths"
    ],
    prevention: [
      "Always cultivate rust-resistant varieties",
      "Observe recommended seed rates to prevent crowding",
      "Apply optimal potassium fertilizer to strengthen tissue",
      "Avoid late sowing of wheat crops"
    ],
    weather: { temp: 18, humidity: 72, wind: "8 km/h" },
    riskMsg: "Cool winters with morning dew favor stem rust germination. Keep monitoring wheat crops.",
    hindi: "गेहूं में तना गेरुआ (Stem Rust) रोग है। तने पर नारंगी-भूरे रंग के पाउडर वाले धब्बे बनते हैं। प्रोपिकोनाजोल (Tilt) का छिड़काव करें। आसपास जंगली पौधों को हटा दें।",
    marathi: "गव्हावरील तांबेरा (Stem Rust) रोग आहे. खोडावर नारंगी-तपकिरी रंगाचे पुटकुळ्या दिसतात. तात्काळ प्रोपिकोनाझोल १ मिली प्रति लीटर पाण्यात मिसळून फवारावे."
  },

  leaf_rust: {
    name: "Leaf Rust",
    sci: "Puccinia recondita",
    crop: "Wheat",
    severity: "medium",
    confidence: 82,
    spread: "Moderate (7–10 days)",
    season: "Mild Spring",
    symptoms: [
      "Small oval orange-yellow pustules on leaf blades",
      "Pustules scattered randomly, not in lines",
      "Leaves turn yellow and dry prematurely",
      "Reduced kernel numbers per ear head"
    ],
    organic: [
      "Spray 5% neem seed kernel extract (NSKE)",
      "Remove infected leaves if limited to small patch",
      "Maintain high soil health with organic manures",
      "Sow wheat early to escape rust spores cycle"
    ],
    chemical: [
      "Propiconazole 25 EC — 1ml per litre of water",
      "Triadimefon 25 WP — 1g per litre of water",
      "Apply one spray at jointing or booting stage",
      "Repeat after 15 days if rust pustules increase"
    ],
    prevention: [
      "Sow recommended certified rust-resistant wheat seed",
      "Avoid high irrigation levels during grain filling",
      "Maintain clean borders around wheat fields",
      "Follow standard crop rotation schedules"
    ],
    weather: { temp: 20, humidity: 68, wind: "10 km/h" },
    riskMsg: "Mild weather is favorable for leaf rust development. Monitor fields during booting stages.",
    hindi: "गेहूं की फसल में पत्ती गेरुआ (Leaf Rust) रोग है। पत्तियों पर छोटे नारंगी धब्बे बनते हैं। नियंत्रण के लिए प्रोपिकोनाजोल का छिड़काव करें और संतुलित यूरिया का प्रयोग करें।",
    marathi: "गव्हावर पर्ण तांबेरा (Leaf Rust) रोग आला आहे. पानांवर विखुरलेले नारंगी ठिपके दिसतात. नियंत्रणासाठी प्रोपिकोनाझोल फवारावे आणि युरियाचा अतिवापर टाळावा."
  },

  yellow_rust: {
    name: "Yellow Rust",
    sci: "Puccinia striiformis",
    crop: "Wheat",
    severity: "high",
    confidence: 90,
    spread: "Fast (3–5 days)",
    season: "Cool Winter / Early Spring",
    symptoms: [
      "Bright yellow pustules forming stripes on leaves",
      "Chlorosis and complete yellowing of leaf blades",
      "Pustules appear on spikes and glumes in severe cases",
      "Complete crop failure if unchecked early"
    ],
    organic: [
      "Immediately rogue out early infected yellow spots",
      "Spray neem based formulation (1500 ppm) — 5ml/L",
      "Sprinkle copper sulfate solution on surrounding soil",
      "Optimize drainage to prevent microclimate moisture"
    ],
    chemical: [
      "Tebuconazole 250 EW (Folicur) — 1.5ml per litre of water",
      "Propiconazole 25 EC — 1ml per litre of water",
      "Community-level coordinated spraying is highly advised",
      "Apply chemical immediately when yellow stripes appear"
    ],
    prevention: [
      "Plant rust-resistant cultivars (like HD2967/HD3086)",
      "Cultivate mixed crops to slow disease spread",
      "Destroy volunteer wheat seedlings in summer",
      "Test soil and apply correct potassium levels"
    ],
    weather: { temp: 15, humidity: 85, wind: "11 km/h" },
    riskMsg: "Cold and damp winter mornings (15°C) are highly critical for Yellow Rust. Act urgently.",
    hindi: "गेहूं में पीला रतुआ (Yellow Rust) है। पत्तियों पर पीले रंग की धारियां बनती हैं। यह बहुत खतरनाक है। तुरंत टेबुकोनाजोल (Folicur) या प्रोपिकोनाजोल का छिड़काव करें।",
    marathi: "गव्हावरील पिवळा तांबेरा (Yellow Rust) रोग आहे. पानांवर पिवळ्या पट्ट्या दिसतात. तात्काळ टेब्युकोनाझोल किंवा प्रोपिकोनाझोल फवारावे; उशीर केल्यास पीक नष्ट होऊ शकते."
  },

  mosaic: {
    name: "Mosaic Virus",
    sci: "Tobacco Mosaic Virus (TMV)",
    crop: "Chilli / Tomato / Tobacco",
    severity: "medium",
    confidence: 79,
    spread: "Via insects (Aphids/Whiteflies)",
    season: "All Seasons",
    symptoms: [
      "Mottling of light and dark green mosaic patterns on leaves",
      "Curled, puckered, or distorted leaf shape",
      "Stunted crop growth and small distorted fruits",
      "Yellow streaks or blistering on leaf surface"
    ],
    organic: [
      "No cure: remove and burn infected plants immediately",
      "Spray neem oil (5ml/L) to control aphid vector populations",
      "Use yellow sticky traps (20 per acre) to trap whiteflies",
      "Wash hands with soap before touching healthy crops"
    ],
    chemical: [
      "Imidacloprid 17.8 SL — 0.5ml per litre (targets vector)",
      "Thiamethoxam 25 WG — 0.3g per litre of water",
      "Apply systemic insecticide at early infestation",
      "Chemicals only kill insect carriers, cannot cure virus"
    ],
    prevention: [
      "Select only certified virus-free seedling seeds",
      "Remove weeds which act as insect vector reservoirs",
      "Keep fields isolated from old infected plots",
      "Disinfect pruning knives and tools with alcohol"
    ],
    weather: { temp: 30, humidity: 60, wind: "15 km/h" },
    riskMsg: "Warm dry winds are ideal for aphid vector migration. Monitor yellow sticky traps.",
    hindi: "फसल में मोजेक वायरस (Mosaic Virus) है। पत्तियां सिकुड़ कर चितकबरी हो जाती हैं। कोई इलाज नहीं है; बीमार पौधों को उखाड़कर जला दें और कीड़ों को मारने के लिए इमिडाक्लोप्रिड छिड़कें।",
    marathi: "पिकावर मोझॅक व्हायरस (Mosaic Virus) रोग आहे. पाने आकसतात व पिवळे डाग पडतात. बाधित झाडे काढून नष्ट करा आणि मावा किंवा पांढरी माशी मारण्यासाठी इमिडाक्लोप्रिड फवारा."
  },

  bacterial_wilt: {
    name: "Bacterial Wilt",
    sci: "Ralstonia solanacearum",
    crop: "Eggplant / Tomato / Potato",
    severity: "high",
    confidence: 83,
    spread: "Fast (2–4 days)",
    season: "Hot + High Rainfall",
    symptoms: [
      "Sudden wilting of leaves during hot sunny afternoons",
      "Plants recover slightly at night initially, then wilt permanently",
      "Stems show brown discoloration when cut open",
      "White milky bacterial stream oozes from cut stems in water"
    ],
    organic: [
      "Uproot and burn infected plants instantly to protect soil",
      "Apply bleaching powder to surrounding soil holes (15g/L)",
      "Drench soil around plants with cow dung + neem cake extract",
      "Raise soil pH above 7.0 by applying agricultural lime"
    ],
    chemical: [
      "Streptocycline — 6g in 60 litres of water (100 ppm)",
      "Copper Oxychloride — 3g per litre of water",
      "Drench root zones of neighboring plants immediately",
      "Antibiotics are preventative, not curative for wilted crops"
    ],
    prevention: [
      "Ensure excellent field drainage; avoid waterlogging",
      "Rotate with non-host crops like Maize or Marigold for 3 years",
      "Avoid physical root damage during weeding/transplanting",
      "Clean tractor wheels and tillers before entering clean zones"
    ],
    weather: { temp: 32, humidity: 88, wind: "5 km/h" },
    riskMsg: "High soil temperatures (32°C) and water logging trigger severe bacterial wilt outbreak.",
    hindi: "फसल में बैक्टीरियल विल्ट (उकठा रोग) है। पौधा अचानक बिना पीला पड़े सूख जाता है। ग्रसित पौधों को उखाड़ें और बचे हुए पौधों की जड़ों में स्ट्रेप्टोसाइक्लिन का घोल डालें।",
    marathi: "पिकावर जिवाणूजन्य मर (Bacterial Wilt) रोग आला आहे. झाड अचानक सुकते. बाधित झाडे काढून नष्ट करा व शेजारील झाडांच्या मुळांशी स्ट्रेप्टोसायक्लिन ओता."
  },

  anthracnose: {
    name: "Anthracnose",
    sci: "Colletotrichum gloeosporioides",
    crop: "Mango / Chilli",
    severity: "medium",
    confidence: 86,
    spread: "Moderate (7–10 days)",
    season: "Warm + Humid / Rainy",
    symptoms: [
      "Sunken, dark circular spots on fruits and pods",
      "Pink or orange gelatinous spore masses in wet weather",
      "Dark spots on leaves with concentric rings",
      "Dieback of small branches starting from tips"
    ],
    organic: [
      "Prune and destroy dead twigs and branches",
      "Spray Pseudomonas fluorescens liquid formulation (10ml/L)",
      "Apply copper oxychloride (3g/L) during flower stages",
      "Harvest fruits gently to prevent skin wounds and rot"
    ],
    chemical: [
      "Carbendazim + Mancozeb (Saaf) — 2g per litre of water",
      "Propiconazole 25 EC — 1ml per litre of water",
      "Spray at flowering stage and fruit development",
      "Use post-harvest hot water treatment for mangoes (52°C)"
    ],
    prevention: [
      "Collect and burn all fallen leaves and rotten fruits",
      "Maintain clean field spacing to reduce leaf humidity",
      "Apply balanced potash fertilizer to strengthen fruit skin",
      "Avoid overhead sprinkler systems during fruiting"
    ],
    weather: { temp: 29, humidity: 82, wind: "6 km/h" },
    riskMsg: "Intermittent rain and high humidity (82%) favor fruit anthracnose. Protect developing pods.",
    hindi: "फसल में एन्थ्रेक्नोज (Anthracnose) रोग है। फलों पर धंसे हुए काले धब्बे बनते हैं। सड़े फलों को नष्ट करें। कार्बेन्डाजिम + मैंकोजेब (Saaf) का छिड़काव करें।",
    marathi: "फळांवर करपा (Anthracnose) रोग पसरला आहे. फळांवर खोल काळे डाग पडतात. डागळलेली फळे गोळा करून नष्ट करा व साफ (Saaf) बुरशीनाशक फवारा."
  },

  black_rot: {
    name: "Black Rot",
    sci: "Xanthomonas campestris",
    crop: "Cabbage / Cauliflower",
    severity: "high",
    confidence: 81,
    spread: "Moderate (7–10 days)",
    season: "Warm + Wet",
    symptoms: [
      "V-shaped yellow lesions starting from leaf margins",
      "Blackening of leaf veins and vascular tissue",
      "Foul smelling soft rot of cabbage heads",
      "Leaves turn yellow, dry, and fall down"
    ],
    organic: [
      "Drench soil with biocontrol agent Trichoderma viride",
      "Spray garlic bulb extract solution (5%) as bactericide",
      "Uproot and bury highly infected cabbage plants early",
      "Keep field clear of cruciferous weeds like wild mustard"
    ],
    chemical: [
      "Streptocycline — 1g in 10 litres of water",
      "Copper Oxychloride (Blitox) — 3g per litre water",
      "Apply copper and antibiotic mixture every 12 days",
      "Spray early in the morning for best bacterial control"
    ],
    prevention: [
      "Perform hot water seed treatment (50°C for 30 minutes)",
      "Maintain a 3-year crop rotation without crucifers",
      "Avoid working in fields when foliage is wet",
      "Ensure field drainage is optimal to avoid standing water"
    ],
    weather: { temp: 28, humidity: 85, wind: "8 km/h" },
    riskMsg: "High moisture and warm weather favor vascular black rot spread. Keep leaves dry.",
    hindi: "पत्तागोभी में ब्लैक रॉट (Black Rot) जीवाणु रोग है। पत्तियों पर वी-आकार (V-Shape) के पीले धब्बे बनते हैं। स्ट्रेप्टोसाइक्लिन दवा का छिड़काव करें और जल निकासी सुधारें।",
    marathi: "कोबी पिकावर काळी कुज (Black Rot) जिवाणू रोग आहे. पानांच्या कडांवर व्ही (V) आकाराचे पिवळे डाग दिसतात. नियंत्रणासाठी स्ट्रेप्टोसायक्लिनची फवारणी करावी."
  },

  root_rot: {
    name: "Root Rot",
    sci: "Pythium aphanidermatum",
    crop: "Ginger / Onion / Legumes",
    severity: "high",
    confidence: 84,
    spread: "Moderate (5–7 days)",
    season: "Heavy Monsoon",
    symptoms: [
      "Yellowing of leaves starting from bottom tips",
      "Soft, watery decay of roots and rhizomes",
      "Foul smelling soil and plant collapses easily",
      "Stunted growth and roots easily pull apart"
    ],
    organic: [
      "Apply Trichoderma harzianum mixed with neem cake to soil",
      "Drench root zones with fermented buttermilk solution",
      "Ensure raised planting beds (15–20cm high) for runoff",
      "Rogue out decaying yellow plants immediately"
    ],
    chemical: [
      "Metalaxyl 8% + Mancozeb 64% — 2g per litre of water",
      "Fosetyl-Al (Aliette) — 2g per litre of water",
      "Apply soil drenching directly in root zone",
      "Repeat application after heavy rain cycles"
    ],
    prevention: [
      "Avoid planting in clayey, poorly drained soils",
      "Select healthy, disease-free seed rhizomes/roots",
      "Apply solarization treatments to soil during hot summers",
      "Maintain balanced soil nutrition with organic carbon"
    ],
    weather: { temp: 25, humidity: 95, wind: "4 km/h" },
    riskMsg: "Heavy monsoon and waterlogged soil (95% humidity) trigger pythium root rot. Drench roots.",
    hindi: "फसल में जड़ गलन (Root Rot) का प्रकोप है। पत्तियां पीली पड़ जाती हैं और जड़ें सड़कर गल जाती हैं। ट्राइकोडर्मा जैविक फफूंदनाशक मिट्टी में मिलाएं या मेटलैक्सिल का छिड़काव करें।",
    marathi: "पिकाच्या मुळांची कुज (Root Rot) रोग आहे. पाने पिवळी पडतात व मुळे सडतात. ट्रायकोडेर्मा जमिनीत मिसळावा किंवा मेटलॅक्सिलचे पाणी मुळांपाशी ओतावे."
  },

  canker: {
    name: "Citrus Canker",
    sci: "Xanthomonas axonopodis",
    crop: "Lemon / Citrus Fruits",
    severity: "medium",
    confidence: 89,
    spread: "Moderate (7–10 days)",
    season: "Windy + Monsoon Rain",
    symptoms: [
      "Raised, corky brown lesions on leaves and twigs",
      "Lesions surrounded by prominent yellow halo",
      "Corky dry eruptions on lemon fruit skins",
      "Premature drop of lemons and twig dieback"
    ],
    organic: [
      "Prune affected twigs and spray Bordeaux mixture (1%)",
      "Spray neem oil formulation (10ml/L) to control leafminers",
      "Apply copper oxychloride at monthly intervals in monsoon",
      "Remove alternative rutaceous weeds near orchards"
    ],
    chemical: [
      "Streptocycline — 1.5g in 10 litres of water",
      "Copper Oxychloride (Blitox) — 3g per litre water",
      "Prune before spraying chemicals for maximum efficacy",
      "Repeat spray 3 times spaced 20 days apart in rains"
    ],
    prevention: [
      "Control leafminer larvae as they create wounds for bacteria",
      "Plant windbreak trees around the citrus orchard",
      "Sow resistant citrus seedlings",
      "Disinfect all pruning tools before shifting trees"
    ],
    weather: { temp: 30, humidity: 78, wind: "18 km/h" },
    riskMsg: "Windy rains (18 km/h) spread canker bacteria rapidly across citrus orchards. Control leafminers.",
    hindi: "नींबू की फसल में कैंकर (Citrus Canker) रोग है। पत्तियों और फलों पर उभरे हुए खुरदरे धब्बे बनते हैं। ग्रसित टहनियों को काटें और बोर्डो मिश्रण या स्ट्रेप्टोसाइक्लिन का छिड़काव करें।",
    marathi: "लिंबू पिकावर देवी रोग (Citrus Canker) आहे. पानांवर व फळांवर खडबडीत तांबूस डाग दिसतात. बाधित फांद्या छाटून नष्ट करा व बोर्डो मिश्रणाची फवारणी करा."
  },

  healthy: {
    name: "Healthy Plant",
    sci: "No disease detected",
    crop: "General",
    severity: "low",
    confidence: 96,
    spread: "N/A",
    season: "Monitor regularly",
    symptoms: [
      "Deep green uniform foliage",
      "No visible spots, mold, or discoloration",
      "Stems are sturdy and erect",
      "Normal growth with vibrant roots"
    ],
    organic: [
      "Maintain scheduled deep watering based on soil type",
      "Apply well-decomposed farmyard manure monthly",
      "Examine plants weekly for early insect activity",
      "Prune lower leaves to maintain ground clearance"
    ],
    chemical: [
      "No chemical fungicides or bactericides needed",
      "Apply balanced NPK fertilizer as per soil test cards",
      "Sprinkle micronutrients once during growth stages",
      "Ensure weed-free growth zones around root bases"
    ],
    prevention: [
      "Follow standard crop rotations every season",
      "Keep field borders clean from wild weeds",
      "Clean farming machinery after every use",
      "Test soil health parameters annually"
    ],
    weather: { temp: 25, humidity: 65, wind: "10 km/h" },
    riskMsg: "Weather and soil parameters are standard. Keep up regular field monitoring.",
    hindi: "बधाई हो! आपका पौधा बिल्कुल स्वस्थ और सुरक्षित है। कोई बीमारी नहीं पाई गई। नियमित खाद पानी देते रहें और साप्ताहिक निरीक्षण जारी रखें।",
    marathi: "अभिनंदन! तुमचे पीक पूर्णपणे निरोगी आणि सुरक्षित आहे. कोणताही रोग आढळलेला नाही. वेळेवर खत-पाणी द्या व पिकाचे नियमित निरीक्षण करत राहा."
  }
};
