import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, RefreshCw, CheckCircle } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="py-24 lg:py-32 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-amber-500 text-xs font-mono font-bold uppercase tracking-[0.2em] block mb-4">
              // RECONSTRUCTION & RETROFITTING
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
              Revitalizing Aging Infrastructure into Premium Architectural Spaces
            </h2>
          </div>
          <div className="lg:col-span-5 text-neutral-400 text-sm leading-relaxed">
            Our specialized restoration team retrofits historical buildings, seismic-strengthens core foundations, and transforms industrial structures into state-of-the-art office or residential lofts. Drag the slider to witness our structural magic.
          </div>
        </div>

        {/* Interactive Slider Container */}
        <div className="relative max-w-5xl mx-auto aspect-[16:9] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 select-none">
          
          {/* Before Image (Background) */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80"
              alt="Before Renovation - Dilapidated Industrial Structure"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Before Tag */}
            <div className="absolute bottom-6 left-6 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-neutral-400 text-xs font-mono font-bold uppercase px-4 py-2 rounded-lg z-10 shadow-md">
              BEFORE: Raw Warehouse Space (1982)
            </div>
          </div>

          {/* After Image (Absolute Clip layer) */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80"
              alt="After Renovation - Modern Timber and Concrete Loft"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* After Tag */}
            <div className="absolute bottom-6 right-6 bg-amber-500 text-neutral-950 text-xs font-mono font-bold uppercase px-4 py-2 rounded-lg z-10 shadow-md">
              AFTER: Restored Creative Suite (2025)
            </div>
          </div>

          {/* Transparent Input Slider Overlay */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />

          {/* Split Indicator Line & Circle Control */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-amber-500 pointer-events-none z-20 shadow-lg"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-amber-500 text-neutral-950 p-2 rounded-full shadow-2xl border-4 border-neutral-950">
              <Sliders className="w-5 h-5" />
            </div>
          </div>

          {/* Slider Prompt */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[10px] font-mono text-neutral-300 py-1.5 px-4 rounded-full flex items-center space-x-2 pointer-events-none z-10">
            <RefreshCw className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>DRAG CENTER HANDLE LEFT & RIGHT TO COMPARE</span>
          </div>

        </div>

        {/* Stats Strip under transformation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto border-t border-neutral-900 pt-10">
          <div className="flex items-start space-x-4">
            <div className="bg-amber-600/10 text-amber-500 p-2.5 rounded-xl">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Full Geotechnical Stabilization</h4>
              <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                Base consolidation and stone columns added to double foundation bearing capabilities.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-amber-600/10 text-amber-500 p-2.5 rounded-xl">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Carbon Fiber Reinforced Polymers</h4>
              <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                Existing structural columns wrapped in CFRP wraps to withstand intense seismic tremors.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-amber-600/10 text-amber-500 p-2.5 rounded-xl">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">HVAC Energy Recovery Systems</h4>
              <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                Equipped with smart thermal heat exchange networks to slash power demands by 34%.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
