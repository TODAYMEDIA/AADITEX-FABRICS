import React, { useState, useEffect, useRef } from 'react';
import { BrandLogo } from './BrandLogo';
import { DENIM_CATEGORIES_METADATA } from '../data/products';
import { DenimFabric } from '../types/denim';
import {
  ChevronDown,
  Menu,
  X,
  Search,
  FileText,
  ArrowRight,
  Sparkles,
  Layers,
  Globe2,
  Scale,
  Compass,
  BookOpen,
  Factory,
  ShieldCheck,
  Leaf,
  Scissors,
  Mail,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuote: () => void;
  onSelectCategory?: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  comparisonCount: number;
  onOpenComparison: () => void;
  fabrics: DenimFabric[];
  onOpenDatasheet: (fabric: DenimFabric) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuote,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  comparisonCount,
  onOpenComparison,
  fabrics,
  onOpenDatasheet,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products', hasMega: true },
    { id: 'knowledge', label: 'Knowledge' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'quality', label: 'Quality & Testing' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'industries', label: 'Applications' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact Us' },
  ];

  // Quick navigation pages index
  const sitePages = [
    { id: 'products', title: 'Denim Products Catalogue', subtitle: 'Searchable 13-category fabric database', icon: Layers },
    { id: 'knowledge', title: 'Denim Knowledge Centre', subtitle: 'Rope dyeing, spinning & weaving chemistry', icon: BookOpen },
    { id: 'manufacturing', title: 'Manufacturing Capabilities', subtitle: '8-stage Gujarat mill timeline & machinery', icon: Factory },
    { id: 'quality', title: 'Quality & Testing Standards', subtitle: 'ASTM D3776, ASTM D5034 & ISO testing protocols', icon: ShieldCheck },
    { id: 'sustainability', title: 'Sustainability & Circularity', subtitle: 'GOTS organic cotton, TENCEL™ & water recycling', icon: Leaf },
    { id: 'industries', title: 'Industries & Applications', subtitle: 'Jeans, workwear, shirting & bespoke tailors', icon: Scissors },
    { id: 'resources', title: 'GSM ↔ oz/yd² Weight Calculator', subtitle: 'Instant denim weight & weave identification', icon: Scale },
    { id: 'home', title: '3D Worldwide Delivery Logistics Globe', subtitle: 'Interactive flight stimulation from Gujarat hub', icon: Globe2 },
    { id: 'contact', title: 'B2B Quotations & Swatch Sample Desk', subtitle: 'Direct mill procurement & export enquiries', icon: Mail },
  ];

  // Global Keyboard Shortcut: Ctrl+K or / focuses persistent search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        setIsDropdownOpen(true);
      } else if (e.key === '/' && document.activeElement !== searchInputRef.current && (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA')) {
        e.preventDefault();
        searchInputRef.current?.focus();
        setIsDropdownOpen(true);
      } else if (e.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (catId: string) => {
    setActiveTab('products');
    if (onSelectCategory) onSelectCategory(catId);
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductFromSearch = (fabric: DenimFabric) => {
    setIsDropdownOpen(false);
    setActiveTab('products');
    onOpenDatasheet(fabric);
  };

  const handleSelectPageFromSearch = (pageId: string) => {
    setIsDropdownOpen(false);
    setActiveTab(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter products for dropdown suggestions
  const matchingFabrics = searchQuery.trim()
    ? fabrics.filter((f) => {
        const q = searchQuery.toLowerCase();
        return (
          f.code.toLowerCase().includes(q) ||
          f.name.toLowerCase().includes(q) ||
          f.category.toLowerCase().includes(q) ||
          f.construction.weaveType.toLowerCase().includes(q) ||
          f.fibre.overall.toLowerCase().includes(q) ||
          f.measurements.weightOzPerSqYd.toString().includes(q) ||
          f.measurements.finishedGSM.toString().includes(q)
        );
      }).slice(0, 5)
    : fabrics.slice(0, 4);

  // Filter pages for dropdown suggestions
  const matchingPages = searchQuery.trim()
    ? sitePages.filter((p) => {
        const q = searchQuery.toLowerCase();
        return p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q);
      }).slice(0, 4)
    : sitePages.slice(0, 3);

  return (
    <header className="sticky top-0 z-50 bg-[#071426]/95 backdrop-blur-md border-b border-[#174A7E]/40 text-white">
      {/* Top 3-Zone Contract Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Single Brand Wordmark Element */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left cursor-pointer shrink-0 transition-opacity hover:opacity-90"
        >
          <BrandLogo size="md" />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden 2xl:flex items-center gap-5 text-sm font-medium text-[#A9B6C7]">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;

            if (link.hasMega) {
              return (
                <div
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center gap-1 py-2 whitespace-nowrap transition-colors ${
                      isActive ? 'text-[#FFD36A] font-semibold' : 'hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        megaMenuOpen ? 'rotate-180 text-[#FFD36A]' : ''
                      }`}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {megaMenuOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] bg-[#071426] border border-[#F5A623]/30 rounded-2xl p-6 shadow-2xl grid grid-cols-3 gap-4 z-50">
                      <div className="col-span-3 pb-3 border-b border-[#174A7E]/50 flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-white tracking-wide">
                            Complete Denim Product Catalogue
                          </h4>
                          <p className="text-xs text-[#A9B6C7] mt-0.5">
                            Explore 13 multi-attribute textile categories from rigid heritage to functional tech.
                          </p>
                        </div>
                        <button
                          onClick={() => handleNavClick('products')}
                          className="text-xs text-[#FFD36A] hover:underline flex items-center gap-1 font-semibold"
                        >
                          <span>View All Fabrics</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {DENIM_CATEGORIES_METADATA.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => handleCategoryClick(cat.id)}
                          className="text-left p-2.5 rounded-lg hover:bg-[#0B1B32] transition-colors border border-transparent hover:border-[#174A7E]/40 group/item"
                        >
                          <div className="text-xs font-semibold text-slate-200 group-hover/item:text-[#FFD36A] transition-colors">
                            {cat.id}
                          </div>
                          <div className="text-[11px] text-[#A9B6C7] line-clamp-1 mt-0.5">
                            {cat.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-2 whitespace-nowrap transition-colors ${
                  isActive ? 'text-[#FFD36A] font-semibold' : 'hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Global Persistent Search Bar (Desktop & Tablet) */}
        <div ref={searchContainerRef} className="relative flex-1 max-w-xs md:max-w-sm lg:max-w-md hidden md:block">
          <div className="relative flex items-center bg-[#0B1B32]/90 border border-[#174A7E]/70 focus-within:border-[#F5A623] focus-within:ring-1 focus-within:ring-[#F5A623]/40 rounded-xl px-3 py-2 transition-all shadow-inner">
            <Search className="w-4 h-4 text-[#F5A623] shrink-0 mr-2.5" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search fabrics, codes, GSM or pages..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsDropdownOpen(true);
              }}
              onFocus={() => setIsDropdownOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setActiveTab('products');
                  setIsDropdownOpen(false);
                }
              }}
              className="bg-transparent border-none text-xs text-white placeholder-[#8A9BA8] focus:outline-none w-full"
            />
            {searchQuery ? (
              <button
                onClick={() => {
                  setSearchQuery('');
                  searchInputRef.current?.focus();
                }}
                className="text-slate-400 hover:text-white p-0.5 ml-1"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            ) : (
              <kbd className="hidden lg:inline-flex items-center gap-0.5 text-[10px] text-[#8A9BA8] bg-[#071426] px-1.5 py-0.5 rounded border border-[#174A7E]/50 font-mono">
                ⌘K
              </kbd>
            )}
          </div>

          {/* Persistent Search Instant Suggestion Popover */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#071426] border border-[#F5A623]/40 rounded-xl shadow-2xl p-3 z-50 max-h-[480px] overflow-y-auto space-y-3 animate-in fade-in zoom-in-95 duration-150">
              {/* Pages Quick Matches */}
              {matchingPages.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-[#FFD36A] uppercase tracking-wider px-2 pb-1.5 flex items-center justify-between">
                    <span>Pages & Tools</span>
                    <span className="text-[9px] text-[#8A9BA8] font-normal">Instant Nav</span>
                  </div>
                  <div className="space-y-1">
                    {matchingPages.map((page) => {
                      const IconComponent = page.icon;
                      return (
                        <button
                          key={page.id}
                          onClick={() => handleSelectPageFromSearch(page.id)}
                          className="w-full text-left p-2 rounded-lg hover:bg-[#0B1B32] transition-colors flex items-center gap-2.5 group/page cursor-pointer"
                        >
                          <div className="p-1.5 rounded-md bg-[#123E70]/60 text-[#FFD36A] group-hover/page:bg-[#123E70]">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-white group-hover/page:text-[#FFD36A] truncate">
                              {page.title}
                            </div>
                            <div className="text-[10px] text-[#A9B6C7] truncate">
                              {page.subtitle}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Denim Fabrics Matches */}
              <div>
                <div className="text-[10px] font-bold text-[#FFD36A] uppercase tracking-wider px-2 pb-1.5 pt-1 border-t border-[#174A7E]/40 flex items-center justify-between">
                  <span>Matching Denim Fabrics</span>
                  <span className="text-[9px] text-[#8A9BA8] font-normal">
                    {matchingFabrics.length} of {fabrics.length}
                  </span>
                </div>
                {matchingFabrics.length === 0 ? (
                  <div className="p-3 text-center text-xs text-[#A9B6C7]">
                    No fabric specifications matching &quot;{searchQuery}&quot;
                  </div>
                ) : (
                  <div className="space-y-1">
                    {matchingFabrics.map((fabric) => (
                      <button
                        key={fabric.id}
                        onClick={() => handleSelectProductFromSearch(fabric)}
                        className="w-full text-left p-2 rounded-lg hover:bg-[#0B1B32] transition-colors flex items-center gap-2.5 group/fab cursor-pointer border border-transparent hover:border-[#174A7E]/50"
                      >
                        <img
                          src={fabric.heroImage}
                          alt={fabric.name}
                          className="w-9 h-9 rounded object-cover shrink-0 bg-[#0B1B32]"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-[10px] font-bold text-[#FFD36A] bg-[#123E70] px-1.5 py-0.2 rounded">
                              {fabric.code}
                            </span>
                            <span className="text-xs font-semibold text-white group-hover/fab:text-[#FFD36A] truncate">
                              {fabric.name}
                            </span>
                          </div>
                          <div className="text-[10px] text-[#A9B6C7] flex items-center gap-2 mt-0.5">
                            <span>{fabric.measurements.weightOzPerSqYd} oz</span>
                            <span>·</span>
                            <span>{fabric.construction.weaveType}</span>
                            <span>·</span>
                            <span className="truncate">{fabric.fibre.overall}</span>
                          </div>
                        </div>
                        <span className="text-[10px] text-[#FFD36A] opacity-0 group-hover/fab:opacity-100 font-semibold shrink-0">
                          Datasheet →
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer inside Popover */}
              <div className="pt-2 border-t border-[#174A7E]/40 flex items-center justify-between text-[10px] text-[#A9B6C7] px-2">
                <span>Press Enter to filter full catalogue</span>
                <button
                  onClick={() => {
                    setActiveTab('products');
                    setIsDropdownOpen(false);
                  }}
                  className="text-[#FFD36A] hover:underline font-semibold"
                >
                  View All in Catalogue →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Zone 3: Primary Action + Utility Tools */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Comparison tool badge button */}
          {comparisonCount > 0 && (
            <button
              onClick={onOpenComparison}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-[#123E70] hover:bg-[#174A7E] text-[#FFD36A] text-xs font-semibold rounded-lg border border-[#F5A623]/40 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Compare ({comparisonCount})</span>
            </button>
          )}

          {/* Primary Action Button: Request a Quote */}
          <button
            onClick={onOpenQuote}
            className="px-4 py-2.5 text-xs font-bold text-[#071426] bg-gradient-to-r from-[#FFD36A] via-[#F5A623] to-[#D96A16] hover:brightness-110 active:brightness-95 rounded-lg transition-all shadow-md shadow-[#D96A16]/25 whitespace-nowrap cursor-pointer uppercase tracking-wider"
          >
            Request a Quote
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="2xl:hidden p-2 text-[#A9B6C7] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Persistent Global Search Bar for Mobile (Below header row on small screens) */}
      <div className="md:hidden px-4 pb-3 border-t border-[#174A7E]/30 pt-2.5">
        <div className="relative flex items-center bg-[#0B1B32] border border-[#174A7E] rounded-xl px-3 py-2">
          <Search className="w-4 h-4 text-[#F5A623] shrink-0 mr-2" />
          <input
            type="text"
            placeholder="Search fabrics, codes, GSM..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleNavClick('products');
            }}
            className="bg-transparent border-none text-xs text-white placeholder-[#8A9BA8] focus:outline-none w-full"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-slate-400 p-0.5">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="2xl:hidden bg-[#071426] border-b border-[#174A7E] px-4 pt-2 pb-6 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-1 my-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === link.id
                    ? 'bg-[#123E70] text-[#FFD36A] font-semibold'
                    : 'text-[#A9B6C7] hover:bg-[#0B1B32] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Category Shortcut list */}
          <div className="mt-4 pt-4 border-t border-[#174A7E]/50">
            <p className="text-xs font-semibold text-[#FFD36A] uppercase tracking-wider mb-2">
              Featured Categories
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {DENIM_CATEGORIES_METADATA.slice(0, 6).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="text-left py-1.5 px-2 bg-[#0B1B32] rounded text-[#A9B6C7] hover:text-white"
                >
                  {cat.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
