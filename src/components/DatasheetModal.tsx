import React, { useRef } from 'react';
import { DenimFabric } from '../types/denim';
import { BrandLogo } from './BrandLogo';
import { X, Printer, Download, Mail, CheckCircle2, ShieldAlert, Layers, Scale, Sparkles, Box } from 'lucide-react';

interface DatasheetModalProps {
  fabric: DenimFabric | null;
  onClose: () => void;
  onRequestQuote: (fabric: DenimFabric) => void;
  onRequestSample: (fabric: DenimFabric) => void;
  onToggleCompare: (fabric: DenimFabric) => void;
  isCompared: boolean;
}

export const DatasheetModal: React.FC<DatasheetModalProps> = ({
  fabric,
  onClose,
  onRequestQuote,
  onRequestSample,
  onToggleCompare,
  isCompared,
}) => {
  const printRef = useRef<HTMLDivElement>(null);

  if (!fabric) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#071426] border border-[#F5A623]/50 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[92vh]">
        {/* Sticky Action Header */}
        <div className="px-6 py-4 bg-[#0B1B32] border-b border-[#174A7E]/60 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold bg-[#123E70] text-[#FFD36A] px-3 py-1 rounded border border-[#F5A623]/40">
              {fabric.code}
            </span>
            <div className="hidden sm:block">
              <h2 className="text-base font-bold text-white truncate max-w-md">{fabric.name}</h2>
              <p className="text-xs text-[#A9B6C7]">Technical Fabric Specification Sheet · {fabric.revision}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#071426] hover:bg-[#123E70] text-[#A9B6C7] hover:text-white rounded-lg border border-[#174A7E] text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#F5A623]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={() => onRequestSample(fabric)}
              className="px-3 py-1.5 bg-[#123E70] hover:bg-[#174A7E] text-[#FFD36A] rounded-lg border border-[#F5A623]/40 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Request Swatch</span>
            </button>

            <button
              onClick={() => onRequestQuote(fabric)}
              className="px-3.5 py-1.5 bg-gradient-to-r from-[#FFD36A] to-[#F5A623] text-[#071426] rounded-lg text-xs font-bold hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
            >
              Request Quote
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-[#071426] rounded-lg transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Datasheet Body */}
        <div ref={printRef} className="overflow-y-auto p-6 sm:p-8 space-y-8 print:p-0 print:bg-white print:text-black">
          {/* Datasheet Header Block */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#174A7E]/50">
            <div className="space-y-2">
              <BrandLogo size="lg" />
              <div className="pt-2">
                <span className="text-xs uppercase tracking-widest text-[#FFD36A] font-semibold">
                  Official Mill Technical Datasheet
                </span>
                <h1 className="text-2xl font-bold text-white mt-1">{fabric.name}</h1>
                <p className="text-xs text-[#A9B6C7] max-w-2xl leading-relaxed mt-1">
                  {fabric.description}
                </p>
              </div>
            </div>

            {/* Verification Stamp & Revision Meta */}
            <div className="bg-[#0B1B32] p-4 rounded-xl border border-[#F5A623]/30 min-w-[240px] text-xs space-y-1.5 shrink-0">
              <div className="flex items-center gap-1.5 text-[#34D399] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{fabric.commercial.verifiedStatus}</span>
              </div>
              <div className="text-slate-300">
                <strong>SKU / Code:</strong> <span className="font-mono text-[#FFD36A]">{fabric.code}</span>
              </div>
              <div className="text-slate-300">
                <strong>Document Rev:</strong> <span className="font-mono">{fabric.revision}</span>
              </div>
              <div className="text-slate-300">
                <strong>Issue Date:</strong> <span>{fabric.issueDate}</span>
              </div>
              <div className="text-slate-300">
                <strong>Mill Origin:</strong> <span>{fabric.commercial.origin}</span>
              </div>
            </div>
          </div>

          {/* Section A & B: Fibre Composition & Yarn Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fibre Composition */}
            <div className="bg-[#0B1B32] p-5 rounded-xl border border-[#174A7E]/50">
              <h3 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                <span>B. Fibre Composition & Origin</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Overall Composition</span>
                  <span className="font-semibold text-white">{fabric.fibre.overall}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Warp Fibre</span>
                  <span className="text-slate-200 text-right">{fabric.fibre.warp}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Weft Fibre</span>
                  <span className="text-slate-200 text-right">{fabric.fibre.weft}</span>
                </div>
                {fabric.fibre.cottonType && (
                  <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                    <span className="text-[#A9B6C7]">Cotton Variety</span>
                    <span className="text-slate-200">{fabric.fibre.cottonType}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Composition Tolerance</span>
                  <span className="text-slate-200 font-mono">{fabric.fibre.tolerance}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#A9B6C7]">Verification Method</span>
                  <span className="text-slate-200">{fabric.fibre.verificationMethod}</span>
                </div>
              </div>
            </div>

            {/* Yarn Specifications */}
            <div className="bg-[#0B1B32] p-5 rounded-xl border border-[#174A7E]/50">
              <h3 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                <span>C. Yarn Specifications</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Warp Yarn Count</span>
                  <span className="font-mono font-semibold text-white">{fabric.yarn.warpCount}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Weft Yarn Count</span>
                  <span className="font-mono font-semibold text-white">{fabric.yarn.weftCount}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Spinning Technology</span>
                  <span className="text-slate-200">{fabric.yarn.spinningMethod}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Slub Characteristic</span>
                  <span className="text-slate-200">{fabric.yarn.slubProfile}</span>
                </div>
                {fabric.yarn.yarnStrength && (
                  <div className="flex justify-between py-1">
                    <span className="text-[#A9B6C7]">Single Yarn Strength</span>
                    <span className="text-slate-200 font-mono">{fabric.yarn.yarnStrength}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section D & E: Weave Construction & Weight / Dimensions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Weave Construction */}
            <div className="bg-[#0B1B32] p-5 rounded-xl border border-[#174A7E]/50">
              <h3 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                <span>D. Weave & Construction</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Weave Type</span>
                  <span className="font-semibold text-white">{fabric.construction.weaveType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Twill Direction</span>
                  <span className="text-slate-200">{fabric.construction.twillDirection}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Thread Density</span>
                  <span className="font-mono text-slate-200">{fabric.construction.warpEndsPerInch} EPI × {fabric.construction.weftPicksPerInch} PPI (Total: {fabric.construction.totalThreadDensity})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Loom Type</span>
                  <span className="text-slate-200">{fabric.construction.loomType}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#A9B6C7]">Selvedge Construction</span>
                  <span className="text-[#FFD36A] font-medium">{fabric.construction.selvedgeType}</span>
                </div>
              </div>
            </div>

            {/* Fabric Weight & Dimensions */}
            <div className="bg-[#0B1B32] p-5 rounded-xl border border-[#174A7E]/50">
              <h3 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                <span>E. Weight & Dimensions</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Finished Weight</span>
                  <span className="font-mono font-bold text-[#FFD36A]">{fabric.measurements.weightOzPerSqYd} oz/yd² ({fabric.measurements.finishedGSM} GSM)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Weight Classification</span>
                  <span className="text-slate-200">{fabric.measurements.weightClassification}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Weight Tolerance</span>
                  <span className="font-mono text-slate-200">{fabric.measurements.weightTolerance}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Width (Total / Usable)</span>
                  <span className="font-mono text-slate-200">{fabric.measurements.totalWidthInches}&quot; total / {fabric.measurements.usableWidthInches}&quot; cuttable usable width</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#A9B6C7]">Fabric Caliper Thickness</span>
                  <span className="font-mono text-slate-200">{fabric.measurements.thicknessMm} mm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section F & G: Dyeing / Colour & Stretch Performance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dyeing & Colour */}
            <div className="bg-[#0B1B32] p-5 rounded-xl border border-[#174A7E]/50">
              <h3 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                <span>F. Dyeing System & Colourfastness</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Warp Dye Method</span>
                  <span className="font-semibold text-white">{fabric.dyeing.warpDyeMethod} ({fabric.dyeing.dyeDipsCount} Dips)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Shade Name & Code</span>
                  <span className="text-[#FFD36A] font-medium">{fabric.dyeing.shadeName} [{fabric.dyeing.shadeCode}]</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Crocking Fastness (Dry / Wet)</span>
                  <span className="font-mono text-slate-200">{fabric.dyeing.dryRubbingFastness} / {fabric.dyeing.wetRubbingFastness}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#A9B6C7]">Washing & Lightfastness</span>
                  <span className="font-mono text-slate-200">{fabric.dyeing.washingColourfastness} / {fabric.dyeing.lightfastness}</span>
                </div>
              </div>
            </div>

            {/* Stretch & Recovery */}
            <div className="bg-[#0B1B32] p-5 rounded-xl border border-[#174A7E]/50">
              <h3 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                <span>G. Stretch, Recovery & Elasticity</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Stretch Category</span>
                  <span className="font-semibold text-white">{fabric.stretch.stretchCategory}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Weft Extension / Elongation</span>
                  <span className="font-mono text-[#FFD36A] font-bold">{fabric.stretch.weftStretchPercentage}% elongation</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#174A7E]/30">
                  <span className="text-[#A9B6C7]">Elastic Recovery (1 Hour)</span>
                  <span className="font-mono text-slate-200">{fabric.stretch.recoveryPercentage}% recovery</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#A9B6C7]">Test Standard & Load</span>
                  <span className="text-slate-200">{fabric.stretch.testStandard}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section H, I, J: Dimensional Stability, Mechanical & Finishing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stability */}
            <div className="bg-[#0B1B32] p-4 rounded-xl border border-[#174A7E]/50 text-xs space-y-2">
              <h4 className="font-bold text-[#FFD36A] uppercase tracking-wider text-[11px]">H. Shrinkage Stability</h4>
              <div className="flex justify-between border-b border-[#174A7E]/30 py-1">
                <span className="text-[#A9B6C7]">Warp Shrinkage</span>
                <span className="font-mono text-white">{fabric.stability.warpShrinkage}</span>
              </div>
              <div className="flex justify-between border-b border-[#174A7E]/30 py-1">
                <span className="text-[#A9B6C7]">Weft Shrinkage</span>
                <span className="font-mono text-white">{fabric.stability.weftShrinkage}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#A9B6C7]">Skew / Spirality</span>
                <span className="font-mono text-[#FFD36A]">{fabric.stability.skewPercentage}</span>
              </div>
            </div>

            {/* Mechanical Strength */}
            <div className="bg-[#0B1B32] p-4 rounded-xl border border-[#174A7E]/50 text-xs space-y-2">
              <h4 className="font-bold text-[#FFD36A] uppercase tracking-wider text-[11px]">I. Mechanical Strength</h4>
              <div className="flex justify-between border-b border-[#174A7E]/30 py-1">
                <span className="text-[#A9B6C7]">Tensile (Warp/Weft)</span>
                <span className="font-mono text-white truncate max-w-[120px]">{fabric.mechanical.warpTensileStrengthN}</span>
              </div>
              <div className="flex justify-between border-b border-[#174A7E]/30 py-1">
                <span className="text-[#A9B6C7]">Tear Strength</span>
                <span className="font-mono text-white truncate max-w-[120px]">{fabric.mechanical.tearStrengthN}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#A9B6C7]">Martindale Abrasion</span>
                <span className="font-mono text-[#FFD36A]">{fabric.mechanical.abrasionCyclesMartindale}</span>
              </div>
            </div>

            {/* Finishing Details */}
            <div className="bg-[#0B1B32] p-4 rounded-xl border border-[#174A7E]/50 text-xs space-y-2">
              <h4 className="font-bold text-[#FFD36A] uppercase tracking-wider text-[11px]">J. Finishing Treatment</h4>
              <div className="flex justify-between border-b border-[#174A7E]/30 py-1">
                <span className="text-[#A9B6C7]">Sanforized</span>
                <span className="font-bold text-[#34D399]">YES (Compressive)</span>
              </div>
              <div className="flex justify-between border-b border-[#174A7E]/30 py-1">
                <span className="text-[#A9B6C7]">Surface Hand</span>
                <span className="text-white">{fabric.finishing.handFeel}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#A9B6C7]">Laser & Ozone Ready</span>
                <span className="font-bold text-[#34D399]">100% Compatible</span>
              </div>
            </div>
          </div>

          {/* Section K, L, M: Compliance & Commercial Terms */}
          <div className="bg-[#0B1B32] p-5 rounded-xl border border-[#F5A623]/30 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div>
              <h4 className="font-bold text-[#FFD36A] uppercase tracking-wider mb-2">K. Chemical Compliance & Certifications</h4>
              <p className="text-[#A9B6C7] mb-2 leading-relaxed">
                Fabric complies with all international MRSL standards (ZDHC Level 3), Azo colourant bans, and formaldehyde limits (<span className="text-white font-mono">{fabric.compliance.formaldehydeStatus}</span>).
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {fabric.compliance.certificationsDocumented.map((cert, idx) => (
                  <span key={idx} className="bg-[#123E70] text-[#FFD36A] px-2 py-0.5 rounded text-[10px] font-medium border border-[#F5A623]/30">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#FFD36A] uppercase tracking-wider mb-2">M. Commercial Sourcing Parameters</h4>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#A9B6C7]">Sampling Status:</span>
                  <span className="text-[#34D399] font-medium">{fabric.commercial.sampleAvailability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A9B6C7]">Standard Production MOQ:</span>
                  <span className="font-mono text-white">{fabric.commercial.moqMeters.toLocaleString()} Metres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A9B6C7]">Lead Times:</span>
                  <span className="text-slate-200">Sampling: {fabric.commercial.sampleLeadTimeDays} days · Bulk: {fabric.commercial.bulkLeadTimeWeeks} weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A9B6C7]">Export Terms:</span>
                  <span className="text-slate-200">{fabric.commercial.pricingTerm}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Mill Declaration */}
          <div className="pt-4 border-t border-[#174A7E]/40 text-center text-[11px] text-slate-400">
            <p>
              This technical document is issued by AADITEX FABRICS Quality Assurance & Testing Division, Gujarat, India.
              Specifications are verified against ASTM, ISO, and AATCC test standards. Tolerances apply per commercial trade practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
