import React from 'react';
import { Factory, Cpu, Layers, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ManufacturingPageProps {
  onNavigate: (tab: string) => void;
  onOpenQuote: () => void;
}

export const ManufacturingPage: React.FC<ManufacturingPageProps> = ({ onNavigate, onOpenQuote }) => {
  const millTimeline = [
    {
      step: '01',
      title: 'Cotton Bale Selection & Fibre Testing',
      desc: 'Sourcing premium Shankar-6 long staple cotton (28–30 mm) from certified regional ginners with calibrated High Volume Instrument (HVI) testing for micronaire, length uniformity, and trash content.',
      tech: 'Zellweger Uster HVI 1000 Spectrum System',
    },
    {
      step: '02',
      title: 'Blowroom & Precision Spinning',
      desc: 'Automated opening, dedusting, multi-stage blending, and carding into sliver. Converted into ring-spun, compact, or dual-core performance yarns with programmable slub amplitude controllers.',
      tech: 'Rieter G38 Ring Frames with Amsler Slub Devices',
    },
    {
      step: '03',
      title: 'Ball Warping & Continuous Rope Dyeing',
      desc: 'Warp yarns gathered into continuous 400-end ropes. Submerged through 16 sequential indigo dye baths with controlled redox potential (-760 mV) and sky oxidation towers locking ring-dye white cores.',
      tech: 'Morrison 18-Vat Continuous Indigo Dyeing Range',
    },
    {
      step: '04',
      title: 'Re-Beaming & Sizing (Slashing)',
      desc: 'Ropes de-roped into flat warp sheets and passed through sizing boxes applying biodegradable corn starch coatings to protect warp threads against friction during high-speed loom beat-up.',
      tech: 'Karl Mayer Long Chain Beamer & Benninger Sizing',
    },
    {
      step: '05',
      title: 'High-Speed Air-Jet & Shuttle Weaving',
      desc: 'High-tension weaving up to 1,000 picks/minute on air-jet looms, and low-tension heritage weaving on vintage Toyoda narrow shuttle looms producing authentic red-line selvedge edges.',
      tech: 'Picanol OmniPlus-i Air-Jet & Toyoda Narrow Looms',
    },
    {
      step: '06',
      title: 'Singeing, Desizing & Pre-Skewing',
      desc: 'Double-jet gas singeing eliminates surface hairiness; stenter skew correction angles the fabric 5° counter to the twill direction, permanently preventing leg-twist spirality after laundry washing.',
      tech: 'Osthoff-Senge Singeing & Monforts Stenter Range',
    },
    {
      step: '07',
      title: 'Compressive Rubber-Belt Sanforization',
      desc: 'Moist steam and calibrated rubber-belt mechanical compaction permanently stabilizes residual shrinkage to under 2.5%, ensuring garment patterns cut to exact specifications.',
      tech: 'Monforts Rubber-Belt Sanforizing System',
    },
    {
      step: '08',
      title: '100% 4-Point Inspection & Dispatch',
      desc: 'Every roll audited over illuminated continuous inspection tables under D65 lighting. Barcode roll ticketing records individual roll length, usable width, defect points, and shade-band approval.',
      tech: 'Shelton Automated 4-Point Inspection Tables',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
          Manufacturing Capabilities
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Precision Denim Mill Operations in Gujarat
        </h1>
        <p className="text-sm text-[#A9B6C7] leading-relaxed">
          From raw cotton bale intake to final 4-point inspected roll dispatch, our integrated production sequence combines time-honoured indigo dye mastery with modern textile engineering.
        </p>
      </div>

      {/* Visual Timeline */}
      <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-8 sm:p-12 shadow-xl space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
            End-to-End Production Flow
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">
            Mill Manufacturing Timeline
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {millTimeline.map((item, idx) => (
            <div key={idx} className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[#FFD36A] font-mono text-xs font-bold mb-2">
                  <span>STAGE {item.step}</span>
                  <span className="text-[10px] text-[#A9B6C7] font-normal">Step {idx + 1}/8</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-[#A9B6C7] leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-3 border-t border-[#174A7E]/30 text-[11px] text-[#FFD36A] font-mono">
                {item.tech}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mill Capabilities Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
        <div className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 space-y-3">
          <div className="p-2.5 rounded-lg bg-[#123E70] text-[#FFD36A] w-fit">
            <Factory className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">In-House Manufacturing</h3>
          <p className="text-[#A9B6C7] leading-relaxed">
            Continuous rope dyeing, sizing, air-jet and shuttle weaving, singeing, and sanforizing are owned and operated in-house in our Gujarat facility, ensuring single-source accountability.
          </p>
        </div>

        <div className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 space-y-3">
          <div className="p-2.5 rounded-lg bg-[#123E70] text-[#FFD36A] w-fit">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Custom Quality Development</h3>
          <p className="text-[#A9B6C7] leading-relaxed">
            Have a target swatch or specific wash requirement? Our lab formulates custom slub profiles, warp/weft counts, and stretch recovery formulations with rapid 15-day pilot sample beams.
          </p>
        </div>

        <div className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 space-y-3">
          <div className="p-2.5 rounded-lg bg-[#123E70] text-[#FFD36A] w-fit">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Global Export Corridors</h3>
          <p className="text-[#A9B6C7] leading-relaxed">
            Direct bonded container loading from our warehouse to Mundra and Pipavav ports. Real-time bill of lading tracking and poly-wrapped export roll protection prevent transit moisture.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#071426] border border-[#F5A623]/30 rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Require a Custom Denim Construction?</h3>
        <p className="text-xs text-[#A9B6C7] max-w-xl mx-auto">
          Contact our technical development desk to discuss custom GSM, specialized weft fibres (T400, Cordura®, TENCEL™), or vintage shuttle loom selvedge runs.
        </p>
        <button
          onClick={onOpenQuote}
          className="px-6 py-3 bg-gradient-to-r from-[#FFD36A] to-[#F5A623] text-[#071426] font-bold text-xs rounded-xl hover:brightness-110 shadow-md uppercase tracking-wider"
        >
          Initiate Custom Development
        </button>
      </div>
    </div>
  );
};
