import React, { useState } from 'react';
import { B2BEnquiry } from '../types/denim';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Globe, Box } from 'lucide-react';

interface ContactPageProps {
  initialFabricCode?: string;
  onSubmitEnquiry: (enquiry: B2BEnquiry) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialFabricCode = '',
  onSubmitEnquiry,
}) => {
  const [formType, setFormType] = useState<'quote' | 'sample' | 'custom' | 'bulk'>('quote');
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    buyerType: 'Garment Manufacturer' as B2BEnquiry['buyerType'],
    fabricCode: initialFabricCode,
    targetGsm: '',
    requiredMeters: '3000',
    targetDeliveryDate: '',
    specifications: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.companyName) return;

    const newEnquiry: B2BEnquiry = {
      id: `enq-${Date.now()}`,
      type: formType,
      fullName: formData.fullName,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      buyerType: formData.buyerType,
      fabricCode: formData.fabricCode,
      targetGsm: formData.targetGsm,
      requiredMeters: parseInt(formData.requiredMeters) || 0,
      targetDeliveryDate: formData.targetDeliveryDate,
      specifications: formData.specifications,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'New',
    };

    onSubmitEnquiry(newEnquiry);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FFD36A]">
          Direct Mill Communication
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          B2B Quotation, Swatch Requests & Export Enquiries
        </h1>
        <p className="text-sm text-[#A9B6C7] leading-relaxed">
          Connect directly with our technical textile sourcing team in Gujarat. Whether you require immediate sample swatches, commercial container quotations, or custom weave development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Form Card */}
        <div className="lg:col-span-8 bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
          {/* Tab Selector for Form Intent */}
          <div className="flex items-center gap-1.5 bg-[#071426] p-1 rounded-xl border border-[#174A7E]/40 text-xs overflow-x-auto">
            {[
              { id: 'quote', label: 'Request a Quote' },
              { id: 'sample', label: 'Request Swatch Kit' },
              { id: 'custom', label: 'Custom Development' },
              { id: 'bulk', label: 'Bulk Export Order' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setFormType(t.id as any)}
                className={`px-3.5 py-2 rounded-lg whitespace-nowrap font-medium transition-colors cursor-pointer ${
                  formType === t.id
                    ? 'bg-[#123E70] text-[#FFD36A] font-bold shadow-sm'
                    : 'text-[#A9B6C7] hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {submitted ? (
            <div className="bg-[#071426] border border-[#34D399]/40 rounded-xl p-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#34D399] mx-auto" />
              <h3 className="text-xl font-bold text-white">Enquiry Received Successfully</h3>
              <p className="text-xs text-[#A9B6C7] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enquiry for{' '}
                <strong className="text-[#FFD36A]">{formData.companyName}</strong> has been logged in our Gujarat mill procurement system. A sourcing manager will review your technical specifications and contact you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 bg-[#123E70] hover:bg-[#174A7E] text-[#FFD36A] rounded-lg text-xs font-semibold"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                    Contact Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#FFD36A]"
                  />
                </div>

                <div>
                  <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                    Company / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pacific Denim Works"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#FFD36A]"
                  />
                </div>

                <div>
                  <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sourcing@yourbrand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#FFD36A]"
                  />
                </div>

                <div>
                  <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                    Phone & Country Code *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#FFD36A]"
                  />
                </div>

                <div>
                  <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                    Destination Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United States, Germany, Bangladesh"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#FFD36A]"
                  />
                </div>

                <div>
                  <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                    Buyer Category
                  </label>
                  <select
                    value={formData.buyerType}
                    onChange={(e) => setFormData({ ...formData, buyerType: e.target.value as any })}
                    className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#FFD36A]"
                  >
                    <option value="Garment Manufacturer">Garment Manufacturer</option>
                    <option value="Apparel Brand">Apparel Brand / Label</option>
                    <option value="Textile Sourcing Office">Textile Sourcing Office</option>
                    <option value="Buying House">Buying House / Agent</option>
                    <option value="Wholesaler / Trader">Wholesaler / Fabric Distributor</option>
                    <option value="Independent Designer">Independent Designer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                    Fabric Code / SKU Reference (if known)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AAD-101, AAD-204"
                    value={formData.fabricCode}
                    onChange={(e) => setFormData({ ...formData, fabricCode: e.target.value })}
                    className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3.5 py-2.5 text-white font-mono focus:outline-none focus:border-[#FFD36A]"
                  />
                </div>

                <div>
                  <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                    Required Quantity (Metres)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 3000"
                    value={formData.requiredMeters}
                    onChange={(e) => setFormData({ ...formData, requiredMeters: e.target.value })}
                    className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3.5 py-2.5 text-white font-mono focus:outline-none focus:border-[#FFD36A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#A9B6C7] uppercase text-[10px] font-semibold mb-1">
                  Technical Requirements & Specific Inquiries
                </label>
                <textarea
                  rows={4}
                  placeholder="Detail target GSM, elastane percentage, warp dye shade, intended garment style, laundry wash test targets, or delivery port requirements..."
                  value={formData.specifications}
                  onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                  className="w-full bg-[#071426] border border-[#174A7E] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#FFD36A]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-400">
                  Data is confidential and protected under strict B2B NDA policies.
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#FFD36A] via-[#F5A623] to-[#D96A16] hover:brightness-110 active:brightness-95 text-[#071426] font-bold rounded-xl transition-all shadow-md flex items-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Enquiry to Mill Desk</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Gujarat Mill Details & Logistics */}
        <div className="lg:col-span-4 space-y-6 text-xs">
          {/* Mill Office */}
          <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-6 space-y-4 shadow-xl">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider text-[#FFD36A]">
              Manufacturing Facility & Head Office
            </h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">AADITEX FABRICS Mill Complex</strong>
                  Textile Industrial Corridor, Narol-Pirana Zone, Ahmedabad, Gujarat 382405, India
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>sourcing@aaditexfabrics.com</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>+91 79 4892 5100 / 5101</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>Mon – Sat: 09:00 – 19:00 IST (UTC +5:30)</span>
              </div>
            </div>
          </div>

          {/* Export Gateway Details */}
          <div className="bg-[#0B1B32] border border-[#174A7E]/50 rounded-2xl p-6 space-y-3 shadow-xl">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider text-[#FFD36A]">
              Strategic Port Connectivity
            </h3>
            <p className="text-[#A9B6C7] leading-relaxed">
              Situated with direct dedicated freight access to Mundra Port and Pipavav Port for sea container loadings, and Sardar Vallabhbhai Patel International Airport (AMD) for express international courier swatch cards.
            </p>
            <div className="pt-2 border-t border-[#174A7E]/30 space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span className="text-[#A9B6C7]">Sea Container Corridor:</span>
                <span className="font-mono text-white">Mundra Port (INMUN)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A9B6C7]">Air Cargo Terminal:</span>
                <span className="font-mono text-white">AMD International</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A9B6C7]">Customs Transit:</span>
                <span className="text-[#34D399]">Direct Factory Stuffing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
