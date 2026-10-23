// ==========================================================================
// AMBA ENTERPRISES - MASTER TECHNICAL DATA & ENGINEERING SPECIFICATIONS
// Synthesis of Oxilon Burners, Hi-Therm Boilers, Energy Pack & Narayan Burners
// ==========================================================================

export const COMPANY_INFO = {
  name: "Amba Enterprises",
  legalName: "Amba Enterprises Industrial Heating & Combustion Engineers",
  tagline: "Industrial Boilers, Precision Burners & Thermal Energy Engineering",
  foundedYear: 1992,
  experienceYears: "30+",
  founder: "Mr. S. Ganesan (Ex-IAEC India Ltd., 25+ Yrs Prior Thermal Engineering Experience)",
  address: "Station Plaza, C-130, Bhandup Station Rd, Bhandup (W), Mumbai, Maharashtra 400078",
  phone: "+91 22 2596 0000 / +91 98200 00000",
  whatsapp: "+919820000000",
  email: "sales@ambaenterprises.com",
  certifications: ["ISO 9001:2015", "BVQI Certified", "DVGW Standards", "IBR 1950 Approved", "VDE Electrical Safety"],
  serviceHubs: ["Mumbai (HQ & Works)", "Tarapur MIDC", "Taloja MIDC", "Vapi GIDC", "Surat & Ahmedabad"],
  partners: [
    { 
      name: "TERMO ISI", 
      origin: "Turkey", 
      role: "Authorized Sales & Service Partner - Monobloc & Duobloc Industrial Burners",
      cert: "DVGW & CE Approved"
    },
    { 
      name: "OERTLI", 
      origin: "Switzerland", 
      role: "High-Precision Low-NOx Combustion Systems & Dual Fuel Burners",
      cert: "Swiss Precision Standard"
    },
    { 
      name: "CETIK ISI", 
      origin: "Turkey", 
      role: "Authorized Dealer - High-Capacity Hot Water Generators (HWG Series)",
      cert: "TSE & ISO Certified"
    },
    { 
      name: "HP Technik", 
      origin: "Germany", 
      role: "Sole Channel Partner - High-Pressure Industrial Plunger & Gear Fuel Pumps",
      cert: "DIN EN ISO 9001"
    }
  ]
};

// ==========================================================================
// DETAILED BURNER SPECIFICATIONS (OXILON & NARAYAN BENCHMARK)
// ==========================================================================
export const BURNER_SERIES = [
  {
    id: "monobloc-gas",
    name: "Monobloc Gas Burners (Natural Gas / LPG / Biogas)",
    category: "Monobloc",
    capacityKw: "35 - 3,500 kW",
    capacityKcal: "30,000 - 3,000,000 kcal/hr",
    turndown: "1:5 (Modulating / High-Low)",
    fuel: "Natural Gas (20-300 mbar), LPG, Propane, Biogas",
    image: "/assets/products/gas_burner.jpg",
    pdf: "/assets/catalogs/Gas Burners (edited).pdf",
    features: [
      "Integrated high-static combustion air blower with sound-dampened housing",
      "Gas train complying with EN 676: Double solenoid valves, gas filter, pressure regulator, and leak detector",
      "Low-NOx burner head design achieving < 60 mg/kWh",
      "Ionization probe flame monitoring with microprocessor burner controller"
    ],
    models: [
      { code: "MBG-15", minKw: 35, maxKw: 175, minGas: 3.5, maxGas: 17.5, connection: "Rp 1\"", blastTubeDia: 120 },
      { code: "MBG-35", minKw: 80, maxKw: 380, minGas: 8.0, maxGas: 38.0, connection: "Rp 1.5\"", blastTubeDia: 145 },
      { code: "MBG-70", minKw: 150, maxKw: 750, minGas: 15.0, maxGas: 75.0, connection: "DN 50", blastTubeDia: 180 },
      { code: "MBG-150", minKw: 300, maxKw: 1600, minGas: 30.0, maxGas: 160.0, connection: "DN 65", blastTubeDia: 225 },
      { code: "MBG-300", minKw: 600, maxKw: 3500, minGas: 60.0, maxGas: 350.0, connection: "DN 80", blastTubeDia: 310 }
    ]
  },
  {
    id: "monobloc-oil",
    name: "Monobloc Light & Heavy Oil Burners",
    category: "Monobloc",
    capacityKw: "25 - 3,200 kW",
    capacityKcal: "21,500 - 2,750,000 kcal/hr",
    turndown: "1:4 (Pressure Atomizing / Return Flow)",
    fuel: "Light Diesel Oil (HSD/LDO) & Heavy Furnace Oil (with pre-heater)",
    image: "/assets/products/light_oilburner.jpg",
    pdf: "/assets/catalogs/Light Oil Burners.pdf",
    features: [
      "German HP Technik high-pressure oil pump with built-in pressure regulating valve",
      "High-efficiency electric oil pre-heater with ceramic heating elements for Heavy Oil",
      "Spill-back nozzle atomization providing ultra-fine droplet spectrum (< 40 microns)",
      "Hydraulic air shutter control preventing standby cooling losses"
    ],
    models: [
      { code: "MBO-20", minKw: 25, maxKw: 210, minOil: 2.1, maxOil: 18.0, pumpPress: "12-18 bar", nozzleQty: "1 Nozzle" },
      { code: "MBO-50", minKw: 70, maxKw: 550, minOil: 6.0, maxOil: 47.0, pumpPress: "14-22 bar", nozzleQty: "2 Stage" },
      { code: "MBO-100", minKw: 180, maxKw: 1150, minOil: 15.0, maxOil: 98.0, pumpPress: "20-25 bar", nozzleQty: "3 Stage / Mod" },
      { code: "MBO-250", minKw: 450, maxKw: 2800, minOil: 38.0, maxOil: 238.0, pumpPress: "25-28 bar", nozzleQty: "Spillback Mod" }
    ]
  },
  {
    id: "monobloc-dual",
    name: "Monobloc Dual Fuel Burners (Oil + Gas)",
    category: "Monobloc",
    capacityKw: "150 - 3,500 kW",
    capacityKcal: "130,000 - 3,000,000 kcal/hr",
    turndown: "1:5",
    fuel: "Natural Gas / LPG + Light Oil or Heavy Oil",
    image: "/assets/products/dual_burner.jpg",
    pdf: "/assets/catalogs/Dual Burners.pdf",
    features: [
      "Seamless fuel changeover switch without extinguishing fire or stopping plant processes",
      "Independent combustion heads optimized for both gaseous and liquid fuels",
      "Electronic micro-modulation servo motors for exact air-to-fuel calibration",
      "Fully interlocked safety systems meeting international EN 267 and EN 676 codes"
    ],
    models: [
      { code: "MBD-60", minKw: 150, maxKw: 650, gasCons: "15-65 SCM/h", oilCons: "13-55 kg/h" },
      { code: "MBD-120", minKw: 280, maxKw: 1350, gasCons: "28-135 SCM/h", oilCons: "24-115 kg/h" },
      { code: "MBD-250", minKw: 500, maxKw: 2750, gasCons: "50-275 SCM/h", oilCons: "42-233 kg/h" }
    ]
  },
  {
    id: "duobloc-industrial",
    name: "Duobloc Heavy Industrial Burners (Up to 25 MW)",
    category: "Duobloc",
    capacityKw: "1,000 - 25,000 kW",
    capacityKcal: "860,000 - 21,500,000 kcal/hr",
    turndown: "Up to 1:10 (Precision Digital VFD)",
    fuel: "Natural Gas, Heavy Furnace Oil, LDO, Biogas, Dual Fuel",
    image: "/assets/products/Industrial_Burners.jpg",
    pdf: "/assets/catalogs/DUOBLOC BURNER.doc",
    features: [
      "Separately mounted heavy-duty combustion air fan with VFD motor speed modulation",
      "Capable of handling high combustion air preheat temperatures up to 250°C",
      "Suited for high furnace counter-pressures up to 45 mbar",
      "Direct Digital Combustion Control with oxygen trim and flue gas monitoring"
    ],
    models: [
      { code: "DB-5000", minKw: 1000, maxKw: 5500, airFanPower: "11 kW", fanPressure: "28 mbar" },
      { code: "DB-12000", minKw: 2500, maxKw: 12500, airFanPower: "30 kW", fanPressure: "38 mbar" },
      { code: "DB-25000", minKw: 4500, maxKw: 25000, airFanPower: "55 kW", fanPressure: "45 mbar" }
    ]
  }
];

// ==========================================================================
// STEAM BOILERS SPECIFICATIONS (HI-THERM & ENERGY PACK BENCHMARK)
// ==========================================================================
export const BOILER_SERIES = [
  {
    id: "ibr-solid-fuel",
    name: "IBR Three-Pass Fully Wetback Solid Fuel Boilers",
    type: "Three-Pass Wetback Shell",
    capacityRange: "1.0 TPH to 25.0 TPH (1,000 - 25,000 kg/hr)",
    designPressure: "10.54, 14.5, 17.5, and 32.0 kg/cm²",
    fuel: "Coal, Biomass Briquettes, Wood, Agro-waste, Lignite",
    efficiency: "Up to 82% (with Economizer & Air Preheater)",
    image: "/assets/products/IBR-Steam-Boiler.jpg",
    pdf: "/assets/catalogs/Catlogue2.pdf",
    features: [
      "Three-pass fully wetback design eliminating refractory rear tube-sheet maintenance",
      "Generates clean dry saturated steam at up to 98% dryness fraction",
      "Large water and steam disengagement volume prevents water carry-over during peak surging",
      "Equipped with multi-cyclone dust collectors (MDC) and bag filters for CPCB air norms"
    ],
    specs: [
      { model: "AMBA-SFB-1000", steamOutput: "1,000 kg/hr", heatOutput: "600,000 kcal/hr", heatingSurface: "35 m²", fuelConsBriquette: "190 kg/hr" },
      { model: "AMBA-SFB-2000", steamOutput: "2,000 kg/hr", heatOutput: "1,200,000 kcal/hr", heatingSurface: "68 m²", fuelConsBriquette: "380 kg/hr" },
      { model: "AMBA-SFB-3000", steamOutput: "3,000 kg/hr", heatOutput: "1,800,000 kcal/hr", heatingSurface: "102 m²", fuelConsBriquette: "570 kg/hr" },
      { model: "AMBA-SFB-5000", steamOutput: "5,000 kg/hr", heatOutput: "3,000,000 kcal/hr", heatingSurface: "170 m²", fuelConsBriquette: "950 kg/hr" },
      { model: "AMBA-SFB-10000", steamOutput: "10,000 kg/hr", heatOutput: "6,000,000 kcal/hr", heatingSurface: "340 m²", fuelConsBriquette: "1,900 kg/hr" }
    ]
  },
  {
    id: "ibr-oil-gas",
    name: "IBR Packaged Oil / Gas Fired Steam Boilers",
    type: "Three-Pass Fully Wetback Internal Furnace",
    capacityRange: "0.5 TPH to 20.0 TPH (500 - 20,000 kg/hr)",
    designPressure: "10.54 to 28.0 kg/cm²",
    fuel: "Furnace Oil, LSHS, LDO, Natural Gas, LPG, Dual Fuel",
    efficiency: "88% - 93% (with Flue Gas Economizer)",
    image: "/assets/products/Liq-Gas-Fuel-Boiler.jpg",
    pdf: "/assets/catalogs/Catlogue3.pdf",
    features: [
      "Corrugated furnace tube engineered for thermal expansion flexibility and enhanced heat flux",
      "Fitted with high-turndown European modulating burners (Termo ISI / Oertli)",
      "Instant response to swinging factory steam loads with microprocessor PID control",
      "Full IBR inspection and statutory hydraulic test certification prior to dispatch"
    ],
    specs: [
      { model: "AMBA-OGB-500", steamOutput: "500 kg/hr", oilCons: "32 kg/hr", gasCons: "38 SCM/hr", power: "3.7 kW" },
      { model: "AMBA-OGB-1000", steamOutput: "1,000 kg/hr", oilCons: "64 kg/hr", gasCons: "76 SCM/hr", power: "5.5 kW" },
      { model: "AMBA-OGB-2000", steamOutput: "2,000 kg/hr", oilCons: "128 kg/hr", gasCons: "152 SCM/hr", power: "11.0 kW" },
      { model: "AMBA-OGB-4000", steamOutput: "4,000 kg/hr", oilCons: "256 kg/hr", gasCons: "304 SCM/hr", power: "22.0 kW" }
    ]
  },
  {
    id: "non-ibr-coil",
    name: "Non-IBR Instant Coil Steam Generators",
    type: "Once-Through Forced Circulation Coil",
    capacityRange: "100 kg/hr to 600 kg/hr",
    designPressure: "10.54 kg/cm² (150 PSI)",
    fuel: "LDO, Diesel, Natural Gas, LPG",
    efficiency: "86% - 90%",
    image: "/assets/products/NON_IBR_BOILER.jpg",
    pdf: "/assets/catalogs/Catlogue4.pdf",
    features: [
      "Fully EXEMPT from Indian Boiler Regulations (IBR) — No certified boiler attendant required",
      "Produces full operating steam pressure within 3 to 5 minutes of cold start",
      "Explosion-proof water-tube coil geometry with minimal water hold-up volume",
      "Ideal for pharmaceutical labs, hotel laundries, food processing, and chemical pilot plants"
    ],
    specs: [
      { model: "AMBA-COIL-100", steamOutput: "100 kg/hr", startUpTime: "3 mins", powerReq: "1.5 kW" },
      { model: "AMBA-COIL-300", steamOutput: "300 kg/hr", startUpTime: "3.5 mins", powerReq: "3.0 kW" },
      { model: "AMBA-COIL-600", steamOutput: "600 kg/hr", startUpTime: "4 mins", powerReq: "5.5 kW" }
    ]
  }
];

// ==========================================================================
// THERMIC FLUID HEATERS SPECIFICATIONS
// ==========================================================================
export const THERMIC_FLUID_SERIES = {
  name: "Industrial Thermic Fluid Heaters (Up to 300°C)",
  capacityRange: "100,000 to 5,000,000 kcal/hr",
  operatingTemp: "Up to 300°C at near-atmospheric operating pressure",
  fuels: "Solid Biomass Briquettes, Coal, Furnace Oil, LDO, Natural Gas",
  image: "/assets/products/Thermic-Fluid-Heater.jpg",
  pdf: "/assets/catalogs/Catlogue5_compressed.pdf",
  features: [
    "Multi-start concentric spiral coils manufactured from ASTM A106 seamless boiler tubes",
    "Eliminates high-pressure water treatment, steam traps, and blowdown heat losses",
    "Equipped with German HP Technik high-temperature circulating pump and mechanical seal",
    "Safety trips: Low fluid flow, differential pressure switch, high fluid outlet temp, and stack limit"
  ],
  models: [
    { code: "TFH-100", kcal: "100,000 kcal/hr", powerKw: "116 kW", flowM3: "15 m³/hr" },
    { code: "TFH-400", kcal: "400,000 kcal/hr", powerKw: "465 kW", flowM3: "35 m³/hr" },
    { code: "TFH-1000", kcal: "1,000,000 kcal/hr", powerKw: "1,163 kW", flowM3: "75 m³/hr" },
    { code: "TFH-2500", kcal: "2,500,000 kcal/hr", powerKw: "2,907 kW", flowM3: "160 m³/hr" }
  ]
};

// ==========================================================================
// HOT AIR & WATER GENERATORS (CETIK ISI BENCHMARK)
// ==========================================================================
export const HOT_AIR_WATER_SERIES = {
  hotAir: {
    name: "Industrial Hot Air Generators (Direct & Indirect Clean Air)",
    capacity: "0.174 MW to 60 MW (150,000 to 50,000,000 kcal/hr)",
    tempRange: "60°C to 800°C",
    applications: "Pharma Fluid Bed Dryers, Spray Dryers, Stenters, Sand/Clay Drying, Bakeries",
    image: "/assets/products/Hot-Air-Generator.jpg",
    pdf: "/assets/catalogs/Industrial HAG.pdf",
    features: [
      "Direct fired units for 99% thermal efficiency in non-contaminant drying processes",
      "Indirect fired units with SS 310 / SS 316 heat exchangers for 100% clean, uncontaminated process air",
      "Fully automatic modulating burner sequencing with PID temperature control",
      "Portable and heavy stationary configurations available"
    ]
  },
  hotWater: {
    name: "CETIK ISI Hot Water Generators (HWG Series R1 - R7)",
    capacity: "50,000 to 3,000,000 kcal/hr",
    tempRange: "Up to 95°C / Pressurized up to 130°C",
    applications: "Hotels, Dairies, Hospitals, Chemical Batch Vessels, Textile Laundries",
    image: "/assets/products/hot-water-generator.jpg",
    pdf: "/assets/catalogs/Catlogue6_compressed.pdf",
    features: [
      "Manufactured in authorized partnership with CETIK ISI (Turkey)",
      "High heat transfer coefficient with reverse flame combustion chamber",
      "High thermal insulation (100mm high-density mineral wool) minimizing standby skin loss",
      "Solid fuel and oil/gas fired models available"
    ]
  }
};

// ==========================================================================
// GENUINE SPARES & COMPONENTS CATALOG
// ==========================================================================
export const SPARES_CATALOG = [
  {
    category: "Pumps & Hydraulics",
    partNumber: "HP-VBGR-04",
    name: "HP Technik High-Pressure Plunger / Gear Fuel Pump",
    brand: "HP Technik",
    origin: "Germany",
    desc: "Heavy-duty fuel oil pump with internal pressure relief valve and suction filter, rated up to 30 bar.",
    image: "/assets/products/Spare-Parts-ignition-transformer.jpg"
  },
  {
    category: "Combustion Control & Actuators",
    partNumber: "LM-SQN-72",
    name: "Electronic Modulating Servo Motor & Actuator",
    brand: "Landis & Gyr / Siemens",
    origin: "Germany",
    desc: "Microprocessor-controlled air damper and fuel valve actuator with 0.1° indexing resolution.",
    image: "/assets/products/Spare-Parts-Modulating-Mechanism.jpg"
  },
  {
    category: "Ignition Systems",
    partNumber: "IGN-EL-90",
    name: "High-Dielectric Ceramic Ignition Electrode Pair",
    brand: "Amba OEM",
    origin: "Europe Standard",
    desc: "Kanthal high-temp alloy spark pins encased in 99% alumina dielectric ceramic body.",
    image: "/assets/products/Spare-Parts-ignition-electrode.jpg"
  },
  {
    category: "Ignition Transformers",
    partNumber: "SAT-EBI-4",
    name: "Electronic High-Voltage Ignition Transformer",
    brand: "Satronic / Danfoss",
    origin: "Switzerland / Denmark",
    desc: "2x 7.5 kV continuous high-frequency spark generation with low electromagnetic interference.",
    image: "/assets/products/Spare-Parts-ignition-transformer.jpg"
  },
  {
    category: "Fuel Treatment & Efficiency Additives",
    partNumber: "ADR-5000-FO",
    name: "Aderco 5000 Fuel Oil Conditioner & Combustion Additive",
    brand: "Aderco",
    origin: "Belgium",
    desc: "Non-metallic organic fuel dispersant. Eliminates sludge, cleans atomizers, and reduces stack soot.",
    image: "/assets/products/SpareParts-new.jpg"
  },
  {
    category: "Heat Transfer Fluids",
    partNumber: "THM-55-DRUM",
    name: "Therminol 55 Synthetic Heat Transfer Fluid",
    brand: "Solutia / Eastman",
    origin: "USA / Europe",
    desc: "High thermal stability synthetic fluid rated up to 305°C bulk operating temperature without fouling.",
    image: "/assets/products/thermicfluid.jpg"
  }
];

// ==========================================================================
// DETAILED ENERGY CONSERVATION PRINCIPLES
// ==========================================================================
export const ENERGY_PAPERS = [
  {
    id: "excess-oxygen",
    title: "Excess Oxygen / Combustion Air Optimization",
    badge: "Stack Heat Recovery",
    summary: "How reducing excess O2 from 6% down to 2.5% saves 3% - 6% of your plant fuel bill.",
    content: "Combustion efficiency is governed by the volume of combustion air introduced into the burner. Excess air enters at ambient temperature (~30°C) and exits the chimney at flue gas temperature (~220°C). Every extra kilogram of excess air heated and vented directly steals heat that should have entered the boiler water. By fine-tuning burner dampers with precision analyzers, excess O2 is maintained at optimal stoichiometric bounds without generating unburned carbon monoxide (CO)."
  },
  {
    id: "ddcc-vfd",
    title: "Direct Digital Combustion Control (DDCC) & VFD",
    badge: "Micro-Modulation",
    summary: "Replacing mechanical cam-and-rod linkages with independent servo motors.",
    content: "Traditional burners use a single motor connected to mechanical cams, swivel joints, and push-rods to simultaneously adjust the air damper and fuel valve. Over time, mechanical wear creates angular backlash (hysteresis). To prevent dangerous fuel-rich conditions, operators are forced to open the air damper wider, wasting energy. Amba's Direct Digital Combustion Control uses independent brushless servo motors directly coupled to each valve, maintaining 0.1° repeatability across the entire firing range."
  },
  {
    id: "flue-gas-heat",
    title: "Flue Gas Analysis & Waste Heat Economizers",
    badge: "10-15% Enthalpy Capture",
    summary: "Rules of thumb: Every 20°C drop in flue gas temp equals ~1% boiler thermal efficiency gain.",
    content: "Boilers without economizers discharge flue gas at 220°C to 260°C. By retrofitting an Amba finned-tube economizer or air preheater, sensible flue gas heat is recycled to preheat the boiler feedwater from 30°C to 85°C. This directly reduces the fuel required to convert each kilogram of water into steam."
  },
  {
    id: "turndown-purge",
    title: "High Turn-Down Ratios & Purge Loss Elimination",
    badge: "Cyclic Loss Reduction",
    summary: "1:10 Turndown eliminates cycling, preventing cold ambient air purge through hot boiler passes.",
    content: "Every time a traditional burner trips off and restarts, international safety regulations mandate a pre-purge cycle where the blower fan forces huge volumes of cold ambient air through the boiler tubes for 45-60 seconds to purge residual gas. This purge acts like a massive refrigerator, quenching the furnace. High turn-down burners modulate down smoothly to 10% load instead of shutting down, entirely avoiding cyclic purge losses."
  }
];

// ==========================================================================
// CLIENT SECTORS & VERIFIED INSTALLATIONS
// ==========================================================================
export const DETAILED_INSTALLATIONS = [
  {
    title: "3 TPH Biomass Solid Fuel IBR Boiler",
    client: "Major Textile Processing & Dyeing Mills",
    location: "Tarapur MIDC, Boisar, Maharashtra",
    category: "Boilers",
    specs: "3,000 kg/hr Steam @ 10.54 kg/cm², Biomass Briquettes",
    savings: "Saved ₹ 34 Lakhs / yr by migrating from furnace oil to briquettes with automated stoker feed.",
    image: "/assets/products/IBR Boiler.jpg"
  },
  {
    title: "High-Temperature Duobloc Dual Fuel Burner Retrofit",
    client: "Specialty Petrochemical & Polymer Facility",
    location: "Taloja MIDC, Navi Mumbai",
    category: "Burners",
    specs: "7,500 kW Natural Gas + Furnace Oil Duobloc System",
    savings: "Achieved sub-60 mg/Nm³ NOx levels; reduced gas consumption by 7.2% through O2 trim.",
    image: "/assets/products/Industrial_Burners.jpg"
  },
  {
    title: "2.5 Million kcal/hr Thermic Fluid Heating System",
    client: "Synthetic Resins & Adhesives Manufacturer",
    location: "Vapi GIDC, Gujarat",
    category: "Heaters",
    specs: "2,500,000 kcal/hr, Operating at 285°C, German HP Technik Pumps",
    savings: "Eliminated unplanned boiler shutdowns; zero pump seal failure over 4 years of continuous run.",
    image: "/assets/products/Thermic-Fluid-Heater.jpg"
  },
  {
    title: "Indirect Clean Hot Air Generator for Pharma Spray Dryer",
    client: "API Bulk Drug & Pharma Formulation Plant",
    location: "Ankleshwar GIDC, Gujarat",
    category: "Generators",
    specs: "800,000 kcal/hr Indirect HAG with SS 316 heat exchanger at 220°C clean air",
    savings: "Met 100% USFDA particulate-free process air compliance with zero cross-contamination.",
    image: "/assets/products/Hot-Air-Generator.jpg"
  }
];


// ==========================================================================
// COMPATIBILITY EXPORTS FOR HOME & OVERVIEW COMPONENTS
// ==========================================================================

export const PRODUCT_CATEGORIES = [
  {
    id: "burners",
    name: "Industrial Burners",
    category: "Combustion",
    shortDesc: "High-efficiency Monobloc and Duobloc burners for Light Oil, Heavy Oil, Natural Gas, and Dual-Fuel.",
    image: "/assets/products/Industrial_Burners.jpg",
    catalogPdf: "/assets/catalogs/Catlogue1.pdf",
    range: "15 kW to 25,000 kW",
    turndown: "Up to 1:10 (Electronic Modulation)",
    fuelTypes: ["Light Oil (LDO/HSD)", "Heavy Oil (FO/LSHS)", "Natural Gas/LPG", "Dual Fuel"],
    models: [
      { code: "MBG-150", name: "Monobloc Gas Burner", capacity: "300 - 1,600 kW", pdf: "/assets/catalogs/Gas Burners (edited).pdf" },
      { code: "DB-12000", name: "Duobloc Heavy Industrial", capacity: "2,500 - 12,500 kW", pdf: "/assets/catalogs/Catloge1.pdf" }
    ],
    features: [
      "Microprocessor burner management with independent servo motors",
      "Low-NOx combustion complying with stringent emission limits",
      "Continuous O2 trim and flue gas enthalpy capture integration"
    ]
  },
  {
    id: "boilers",
    name: "Steam Boilers (IBR & Non-IBR)",
    category: "Steam Systems",
    shortDesc: "Three-pass fully wetback solid fuel & oil/gas boilers, plus compact Non-IBR coil generators.",
    image: "/assets/products/IBR-Steam-Boiler.jpg",
    catalogPdf: "/assets/catalogs/Catlogue2.pdf",
    range: "100 kg/hr to 25 TPH",
    pressure: "10.54 to 32 kg/cm²",
    fuelTypes: ["Coal / Briquettes", "Furnace Oil / LDO", "Natural Gas"],
    models: [
      { code: "AMBA-SFB-3000", name: "Solid Fuel IBR Boiler", capacity: "3,000 kg/hr", pdf: "/assets/catalogs/Catlogue2.pdf" },
      { code: "AMBA-COIL-300", name: "Instant Non-IBR Steam Generator", capacity: "300 kg/hr", pdf: "/assets/catalogs/Catlogue4.pdf" }
    ],
    features: [
      "Three-pass wetback shell eliminating rear refractory maintenance",
      "Full statutory compliance under Indian Boiler Regulations (IBR 1950)",
      "Non-IBR options requiring no certified boiler attendant"
    ]
  },
  {
    id: "heaters",
    name: "Thermic Fluid Heaters",
    category: "Process Heat",
    shortDesc: "Operating up to 300°C in liquid phase under atmospheric operating conditions.",
    image: "/assets/products/Thermic-Fluid-Heater.jpg",
    catalogPdf: "/assets/catalogs/Catlogue5_compressed.pdf",
    range: "100,000 to 5,000,000 kcal/hr",
    temperature: "Up to 300°C",
    fuelTypes: ["Biomass Briquettes", "Furnace Oil / LDO", "Natural Gas"],
    models: [
      { code: "TFH-1000", name: "Thermic Fluid Heater", capacity: "1,000,000 kcal/hr", pdf: "/assets/catalogs/Catlogue5.pdf" }
    ],
    features: [
      "Multi-start concentric helical coil geometry with ASTM A106 tubes",
      "Equipped with German HP Technik high-temperature circulating pump",
      "Zero high-pressure water treatment or blowdown heat loss"
    ]
  },
  {
    id: "generators",
    name: "Hot Air & Water Generators",
    category: "Thermal Air & Water",
    shortDesc: "Pharma clean indirect air generators & CETIK ISI high-volume hot water systems.",
    image: "/assets/products/Hot-Air-Generator.jpg",
    catalogPdf: "/assets/catalogs/Industrial HAG.pdf",
    range: "Up to 60 MW / 800°C",
    models: [
      { code: "HAG-IND", name: "Indirect Clean Air Generator", capacity: "0.174 - 60 MW", pdf: "/assets/catalogs/Industrial HAG.pdf" }
    ],
    features: [
      "Indirect fired with SS 316 heat exchangers for 100% clean process air",
      "Modular CETIK ISI hot water generators (HWG R1 - R7)"
    ]
  },
  {
    id: "spares",
    name: "Genuine Spares & Accessories",
    category: "Components",
    shortDesc: "Certified European spares: HP Technik pumps, servomotors, electrodes, and Aderco additives.",
    image: "/assets/products/Spare-Parts-Modulating-Mechanism.jpg",
    catalogPdf: "/assets/catalogs/Catloge6.pdf",
    range: "OEM Direct Replacement",
    models: [
      { code: "HP-PUMP", name: "HP Technik Fuel Oil Pump", capacity: "High-Pressure Gear Pump", pdf: "/assets/catalogs/Catloge6.pdf" }
    ],
    features: [
      "Authorized channel partner for HP Technik (Germany)",
      "Same-day dispatch for critical plant breakdown spares"
    ]
  }
];

export const CLIENT_SECTORS = [
  { name: "Textile & Dyeing", desc: "High-volume steam for stenters, dyeing vessels, and sizing processes." },
  { name: "Pharmaceuticals", desc: "Ultra-pure indirect hot air for fluid bed dryers and clean steam." },
  { name: "Chemical Processing", desc: "High temperature thermic fluid heating for polymerization reactors." },
  { name: "Food & Commercial Bakery", desc: "Rotary baking oven heating, spray drying, and dairy pasteurization." },
  { name: "Petrochemicals & Distilleries", desc: "Heavy oil duobloc combustion and high-pressure process steam." }
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
