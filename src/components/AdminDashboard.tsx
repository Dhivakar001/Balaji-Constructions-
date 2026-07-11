import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Inbox, TrendingUp, Users, MapPin, Calendar, 
  Trash2, Edit, Save, CheckCircle2, Sliders, 
  Sparkles, Layers, Landmark, ArrowRight, ShieldAlert 
} from 'lucide-react';
import { ProjectInquiry } from '../types';

interface AdminDashboardProps {
  inquiries: ProjectInquiry[];
  onUpdateStatus: (id: string, status: ProjectInquiry['status']) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onDeleteInquiry: (id: string) => void;
}

export default function AdminDashboard({
  inquiries,
  onUpdateStatus,
  onUpdateNotes,
  onDeleteInquiry
}: AdminDashboardProps) {
  const [selectedInquiryId, setSelectedInquiryId] = useState<string | null>(
    inquiries.length > 0 ? inquiries[0].id : null
  );
  const [editingNotes, setEditingNotes] = useState('');
  const [tempStatus, setTempStatus] = useState<ProjectInquiry['status']>('pending');
  const [mobileActiveView, setMobileActiveView] = useState<'list' | 'detail'>('list');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const selectedInquiry = inquiries.find((iq) => iq.id === selectedInquiryId) || inquiries[0];

  React.useEffect(() => {
    if (selectedInquiry) {
      setEditingNotes(selectedInquiry.internalNotes || '');
      setTempStatus(selectedInquiry.status);
      setShowDeleteConfirm(false); // Reset delete confirm on transition
    }
  }, [selectedInquiryId, selectedInquiry]);

  // Aggregate stats
  const totalCount = inquiries.length;
  
  // Estimate aggregate potential valuation
  const totalValuation = inquiries.reduce((sum, item) => {
    let value = 10; // Default 10Cr
    if (item.estimatedBudget.includes('50Cr - ₹150Cr')) value = 100;
    else if (item.estimatedBudget.includes('15Cr - ₹50Cr')) value = 32;
    else if (item.estimatedBudget.includes('150Cr+')) value = 150;
    return sum + value;
  }, 0);

  const pendingCount = inquiries.filter((iq) => iq.status === 'pending').length;

  const handleSaveNotesAndStatus = () => {
    if (!selectedInquiry) return;
    onUpdateNotes(selectedInquiry.id, editingNotes);
    onUpdateStatus(selectedInquiry.id, tempStatus);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  return (
    <section className="py-12 bg-neutral-900 text-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header bar */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-neutral-850 pb-8 mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>BALAJI BACK-OFFICE ESTIMATION HUB</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
              Inquiry & Tender Portal
            </h2>
          </div>
          <div className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-4 py-2 rounded-xl text-xs font-mono flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4" />
            <span>SECURE SANDBOX ACCESS — DEMO DATA PERSISTENCE</span>
          </div>
        </div>

        {/* Analytics Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          
          <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-850">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">ACTIVE PROPOSALS</span>
              <Inbox className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-3xl font-display font-bold text-white">{totalCount}</div>
            <p className="text-neutral-500 text-[11px] mt-1 uppercase font-semibold">
              {pendingCount} requiring immediate review
            </p>
          </div>

          <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-850">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">EST. POTENTIAL VOLUME</span>
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-3xl font-display font-bold text-emerald-400">₹{totalValuation} Crores</div>
            <p className="text-neutral-500 text-[11px] mt-1 uppercase font-semibold">
              Calculated on tier ranges
            </p>
          </div>

          <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-850">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">CREDIT TIER</span>
              <Landmark className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-3xl font-display font-bold text-white">A+ Rated</div>
            <p className="text-neutral-500 text-[11px] mt-1 uppercase font-semibold">
              Ready for bonded guarantees
            </p>
          </div>

        </div>

        {/* Dashboard split screen */}
        {inquiries.length === 0 ? (
          <div className="bg-neutral-950 rounded-2xl border border-neutral-850 p-16 text-center">
            <Inbox className="w-16 h-16 text-neutral-700 mx-auto mb-6 stroke-1" />
            <h3 className="text-xl font-display font-bold text-white">No Inquiries Found</h3>
            <p className="text-neutral-500 text-sm max-w-md mx-auto mt-2">
              Use the "Estimate Project" or "Initiate Consultation" form on the public site to submit test requests. They will immediately show up here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left sidebar: Inquiries list */}
            <div className={`${mobileActiveView === 'list' ? 'block' : 'hidden lg:block'} lg:col-span-5 bg-neutral-950 border border-neutral-850 rounded-2xl overflow-hidden`}>
              <div className="p-4 border-b border-neutral-850 bg-neutral-950">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block font-bold">
                  PROPOSALS INQUEUE ({inquiries.length})
                </span>
              </div>

              <div className="divide-y divide-neutral-850/60 max-h-[500px] overflow-y-auto">
                {inquiries.map((iq) => {
                  const isSelected = selectedInquiryId === iq.id;
                  
                  // Status badge style
                  const statusColors = {
                    pending: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
                    reviewed: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
                    contacted: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
                    approved: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  };

                  return (
                    <button
                      key={iq.id}
                      onClick={() => {
                        setSelectedInquiryId(iq.id);
                        setMobileActiveView('detail');
                      }}
                      className={`w-full text-left p-5 transition-colors block cursor-pointer relative ${
                        isSelected ? 'bg-neutral-900 border-l-4 border-amber-500' : 'hover:bg-neutral-900/40'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <span className="font-display font-bold text-sm block truncate text-white">
                          {iq.fullName}
                        </span>
                        <span className={`text-[10px] font-mono border px-2 py-0.5 rounded-full uppercase ${statusColors[iq.status] || ''}`}>
                          {iq.status}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center text-xs text-neutral-400 font-mono">
                        <span className="capitalize">{iq.projectType} Sector</span>
                        <span>{iq.estimatedBudget}</span>
                      </div>

                      <div className="text-[10px] text-neutral-600 font-mono mt-2 block truncate">
                        Loc: {iq.location}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right container: Detailed sheet */}
            <div className={`${mobileActiveView === 'detail' ? 'block' : 'hidden lg:block'} lg:col-span-7 bg-neutral-950 border border-neutral-850 rounded-2xl p-8 shadow-xl`}>
              <AnimatePresence mode="wait">
                {selectedInquiry ? (
                  <motion.div
                    key={selectedInquiry.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    
                    {/* Mobile Back Button */}
                    <button
                      onClick={() => setMobileActiveView('list')}
                      className="lg:hidden mb-6 flex items-center space-x-2 text-xs font-mono text-amber-500 hover:text-amber-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      <span>Back to Inquiries List</span>
                    </button>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-neutral-850 pb-6 mb-6 gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block mb-1">
                          PROPOSAL DETAILS & SITE BRIEF
                        </span>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                          {selectedInquiry.fullName}
                        </h3>
                        <p className="text-xs text-neutral-400 font-mono mt-1">
                          Email: {selectedInquiry.email} | Tel: {selectedInquiry.phone}
                        </p>
                      </div>

                      {showDeleteConfirm ? (
                        <div className="flex items-center space-x-2 bg-red-950/40 p-2 rounded-xl border border-red-500/20">
                          <span className="text-[10px] font-mono text-red-400 font-bold px-1 uppercase">Delete?</span>
                          <button
                            onClick={() => {
                              onDeleteInquiry(selectedInquiry.id);
                              setSelectedInquiryId(inquiries.length > 1 ? inquiries[0].id : null);
                              setShowDeleteConfirm(false);
                              setMobileActiveView('list');
                            }}
                            className="bg-red-600 hover:bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded transition-colors cursor-pointer"
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => setShowDeleteConfirm(false)}
                            className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[10px] uppercase font-bold px-2 py-1 rounded transition-colors cursor-pointer"
                          >
                            No
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setShowDeleteConfirm(true)}
                          className="bg-red-500/10 hover:bg-red-500/20 text-red-400 p-2.5 rounded-lg border border-red-500/20 cursor-pointer self-start transition-colors"
                          title="Delete Inquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Metadata specs */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-xs font-mono bg-neutral-900 border border-neutral-850 p-4 rounded-xl">
                      <div>
                        <span className="block text-neutral-500 text-[10px]">SECTOR</span>
                        <span className="font-bold text-white uppercase block mt-1">{selectedInquiry.projectType}</span>
                      </div>
                      <div>
                        <span className="block text-neutral-500 text-[10px]">BUDGET</span>
                        <span className="font-bold text-amber-400 block mt-1">{selectedInquiry.estimatedBudget}</span>
                      </div>
                      <div>
                        <span className="block text-neutral-500 text-[10px]">TIMELINE</span>
                        <span className="font-bold text-white block mt-1">{selectedInquiry.timeline}</span>
                      </div>
                      <div>
                        <span className="block text-neutral-500 text-[10px]">SUBMITTED</span>
                        <span className="font-bold text-neutral-400 block mt-1">{selectedInquiry.submittedAt.split('T')[0]}</span>
                      </div>
                    </div>

                    {/* Brief text */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-2">
                        INQUIRY SUMMARY & REQS
                      </span>
                      <div className="bg-neutral-900/60 rounded-xl p-4 border border-neutral-850 text-neutral-300 text-sm leading-relaxed whitespace-pre-line font-sans">
                        {selectedInquiry.message || 'No specific requirements or brief provided.'}
                      </div>
                    </div>

                    <div className="border-t border-neutral-850 pt-6">
                      <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-4">
                        ESTIMATING INTERNAL AUDIT (ADMIN ONLY)
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        {/* Status dropdown */}
                        <div>
                          <label className="block text-[11px] font-mono text-neutral-400 mb-2 uppercase">
                            Engagement Status
                          </label>
                          <select
                            value={tempStatus}
                            onChange={(e) => setTempStatus(e.target.value as any)}
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white text-xs focus:border-amber-500 focus:outline-none cursor-pointer"
                          >
                            <option value="pending">Pending Review</option>
                            <option value="reviewed">Under Technical Review</option>
                            <option value="contacted">Prospect Contacted</option>
                            <option value="approved">Approved & Bond Issued</option>
                          </select>
                        </div>

                        {/* Location */}
                        <div>
                          <label className="block text-[11px] font-mono text-neutral-400 mb-2 uppercase">
                            Site Parcel Location
                          </label>
                          <div className="bg-neutral-900 text-neutral-300 text-xs px-3 py-2.5 rounded-lg border border-neutral-850 block truncate">
                            {selectedInquiry.location}
                          </div>
                        </div>
                      </div>

                      {/* Internal Notes */}
                      <div className="mb-6">
                        <label className="block text-[11px] font-mono text-neutral-400 mb-2 uppercase">
                          Estimator Internal Notes / BoQ Assumptions
                        </label>
                        <textarea
                          rows={3}
                          value={editingNotes}
                          onChange={(e) => setEditingNotes(e.target.value)}
                          placeholder="e.g., Concrete raft foundation estimated. Needs soil bore testing. Contacted Rajesh Singhania's office on Tuesday..."
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-xs focus:border-amber-500 focus:outline-none resize-none font-sans"
                        />
                      </div>

                      {/* Save changes with inline success message */}
                      <div className="flex flex-wrap items-center gap-4">
                        <button
                          onClick={handleSaveNotesAndStatus}
                          className="bg-amber-600 hover:bg-amber-500 text-neutral-950 font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-lg shadow-md transition-all cursor-pointer flex items-center space-x-2"
                        >
                          <Save className="w-4 h-4" />
                          <span>Update Audit File</span>
                        </button>

                        <AnimatePresence>
                          {saveSuccess && (
                            <motion.span
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 8 }}
                              className="text-emerald-400 text-xs font-mono flex items-center space-x-1.5"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Audit database sync complete</span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                    </div>

                  </motion.div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-neutral-500 text-sm">Select an inquiry from the sidebar to view detailed specs.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
