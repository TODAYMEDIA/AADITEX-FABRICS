import React from 'react';
import { Droplets, Leaf, Recycle, ShieldCheck, Sun, CheckCircle2, ArrowRight } from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (tab: string) => void;
  onOpenQuote: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
          Environmental Stewardship
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Responsible Denim Engineering & Circular Materials
        </h1>
        <p className="text-sm text-[#A9B6C7] leading-relaxed">
          Pioneering lower-impact indigo dyeing, closed-loop water treatment, and certified organic and wood-pulp lyocell fibre integrations.
        </p>
      </div>

      {/* Verified Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 space-y-3 shadow-lg">
          <div className="p-2.5 rounded-lg bg-[#123E70] text-[#FFD36A] w-fit">
            <Leaf className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Responsible Fibres</h3>
          <p className="text-xs text-[#A9B6C7] leading-relaxed">
            Sourcing GOTS-certified organic cotton from verified regional agricultural cooperatives alongside Lenzing TENCEL™ lyocell derived from sustainably managed forests.
          </p>
        </div>

        <div className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 space-y-3 shadow-lg">
          <div className="p-2.5 rounded-lg bg-[#123E70] text-[#FFD36A] w-fit">
            <Droplets className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Closed-Loop Water Recycling</h3>
          <p className="text-xs text-[#A9B6C7] leading-relaxed">
            Multi-stage membrane bioreactor (MBR) and reverse osmosis (RO) effluent treatment plants recycling process water back into continuous rope wash boxes.
          </p>
        </div>

        <div className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 space-y-3 shadow-lg">
          <div className="p-2.5 rounded-lg bg-[#123E70] text-[#FFD36A] w-fit">
            <Recycle className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Clean Chemical Management</h3>
          <p className="text-xs text-[#A9B6C7] leading-relaxed">
            100% compliance with ZDHC MRSL Level 3 standards. Elimination of hazardous reducing agents, toxic heavy metals, and banned Azo dyestuffs across all dye ranges.
          </p>
        </div>
      </div>

      {/* Sustainable Manufacturing Initiatives */}
      <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-8 sm:p-12 shadow-xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
            Engineering Reductions
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">
            Measurable Environmental Improvements
          </h2>
          <p className="text-xs text-[#A9B6C7] mt-1">
            Data-backed efficiency benchmarks achieved across our Gujarat manufacturing facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-3">
            <h3 className="text-sm font-bold text-[#FFD36A]">Nitrogen-Blanketed Dye Vats</h3>
            <p className="text-[#A9B6C7] leading-relaxed">
              By introducing an inert nitrogen atmosphere over the leuco-indigo dye vats, we prevent premature atmospheric oxidation of the bath. This cuts consumption of sodium hydrosulphite by over 40% and reduces sulphite salt discharge in effluent.
            </p>
          </div>

          <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-3">
            <h3 className="text-sm font-bold text-[#FFD36A]">Thermal Heat Recovery Systems</h3>
            <p className="text-[#A9B6C7] leading-relaxed">
              Exhaust flues from singeing and stenter heat-setting frames pass through air-to-water heat exchangers, preheating washing liquor to 60°C and substantially lowering boiler natural gas consumption.
            </p>
          </div>
        </div>
      </div>

      {/* Compliance & Certifications Note */}
      <div className="bg-[#071426] border border-[#F5A623]/30 rounded-2xl p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#FFD36A] uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
          <span>Documentation Integrity & Verification Policy</span>
        </div>
        <h3 className="text-lg font-bold text-white">
          Certified Evidence for Every Environmental Claim
        </h3>
        <p className="text-xs text-[#A9B6C7] leading-relaxed max-w-3xl">
          In compliance with international greenwashing directives, AADITEX FABRICS only claims certifications supported by valid, audit-ready chain-of-custody documentation (such as GOTS Transaction Certificates for organic cotton and Lenzing License IDs for TENCEL™ qualities). Sourcing managers can request specific lot documentation with any commercial order.
        </p>

        <div className="pt-2 flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate('products')}
            className="px-5 py-2.5 bg-[#123E70] hover:bg-[#174A7E] text-[#FFD36A] font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Explore Sustainable Denim Qualities
          </button>
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 bg-gradient-to-r from-[#FFD36A] to-[#F5A623] text-[#071426] font-bold text-xs rounded-xl transition-all cursor-pointer"
          >
            Request Sourcing Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
