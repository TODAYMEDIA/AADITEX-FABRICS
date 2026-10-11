import React, { useState, useMemo, useEffect } from 'react';
import { DenimFabric, DenimCategory } from '../types/denim';
import { ProductCard } from '../components/ProductCard';
import { ProductCardSkeleton, ProductTableSkeleton } from '../components/ProductCardSkeleton';
import { DENIM_CATEGORIES_METADATA } from '../data/products';
import {
  Search,
  Filter,
  SlidersHorizontal,
  Grid,
  List,
  RotateCcw,
  FileText,
  Check,
  Plus,
  ArrowUpDown,
  Layers,
  Sparkles,
  ChevronRight,
  Loader2
} from 'lucide-react';

interface ProductsPageProps {
  fabrics: DenimFabric[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenDatasheet: (fabric: DenimFabric) => void;
  onRequestQuote: (fabric: DenimFabric) => void;
  isCompared: (id: string) => boolean;
  onToggleCompare: (fabric: DenimFabric) => void;
  comparisonCount: number;
  onOpenComparison: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  fabrics,
  selectedCategory,
  onSelectCategory,
  onOpenDatasheet,
  onRequestQuote,
  isCompared,
  onToggleCompare,
  comparisonCount,
  onOpenComparison,
  searchQuery,
  setSearchQuery,
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [weightFilter, setWeightFilter] = useState<string>('all');
  const [stretchFilter, setStretchFilter] = useState<string>('all');
  const [weaveFilter, setWeaveFilter] = useState<string>('all');
  const [compositionFilter, setCompositionFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'weight-asc' | 'weight-desc' | 'code'>('default');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Smooth tactile loading skeleton on mount and whenever filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 280);
    return () => clearTimeout(timer);
  }, [selectedCategory, weightFilter, stretchFilter, weaveFilter, compositionFilter, sortBy, searchQuery]);

  // Filter & Search Logic
  const filteredFabrics = useMemo(() => {
    return fabrics.filter((fabric) => {
      // 1. Category filter
      if (selectedCategory !== 'all' && fabric.category !== selectedCategory) {
        return false;
      }

      // 2. Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesCode = fabric.code.toLowerCase().includes(query);
        const matchesName = fabric.name.toLowerCase().includes(query);
        const matchesDesc = fabric.description.toLowerCase().includes(query);
        const matchesFibre = fabric.fibre.overall.toLowerCase().includes(query);
        const matchesWeave = fabric.construction.weaveType.toLowerCase().includes(query);
        const matchesShade = fabric.dyeing.shadeName.toLowerCase().includes(query);
        if (!matchesCode && !matchesName && !matchesDesc && !matchesFibre && !matchesWeave && !matchesShade) {
          return false;
        }
      }

      // 3. Weight classification filter
      if (weightFilter !== 'all') {
        const oz = fabric.measurements.weightOzPerSqYd;
        if (weightFilter === 'light' && oz >= 10) return false;
        if (weightFilter === 'medium' && (oz < 10 || oz >= 12)) return false;
        if (weightFilter === 'mid-heavy' && (oz < 12 || oz >= 14)) return false;
        if (weightFilter === 'heavy' && (oz < 14 || oz >= 16)) return false;
        if (weightFilter === 'super-heavy' && oz < 16) return false;
      }

      // 4. Stretch filter
      if (stretchFilter === 'rigid' && fabric.stretch.hasStretch) return false;
      if (stretchFilter === 'stretch' && !fabric.stretch.hasStretch) return false;
      if (stretchFilter === 'power' && fabric.stretch.weftStretchPercentage < 25) return false;

      // 5. Weave filter
      if (weaveFilter !== 'all') {
        if (weaveFilter === 'rht' && fabric.construction.weaveType !== '3/1 RHT') return false;
        if (weaveFilter === 'lht' && fabric.construction.weaveType !== '3/1 LHT') return false;
        if (weaveFilter === 'broken' && fabric.construction.weaveType !== 'Broken Twill') return false;
        if (weaveFilter === 'selvedge' && !fabric.construction.selvedgeType.includes('Selvedge')) return false;
      }

      // 6. Composition filter
      if (compositionFilter === 'cotton100' && fabric.fibre.overall !== '100% Cotton') return false;
      if (compositionFilter === 'tencel' && !fabric.fibre.overall.includes('TENCEL')) return false;
      if (compositionFilter === 'cordura' && !fabric.fibre.overall.includes('Nylon')) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'weight-asc') return a.measurements.weightOzPerSqYd - b.measurements.weightOzPerSqYd;
      if (sortBy === 'weight-desc') return b.measurements.weightOzPerSqYd - a.measurements.weightOzPerSqYd;
      if (sortBy === 'code') return a.code.localeCompare(b.code);
      return 0;
    });
  }, [fabrics, selectedCategory, searchQuery, weightFilter, stretchFilter, weaveFilter, compositionFilter, sortBy]);

  const handleResetFilters = () => {
    onSelectCategory('all');
    setWeightFilter('all');
    setStretchFilter('all');
    setWeaveFilter('all');
    setCompositionFilter('all');
    setSearchQuery('');
    setSortBy('default');
  };

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (weightFilter !== 'all' ? 1 : 0) +
    (stretchFilter !== 'all' ? 1 : 0) +
    (weaveFilter !== 'all' ? 1 : 0) +
    (compositionFilter !== 'all' ? 1 : 0) +
    (searchQuery !== '' ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="border-b border-[#174A7E]/50 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#FFD36A]">
              Textile Engineering Database
            </div>
            <h1 className="text-3xl font-bold text-white mt-1">
              Denim Fabric Catalogue & Specifications
            </h1>
            <p className="text-xs text-[#A9B6C7] max-w-2xl mt-1">
              Search and filter across 13 multi-attribute denim construction families. Every quality includes a full 14-section mill specification sheet with verified ASTM, ISO, and AATCC parameters.
            </p>
          </div>

          {comparisonCount > 0 && (
            <button
              onClick={onOpenComparison}
              className="px-4 py-2 bg-[#123E70] hover:bg-[#174A7E] text-[#FFD36A] rounded-xl text-xs font-bold border border-[#F5A623]/40 flex items-center gap-2 shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>Compare {comparisonCount} Fabrics</span>
            </button>
          )}
        </div>

        {/* Category Filter Horizontal Segmented Strip */}
        <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-semibold cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#F5A623] text-[#071426] shadow-sm'
                : 'bg-[#0B1B32] text-[#A9B6C7] hover:text-white border border-[#174A7E]/40'
            }`}
          >
            All Fabrics ({fabrics.length})
          </button>
          {DENIM_CATEGORIES_METADATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#F5A623] text-[#071426] font-bold shadow-sm'
                  : 'bg-[#0B1B32] text-[#A9B6C7] hover:text-white border border-[#174A7E]/40'
              }`}
            >
              {cat.id}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Filter Sidebar + Products Display */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Multi-Attribute Filters (Desktop) */}
        <div className="hidden lg:block space-y-6">
          <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-xl p-5 space-y-5">
            <div className="flex items-center justify-between border-b border-[#174A7E]/40 pb-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Attribute Filters</span>
              </h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="text-[11px] text-[#FFD36A] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset ({activeFilterCount})</span>
                </button>
              )}
            </div>

            {/* Weight Category */}
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#FFD36A] mb-2">
                Fabric Weight (oz/yd²)
              </label>
              <div className="space-y-1 text-xs">
                {[
                  { id: 'all', label: 'All Weights' },
                  { id: 'light', label: 'Lightweight (<10 oz)' },
                  { id: 'medium', label: 'Medium Weight (10–12 oz)' },
                  { id: 'mid-heavy', label: 'Mid-to-Heavy (12–14 oz)' },
                  { id: 'heavy', label: 'Heavyweight (14–16 oz)' },
                  { id: 'super-heavy', label: 'Super-Heavyweight (>16 oz)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setWeightFilter(item.id)}
                    className={`w-full text-left px-2 py-1.5 rounded transition-colors ${
                      weightFilter === item.id
                        ? 'bg-[#123E70] text-[#FFD36A] font-semibold'
                        : 'text-[#A9B6C7] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stretch Level */}
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#FFD36A] mb-2">
                Stretch Profile
              </label>
              <div className="space-y-1 text-xs">
                {[
                  { id: 'all', label: 'All Profiles' },
                  { id: 'rigid', label: 'Rigid / 100% Non-Stretch' },
                  { id: 'stretch', label: 'Stretch Elasticity (>12%)' },
                  { id: 'power', label: 'Power Stretch (>25%)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setStretchFilter(item.id)}
                    className={`w-full text-left px-2 py-1.5 rounded transition-colors ${
                      stretchFilter === item.id
                        ? 'bg-[#123E70] text-[#FFD36A] font-semibold'
                        : 'text-[#A9B6C7] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Weave Construction */}
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#FFD36A] mb-2">
                Weave Construction
              </label>
              <div className="space-y-1 text-xs">
                {[
                  { id: 'all', label: 'All Weaves' },
                  { id: 'rht', label: '3/1 Right-Hand Twill (Z)' },
                  { id: 'lht', label: '3/1 Left-Hand Twill (S)' },
                  { id: 'broken', label: 'Broken Twill (Anti-Torque)' },
                  { id: 'selvedge', label: 'Narrow Shuttle Selvedge' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setWeaveFilter(item.id)}
                    className={`w-full text-left px-2 py-1.5 rounded transition-colors ${
                      weaveFilter === item.id
                        ? 'bg-[#123E70] text-[#FFD36A] font-semibold'
                        : 'text-[#A9B6C7] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Fibre Blend */}
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#FFD36A] mb-2">
                Fibre Blend
              </label>
              <div className="space-y-1 text-xs">
                {[
                  { id: 'all', label: 'All Compositions' },
                  { id: 'cotton100', label: '100% Pure Cotton' },
                  { id: 'tencel', label: 'TENCEL™ Lyocell Blends' },
                  { id: 'cordura', label: 'Cordura® High-Tenacity Nylon' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCompositionFilter(item.id)}
                    className={`w-full text-left px-2 py-1.5 rounded transition-colors ${
                      compositionFilter === item.id
                        ? 'bg-[#123E70] text-[#FFD36A] font-semibold'
                        : 'text-[#A9B6C7] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Search Toolbar + Results Grid / Table */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search, Sort & View Bar */}
          <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#F5A623] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by code (e.g. AAD-101), weight, weave, composition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#071426] border border-[#174A7E] rounded-lg pl-9 pr-3 py-2 text-white placeholder-[#A9B6C7] focus:outline-none focus:border-[#FFD36A]"
              />
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {/* Sort By */}
              <div className="flex items-center gap-1.5 text-[#A9B6C7]">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#071426] border border-[#174A7E] rounded-lg px-2.5 py-1.5 text-white focus:outline-none"
                >
                  <option value="default">Default Order</option>
                  <option value="weight-asc">Weight: Low to High</option>
                  <option value="weight-desc">Weight: High to Low</option>
                  <option value="code">Fabric Code (SKU)</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-[#071426] border border-[#174A7E] rounded-lg p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded transition-colors ${
                    viewMode === 'grid' ? 'bg-[#123E70] text-[#FFD36A]' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Grid view"
                >
                  <Grid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded transition-colors ${
                    viewMode === 'table' ? 'bg-[#123E70] text-[#FFD36A]' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Detailed specification table view"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Result Count Status */}
          <div className="flex items-center justify-between text-xs text-[#A9B6C7]">
            <div className="flex items-center gap-2">
              {isLoading ? (
                <span className="flex items-center gap-1.5 text-xs text-[#FFD36A] font-medium">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Loading denim specifications...</span>
                </span>
              ) : (
                <span>
                  Showing <span className="font-mono text-white font-bold">{filteredFabrics.length}</span> denim qualities
                  {selectedCategory !== 'all' && (
                    <span> in <strong className="text-[#FFD36A]">{selectedCategory}</strong></span>
                  )}
                </span>
              )}
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="text-[#FFD36A] hover:underline"
              >
                Clear all active filters
              </button>
            )}
          </div>

          {/* Results Display with Loading Skeletons */}
          {isLoading ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <ProductCardSkeleton key={idx} />
                ))}
              </div>
            ) : (
              <ProductTableSkeleton rows={6} />
            )
          ) : filteredFabrics.length === 0 ? (
            <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-12 text-center space-y-3">
              <Search className="w-8 h-8 text-[#A9B6C7] mx-auto opacity-40" />
              <h3 className="text-base font-bold text-white">No denim fabrics match your criteria</h3>
              <p className="text-xs text-[#A9B6C7] max-w-md mx-auto">
                Try widening your GSM range, clearing specific weave filters, or resetting your search term.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-[#123E70] text-[#FFD36A] rounded-lg text-xs font-semibold hover:bg-[#174A7E]"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredFabrics.map((fabric) => (
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
          ) : (
            /* Table View */
            <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-xl overflow-x-auto shadow-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#174A7E] bg-[#071426] text-[#FFD36A] uppercase tracking-wider text-[11px]">
                    <th className="p-3">SKU Code</th>
                    <th className="p-3">Fabric Quality Name</th>
                    <th className="p-3">Weight (oz / GSM)</th>
                    <th className="p-3">Fibre Composition</th>
                    <th className="p-3">Weave</th>
                    <th className="p-3">Stretch</th>
                    <th className="p-3">Width</th>
                    <th className="p-3">MOQ</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#174A7E]/30 text-[#A9B6C7]">
                  {filteredFabrics.map((f) => (
                    <tr key={f.id} className="hover:bg-[#071426]/60 transition-colors">
                      <td className="p-3 font-mono font-bold text-[#FFD36A]">{f.code}</td>
                      <td className="p-3 font-medium text-white max-w-[200px] truncate">{f.name}</td>
                      <td className="p-3 font-mono text-slate-200">{f.measurements.weightOzPerSqYd} oz · {f.measurements.finishedGSM}g</td>
                      <td className="p-3 max-w-[160px] truncate">{f.fibre.overall}</td>
                      <td className="p-3 text-slate-200">{f.construction.weaveType}</td>
                      <td className="p-3">
                        {f.stretch.hasStretch ? (
                          <span className="text-[#FFD36A] font-semibold">{f.stretch.weftStretchPercentage}%</span>
                        ) : (
                          'Rigid'
                        )}
                      </td>
                      <td className="p-3 font-mono">{f.measurements.usableWidthInches}&quot;</td>
                      <td className="p-3 font-mono">{f.commercial.moqMeters.toLocaleString()}m</td>
                      <td className="p-3 text-right space-x-1.5 whitespace-nowrap">
                        <button
                          onClick={() => onOpenDatasheet(f)}
                          className="px-2.5 py-1 bg-[#123E70] text-[#FFD36A] rounded text-[11px] font-semibold hover:bg-[#174A7E]"
                        >
                          Datasheet
                        </button>
                        <button
                          onClick={() => onRequestQuote(f)}
                          className="px-2.5 py-1 bg-gradient-to-r from-[#FFD36A] to-[#F5A623] text-[#071426] rounded text-[11px] font-bold"
                        >
                          Enquire
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
