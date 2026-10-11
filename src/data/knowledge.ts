export interface ProcessStep {
  id: string;
  stageNumber: string;
  title: string;
  stageCategory: 'Yarn' | 'Dyeing' | 'Weaving' | 'Finishing' | 'Garment';
  headline: string;
  summary: string;
  machineryUsed: string[];
  keyParameters: { parameter: string; value: string; importance: string }[];
  qualityCheckpoints: string[];
  commonDefectsAndPrevention: { defect: string; rootCause: string; remedy: string }[];
  environmentalConsiderations: string;
}

export const MANUFACTURING_STEPS: ProcessStep[] = [
  {
    id: 'stage-1-spinning',
    stageNumber: '01',
    title: 'Fibre Selection & Precision Yarn Spinning',
    stageCategory: 'Yarn',
    headline: 'From Raw Shankar-6 Cotton Bales to High-Tenacity Ring & Slub Yarns',
    summary: 'The foundation of denim excellence begins with selecting long-staple Gujarat cotton bales (28–30 mm staple length) with high micronaire consistency. After high-efficiency blowroom opening, dedusting, and carding, slivers pass through drawframes to produce uniform roving for ring spinning, compact spinning, or specialized dual-core filament encapsulation.',
    machineryUsed: [
      'Trützschler Blowroom & Carding TC19',
      'Rieter RSB-D Drawframes',
      'Rieter G38 Ring Spinning Frames equipped with Amsler Slub Devices',
      'Murata Process Coner QPRO Plus Winding'
    ],
    keyParameters: [
      { parameter: 'Staple Length & Micronaire', value: '29.5 mm / 4.1 Mic', importance: 'Determines yarn tensile strength and dye absorption uniformity' },
      { parameter: 'Twist Multiplier (TM)', value: '3.65 – 3.85', importance: 'Balances yarn crispness with ring-dye penetration depth' },
      { parameter: 'Slub Amplitude & Pitch', value: '1.4x – 2.2x base count', importance: 'Creates authentic vintage surface texture without thin spots' }
    ],
    qualityCheckpoints: [
      'Uster Tester 5 analysis for yarn mass variation (CVm < 11.5%)',
      'Tensile breaking strength testing (Rkm > 18.0)',
      'Zweigle S3 yarn hairiness indexing'
    ],
    commonDefectsAndPrevention: [
      { defect: 'Roving nep accumulation', rootCause: 'Dull carding wire or over-compressed bale feed', remedy: 'Automated card clothing re-sharpening and optimized blowroom beaters' },
      { defect: 'Slub pitch clustering', rootCause: 'Microprocessor synchronization drift on ring slub drive', remedy: 'Digital optical encoder feedback loop verification' }
    ],
    environmentalConsiderations: 'High-volume suction filtration recycling 99% of cotton fly into secondary non-woven insulation pads; energy-efficient IE4 drive motors.'
  },
  {
    id: 'stage-2-rope-dyeing',
    stageNumber: '02',
    title: 'Warp Ball Warping & Continuous Rope Dyeing',
    stageCategory: 'Dyeing',
    headline: '16-Dip Deep Indigo Layering with Ring-Dye Precision',
    summary: 'Warp yarns are bundled into thick ropes of 350–450 ends on ball warpers. In the continuous rope dyeing range, ropes submerge sequentially through 12 to 18 indigo dye vats containing reduced leuco-indigo. Upon exiting each vat, the yarns rise through tall skying aeration racks where atmospheric oxygen oxidizes the dye molecules back to their water-insoluble deep blue state, creating the classic ring-dye effect (blue outer mantle, pure white cotton core).',
    machineryUsed: [
      'Karl Mayer Ball Warping Machines',
      'Morrison / Master Continuous Indigo Rope Dyeing Range (16-18 vats)',
      'Long-Arm Skying Oxidation Towers',
      'Automated Chemical Dosing & Redox Titration Systems'
    ],
    keyParameters: [
      { parameter: 'Indigo Concentration', value: '2.5 – 3.8 g/L', importance: 'Regulates shade depth and wash-down contrast' },
      { parameter: 'Oxidation-Reduction Potential (ORP)', value: '-740 mV to -780 mV', importance: 'Maintains complete solubility of leuco-indigo without over-reduction' },
      { parameter: 'pH Level', value: '11.8 – 12.2', importance: 'Controls dye strike rate and ring-dye white core preservation' }
    ],
    qualityCheckpoints: [
      'Inline spectrophotometric shade band monitoring (ΔE < 0.6)',
      'Cross-sectional yarn microscope checks for crisp white-core boundary',
      'Residual hydrosulphite titration every 60 minutes'
    ],
    commonDefectsAndPrevention: [
      { defect: 'Bronze or reddish cast bronzing', rootCause: 'Excess surface dye unwashed or over-concentrated bath', remedy: 'Enhanced multi-stage counter-current wash boxes with neutralizer' },
      { defect: 'Shade variation from roll to roll', rootCause: 'Dye bath replenishment rate variance', remedy: 'Automated gravimetric mass-flow chemical dosing system' }
    ],
    environmentalConsiderations: 'Closed-loop counter-current washing systems recycling 85% of wash liquor; nitrogen-blanketed vats cutting hydrosulphite consumption by 40%.'
  },
  {
    id: 'stage-3-weaving',
    stageNumber: '03',
    title: 'Re-Beaming, Sizing & High-Speed Weaving',
    stageCategory: 'Weaving',
    headline: 'High-Tension Looming on Air-Jet & Vintage Shuttle Looms',
    summary: 'After rope dyeing and drying, ropes are re-beamed into parallel warp sheets on Long Chain Beamers (LCB) and passed through sizing boxes applying modified corn/potato starch protective coatings. On our advanced Picanol OmniPlus air-jet looms and vintage Toyoda shuttle looms, precision weft insertion intertwines the white weft with the indigo warp at up to 1,000 picks per minute.',
    machineryUsed: [
      'Karl Mayer Long Chain Beamer (LCB)',
      'Benninger Sizing Machine with pre-wetting technology',
      'Picanol OmniPlus-i Air-Jet Looms (60-inch to 72-inch width)',
      'Restored Vintage Toyoda Narrow Shuttle Looms (30–32 inch selvedge)'
    ],
    keyParameters: [
      { parameter: 'Size Add-on Percentage', value: '8.5% – 10.5%', importance: 'Prevents warp yarn chafing under high reed friction' },
      { parameter: 'Loom Beat-up Tension', value: '180 – 240 daN', importance: 'Ensures dense pick compaction and true diagonal twill line angle' },
      { parameter: 'Weave shed geometry', value: 'Asymmetric 3/1 shed', importance: 'Preserves 80% indigo warp prominence on the fabric face' }
    ],
    qualityCheckpoints: [
      'Stop-motion drop wire testing for zero broken warp ends',
      'Optical pick counting sensors across loom width',
      'On-loom strobe lighting fabric surface inspection'
    ],
    commonDefectsAndPrevention: [
      { defect: 'Starting mark / reed marks', rootCause: 'Loom stopping tension relaxation', remedy: 'Automated electronic let-off and take-up position compensation' },
      { defect: 'Broken weft pick miss', rootCause: 'Weft yarn feeder tension knot', remedy: 'Dual pre-winder optical arrival detectors' }
    ],
    environmentalConsiderations: 'Water-soluble biodegradable organic starches requiring zero toxic chemical sizing additives; dry lint collection.'
  },
  {
    id: 'stage-4-finishing',
    stageNumber: '04',
    title: 'Mill Desizing, Skewing, Sanforization & Inspection',
    stageCategory: 'Finishing',
    headline: 'Dimensional Stability, Zero Leg-Twist Skewing & 4-Point Audit',
    summary: 'Loom-state denim undergoes singeing to remove protruding hairiness, followed by controlled desizing, hot water washing, and pre-skewing. Pre-skewing mechanically angles the warp yarns in the opposite direction of the twill torque (right-hand twill skews left) so finished garments hang plumb. The fabric then enters the rubber-belt Sanforizer where moist heat and compressive mechanical compaction permanently stabilizes residual shrinkage to under 2.5%.',
    machineryUsed: [
      'Osthoff-Senge High-Efficiency Double Singeing Machine',
      'Continuous Wash & Skew Correction Range',
      'Monforts Rubber-Belt Sanforizing Range',
      'Shelton Automated 4-Point Digital Inspection Tables'
    ],
    keyParameters: [
      { parameter: 'Skew Angle Correction', value: '4.5° to 6.5° counter-torque', importance: 'Eliminates leg twist in 5-pocket jeans after commercial washing' },
      { parameter: 'Sanforizer Compressive Shrinkage', value: '10% – 14% mechanical compression', importance: 'Guarantees residual shrinkage stays under 2.5% max' },
      { parameter: 'Moisture Regain', value: '7.0% – 8.5%', importance: 'Preserves cotton fibre elasticity and smooth drape' }
    ],
    qualityCheckpoints: [
      'AATCC 135 dimensional stability wash tests run every 2,000 metres',
      'Continuous spectrophotometer roll-to-roll shade recording',
      '100% 4-Point inspection grading with digital barcode ticketing'
    ],
    commonDefectsAndPrevention: [
      { defect: 'High residual shrinkage', rootCause: 'Insufficient steam shoe pressure on Sanforizer rubber belt', remedy: 'Calibrated hydraulic pressure control and feed speed synchronization' },
      { defect: 'Uneven skew across fabric width', rootCause: 'Uneven tender frame pin bar speed', remedy: 'Differential speed motor correction on stenter chain' }
    ],
    environmentalConsiderations: 'Heat recovery units capturing 80% of singeing and stenter exhaust thermal energy to preheat wash water.'
  }
];

export const DENIM_GLOSSARY = [
  { term: 'Right-Hand Twill (RHT / Z-Twill)', definition: 'The universal classic denim weave construction where diagonal twill ribs run upwards and to the right (from lower-left to upper-right). Produces a flatter, compact surface that fades with crisp, sharp contrast.' },
  { term: 'Left-Hand Twill (LHT / S-Twill)', definition: 'A twill weave where diagonal lines run upwards and to the left. As the yarn twist (Z-twist) interacts with the S-weave direction, fibres relax, producing an exceptionally soft hand feel favored for comfort jeans.' },
  { term: 'Broken Twill', definition: 'A weave construction introduced to eliminate fabric torque (leg twist). The diagonal twill direction alternates every two warp ends in a zigzag herringbone effect, yielding a smooth, balanced, non-twisting surface.' },
  { term: 'Rope Dyeing', definition: 'The gold-standard method for indigo warp dyeing. 350–450 yarn ends are gathered into loose ropes and submerged in multiple indigo dye baths. Prevents dye from penetrating the yarn core, resulting in the coveted "ring-dye" effect that yields high-contrast wash fades.' },
  { term: 'Slasher / Sheet Dyeing', definition: 'A process where warp yarns are dyed in an open, flat sheet rather than as ropes. Typically used for lighter weights, rapid lot turnaround, or sulphur and reactive dyes.' },
  { term: 'Selvedge (Self-Edge)', definition: 'A clean, tightly woven edge created by vintage narrow shuttle looms as the single continuous weft yarn turns around at each edge. Identified by colored ticker ID threads (e.g. red-line selvedge) that will not unravel.' },
  { term: 'Dual-Core Yarn', definition: 'A composite performance yarn containing two inner filament cores (typically an elastane core for stretch elasticity wrapped alongside an Elastomultiester / T400 core for high recovery power), sheathed in natural cotton fibres.' },
  { term: 'Sanforization', definition: 'A patented mechanical finishing process involving moist steam and a heavy rubber blanket that pre-shrinks fabric, reducing residual shrinkage from 12–15% down to less than 2–3%.' },
  { term: 'Leg Twist / Spirality', definition: 'A physical skew phenomenon where pant legs rotate sideways after washing due to the natural torque tension of twill weaves. Counteracted at the mill level via stenter skew-angle finishing or broken twill constructions.' },
  { term: 'Crocking', definition: 'The physical transfer of surface indigo dye to another dry or wet fabric or skin due to friction. Evaluated on a 1 to 5 scale using a standardized Crockmeter.' },
  { term: 'Ne (Number English / Cotton Count)', definition: 'Indirect yarn count system indicating the number of 840-yard hanks of yarn that weigh 1 pound. The higher the Ne number, the finer the yarn (e.g., 6s Ne is heavy coarse denim yarn; 40s Ne is fine shirting yarn).' }
];
