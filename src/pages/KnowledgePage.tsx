import React, { useState } from 'react';
import { MANUFACTURING_STEPS, DENIM_GLOSSARY, ProcessStep } from '../data/knowledge';
import { BookOpen, Search, Layers, Sparkles, AlertCircle, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

export const KnowledgePage: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<ProcessStep>(MANUFACTURING_STEPS[0]);
  const [glossaryQuery, setGlossaryQuery] = useState('');

  const filteredGlossary = DENIM_GLOSSARY.filter((item) =>
    item.term.toLowerCase().includes(glossaryQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossaryQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
          Technical Knowledge Centre
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Denim Textile Engineering & Manufacturing Science
        </h1>
        <p className="text-sm text-[#A9B6C7] leading-relaxed">
          Comprehensive technical guides explaining raw fibre spinning, indigo rope-dyeing chemistry, high-speed weaving mechanics, and mill versus garment laundry washdown dynamics.
        </p>
      </div>

      {/* 2. Interactive Mill Process Explorer */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#174A7E]/50 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white">Integrated Manufacturing Sequence</h2>
            <p className="text-xs text-[#A9B6C7] mt-0.5">Select a production stage to review machinery, parameters, and defect prevention.</p>
          </div>

          {/* Process Stage Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {MANUFACTURING_STEPS.map((step) => {
              const isSelected = selectedStep.id === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStep(step)}
                  className={`px-3 py-2 rounded-lg whitespace-nowrap transition-colors font-medium flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#123E70] text-[#FFD36A] font-bold border border-[#F5A623]/40'
                      : 'bg-[#0B1B32] text-[#A9B6C7] hover:text-white border border-[#174A7E]/30'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-75">{step.stageNumber}</span>
                  <span>{step.stageCategory}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#174A7E]/40">
            <div>
              <span className="font-mono text-xs font-bold text-[#FFD36A] bg-[#071426] px-2.5 py-1 rounded border border-[#F5A623]/30">
                STAGE {selectedStep.stageNumber} · {selectedStep.stageCategory}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">{selectedStep.title}</h3>
              <p className="text-sm text-[#FFD36A] font-medium mt-0.5">{selectedStep.headline}</p>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 text-xs text-slate-200 leading-relaxed">
            {selectedStep.summary}
          </div>

          {/* Machinery Used & Critical Process Parameters */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Machinery */}
            <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-3">
              <h4 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Machinery & Infrastructure</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#A9B6C7]">
                {selectedStep.machineryUsed.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#F5A623] mt-0.5">·</span>
                    <span className="text-slate-200">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Parameters */}
            <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-3">
              <h4 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Important Process Parameters</span>
              </h4>
              <div className="space-y-2.5 text-xs">
                {selectedStep.keyParameters.map((p, idx) => (
                  <div key={idx} className="border-b border-[#174A7E]/30 pb-2 last:border-none last:pb-0">
                    <div className="flex justify-between font-semibold">
                      <span className="text-white">{p.parameter}</span>
                      <span className="font-mono text-[#FFD36A]">{p.value}</span>
                    </div>
                    <div className="text-[11px] text-[#A9B6C7] mt-0.5">{p.importance}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quality Checkpoints & Defect Prevention */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Checkpoints */}
            <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-3">
              <h4 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider">
                Laboratory Quality Checkpoints
              </h4>
              <ul className="space-y-2 text-xs text-[#A9B6C7]">
                {selectedStep.qualityCheckpoints.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#34D399] font-bold">✓</span>
                    <span className="text-slate-200">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Defects */}
            <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-3">
              <h4 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Defect Prevention & Engineering Remedies</span>
              </h4>
              <div className="space-y-2 text-xs">
                {selectedStep.commonDefectsAndPrevention.map((d, idx) => (
                  <div key={idx} className="bg-[#0B1B32] p-2.5 rounded-lg border border-[#174A7E]/30">
                    <div className="font-semibold text-amber-300">{d.defect}</div>
                    <div className="text-[11px] text-[#A9B6C7] mt-0.5">
                      <strong>Root Cause:</strong> {d.rootCause}
                    </div>
                    <div className="text-[11px] text-emerald-300 mt-0.5">
                      <strong>Remedy:</strong> {d.remedy}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Environmental Consideration Note */}
          <div className="bg-[#123E70]/30 border border-[#174A7E] p-4 rounded-xl text-xs text-slate-300">
            <strong className="text-[#FFD36A] block mb-1">Environmental & Circularity Management:</strong>
            {selectedStep.environmentalConsiderations}
          </div>
        </div>
      </div>

      {/* 3. Mill Finishing vs. Garment Laundering Distinction (Prompt Requirement) */}
      <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-8 shadow-xl space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
            Critical Technical Distinction
          </span>
          <h2 className="text-xl font-bold text-white mt-1">
            Mill-Level Finishing vs. Garment-Level Laundry Washing
          </h2>
          <p className="text-xs text-[#A9B6C7] mt-1">
            Understanding where fabric preparation ends and garment laundry treatment begins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-3">
            <h3 className="text-sm font-bold text-[#FFD36A]">Mill-Level Finishing (Roll Stage)</h3>
            <p className="text-[#A9B6C7] leading-relaxed">
              Performed continuously at the AADITEX weaving mill prior to roll packaging and export dispatch:
            </p>
            <ul className="space-y-1.5 text-slate-200">
              <li>· <strong>Singeing:</strong> Burning surface fuzz for crisp twill definition.</li>
              <li>· <strong>Desizing:</strong> Controlled starch removal preserving warp integrity.</li>
              <li>· <strong>Skew Angle Correction:</strong> Mechanically offsetting fabric torque.</li>
              <li>· <strong>Sanforization:</strong> Compressive mechanical shrinking to &lt;2.5%.</li>
              <li>· <strong>Stenter Setting:</strong> Heat-stabilizing dual-core elastane recovery.</li>
            </ul>
          </div>

          <div className="bg-[#071426] p-5 rounded-xl border border-[#174A7E]/40 space-y-3">
            <h3 className="text-sm font-bold text-[#38BDF8]">Garment-Level Laundry (Cut & Sewn Jeans)</h3>
            <p className="text-[#A9B6C7] leading-relaxed">
              Performed by apparel manufacturers after jeans are stitched into finished garments:
            </p>
            <ul className="space-y-1.5 text-slate-200">
              <li>· <strong>Enzyme Wash:</strong> Cellulase biodegradation yielding soft vintage fades.</li>
              <li>· <strong>Stone Washing:</strong> Pumice stone abrasion for seam highs and lows.</li>
              <li>· <strong>Laser Whisker Etching:</strong> Digital thermal pattern burning.</li>
              <li>· <strong>Ozone Bleach:</strong> Gas oxidation lightening indigo with zero water.</li>
              <li>· <strong>3D Resin Wrinkling:</strong> Cured 3D crinkle baking in industrial ovens.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Denim Technical Glossary */}
      <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
              Terminology Explorer
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              Denim & Weaving Glossary
            </h2>
          </div>

          {/* Search Glossary */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#F5A623] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search terms (e.g. Selvedge, Ne)..."
              value={glossaryQuery}
              onChange={(e) => setGlossaryQuery(e.target.value)}
              className="w-full bg-[#071426] border border-[#174A7E] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#A9B6C7] focus:outline-none focus:border-[#FFD36A]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGlossary.map((g, idx) => (
            <div key={idx} className="bg-[#071426] p-4 rounded-xl border border-[#174A7E]/40 space-y-1">
              <h4 className="text-xs font-bold text-[#FFD36A]">{g.term}</h4>
              <p className="text-xs text-[#A9B6C7] leading-relaxed">{g.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
