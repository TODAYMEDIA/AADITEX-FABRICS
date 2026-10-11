import React, { useState } from 'react';
import { TESTING_STANDARDS, TestStandard } from '../data/standards';
import { ShieldCheck, Search, FileCheck, CheckCircle2, AlertTriangle, Layers, Scale } from 'lucide-react';

export const QualityTestingPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [orgFilter, setOrgFilter] = useState<'all' | 'ASTM' | 'ISO' | 'AATCC'>('all');

  const filteredStandards = TESTING_STANDARDS.filter((std) => {
    if (orgFilter !== 'all' && std.organization !== orgFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        std.name.toLowerCase().includes(q) ||
        std.code.toLowerCase().includes(q) ||
        std.propertyMeasured.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
          Quality Assurance & Testing
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          ASTM, ISO & AATCC Denim Testing Protocols
        </h1>
        <p className="text-sm text-[#A9B6C7] leading-relaxed">
          Detailed standards documentation covering fabric mass, thread density, Elmendorf tear resistance, Martindale abrasion, stretch recovery, and colourfastness limits.
        </p>
      </div>

      {/* 2. Search & Organization Filter */}
      <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#F5A623] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by test code (e.g. ASTM D3776, ISO 105) or measured property..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#071426] border border-[#174A7E] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#A9B6C7] focus:outline-none focus:border-[#FFD36A]"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-[#071426] p-1 rounded-lg border border-[#174A7E] text-xs">
            {['all', 'ASTM', 'ISO', 'AATCC'].map((org) => (
              <button
                key={org}
                onClick={() => setOrgFilter(org as any)}
                className={`px-3 py-1.5 rounded font-medium transition-colors ${
                  orgFilter === org ? 'bg-[#123E70] text-[#FFD36A] font-bold' : 'text-[#A9B6C7] hover:text-white'
                }`}
              >
                {org === 'all' ? 'All Standards' : org}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs text-[#A9B6C7]">
          Showing <span className="font-mono text-white font-bold">{filteredStandards.length}</span> standardized testing protocols applied in our internal laboratory.
        </div>
      </div>

      {/* 3. Standards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStandards.map((std) => (
          <div
            key={std.id}
            className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-xl p-6 space-y-4 shadow-lg hover:border-[#F5A623]/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 border-b border-[#174A7E]/40 pb-3">
              <div>
                <span className="font-mono text-xs font-bold text-[#FFD36A] bg-[#071426] px-2.5 py-1 rounded border border-[#F5A623]/30">
                  {std.code}
                </span>
                <h3 className="text-sm font-bold text-white mt-2">{std.name}</h3>
              </div>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#123E70] text-[#FFD36A] shrink-0 font-bold">
                {std.organization}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Property Measured</span>
                <span className="text-slate-200 font-medium">{std.propertyMeasured}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Specimen Conditioning & Preparation</span>
                <span className="text-[#A9B6C7] leading-relaxed">{std.specimenPreparation}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Test Conditions & Apparatus</span>
                <span className="text-[#A9B6C7] leading-relaxed">{std.testConditions}</span>
              </div>
            </div>

            {/* Threshold and Limits */}
            <div className="pt-3 border-t border-[#174A7E]/40 grid grid-cols-2 gap-3 text-xs bg-[#071426] p-3 rounded-lg">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Industry Standard Criteria</span>
                <span className="text-slate-300 font-mono text-[11px]">{std.industryAcceptanceCriteria}</span>
              </div>
              <div>
                <span className="text-[#34D399] block text-[10px] uppercase font-bold">AADITEX Quality Guarantee</span>
                <span className="text-emerald-300 font-mono text-[11px] font-semibold">{std.aaditexInternalThreshold}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Inspection Note: 4-Point System */}
      <div className="bg-[#071426] border border-[#F5A623]/30 rounded-2xl p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#FFD36A] uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
          <span>ASTM D5430 Four-Point Visual Roll Inspection</span>
        </div>
        <h3 className="text-lg font-bold text-white">
          Defect Penalties per 100 Square Yards
        </h3>
        <p className="text-xs text-[#A9B6C7] leading-relaxed max-w-3xl">
          AADITEX adheres strictly to the internationally recognized ASTM D5430 standard. Fabric defects are penalized by length:
          defects up to 3 inches incur 1 point; 3 to 6 inches incur 2 points; 6 to 9 inches incur 3 points; over 9 inches or holes incur 4 points.
          Our internal export threshold caps maximum points at 18 points per 100 square yards (well beneath the 28-point commercial limit).
        </p>
      </div>
    </div>
  );
};
