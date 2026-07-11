import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Building2, Cpu, Check, ArrowUpRight, Scale, Clock, Award } from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Home: Home,
    Building2: Building2,
    Cpu: Cpu
  };

  const activeService = SERVICES[activeServiceIdx];
  const ActiveIcon = iconMap[activeService.icon] || Building2;

  return (
    <section id="services" className="py-24 lg:py-32 bg-neutral-50 text-neutral-900 border-y border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-amber-700 text-xs font-mono font-bold uppercase tracking-[0.2em] block mb-4">
            // SPECIALIZED SERVICES
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-950">
            Precision Contracting Across Diverse Civil Scales
          </h2>
          <p className="mt-4 text-neutral-600 text-lg sm:text-xl">
            We deliver state-of-the-art general contracting, structural steel framing, and custom engineering systems suited to unique residential, commercial, and heavy civic demands.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {SERVICES.map((srv, idx) => {
            const SrvIcon = iconMap[srv.icon] || Building2;
            const isActive = activeServiceIdx === idx;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveServiceIdx(idx)}
                className={`flex items-center space-x-4 p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-neutral-950 border-neutral-900 text-white shadow-xl'
                    : 'bg-white border-neutral-200/60 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100/50'
                }`}
              >
                <div className={`p-3 rounded-xl ${isActive ? 'bg-amber-500 text-neutral-950' : 'bg-neutral-100 text-neutral-800'}`}>
                  <SrvIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base block">{srv.title}</h3>
                  <span className={`text-[11px] font-mono block ${isActive ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    View Core Specs
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Feature Panel */}
        <div className="bg-white rounded-3xl border border-neutral-200/60 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Spec Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {/* Active Service Label */}
                <div className="inline-flex items-center space-x-2 bg-amber-600/10 text-amber-800 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase mb-6">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  <span>{activeService.title} Mastery</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-neutral-950 mb-6">
                  {activeService.description}
                </h3>

                {/* Feature Bullet List */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                    ENGINEERING SAFEGUARDS & CAPABILITIES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeService.features.map((feat) => (
                      <div key={feat} className="flex items-start space-x-3">
                        <div className="bg-emerald-100 text-emerald-800 rounded-full p-0.5 mt-1">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-neutral-700 text-sm leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="border-t border-neutral-100 pt-8 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs text-neutral-400 font-mono uppercase block">CONTRACTOR RATING</span>
                <span className="text-lg font-display font-bold text-neutral-900 block mt-1">Class-A General Contracting Partner</span>
              </div>
              <button 
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold text-amber-700 hover:text-amber-600 uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
              >
                <span>Request Specific Method Statement</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Metrics Panel */}
          <div className="lg:col-span-5 bg-neutral-950 text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient from-neutral-900 to-neutral-950 z-0 opacity-40" />
            
            <div className="relative z-10">
              <span className="text-neutral-400 text-xs font-mono uppercase block mb-8 tracking-widest">
                // CRITICAL SPECIFICATIONS
              </span>

              <div className="space-y-8">
                {activeService.specs.map((spec, idx) => (
                  <div key={spec.label} className="border-l-2 border-amber-500 pl-6">
                    <span className="text-xs text-neutral-400 font-sans block uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="text-2xl sm:text-3xl font-display font-bold text-white block mt-1">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 bg-neutral-900 border border-neutral-800/80 rounded-2xl p-6 mt-12 flex items-center space-x-4">
              <div className="bg-amber-600/10 text-amber-400 p-2.5 rounded-xl">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-amber-500 block uppercase">QA/QC PROTOCOLS</span>
                <span className="text-xs text-neutral-400 block mt-0.5 leading-relaxed">
                  NDT testing, Ultrasonic weld checks, and core-drilled concrete compression certified labs.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
