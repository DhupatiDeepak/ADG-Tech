import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Globe, Cpu } from "lucide-react";
import MagneticButton from "../components/MagneticButton";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 36, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const services = [
    { icon: <Globe size={22} />, image: "/images/web_dev.png", title: "Web & Platforms", desc: "Custom websites and powerful service platforms tailored to your expectations.", color: 'var(--accent)' },
    { icon: <Cpu size={22} />, image: "/images/mobile_app.png", title: "Mobile Apps", desc: "High-quality smartphone applications designed directly for the Playstore.", color: '#8B5CF6' },
    { icon: <Zap size={22} />, image: "/images/ai_models.png", title: "AI Integration", desc: "Embedding intelligent, bespoke AI models directly into your systems.", color: '#F59E0B' },
    { icon: <Shield size={22} />, image: "/images/mechanical.png", title: "Mechanical Automation", desc: "Cutting-edge mechanical design and intelligent software automation.", color: '#10B981' },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col gap-28 pb-32"
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <motion.div variants={itemVariants} className="mb-6">
          <span
            className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border-color)' }}
          >
            ✦ Next-Gen Engineering Studio
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter mb-3 leading-none"
          style={{ color: 'var(--text-primary)' }}
        >
          AI <span style={{ color: 'var(--accent-teal)' }}>Bunt</span>
        </motion.h2>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-[1000] uppercase tracking-tighter mb-6 leading-[1.05]"
          style={{ color: 'var(--text-primary)' }}
        >
          SOFTWARE, AI &{' '}
          <br />
          <span className="gradient-text">MECHANICAL</span>{' '}
          <br />
          ENGINEERING.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          We craft custom websites, mobile apps, and intelligent AI models tailored to your expectations, alongside advanced mechanical design and automation.
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center gap-4 flex-wrap justify-center">
          <MagneticButton>
            <button className="btn-premium group">
              Get Started <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </MagneticButton>
          <a
            href="#contact-section"
            className="text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              border: '1px solid var(--border-strong)',
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-soft)';
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '';
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-strong)';
            }}
          >
            Learn More
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '99.8%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center px-6 py-3 rounded-2xl"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="text-2xl font-black tracking-tighter" style={{ color: 'var(--accent)' }}>{stat.value}</div>
              <div className="text-[9px] uppercase tracking-widest font-bold" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>


      {/* Services Grid */}
      <section className="container mx-auto px-6">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4" style={{ color: 'var(--text-primary)' }}>
            Core <span className="gradient-text">Capabilities</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent), #8B5CF6)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="rounded-3xl p-6 overflow-hidden group cursor-pointer"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = service.color;
                e.currentTarget.style.boxShadow = `var(--shadow-xl), 0 0 0 1px ${service.color}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <div
                className="w-full h-40 mb-6 rounded-2xl overflow-hidden relative"
                style={{ border: '1px solid var(--border-color)' }}
              >
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(${service.color} 1px, transparent 1px)`, backgroundSize: '10px 10px' }} />
                
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover relative z-10 transform group-hover:scale-105 transition-transform duration-700 bg-[var(--bg-secondary)]"
                  onError={(e) => {
                    // Hide broken image icon, show fallback pattern + icon instead
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Fallback Icon (centered behind image, only visible if image fails) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  {React.cloneElement(service.icon, { size: 64, color: service.color })}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                  style={{ background: `${service.color}18`, color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="text-base font-bold uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
              </div>
              
              <p className="text-sm leading-relaxed font-medium mt-3" style={{ color: 'var(--text-secondary)' }}>
                {service.desc}
              </p>
              <div
                className="mt-5 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-full opacity-60"
                style={{ background: service.color }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="container mx-auto px-6">
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
            style={{ background: '#8B5CF6' }}
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent opacity-50" />
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
