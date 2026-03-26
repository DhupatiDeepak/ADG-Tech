import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Zap, Shield, Globe, Cpu, Settings, Code, Layers } from "lucide-react";
import MagneticButton from "../components/MagneticButton";
import MechanicalGear from "../components/MechanicalGear";
import Marquee from "../components/Marquee";

const Home = () => {
  const containerRef = useRef(null);
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
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Background Decorative Gears */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] -right-20">
          <MechanicalGear size={300} speed={0.5} color="var(--accent)" />
        </div>
        <div className="absolute bottom-[20%] -left-20">
          <MechanicalGear size={400} speed={0.3} reverse color="var(--accent-teal)" />
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col gap-32 pb-32 relative z-10"
      >
        {/* PARALLAX HERO SECTION */}
        <motion.section 
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] glass-panel"
              style={{ color: 'var(--accent)', border: '1px solid var(--accent-soft)' }}
            >
              ✦ Engineering the Future
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-9xl font-[1000] uppercase italic tracking-tighter mb-4 leading-none"
            style={{ color: 'var(--text-primary)' }}
          >
            AI <span className="gradient-text">BUNT</span>
          </motion.h2>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-[1000] uppercase tracking-tighter mb-8 leading-[0.95]"
            style={{ color: 'var(--text-primary)' }}
          >
            WHERE ENGINEERING MEETS
            <br />
            <span className="opacity-50">ARTIFICIAL</span> INTELLIGENCE
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-14 font-medium leading-relaxed opacity-80"
            style={{ color: 'var(--text-secondary)' }}
          >
            We fuse advanced software engineering with mechanical precision to deliver websites, apps, and automation systems that redefine standards.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-6 flex-wrap justify-center">
            <MagneticButton>
              <button className="btn-premium px-12 py-5 text-sm group">
                Work With Us <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </MagneticButton>
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

        {/* BENTO SERVICES SECTION */}
        <section className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter mb-6">
              Core <span className="gradient-text">Capabilities</span>
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-teal)]" />
          </motion.div>

          <div className="bento-grid">
            {/* LARGE ITEM 1: WEB DEV */}
            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              className="bento-item bento-item-1 p-10 flex flex-col justify-between group"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6 border border-green-500/20">
                  <Globe size={28} />
                </div>
                <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Web & Platforms</h3>
                <p className="text-lg opacity-70 leading-relaxed font-medium max-w-md">
                  High-performance web ecosystems designed for scale. From landing pages to complex SaaS platforms.
                </p>
              </div>
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code size={120} />
              </div>
              <div className="mt-10 flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[var(--accent)] group-hover:translate-x-2 transition-transform">
                Explore Tech <ArrowRight size={14} />
              </div>
            </motion.div>

            {/* ITEM 2: AI */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              className="bento-item bento-item-2 p-10 flex flex-col justify-between group"
            >
                <div>
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
              className="bento-item bento-item-3 p-8 group overflow-hidden"
            >
              <Settings className="mb-6 text-[var(--accent)] group-hover:rotate-90 transition-transform duration-700" size={32} />
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Automation</h3>
              <p className="text-xs opacity-60 font-bold uppercase tracking-wider leading-relaxed">Mechanical software solutions.</p>
              <div className="absolute -bottom-4 -right-4">
                <MechanicalGear size={80} color="var(--accent)" speed={2} />
              </div>
            </motion.div>

            {/* ITEM 4: APPS */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              className="bento-item bento-item-4 p-8 group"
            >
              <Layers className="mb-6 text-[var(--accent-teal)]" size={32} />
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Mobile</h3>
              <p className="text-xs opacity-60 font-bold uppercase tracking-wider leading-relaxed">Native & Cross-platform apps.</p>
            </motion.div>
          </div>
        </section>

        {/* INTERMEDIATE MARQUEE */}
        <section className="py-10">
          <Marquee text="ENGINEERING EXCELLENCE" speed={30} />
        </section>

        {/* PRECISION / MECHANICAL SECTION */}
        <section className="container mx-auto px-6 py-20 overflow-hidden">
          <div className="rounded-[3rem] glass-panel border border-[var(--border-color)] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 relative">
            <div className="w-full md:w-1/2 relative z-10">
              <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">
                Precision & Quality
              </span>
              <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter mb-8 leading-none">
                Engineered with <br/> <span className="gradient-text">Absolute</span> Precision.
              </h2>
              <p className="text-lg opacity-70 font-medium leading-relaxed mb-10">
                Whether it's a line of code or a mechanical torque specification, we apply the same high level of engineering rigor to everything we build.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-black tracking-tighter mb-1">100%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-black tracking-tighter mb-1">0ms</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Downtime</div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center relative">
              <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="relative"
              >
                <MechanicalGear size={300} speed={0} color="var(--accent)" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full bg-[var(--text-primary)] flex items-center justify-center">
                      <Shield className="text-[var(--bg-primary)]" size={40} />
                   </div>
                </div>
              </motion.div>
              {/* Secondary gears for mechanical feel */}
              <div className="absolute top-0 right-0">
                <MechanicalGear size={100} speed={1.5} reverse />
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION - UPGRADED */}
        <section id="contact-section" className="container mx-auto px-6">
          <div
            className="rounded-[3rem] p-12 py-24 md:p-32 text-center overflow-hidden relative group shadow-2xl"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
          >
            <div className="absolute inset-0 opacity-10 transition-opacity duration-1000 group-hover:opacity-20" 
                 style={{ background: 'radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 70%)' }} />
            
            <motion.h2
              whileInView={{ y: [40, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-[1000] tracking-tighter mb-10 relative z-10"
            >
              Let's build the
              <br />
              <span className="gradient-text uppercase italic">Next Standard.</span>
            </motion.h2>

            <motion.div
              whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <MagneticButton>
                <button
                  className="px-16 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm bg-[var(--text-primary)] text-[var(--bg-primary)] transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-[0_20px_40px_rgba(133,181,61,0.2)]"
                >
                  Start A Project
                </button>
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Home;
