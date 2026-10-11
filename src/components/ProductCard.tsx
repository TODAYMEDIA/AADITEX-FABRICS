import React from 'react';
import { DenimFabric } from '../types/denim';
import { FileText, Check, Plus, Layers, Sparkles, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  fabric: DenimFabric;
  onOpenDatasheet: (fabric: DenimFabric) => void;
  onRequestQuote: (fabric: DenimFabric) => void;
  isCompared: boolean;
  onToggleCompare: (fabric: DenimFabric) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  fabric,
  onOpenDatasheet,
  onRequestQuote,
  isCompared,
  onToggleCompare,
}) => {
  return (
    <div className="group bg-[#0B1B32] border border-[#174A7E]/50 hover:border-[#F5A623]/60 rounded-xl overflow-hidden shadow-lg transition-all duration-200 flex flex-col justify-between">
      {/* Top Image & Visual Header */}
      <div>
        <div className="relative aspect-[4/3] bg-[#071426] overflow-hidden">
          <img
            src={fabric.heroImage}
            alt={fabric.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Fallback to high-contrast textured gradient box if network asset hiccup
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B32] via-transparent to-black/30 pointer-events-none" />

          {/* Top Bar inside Card: Code & Compare */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
            <span className="font-mono text-xs font-bold bg-[#071426]/90 text-[#FFD36A] px-2.5 py-1 rounded border border-[#F5A623]/40 tracking-wider">
              {fabric.code}
            </span>

            <button
              onClick={() => onToggleCompare(fabric)}
              className={`text-xs px-2.5 py-1 rounded font-medium flex items-center gap-1 transition-colors ${
                isCompared
                  ? 'bg-[#F5A623] text-[#071426] font-bold shadow-sm'
                  : 'bg-[#071426]/85 text-[#A9B6C7] hover:text-white border border-[#174A7E]'
              }`}
              title="Add to comparison table"
            >
              {isCompared ? <Check className="w-3 h-3 stroke-[3]" /> : <Plus className="w-3 h-3" />}
              <span>{isCompared ? 'Compared' : 'Compare'}</span>
            </button>
          </div>

          {/* Bottom Badge inside Image: Weave & Weight */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-200 pointer-events-none">
            <span className="bg-[#071426]/80 px-2 py-0.5 rounded backdrop-blur-sm border border-[#174A7E]/40">
              {fabric.construction.weaveType}
            </span>
            <span className="bg-[#123E70]/90 px-2 py-0.5 rounded text-[#FFD36A] font-semibold backdrop-blur-sm border border-[#F5A623]/30">
              {fabric.measurements.weightOzPerSqYd} oz · {fabric.measurements.finishedGSM} GSM
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4">
          <div className="text-[11px] text-[#A9B6C7] mb-1 font-medium truncate">
            {fabric.category}
          </div>

          <h3 className="text-sm font-bold text-white group-hover:text-[#FFD36A] transition-colors line-clamp-1">
            {fabric.name}
          </h3>

          <p className="text-xs text-[#A9B6C7] mt-1.5 line-clamp-2 leading-relaxed">
            {fabric.description}
          </p>

          {/* Technical Specs Key Values */}
          <div className="mt-3 pt-3 border-t border-[#174A7E]/40 grid grid-cols-2 gap-2 text-[11px]">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Composition</span>
              <span className="font-medium text-slate-200 truncate block">{fabric.fibre.overall}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Stretch Profile</span>
              <span className="font-medium text-[#FFD36A] truncate block">
                {fabric.stretch.hasStretch ? `${fabric.stretch.weftStretchPercentage}% Weft Stretch` : 'Rigid (0%)'}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Dye System</span>
              <span className="font-medium text-slate-200 truncate block">{fabric.dyeing.warpDyeMethod}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Usable Width</span>
              <span className="font-medium text-slate-200 truncate block">{fabric.measurements.usableWidthInches}&quot; ({fabric.measurements.totalWidthInches}&quot; total)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 pt-0 flex items-center gap-2">
        <button
          onClick={() => onOpenDatasheet(fabric)}
          className="flex-1 py-2 px-3 bg-[#123E70] hover:bg-[#174A7E] text-white text-xs font-semibold rounded-lg border border-[#174A7E] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-[#F5A623]" />
          <span>Datasheet</span>
        </button>

        <button
          onClick={() => onRequestQuote(fabric)}
          className="py-2 px-3 bg-gradient-to-r from-[#FFD36A] to-[#F5A623] hover:brightness-110 active:brightness-95 text-[#071426] text-xs font-bold rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
        >
          Enquire
        </button>
      </div>
    </div>
  );
};
