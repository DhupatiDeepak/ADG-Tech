import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Cpu, Settings, Mail, Shield, Zap, Code, Layers } from "lucide-react";
import MagneticButton from "../components/MagneticButton";
import Marquee from "../components/Marquee";
import MechanicalGear from "../components/MechanicalGear";

const Home = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms for Hero
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden z-10"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">
              Precision Engineering & Industrial AI
            </span>
            <h1 className="text-7xl md:text-9xl font-[1000] uppercase italic tracking-tighter leading-none mb-8">
              AI <span className="gradient-text">BUNT.</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-60 font-medium max-w-2xl mx-auto mb-10 leading-tight">
              Architecting the next generation of industrial intelligence through mechanical mastery and software innovation.
            </p>
            
            <MagneticButton>
              <button 
                onClick={() => navigate('/contact')}
                className="px-10 py-5 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform flex items-center gap-3 mx-auto"
              >
                Inquire Now <ArrowRight size={16} />
              </button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[var(--text-primary)] to-transparent" />
          <span className="text-[9px] uppercase tracking-widest font-black">Scroll</span>
        </motion.div>
      </motion.section>

      {/* 2. CORE CAPABILITIES (Bento Grid) */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6 mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter mb-4"
          >
            Core <span className="gradient-text">Capabilities</span>
          </motion.h2>
          <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-teal)]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="bento-grid">
            {/* LARGE ITEM 1: WEB DEV */}
            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              className="bento-item bento-item-1 p-8 flex flex-col justify-start gap-4 group cursor-pointer"
              onClick={() => navigate('/departments')}
            >
              <div className="relative z-10 text-left">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6 border border-green-500/20">
                  <Globe size={28} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-2 tracking-tighter">Web & Platforms</h3>
                <p className="text-lg opacity-70 leading-relaxed font-medium max-w-md">
                  High-performance web ecosystems designed for scale. From landing pages to complex SaaS platforms.
                </p>
              </div>
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code size={120} />
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[var(--accent)] group-hover:gap-4 transition-all text-left">
                Explore Tech <ArrowRight size={14} />
              </div>
            </motion.div>

            {/* ITEM 2: AI */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              className="bento-item bento-item-2 p-8 flex flex-col justify-start gap-2 group cursor-pointer"
              onClick={() => navigate('/departments')}
            >
                <div className="text-left">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 border border-emerald-500/20">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2 tracking-tighter">AI Integration</h3>
                  <p className="opacity-70 font-medium">Bespoke LLM & Computer Vision models.</p>
                </div>
                <div className="absolute right-0 bottom-0 p-8 opacity-10">
                  <Cpu size={80} />
                </div>
            </motion.div>

            {/* ITEM 3: MECHANICAL */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              className="bento-item bento-item-3 p-8 group overflow-hidden text-left cursor-pointer"
              onClick={() => navigate('/departments')}
            >
              <Settings className="mb-6 text-[var(--accent)]" size={32} />
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Automation</h3>
              <p className="text-xs opacity-60 font-bold uppercase tracking-wider leading-relaxed">Mechanical software solutions.</p>
            </motion.div>

            {/* ITEM 4: APPS */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              className="bento-item bento-item-4 p-8 group text-left cursor-pointer"
              onClick={() => navigate('/departments')}
            >
              <Layers className="mb-6 text-[var(--accent-teal)]" size={32} />
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Mobile</h3>
              <p className="text-xs opacity-60 font-bold uppercase tracking-wider leading-relaxed">Native & Cross-platform apps.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MARQUEE SECTION */}
      <div className="relative z-10 py-10" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <Marquee text="ENGINEERING EXCELLENCE ✦ INDUSTRIAL AI ✦ MECHANICAL MASTERY" />
      </div>




      {/* 6. DISCOVERY NAVIGATION - ENHANCED */}
      <section className="py-16 relative z-10 border-t border-[var(--border-color)]">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "About Bunt", path: "/about", desc: "Our vision & mission", icon: <Globe size={20} /> },
            { title: "Departments", path: "/departments", desc: "Core expertise areas", icon: <Layers size={20} /> },
            { title: "Our Projects", path: "/projects", desc: "Success stories", icon: <Settings size={20} /> },
            { title: "Join Careers", path: "/careers", desc: "Build the future", icon: <Mail size={20} /> }
          ].map((item, idx) => (
             <Link 
               key={idx} 
               to={item.path} 
               className="group p-8 rounded-[2rem] glass-panel border border-[var(--border-color)] flex flex-col items-start gap-4 hover:bg-[var(--accent-soft)] hover:border-[var(--accent)] transition-all duration-500 hover:-translate-y-2"
             >
                <div className="p-3 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-primary)] transition-colors duration-500">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-black uppercase text-[10px] tracking-[0.3em] mb-1">{item.title}</h3>
                  <p className="text-[11px] font-bold opacity-40 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{item.desc}</p>
                </div>
             </Link>
          ))}
        </div>
      </section>

      {/* 7. ENHANCED CONTACT CTA - COMPACT VERSION */}
      <section className="py-16 relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="rounded-[3rem] bg-[var(--bg-card)] border border-[var(--border-color)] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl"
          onClick={() => navigate('/contact')}
        >
          {/* Decorative background glow */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700" 
               style={{ background: 'radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 70%)' }} />
          
          <div className="relative z-10">
            <span className="text-[var(--accent)] text-[9px] font-bold uppercase tracking-[0.4em] mb-6 block group-hover:tracking-[0.5em] transition-all">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter leading-tight mb-10">
              Start your project <br /> 
              <span className="gradient-text italic opacity-90 group-hover:opacity-100 transition-opacity">With Us.</span>
            </h2>
            
            <MagneticButton>
              <button className="px-12 py-5 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-lg hover:shadow-[0_15px_30px_rgba(133,181,61,0.15)]">
                Inquire Now
              </button>
            </MagneticButton>
          </div>
          
          <div className="absolute -bottom-20 -right-20 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
             <MechanicalGear size={400} speed={0.8} />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
