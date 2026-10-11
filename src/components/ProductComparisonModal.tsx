import React from 'react';
import { DenimFabric } from '../types/denim';
import { X, Trash2, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProductComparisonModalProps {
  fabrics: DenimFabric[];
  onClose: () => void;
  onRemoveFabric: (id: string) => void;
  onClearAll: () => void;
  onRequestQuote: (fabric: DenimFabric) => void;
  onOpenDatasheet: (fabric: DenimFabric) => void;
}

export const ProductComparisonModal: React.FC<ProductComparisonModalProps> = ({
  fabrics,
  onClose,
  onRemoveFabric,
  onClearAll,
  onRequestQuote,
  onOpenDatasheet,
}) => {
  if (fabrics.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-[#071426] border border-[#F5A623]/50 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1B32] border-b border-[#174A7E]/60 flex items-center justify-between gap-4 shrink-0">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>Denim Technical Comparison Table</span>
              <span className="text-xs bg-[#123E70] text-[#FFD36A] px-2 py-0.5 rounded font-mono font-normal">
                {fabrics.length} of 4 selected
              </span>
            </h2>
            <p className="text-xs text-[#A9B6C7] mt-0.5">
              Side-by-side comparison across weight, fibre, weave, stretch elasticity, and mechanical benchmarks.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClearAll}
              className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors px-2.5 py-1.5 rounded hover:bg-red-950/30"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-[#071426] rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Comparison Table */}
        <div className="overflow-x-auto p-6">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#174A7E]/60">
                <th className="p-3 w-48 font-bold text-[#FFD36A] uppercase tracking-wider text-[11px] bg-[#071426] sticky left-0 z-10">
                  Specification Parameter
                </th>
                {fabrics.map((fabric) => (
                  <th key={fabric.id} className="p-3 min-w-[200px] align-top bg-[#0B1B32]/60 border-l border-[#174A7E]/40">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-[#FFD36A] bg-[#123E70] px-2 py-0.5 rounded">
                        {fabric.code}
                      </span>
                      <button
                        onClick={() => onRemoveFabric(fabric.id)}
                        className="text-slate-400 hover:text-red-400 p-1"
                        title="Remove from comparison"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="font-bold text-white mt-1 line-clamp-1">{fabric.name}</div>
                    <div className="text-[11px] text-[#A9B6C7] line-clamp-1">{fabric.category}</div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-[#174A7E]/30">
              {/* Weight */}
              <tr className="hover:bg-[#0B1B32]/30">
                <td className="p-3 font-semibold text-[#A9B6C7] bg-[#071426] sticky left-0 z-10">
                  Weight (oz/yd² & GSM)
                </td>
                {fabrics.map((fabric) => (
                  <td key={fabric.id} className="p-3 font-mono font-bold text-[#FFD36A] border-l border-[#174A7E]/30">
                    {fabric.measurements.weightOzPerSqYd} oz · {fabric.measurements.finishedGSM} GSM
                  </td>
                ))}
              </tr>

              {/* Composition */}
              <tr className="hover:bg-[#0B1B32]/30">
                <td className="p-3 font-semibold text-[#A9B6C7] bg-[#071426] sticky left-0 z-10">
                  Fibre Composition
                </td>
                {fabrics.map((fabric) => (
                  <td key={fabric.id} className="p-3 text-slate-200 border-l border-[#174A7E]/30">
                    {fabric.fibre.overall}
                  </td>
                ))}
              </tr>

              {/* Weave Type */}
              <tr className="hover:bg-[#0B1B32]/30">
                <td className="p-3 font-semibold text-[#A9B6C7] bg-[#071426] sticky left-0 z-10">
                  Weave Construction
                </td>
                {fabrics.map((fabric) => (
                  <td key={fabric.id} className="p-3 font-medium text-white border-l border-[#174A7E]/30">
                    {fabric.construction.weaveType} ({fabric.construction.twillDirection})
                  </td>
                ))}
              </tr>

              {/* Loom & Selvedge */}
              <tr className="hover:bg-[#0B1B32]/30">
                <td className="p-3 font-semibold text-[#A9B6C7] bg-[#071426] sticky left-0 z-10">
                  Loom / Selvedge Edge
                </td>
                {fabrics.map((fabric) => (
                  <td key={fabric.id} className="p-3 text-slate-300 border-l border-[#174A7E]/30">
                    {fabric.construction.loomType} · {fabric.construction.selvedgeType}
                  </td>
                ))}
              </tr>

              {/* Stretch Performance */}
              <tr className="hover:bg-[#0B1B32]/30">
                <td className="p-3 font-semibold text-[#A9B6C7] bg-[#071426] sticky left-0 z-10">
                  Stretch & Recovery
                </td>
                {fabrics.map((fabric) => (
                  <td key={fabric.id} className="p-3 border-l border-[#174A7E]/30">
                    <span className="font-semibold text-white">
                      {fabric.stretch.hasStretch ? `${fabric.stretch.weftStretchPercentage}% Weft Elongation` : 'Rigid (0%)'}
                    </span>
                    <span className="block text-[11px] text-[#A9B6C7]">
                      Recovery: {fabric.stretch.recoveryPercentage}%
                    </span>
                  </td>
                ))}
              </tr>

              {/* Warp Dye Method */}
              <tr className="hover:bg-[#0B1B32]/30">
                <td className="p-3 font-semibold text-[#A9B6C7] bg-[#071426] sticky left-0 z-10">
                  Dyeing Technology
                </td>
                {fabrics.map((fabric) => (
                  <td key={fabric.id} className="p-3 text-slate-200 border-l border-[#174A7E]/30">
                    {fabric.dyeing.warpDyeMethod} ({fabric.dyeing.dyeDipsCount} Dips)
                  </td>
                ))}
              </tr>

              {/* Usable Width */}
              <tr className="hover:bg-[#0B1B32]/30">
                <td className="p-3 font-semibold text-[#A9B6C7] bg-[#071426] sticky left-0 z-10">
                  Usable Width (Inches)
                </td>
                {fabrics.map((fabric) => (
                  <td key={fabric.id} className="p-3 font-mono text-white border-l border-[#174A7E]/30">
                    {fabric.measurements.usableWidthInches}&quot; (Total: {fabric.measurements.totalWidthInches}&quot;)
                  </td>
                ))}
              </tr>

              {/* Shrinkage */}
              <tr className="hover:bg-[#0B1B32]/30">
                <td className="p-3 font-semibold text-[#A9B6C7] bg-[#071426] sticky left-0 z-10">
                  Dimensional Shrinkage (Warp/Weft)
                </td>
                {fabrics.map((fabric) => (
                  <td key={fabric.id} className="p-3 font-mono text-slate-300 border-l border-[#174A7E]/30">
                    {fabric.stability.warpShrinkage} / {fabric.stability.weftShrinkage}
                  </td>
                ))}
              </tr>

              {/* Abrasion Resistance */}
              <tr className="hover:bg-[#0B1B32]/30">
                <td className="p-3 font-semibold text-[#A9B6C7] bg-[#071426] sticky left-0 z-10">
                  Martindale Abrasion Cycles
                </td>
                {fabrics.map((fabric) => (
                  <td key={fabric.id} className="p-3 font-mono text-white border-l border-[#174A7E]/30">
                    {fabric.mechanical.abrasionCyclesMartindale}
                  </td>
                ))}
              </tr>

              {/* MOQ */}
              <tr className="hover:bg-[#0B1B32]/30">
                <td className="p-3 font-semibold text-[#A9B6C7] bg-[#071426] sticky left-0 z-10">
                  Production MOQ
                </td>
                {fabrics.map((fabric) => (
                  <td key={fabric.id} className="p-3 font-mono text-slate-200 border-l border-[#174A7E]/30">
                    {fabric.commercial.moqMeters.toLocaleString()} Metres
                  </td>
                ))}
              </tr>

              {/* Action Buttons */}
              <tr className="bg-[#0B1B32]/40">
                <td className="p-3 font-bold text-white bg-[#071426] sticky left-0 z-10">
                  Actions
                </td>
                {fabrics.map((fabric) => (
                  <td key={fabric.id} className="p-3 border-l border-[#174A7E]/30 space-y-1.5">
                    <button
                      onClick={() => onOpenDatasheet(fabric)}
                      className="w-full py-1.5 bg-[#123E70] hover:bg-[#174A7E] text-white rounded text-xs font-semibold"
                    >
                      View Datasheet
                    </button>
                    <button
                      onClick={() => onRequestQuote(fabric)}
                      className="w-full py-1.5 bg-gradient-to-r from-[#FFD36A] to-[#F5A623] text-[#071426] rounded text-xs font-bold hover:brightness-110"
                    >
                      Request Quote
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
