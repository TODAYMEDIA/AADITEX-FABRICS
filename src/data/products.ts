import { DenimFabric } from '../types/denim';

export const DENIM_PRODUCTS: DenimFabric[] = [
  {
    id: 'aad-101',
    code: 'AAD-101',
    name: 'Classic Indigo Rigid 100% Cotton 3/1 RHT',
    slug: 'classic-indigo-rigid-100-cotton',
    category: 'Classic and Traditional',
    subcategories: ['Classic Indigo Denim', 'Rigid Denim', '100% Cotton Denim', 'Right-Hand Twill Denim', '3/1 Twill Denim'],
    description: 'Our flagship 100% cotton rigid denim woven on precision air-jet looms using 16-dip deep rope-dyed indigo warp. Demonstrates crisp twill definition, balanced tear strength, and iconic high-contrast washdown characteristics for five-pocket jeans and heritage denim jackets.',
    heroImage: '/src/assets/images/hero_indigo_denim_rolls_1791737716961.jpg',
    galleryImages: [
      '/src/assets/images/hero_indigo_denim_rolls_1791737716961.jpg',
      '/src/assets/images/denim_swatch_collection_1791737755858.jpg',
      '/src/assets/images/denim_mill_weaving_loom_1791737743213.jpg'
    ],
    tags: ['100% Cotton', '13.75 oz', '3/1 RHT', 'Rope Dyed', 'Rigid'],
    revision: 'Rev 4.2',
    issueDate: '2026-03-15',
    intendedUses: ['Men\'s 5-Pocket Straight Jeans', 'Classic Trucker Jackets', 'Heavy Duty Overshirts'],
    fibre: {
      warp: '100% Gujarat Shankar-6 Premium Cotton',
      weft: '100% Long Staple Cotton',
      overall: '100% Cotton',
      cottonType: 'Shankar-6 & Organic BCI Sourced',
      cottonOrigin: 'Gujarat, India',
      recycledFibrePercentage: 0,
      tolerance: '± 2.5% ASTM D629',
      verificationMethod: 'Quantitative Chemical Fibre Analysis ASTM D629'
    },
    yarn: {
      warpCount: '8.5 Ne Ring Spun',
      weftCount: '9.0 Ne Ring Spun',
      countSystem: 'Ne',
      spinningMethod: 'Ring Spun',
      yarnConstruction: 'Single',
      warpTwist: '3.80 TM (Z)',
      weftTwist: '3.65 TM (Z)',
      slubProfile: 'Subtle Natural Ring Slub (Low Multi-Slub amplitude)',
      yarnHairiness: 'Zweigle S3 < 850',
      yarnStrength: '18.2 Rkm'
    },
    construction: {
      weaveType: '3/1 RHT',
      twillDirection: 'Right-Hand Twill (Z)',
      warpEndsPerInch: 68,
      weftPicksPerInch: 44,
      totalThreadDensity: 112,
      loomType: 'Air-Jet',
      selvedgeType: 'Open Width Tucked Selvedge',
      constructionNotation: '68 x 44 / 8.5 x 9'
    },
    measurements: {
      finishedGSM: 466,
      weightOzPerSqYd: 13.75,
      loomStateWeightGSM: 435,
      postWashWeightGSM: 495,
      weightTolerance: '± 15 GSM',
      totalWidthInches: 60,
      usableWidthInches: 58,
      weightClassification: 'Mid-to-Heavy (12-14 oz)',
      thicknessMm: 0.88
    },
    dyeing: {
      warpDyeMethod: 'Rope Dyeing',
      weftDyeMethod: 'Raw Ecru / Unbleached',
      dyeSystem: 'Pure Synthetic Indigo',
      dyeDipsCount: 16,
      shadeName: 'Pure Deep Ocean Indigo (Red-cast base)',
      shadeCode: 'AT-IND-01R',
      dryRubbingFastness: 'Grade 3-4 (ISO 105-X12)',
      wetRubbingFastness: 'Grade 2 (ISO 105-X12)',
      washingColourfastness: 'Grade 4 (ISO 105-C06)',
      lightfastness: 'Grade 4-5 (ISO 105-B02)'
    },
    stretch: {
      hasStretch: false,
      stretchCategory: 'Rigid / Non-Stretch',
      warpStretchPercentage: 1.5,
      weftStretchPercentage: 2.0,
      stretchDirection: 'Non-Stretch',
      recoveryPercentage: 99.0,
      growthAfterExtension: '< 1.0%',
      testStandard: 'ASTM D3107'
    },
    stability: {
      warpShrinkage: '-2.2% max',
      weftShrinkage: '-1.8% max',
      residualShrinkage: '1.2%',
      skewPercentage: '1.4% max',
      bowingPercentage: '1.1% max',
      testStandard: 'AATCC 135 (3 Washes at 40°C)'
    },
    mechanical: {
      warpTensileStrengthN: '980 N (ASTM D5034)',
      weftTensileStrengthN: '640 N (ASTM D5034)',
      tearStrengthN: 'Warp: 58 N / Weft: 46 N (ASTM D1424 Elmendorf)',
      abrasionCyclesMartindale: '> 45,000 Cycles without yarn breakdown',
      pillingResistance: 'Grade 4.5 (ISO 12945-2)',
      seamSlippage: 'Warp 1.8mm / Weft 2.1mm under 120N (ISO 13936-1)',
      testStandard: 'ASTM & ISO accredited testing'
    },
    finishing: {
      desizing: true,
      scouring: true,
      singeing: true,
      sanforization: true,
      mercerization: false,
      surfaceTreatment: 'Classic Dry Crisp Mill Hand',
      handFeel: 'Crisp & Stiff (Raw)',
      laserCompatible: true,
      ozoneCompatible: true
    },
    compliance: {
      restrictedSubstancesCompliant: true,
      phValue: '6.8 (Within ISO 3071: 4.0-7.5)',
      formaldehydeStatus: 'Non-detectable (< 16 ppm)',
      azoDyesFree: true,
      heavyMetalsTested: true,
      certificationsDocumented: ['OEKO-TEX Standard 100 Class II Compliant', 'BCI Chain of Custody Verified', 'ZDHC MRSL Level 3']
    },
    commercial: {
      sampleAvailability: 'In Stock (Immediate Swatch)',
      moqMeters: 3000,
      sampleLeadTimeDays: 3,
      bulkLeadTimeWeeks: 4,
      pricingTerm: 'Quotation On Request (FOB / CIF / Ex-Mill)',
      exportPacking: 'Poly-wrapped Export Rolls with Barcode Labels',
      origin: 'Gujarat Mill, India',
      verifiedStatus: 'Verified Mill Quality'
    }
  },
  {
    id: 'aad-204',
    code: 'AAD-204',
    name: 'Dual-Core Weft Power Stretch Indigo',
    slug: 'dual-core-weft-power-stretch-indigo',
    category: 'Stretch and Performance',
    subcategories: ['Comfort Stretch Denim', 'Power Stretch Denim', 'Dual-Core Stretch Denim', 'Cotton-Spandex Denim', 'Recovery-Enhanced Denim'],
    description: 'Engineered for premium slim and skinny fits, AAD-204 utilizes patented dual-core spinning combining T400 / Elastomultiester with fine elastane encased in staple cotton. Yields 32% elastic elongation with >92% immediate elastic recovery to eliminate knee bagging and waist sag.',
    heroImage: '/src/assets/images/denim_swatch_collection_1791737755858.jpg',
    galleryImages: [
      '/src/assets/images/denim_swatch_collection_1791737755858.jpg',
      '/src/assets/images/hero_indigo_denim_rolls_1791737716961.jpg'
    ],
    tags: ['Dual-Core', '10.5 oz', '32% Stretch', 'High Recovery', 'Power Stretch'],
    revision: 'Rev 3.0',
    issueDate: '2026-02-18',
    intendedUses: ['Women\'s Skinny & High-Rise Jeans', 'Men\'s Slim-Taper Stretch Jeans', 'Active Casualwear'],
    fibre: {
      warp: '100% Combed Cotton',
      weft: 'Dual-Core: 70% Cotton / 22% Elastomultiester (T400) / 8% Spandex',
      overall: '92% Cotton / 6% Elastomultiester / 2% Elastane',
      cottonType: 'Long Staple Gujarat Cotton',
      cottonOrigin: 'Gujarat, India',
      recycledFibrePercentage: 0,
      elastanePercentage: 2,
      polyesterPercentage: 6,
      tolerance: '± 2.0%',
      verificationMethod: 'ASTM D629 & ISO 1833'
    },
    yarn: {
      warpCount: '10.0 Ne Ring Spun',
      weftCount: '16.0 Ne Dual-Core (75D T400 + 40D Spandex core)',
      countSystem: 'Ne',
      spinningMethod: 'Dual-Core',
      yarnConstruction: 'Single',
      slubProfile: 'Smooth Consistent Filament Core with Fine Ring Cotton sheath',
      yarnStrength: '19.4 Rkm'
    },
    construction: {
      weaveType: '3/1 RHT',
      twillDirection: 'Right-Hand Twill (Z)',
      warpEndsPerInch: 76,
      weftPicksPerInch: 52,
      totalThreadDensity: 128,
      loomType: 'Air-Jet',
      selvedgeType: 'Open Width Tucked Selvedge',
      constructionNotation: '76 x 52 / 10 x 16 DC'
    },
    measurements: {
      finishedGSM: 356,
      weightOzPerSqYd: 10.5,
      weightTolerance: '± 12 GSM',
      totalWidthInches: 56,
      usableWidthInches: 54,
      weightClassification: 'Medium Weight (10-12 oz)',
      thicknessMm: 0.72
    },
    dyeing: {
      warpDyeMethod: 'Rope Dyeing',
      weftDyeMethod: 'Raw Ecru / Unbleached',
      dyeSystem: 'Pure Synthetic Indigo',
      dyeDipsCount: 14,
      shadeName: 'Dark Midnight Indigo',
      shadeCode: 'AT-IND-04M',
      dryRubbingFastness: 'Grade 3-4',
      wetRubbingFastness: 'Grade 2',
      washingColourfastness: 'Grade 4',
      lightfastness: 'Grade 4'
    },
    stretch: {
      hasStretch: true,
      stretchCategory: 'Power Stretch (25-35%)',
      warpStretchPercentage: 2.0,
      weftStretchPercentage: 32.5,
      stretchDirection: 'Weft-Stretch',
      recoveryPercentage: 93.8,
      growthAfterExtension: '2.8% (ASTM D3107 30 min recovery)',
      testStandard: 'ASTM D3107 / 4.0 lb load'
    },
    stability: {
      warpShrinkage: '-2.0% max',
      weftShrinkage: '-4.2% max',
      residualShrinkage: '1.5%',
      skewPercentage: '1.2% max',
      bowingPercentage: '1.0% max',
      testStandard: 'AATCC 135'
    },
    mechanical: {
      warpTensileStrengthN: '860 N',
      weftTensileStrengthN: '720 N',
      tearStrengthN: 'Warp: 52 N / Weft: 48 N',
      abrasionCyclesMartindale: '> 40,000 Cycles',
      pillingResistance: 'Grade 4.0',
      seamSlippage: 'Weft 2.4mm under 120N',
      testStandard: 'ISO 13934-1 & ASTM D1424'
    },
    finishing: {
      desizing: true,
      scouring: true,
      singeing: true,
      sanforization: true,
      mercerization: false,
      surfaceTreatment: 'Supple Peach Hand Finish with Stenter Heat Setting',
      handFeel: 'Medium Supple',
      laserCompatible: true,
      ozoneCompatible: true
    },
    compliance: {
      restrictedSubstancesCompliant: true,
      phValue: '6.5',
      formaldehydeStatus: 'Non-detectable',
      azoDyesFree: true,
      heavyMetalsTested: true,
      certificationsDocumented: ['OEKO-TEX Standard 100', 'ZDHC Level 3']
    },
    commercial: {
      sampleAvailability: 'In Stock (Immediate Swatch)',
      moqMeters: 2500,
      sampleLeadTimeDays: 2,
      bulkLeadTimeWeeks: 4,
      pricingTerm: 'Quotation On Request (FOB / CIF / Ex-Mill)',
      exportPacking: 'Poly-wrapped Export Rolls with Barcode Labels',
      origin: 'Gujarat Mill, India',
      verifiedStatus: 'Verified Mill Quality'
    }
  },
  {
    id: 'aad-301',
    code: 'AAD-301',
    name: 'Heritage Red-Line Vintage Shuttle Loom Selvedge',
    slug: 'heritage-red-line-shuttle-loom-selvedge',
    category: 'Premium and Heritage',
    subcategories: ['Selvedge Denim', 'Shuttle-Loom Denim', 'Premium Ring-Spun Denim', 'Slub Selvedge Denim', 'Raw Heritage Denim'],
    description: 'Woven on meticulously restored vintage narrow shuttle looms running low warp tension. Features authentic woven red ticker tape ID along both self-edges, coarse slub ring-spun yarns, natural organic unevenness, and deep indigo rope dip for true artisanal fades.',
    heroImage: '/src/assets/images/fabric_selvedge_macro_1791737730865.jpg',
    galleryImages: [
      '/src/assets/images/fabric_selvedge_macro_1791737730865.jpg',
      '/src/assets/images/hero_indigo_denim_rolls_1791737716961.jpg',
      '/src/assets/images/denim_swatch_collection_1791737755858.jpg'
    ],
    tags: ['Red-Line Selvedge', '14.2 oz', 'Shuttle Loom', 'Vintage Slub', 'Heritage'],
    revision: 'Rev 5.0',
    issueDate: '2026-01-20',
    intendedUses: ['Collector Selvedge Jeans', 'Bespoke Tailoring', 'Limited Edition Denim Collections'],
    fibre: {
      warp: '100% Ring-Spun Cotton with Natural Long Staple Character',
      weft: '100% Ring-Spun Uneven Cotton',
      overall: '100% Cotton',
      cottonType: 'Selected Gujarat Shankar-6 Premium',
      cottonOrigin: 'Gujarat, India',
      recycledFibrePercentage: 0,
      tolerance: '± 2.0%',
      verificationMethod: 'ASTM D629'
    },
    yarn: {
      warpCount: '7.5 Ne Ring Slub',
      weftCount: '6.5 Ne Heavy Slub Ring',
      countSystem: 'Ne',
      spinningMethod: 'Ring Spun',
      yarnConstruction: 'Single',
      slubProfile: 'High Amplitude Vintage Irregular Slub',
      yarnStrength: '17.8 Rkm'
    },
    construction: {
      weaveType: '3/1 RHT',
      twillDirection: 'Right-Hand Twill (Z)',
      warpEndsPerInch: 62,
      weftPicksPerInch: 40,
      totalThreadDensity: 102,
      loomType: 'Vintage Shuttle Loom',
      selvedgeType: 'Classic Red-Line Selvedge',
      constructionNotation: '62 x 40 / 7.5 x 6.5 S'
    },
    measurements: {
      finishedGSM: 481,
      weightOzPerSqYd: 14.2,
      loomStateWeightGSM: 450,
      postWashWeightGSM: 515,
      weightTolerance: '± 18 GSM',
      totalWidthInches: 32,
      usableWidthInches: 30.5,
      weightClassification: 'Heavyweight (14-16 oz)',
      thicknessMm: 0.98
    },
    dyeing: {
      warpDyeMethod: 'Rope Dyeing',
      weftDyeMethod: 'Raw Ecru / Unbleached',
      dyeSystem: 'Pure Synthetic Indigo',
      dyeDipsCount: 18,
      shadeName: 'Heritage Deep Indigo (Cast-neutral)',
      shadeCode: 'AT-SEL-01',
      dryRubbingFastness: 'Grade 3',
      wetRubbingFastness: 'Grade 1-2 (Typical for authentic rope-dyed raw denim)',
      washingColourfastness: 'Grade 4',
      lightfastness: 'Grade 4-5'
    },
    stretch: {
      hasStretch: false,
      stretchCategory: 'Rigid / Non-Stretch',
      warpStretchPercentage: 1.0,
      weftStretchPercentage: 1.8,
      stretchDirection: 'Non-Stretch',
      recoveryPercentage: 99.5,
      growthAfterExtension: '< 0.5%',
      testStandard: 'ASTM D3107'
    },
    stability: {
      warpShrinkage: '-3.2% max',
      weftShrinkage: '-2.5% max',
      residualShrinkage: '1.8%',
      skewPercentage: '1.8% max',
      bowingPercentage: '1.4% max',
      testStandard: 'AATCC 135 Sanforized Standard'
    },
    mechanical: {
      warpTensileStrengthN: '1040 N',
      weftTensileStrengthN: '710 N',
      tearStrengthN: 'Warp: 64 N / Weft: 52 N',
      abrasionCyclesMartindale: '> 50,000 Cycles',
      pillingResistance: 'Grade 4.5',
      seamSlippage: 'Warp 1.6mm / Weft 1.9mm',
      testStandard: 'ASTM D5034'
    },
    finishing: {
      desizing: true,
      scouring: false,
      singeing: false,
      sanforization: true,
      mercerization: false,
      surfaceTreatment: 'Raw Vintage Paper Hand / Loom-character preserved',
      handFeel: 'Crisp & Stiff (Raw)',
      laserCompatible: true,
      ozoneCompatible: true
    },
    compliance: {
      restrictedSubstancesCompliant: true,
      phValue: '6.9',
      formaldehydeStatus: 'Non-detectable',
      azoDyesFree: true,
      heavyMetalsTested: true,
      certificationsDocumented: ['OEKO-TEX Standard 100', 'GOTS Traceable Organic Batch Available on Order']
    },
    commercial: {
      sampleAvailability: 'In Stock (Immediate Swatch)',
      moqMeters: 1000,
      sampleLeadTimeDays: 3,
      bulkLeadTimeWeeks: 6,
      pricingTerm: 'Quotation On Request (FOB / CIF / Ex-Mill)',
      exportPacking: 'Poly-wrapped Export Rolls with Barcode Labels',
      origin: 'Gujarat Mill, India',
      verifiedStatus: 'Verified Mill Quality'
    }
  },
  {
    id: 'aad-402',
    code: 'AAD-402',
    name: 'Feather-Light Indigo 2/1 Shirting Twill',
    slug: 'feather-light-indigo-2-1-shirting-twill',
    category: 'Lightweight',
    subcategories: ['Ultra-Lightweight Denim', 'Lightweight Shirt Denim', 'Summer Denim', 'Denim for Dresses', '2/1 Twill Denim'],
    description: 'A genuine 2/1 twill lightweight denim crafted from fine 40s Ne combed cotton yarns. Silky hand, graceful drape, and true indigo warp yarn dyeing make it ideal for western shirts, light shirt-dresses, and resort wear.',
    heroImage: '/src/assets/images/denim_swatch_collection_1791737755858.jpg',
    galleryImages: ['/src/assets/images/denim_swatch_collection_1791737755858.jpg'],
    tags: ['6.5 oz', '100% Combed Cotton', '2/1 Twill', 'Shirting', 'Ultra-Soft'],
    revision: 'Rev 2.1',
    issueDate: '2026-02-05',
    intendedUses: ['Western Denim Shirts', 'Shirt-Dresses & Kaftans', 'Kids Summer Denim'],
    fibre: {
      warp: '100% Combed Compact Cotton',
      weft: '100% Combed Compact Cotton',
      overall: '100% Cotton',
      cottonType: 'Extra Long Staple Combed',
      cottonOrigin: 'Gujarat, India',
      recycledFibrePercentage: 0,
      tolerance: '± 2.0%',
      verificationMethod: 'ASTM D629'
    },
    yarn: {
      warpCount: '40.0 Ne Compact Spun',
      weftCount: '32.0 Ne Compact Spun',
      countSystem: 'Ne',
      spinningMethod: 'Compact Spun',
      yarnConstruction: 'Single',
      slubProfile: 'Smooth micro-texture without aggressive slub',
      yarnStrength: '21.5 Rkm'
    },
    construction: {
      weaveType: '2/1 Twill',
      twillDirection: 'Right-Hand Twill (Z)',
      warpEndsPerInch: 96,
      weftPicksPerInch: 68,
      totalThreadDensity: 164,
      loomType: 'Air-Jet',
      selvedgeType: 'Open Width Tucked Selvedge',
      constructionNotation: '96 x 68 / 40 x 32'
    },
    measurements: {
      finishedGSM: 220,
      weightOzPerSqYd: 6.5,
      weightTolerance: '± 10 GSM',
      totalWidthInches: 59,
      usableWidthInches: 57,
      weightClassification: 'Lightweight (<10 oz)',
      thicknessMm: 0.42
    },
    dyeing: {
      warpDyeMethod: 'Slasher / Sheet Dyeing',
      weftDyeMethod: 'Bleached White',
      dyeSystem: 'Pure Synthetic Indigo',
      dyeDipsCount: 10,
      shadeName: 'Skyline Light Indigo',
      shadeCode: 'AT-SHR-02',
      dryRubbingFastness: 'Grade 4',
      wetRubbingFastness: 'Grade 3',
      washingColourfastness: 'Grade 4-5',
      lightfastness: 'Grade 4'
    },
    stretch: {
      hasStretch: false,
      stretchCategory: 'Rigid / Non-Stretch',
      warpStretchPercentage: 2.0,
      weftStretchPercentage: 2.5,
      stretchDirection: 'Non-Stretch',
      recoveryPercentage: 99.0,
      growthAfterExtension: '< 0.5%',
      testStandard: 'ASTM D3107'
    },
    stability: {
      warpShrinkage: '-2.0% max',
      weftShrinkage: '-1.5% max',
      residualShrinkage: '1.0%',
      skewPercentage: '0.8% max',
      bowingPercentage: '0.6% max',
      testStandard: 'AATCC 135'
    },
    mechanical: {
      warpTensileStrengthN: '510 N',
      weftTensileStrengthN: '390 N',
      tearStrengthN: 'Warp: 32 N / Weft: 28 N',
      abrasionCyclesMartindale: '> 25,000 Cycles',
      pillingResistance: 'Grade 4.5',
      seamSlippage: 'Warp 1.4mm / Weft 1.5mm',
      testStandard: 'ASTM D5034'
    },
    finishing: {
      desizing: true,
      scouring: true,
      singeing: true,
      sanforization: true,
      mercerization: true,
      surfaceTreatment: 'Liquid Ammonia Soft Mercerization',
      handFeel: 'Ultra-Soft Butter Touch',
      laserCompatible: true,
      ozoneCompatible: true
    },
    compliance: {
      restrictedSubstancesCompliant: true,
      phValue: '6.4',
      formaldehydeStatus: 'Non-detectable',
      azoDyesFree: true,
      heavyMetalsTested: true,
      certificationsDocumented: ['OEKO-TEX Standard 100', 'BCI Certified']
    },
    commercial: {
      sampleAvailability: 'In Stock (Immediate Swatch)',
      moqMeters: 3000,
      sampleLeadTimeDays: 2,
      bulkLeadTimeWeeks: 3,
      pricingTerm: 'Quotation On Request (FOB / CIF / Ex-Mill)',
      exportPacking: 'Poly-wrapped Export Rolls with Barcode Labels',
      origin: 'Gujarat Mill, India',
      verifiedStatus: 'Verified Mill Quality'
    }
  },
  {
    id: 'aad-608',
    code: 'AAD-608',
    name: 'Super-Heavyweight Bull Twill 16.5 oz Indigo',
    slug: 'super-heavyweight-bull-twill-16-5-oz',
    category: 'Heavyweight',
    subcategories: ['Heavyweight Jeans Denim', 'Super-Heavyweight Denim', 'Bull Denim', 'Heavy Twill Denim', 'Rugged Heritage Denim'],
    description: 'Armour-grade 16.5 oz heavyweight denim woven with ultra-coarse 6s Ne ring yarns. High pick density creates exceptional structural firmness, wind-resistance, and legendary honeycomb/whiskering fade contrast under prolonged wear.',
    heroImage: '/src/assets/images/hero_indigo_denim_rolls_1791737716961.jpg',
    galleryImages: [
      '/src/assets/images/hero_indigo_denim_rolls_1791737716961.jpg',
      '/src/assets/images/denim_mill_weaving_loom_1791737743213.jpg'
    ],
    tags: ['16.5 oz', 'Bull Twill', 'Super-Heavyweight', 'Rigid Armour', 'Heritage Fade'],
    revision: 'Rev 3.5',
    issueDate: '2026-03-01',
    intendedUses: ['Heavyweight Winter Jeans', 'Rider Jackets', 'Rugged Workwear & Bags'],
    fibre: {
      warp: '100% Coarse Staple Cotton',
      weft: '100% Coarse Staple Cotton',
      overall: '100% Cotton',
      cottonType: 'Premium Shankar-6 Long Staple',
      cottonOrigin: 'Gujarat, India',
      recycledFibrePercentage: 0,
      tolerance: '± 2.0%',
      verificationMethod: 'ASTM D629'
    },
    yarn: {
      warpCount: '6.0 Ne Ring Spun',
      weftCount: '5.5 Ne Ring Spun',
      countSystem: 'Ne',
      spinningMethod: 'Ring Spun',
      yarnConstruction: 'Single',
      slubProfile: 'Pronounced heavy slub',
      yarnStrength: '16.5 Rkm'
    },
    construction: {
      weaveType: '3/1 RHT',
      twillDirection: 'Right-Hand Twill (Z)',
      warpEndsPerInch: 60,
      weftPicksPerInch: 38,
      totalThreadDensity: 98,
      loomType: 'Rapier',
      selvedgeType: 'Open Width Tucked Selvedge',
      constructionNotation: '60 x 38 / 6 x 5.5'
    },
    measurements: {
      finishedGSM: 559,
      weightOzPerSqYd: 16.5,
      weightTolerance: '± 20 GSM',
      totalWidthInches: 58,
      usableWidthInches: 56,
      weightClassification: 'Super-Heavyweight (>16 oz)',
      thicknessMm: 1.15
    },
    dyeing: {
      warpDyeMethod: 'Rope Dyeing',
      weftDyeMethod: 'Raw Ecru / Unbleached',
      dyeSystem: 'Pure Synthetic Indigo',
      dyeDipsCount: 20,
      shadeName: 'Abyssal Dark Indigo',
      shadeCode: 'AT-HVY-16',
      dryRubbingFastness: 'Grade 3',
      wetRubbingFastness: 'Grade 1-2',
      washingColourfastness: 'Grade 4',
      lightfastness: 'Grade 5'
    },
    stretch: {
      hasStretch: false,
      stretchCategory: 'Rigid / Non-Stretch',
      warpStretchPercentage: 1.0,
      weftStretchPercentage: 1.2,
      stretchDirection: 'Non-Stretch',
      recoveryPercentage: 99.8,
      growthAfterExtension: '< 0.3%',
      testStandard: 'ASTM D3107'
    },
    stability: {
      warpShrinkage: '-2.8% max',
      weftShrinkage: '-2.0% max',
      residualShrinkage: '1.4%',
      skewPercentage: '1.6% max',
      bowingPercentage: '1.2% max',
      testStandard: 'AATCC 135'
    },
    mechanical: {
      warpTensileStrengthN: '1350 N',
      weftTensileStrengthN: '980 N',
      tearStrengthN: 'Warp: 88 N / Weft: 76 N',
      abrasionCyclesMartindale: '> 65,000 Cycles',
      pillingResistance: 'Grade 5.0',
      seamSlippage: 'Warp 1.2mm / Weft 1.4mm',
      testStandard: 'ASTM D5034'
    },
    finishing: {
      desizing: true,
      scouring: true,
      singeing: false,
      sanforization: true,
      mercerization: false,
      surfaceTreatment: 'Heavy Sanforized Finish with Firm Hand',
      handFeel: 'Crisp & Stiff (Raw)',
      laserCompatible: true,
      ozoneCompatible: true
    },
    compliance: {
      restrictedSubstancesCompliant: true,
      phValue: '6.8',
      formaldehydeStatus: 'Non-detectable',
      azoDyesFree: true,
      heavyMetalsTested: true,
      certificationsDocumented: ['OEKO-TEX Standard 100', 'ZDHC Level 3']
    },
    commercial: {
      sampleAvailability: 'In Stock (Immediate Swatch)',
      moqMeters: 2500,
      sampleLeadTimeDays: 3,
      bulkLeadTimeWeeks: 5,
      pricingTerm: 'Quotation On Request (FOB / CIF / Ex-Mill)',
      exportPacking: 'Heavy Duty Waterproof Export Rolls',
      origin: 'Gujarat Mill, India',
      verifiedStatus: 'Verified Mill Quality'
    }
  },
  {
    id: 'aad-703',
    code: 'AAD-703',
    name: 'Anti-Torque Broken Twill Authentic Indigo',
    slug: 'anti-torque-broken-twill-authentic-indigo',
    category: 'Special Weave and Surface',
    subcategories: ['Broken Twill Denim', 'Zigzag Twill Denim', 'Textured Denim', 'Rigid Denim'],
    description: 'Invented historically to counteract leg twisting in classic rodeo jeans, this authentic broken twill reverses direction every two warp yarns. Provides a smooth, non-directional surface, zero leg twist spirality, and distinct vintage character.',
    heroImage: '/src/assets/images/denim_swatch_collection_1791737755858.jpg',
    galleryImages: ['/src/assets/images/denim_swatch_collection_1791737755858.jpg'],
    tags: ['Broken Twill', '13.2 oz', 'Anti-Torque', 'Zero Spirality', '100% Cotton'],
    revision: 'Rev 4.0',
    issueDate: '2026-02-12',
    intendedUses: ['Rodeo & Western Cut Jeans', 'Anti-Torque Straight Fit Jeans', 'Workwear Jackets'],
    fibre: {
      warp: '100% Ring Spun Cotton',
      weft: '100% Open-End Rotor Cotton',
      overall: '100% Cotton',
      cottonType: 'BCI Shankar-6',
      cottonOrigin: 'Gujarat, India',
      recycledFibrePercentage: 0,
      tolerance: '± 2.0%',
      verificationMethod: 'ASTM D629'
    },
    yarn: {
      warpCount: '9.0 Ne Ring Spun',
      weftCount: '9.5 Ne Open-End',
      countSystem: 'Ne',
      spinningMethod: 'Ring Spun',
      yarnConstruction: 'Single',
      slubProfile: 'Balanced Rotor Weft with Natural Ring Warp',
      yarnStrength: '17.2 Rkm'
    },
    construction: {
      weaveType: 'Broken Twill',
      twillDirection: 'Broken / Zigzag',
      warpEndsPerInch: 66,
      weftPicksPerInch: 46,
      totalThreadDensity: 112,
      loomType: 'Air-Jet',
      selvedgeType: 'Open Width Tucked Selvedge',
      constructionNotation: '66 x 46 / 9 x 9.5 BT'
    },
    measurements: {
      finishedGSM: 447,
      weightOzPerSqYd: 13.2,
      weightTolerance: '± 15 GSM',
      totalWidthInches: 60,
      usableWidthInches: 58,
      weightClassification: 'Mid-to-Heavy (12-14 oz)',
      thicknessMm: 0.85
    },
    dyeing: {
      warpDyeMethod: 'Rope Dyeing',
      weftDyeMethod: 'Raw Ecru / Unbleached',
      dyeSystem: 'Pure Synthetic Indigo',
      dyeDipsCount: 16,
      shadeName: 'True Western Indigo',
      shadeCode: 'AT-BT-13',
      dryRubbingFastness: 'Grade 3-4',
      wetRubbingFastness: 'Grade 2',
      washingColourfastness: 'Grade 4',
      lightfastness: 'Grade 4-5'
    },
    stretch: {
      hasStretch: false,
      stretchCategory: 'Rigid / Non-Stretch',
      warpStretchPercentage: 1.5,
      weftStretchPercentage: 2.2,
      stretchDirection: 'Non-Stretch',
      recoveryPercentage: 99.2,
      growthAfterExtension: '< 0.8%',
      testStandard: 'ASTM D3107'
    },
    stability: {
      warpShrinkage: '-2.0% max',
      weftShrinkage: '-1.8% max',
      residualShrinkage: '1.0%',
      skewPercentage: '0.4% max (Zero Spirality Design)',
      bowingPercentage: '0.6% max',
      testStandard: 'AATCC 135'
    },
    mechanical: {
      warpTensileStrengthN: '940 N',
      weftTensileStrengthN: '680 N',
      tearStrengthN: 'Warp: 54 N / Weft: 48 N',
      abrasionCyclesMartindale: '> 48,000 Cycles',
      pillingResistance: 'Grade 4.5',
      seamSlippage: 'Warp 1.7mm / Weft 1.9mm',
      testStandard: 'ASTM D5034'
    },
    finishing: {
      desizing: true,
      scouring: true,
      singeing: true,
      sanforization: true,
      mercerization: false,
      surfaceTreatment: 'Sanforized Anti-Torque Weave',
      handFeel: 'Crisp & Stiff (Raw)',
      laserCompatible: true,
      ozoneCompatible: true
    },
    compliance: {
      restrictedSubstancesCompliant: true,
      phValue: '6.7',
      formaldehydeStatus: 'Non-detectable',
      azoDyesFree: true,
      heavyMetalsTested: true,
      certificationsDocumented: ['OEKO-TEX Standard 100', 'BCI Certified']
    },
    commercial: {
      sampleAvailability: 'In Stock (Immediate Swatch)',
      moqMeters: 3000,
      sampleLeadTimeDays: 2,
      bulkLeadTimeWeeks: 4,
      pricingTerm: 'Quotation On Request (FOB / CIF / Ex-Mill)',
      exportPacking: 'Poly-wrapped Export Rolls with Barcode Labels',
      origin: 'Gujarat Mill, India',
      verifiedStatus: 'Verified Mill Quality'
    }
  },
  {
    id: 'aad-802',
    code: 'AAD-802',
    name: 'Stay-Dark Double Sulphur Black Denim',
    slug: 'stay-dark-double-sulphur-black-denim',
    category: 'Colour and Dye Variations',
    subcategories: ['Black Denim', 'Sulphur-Dyed Denim', 'Sulphur-Black Denim', 'Piece-Dyed Denim', 'Two-Tone Denim'],
    description: 'Black-warp and black-weft construction utilizing advanced low-leaching sulphur black dyes with eco-friendly glucose-based reducing agents. Designed to withstand repetitive commercial laundering without turning grey.',
    heroImage: '/src/assets/images/denim_swatch_collection_1791737755858.jpg',
    galleryImages: ['/src/assets/images/denim_swatch_collection_1791737755858.jpg'],
    tags: ['Sulphur Black', 'Double Black', '12.8 oz', 'Stay-Dark', 'Comfort Stretch'],
    revision: 'Rev 2.8',
    issueDate: '2026-02-28',
    intendedUses: ['Men\'s & Women\'s Jet Black Jeans', 'Uniforms', 'Urban Fashion Jackets'],
    fibre: {
      warp: '100% Ring Spun Cotton',
      weft: '98% Cotton / 2% Roica Elastane',
      overall: '98% Cotton / 2% Elastane',
      cottonType: 'Premium Shankar-6',
      cottonOrigin: 'Gujarat, India',
      recycledFibrePercentage: 0,
      elastanePercentage: 2,
      tolerance: '± 2.0%',
      verificationMethod: 'ASTM D629'
    },
    yarn: {
      warpCount: '9.5 Ne Ring Spun',
      weftCount: '12.0 Ne Core-Spun',
      countSystem: 'Ne',
      spinningMethod: 'Core-Spun',
      yarnConstruction: 'Single',
      slubProfile: 'Micro-clean surface profile',
      yarnStrength: '18.1 Rkm'
    },
    construction: {
      weaveType: '3/1 RHT',
      twillDirection: 'Right-Hand Twill (Z)',
      warpEndsPerInch: 72,
      weftPicksPerInch: 50,
      totalThreadDensity: 122,
      loomType: 'Air-Jet',
      selvedgeType: 'Open Width Tucked Selvedge',
      constructionNotation: '72 x 50 / 9.5 x 12 CS'
    },
    measurements: {
      finishedGSM: 434,
      weightOzPerSqYd: 12.8,
      weightTolerance: '± 14 GSM',
      totalWidthInches: 58,
      usableWidthInches: 56,
      weightClassification: 'Mid-to-Heavy (12-14 oz)',
      thicknessMm: 0.82
    },
    dyeing: {
      warpDyeMethod: 'Slasher / Sheet Dyeing',
      weftDyeMethod: 'Sulphur Black',
      dyeSystem: 'Sulphur Black',
      dyeDipsCount: 12,
      shadeName: 'Jet Obsidian Stay-Black (Warp & Weft Dyed)',
      shadeCode: 'AT-BLK-01D',
      dryRubbingFastness: 'Grade 4',
      wetRubbingFastness: 'Grade 3',
      washingColourfastness: 'Grade 4-5 (Minimal wash-down)',
      lightfastness: 'Grade 5'
    },
    stretch: {
      hasStretch: true,
      stretchCategory: 'Comfort Stretch (12-18%)',
      warpStretchPercentage: 1.5,
      weftStretchPercentage: 16.5,
      stretchDirection: 'Weft-Stretch',
      recoveryPercentage: 91.5,
      growthAfterExtension: '3.2%',
      testStandard: 'ASTM D3107'
    },
    stability: {
      warpShrinkage: '-2.2% max',
      weftShrinkage: '-3.0% max',
      residualShrinkage: '1.2%',
      skewPercentage: '1.2% max',
      bowingPercentage: '0.9% max',
      testStandard: 'AATCC 135'
    },
    mechanical: {
      warpTensileStrengthN: '910 N',
      weftTensileStrengthN: '650 N',
      tearStrengthN: 'Warp: 50 N / Weft: 44 N',
      abrasionCyclesMartindale: '> 42,000 Cycles',
      pillingResistance: 'Grade 4.0',
      seamSlippage: 'Weft 2.1mm under 120N',
      testStandard: 'ASTM D5034'
    },
    finishing: {
      desizing: true,
      scouring: true,
      singeing: true,
      sanforization: true,
      mercerization: false,
      surfaceTreatment: 'Resin Fixation for Shade Permanence',
      handFeel: 'Medium Supple',
      laserCompatible: true,
      ozoneCompatible: true
    },
    compliance: {
      restrictedSubstancesCompliant: true,
      phValue: '6.6',
      formaldehydeStatus: 'Non-detectable',
      azoDyesFree: true,
      heavyMetalsTested: true,
      certificationsDocumented: ['OEKO-TEX Standard 100', 'ZDHC Level 3']
    },
    commercial: {
      sampleAvailability: 'In Stock (Immediate Swatch)',
      moqMeters: 3000,
      sampleLeadTimeDays: 2,
      bulkLeadTimeWeeks: 4,
      pricingTerm: 'Quotation On Request (FOB / CIF / Ex-Mill)',
      exportPacking: 'Poly-wrapped Export Rolls with Barcode Labels',
      origin: 'Gujarat Mill, India',
      verifiedStatus: 'Verified Mill Quality'
    }
  },
  {
    id: 'aad-1002',
    code: 'AAD-1002',
    name: 'Circular Eco TENCEL™ & Organic Cotton Indigo',
    slug: 'circular-eco-tencel-organic-cotton-indigo',
    category: 'Sustainable and Alternative-Fibre',
    subcategories: ['Organic Cotton Denim', 'Lyocell-Blend Denim', 'TENCEL™-Branded Fibre Denim', 'Certified Sustainable Denim', 'Reduced-Water-Process Denim'],
    description: 'Developed in collaboration with certified wood-pulp lyocell fibre producers, combining 65% certified organic cotton with 35% Lenzing TENCEL™ Lyocell. Demonstrates an ultra-luxurious fluid drape, breathability, and 45% reduced freshwater dyeing footprint.',
    heroImage: '/src/assets/images/denim_swatch_collection_1791737755858.jpg',
    galleryImages: [
      '/src/assets/images/denim_swatch_collection_1791737755858.jpg',
      '/src/assets/images/hero_indigo_denim_rolls_1791737716961.jpg'
    ],
    tags: ['TENCEL™ Lyocell', 'Organic Cotton', '10.0 oz', 'Low-Water Dye', 'Eco-Circular'],
    revision: 'Rev 3.1',
    issueDate: '2026-03-10',
    intendedUses: ['Women\'s Wide-Leg Drape Trousers', 'Eco-Conscious Casual Blazers', 'Fluid Denim Jumpsuits'],
    fibre: {
      warp: '100% Organic BCI Ring Cotton',
      weft: '100% Lenzing TENCEL™ Lyocell',
      overall: '65% Organic Cotton / 35% TENCEL™ Lyocell',
      cottonType: 'Certified Organic Gujarat Shankar-6',
      cottonOrigin: 'Gujarat, India',
      recycledFibrePercentage: 0,
      lyocellPercentage: 35,
      tolerance: '± 2.0%',
      verificationMethod: 'ISO 1833-22 & GOTS Transaction Cert'
    },
    yarn: {
      warpCount: '12.0 Ne Ring Spun',
      weftCount: '14.0 Ne Tencel Micro-Spun',
      countSystem: 'Ne',
      spinningMethod: 'Compact Spun',
      yarnConstruction: 'Single',
      slubProfile: 'Silky uniform filament profile with soft staple core',
      yarnStrength: '22.0 Rkm'
    },
    construction: {
      weaveType: '3/1 LHT',
      twillDirection: 'Left-Hand Twill (S)',
      warpEndsPerInch: 78,
      weftPicksPerInch: 54,
      totalThreadDensity: 132,
      loomType: 'Air-Jet',
      selvedgeType: 'Open Width Tucked Selvedge',
      constructionNotation: '78 x 54 / 12 x 14 T'
    },
    measurements: {
      finishedGSM: 339,
      weightOzPerSqYd: 10.0,
      weightTolerance: '± 10 GSM',
      totalWidthInches: 58,
      usableWidthInches: 56,
      weightClassification: 'Medium Weight (10-12 oz)',
      thicknessMm: 0.65
    },
    dyeing: {
      warpDyeMethod: 'Rope Dyeing',
      weftDyeMethod: 'Raw Ecru / Unbleached',
      dyeSystem: 'Pure Synthetic Indigo',
      dyeDipsCount: 12,
      shadeName: 'Azure Sky Deep Indigo',
      shadeCode: 'AT-ECO-10',
      dryRubbingFastness: 'Grade 3-4',
      wetRubbingFastness: 'Grade 2-3',
      washingColourfastness: 'Grade 4',
      lightfastness: 'Grade 4'
    },
    stretch: {
      hasStretch: false,
      stretchCategory: 'Rigid / Non-Stretch',
      warpStretchPercentage: 2.2,
      weftStretchPercentage: 3.0,
      stretchDirection: 'Non-Stretch',
      recoveryPercentage: 98.5,
      growthAfterExtension: '< 0.8%',
      testStandard: 'ASTM D3107'
    },
    stability: {
      warpShrinkage: '-2.2% max',
      weftShrinkage: '-2.0% max',
      residualShrinkage: '1.2%',
      skewPercentage: '0.9% max',
      bowingPercentage: '0.8% max',
      testStandard: 'AATCC 135'
    },
    mechanical: {
      warpTensileStrengthN: '820 N',
      weftTensileStrengthN: '680 N',
      tearStrengthN: 'Warp: 48 N / Weft: 45 N',
      abrasionCyclesMartindale: '> 35,000 Cycles',
      pillingResistance: 'Grade 4.0',
      seamSlippage: 'Warp 1.8mm / Weft 1.9mm',
      testStandard: 'ASTM D5034'
    },
    finishing: {
      desizing: true,
      scouring: true,
      singeing: true,
      sanforization: true,
      mercerization: false,
      surfaceTreatment: 'Eco Enzyme Wash & Aerodynamic Soft Tumble',
      handFeel: 'Ultra-Soft Butter Touch',
      laserCompatible: true,
      ozoneCompatible: true
    },
    compliance: {
      restrictedSubstancesCompliant: true,
      phValue: '6.5',
      formaldehydeStatus: 'Non-detectable',
      azoDyesFree: true,
      heavyMetalsTested: true,
      certificationsDocumented: ['GOTS Scope Certificate Verified', 'OEKO-TEX Standard 100', 'Lenzing TENCEL™ Verification License']
    },
    commercial: {
      sampleAvailability: 'In Stock (Immediate Swatch)',
      moqMeters: 2000,
      sampleLeadTimeDays: 2,
      bulkLeadTimeWeeks: 4,
      pricingTerm: 'Quotation On Request (FOB / CIF / Ex-Mill)',
      exportPacking: 'Poly-wrapped Export Rolls with Barcode Labels',
      origin: 'Gujarat Mill, India',
      verifiedStatus: 'Verified Mill Quality'
    }
  },
  {
    id: 'aad-1206',
    code: 'AAD-1206',
    name: 'Cordura® High-Tenacity Abrasion Workwear Denim',
    slug: 'cordura-high-tenacity-workwear-denim',
    category: 'Functional and Industrial',
    subcategories: ['Workwear Denim', 'Reinforced Workwear Denim', 'High-Tenacity Denim', 'Abrasion-Resistant Denim', 'Protective-Apparel Denim'],
    description: 'Built for extreme duty industrial environments, utility workers, and motorcycle gear. Blended with military-spec Invista Cordura® nylon 6,6 filament core in the weft yarn. Surpasses 100,000 Martindale abrasion cycles with 4x higher tear resistance than standard cotton denim.',
    heroImage: '/src/assets/images/denim_mill_weaving_loom_1791737743213.jpg',
    galleryImages: [
      '/src/assets/images/denim_mill_weaving_loom_1791737743213.jpg',
      '/src/assets/images/hero_indigo_denim_rolls_1791737716961.jpg'
    ],
    tags: ['Cordura® 14 oz', 'Workwear', '100K Martindale', 'Tear Resistant', 'High-Tenacity'],
    revision: 'Rev 4.1',
    issueDate: '2026-03-05',
    intendedUses: ['Heavy Industrial Workwear', 'Motorcycle Riding Jeans', 'Tactical & Utility Pants'],
    fibre: {
      warp: '100% Long Staple Cotton',
      weft: '70% Cotton / 30% Cordura® Nylon 6,6 Filament',
      overall: '85% Cotton / 15% Nylon 6,6',
      cottonType: 'Heavy Shankar-6',
      cottonOrigin: 'Gujarat, India',
      recycledFibrePercentage: 0,
      polyesterPercentage: 0,
      tolerance: '± 2.0%',
      verificationMethod: 'ASTM D629'
    },
    yarn: {
      warpCount: '8.0 Ne Ring Spun',
      weftCount: '10.0 Ne Cordura® Corespun',
      countSystem: 'Ne',
      spinningMethod: 'Core-Spun',
      yarnConstruction: 'Single',
      slubProfile: 'Dense industrial slub profile',
      yarnStrength: '28.5 Rkm'
    },
    construction: {
      weaveType: '3/1 RHT',
      twillDirection: 'Right-Hand Twill (Z)',
      warpEndsPerInch: 68,
      weftPicksPerInch: 46,
      totalThreadDensity: 114,
      loomType: 'Rapier',
      selvedgeType: 'Open Width Tucked Selvedge',
      constructionNotation: '68 x 46 / 8 x 10 CORD'
    },
    measurements: {
      finishedGSM: 475,
      weightOzPerSqYd: 14.0,
      weightTolerance: '± 15 GSM',
      totalWidthInches: 59,
      usableWidthInches: 57,
      weightClassification: 'Mid-to-Heavy (12-14 oz)',
      thicknessMm: 0.95
    },
    dyeing: {
      warpDyeMethod: 'Rope Dyeing',
      weftDyeMethod: 'Raw Ecru / Unbleached',
      dyeSystem: 'Pure Synthetic Indigo',
      dyeDipsCount: 16,
      shadeName: 'Industrial Deep Navy Indigo',
      shadeCode: 'AT-WRK-14',
      dryRubbingFastness: 'Grade 3-4',
      wetRubbingFastness: 'Grade 2-3',
      washingColourfastness: 'Grade 4',
      lightfastness: 'Grade 5'
    },
    stretch: {
      hasStretch: false,
      stretchCategory: 'Rigid / Non-Stretch',
      warpStretchPercentage: 1.0,
      weftStretchPercentage: 1.5,
      stretchDirection: 'Non-Stretch',
      recoveryPercentage: 99.5,
      growthAfterExtension: '< 0.5%',
      testStandard: 'ASTM D3107'
    },
    stability: {
      warpShrinkage: '-1.8% max',
      weftShrinkage: '-1.5% max',
      residualShrinkage: '1.0%',
      skewPercentage: '1.0% max',
      bowingPercentage: '0.8% max',
      testStandard: 'AATCC 135'
    },
    mechanical: {
      warpTensileStrengthN: '1650 N (ISO 13934-1)',
      weftTensileStrengthN: '1350 N (ISO 13934-1)',
      tearStrengthN: 'Warp: 120 N / Weft: 110 N (ASTM D1424)',
      abrasionCyclesMartindale: '> 100,000 Cycles without hole formation',
      pillingResistance: 'Grade 5.0',
      seamSlippage: 'Warp 1.1mm / Weft 1.2mm under 120N',
      testStandard: 'ISO 12947-2 & ASTM D1424'
    },
    finishing: {
      desizing: true,
      scouring: true,
      singeing: true,
      sanforization: true,
      mercerization: false,
      surfaceTreatment: 'Heavy Duty Mechanical Sanforizing',
      handFeel: 'Crisp & Stiff (Raw)',
      laserCompatible: true,
      ozoneCompatible: true
    },
    compliance: {
      restrictedSubstancesCompliant: true,
      phValue: '6.7',
      formaldehydeStatus: 'Non-detectable',
      azoDyesFree: true,
      heavyMetalsTested: true,
      certificationsDocumented: ['OEKO-TEX Standard 100', 'Cordura® Fabric Brand Licensed Testing']
    },
    commercial: {
      sampleAvailability: 'In Stock (Immediate Swatch)',
      moqMeters: 3000,
      sampleLeadTimeDays: 3,
      bulkLeadTimeWeeks: 5,
      pricingTerm: 'Quotation On Request (FOB / CIF / Ex-Mill)',
      exportPacking: 'Poly-wrapped Heavy Duty Export Rolls',
      origin: 'Gujarat Mill, India',
      verifiedStatus: 'Verified Mill Quality'
    }
  }
];

export const DENIM_CATEGORIES_METADATA = [
  { id: 'Classic and Traditional', count: 18, description: 'Time-honoured pure cotton 3/1 and 2/1 twill constructions with authentic rope-dyed indigo.' },
  { id: 'Stretch and Performance', count: 24, description: 'Power stretch, dual-core, and recovery-enhanced denim with elastane and T400 technology.' },
  { id: 'Premium and Heritage', count: 12, description: 'Vintage shuttle loom red-line selvedge, ring slub, nep, and unsanforized raw fabrics.' },
  { id: 'Lightweight', count: 14, description: 'Sub-10 oz featherweight denim and shirting twills engineered for fluid summer draping.' },
  { id: 'Medium-Weight', count: 22, description: '10 to 12 oz versatile fabrics for classic five-pocket jeans, casual blazers, and chinos.' },
  { id: 'Heavyweight', count: 16, description: '14 to 16.5+ oz heavyweight bull denim and winter rigid fabrics engineered for high contrast fades.' },
  { id: 'Special Weave and Surface', count: 15, description: 'Broken twill anti-torque, herringbone, crosshatch, dobby, and diamond textures.' },
  { id: 'Colour and Dye Variations', count: 19, description: 'Stay-dark sulphur black, ecru, natural seed-flecked cotton, overdyed and cross-dyed shades.' },
  { id: 'Washed and Finished', count: 20, description: 'Mill-finished sanforized, enzyme-softened, peach touch, and ozone-compatible qualities.' },
  { id: 'Sustainable and Alternative-Fibre', count: 17, description: 'Organic cotton, Lenzing TENCEL™ lyocell, recycled fibre blends, and water-reduced indigo.' },
  { id: 'Specialty and Fashion', count: 11, description: 'Laser-pattern receptive, foil-effect, printed, and Jacquard novelty weave denims.' },
  { id: 'Functional and Industrial', count: 13, description: 'High-tenacity Cordura® nylon blends, abrasion-resistant workwear, and utility fabrics.' },
  { id: 'Special Construction', count: 8, description: 'Double-face, differential-shrinkage, and multi-layer structural denim fabrics.' },
];
