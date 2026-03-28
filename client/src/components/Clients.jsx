import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Industrial Dynamics', logo: 'ID' },
  { name: 'TechFlow Systems', logo: 'TF' },
  { name: 'CyberCore', logo: 'CC' },
  { name: 'NexGen Robotics', logo: 'NX' },
  { name: 'GreenEnergy Grid', logo: 'GE' },
  { name: 'HeavyMech Solutions', logo: 'HM' },
  { name: 'AeroTech Industires', logo: 'AI' }
];

const Clients = () => {
  return (
    <section className="py-24 relative z-10 overflow-hidden border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Trusted By Industry Leaders</span>
      </div>

      <div className="flex overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center justify-around min-w-full px-10"
        >
          {[...clients, ...clients].map((client, idx) => (
            <div key={idx} className="flex items-center gap-4 group cursor-default">
               <div className="w-16 h-16 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-2xl font-black text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-primary)] transition-all duration-500 shadow-lg">
                  {client.logo}
               </div>
               <span className="text-sm font-black uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {client.name}
               </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10" />
    </section>
  );
};

export default Clients;
