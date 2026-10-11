import React from 'react';
import { UnitConverter } from '../components/UnitConverter';
import { DENIM_GLOSSARY } from '../data/knowledge';
import { FileText, Download, Scale, BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (tab: string) => void;
  onOpenQuote: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const downloadResources = [
    {
      title: 'AADITEX Corporate Mill Profile & Export Overview',
      format: 'PDF (2.4 MB)',
      desc: 'Complete overview of our Gujarat facility, rope dyeing capacities, air-jet looms, and Mundra port container dispatch logistics.',
    },
    {
      title: 'Denim Fabric Technical Specification Template',
      format: 'PDF / XLSX (850 KB)',
      desc: 'Standardized buyer specification sheet covering all 14 ASTM/ISO mechanical, chemical, and dimensional tolerance parameters.',
    },
    {
      title: 'Garment Laundry Washdown & Laser Etching Guide',
      format: 'PDF (1.8 MB)',
      desc: 'Practical technical parameters for enzyme washing, ozone bleaching, stone wash ratios, and digital laser watt settings on AADITEX denim.',
    },
    {
      title: 'ASTM & ISO Denim Testing Protocol Handbook',
      format: 'PDF (1.2 MB)',
      desc: 'Specimen preparation and acceptance limits for fabric mass, grab tensile, Elmendorf tear strength, and Martindale abrasion.',
    },
  ];

  const handleDownloadMock = (title: string) => {
    // Generate text/pdf simulation download for demonstration
    const content = `AADITEX FABRICS - Official Document\n\nDocument: ${title}\nIssue Date: 2026-03-15\nOrigin: Gujarat Manufacturing Hub, India\nWebsite: www.aaditexfabrics.com\n\nThis is an official technical reference document issued by AADITEX FABRICS Quality Division.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
          Resource Centre
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Denim Calculations & Technical Downloads
        </h1>
        <p className="text-sm text-[#A9B6C7] leading-relaxed">
          Interactive weight conversion calculator, weave geometry identification guide, and downloadable mill documentation for garment makers.
        </p>
      </div>

      {/* 1. Interactive GSM ↔ oz Calculator */}
      <UnitConverter />

      {/* 2. Weave Identification Guide */}
      <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-8 sm:p-10 shadow-xl space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
            Weave Anatomy
          </span>
          <h2 className="text-xl font-bold text-white mt-1">
            Visual Weave Identification Guide
          </h2>
          <p className="text-xs text-[#A9B6C7] mt-1">
            Recognizing the structural differences between major denim twill constructions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-2.5">
            <div className="font-bold text-white flex items-center justify-between">
              <span>3/1 Right-Hand Twill (RHT)</span>
              <span className="font-mono text-[#FFD36A] text-[11px]">Z-Twill</span>
            </div>
            <p className="text-[#A9B6C7] leading-relaxed">
              Diagonal twill lines ascend from bottom-left to top-right. The universal standard for classic jeans. Yields crisp whiskers, defined twill ridges, and sharp fading contrast.
            </p>
            <div className="text-[11px] text-slate-300 font-medium">
              Characteristics: Crisp hand, high surface durability, iconic five-pocket look.
            </div>
          </div>

          <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-2.5">
            <div className="font-bold text-white flex items-center justify-between">
              <span>3/1 Left-Hand Twill (LHT)</span>
              <span className="font-mono text-[#FFD36A] text-[11px]">S-Twill</span>
            </div>
            <p className="text-[#A9B6C7] leading-relaxed">
              Diagonal lines ascend from bottom-right to top-left. As yarn twist relaxes against the weave orientation, the surface blooms into a remarkably soft, buttery touch.
            </p>
            <div className="text-[11px] text-slate-300 font-medium">
              Characteristics: Ultra-soft touch, supple drape, comfort wear.
            </div>
          </div>

          <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-2.5">
            <div className="font-bold text-white flex items-center justify-between">
              <span>Broken Twill (Anti-Torque)</span>
              <span className="font-mono text-[#FFD36A] text-[11px]">Zigzag</span>
            </div>
            <p className="text-[#A9B6C7] leading-relaxed">
              Weave direction flips every two warp ends in a subtle herringbone zigzag. Completely cancels twill torque, guaranteeing zero leg spirality in 5-pocket jeans.
            </p>
            <div className="text-[11px] text-slate-300 font-medium">
              Characteristics: Non-directional, perfectly plumb legs, rodeo heritage.
            </div>
          </div>
        </div>
      </div>

      {/* 3. Download Centre */}
      <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-8 sm:p-10 shadow-xl space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
            Downloadable Documentation
          </span>
          <h2 className="text-xl font-bold text-white mt-1">
            Mill Technical Resources & Guides
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {downloadResources.map((res, idx) => (
            <div
              key={idx}
              className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 flex flex-col justify-between gap-3"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xs font-bold text-white">{res.title}</h3>
                  <span className="font-mono text-[10px] text-[#FFD36A] bg-[#123E70] px-2 py-0.5 rounded shrink-0">
                    {res.format}
                  </span>
                </div>
                <p className="text-xs text-[#A9B6C7] mt-1.5 leading-relaxed">{res.desc}</p>
              </div>

              <button
                onClick={() => handleDownloadMock(res.title)}
                className="w-fit text-xs text-[#FFD36A] hover:underline flex items-center gap-1 font-semibold cursor-pointer pt-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Document</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
