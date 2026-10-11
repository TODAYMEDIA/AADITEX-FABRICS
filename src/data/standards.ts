export interface TestStandard {
  id: string;
  name: string;
  code: string;
  organization: 'ASTM' | 'ISO' | 'AATCC';
  propertyMeasured: string;
  specimenPreparation: string;
  testConditions: string;
  unit: string;
  industryAcceptanceCriteria: string;
  aaditexInternalThreshold: string;
  applicableCategories: string[];
}

export const TESTING_STANDARDS: TestStandard[] = [
  {
    id: 'astm-d3776',
    name: 'Standard Test Methods for Mass Per Unit Area (Weight) of Fabric',
    code: 'ASTM D3776 / D3776M-20',
    organization: 'ASTM',
    propertyMeasured: 'Fabric mass per square metre (GSM) and ounce per square yard (oz/yd²)',
    specimenPreparation: 'Conditioned at 21°C ± 1°C and 65% ± 2% RH for minimum 4 hours; circular die-cut specimens from 5 distinct width positions (excluding selvedge).',
    testConditions: 'Standard textile atmospheric equilibrium; calibrated 4-decimal electronic analytical balance.',
    unit: 'GSM & oz/yd²',
    industryAcceptanceCriteria: 'Within ± 3% to 5% of confirmed contract specification.',
    aaditexInternalThreshold: 'Within ± 2.5% strictly verified per production lot.',
    applicableCategories: ['All Denim Qualities']
  },
  {
    id: 'astm-d3775',
    name: 'Standard Test Method for Warp and Weft Count (Thread Density) in Woven Fabric',
    code: 'ASTM D3775-17',
    organization: 'ASTM',
    propertyMeasured: 'Warp ends per inch (EPI) and weft picks per inch (PPI)',
    specimenPreparation: 'Full width fabric sample tension-free on flat inspection table; optical micrometer or calibrated pick glass.',
    testConditions: '5 non-overlapping counting zones across usable width excluding 2 inches from each selvedge edge.',
    unit: 'Ends / Picks per inch',
    industryAcceptanceCriteria: '± 2 ends/inch and ± 2 picks/inch from construction sheet.',
    aaditexInternalThreshold: '± 1 pick/inch tolerance maintained by optical loom monitors.',
    applicableCategories: ['All Denim Qualities']
  },
  {
    id: 'astm-d5034',
    name: 'Standard Test Method for Breaking Strength and Elongation of Textile Fabrics (Grab Test)',
    code: 'ASTM D5034-21',
    organization: 'ASTM',
    propertyMeasured: 'Tensile breaking force (strength) and elongation at break in warp and weft directions',
    specimenPreparation: '100 mm x 150 mm rectangular specimens (5 warp, 5 weft); pneumatic jaws with 25 mm x 25 mm rubber face clamps.',
    testConditions: 'Constant rate of traverse (CRT) tensile machine; gauge length 75 mm, crosshead speed 300 mm/min.',
    unit: 'Newtons (N) / Pounds-force (lbf)',
    industryAcceptanceCriteria: 'Warp ≥ 650 N, Weft ≥ 400 N for medium-weight denim.',
    aaditexInternalThreshold: 'Warp ≥ 850 N, Weft ≥ 550 N with continuous batch records.',
    applicableCategories: ['Classic Cotton', 'Heavyweight', 'Functional Workwear']
  },
  {
    id: 'astm-d1424',
    name: 'Standard Test Method for Tearing Strength of Fabrics by Falling-Pendulum (Elmendorf-Type) Apparatus',
    code: 'ASTM D1424-21',
    organization: 'ASTM',
    propertyMeasured: 'Resistance to propagation of a single-rip tear in warp and weft',
    specimenPreparation: 'Die-cut templated specimens with 20 mm starter slit; 5 specimens in warp direction, 5 in weft direction.',
    testConditions: 'Calibrated Elmendorf falling pendulum tester; potential energy converted to tearing force.',
    unit: 'Newtons (N) or Grams-force (gf)',
    industryAcceptanceCriteria: 'Tear force ≥ 35 N (warp) / ≥ 30 N (weft) for bottom-weight apparel.',
    aaditexInternalThreshold: 'Tear force ≥ 48 N (warp) / ≥ 42 N (weft) across standard jeans qualities.',
    applicableCategories: ['All Denim Qualities']
  },
  {
    id: 'astm-d3107',
    name: 'Standard Test Methods for Stretch Properties of Fabrics Woven from Stretch Yarns',
    code: 'ASTM D3107-20',
    organization: 'ASTM',
    propertyMeasured: 'Fabric stretch percentage under load, growth after specified hang time, and elastic recovery',
    specimenPreparation: '65 mm x 560 mm conditioned strips; bench marks placed 250 mm apart; hanger clamps.',
    testConditions: 'Static weight load of 4.0 lbf (1.8 kg) applied for 30 minutes; recovery measured after 1 hour relaxed rest.',
    unit: 'Percentage (%)',
    industryAcceptanceCriteria: 'Elongation matching target; elastic recovery ≥ 88% after 1 hour.',
    aaditexInternalThreshold: 'Dual-core stretch qualities guarantee ≥ 92% recovery; growth ≤ 3.0%.',
    applicableCategories: ['Stretch and Performance Denim']
  },
  {
    id: 'iso-105-x12',
    name: 'Textiles - Tests for Colour Fastness - Part X12: Colour Fastness to Rubbing',
    code: 'ISO 105-X12 / AATCC 8',
    organization: 'ISO',
    propertyMeasured: 'Transfer of colour from denim surface to dry and wet standard cotton crocking cloths',
    specimenPreparation: 'Specimen mounted on Crockmeter bed; 50 mm x 50 mm desized cotton crock square attached to 16 mm peg.',
    testConditions: '9 N downward finger force; 10 complete back-and-forth cycles at 1 cycle/second; evaluated under D65 standard illuminant.',
    unit: 'Grey Scale Rating (Grade 1 to 5)',
    industryAcceptanceCriteria: 'Dry rubbing ≥ Grade 3; Wet rubbing ≥ Grade 1.5-2 for genuine indigo denim.',
    aaditexInternalThreshold: 'Dry rubbing Grade 3-4; Wet rubbing Grade 2.0 minimum strictly controlled.',
    applicableCategories: ['Indigo & Sulphur Dyed Denim']
  },
  {
    id: 'aatcc-135',
    name: 'Dimensional Changes of Fabrics after Home Laundering',
    code: 'AATCC 135 / ISO 6330',
    organization: 'AATCC',
    propertyMeasured: 'Dimensional shrinkage (warp and weft) and garment spirality / torque after laundering',
    specimenPreparation: '500 mm x 500 mm squares; calibrated 350 mm gauge marks inscribed in 3 warp and 3 weft positions.',
    testConditions: '3 complete wash cycles at 40°C with standard AATCC 1993 detergent; tumble dried at normal cycle.',
    unit: 'Percentage (%)',
    industryAcceptanceCriteria: 'Sanforized denim: Warp -3.0% max, Weft -3.0% max; Skew ≤ 2.0%.',
    aaditexInternalThreshold: 'Warp -2.5% max, Weft -2.0% max; Skew ≤ 1.5% with pre-skew stenter finish.',
    applicableCategories: ['All Denim Qualities']
  },
  {
    id: 'iso-12947-2',
    name: 'Determination of the Abrasion Resistance of Fabrics by the Martindale Method',
    code: 'ISO 12947-2:2016',
    organization: 'ISO',
    propertyMeasured: 'Specimen breakdown (thread breakage) under multidirectional cyclic friction against standard wool abradant',
    specimenPreparation: '38 mm circular specimens clamped into Martindale rubbing holders with 12 kPa nominal pressure.',
    testConditions: 'Lissajous figure motion pattern; periodic inspection at 5,000, 10,000, 20,000, and 50,000 cycle intervals.',
    unit: 'Number of Rubbing Cycles',
    industryAcceptanceCriteria: 'Standard apparel denim: ≥ 30,000 cycles without yarn failure.',
    aaditexInternalThreshold: 'Workwear denim: ≥ 80,000 to 100,000 cycles; Standard: ≥ 45,000 cycles.',
    applicableCategories: ['Functional & Workwear', 'Heavyweight', 'Classic Cotton']
  },
  {
    id: 'astm-d5430',
    name: 'Standard Test Methods for Visually Inspecting and Grading Fabrics (4-Point System)',
    code: 'ASTM D5430-13',
    organization: 'ASTM',
    propertyMeasured: 'Surface defects, slub faults, broken ends, dye streaks, and roll continuity grading',
    specimenPreparation: '100% full-length roll inspection on illuminated 60° inclined continuous rewinding inspection tables.',
    testConditions: 'Constant fabric speed 15 m/min; overhead D65 and back-light inspection lamps; calibrated defect counter.',
    unit: 'Defect Points per 100 Square Yards',
    industryAcceptanceCriteria: 'First-quality standard grade: ≤ 28 points per 100 square yards.',
    aaditexInternalThreshold: 'Strict export benchmark: ≤ 18 points per 100 square yards with barcode log.',
    applicableCategories: ['All Denim Qualities']
  }
];
