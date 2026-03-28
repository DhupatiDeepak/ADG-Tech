import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MapPin, Clock, Briefcase, Code, Settings, X, Send, ChevronRight, Zap, Users, Globe } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "MERN Stack Developer",
    department: "Software & Tech",
    type: "Work From Home",
    hours: "Flexible Hours",
    color: "#06B6D4",
    badge: "HIRING NOW",
    summary: "We're looking for a passionate MERN Stack Developer to help build cutting-edge web platforms for engineering and AI-driven products.",
    skills: [
      { label: "Required", items: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git & GitHub"] },
      { label: "Preferred", items: ["Basic CAD Software Knowledge", "AI/ML Integration", "TypeScript", "Docker basics"] }
    ],
    perks: ["Work From Home", "Flexible Hours", "Startup Equity Opportunity", "Build Real AI Products"]
  }
];

const ApplyModal = ({ job, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', experience: '', portfolio: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-[var(--border-color)] bg-[var(--bg-card)] p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-8">
              <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block" style={{ background: `${job.color}15`, color: job.color }}>
                Apply Now
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tighter">{job.title}</h2>
              <p className="text-sm opacity-50 mt-1 font-medium">{job.department} · {job.type} · {job.hours}</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Full Name *</label>
                  <input required name="name" value={form.name} onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 rounded-xl text-sm font-medium focus:border-[var(--accent)] outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Email Address *</label>
                  <input required name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 rounded-xl text-sm font-medium focus:border-[var(--accent)] outline-none transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 rounded-xl text-sm font-medium focus:border-[var(--accent)] outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Years of Experience *</label>
                  <select required name="experience" value={form.experience} onChange={handleChange}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 rounded-xl text-sm font-medium focus:border-[var(--accent)] outline-none transition-all appearance-none cursor-pointer">
                    <option value="">Select experience</option>
                    <option value="fresher">Fresher / 0 Years</option>
                    <option value="0-1">0–1 Years</option>
                    <option value="1-2">1–2 Years</option>
                    <option value="2-4">2–4 Years</option>
                    <option value="4+">4+ Years</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Portfolio / GitHub / LinkedIn URL</label>
                <input name="portfolio" value={form.portfolio} onChange={handleChange}
                  placeholder="https://github.com/..."
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 rounded-xl text-sm font-medium focus:border-[var(--accent)] outline-none transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Why do you want to join AI Bunt? *</label>
                <textarea required name="message" value={form.message} onChange={handleChange}
                  rows={4} placeholder="Tell us why you'd be a great fit..."
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 rounded-xl text-sm font-medium focus:border-[var(--accent)] outline-none transition-all resize-none" />
              </div>
              <button type="submit"
                className="w-full py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
                style={{ background: job.color, color: '#0A0F06' }}>
                <Send size={16} /> Submit Application
              </button>
            </form>
          </>
        ) : (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: `${job.color}20`, color: job.color }}>
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-3">Application Submitted!</h2>
            <p className="opacity-60 font-medium mb-8">Thanks for applying! Our team will review your application and reach out within 2–3 business days.</p>
            <button onClick={onClose} className="px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest border border-[var(--border-color)] hover:border-[var(--accent)] transition-all">
              Close
            </button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const JobCard = ({ job }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[2.5rem] border border-[var(--border-color)] bg-[var(--bg-card)] p-8 md:p-10 hover:border-[var(--accent)]/30 transition-all duration-500 group relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background: job.color }} />

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Left info */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[9px] font-[1000] uppercase tracking-widest px-3 py-1.5 rounded-full animate-pulse" style={{ background: `${job.color}15`, color: job.color }}>
                ● {job.badge}
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                <Globe size={10} /> {job.type}
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                <Clock size={10} /> {job.hours}
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-[1000] uppercase tracking-tighter mb-4 leading-none">{job.title}</h3>
            <p className="text-sm opacity-60 font-medium leading-relaxed mb-6 max-w-xl">{job.summary}</p>

            {/* Skills */}
            <div className="flex flex-col gap-4">
              {job.skills.map((group, gi) => (
                <div key={gi}>
                  <p className="text-[9px] font-black uppercase tracking-widest mb-2 opacity-40">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, si) => (
                      <span key={si} className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-lg"
                        style={group.label === 'Required' ? { background: `${job.color}12`, color: job.color, border: `1px solid ${job.color}20` } : { background: 'white/5', border: '1px solid rgba(255,255,255,0.08)', opacity: 0.7 }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col gap-4 lg:w-[300px] flex-shrink-0 justify-center">
            <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/40">
              <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-4">What You Get</p>
              <div className="flex flex-col gap-3">
                {job.perks.map((perk, pi) => (
                  <div key={pi} className="flex items-center gap-3">
                    <CheckCircle2 size={13} style={{ color: job.color }} className="flex-shrink-0" />
                    <span className="text-xs font-bold leading-tight">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`mailto:info@aibunt.com?subject=Application for ${encodeURIComponent(job.title)}&body=Hi AI Bunt Team,%0A%0AI am interested in the ${job.title} role. Please find my resume attached.%0A%0AName:%0AExperience:%0APortfolio/GitHub:%0A%0ARegards`}
              className="w-full py-4 rounded-2xl font-[1000] uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl"
              style={{ background: job.color, color: '#0A0F06' }}
            >
              Apply Now — Email Us <ChevronRight size={16} />
            </a>
            <p className="text-[9px] opacity-40 text-center font-bold uppercase tracking-widest leading-relaxed">
              Mail your resume to<br/>
              <span style={{color: job.color}} className="font-black">info@aibunt.com</span>
            </p>
          </div>
        </div>
      </motion.div>

    </>
  );
};

const CareersPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">



        {/* Job Listings */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">Open Positions</span>
              <h2 className="text-4xl md:text-5xl font-[1000] uppercase tracking-tighter">
                Great Opportunity to <br/><span className="gradient-text">Work With Us</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-soft)] border border-[var(--accent)]/20">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--accent)]">{jobs.length} Open Role{jobs.length > 1 ? 's' : ''}</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {jobs.map(job => <JobCard key={job.id} job={job} />)}
          </div>
        </div>

        {/* No suitable role CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center p-12 rounded-[2.5rem] border border-[var(--border-color)] bg-[var(--bg-card)]"
        >
          <Users size={40} className="mx-auto mb-4 text-[var(--accent)]" />
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-3">Don't See Your Role?</h3>
          <p className="opacity-60 font-medium mb-6 max-w-md mx-auto text-sm">We're always open to talented engineers, AI developers, and mechanical designers. Drop us a message.</p>
          <a href="mailto:info@aibunt.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
            Email Us Directly <ChevronRight size={14} />
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default CareersPage;
