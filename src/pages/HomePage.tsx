import React from 'react';
import { DenimFabric, ShippingDestination } from '../types/denim';
import { GlobalDeliveryGlobe } from '../components/GlobalDeliveryGlobe';
import { UnitConverter } from '../components/UnitConverter';
import { ProductCard } from '../components/ProductCard';
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Layers,
  Sparkles,
  Plane,
  Scale,
  Award,
  Factory,
  CheckCircle2,
  FileText,
  Boxes
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenQuote: () => void;
  featuredFabrics: DenimFabric[];
  onOpenDatasheet: (fabric: DenimFabric) => void;
  onRequestQuote: (fabric: DenimFabric) => void;
  isCompared: (id: string) => boolean;
  onToggleCompare: (fabric: DenimFabric) => void;
  onSelectCategory: (cat: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuote,
  featuredFabrics,
  onOpenDatasheet,
  onRequestQuote,
  isCompared,
  onToggleCompare,
  onSelectCategory,
}) => {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-[#071426] overflow-hidden pt-8 pb-16">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#123E70]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#D96A16]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1B32] border border-[#F5A623]/30 text-xs text-[#FFD36A]">
                <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
                <span className="font-semibold uppercase tracking-wider">Premium Denim Mill & Technical Knowledge Hub</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
                Premium Denim Fabrics Engineered for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD36A] via-[#F5A623] to-[#D96A16]">
                  Every Vision
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#A9B6C7] leading-relaxed max-w-2xl font-light">
                Explore versatile denim constructions, innovative fibre blends, precision rope-dyeing finishing and quality-driven fabric solutions for global apparel manufacturing.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 bg-gradient-to-r from-[#FFD36A] via-[#F5A623] to-[#D96A16] hover:brightness-110 active:brightness-95 text-[#071426] font-bold text-sm rounded-xl transition-all shadow-lg shadow-[#D96A16]/25 flex items-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <span>Explore Denim Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3.5 bg-[#0B1B32] hover:bg-[#123E70] text-white border border-[#174A7E] hover:border-[#F5A623]/50 font-semibold text-sm rounded-xl transition-all cursor-pointer"
                >
                  Request a Fabric Quote
                </button>

                <button
                  onClick={() => onNavigate('resources')}
                  className="px-4 py-3.5 text-xs text-[#A9B6C7] hover:text-[#FFD36A] font-medium transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-4 h-4 text-[#F5A623]" />
                  <span>Download Company Profile</span>
                </button>
              </div>

              {/* Trust Indicators Strip */}
              <div className="pt-8 border-t border-[#174A7E]/40 grid grid-cols-3 gap-6 text-xs text-[#A9B6C7]">
                <div>
                  <div className="font-mono text-xl font-bold text-[#FFD36A]">100%</div>
                  <div className="mt-0.5">Gujarat Shankar-6 & BCI Cotton Sourcing</div>
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-[#FFD36A]">16-Dip</div>
                  <div className="mt-0.5">Continuous Leuco-Indigo Rope Dyeing</div>
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-[#FFD36A]">ASTM & ISO</div>
                  <div className="mt-0.5">Calibrated Laboratory Verified Specs</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#F5A623]/40 shadow-2xl bg-[#0B1B32] group">
                <img
                  src="/src/assets/images/hero_indigo_denim_rolls_1791737716961.jpg"
                  alt="AADITEX Denim Rolls Manufacturing"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-black/30 pointer-events-none" />

                {/* Overlaid Micro Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#071426]/90 backdrop-blur-md p-4 rounded-xl border border-[#174A7E]/60 text-xs space-y-1">
                  <div className="flex items-center justify-between text-[#FFD36A] font-semibold">
                    <span>Precision Weaving & Rope Dyeing Facility</span>
                    <span className="font-mono text-[11px] bg-[#123E70] px-2 py-0.5 rounded text-white">Gujarat, India</span>
                  </div>
                  <p className="text-[11px] text-[#A9B6C7]">
                    Integrated manufacturing corridor connected directly to Mundra Port container terminals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIAL 3D GLOBE SECTION: WORLDWIDE DELIVERY FROM GUJARAT TO GLOBAL COUNTRIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#FFD36A] flex items-center gap-2">
              <Plane className="w-4 h-4 text-[#F5A623]" />
              <span>Worldwide Logistics & Export Corridors</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Direct Denim Export from Gujarat to Global Garment Hubs
            </h2>
            <p className="text-xs text-[#A9B6C7] max-w-2xl mt-1">
              Explore real-time animated flight stimulation and sea freight transit times from our integrated Gujarat mill to top apparel manufacturing destinations across the Americas, Europe, Middle East, and Asia-Pacific.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#A9B6C7]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD36A] animate-pulse" />
            <span>Interactive 3D Sphere · Drag to spin · Click marker to inspect port</span>
          </div>
        </div>

        {/* 3D Rotating Interactive Three.js Globe */}
        <GlobalDeliveryGlobe
          onSelectDestination={(dest) => {
            // Destination selected
          }}
        />
      </section>

      {/* 3. COMPANY INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
                Company Introduction
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Weaving High-Performance Denim with Textile-Engineering Discipline
              </h2>
              <p className="text-sm text-[#A9B6C7] leading-relaxed">
                AADITEX FABRICS serves global apparel brands, denim jean manufacturers, garment export houses, and sourcing offices with meticulously engineered woven fabrics. Situated in the heart of Gujarat’s premier cotton-growing and textile engineering corridor, we combine authentic 16-dip indigo rope-dyeing technology with high-speed air-jet weaving and vintage narrow shuttle looms.
              </p>
              <p className="text-sm text-[#A9B6C7] leading-relaxed">
                Every fabric is backed by an exhaustive technical datasheet documenting yarn counts, ends/picks per inch, Elmendorf tear strength, Martindale abrasion, and residual shrinkage — guaranteeing zero guesswork for garment patternmakers and laundry wash directors.
              </p>

              <div className="pt-2 flex flex-wrap gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                  <span>Uncompromised 4-Point Inspection System</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                  <span>Dual-Core & T400 Elasticity Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                  <span>ZDHC Level 3 & OEKO-TEX Standard 100</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#071426] p-6 rounded-xl border border-[#174A7E]/60 text-xs space-y-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider text-[#FFD36A]">
                B2B Sourcing Parameters
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-[#174A7E]/30 pb-2">
                  <span className="text-[#A9B6C7]">Standard Production MOQ</span>
                  <span className="font-mono text-white font-bold">2,500 – 3,000 Metres</span>
                </div>
                <div className="flex justify-between border-b border-[#174A7E]/30 pb-2">
                  <span className="text-[#A9B6C7]">Sample Swatch Dispatch</span>
                  <span className="font-mono text-[#34D399] font-bold">Immediate (Courier)</span>
                </div>
                <div className="flex justify-between border-b border-[#174A7E]/30 pb-2">
                  <span className="text-[#A9B6C7]">Custom Quality Development</span>
                  <span className="font-mono text-white">Available (15–20 Days)</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-[#A9B6C7]">Export Shipping Basis</span>
                  <span className="font-mono text-[#FFD36A]">FOB Mundra / CIF Global Ports</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 bg-[#123E70] hover:bg-[#174A7E] text-[#FFD36A] font-semibold rounded-lg text-xs transition-colors"
              >
                Connect With Sourcing Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
              Curated Denim Qualities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Engineered Fabric Showcase
            </h2>
            <p className="text-xs text-[#A9B6C7] mt-1">
              Select any fabric to view the complete 14-section technical datasheet or add to your comparison table.
            </p>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="text-xs text-[#FFD36A] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Explore All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredFabrics.slice(0, 6).map((fabric) => (
            <ProductCard
              key={fabric.id}
              fabric={fabric}
              onOpenDatasheet={onOpenDatasheet}
              onRequestQuote={onRequestQuote}
              isCompared={isCompared(fabric.id)}
              onToggleCompare={onToggleCompare}
            />
          ))}
        </div>
      </section>

      {/* 5. FABRIC FINDER & WEIGHT CONVERTER TOOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UnitConverter />
      </section>

      {/* 6. MANUFACTURING OVERVIEW TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
              Integrated Mill Operations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Manufacturing Sequence: Fibre to Roll Dispatch
            </h2>
            <p className="text-xs text-[#A9B6C7] mt-1">
              A synchronized 8-stage manufacturing process calibrated to ensure dimensional stability and consistent ring-dye contrast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FFD36A]">STAGE 01</span>
              <h3 className="font-bold text-white text-sm">Cotton Bale Selection & Spinning</h3>
              <p className="text-xs text-[#A9B6C7] leading-relaxed">
                Shankar-6 cotton bales carded and drawn into ring-spun, compact, or dual-core filaments with programmed slub profiles.
              </p>
            </div>

            <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FFD36A]">STAGE 02</span>
              <h3 className="font-bold text-white text-sm">16-Dip Indigo Rope Dyeing</h3>
              <p className="text-xs text-[#A9B6C7] leading-relaxed">
                Sequential leuco-indigo vat immersion with controlled skying aeration towers preserving ring-dye white cotton core.
              </p>
            </div>

            <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FFD36A]">STAGE 03</span>
              <h3 className="font-bold text-white text-sm">Precision Weaving & Looms</h3>
              <p className="text-xs text-[#A9B6C7] leading-relaxed">
                High-tension air-jet looming (up to 1,000 picks/min) alongside vintage narrow shuttle looms for authentic red-line selvedge.
              </p>
            </div>

            <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FFD36A]">STAGE 04</span>
              <h3 className="font-bold text-white text-sm">Sanforizing & 4-Point Audit</h3>
              <p className="text-xs text-[#A9B6C7] leading-relaxed">
                Pre-skew angle setting to prevent leg twist, rubber-belt compressive pre-shrinking (&lt;2.5%), and 100% digital roll audit.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('manufacturing')}
              className="inline-flex items-center gap-1.5 text-xs text-[#FFD36A] hover:underline font-semibold"
            >
              <span>Explore Detailed Machinery & Quality Checkpoints</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. KNOWLEDGE CENTRE & TECHNICAL ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
              Textile Engineering Resource
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Denim Knowledge Centre
            </h2>
            <p className="text-xs text-[#A9B6C7] mt-1">
              Educational guides written for sourcing managers, garment merchandisers, and technical wash engineers.
            </p>
          </div>

          <button
            onClick={() => onNavigate('knowledge')}
            className="text-xs text-[#FFD36A] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>View All Knowledge Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => onNavigate('knowledge')}
            className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 hover:border-[#F5A623]/50 transition-all cursor-pointer group space-y-3"
          >
            <span className="text-[10px] uppercase font-bold text-[#FFD36A] bg-[#123E70] px-2.5 py-1 rounded">
              Weaving Science
            </span>
            <h3 className="text-base font-bold text-white group-hover:text-[#FFD36A] transition-colors">
              Right-Hand Twill vs. Left-Hand Twill vs. Broken Twill
            </h3>
            <p className="text-xs text-[#A9B6C7] leading-relaxed">
              How twill direction determines fabric hand feel, fading contrast, and leg twist torque in 5-pocket jeans.
            </p>
            <div className="text-xs text-[#FFD36A] font-semibold flex items-center gap-1 pt-1">
              <span>Read Technical Guide</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          <div
            onClick={() => onNavigate('knowledge')}
            className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 hover:border-[#F5A623]/50 transition-all cursor-pointer group space-y-3"
          >
            <span className="text-[10px] uppercase font-bold text-[#FFD36A] bg-[#123E70] px-2.5 py-1 rounded">
              Dyeing Technology
            </span>
            <h3 className="text-base font-bold text-white group-hover:text-[#FFD36A] transition-colors">
              The Chemistry of Indigo Rope Dyeing & Ring-Dyeing
            </h3>
            <p className="text-xs text-[#A9B6C7] leading-relaxed">
              Why reduced leuco-indigo and controlled multi-dip skying oxidation are critical for authentic high-contrast washdowns.
            </p>
            <div className="text-xs text-[#FFD36A] font-semibold flex items-center gap-1 pt-1">
              <span>Read Technical Guide</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          <div
            onClick={() => onNavigate('quality')}
            className="bg-[#0B1B32] p-6 rounded-xl border border-[#174A7E]/50 hover:border-[#F5A623]/50 transition-all cursor-pointer group space-y-3"
          >
            <span className="text-[10px] uppercase font-bold text-[#FFD36A] bg-[#123E70] px-2.5 py-1 rounded">
              Testing Standards
            </span>
            <h3 className="text-base font-bold text-white group-hover:text-[#FFD36A] transition-colors">
              ASTM & ISO Denim Fabric Testing Protocols
            </h3>
            <p className="text-xs text-[#A9B6C7] leading-relaxed">
              Specimen preparation, testing conditions, and acceptance limits for ASTM D3776, ASTM D5034, and ISO 105-X12.
            </p>
            <div className="text-xs text-[#FFD36A] font-semibold flex items-center gap-1 pt-1">
              <span>Explore Standards</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. B2B CONVERSION & QUOTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0B1B32] via-[#123E70] to-[#0B1B32] border border-[#F5A623]/40 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
              Direct Mill Procurement
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Develop Your Next Denim Programme?
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              Request immediate swatch header cards, courier sample yardage, or custom fabric development tailored to your brand’s weight, stretch, and wash specifications.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-gradient-to-r from-[#FFD36A] via-[#F5A623] to-[#D96A16] hover:brightness-110 active:brightness-95 text-[#071426] font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer uppercase tracking-wider"
              >
                Request a Fabric Quote
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-[#071426] hover:bg-[#0B1B32] text-white border border-[#F5A623]/40 font-semibold text-sm rounded-xl transition-all cursor-pointer"
              >
                Request Swatch Sample Kit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
