import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, CheckSquare, Layers, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { TIMELINE_STEPS } from '../data';

export default function ConstructionProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    if (activeStep < TIMELINE_STEPS.length - 1) setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const currentStepData = TIMELINE_STEPS[activeStep];

  return (
    <section id="process" className="py-24 lg:py-32 bg-white text-neutral-900 border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <span className="text-amber-700 text-xs font-mono font-bold uppercase tracking-[0.2em] block mb-4">
            // OUR ENGINEERING WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-950">
            A Rigorous, Phase-Gate Construction Lifecycle
          </h2>
          <p className="mt-4 text-neutral-600 text-lg sm:text-xl">
            We follow a strictly monitored phase-gate process, merging virtual design simulation with military-grade site management to ensure safety, budget control, and aesthetic fidelity.
          </p>
        </div>

        {/* Horizontal Navigation Stepper */}
        <div className="mb-12 relative">
          {/* Progress Connector Line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-neutral-100 -translate-y-1/2 z-0 hidden md:block" />
          <div 
            className="absolute top-1/2 left-4 h-0.5 bg-amber-500 -translate-y-1/2 z-0 transition-all duration-500 hidden md:block" 
            style={{ width: `${(activeStep / (TIMELINE_STEPS.length - 1)) * 95}%` }}
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = idx < activeStep;
              return (
                <button
                  key={step.phase}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-neutral-950 border-neutral-900 text-white shadow-lg'
                      : isPassed
                      ? 'bg-amber-50/50 border-amber-500/20 text-neutral-800'
                      : 'bg-neutral-50 border-neutral-200/60 text-neutral-500 hover:border-neutral-300 hover:bg-neutral-100/50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-amber-400' : 'text-neutral-400'}`}>
                      {step.phase}
                    </span>
                    {isPassed && (
                      <span className="text-xs text-amber-600 font-bold font-mono">✓</span>
                    )}
                  </div>
                  <span className="text-xs sm:text-sm font-display font-bold block truncate">
                    {step.title.split(' & ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Active Step Info Sheet */}
        <div className="bg-neutral-50 rounded-3xl border border-neutral-200/50 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[450px]">
          
          {/* Left Column - Core Data */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Duration Badge */}
                <div className="inline-flex items-center space-x-2 bg-amber-600/10 text-amber-800 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase mb-6">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Est. Duration: {currentStepData.duration}</span>
                </div>

                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                  {currentStepData.phase} — ACTIVE GATEWAY
                </span>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 tracking-tight mb-4">
                  {currentStepData.title}
                </h3>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
                  {currentStepData.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Stepper Controls */}
            <div className="flex space-x-4 border-t border-neutral-200/60 pt-6 mt-4">
              <button
                onClick={prevStep}
                disabled={activeStep === 0}
                className={`p-3 rounded-full border transition-all cursor-pointer ${
                  activeStep === 0
                    ? 'border-neutral-200 text-neutral-300 bg-neutral-150 cursor-not-allowed'
                    : 'border-neutral-300 text-neutral-800 hover:bg-neutral-100 active:scale-90'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextStep}
                disabled={activeStep === TIMELINE_STEPS.length - 1}
                className={`p-3 rounded-full border transition-all cursor-pointer ${
                  activeStep === TIMELINE_STEPS.length - 1
                    ? 'border-neutral-200 text-neutral-300 bg-neutral-150 cursor-not-allowed'
                    : 'border-neutral-900 text-white bg-neutral-950 hover:bg-amber-600 active:scale-90'
                }`}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex-grow flex items-center justify-end text-xs font-mono text-neutral-400">
                <span>Phase {activeStep + 1} of {TIMELINE_STEPS.length}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Checklist Tasks */}
          <div className="lg:col-span-5 bg-neutral-950 text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-neutral-400 text-xs font-mono uppercase block mb-6 tracking-widest">
                // COMPLIANCE CHECKLIST
              </span>

              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {currentStepData.tasks.map((task) => (
                      <div key={task} className="flex items-start space-x-3.5 bg-neutral-900/60 p-4 rounded-xl border border-neutral-800/60">
                        <div className="text-amber-400 mt-0.5">
                          <CheckSquare className="w-4 h-4" />
                        </div>
                        <span className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                          {task}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="relative z-10 bg-neutral-900/50 border border-neutral-850 rounded-xl p-4 mt-8 flex items-center space-x-3">
              <div className="bg-amber-500/15 text-amber-400 p-2 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] sm:text-xs text-neutral-400 leading-snug">
                Safety gates checked by designated Senior Site Engineer & Structural Auditor prior to next phase sign-off.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
