import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import ProjectShowcase from './components/ProjectShowcase';
import BeforeAfter from './components/BeforeAfter';
import ConstructionProcess from './components/ConstructionProcess';
import Testimonials from './components/Testimonials';
import QuoteRequest from './components/QuoteRequest';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import { ProjectInquiry } from './types';

const STORAGE_KEY = 'balaji_constructions_inquiries';

const STARTER_INQUIRIES: ProjectInquiry[] = [
  {
    id: 'inq-1',
    fullName: 'Rajesh Singhania',
    email: 'r.singhania@singhaniagroup.com',
    phone: '+91 98450 11223',
    company: 'Singhania Real Estate Developers',
    projectType: 'commercial',
    estimatedBudget: '₹150Cr+',
    timeline: '6 to 12 Months',
    location: 'Outer Ring Road, Bengaluru',
    message: 'We are seeking pre-qualification documents and itemized engineering tenders for a G+22 storey IT park. Requires LEED Platinum structural detailing, column-free open composite framing span of 12 meters, and a precast concrete segmental lift core.',
    submittedAt: '2026-06-20T10:30:00.000Z',
    status: 'reviewed',
    internalNotes: 'Contacted Rajesh. High probability. Advised Senior Civil Engineers to begin geotechnical draft analysis and structure model feasibility.'
  },
  {
    id: 'inq-2',
    fullName: 'Ananya Deshmukh',
    email: 'ananya@deshmukh-villas.in',
    phone: '+91 98200 44556',
    company: 'Aurelia Penthouse Owner',
    projectType: 'residential',
    estimatedBudget: '₹5Cr - ₹15Cr',
    timeline: 'Immediate (Within 3 Months)',
    location: 'Worli Sea Face, Mumbai',
    message: 'Looking to contract a high-end structural contractor to cast a luxury custom smart-villa. Must feature seismic-resistant high-strength columns, double-glazed soundproof glass walls, and an 8-meter long cantilevered pool deck facing the sea.',
    submittedAt: '2026-06-22T14:15:00.000Z',
    status: 'pending',
    internalNotes: 'Requires premium artisan marble stone laying and specific chemical waterproofing specifications. Needs site visit.'
  },
  {
    id: 'inq-3',
    fullName: 'Dr. Vikram Malhotra',
    email: 'v.malhotra@apex-infrastructure.gov.in',
    phone: '+91 11 2688 8900',
    company: 'National Transit & Infrastructure Board',
    projectType: 'infrastructure',
    estimatedBudget: '₹150Cr+',
    timeline: '12 to 24 Months',
    location: 'JNPT Port Road, Sector-12, Navi Mumbai',
    message: 'We are inviting Expressions of Interest (EoI) for civil piling works, structural steel heavy bridges, and subgrade consolidation across 4 kilometers of arterial port-approach corridor. High chemical resistance concrete required.',
    submittedAt: '2026-06-23T09:00:00.000Z',
    status: 'contacted',
    internalNotes: 'Heavy pre-cast civil infrastructure expertise critical. Submitted pre-qualification bond details on June 23rd.'
  }
];

export default function App() {
  const [inquiries, setInquiries] = useState<ProjectInquiry[]>([]);
  const [activeSection, setActiveSection] = useState('home');
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Load starter and local inquiries
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setInquiries(JSON.parse(stored));
      } catch (err) {
        console.error('Error parsing stored inquiries', err);
        setInquiries(STARTER_INQUIRIES);
      }
    } else {
      setInquiries(STARTER_INQUIRIES);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(STARTER_INQUIRIES));
    }
  }, []);

  // Sync to local storage
  const syncInquiries = (updated: ProjectInquiry[]) => {
    setInquiries(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleAddInquiry = (newInq: Omit<ProjectInquiry, 'id' | 'submittedAt' | 'status'>) => {
    const fullInquiry: ProjectInquiry = {
      ...newInq,
      id: `inq-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'pending',
      internalNotes: 'New inquiry received via public estimator form.'
    };
    const updated = [fullInquiry, ...inquiries];
    syncInquiries(updated);
  };

  const handleUpdateStatus = (id: string, status: ProjectInquiry['status']) => {
    const updated = inquiries.map((iq) => 
      iq.id === id ? { ...iq, status } : iq
    );
    syncInquiries(updated);
  };

  const handleUpdateNotes = (id: string, notes: string) => {
    const updated = inquiries.map((iq) => 
      iq.id === id ? { ...iq, internalNotes: notes } : iq
    );
    syncInquiries(updated);
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((iq) => iq.id !== id);
    syncInquiries(updated);
  };

  const handleNavigate = (sectionId: string) => {
    setIsAdminMode(false);
    setActiveSection(sectionId);
    
    // Smooth scroll to container element
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Tracking user scrolls to highlight active section in Navbar
  useEffect(() => {
    if (isAdminMode) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'process', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAdminMode]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-amber-500 selection:text-neutral-950 font-sans antialiased">
      
      {/* Sticky Premium Header Banner */}
      <Navbar
        onNavigate={handleNavigate}
        activeSection={activeSection}
        isAdminMode={isAdminMode}
        setIsAdminMode={setIsAdminMode}
        inquiryCount={inquiries.filter((i) => i.status === 'pending').length}
      />

      {/* Main Core Router Switch */}
      <main>
        {isAdminMode ? (
          <AdminDashboard
            inquiries={inquiries}
            onUpdateStatus={handleUpdateStatus}
            onUpdateNotes={handleUpdateNotes}
            onDeleteInquiry={handleDeleteInquiry}
          />
        ) : (
          <>
            {/* Cinematic Hero Block */}
            <Hero onNavigate={handleNavigate} />

            {/* Why Balaji (About, Stats & Accreditations) */}
            <WhyChooseUs />

            {/* Services Detailed Breakdown */}
            <Services />

            {/* Interactive Projects Folio Showcase */}
            <ProjectShowcase />

            {/* Before-and-After Restoration Transformation slider */}
            <BeforeAfter />

            {/* Stage-Gate Construction Timeline Process */}
            <ConstructionProcess />

            {/* Testimonials from High-Profile Promoters */}
            <Testimonials />

            {/* Transmit RFP & Custom Estimator Form */}
            <QuoteRequest onAddInquiry={handleAddInquiry} />
          </>
        )}
      </main>

      {/* Corporate Location & Certified Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
