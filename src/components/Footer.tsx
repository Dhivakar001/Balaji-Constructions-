import React from 'react';
import { Building2, Mail, Phone, MapPin, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-neutral-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="bg-amber-600 text-neutral-950 p-2 rounded-lg">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-display font-semibold tracking-tight block">
                  BALAJI
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-neutral-400 block -mt-1 font-bold">
                  CONSTRUCTIONS
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
              Balaji Constructions is an ISO 9001:2015 certified, Class-A general contractor and infrastructure engineering specialist. We develop landmark residential villas, high-rise office towers, and sustainable civil works.
            </p>

            <div className="flex items-center space-x-3 text-neutral-500 text-xs font-mono">
              <Award className="w-4 h-4 text-amber-500" />
              <span>REGISTRATION NO: CC-489282-MUM</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono text-neutral-300 font-bold uppercase tracking-wider mb-6">
              PROJECT ARCHIVE
            </h4>
            <ul className="space-y-3.5 text-neutral-400 text-sm">
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-amber-500 transition-colors cursor-pointer">
                  Luxury Residential
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-amber-500 transition-colors cursor-pointer">
                  Commercial Landmark towers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-amber-500 transition-colors cursor-pointer">
                  Strategic Infrastructure
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-500 transition-colors cursor-pointer">
                  Engineering Standards
                </button>
              </li>
            </ul>
          </div>

          {/* Sectors Col */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono text-neutral-300 font-bold uppercase tracking-wider mb-6">
              REGIONAL CENTERS
            </h4>
            <div className="space-y-4 text-neutral-400 text-xs font-mono">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>MUMBAI: Nariman Point, Marine Drive, MH — 400021</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>BENGALURU: Whitefield Tech District, KA — 560066</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>CHENNAI: OMR Corporate Corridor, TN — 600096</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          <div className="font-mono text-center sm:text-left">
            © {currentYear} Balaji Constructions Ltd. All Rights Reserved.
          </div>
          
          <div className="text-center sm:text-right max-w-md font-mono text-[10px] text-neutral-600 leading-normal">
            Disclaimer: This web portal showcases simulated high-value portfolios and estimation metrics. Inquiries submitted in this environment are persisted in the browser local storage sandbox.
          </div>
        </div>

      </div>
    </footer>
  );
}
