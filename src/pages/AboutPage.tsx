import React from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { ShieldCheck, Target, HeartHandshake, Award, Factory, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (tab: string) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
          About AADITEX FABRICS
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Weaving a Stronger Tomorrow
        </h1>
        <p className="text-sm text-[#A9B6C7] leading-relaxed">
          An international denim textile manufacturer engineering innovative cotton, stretch, selvedge, and sustainable qualities from the textile capital of Gujarat, India.
        </p>
      </div>

      {/* 2. Brand Story & Heritage Split */}
      <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-8 sm:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
              Brand Story & Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Pioneering Textile Engineering for Global Denim Apparel
            </h2>
            <p className="text-sm text-[#A9B6C7] leading-relaxed">
              AADITEX FABRICS was founded with a singular conviction: that modern denim manufacturing must unite time-tested indigo craft with rigorous textile-engineering standards. Situated in Gujarat, the historical epicentre of Indian cotton spinning and weaving, our facilities sit adjacent to direct logistics links to Mundra and Pipavav deep-sea container terminals.
            </p>
            <p className="text-sm text-[#A9B6C7] leading-relaxed">
              From pure Shankar-6 staple cotton selection and 16-dip rope-dyeing ranges to computerized air-jet looms and vintage Toyoda narrow shuttle looms, our production spans the full continuum of denim: from heavy 16.5 oz rigid workwear to fluid 6.5 oz combed shirting and high-recovery dual-core stretch fabrics.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                <span>Integrated Weaving & Dyeing Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                <span>Zero Hallucinated Certifications Policy</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden border border-[#F5A623]/40 shadow-lg">
              <img
                src="/src/assets/images/denim_mill_weaving_loom_1791737743213.jpg"
                alt="AADITEX Denim Loom Weaving Mill"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="mt-3 text-center text-xs text-slate-400">
              Precision High-Speed Air-Jet Loom Weaving Bay · Gujarat Mill
            </div>
          </div>
        </div>
      </div>

      {/* 3. Vision, Mission & Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 space-y-3">
          <div className="p-2.5 rounded-lg bg-[#123E70] text-[#FFD36A] w-fit border border-[#F5A623]/30">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Our Vision</h3>
          <p className="text-xs text-[#A9B6C7] leading-relaxed">
            To be the world’s most trusted denim engineering partner, celebrated by garment makers for specification accuracy, dimensional predictability, and sustainable innovation.
          </p>
        </div>

        <div className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 space-y-3">
          <div className="p-2.5 rounded-lg bg-[#123E70] text-[#FFD36A] w-fit border border-[#F5A623]/30">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Our Mission</h3>
          <p className="text-xs text-[#A9B6C7] leading-relaxed">
            Manufacture denim fabrics that inspire apparel designers, perform flawlessly on sewing and laundry wash lines, and minimise environmental impact through water and energy recycling.
          </p>
        </div>

        <div className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 space-y-3">
          <div className="p-2.5 rounded-lg bg-[#123E70] text-[#FFD36A] w-fit border border-[#F5A623]/30">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Core Values</h3>
          <p className="text-xs text-[#A9B6C7] leading-relaxed">
            Technical Transparency: We publish exact laboratory test results without exaggerated claims. Integrity, long-term buyer partnerships, and relentless quality discipline guide every meter woven.
          </p>
        </div>
      </div>

      {/* 4. Quality Philosophy */}
      <div className="bg-[#071426] border border-[#F5A623]/30 rounded-2xl p-8 sm:p-10 space-y-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
            Technical Discipline
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">
            Our Quality Philosophy: Verified Data Over Marketing Hype
          </h2>
          <p className="text-xs text-[#A9B6C7] leading-relaxed mt-2">
            In the global garment industry, a single percentage point of uncontrolled shrinkage can destroy garment fit and lead to catastrophic factory rejections. At AADITEX, we treat denim as an engineered material.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-[#0B1B32] p-4 rounded-xl border border-[#174A7E]/40 space-y-1">
            <div className="font-bold text-[#FFD36A]">4-Point Inspection</div>
            <p className="text-[#A9B6C7]">
              Every single roll audited under 15 m/min continuous inspection benches with strict 18-point defect limits.
            </p>
          </div>

          <div className="bg-[#0B1B32] p-4 rounded-xl border border-[#174A7E]/40 space-y-1">
            <div className="font-bold text-[#FFD36A]">Pre-Skew Engineering</div>
            <p className="text-[#A9B6C7]">
              Stenter skewing mechanically neutralizes natural twill torque to guarantee straight pant legs after laundry washing.
            </p>
          </div>

          <div className="bg-[#0B1B32] p-4 rounded-xl border border-[#174A7E]/40 space-y-1">
            <div className="font-bold text-[#FFD36A]">Continuous Ring Dyeing</div>
            <p className="text-[#A9B6C7]">
              16-dip oxidation towers lock indigo molecules to the outer fibre mantle, preserving pristine white cores.
            </p>
          </div>

          <div className="bg-[#0B1B32] p-4 rounded-xl border border-[#174A7E]/40 space-y-1">
            <div className="font-bold text-[#FFD36A]">Direct Export Corridors</div>
            <p className="text-[#A9B6C7]">
              Direct sealed container dispatch from Gujarat container yards to major global deep-sea ports.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate('quality')}
            className="px-5 py-2.5 bg-[#123E70] hover:bg-[#174A7E] text-[#FFD36A] font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Explore Laboratory Testing Standards
          </button>
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 bg-gradient-to-r from-[#FFD36A] to-[#F5A623] text-[#071426] font-bold text-xs rounded-xl transition-all cursor-pointer"
          >
            Request Commercial Quote
          </button>
        </div>
      </div>
    </div>
  );
};
