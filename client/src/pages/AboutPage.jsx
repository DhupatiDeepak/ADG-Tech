import React from "react";
import { motion } from "framer-motion";
import { Globe, Zap, Settings, Layers, ArrowRight, Code, Cpu, Scan, CircuitBoard, Factory, Wrench, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: <Settings size={28} />,
    color: "#10B981",
    title: "Mechanical Engineering",
    desc: "Precision design, manufacturing, fabrication, quality inspection and assembly — end-to-end mechanical solutions for modern industry.",
    tags: ["CAD/CAM Design", "Welding & Fabrication", "Quality Inspection", "Prototype Manufacturing"]
  },
  {
    icon: <Globe size={28} />,
    color: "#85B53D",
    title: "Web Services",
    desc: "High-performance websites, SaaS platforms and full-stack digital products that scale — from landing pages to enterprise software.",
    tags: ["Full-Stack Development", "SaaS Platforms", "Cloud Architecture", "ECD Services"]
  },
  {
    icon: <BrainCircuit size={28} />,
    color: "#5A8424",
    title: "AI Integration",
    desc: "Use-case-driven AI solutions. We embed intelligence into your workflows — from computer vision to custom LLM pipelines.",
    tags: ["Custom AI/ML Models", "Computer Vision", "Robotics & AI", "Smart Automation"]
  },
  {
    icon: <Scan size={28} />,
    color: "#06B6D4",
    title: "3D Scanning & Reverse Engineering",
    desc: "End-to-end 3D scanning services converting physical objects into precise digital models — ideal for quality checks and reverse engineering.",
    tags: ["3D Scanning", "Reverse Engineering", "Point Cloud to CAD", "Dimensional Inspection"]
  },
  {
    icon: <CircuitBoard size={28} />,
    color: "#F59E0B",
    title: "ECD Services",
    desc: "Electrical, control and design engineering — providing robust ECD solutions for industrial automation and embedded systems projects.",
    tags: ["PCB Design", "Control Systems", "Embedded Systems", "Electrical Design"]
  },
  {
    icon: <Factory size={28} />,
    color: "#8B5CF6",
    title: "Manufacturing & Fabrication",
    desc: "A smart platform between buyers and vendors — we connect you to the right manufacturer and take care of end-to-end production.",
    tags: ["Manufacturing Outsourcing", "3D Printing", "Laser / Waterjet Cutting", "Batch Production"]
  }
];

const team = [
  { icon: <Wrench size={36} />, title: "Mechanical Engineers", desc: "Precision, rigor and deep knowledge of industrial manufacturing systems.", color: "#10B981" },
  { icon: <BrainCircuit size={36} />, title: "AI / ML Engineers", desc: "Building intelligent systems, automation and data-driven pipelines.", color: "#85B53D" },
  { icon: <Code size={36} />, title: "Full-Stack Developers", desc: "Delivering scalable, high-performance digital products from frontend to cloud.", color: "#06B6D4" }
];

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6">

        {/* ── HERO ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-5xl mx-auto"
        >
          <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">
            About AI Bunt
          </span>
          <h1 className="text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter mb-8 leading-none">
            Engineering <span className="gradient-text">Intelligence.</span><br/>
            <span className="text-4xl md:text-5xl opacity-60 not-italic font-black">Precision. AI. Digital.</span>
          </h1>
          <p className="text-xl opacity-70 font-medium leading-relaxed max-w-3xl mx-auto">
            AI Bunt is a multidisciplinary engineering startup combining mechanical precision, AI innovation and full-stack software expertise. We partner with businesses to build intelligent systems — from industrial automation to AI-powered web platforms.
          </p>
        </motion.div>

        {/* ── WHO WE ARE ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-28 rounded-[3rem] border border-[var(--border-color)] bg-[var(--bg-card)] p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 20%, var(--accent), transparent 60%)' }} />
          <div className="relative z-10 flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1">
              <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Our Identity</span>
              <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter mb-8 leading-none">Who We Are</h2>
              <p className="text-lg opacity-70 font-medium leading-relaxed mb-6">
                AI Bunt brings together three core engineering disciplines under one roof. Our team of <strong className="text-[var(--accent)]">mechanical engineers, AI/ML engineers and full-stack developers</strong> collaborate to design, build and intelligence-enable industrial and digital systems.
              </p>
              <p className="text-lg opacity-70 font-medium leading-relaxed">
                We don't just write code or draw parts — we engineer complete solutions. From a precision gear to a smart ML pipeline, every deliverable carries the same standard of engineering excellence.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-6">
              {[
                { label: "Mechanical Engineering", val: "Precision components, CAD/CAM, quality inspection" },
                { label: "AI & ML", val: "Neural models, vision systems, intelligent automation" },
                { label: "Full-Stack Software", val: "Web platforms, APIs, cloud architecture, ECD" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/40 hover:border-[var(--accent)]/40 transition-colors">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[var(--accent)] mb-2">0{i+1} — {item.label}</h4>
                  <p className="text-sm font-bold opacity-60">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── CAPABILITIES GRID ── */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Full Spectrum</span>
            <h2 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter mb-4">What We <span className="gradient-text">Do</span></h2>
            <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-teal)]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)]/50 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5 blur-2xl" style={{ background: cap.color }} />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all group-hover:scale-110" style={{ background: `${cap.color}15`, color: cap.color, borderColor: `${cap.color}30` }}>
                  {cap.icon}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tighter mb-3">{cap.title}</h3>
                <p className="text-sm opacity-60 font-medium leading-relaxed mb-5">{cap.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag, t) => (
                    <span key={t} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-lg" style={{ background: `${cap.color}12`, color: cap.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── TEAM ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-28"
        >
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Our Secret Weapon</span>
            <h2 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter">Three Disciplines, <span className="gradient-text">One Vision</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] text-center hover:border-[var(--accent)]/40 transition-all group hover:-translate-y-2 duration-500"
              >
                <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 transition-all group-hover:scale-110" style={{ background: `${member.color}15`, color: member.color, border: `1px solid ${member.color}30` }}>
                  {member.icon}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tighter mb-3">{member.title}</h3>
                <p className="text-sm opacity-60 font-medium leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── WHY US ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-28 rounded-[3rem] border border-[var(--border-color)] bg-[var(--bg-card)] p-12 md:p-20"
        >
          <div className="text-center mb-12">
            <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Our Edge</span>
            <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter">Why Choose <span className="gradient-text">AI Bunt</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Cross-Domain Expertise", desc: "We combine mechanical, AI and software engineering under one roof — solving problems others can't even see." },
              { title: "Precision-First Culture", desc: "Every deliverable — from a CAD drawing to a machine learning model — is built to the same high engineering standard." },
              { title: "AI-Native Thinking", desc: "We don't bolt on AI as an afterthought. Intelligence is embedded into everything we design and build." },
              { title: "End-to-End Delivery", desc: "From concept to production — we handle mechanical design, software development, AI integration and deployment." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/40 hover:border-[var(--accent)]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] font-black text-sm flex-shrink-0">
                  0{i+1}
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tight mb-1 text-sm">{item.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter mb-6">
            Ready to Build <span className="gradient-text italic">Something Extraordinary?</span>
          </h2>
          <p className="text-lg opacity-60 mb-10 max-w-xl mx-auto">Let's engineer your next breakthrough. Tell us your challenge — we'll design the solution.</p>
          <Link to="/contact">
            <button className="px-12 py-5 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-lg flex items-center gap-3 mx-auto">
              Get In Touch <ArrowRight size={16} />
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutPage;
