import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Sparkles, Milestone, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const credentials = [
    {
      icon: Shield,
      title: 'Structural Durability Guarantee',
      desc: 'All projects undergo rigorous geotechnical soil-bearing analysis, hydrostatic concrete pressure checks, and are backed by a certified 25-to-50-year structural warranty.'
    },
    {
      icon: Award,
      title: 'ISO & Green Building Compliant',
      desc: 'Certified to ISO 9001:2015 for quality operations, ISO 14001 for environmental safety, and holding major LEED Platinum and IGBC Green Developer standards.'
    },
    {
      icon: Sparkles,
      title: 'LOD 400 BIM Simulation',
      desc: 'We construct every building virtually before pouring a single batch of concrete. Level of Development (LOD) 400 modeling ensures absolute structural, mechanical, and plumbing harmony.'
    },
    {
      icon: Milestone,
      title: 'Capital Solvency & Bonded Delivery',
      desc: 'Supported by robust capital liquidity, fully bonded for ultra-large infrastructure projects, and maintaining an unblemished record of on-time project deliveries.'
    }
  ];

  const standards = [
    { name: 'Fe 550D / Fe 600 Steel', desc: 'High seismic ductility reinforcement' },
    { name: 'M60/M80 Concrete', desc: 'Extreme load capacity polymer mix' },
    { name: 'BIM Clash Detection', desc: 'Zero electrical/structural overlay errors' },
    { name: 'Third Party Audits', desc: 'Rigorous independent lab concrete testing' }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-amber-700 text-xs font-mono font-bold uppercase tracking-[0.2em] block mb-4">
            // CORPORATE CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-950">
            A Legacy of Engineering Precision and Uncompromising Safety
          </h2>
          <p className="mt-6 text-neutral-600 text-lg sm:text-xl leading-relaxed">
            At Balaji Constructions, we do not build just for the present. We build landmarks designed to endure generations, employing high-strength composite materials, sustainable energy features, and advanced spatial systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Core Value Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {credentials.map((cred, idx) => {
              const IconComp = cred.icon;
              return (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-neutral-50 hover:bg-neutral-100 p-8 rounded-2xl border border-neutral-200/40 hover:border-amber-500/20 transition-all duration-300 shadow-sm"
                >
                  <div className="bg-neutral-950 text-amber-400 p-3.5 rounded-xl w-fit mb-6 shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-neutral-900 mb-3">
                    {cred.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {cred.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Visual Callouts & Technical Specifications */}
          <div className="lg:col-span-5 bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-neutral-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            
            <span className="text-amber-500 text-[10px] font-mono tracking-[0.2em] font-bold block mb-4 uppercase">
              STANDARDS IN EVERY POUR
            </span>
            <h3 className="text-2xl font-display font-bold mb-8 tracking-tight">
              Our Base Material Specifications
            </h3>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              We maintain a rigorous material procurement process, sourcing steel directly from certified tier-1 mills and operating our own batching plants to guarantee chemical purity and structural strength.
            </p>

            <div className="space-y-6">
              {standards.map((std, idx) => (
                <motion.div
                  key={std.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex items-start space-x-4 border-b border-neutral-800/80 pb-5 last:border-0 last:pb-0"
                >
                  <div className="bg-amber-600/10 text-amber-400 p-1.5 rounded-lg mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {std.name}
                    </h4>
                    <p className="text-neutral-400 text-xs mt-0.5">
                      {std.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Verification Stamp */}
            <div className="mt-10 bg-neutral-900 border border-neutral-800/80 rounded-xl p-5 flex items-center space-x-4">
              <div className="bg-amber-600/20 text-amber-500 p-2.5 rounded-full">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-400 block">
                  SAFETY AUDITED
                </span>
                <span className="text-[11px] text-neutral-400 block">
                  3.4 Million Safe-Man Hours Logged Without Incidents.
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Certifications Strip */}
        <div className="mt-20 pt-16 border-t border-neutral-100">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
              RECOGNIZED & ACCREDITED BY MAJOR REGULATORY BODIES
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {['ISO 9001:2015', 'LEED PLATINUM SYSTEM', 'IGBC CHAMPION', 'OHSAS 18001'].map((cert) => (
              <div key={cert} className="bg-neutral-50 border border-neutral-200/50 hover:border-neutral-300 py-5 px-4 rounded-xl text-neutral-800 font-display font-bold text-sm tracking-widest uppercase transition-colors duration-300">
                {cert}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
