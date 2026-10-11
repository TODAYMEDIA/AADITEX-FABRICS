import React from 'react';
import { Shirt, Scissors, Briefcase, Award, Shield, Sparkles, ArrowRight } from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (tab: string) => void;
  onOpenQuote: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const industries = [
    {
      icon: Scissors,
      title: 'Denim Jeans Manufacturers',
      subtitle: '5-Pocket Straight, Slim, Skinny & Relaxed Cuts',
      desc: 'Engineered for high-volume stitching and industrial laundry washings. Delivers high-contrast whiskering, honeycomb knee abrasion, and controlled skewing to eliminate leg twist.',
      specs: 'Recommended: 11.5–14.5 oz · 3/1 RHT · Dual-Core Stretch (92% cotton / 6% T400 / 2% elastane) or 100% Cotton Rigid.',
    },
    {
      icon: Award,
      title: 'Premium & Heritage Fashion Labels',
      subtitle: 'Bespoke Selvedge & Limited-Edition Collections',
      desc: 'Woven on restored narrow shuttle looms with authentic red-line selvedge edges. Uneven ring-spun slub yarns create deep artisanal fading profiles prized by denim connoisseurs worldwide.',
      specs: 'Recommended: 13.5–16.5 oz · Vintage Shuttle Loom Selvedge · 16–20 Rope Dips · Raw or Sanforized.',
    },
    {
      icon: Shirt,
      title: 'Western Shirting & Summer Apparel',
      subtitle: 'Denim Shirts, Dresses, Kaftans & Childrenswear',
      desc: 'Feather-light 2/1 twill and compact combed constructions providing graceful fluid drape, skin-friendly softness, and subtle micro-slub surface aesthetics.',
      specs: 'Recommended: 6.0–8.5 oz · 2/1 Twill · 40s Ne Combed Compact Cotton or TENCEL™ Lyocell blends.',
    },
    {
      icon: Shield,
      title: 'Industrial Workwear & Utility Gear',
      subtitle: 'High-Tenacity Uniforms, Motorcycle Jeans & Overalls',
      desc: 'Armour-grade formulations integrating Invista Cordura® nylon 6,6 filament cores. Tested to withstand over 100,000 Martindale abrasion cycles with 3x higher Elmendorf tear strength.',
      specs: 'Recommended: 14.0–16.5 oz · Cordura® Blended Weft · Heavy Sanforized · High-Tenacity Ring Yarns.',
    },
    {
      icon: Briefcase,
      title: 'Contemporary Casualwear & Chinos',
      subtitle: 'Blazers, Pleated Denim Trousers & Modern Suits',
      desc: 'Clean, low-hairiness compact yarns with subtle left-hand twill or mercerized soft finishes, offering sophisticated tailored aesthetics without sacrificing authentic denim soul.',
      specs: 'Recommended: 9.5–12.0 oz · Left-Hand Twill (LHT) or Broken Twill · Peach Hand Finish · Minimal Slub.',
    },
    {
      icon: Sparkles,
      title: 'Bags, Luggage & Upholstery',
      subtitle: 'Tote Bags, Heavy Luggage, Shoes & Interior Furnishings',
      desc: 'Heavy bull twill and dense coarse-yarn structures engineered for maximum structural rigidity, seam load retention, and vintage patina development over years of heavy friction.',
      specs: 'Recommended: 14.5–18.0 oz · Dense Bull Denim · Coarse Ring Warp & Weft · Dry Water-Repellent Coating.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
          Application Guide
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Denim Fabrics Tailored by Industry & Garment Application
        </h1>
        <p className="text-sm text-[#A9B6C7] leading-relaxed">
          Explore specialized fabric attributes, recommended weight thresholds, and weave constructions engineered specifically for your garment category.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, idx) => {
          const IconComponent = ind.icon;
          return (
            <div
              key={idx}
              className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-xl p-6 space-y-4 shadow-lg hover:border-[#F5A623]/50 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-2.5 rounded-lg bg-[#123E70] text-[#FFD36A] w-fit border border-[#F5A623]/30">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{ind.title}</h3>
                  <div className="text-xs text-[#FFD36A] font-medium">{ind.subtitle}</div>
                </div>
                <p className="text-xs text-[#A9B6C7] leading-relaxed">{ind.desc}</p>
              </div>

              <div className="pt-3 border-t border-[#174A7E]/40 text-[11px] bg-[#071426] p-3 rounded-lg text-slate-200">
                <strong className="text-[#FFD36A] block mb-1">Recommended Construction:</strong>
                {ind.specs}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="bg-[#071426] border border-[#F5A623]/30 rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Sourcing for a Specific Apparel Line?</h3>
        <p className="text-xs text-[#A9B6C7] max-w-xl mx-auto">
          Our textile engineers provide fabric hand samples, laundry wash recipe guidelines, and pattern cutting shrinkage tolerances calibrated to your machinery.
        </p>
        <button
          onClick={onOpenQuote}
          className="px-6 py-3 bg-gradient-to-r from-[#FFD36A] to-[#F5A623] text-[#071426] font-bold text-xs rounded-xl hover:brightness-110 shadow-md uppercase tracking-wider"
        >
          Request Tailored Sourcing Recommendations
        </button>
      </div>
    </div>
  );
};
