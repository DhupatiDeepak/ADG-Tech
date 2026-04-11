import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  FileUp,
  ChevronRight,
  Play,
  Shield,
  Lock,
  Package,
  Layers,
  Scissors,
  Cpu,
  ArrowRight,
  X,
  CheckCircle,
  FileText,
  Plus,
  ExternalLink,
  Download,
  AlertCircle,
  Loader2,
  Table as TableIcon,
} from 'lucide-react';

/* ─── Technology options ──────────────────────────────────────────────────── */
const technologies = [
  {
    id: 'cnc-milling',
    label: 'CNC Milling',
    subtitle: 'Milling (3-axis, 5-axis), face milling',
    icon: Cpu,
    color: '#85B53D',
    acceptedFiles: '.step,.stp,.iges,.igs,.sldprt,.sat,.x_t,.x_b,.ipt,.prt,.catpart',
    template: {
      name: 'CNC_Milling_Part_Template.step',
      description: 'Standard CNC milling part template with datum planes, hole patterns, and surface callouts pre-configured.',
    },
  },
  {
    id: 'laser-cutting',
    label: 'Laser Cutting',
    subtitle: 'CO₂ laser, fiber laser, plasma cutting',
    icon: Scissors,
    color: '#06B6D4',
    acceptedFiles: '.step,.stp,.dxf,.dwg,.svg,.pdf',
    template: {
      name: 'Laser_Cut_Sheet_Template.dxf',
      description: 'Flat sheet template with standard kerf allowance, bend lines, and material callout fields.',
    },
  },
  {
    id: 'cnc-machining',
    label: 'CNC Machining',
    subtitle: 'Turning, boring, multi-axis machining',
    icon: Layers,
    color: '#F59E0B',
    acceptedFiles: '.step,.stp,.iges,.igs,.sldprt,.sat,.x_t,.ipt,.prt,.catpart',
    template: {
      name: 'CNC_Machining_Part_Template.step',
      description: 'Turned-part template with ID/OD references, thread callouts, and tolerance table included.',
    },
  },
];

/* ─── Accepted file types helper ─────────────────────────────────────────── */
const FILE_TYPES_LABEL = 'STEP, STP, IGES, IGS, SLDPRT, SAT, X_T, X_B, IPT, PRT, CATPART';

const API_URL = import.meta.env.VITE_API_URL || ""; // Dynamic Backend URL (empty string uses relative path in prod)

/* ═══════════════════════════════════════════════════════════════════════════ */
const ManufacturingPage = () => {
  const [selectedTech, setSelectedTech] = useState(technologies[0]);
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [templateDownloaded, setTemplateDownloaded] = useState(false);
  
  // BOM Extraction States
  const [extractionResult, setExtractionResult] = useState(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractError, setExtractError] = useState(null);

  const fileInputRef = useRef(null);

  /* ── File handling ──────────────────────────────────────────────────────── */
  const handleFiles = (files) => {
    const arr = Array.from(files).map((f) => ({
      name: f.name,
      size: (f.size / 1024).toFixed(1) + ' KB',
      id: Math.random().toString(36).slice(2),
      raw: f // store raw file for uploading
    }));
    setUploadedFiles((prev) => [...prev, ...arr]);
    setExtractionResult(null); // Reset result on new upload
    setExtractError(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (id) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
    if (uploadedFiles.length <= 1) setExtractionResult(null);
  };

  /* ── BOM Extraction Logic ──────────────────────────────────────────────── */
  const extractBOM = async () => {
    if (uploadedFiles.length === 0) return;
    
    setIsExtracting(true);
    setExtractError(null);
    
    // Use the most recent file for extraction
    const fileToProcess = uploadedFiles[uploadedFiles.length - 1].raw;
    const formData = new FormData();
    formData.append("file", fileToProcess);

    try {
      const response = await fetch(`${API_URL}/api/extract-bom`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to extract BOM data from server.");

      const data = await response.json();
      setExtractionResult(data);
    } catch (err) {
      console.error(err);
      setExtractError(err.message);
    } finally {
      setIsExtracting(false);
    }
  };

  /* ── Template download simulation ───────────────────────────────────────── */
  const handleTemplateDownload = () => {
    setTemplateDownloaded(true);
    setTimeout(() => {
      setTemplateDownloaded(false);
      setShowTemplateModal(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-20">
      {/* ─── Page header ──────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[var(--accent)] text-xs font-black uppercase tracking-[0.35em] mb-3 block">
            Industrial intelligence & Mechanical Mastery
          </span>
          <h1 className="text-5xl md:text-6xl font-[900] uppercase tracking-tight italic leading-none mb-3">
            Manufacturing{' '}
            <span className="gradient-text">Services</span>
          </h1>
          <p className="opacity-60 text-base max-w-xl">
            Upload your part or assembly files (STEP, STP, CATIA) to extract an instant Bill of Materials and get a production quote.
          </p>
        </motion.div>
      </div>

      {/* ─── Split panel ──────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ══ LEFT: Technology selector ════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[340px] flex-shrink-0"
          >
            <div
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden"
              style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
            >
              <div className="px-6 py-5 border-b border-[var(--border-color)]">
                <h2 className="text-base font-black uppercase tracking-widest opacity-80">
                  Select Technology
                </h2>
              </div>

              {/* Technology options */}
              <div className="p-3 flex flex-col gap-2">
                {technologies.map((tech) => {
                  const Icon = tech.icon;
                  const active = selectedTech.id === tech.id;
                  return (
                    <motion.button
                      key={tech.id}
                      onClick={() => setSelectedTech(tech)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full text-left flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 relative overflow-hidden"
                      style={{
                        border: active
                          ? `1.5px solid ${tech.color}`
                          : '1.5px solid transparent',
                        background: active
                          ? `${tech.color}12`
                          : 'var(--bg-primary)',
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                        style={{
                          background: `${tech.color}20`,
                          color: tech.color,
                          border: `1px solid ${tech.color}30`,
                          transform: active ? 'rotate(-4deg) scale(1.08)' : 'none',
                        }}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div
                          className="font-bold text-sm tracking-tight"
                          style={{ color: active ? tech.color : 'inherit' }}
                        >
                          {tech.label}
                        </div>
                        <div className="text-xs opacity-50 mt-0.5 truncate">
                          {tech.subtitle}
                        </div>
                      </div>

                      {active && (
                        <ChevronRight
                          size={16}
                          style={{ color: tech.color }}
                          className="opacity-70 flex-shrink-0"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Production orders card */}
              <div className="mx-3 mb-3 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center flex-shrink-0 border border-[var(--accent)]/20">
                  <Package size={18} className="text-[var(--accent)]" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm mb-1">Production Orders</div>
                  <p className="text-xs opacity-50 leading-relaxed">
                    Talk to our sales team about larger orders with complex requirements.{' '}
                    <button className="text-[var(--accent)] underline underline-offset-2 hover:opacity-80">
                      Learn more
                    </button>
                  </p>
                  <button className="mt-2 text-xs font-bold text-[var(--accent)] flex items-center gap-1 hover:gap-2 transition-all">
                    Get started <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ══ RIGHT: Upload & Results ══════════════════════════════════════ */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* ── Upload Area ── */}
            <motion.div
              key={selectedTech.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <div
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden"
                style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
              >
                <div className="px-6 py-5 border-b border-[var(--border-color)] flex items-center justify-between">
                  <h2 className="text-base font-black uppercase tracking-widest opacity-80">
                    Step 1: Upload CAD Files (Part/Assembly)
                  </h2>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: `${selectedTech.color}20`,
                      color: selectedTech.color,
                      border: `1px solid ${selectedTech.color}30`,
                    }}
                  >
                    {selectedTech.label}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-5">
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className="relative flex flex-col items-center justify-center py-14 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-300 group"
                    style={{
                      borderColor: dragOver ? selectedTech.color : 'var(--border-color)',
                      background: dragOver ? `${selectedTech.color}08` : 'var(--bg-primary)',
                    }}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept={selectedTech.acceptedFiles}
                      className="hidden"
                      onChange={(e) => handleFiles(e.target.files)}
                    />

                    <motion.div
                      animate={{ y: dragOver ? -6 : 0 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
                      style={{
                        background: `${selectedTech.color}15`,
                        border: `1px solid ${selectedTech.color}30`,
                        color: selectedTech.color,
                      }}
                    >
                      <Upload size={28} />
                    </motion.div>

                    <p className="text-sm font-semibold mb-1">
                      Drag and drop here or{' '}
                      <span className="font-bold underline underline-offset-2" style={{ color: selectedTech.color }}>
                        select
                      </span>
                    </p>
                    <p className="text-xs opacity-40 text-center max-w-xs">
                      Supports: {FILE_TYPES_LABEL}
                    </p>
                  </div>

                  {/* Uploaded files list & Extraction Trigger */}
                  <AnimatePresence>
                    {uploadedFiles.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="flex flex-col gap-3"
                      >
                        <div className="flex flex-col gap-2">
                          {uploadedFiles.map((f) => (
                            <div
                              key={f.id}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]"
                            >
                              <FileText size={18} style={{ color: selectedTech.color }} />
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold truncate">{f.name}</div>
                                <div className="text-xs opacity-40">{f.size}</div>
                              </div>
                              <button onClick={() => removeFile(f.id)} className="opacity-40 hover:opacity-100">
                                <X size={16} />
                              </button>
                            </div>
                          ))}
                        </div>

                        {!extractionResult && !isExtracting && (
                          <motion.button
                            onClick={extractBOM}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] text-black transition-all shadow-lg"
                            style={{ background: selectedTech.color }}
                          >
                            Step 2: Extract Bill of Materials →
                          </motion.button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Extraction Progress */}
                  {isExtracting && (
                    <div className="flex flex-col items-center justify-center py-10 gap-4">
                      <Loader2 size={40} className="animate-spin text-[var(--accent)]" />
                      <p className="text-sm font-bold uppercase tracking-widest opacity-60">Extracting Part Data & Cost Analysis...</p>
                    </div>
                  )}

                  {/* Errors */}
                  {extractError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-3">
                      <AlertCircle size={18} /> {extractError}
                    </div>
                  )}

                  {/* Success Direct Save Notice */}
                  {extractionResult && (
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm flex items-center gap-3">
                      <CheckCircle size={18} /> BOM reports have been saved directly to your <strong>Downloads</strong> folder.
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* ── BOM Results Table ── */}
            <AnimatePresence>
              {extractionResult && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-4"
                >
                  <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden shadow-2xl">
                    <div className="px-6 py-5 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-primary)]/50">
                      <div className="flex items-center gap-3">
                        <TableIcon size={20} className="text-[var(--accent)]" />
                        <h2 className="text-base font-black uppercase tracking-widest opacity-80">
                          Bill of Materials (BOM)
                        </h2>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[var(--bg-primary)]/80 text-[10px] uppercase tracking-[0.2em] font-black opacity-40">
                            <th className="px-6 py-4">#</th>
                            <th className="px-6 py-4">Part Number / Name</th>
                            <th className="px-6 py-4">Qty</th>
                            <th className="px-6 py-4">Material</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4 text-right">Cost (Est.)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--border-color)]">
                          {extractionResult.rows.map((row, idx) => (
                            <tr 
                              key={idx} 
                              className={`group hover:bg-[var(--accent)]/5 transition-colors ${row.PartNumber === "TOTAL ESTIMATED COST" ? "bg-[var(--accent)]/10 font-black" : ""}`}
                            >
                              <td className="px-6 py-4 text-xs font-mono opacity-40">{row.Item}</td>
                              <td className="px-6 py-4 text-sm font-bold group-hover:text-[var(--accent)] transition-colors">{row.PartNumber}</td>
                              <td className="px-6 py-4 text-xs font-bold">{row.Qty}</td>
                              <td className="px-6 py-4 text-xs opacity-60 italic">{row.Material}</td>
                              <td className="px-6 py-4">
                                <span className="px-2 py-1 rounded-md bg-[var(--bg-primary)] border border-[var(--border-color)] text-[10px] font-black uppercase">
                                  {row.Category}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right text-sm font-black whitespace-nowrap">
                                {typeof row.Cost === 'number' ? `₹ ${row.Cost.toLocaleString()}` : row.Cost}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Download Bar */}
                    <div className="p-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/30 flex flex-wrap gap-3 items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-widest opacity-40">Download as:</span>
                        <div className="flex gap-2">
                          {extractionResult.files.csv && (
                            <a 
                              href={`${API_URL}${extractionResult.files.csv}`} 
                              download 
                              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[10px] font-black uppercase hover:border-[var(--accent)] transition-all"
                            >
                              <Download size={12} /> CSV
                            </a>
                          )}
                          {extractionResult.files.xlsx && (
                            <a 
                              href={`${API_URL}${extractionResult.files.xlsx}`} 
                              download 
                              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[10px] font-black uppercase hover:border-[var(--accent)] transition-all"
                            >
                              <Download size={12} /> Excel
                            </a>
                          )}
                          {extractionResult.files.pdf && (
                            <a 
                              href={`${API_URL}${extractionResult.files.pdf}`} 
                              download 
                              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[10px] font-black uppercase hover:border-[var(--accent)] transition-all"
                            >
                              <Download size={12} /> PDF
                            </a>
                          )}
                        </div>
                      </div>
                      <button className="px-8 py-3 bg-[var(--accent)] text-black font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-105 transition-all shadow-lg active:scale-95">
                        Proceed to Order →
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ═══ Template Modal ════════════════════════════════════════════════ */}
      <AnimatePresence>
        {showTemplateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
            onClick={() => setShowTemplateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 relative"
              style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}
            >
              <button
                onClick={() => setShowTemplateModal(false)}
                className="absolute top-4 right-4 opacity-40 hover:opacity-100 transition-opacity"
              >
                <X size={20} />
              </button>

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `${selectedTech.color}15`,
                  color: selectedTech.color,
                  border: `1px solid ${selectedTech.color}30`,
                }}
              >
                <FileUp size={28} />
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight mb-2">
                {selectedTech.label} Template
              </h3>
              <p className="text-sm opacity-60 mb-2">
                <span className="font-mono text-xs">{selectedTech.template.name}</span>
              </p>
              <p className="text-sm opacity-60 mb-8 leading-relaxed">
                {selectedTech.template.description}
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  'Download the template file below',
                  'Open it in your CAD software',
                  'Model your part using the pre-set datum & callouts',
                  'Upload the completed file to get your instant quote',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
                      style={{ background: `${selectedTech.color}20`, color: selectedTech.color }}
                    >
                      {i + 1}
                    </span>
                    <span className="opacity-70">{step}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleTemplateDownload}
                className="w-full py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] text-black flex items-center justify-center gap-2 transition-all"
                style={{ background: selectedTech.color }}
              >
                {templateDownloaded ? (
                  <>
                    <CheckCircle size={16} /> Template Downloaded!
                  </>
                ) : (
                  <>
                    <FileUp size={16} /> Download Template
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManufacturingPage;
