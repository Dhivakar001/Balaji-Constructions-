import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Building2, ShieldCheck, CheckCircle2, Send, ChevronRight } from 'lucide-react';
import { ProjectInquiry } from '../types';

interface QuoteRequestProps {
  onAddInquiry: (inquiry: Omit<ProjectInquiry, 'id' | 'submittedAt' | 'status'>) => void;
}

export default function QuoteRequest({ onAddInquiry }: QuoteRequestProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'residential' as 'residential' | 'commercial' | 'infrastructure' | 'renovation',
    estimatedBudget: '₹5Cr - ₹15Cr',
    timeline: '6 to 12 Months',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const budgetOptions = [
    '₹5Cr - ₹15Cr',
    '₹15Cr - ₹50Cr',
    '₹50Cr - ₹150Cr',
    '₹150Cr+'
  ];

  const timelineOptions = [
    'Immediate (Within 3 Months)',
    '6 to 12 Months',
    '12 to 24 Months',
    'Planning stage only'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    
    // Core Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.location) {
      setErrorMsg('Please complete all required fields (*).');
      return;
    }

    onAddInquiry(formData);
    setSubmitted(true);

    // Reset Form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      projectType: 'residential',
      estimatedBudget: '₹5Cr - ₹15Cr',
      timeline: '6 to 12 Months',
      location: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white text-neutral-900 border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Corporate Office & Contact Details */}
          <div className="lg:col-span-5">
            <span className="text-amber-700 text-xs font-mono font-bold uppercase tracking-[0.2em] block mb-4">
              // PROJECT ESTIMATOR & HEURISTICS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-950 mb-8">
              Initiate a Structural Consultation
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-10">
              Submit your project constraints and spatial requirements. Our Estimations Committee and Senior Civil Engineers will audit your details and issue an initial constructability report and high-level Bill of Quantities (BoQ) within 72 hours.
            </p>

            {/* Offices List */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-3">
                  HEAD OFFICE (MUMBAI)
                </span>
                <div className="flex items-start space-x-3.5 text-neutral-700 text-sm">
                  <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">Balaji Corporate Towers</h4>
                    <p className="text-neutral-500 mt-1">
                      7th Floor, Nariman Point, Marine Drive, Mumbai, MH — 400021
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-3">
                  SOUTHERN REGIONAL OFFICE (BENGALURU)
                </span>
                <div className="flex items-start space-x-3.5 text-neutral-700 text-sm">
                  <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900">Balaji Engineering Hub</h4>
                    <p className="text-neutral-500 mt-1">
                      Level 3, Prestige Technology Center, Whitefield, Bengaluru, KA — 560066
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="border-t border-neutral-100 pt-8 space-y-4">
                <div className="flex items-center space-x-3 text-neutral-700 text-sm">
                  <Phone className="w-4.5 h-4.5 text-amber-600 flex-shrink-0" />
                  <span>+91 22 4899 9000 (Tender Hotline)</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-700 text-sm">
                  <Mail className="w-4.5 h-4.5 text-amber-600 flex-shrink-0" />
                  <span>rfp@balajiconstructions.co.in</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Custom Lead capture form / success screen */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200/60 rounded-3xl p-8 sm:p-12 shadow-xl relative">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Singhania"
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rajesh@singhaniagroup.com"
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98450 12345"
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Singhania Realty Pvt Ltd"
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Project Type */}
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                        Civil Sector
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 text-sm focus:border-amber-500 focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="renovation">Renovation</option>
                      </select>
                    </div>

                    {/* Estimated Budget */}
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                        Target Capital
                      </label>
                      <select
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 text-sm focus:border-amber-500 focus:outline-none transition-colors cursor-pointer"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Timeline */}
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                        Execution Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 text-sm focus:border-amber-500 focus:outline-none transition-colors cursor-pointer"
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Site Location */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                      Site Physical Location / Parcel Details *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Plot 42-C, Sector 5, Kharghar, Navi Mumbai"
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-500 uppercase mb-2">
                      Project Scope Brief & Special Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify requirements such as column-free spans, LEED rating aspirations, pre-tensioned slabs, high water-table piling details..."
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 text-sm focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping"></span>
                        <span>{errorMsg}</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => setErrorMsg(null)} 
                        className="text-red-500 hover:text-red-800 font-bold px-2 py-1"
                      >
                        ✕
                      </button>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-neutral-950 hover:bg-amber-600 text-white hover:text-neutral-950 font-bold uppercase tracking-wider text-xs py-4.5 rounded-xl shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>Transmit Tender & RFP</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-neutral-400 text-center leading-relaxed">
                    By submitting, you agree to secure transmission of details. Information is protected under NDAs and shared exclusively with our accredited estimations committee.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 px-4"
                >
                  <div className="bg-emerald-50 text-emerald-600 p-5 rounded-full w-fit mx-auto mb-6 shadow-md border border-emerald-100">
                    <CheckCircle2 className="w-12 h-12 stroke-[1.5]" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-neutral-950 tracking-tight">
                    RFP Received Successfully
                  </h3>
                  
                  <p className="text-neutral-600 text-sm mt-3 leading-relaxed max-w-md mx-auto">
                    Your construction consultation proposal has been processed. Our estimating engineers have generated a reference ticket and opened a file in our secure database.
                  </p>

                  {/* Admin area tip */}
                  <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-4 mt-8 max-w-sm mx-auto text-left flex items-start space-x-3 text-xs text-neutral-700">
                    <div className="bg-amber-100 text-amber-800 p-1 rounded-md mt-0.5 font-bold">💡</div>
                    <div>
                      <span className="font-bold block">Developer Tip:</span>
                      Click <strong className="text-amber-800">Inquiry Hub (Admin)</strong> in the top black header banner to view and manage this inquiry in real-time!
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full transition-all cursor-pointer"
                  >
                    Submit Another Tender
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
