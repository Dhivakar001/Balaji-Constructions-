import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const stats = [
    { value: '40+', label: 'Years of Civil Heritage', detail: 'Since 1986' },
    { value: '150+', label: 'Completed Landmarks', detail: 'Zero defects at handover' },
    { value: '₹2,500Cr+', label: 'Asset Valuation Built', detail: 'A+ Rated Credit Tier' },
    { value: '100%', label: 'BIM Compliance', detail: 'LOD 400 modeling standards' }
  ];

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between bg-neutral-950 text-white overflow-hidden">
      {/* Background Hero Image with Layered Shadows */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90"
          alt="Balaji Constructions Skyscraper Landmark"
          className="w-full h-full object-cover object-center opacity-45 scale-105 animate-pulse"
          style={{ animationDuration: '8s' }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/35" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 flex-grow flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-300">
              PREMIUM INFRASTRUCTURE & LUXURY RESIDENTIAL
            </span>
          </motion.div>

          {/* Master Headings */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.08] mb-6"
          >
            Engineering Legacies. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Constructing Landmarks.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-10 font-sans"
          >
            Balaji Constructions delivers uncompromising engineering, meticulous BIM pre-planning, and award-winning architecture. We shape high-value corporate towers, heavy infrastructure, and luxury estates.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="bg-amber-600 hover:bg-amber-500 text-neutral-950 font-bold uppercase tracking-wider text-xs px-8 py-4.5 rounded-full shadow-lg hover:shadow-amber-600/20 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Initiate Consultation</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" />
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-white font-semibold uppercase tracking-wider text-xs px-8 py-4.5 rounded-full active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              Explore Project Folio
            </button>
          </motion.div>
        </div>
      </div>

      {/* Premium Statistics Banner Overlay */}
      <div className="relative z-10 bg-neutral-950/80 backdrop-blur-md border-t border-neutral-900 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group border-l border-neutral-800 pl-6"
              >
                <div className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-neutral-400 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[10px] font-mono text-neutral-600 mt-0.5">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
