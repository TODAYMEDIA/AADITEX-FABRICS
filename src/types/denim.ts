export interface FibreComposition {
  warp: string;
  weft: string;
  overall: string;
  cottonType?: string;
  cottonOrigin?: string;
  recycledFibrePercentage?: number;
  elastanePercentage?: number;
  polyesterPercentage?: number;
  lyocellPercentage?: number;
  hempPercentage?: number;
  linenPercentage?: number;
  tolerance: string;
  verificationMethod: string;
}

export interface YarnSpecification {
  warpCount: string;
  weftCount: string;
  countSystem: 'Ne' | 'Nm' | 'tex' | 'denier';
  spinningMethod: 'Ring Spun' | 'Open-End / Rotor' | 'Compact Spun' | 'Core-Spun' | 'Dual-Core';
  yarnConstruction: 'Single' | 'Ply';
  warpTwist?: string;
  weftTwist?: string;
  slubProfile: string;
  slubFrequency?: string;
  yarnHairiness?: string;
  yarnStrength?: string;
}

export interface WeaveConstruction {
  weaveType: '3/1 RHT' | '3/1 LHT' | 'Broken Twill' | '2/1 Twill' | 'Chambray / Plain' | 'Dobby / Jacquard' | 'Herringbone' | 'Crosshatch';
  twillDirection: 'Right-Hand Twill (Z)' | 'Left-Hand Twill (S)' | 'Broken / Zigzag' | 'Non-Directional';
  warpEndsPerInch: number;
  weftPicksPerInch: number;
  totalThreadDensity: number;
  loomType: 'Air-Jet' | 'Rapier' | 'Vintage Shuttle Loom';
  selvedgeType: 'Classic Red-Line Selvedge' | 'Plain Selvedge' | 'Open Width Tucked Selvedge';
  constructionNotation: string;
}

export interface FabricMeasurements {
  finishedGSM: number;
  weightOzPerSqYd: number;
  loomStateWeightGSM?: number;
  postWashWeightGSM?: number;
  weightTolerance: string;
  totalWidthInches: number;
  usableWidthInches: number;
  weightClassification: 'Lightweight (<10 oz)' | 'Medium Weight (10-12 oz)' | 'Mid-to-Heavy (12-14 oz)' | 'Heavyweight (14-16 oz)' | 'Super-Heavyweight (>16 oz)';
  thicknessMm: number;
}

export interface DyeingSpecification {
  warpDyeMethod: 'Rope Dyeing' | 'Slasher / Sheet Dyeing' | 'Piece Dyed' | 'Natural Indigo Vat';
  weftDyeMethod: 'Raw Ecru / Unbleached' | 'Sulphur Black' | 'Overdyed' | 'Bleached White';
  dyeSystem: 'Pure Synthetic Indigo' | 'Sulphur Bottom Indigo Top' | 'Sulphur Black' | 'Vegetable Indigo' | 'Reactive / Pigment';
  dyeDipsCount: number;
  shadeName: string;
  shadeCode: string;
  dryRubbingFastness: string; // e.g. "Grade 3-4"
  wetRubbingFastness: string; // e.g. "Grade 2"
  washingColourfastness: string; // e.g. "Grade 4"
  lightfastness: string; // e.g. "Grade 4-5"
}

export interface StretchPerformance {
  hasStretch: boolean;
  stretchCategory: 'Rigid / Non-Stretch' | 'Comfort Stretch (12-18%)' | 'Power Stretch (25-35%)' | 'Super Stretch (>40%)';
  warpStretchPercentage: number;
  weftStretchPercentage: number;
  stretchDirection: 'Weft-Stretch' | 'Warp-Stretch' | 'Two-Way Stretch' | 'Non-Stretch';
  recoveryPercentage: number;
  growthAfterExtension: string;
  testStandard: string;
}

export interface DimensionalStability {
  warpShrinkage: string; // e.g. "-2.5% max"
  weftShrinkage: string; // e.g. "-3.0% max"
  residualShrinkage: string;
  skewPercentage: string; // e.g. "1.5% max"
  bowingPercentage: string;
  testStandard: string;
}

export interface MechanicalTestResults {
  warpTensileStrengthN: string;
  weftTensileStrengthN: string;
  tearStrengthN: string;
  abrasionCyclesMartindale: string;
  pillingResistance: string;
  seamSlippage: string;
  testStandard: string;
}

export interface FinishingSpecification {
  desizing: boolean;
  scouring: boolean;
  singeing: boolean;
  sanforization: boolean;
  mercerization: boolean;
  surfaceTreatment: string; // e.g. "Light Peach Touch", "Resin Coated", "Classic Dry Finish"
  handFeel: 'Crisp & Stiff (Raw)' | 'Medium Supple' | 'Ultra-Soft Butter Touch' | 'Dry Vintage Paper Hand';
  laserCompatible: boolean;
  ozoneCompatible: boolean;
}

export interface ChemicalCompliance {
  restrictedSubstancesCompliant: boolean;
  phValue: string;
  formaldehydeStatus: string;
  azoDyesFree: boolean;
  heavyMetalsTested: boolean;
  certificationsDocumented: string[];
}

export interface CommercialInfo {
  sampleAvailability: 'In Stock (Immediate Swatch)' | 'Sampling on Request (3-5 Days)' | 'Development Quality';
  moqMeters: number;
  sampleLeadTimeDays: number;
  bulkLeadTimeWeeks: number;
  pricingTerm: 'Quotation On Request (FOB / CIF / Ex-Mill)';
  exportPacking: string;
  origin: 'Gujarat Mill, India';
  verifiedStatus: 'Verified Mill Quality' | 'Under Laboratory Re-test' | 'Custom Specification';
}

export interface DenimFabric {
  id: string;
  code: string;
  name: string;
  slug: string;
  category: DenimCategory;
  subcategories: string[];
  description: string;
  heroImage: string;
  galleryImages: string[];
  tags: string[];
  revision: string;
  issueDate: string;
  intendedUses: string[];
  
  // Detailed technical subsections
  fibre: FibreComposition;
  yarn: YarnSpecification;
  construction: WeaveConstruction;
  measurements: FabricMeasurements;
  dyeing: DyeingSpecification;
  stretch: StretchPerformance;
  stability: DimensionalStability;
  mechanical: MechanicalTestResults;
  finishing: FinishingSpecification;
  compliance: ChemicalCompliance;
  commercial: CommercialInfo;
}

export type DenimCategory =
  | 'Classic and Traditional'
  | 'Stretch and Performance'
  | 'Premium and Heritage'
  | 'Lightweight'
  | 'Medium-Weight'
  | 'Heavyweight'
  | 'Special Weave and Surface'
  | 'Colour and Dye Variations'
  | 'Washed and Finished'
  | 'Sustainable and Alternative-Fibre'
  | 'Specialty and Fashion'
  | 'Functional and Industrial'
  | 'Special Construction';

export interface B2BEnquiry {
  id: string;
  type: 'quote' | 'sample' | 'custom' | 'bulk';
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  buyerType: 'Garment Manufacturer' | 'Apparel Brand' | 'Textile Sourcing Office' | 'Buying House' | 'Wholesaler / Trader' | 'Independent Designer';
  fabricCode?: string;
  fabricCategory?: string;
  targetGsm?: string;
  requiredMeters: number;
  targetDeliveryDate?: string;
  specifications: string;
  createdAt: string;
  status: 'New' | 'Reviewing' | 'Sample Dispatched' | 'Quote Sent';
}

export interface ShippingDestination {
  id: string;
  country: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  airTransitDays: string;
  seaTransitDays: string;
  primaryPort: string;
  airHub: string;
  annualExportVolumeMeters: string;
  notableBuyers: string;
}
