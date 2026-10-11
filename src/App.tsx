import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { KnowledgePage } from './pages/KnowledgePage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { QualityTestingPage } from './pages/QualityTestingPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { DatasheetModal } from './components/DatasheetModal';
import { ProductComparisonModal } from './components/ProductComparisonModal';
import { AdminCMSModal } from './components/AdminCMSModal';
import { DENIM_PRODUCTS } from './data/products';
import { DenimFabric, B2BEnquiry } from './types/denim';
import { ChevronRight, FileText, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [fabrics, setFabrics] = useState<DenimFabric[]>(DENIM_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers
  const [activeDatasheetFabric, setActiveDatasheetFabric] = useState<DenimFabric | null>(null);
  const [comparedFabricIds, setComparedFabricIds] = useState<string[]>([]);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [enquiries, setEnquiries] = useState<B2BEnquiry[]>([
    {
      id: 'enq-initial-01',
      type: 'sample',
      fullName: 'Jean-Luc Moreau',
      companyName: 'Atelier Denim Paris',
      email: 'jl.moreau@atelierparis.fr',
      phone: '+33 6 12 34 56 78',
      country: 'France',
      buyerType: 'Apparel Brand',
      fabricCode: 'AAD-301',
      requiredMeters: 50,
      specifications: 'Requesting 2-meter sample header of AAD-301 Selvedge with red ticker tape ID for Autumn sampling.',
      createdAt: '2026-03-12',
      status: 'Sample Dispatched',
    },
    {
      id: 'enq-initial-02',
      type: 'quote',
      fullName: 'Samantha Cole',
      companyName: 'Pacific Outfitters Co.',
      email: 's.cole@pacificoutfitters.com',
      phone: '+1 (213) 489-0291',
      country: 'United States',
      buyerType: 'Garment Manufacturer',
      fabricCode: 'AAD-204',
      requiredMeters: 15000,
      specifications: 'FOB Mundra quotation for 15,000 meters AAD-204 Dual-Core Stretch for women high-rise jeans program.',
      createdAt: '2026-03-14',
      status: 'Quote Sent',
    },
  ]);
  const [contactPreselectedCode, setContactPreselectedCode] = useState<string>('');

  // Toggle comparison state for a fabric
  const handleToggleCompare = (fabric: DenimFabric) => {
    if (comparedFabricIds.includes(fabric.id)) {
      setComparedFabricIds(comparedFabricIds.filter((id) => id !== fabric.id));
    } else {
      if (comparedFabricIds.length >= 4) {
        alert('You can compare a maximum of 4 denim fabrics side-by-side.');
        return;
      }
      setComparedFabricIds([...comparedFabricIds, fabric.id]);
    }
  };

  const handleOpenDatasheet = (fabric: DenimFabric) => {
    setActiveDatasheetFabric(fabric);
  };

  const handleRequestQuote = (fabric: DenimFabric) => {
    setContactPreselectedCode(fabric.code);
    setActiveDatasheetFabric(null);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestSample = (fabric: DenimFabric) => {
    setContactPreselectedCode(fabric.code);
    setActiveDatasheetFabric(null);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromNav = (cat: string) => {
    setSelectedCategory(cat);
    setActiveTab('products');
  };

  const handleAddFabric = (newFabric: DenimFabric) => {
    setFabrics([newFabric, ...fabrics]);
  };

  const handleDeleteFabric = (id: string) => {
    setFabrics(fabrics.filter((f) => f.id !== id));
    setComparedFabricIds(comparedFabricIds.filter((cid) => cid !== id));
  };

  const handleAddEnquiry = (enquiry: B2BEnquiry) => {
    setEnquiries([enquiry, ...enquiries]);
  };

  const handleUpdateEnquiryStatus = (id: string, status: B2BEnquiry['status']) => {
    setEnquiries(enquiries.map((e) => (e.id === id ? { ...e, status } : e)));
  };

  const comparedFabricsList = fabrics.filter((f) => comparedFabricIds.includes(f.id));

  // Breadcrumbs title helper
  const getTabLabel = (tab: string) => {
    switch (tab) {
      case 'about':
        return 'About Us';
      case 'products':
        return 'Denim Products Catalogue';
      case 'knowledge':
        return 'Denim Knowledge Centre';
      case 'manufacturing':
        return 'Manufacturing Capabilities';
      case 'quality':
        return 'Quality & Testing Standards';
      case 'sustainability':
        return 'Sustainability & Circularity';
      case 'industries':
        return 'Industries & Applications';
      case 'resources':
        return 'Resources & Download Centre';
      case 'contact':
        return 'B2B Quotation & Enquiries';
      default:
        return 'Home';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071426] text-white">
      {/* Primary Sticky Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuote={() => {
          setContactPreselectedCode('');
          setActiveTab('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCategory={handleSelectCategoryFromNav}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        comparisonCount={comparedFabricIds.length}
        onOpenComparison={() => setIsComparisonModalOpen(true)}
        fabrics={fabrics}
        onOpenDatasheet={handleOpenDatasheet}
      />

      {/* Global Breadcrumbs (Rendered on non-home pages) */}
      {activeTab !== 'home' && (
        <nav aria-label="Breadcrumb" className="bg-[#0B1B32]/70 border-b border-[#174A7E]/30 py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#A9B6C7]">
            <button
              onClick={() => setActiveTab('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#FFD36A] font-medium">{getTabLabel(activeTab)}</span>
            {activeTab === 'products' && selectedCategory !== 'all' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-white font-medium">{selectedCategory}</span>
              </>
            )}
          </div>
        </nav>
      )}

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={setActiveTab}
            onOpenQuote={() => {
              setContactPreselectedCode('');
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            featuredFabrics={fabrics}
            onOpenDatasheet={handleOpenDatasheet}
            onRequestQuote={handleRequestQuote}
            isCompared={(id) => comparedFabricIds.includes(id)}
            onToggleCompare={handleToggleCompare}
            onSelectCategory={handleSelectCategoryFromNav}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage
            fabrics={fabrics}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onOpenDatasheet={handleOpenDatasheet}
            onRequestQuote={handleRequestQuote}
            isCompared={(id) => comparedFabricIds.includes(id)}
            onToggleCompare={handleToggleCompare}
            comparisonCount={comparedFabricIds.length}
            onOpenComparison={() => setIsComparisonModalOpen(true)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onNavigate={setActiveTab}
            onOpenQuote={() => {
              setContactPreselectedCode('');
              setActiveTab('contact');
            }}
          />
        )}

        {activeTab === 'knowledge' && <KnowledgePage />}

        {activeTab === 'manufacturing' && (
          <ManufacturingPage
            onNavigate={setActiveTab}
            onOpenQuote={() => {
              setContactPreselectedCode('');
              setActiveTab('contact');
            }}
          />
        )}

        {activeTab === 'quality' && <QualityTestingPage />}

        {activeTab === 'sustainability' && (
          <SustainabilityPage
            onNavigate={setActiveTab}
            onOpenQuote={() => {
              setContactPreselectedCode('');
              setActiveTab('contact');
            }}
          />
        )}

        {activeTab === 'industries' && (
          <IndustriesPage
            onNavigate={setActiveTab}
            onOpenQuote={() => {
              setContactPreselectedCode('');
              setActiveTab('contact');
            }}
          />
        )}

        {activeTab === 'resources' && (
          <ResourcesPage
            onNavigate={setActiveTab}
            onOpenQuote={() => {
              setContactPreselectedCode('');
              setActiveTab('contact');
            }}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            initialFabricCode={contactPreselectedCode}
            onSubmitEnquiry={handleAddEnquiry}
          />
        )}
      </main>

      {/* Floating Bottom Comparison Strip when items are selected */}
      {comparedFabricIds.length > 0 && !isComparisonModalOpen && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-[#0B1B32]/95 backdrop-blur-md border border-[#F5A623]/60 rounded-full px-5 py-2.5 shadow-2xl flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#FFD36A]" />
            <span>
              <strong className="text-white font-mono">{comparedFabricIds.length}</strong> of 4 fabrics selected
            </span>
          </div>
          <button
            onClick={() => setIsComparisonModalOpen(true)}
            className="px-3.5 py-1.5 bg-gradient-to-r from-[#FFD36A] to-[#F5A623] text-[#071426] rounded-full font-bold hover:brightness-110 transition-all cursor-pointer"
          >
            Compare Now
          </button>
          <button
            onClick={() => setComparedFabricIds([])}
            className="text-slate-400 hover:text-white p-1"
            title="Clear compared items"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Technical Datasheet Modal */}
      <DatasheetModal
        fabric={activeDatasheetFabric}
        onClose={() => setActiveDatasheetFabric(null)}
        onRequestQuote={handleRequestQuote}
        onRequestSample={handleRequestSample}
        onToggleCompare={handleToggleCompare}
        isCompared={activeDatasheetFabric ? comparedFabricIds.includes(activeDatasheetFabric.id) : false}
      />

      {/* Side-by-side Product Comparison Modal */}
      {isComparisonModalOpen && (
        <ProductComparisonModal
          fabrics={comparedFabricsList}
          onClose={() => setIsComparisonModalOpen(false)}
          onRemoveFabric={(id) => setComparedFabricIds(comparedFabricIds.filter((cid) => cid !== id))}
          onClearAll={() => setComparedFabricIds([])}
          onRequestQuote={handleRequestQuote}
          onOpenDatasheet={(fabric) => {
            setIsComparisonModalOpen(false);
            setActiveDatasheetFabric(fabric);
          }}
        />
      )}

      {/* Admin CMS Modal */}
      <AdminCMSModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        fabrics={fabrics}
        onAddFabric={handleAddFabric}
        onDeleteFabric={handleDeleteFabric}
        enquiries={enquiries}
        onUpdateEnquiryStatus={handleUpdateEnquiryStatus}
      />

      {/* Primary Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />
    </div>
  );
}
