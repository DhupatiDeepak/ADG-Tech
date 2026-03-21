import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Zap, Shield, Globe, Cpu } from "lucide-react";
import MagneticButton from "../components/MagneticButton";
import Marquee from "../components/Marquee";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col gap-32 pb-32"
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <motion.h2 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-8xl font-[1000] uppercase italic tracking-tighter mb-2 text-[#0F172A] leading-none"
        >
          ADG <span className="text-[#0369A1]">Tech.</span>
        </motion.h2>
        <motion.div variants={itemVariants} className="mb-8">
          <span className="px-4 py-1.5 rounded-full bg-[#E0F2FE] text-[#0369A1] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#0369A1]/10">
            Next-Gen Engineering
          </span>
        </motion.div>
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-8xl font-[1000] uppercase tracking-tighter mb-6 text-[#0F172A] leading-[1.1] md:leading-[0.9]"
        >
          DYNAMIC <br />
          <span className="text-[#0369A1]">SYSTEMS</span> <br />
          FOR THE FUTURE.
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          We build precision-engineered solutions that bridge the gap between imagination and production. High-performance design meets AI-driven insights.
        </motion.p>

        <motion.div variants={itemVariants}>
          <MagneticButton>
            <button className="btn-premium group">
              Get Started <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </MagneticButton>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 border-y border-slate-100 overflow-hidden bg-slate-50/50">
        <Marquee direction="left" speed={30}>
          <span className="mx-12 marquee-text">PRECISION</span>
          <span className="mx-12 marquee-text">INNOVATION</span>
          <span className="mx-12 marquee-text">DYNAMICS</span>
          <span className="mx-12 marquee-text">ENGINEERING</span>
        </Marquee>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6">
        <motion.div variants={itemVariants} className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-[#0F172A]">Core Capabilities</h2>
          <div className="w-20 h-1 bg-[#0369A1] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Cpu size={28} />} 
            title="CAD Analysis" 
            desc="Automated topological optimization through neural network processing."
            index={0}
          />
          <FeatureCard 
            icon={<Zap size={28} />} 
            title="Simulation" 
            desc="Hyper-accurate fluid dynamics and structural stress forecasting."
            index={1}
          />
          <FeatureCard 
            icon={<Shield size={28} />} 
            title="Validation" 
            desc="Compliance monitoring and rigorous component stress testing."
            index={2}
          />
          <FeatureCard 
            icon={<Globe size={28} />} 
            title="Deployment" 
            desc="Seamless integration with global manufacturing supply chains."
            index={3}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="container mx-auto px-6">
        <div className="bg-[#0F172A] rounded-[2rem] md:rounded-[3rem] p-8 py-16 md:p-24 text-center text-white overflow-hidden relative group">
          <div className="absolute inset-0 bg-[#0369A1] opacity-0 group-hover:opacity-5 transition-opacity duration-1000" />
          <motion.h2 
            whileInView={{ y: [40, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 relative z-10"
          >
            Ready to Build <br /> <span className="text-slate-400 italic">Something Extraordinary?</span>
          </motion.h2>
          <motion.div 
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <MagneticButton>
              <button className="px-12 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#0369A1] hover:text-white transition-colors">
                Start Project
              </button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, desc, index }) => (
  <motion.div 
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { delay: index * 0.1, duration: 0.6 } }
    }}
    className="glass-card group"
  >
    <div className="w-14 h-14 bg-slate-50 text-[#0F172A] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0369A1] group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg]">
      {icon}
    </div>
    <h3 className="text-xl font-black uppercase mb-4 tracking-tighter">{title}</h3>
    <p className="text-[#64748B] text-sm leading-relaxed font-medium">
      {desc}
    </p>
    <div className="mt-8 flex items-center gap-2 text-[#0369A1] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-500">
      Learn More <ChevronRight size={12} />
    </div>
  </motion.div>
);

export default Home;
