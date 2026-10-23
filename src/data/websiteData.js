// ==========================================================================
// AMBA ENTERPRISES - DATA DICTIONARY & KNOWLEDGE BASE
// Extracted from original technical documentation & catalogs
// ==========================================================================

export const COMPANY_INFO = {
  name: "Amba Enterprises",
  legalName: "Amba Enterprises Industrial Heating & Combustion Engineers",
  tagline: "Industrial Boilers, Precision Burners & Thermal Energy Engineering",
  foundedYear: 1992,
  experienceYears: "30+",
  founder: "Mr. S. Ganesan (Ex-IAEC India Ltd., 25+ Yrs Prior Engineering Experience)",
  address: "Station Plaza, C-130, Bhandup Station Rd, Bhandup (W), Mumbai, Maharashtra 400078",
  phone: "+91 22 2596 0000 / +91 98200 00000",
  whatsapp: "+919820000000",
  email: "sales@ambaenterprises.com / info@ambaenterprises.com",
  certifications: ["ISO 9001:2015", "BVQI Certified", "DVGW Standards", "IBR Approved", "VDE Certified"],
  partners: [
    { name: "TERMO ISI", origin: "Turkey", role: "Authorized Sales & Service Partner - Industrial Burners" },
    { name: "OERTLI", origin: "Switzerland", role: "Specialized Oil & Gas Fired Combustion Systems" },
    { name: "CETIK ISI", origin: "Turkey", role: "Authorized Dealer - High-Capacity Hot Water Generators" },
    { name: "HP Technik", origin: "Germany", role: "High-Pressure Plunger & Fuel Oil Gear Pumps" }
  ]
};

export const PRODUCT_CATEGORIES = [
  {
    id: "burners",
    name: "Industrial Burners",
    category: "Combustion",
    shortDesc: "High-efficiency Monobloc and Duobloc burners for Light Oil, Heavy Oil, Natural Gas, and Dual-Fuel applications.",
    image: "/assets/products/Industrial_Burners.jpg",
    catalogPdf: "/assets/catalogs/Catlogue1.pdf",
    range: "15 kW to 25,000 kW (12,000 to 21,500,000 kcal/hr)",
    turndown: "Up to 1:10 (Electronic Modulation)",
    fuelTypes: ["Light Oil (LDO / HSD)", "Heavy Oil (Furnace Oil / LSHS)", "Natural Gas / LPG / Biogas", "Dual Fuel (Oil/Gas)"],
    features: [
      "Integrated or external combustion air fan options (Monobloc & Duobloc)",
      "Digital electronic modulation with independent air/fuel servo actuators",
      "Low-NOx design complying with stringent global emission norms",
      "Direct digital flame monitoring and microprocessor burner management"
    ],
    models: [
      { code: "MB-OIL-150", name: "Monobloc Light Oil Burner", capacity: "15 - 350 kW", fuel: "HSD / LDO", pdf: "/assets/catalogs/Light Oil Burners.pdf" },
      { code: "MB-GAS-500", name: "Monobloc Natural Gas Burner", capacity: "50 - 1,200 kW", fuel: "Natural Gas / LPG", pdf: "/assets/catalogs/Gas Burners (edited).pdf" },
      { code: "MB-DUAL-1800", name: "Monobloc Dual Fuel Burner", capacity: "180 - 2,500 kW", fuel: "Oil + Gas Combination", pdf: "/assets/catalogs/Dual Burners.pdf" },
      { code: "DB-IND-10000", name: "Duobloc Heavy Industrial Burner", capacity: "1,000 - 25,000 kW", fuel: "Heavy Oil / Gas / Dual", pdf: "/assets/catalogs/Catloge1.pdf" }
    ]
  },
  {
    id: "boilers",
    name: "Steam Boilers (IBR & Non-IBR)",
    category: "Steam Systems",
    shortDesc: "Robust packaged steam boilers engineered for maximum steam purity, low fuel consumption, and full IBR compliance.",
    image: "/assets/products/IBR-Steam-Boiler.jpg",
    catalogPdf: "/assets/catalogs/Catlogue2.pdf",
    range: "100 kg/hr to 25,000 kg/hr (0.1 to 25 TPH)",
    pressure: "10.54 to 32 kg/cm² (150 to 450 PSI)",
    fuelTypes: ["Coal / Lignite", "Biomass Briquettes / Wood", "Furnace Oil / LDO", "Natural Gas"],
    features: [
      "Three-pass wet-back design minimizing thermal radiation losses",
      "Fully compliant with Indian Boiler Regulations (IBR 1950 & Amendments)",
      "Generates clean dry saturated steam at up to 98% dryness fraction",
      "Non-IBR compact coil-type options requiring no statutory boiler attendant"
    ],
    models: [
      { code: "IBR-SFB-3TPH", name: "Solid Fuel Fired IBR Boiler", capacity: "1.0 - 10.0 TPH", fuel: "Coal / Wood / Briquettes", pdf: "/assets/catalogs/Catlogue2.pdf" },
      { code: "IBR-OGF-5TPH", name: "Oil / Gas Fired Package Boiler", capacity: "0.5 - 20.0 TPH", fuel: "Furnace Oil / Natural Gas", pdf: "/assets/catalogs/Catlogue3.pdf" },
      { code: "NON-IBR-600", name: "Instant Coil Steam Generator (Non-IBR)", capacity: "100 - 600 kg/hr", fuel: "LDO / Gas", pdf: "/assets/catalogs/Catlogue4.pdf" }
    ]
  },
  {
    id: "heaters",
    name: "Thermic Fluid Heaters",
    category: "Process Heat",
    shortDesc: "High-temperature thermic oil heaters delivering up to 300°C fluid temperature at near atmospheric operating pressure.",
    image: "/assets/products/Thermic-Fluid-Heater.jpg",
    catalogPdf: "/assets/catalogs/Catlogue5_compressed.pdf",
    range: "100,000 to 5,000,000 kcal/hr",
    temperature: "Operating up to 300°C",
    fuelTypes: ["Solid Fuels (Briquettes/Wood/Coal)", "Liquid Fuels (Furnace Oil/LDO)", "Natural Gas"],
    features: [
      "Multi-start concentric spiral coils guaranteeing uniform heat flux",
      "Eliminates high-pressure water treatment and blowdown losses",
      "Safety interlocks for low oil flow, high stack temperature, and flame failure",
      "Therminol 55 compatible heat transfer fluid circuit"
    ],
    models: [
      { code: "TFH-SOLID-500", name: "Solid Fuel Thermic Fluid Heater", capacity: "200k - 2,500k kcal/hr", fuel: "Briquettes / Coal", pdf: "/assets/catalogs/Catlogue5_compressed.pdf" },
      { code: "TFH-OIL-1000", name: "Oil/Gas Fired Thermic Heater", capacity: "100k - 5,000k kcal/hr", fuel: "FO / Gas / Dual", pdf: "/assets/catalogs/Catlogue5.pdf" }
    ]
  },
  {
    id: "generators",
    name: "Hot Water & Air Generators",
    category: "Thermal Air & Water",
    shortDesc: "Direct and indirect fired hot air generators for drying plants and modular hot water generators (HWG R1-R7).",
    image: "/assets/products/Hot-Air-Generator.jpg",
    catalogPdf: "/assets/catalogs/Industrial HAG.pdf",
    range: "50,000 to 3,000,000 kcal/hr | Air temp up to 450°C",
    applications: ["Food & Spray Dryers", "Pharmaceutical Fluid Bed Dryers", "Hotels & Laundries", "Chemical Batch Reactors"],
    features: [
      "Direct fired for 99% thermal efficiency or Indirect for 100% clean air",
      "Fully automated burner sequencing with digital temperature controllers",
      "HWG modular heating loops with stainless steel heat exchange options",
      "Compact footprint with minimal installation civil work required"
    ],
    models: [
      { code: "HAG-IND-CLEAN", name: "Indirect Clean Hot Air Generator", capacity: "100k - 2,000k kcal/hr", temp: "Up to 350°C", pdf: "/assets/catalogs/Industrial HAG.pdf" },
      { code: "HWG-R6-GAS", name: "Cetik ISI Hot Water Generator", capacity: "50k - 1,500k kcal/hr", temp: "90°C", pdf: "/assets/catalogs/Catlogue6_compressed.pdf" }
    ]
  },
  {
    id: "spares",
    name: "Genuine Spares & Accessories",
    category: "Components",
    shortDesc: "Complete inventory of certified replacement spares for all major industrial boiler and burner models.",
    image: "/assets/products/Spare-Parts-Modulating-Mechanism.jpg",
    catalogPdf: "/assets/catalogs/Catloge6.pdf",
    range: "OEM Spec Direct Replacements",
    categories: ["Combustion Controls", "High-Pressure Pumps", "Electrodes & Ignition", "Valves & Regulators"],
    features: [
      "Authorized distributor for HP Technik (Germany) industrial fuel pumps",
      "Precision modulating servo motors and mechanical linkages",
      "Ceramic high-dielectric ignition electrodes and electronic transformers",
      "Aderco fuel oil combustion additives for slag prevention and soot reduction"
    ],
    models: [
      { code: "SPR-HP-PUMP", name: "HP Technik Fuel Oil Gear Pump", type: "High-Pressure Oil Delivery", origin: "Germany" },
      { code: "SPR-MOD-SERVO", name: "Electronic Modulating Actuator", type: "Precision Air/Fuel Ratio Control", origin: "Europe" },
      { code: "SPR-IGN-ELEC", name: "Heavy Duty Ignition Electrode Assembly", type: "High Voltage Spark Generation", origin: "OEM" },
      { code: "SPR-NOZ-DIFF", name: "Atomizing Oil Nozzle & Diffuser Plate", type: "Micro-Spray Pattern Optimization", origin: "Europe" }
    ]
  }
];

export const ENERGY_CONSERVATION_METRICS = [
  {
    title: "Excess Oxygen Optimization",
    metric: "3% - 6% Fuel Reduction",
    desc: "Tuning burner air damper ratios to reduce excess O2 from 6% down to 2-3%, significantly slashing heat lost through the flue stack.",
    formula: "Stack Loss = (Flue Temp - Ambient Temp) × (0.0035 + 0.0001 × O2%)"
  },
  {
    title: "Direct Digital Combustion Control",
    metric: "2% - 4% Efficiency Gain",
    desc: "Replacing sloppy mechanical cam and rod linkages with independent microprocessor-controlled servo actuators on fuel and air valves.",
    formula: "Zero mechanical hysteresis; precision air/fuel indexing at 0.1° resolution"
  },
  {
    title: "Flue Gas Analysis & Heat Recovery",
    metric: "10% - 15% Total Energy Savings",
    desc: "Routine online combustion testing coupled with air preheaters or boiler economizers to extract waste enthalpy before chimney exhaust.",
    formula: "Every 20°C drop in flue gas temperature yields ~1% boiler thermal efficiency gain"
  },
  {
    title: "High Turn-Down Ratio Burners",
    metric: "Up to 1:10 Modulation",
    desc: "Enables burners to seamlessly track low plant loads without frequent on/off purge cycles that blow chilled ambient air through hot boiler passes.",
    formula: "Eliminates ~500,000 kJ of purge heat loss per cycle"
  }
];

export const CLIENT_SECTORS = [
  { name: "Textile & Dyeing", icon: "Shirt", desc: "High-volume steam for processing, stenters, dyeing vessels, and yarn sizing." },
  { name: "Pharmaceuticals", icon: "Pill", desc: "Ultra-pure indirect hot air for fluid bed dryers, clean steam for autoclaves." },
  { name: "Chemical Processing", icon: "FlaskConical", desc: "High temperature thermic fluid heating for polymerization and batch reactors." },
  { name: "Food & Commercial Bakery", icon: "Wheat", desc: "Precision baking oven heating, spray drying, and dairy pasteurization." },
  { name: "Petrochemicals & Distilleries", icon: "Fuel", desc: "Heavy oil duobloc combustion, asphalt drying, and distillation steam." }
];

export const INSTALLATION_CASE_STUDIES = [
  {
    title: "3 TPH Solid Fuel Boiler Installation",
    sector: "Textile Process House",
    location: "Tarapur MIDC, Maharashtra",
    image: "/assets/products/IBR Boiler.jpg",
    specs: "3,000 kg/hr steam at 10.54 kg/cm²",
    outcome: "Reduced daily steam cost by 18% through automated biomass stoker feeding."
  },
  {
    title: "High-Temperature Dual-Fuel Burner Retrofit",
    sector: "Specialty Chemical Plant",
    location: "Taloja Industrial Area, Navi Mumbai",
    image: "/assets/products/Industrial_Burners.jpg",
    specs: "5,000 kW Natural Gas & Light Oil Duobloc",
    outcome: "Achieved sub-60 mg/Nm³ NOx emission levels with digital micro-modulation."
  },
  {
    title: "Thermic Fluid Heating Station with HP Technik Pumps",
    sector: "Polymer Processing",
    location: "Vapi GIDC, Gujarat",
    image: "/assets/products/Thermic-Fluid-Heater.jpg",
    specs: "2,000,000 kcal/hr at 280°C constant output",
    outcome: "Eliminated unplanned boiler downtime with German heavy-duty pumping system."
  }
];
