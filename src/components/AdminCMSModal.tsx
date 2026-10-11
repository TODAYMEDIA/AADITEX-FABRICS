import React, { useState } from 'react';
import { DenimFabric, B2BEnquiry, DenimCategory } from '../types/denim';
import { X, Plus, Database, Inbox, Check, FileSpreadsheet, ShieldCheck, Download, Trash2 } from 'lucide-react';

interface AdminCMSModalProps {
  isOpen: boolean;
  onClose: () => void;
  fabrics: DenimFabric[];
  onAddFabric: (newFabric: DenimFabric) => void;
  onDeleteFabric: (id: string) => void;
  enquiries: B2BEnquiry[];
  onUpdateEnquiryStatus: (id: string, status: B2BEnquiry['status']) => void;
}

export const AdminCMSModal: React.FC<AdminCMSModalProps> = ({
  isOpen,
  onClose,
  fabrics,
  onAddFabric,
  onDeleteFabric,
  enquiries,
  onUpdateEnquiryStatus,
}) => {
  const [activeTab, setActiveTab] = useState<'products' | 'add' | 'enquiries'>('products');
  const [successMsg, setSuccessMsg] = useState('');

  // Form state for adding a new fabric
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    category: 'Classic and Traditional' as DenimCategory,
    description: '',
    finishedGSM: '450',
    weightOzPerSqYd: '13.25',
    fibreOverall: '100% Cotton',
    weaveType: '3/1 RHT' as any,
    twillDirection: 'Right-Hand Twill (Z)' as any,
    warpEndsPerInch: 68,
    weftPicksPerInch: 46,
    loomType: 'Air-Jet' as any,
    warpDyeMethod: 'Rope Dyeing' as any,
    shadeName: 'Deep Ocean Indigo',
    shadeCode: 'AT-IND-NEW',
    dyeDipsCount: 16,
    hasStretch: false,
    weftStretchPercentage: 0,
    usableWidthInches: 58,
    moqMeters: 3000,
  });

  if (!isOpen) return null;

  const handleSubmitNewFabric = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.code || !formData.name) return;

    const gsmNum = parseFloat(formData.finishedGSM) || 450;
    const ozNum = parseFloat(formData.weightOzPerSqYd) || 13.25;

    const newFabric: DenimFabric = {
      id: `aad-${Date.now()}`,
      code: formData.code.toUpperCase(),
      name: formData.name,
      slug: formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: formData.category,
      subcategories: [formData.category, `${ozNum} oz Denim`],
      description: formData.description || 'Custom developed denim quality engineered at Gujarat manufacturing facility.',
      heroImage: '/src/assets/images/hero_indigo_denim_rolls_1791737716961.jpg',
      galleryImages: ['/src/assets/images/hero_indigo_denim_rolls_1791737716961.jpg'],
      tags: [formData.category, `${ozNum} oz`, formData.weaveType],
      revision: 'Rev 1.0',
      issueDate: new Date().toISOString().split('T')[0],
      intendedUses: ['Apparel Manufacturing', 'Custom Denim Development'],
      fibre: {
        warp: formData.fibreOverall,
        weft: formData.fibreOverall,
        overall: formData.fibreOverall,
        tolerance: '± 2.0%',
        verificationMethod: 'ASTM D629 Standard',
      },
      yarn: {
        warpCount: '9.0 Ne Ring Spun',
        weftCount: '10.0 Ne Ring Spun',
        countSystem: 'Ne',
        spinningMethod: 'Ring Spun',
        yarnConstruction: 'Single',
        slubProfile: 'Standard Consistent Slub Profile',
      },
      construction: {
        weaveType: formData.weaveType,
        twillDirection: formData.twillDirection,
        warpEndsPerInch: formData.warpEndsPerInch,
        weftPicksPerInch: formData.weftPicksPerInch,
        totalThreadDensity: formData.warpEndsPerInch + formData.weftPicksPerInch,
        loomType: formData.loomType,
        selvedgeType: 'Open Width Tucked Selvedge',
        constructionNotation: `${formData.warpEndsPerInch} x ${formData.weftPicksPerInch}`,
      },
      measurements: {
        finishedGSM: gsmNum,
        weightOzPerSqYd: ozNum,
        weightTolerance: '± 15 GSM',
        totalWidthInches: formData.usableWidthInches + 2,
        usableWidthInches: formData.usableWidthInches,
        weightClassification: ozNum < 10 ? 'Lightweight (<10 oz)' : ozNum < 12 ? 'Medium Weight (10-12 oz)' : ozNum < 14 ? 'Mid-to-Heavy (12-14 oz)' : 'Heavyweight (14-16 oz)',
        thicknessMm: 0.85,
      },
      dyeing: {
        warpDyeMethod: formData.warpDyeMethod,
        weftDyeMethod: 'Raw Ecru / Unbleached',
        dyeSystem: 'Pure Synthetic Indigo',
        dyeDipsCount: formData.dyeDipsCount,
        shadeName: formData.shadeName,
        shadeCode: formData.shadeCode,
        dryRubbingFastness: 'Grade 3-4',
        wetRubbingFastness: 'Grade 2',
        washingColourfastness: 'Grade 4',
        lightfastness: 'Grade 4-5',
      },
      stretch: {
        hasStretch: formData.hasStretch,
        stretchCategory: formData.hasStretch ? 'Comfort Stretch (12-18%)' : 'Rigid / Non-Stretch',
        warpStretchPercentage: 1.5,
        weftStretchPercentage: formData.weftStretchPercentage,
        stretchDirection: formData.hasStretch ? 'Weft-Stretch' : 'Non-Stretch',
        recoveryPercentage: 92.0,
        growthAfterExtension: '< 2.5%',
        testStandard: 'ASTM D3107',
      },
      stability: {
        warpShrinkage: '-2.5% max',
        weftShrinkage: '-2.0% max',
        residualShrinkage: '1.2%',
        skewPercentage: '1.2% max',
        bowingPercentage: '1.0% max',
        testStandard: 'AATCC 135',
      },
      mechanical: {
        warpTensileStrengthN: '920 N',
        weftTensileStrengthN: '650 N',
        tearStrengthN: 'Warp: 52 N / Weft: 45 N',
        abrasionCyclesMartindale: '> 40,000 Cycles',
        pillingResistance: 'Grade 4.5',
        seamSlippage: 'Warp 1.8mm / Weft 2.0mm',
        testStandard: 'ASTM D5034',
      },
      finishing: {
        desizing: true,
        scouring: true,
        singeing: true,
        sanforization: true,
        mercerization: false,
        surfaceTreatment: 'Mill Sanforized Smooth Finish',
        handFeel: formData.hasStretch ? 'Medium Supple' : 'Crisp & Stiff (Raw)',
        laserCompatible: true,
        ozoneCompatible: true,
      },
      compliance: {
        restrictedSubstancesCompliant: true,
        phValue: '6.7',
        formaldehydeStatus: 'Non-detectable',
        azoDyesFree: true,
        heavyMetalsTested: true,
        certificationsDocumented: ['OEKO-TEX Standard 100', 'ZDHC MRSL Level 3'],
      },
      commercial: {
        sampleAvailability: 'Sampling on Request (3-5 Days)',
        moqMeters: formData.moqMeters,
        sampleLeadTimeDays: 3,
        bulkLeadTimeWeeks: 4,
        pricingTerm: 'Quotation On Request (FOB / CIF / Ex-Mill)',
        exportPacking: 'Poly-wrapped Export Rolls with Barcode Labels',
        origin: 'Gujarat Mill, India',
        verifiedStatus: 'Verified Mill Quality',
      },
    };

    onAddFabric(newFabric);
    setSuccessMsg(`Fabric ${newFabric.code} added to product catalogue database successfully!`);
    setTimeout(() => setSuccessMsg(''), 4000);
    setActiveTab('products');
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(fabrics, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `aaditex_fabrics_export_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#071426] border border-[#F5A623]/50 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1B32] border-b border-[#174A7E]/60 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#123E70] text-[#FFD36A] border border-[#F5A623]/30">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>AADITEX Mill CMS & Database Console</span>
              </h2>
              <p className="text-xs text-[#A9B6C7]">Manage live fabric catalogue specifications and incoming B2B lead enquiries.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportJSON}
              className="text-xs bg-[#071426] hover:bg-[#123E70] text-[#A9B6C7] hover:text-white px-3 py-1.5 rounded-lg border border-[#174A7E] flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#F5A623]" />
              <span className="hidden sm:inline">Export JSON</span>
            </button>
            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="px-6 bg-[#0B1B32]/60 border-b border-[#174A7E]/40 flex gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('products')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'products' ? 'border-[#FFD36A] text-[#FFD36A]' : 'border-transparent text-[#A9B6C7] hover:text-white'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Fabric Qualities ({fabrics.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'add' ? 'border-[#FFD36A] text-[#FFD36A]' : 'border-transparent text-[#A9B6C7] hover:text-white'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add New Fabric SKU</span>
          </button>
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'enquiries' ? 'border-[#FFD36A] text-[#FFD36A]' : 'border-transparent text-[#A9B6C7] hover:text-white'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>B2B Inbound Enquiries ({enquiries.length})</span>
          </button>
        </div>

        {/* Notification Toast */}
        {successMsg && (
          <div className="bg-[#123E70] text-[#FFD36A] px-6 py-2.5 text-xs font-medium border-b border-[#F5A623]/40 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Body Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* TAB 1: Products List */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#A9B6C7]">
                <span>Showing all registered qualities currently accessible in public search and datasheets.</span>
                <span className="font-mono text-white">{fabrics.length} Qualities Active</span>
              </div>

              <div className="divide-y divide-[#174A7E]/40 border border-[#174A7E]/50 rounded-xl overflow-hidden bg-[#0B1B32]/40">
                {fabrics.map((f) => (
                  <div key={f.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#0B1B32]/80 transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#FFD36A] bg-[#123E70] px-2 py-0.5 rounded">
                          {f.code}
                        </span>
                        <span className="text-xs font-semibold text-white">{f.name}</span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/50">
                          {f.commercial.verifiedStatus}
                        </span>
                      </div>
                      <div className="text-xs text-[#A9B6C7] mt-1">
                        <span>{f.measurements.weightOzPerSqYd} oz ({f.measurements.finishedGSM} GSM)</span>
                        <span className="mx-1.5">·</span>
                        <span>{f.fibre.overall}</span>
                        <span className="mx-1.5">·</span>
                        <span>{f.construction.weaveType}</span>
                        <span className="mx-1.5">·</span>
                        <span>MOQ: {f.commercial.moqMeters.toLocaleString()}m</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-mono text-[#A9B6C7]">{f.revision}</span>
                      <button
                        onClick={() => onDeleteFabric(f.id)}
                        className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-950/30 rounded transition-colors"
                        title="Delete fabric"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Add New Fabric */}
          {activeTab === 'add' && (
            <form onSubmit={handleSubmitNewFabric} className="space-y-6 text-xs">
              <div className="bg-[#0B1B32] p-5 rounded-xl border border-[#174A7E]/50 space-y-4">
                <h3 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider">
                  Fabric Identification & Basic Classification
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                      SKU / Fabric Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AAD-990"
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                      className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-[#FFD36A]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                      Fabric Quality Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. High-Density Indigo Ring Denim 3/1"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#FFD36A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                      Primary Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as DenimCategory })}
                      className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#FFD36A]"
                    >
                      <option value="Classic and Traditional">Classic and Traditional</option>
                      <option value="Stretch and Performance">Stretch and Performance</option>
                      <option value="Premium and Heritage">Premium and Heritage</option>
                      <option value="Lightweight">Lightweight</option>
                      <option value="Medium-Weight">Medium-Weight</option>
                      <option value="Heavyweight">Heavyweight</option>
                      <option value="Special Weave and Surface">Special Weave and Surface</option>
                      <option value="Colour and Dye Variations">Colour and Dye Variations</option>
                      <option value="Sustainable and Alternative-Fibre">Sustainable and Alternative-Fibre</option>
                      <option value="Functional and Industrial">Functional and Industrial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                      Weight in GSM
                    </label>
                    <input
                      type="number"
                      value={formData.finishedGSM}
                      onChange={(e) => {
                        const val = e.target.value;
                        const num = parseFloat(val);
                        setFormData({
                          ...formData,
                          finishedGSM: val,
                          weightOzPerSqYd: num ? (num / 33.9057).toFixed(2) : '',
                        });
                      }}
                      className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                      Weight in oz/yd²
                    </label>
                    <input
                      type="text"
                      value={formData.weightOzPerSqYd}
                      onChange={(e) => {
                        const val = e.target.value;
                        const num = parseFloat(val);
                        setFormData({
                          ...formData,
                          weightOzPerSqYd: val,
                          finishedGSM: num ? Math.round(num * 33.9057).toString() : '',
                        });
                      }}
                      className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                    Technical Description & Intended Vision
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter fabric specifications, warp dye dips, fade characteristics..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#FFD36A]"
                  />
                </div>
              </div>

              {/* Construction and Fibre */}
              <div className="bg-[#0B1B32] p-5 rounded-xl border border-[#174A7E]/50 space-y-4">
                <h3 className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider">
                  Construction, Fibre & Stretch Mechanics
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                      Fibre Composition
                    </label>
                    <input
                      type="text"
                      value={formData.fibreOverall}
                      onChange={(e) => setFormData({ ...formData, fibreOverall: e.target.value })}
                      className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3 py-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                      Weave Type
                    </label>
                    <select
                      value={formData.weaveType}
                      onChange={(e) => setFormData({ ...formData, weaveType: e.target.value as any })}
                      className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3 py-2 text-white"
                    >
                      <option value="3/1 RHT">3/1 RHT (Classic Right-Hand)</option>
                      <option value="3/1 LHT">3/1 LHT (Soft Left-Hand)</option>
                      <option value="Broken Twill">Broken Twill (Anti-Torque)</option>
                      <option value="2/1 Twill">2/1 Twill (Lightweight)</option>
                      <option value="Chambray / Plain">Chambray / Plain</option>
                      <option value="Dobby / Jacquard">Dobby / Jacquard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                      Loom Technology
                    </label>
                    <select
                      value={formData.loomType}
                      onChange={(e) => setFormData({ ...formData, loomType: e.target.value as any })}
                      className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3 py-2 text-white"
                    >
                      <option value="Air-Jet">Air-Jet (High-Speed Precision)</option>
                      <option value="Rapier">Rapier (Heavyweight / Technical)</option>
                      <option value="Vintage Shuttle Loom">Vintage Shuttle Loom (Selvedge)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                      Usable Cuttable Width (Inches)
                    </label>
                    <input
                      type="number"
                      value={formData.usableWidthInches}
                      onChange={(e) => setFormData({ ...formData, usableWidthInches: parseInt(e.target.value) || 58 })}
                      className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                      Minimum Order Quantity (Metres)
                    </label>
                    <input
                      type="number"
                      value={formData.moqMeters}
                      onChange={(e) => setFormData({ ...formData, moqMeters: parseInt(e.target.value) || 3000 })}
                      className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.hasStretch}
                        onChange={(e) => setFormData({ ...formData, hasStretch: e.target.checked })}
                        className="rounded bg-[#071426] border-[#174A7E] text-[#F5A623] focus:ring-0"
                      />
                      <span className="text-white font-semibold">Has Stretch?</span>
                    </label>
                    {formData.hasStretch && (
                      <input
                        type="number"
                        placeholder="% Weft"
                        value={formData.weftStretchPercentage}
                        onChange={(e) => setFormData({ ...formData, weftStretchPercentage: parseFloat(e.target.value) || 0 })}
                        className="w-20 bg-[#071426] border border-[#174A7E] rounded px-2 py-1 text-white font-mono"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('products')}
                  className="px-4 py-2 rounded-lg bg-[#071426] text-[#A9B6C7] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#FFD36A] to-[#F5A623] text-[#071426] font-bold hover:brightness-110 shadow-md"
                >
                  Save & Publish Fabric to Catalogue
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: Inbound B2B Enquiries */}
          {activeTab === 'enquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#A9B6C7]">
                <span>All inbound sample requests, bulk inquiries, and custom development leads.</span>
                <span className="font-mono text-white">{enquiries.length} Inbound Requests</span>
              </div>

              {enquiries.length === 0 ? (
                <div className="text-center py-12 border border-[#174A7E]/40 rounded-xl bg-[#0B1B32]/30">
                  <Inbox className="w-8 h-8 text-[#A9B6C7] mx-auto mb-2 opacity-50" />
                  <p className="text-xs text-[#A9B6C7]">No customer enquiries received yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {enquiries.map((enq) => (
                    <div key={enq.id} className="p-4 bg-[#0B1B32] border border-[#174A7E]/50 rounded-xl space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#174A7E]/30 pb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-xs">{enq.fullName}</span>
                            <span className="text-[#A9B6C7]">·</span>
                            <span className="font-medium text-[#FFD36A]">{enq.companyName}</span>
                            <span className="text-xs text-slate-400">({enq.country})</span>
                          </div>
                          <div className="text-[11px] text-[#A9B6C7] mt-0.5">
                            {enq.email} · {enq.phone} · Buyer Type: <strong className="text-white">{enq.buyerType}</strong>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-mono text-[#A9B6C7]">{enq.createdAt}</span>
                          <select
                            value={enq.status}
                            onChange={(e) => onUpdateEnquiryStatus(enq.id, e.target.value as any)}
                            className="bg-[#071426] border border-[#174A7E] rounded px-2 py-1 text-[11px] text-[#FFD36A] font-semibold"
                          >
                            <option value="New">New</option>
                            <option value="Reviewing">Reviewing</option>
                            <option value="Sample Dispatched">Sample Dispatched</option>
                            <option value="Quote Sent">Quote Sent</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase">Enquiry Type</span>
                          <span className="font-semibold text-white uppercase">{enq.type}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase">Fabric Ref / SKU</span>
                          <span className="font-mono text-[#FFD36A]">{enq.fabricCode || 'General Consultation'}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase">Volume Required</span>
                          <span className="font-mono text-white">{enq.requiredMeters ? `${enq.requiredMeters.toLocaleString()}m` : 'Not specified'}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase">Target Delivery</span>
                          <span className="text-slate-200">{enq.targetDeliveryDate || 'Standard production'}</span>
                        </div>
                      </div>

                      {enq.specifications && (
                        <div className="bg-[#071426] p-2.5 rounded-lg text-xs text-slate-300">
                          <strong className="text-slate-400 block text-[10px] uppercase mb-0.5">Buyer Notes & Technical Requirements:</strong>
                          {enq.specifications}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
