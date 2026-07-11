import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Building2, Eye, Lock } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  isAdminMode: boolean;
  setIsAdminMode: (mode: boolean) => void;
  inquiryCount: number;
}

export default function Navbar({
  onNavigate,
  activeSection,
  isAdminMode,
  setIsAdminMode,
  inquiryCount
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Why Balaji', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'Process', target: 'process' },
    { label: 'Contact', target: 'contact' }
  ];

  const handleItemClick = (target: string) => {
    setIsOpen(false);
    onNavigate(target);
  };

  return (
    <>
      {/* Top Banner with Trust Signal */}
      <div className="bg-neutral-950 text-neutral-400 text-xs py-2 px-4 border-b border-neutral-800/60 font-mono flex justify-between items-center z-50 relative">
        <div className="flex items-center space-x-4">
          <span>● ISO 9001:2015 CERTIFIED LEVEL-1 CIVIL CONTRACTOR</span>
          <span className="hidden md:inline text-neutral-600">|</span>
          <span className="hidden md:inline">BIM LOD 400 STANDARD PRECISION</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsAdminMode(!isAdminMode)}
            className={`flex items-center space-x-1.5 px-2 py-0.5 rounded transition-all cursor-pointer ${
              isAdminMode 
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {isAdminMode ? <Eye className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
            <span>{isAdminMode ? 'View Public Site' : 'Inquiry Hub (Admin)'}</span>
            {inquiryCount > 0 && !isAdminMode && (
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-red-100 bg-red-600 rounded-full animate-pulse ml-1">
                {inquiryCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/60 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleItemClick('home')}
            >
              <div className="bg-neutral-950 text-white p-2.5 rounded-lg group-hover:bg-amber-600 transition-colors duration-300">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-display font-semibold tracking-tight text-neutral-900 group-hover:text-amber-700 transition-colors duration-300 block">
                  BALAJI
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-neutral-500 block -mt-1 font-bold">
                  CONSTRUCTIONS
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1 items-center">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleItemClick(item.target)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 relative cursor-pointer ${
                    activeSection === item.target && !isAdminMode
                      ? 'text-neutral-950 font-semibold'
                      : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.target && !isAdminMode && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-amber-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => handleItemClick('contact')}
                className="bg-neutral-950 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-amber-600 active:scale-95 transition-all duration-300 cursor-pointer border border-transparent shadow-md"
              >
                Estimate Project
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 cursor-pointer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-neutral-200"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => handleItemClick(item.target)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      activeSection === item.target && !isAdminMode
                        ? 'bg-neutral-950 text-white font-semibold'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-neutral-100 px-4">
                  <button
                    onClick={() => handleItemClick('contact')}
                    className="w-full text-center bg-amber-600 text-white text-sm font-semibold uppercase tracking-wider py-3.5 rounded-xl shadow-md"
                  >
                    Estimate Project
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
