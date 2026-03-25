import React from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import MagneticButton from '../components/MagneticButton';
import { ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Projects />
      
      {/* Re-use the Call to Action from Home page to close out the Projects page beautifully */}
      <section id="contact-section" className="container mx-auto px-6 mb-24 mt-12 flex-grow">
        <div
          className="rounded-[2rem] md:rounded-[3rem] p-10 py-20 md:p-24 text-center overflow-hidden relative group"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-xl)' }}
        >
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 opacity-20 transition-opacity duration-1000 group-hover:opacity-40" style={{ background: 'radial-gradient(circle at 50% 0%, var(--accent) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(var(--text-primary) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

          {/* Floating animated orbs */}
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
            style={{ background: 'var(--accent-teal)' }}
          />
          <motion.div
            animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-20 pointer-events-none"
            style={{ background: 'var(--accent)' }}
          />

          <motion.h2
            whileInView={{ y: [40, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-[800] tracking-tight mb-8 relative z-10"
            style={{ color: 'var(--text-primary)', fontFamily: '"Inter", "Poppins", sans-serif' }}
          >
            Ready to Build
            <br />
            <span className="gradient-text opacity-90 block mt-2">Something Extraordinary?</span>
          </motion.h2>

          <motion.div
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 mt-12"
          >
            <MagneticButton>
              <button
                className="px-12 md:px-16 py-5 md:py-6 rounded-full font-black uppercase tracking-[0.15em] text-xs md:text-sm overflow-hidden relative group transition-all duration-300 transform hover:-translate-y-2 active:translate-y-0 active:scale-95"
                style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', boxShadow: '0 10px 30px -10px var(--accent-soft)' }}
              >
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-[var(--bg-card)] to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 transition-colors group-hover:text-[var(--accent)]">Start Your Project</span>
              </button>
            </MagneticButton>
          </motion.div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[var(--accent-teal)] to-transparent opacity-50" />
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsPage;
