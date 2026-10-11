import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Mail, Phone, MapPin, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmin }) => {
  return (
    <footer className="bg-[#040C17] border-t border-[#174A7E]/40 text-[#A9B6C7] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#174A7E]/40">
          {/* Brand Info & Gujarat Mill Hub */}
          <div className="lg:col-span-2">
            <BrandLogo size="lg" />
            <p className="mt-4 text-xs leading-relaxed max-w-sm text-[#A9B6C7]">
              AADITEX FABRICS is an international denim textile manufacturer engineering premium cotton, stretch, selvedge, and sustainable qualities. Operating integrated rope-dyeing and precision weaving facilities in Gujarat, India, with direct export corridors to European, American, and Asian apparel hubs.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>Textile Cluster Corridor, Ahmedabad / Mundra Port Gateway, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>sourcing@aaditexfabrics.com · export@aaditexfabrics.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>+91 79 4892 5100 (B2B Enquiries & Sampling Desk)</span>
              </div>
            </div>
          </div>

          {/* Denim Collections */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4">Fabric Catalogue</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#FFD36A] transition-colors">
                  Classic 100% Cotton
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#FFD36A] transition-colors">
                  Dual-Core Power Stretch
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#FFD36A] transition-colors">
                  Shuttle Loom Selvedge
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#FFD36A] transition-colors">
                  Anti-Torque Broken Twill
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#FFD36A] transition-colors">
                  TENCEL™ Eco-Circular
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#FFD36A] transition-colors">
                  Heavyweight Bull Twill
                </button>
              </li>
            </ul>
          </div>

          {/* Technical Knowledge */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4">Technical Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('knowledge')} className="hover:text-[#FFD36A] transition-colors">
                  Manufacturing Timeline
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('knowledge')} className="hover:text-[#FFD36A] transition-colors">
                  Rope Dyeing Chemistry
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quality')} className="hover:text-[#FFD36A] transition-colors">
                  ASTM & ISO Test Methods
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-[#FFD36A] transition-colors">
                  GSM ↔ oz/yd² Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-[#FFD36A] transition-colors">
                  Weave Identification Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-[#FFD36A] transition-colors">
                  Denim Terminology Glossary
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Compliance */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4">Company & Compliance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#FFD36A] transition-colors">
                  About AADITEX
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sustainability')} className="hover:text-[#FFD36A] transition-colors">
                  Sustainability Commitments
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-[#FFD36A] transition-colors">
                  Apparel Industries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#FFD36A] transition-colors">
                  Sample Swatch Dispatch
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} className="text-[#F5A623] hover:underline flex items-center gap-1 font-semibold">
                  <span>Mill CMS Admin Console</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Statement */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AADITEX FABRICS. All rights reserved. “Weaving a Stronger Tomorrow”.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Technical Datasheets Rev 2026.1</span>
            <span>·</span>
            <span>Export Container Freight from Gujarat to Worldwide</span>
            <span>·</span>
            <span>ASTM & ISO Calibrated Laboratory</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
