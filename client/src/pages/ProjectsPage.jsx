import React from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import MagneticButton from '../components/MagneticButton';
import MechanicalGear from '../components/MechanicalGear';
import { ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen pt-[100px] flex flex-col"
    >
      {/* Background Decorative Gears */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
        <div className="absolute top-[20%] -right-20">
          <MechanicalGear size={300} speed={0.4} color="var(--accent)" />
        </div>
        <div className="absolute bottom-[10%] -left-20">
          <MechanicalGear size={250} speed={0.6} reverse color="var(--accent-teal)" />
        </div>
      </div>

      <div className="relative z-10 flex-grow">
        <Projects />
      </div>
      
      {/* UPGRADED CTA SECTION */}
      <section id="contact-section" className="container mx-auto px-6 mb-24 mt-20 relative z-10">
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
            Ready to set the
            <br />
            <span className="gradient-text uppercase italic">Next Standard?</span>
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
  );
};

export default ProjectsPage;
