import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Layers, DollarSign, ArrowUpRight, Scale } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function ProjectShowcase() {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'infrastructure'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  const filterTabs = [
    { value: 'all', label: 'All Works' },
    { value: 'residential', label: 'Luxury Residential' },
    { value: 'commercial', label: 'Commercial Landmarks' },
    { value: 'infrastructure', label: 'Strategic Infrastructure' }
  ] as const;

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-amber-700 text-xs font-mono font-bold uppercase tracking-[0.2em] block mb-4">
              // SIGNATURE PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-950">
              Landmark Developments Engineered to Endure
            </h2>
          </div>

          {/* Premium Filter Controls */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  filter === tab.value
                    ? 'bg-neutral-950 text-white shadow-md'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600 border border-neutral-200/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(proj)}
                className="group cursor-pointer block bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200/40 hover:border-amber-500/30 hover:shadow-xl transition-all duration-500"
              >
                {/* Visual Image container */}
                <div className="aspect-[16:10] overflow-hidden relative bg-neutral-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-5 left-5 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                    {proj.category}
                  </div>

                  {/* Cost Indicator on Hover */}
                  <div className="absolute bottom-5 right-5 bg-amber-500 text-neutral-950 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg shadow-md font-mono">
                    {proj.cost}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-8">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-xs font-mono text-neutral-500 flex items-center space-x-1.5 mb-2 uppercase">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{proj.location}</span>
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-neutral-950 group-hover:text-amber-800 transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                    <div className="bg-neutral-150 group-hover:bg-amber-600 text-neutral-900 group-hover:text-neutral-950 p-3 rounded-full transition-colors duration-300 shadow-sm border border-neutral-200/50">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="mt-4 text-neutral-600 text-sm leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-neutral-200/60 grid grid-cols-2 gap-4 text-xs font-mono text-neutral-500">
                    <div>
                      <span className="block text-neutral-400">PROJECT SCALE</span>
                      <span className="font-bold text-neutral-900 text-sm">{proj.area}</span>
                    </div>
                    <div>
                      <span className="block text-neutral-400">COMPLETION YEAR</span>
                      <span className="font-bold text-neutral-900 text-sm">{proj.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-neutral-950/85 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="relative bg-white text-neutral-900 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 z-10 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 bg-neutral-950/80 hover:bg-neutral-900 text-white p-2.5 rounded-full z-20 cursor-pointer shadow-md transition-transform active:scale-90"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Image & Highlights */}
                  <div className="lg:col-span-6 relative bg-neutral-950">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full min-h-[300px] lg:min-h-[500px] object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
                    
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                        CONTRACT VALUE
                      </span>
                      <span className="text-3xl font-display font-bold text-white block">
                        {selectedProject.cost}
                      </span>
                      <span className="text-xs text-neutral-400 font-sans block mt-1">
                        Fully Bonded & Insured Contracting
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Spec Sheet */}
                  <div className="lg:col-span-6 p-8 sm:p-12">
                    <span className="inline-block bg-amber-600/10 text-amber-800 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                      {selectedProject.category} portfolio
                    </span>
                    
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 tracking-tight mb-2">
                      {selectedProject.title}
                    </h3>
                    
                    <p className="text-xs font-mono text-neutral-500 flex items-center space-x-1.5 mb-6">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>{selectedProject.location}</span>
                    </p>

                    <div className="border-t border-b border-neutral-100 py-6 mb-6">
                      <span className="text-xs font-mono text-neutral-400 uppercase block mb-3">
                        PROJECT DESCRIPTION
                      </span>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Structural & BIM Highlights */}
                    <div className="mb-8">
                      <span className="text-xs font-mono text-neutral-400 uppercase block mb-4">
                        STRUCTURAL HIGHLIGHTS & SAFETY ENGINEERING
                      </span>
                      <div className="space-y-3">
                        {selectedProject.highlights.map((hl) => (
                          <div key={hl} className="flex items-start space-x-3 text-neutral-700 text-sm">
                            <span className="text-amber-600 font-bold font-mono text-xs mt-0.5">•</span>
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Metadata */}
                    <div className="grid grid-cols-3 gap-4 bg-neutral-50 rounded-2xl p-5 border border-neutral-200/40 text-center text-xs font-mono text-neutral-600">
                      <div>
                        <span className="block text-neutral-400 text-[10px]">CLIENT</span>
                        <span className="font-bold text-neutral-900 mt-1 block truncate">{selectedProject.client}</span>
                      </div>
                      <div>
                        <span className="block text-neutral-400 text-[10px]">SCALE</span>
                        <span className="font-bold text-neutral-900 mt-1 block truncate">{selectedProject.area}</span>
                      </div>
                      <div>
                        <span className="block text-neutral-400 text-[10px]">HANDOVER</span>
                        <span className="font-bold text-neutral-900 mt-1 block truncate">{selectedProject.year}</span>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
