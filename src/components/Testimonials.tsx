import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, Shield } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-50 text-neutral-900 border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-700 text-xs font-mono font-bold uppercase tracking-[0.2em] block mb-4">
            // INVESTOR & CLIENT VOICE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-950">
            Endorsed by Top Developers & Discerning Homeowners
          </h2>
          <p className="mt-4 text-neutral-600 text-lg sm:text-xl leading-relaxed">
            Our reputation is built on steel and concrete. Hear from the leaders who trust Balaji Constructions with their high-value portfolios and signature masterplans.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-neutral-200/60 shadow-md hover:shadow-xl hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between relative"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-8 right-8 text-neutral-100">
                <Quote className="w-12 h-12 stroke-1" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex space-x-1 mb-6 relative z-10">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-8 relative z-10 font-sans italic">
                  "{test.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 border-t border-neutral-100 pt-6 mt-4">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-neutral-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-neutral-950 text-sm">
                    {test.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-medium">
                    {test.role}, <span className="text-amber-700">{test.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Guarantee trust band */}
        <div className="mt-16 bg-neutral-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-900 shadow-xl">
          <div className="flex items-center space-x-5">
            <div className="bg-amber-600/15 text-amber-400 p-3 rounded-full hidden sm:block">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight">
                Are you looking to initiate a large-scale project?
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                We provide complete tender support, itemized civil bill-of-quantities (BoQ), and detailed site risk assessments.
              </p>
            </div>
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-amber-600 hover:bg-amber-500 text-neutral-950 font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            Get Structural Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
