import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ text, speed = 20 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-10 flex select-none border-y border-[var(--border-color)] opacity-40">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0 items-center justify-around min-w-full"
      >
        <span className="text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter mr-20" style={{ color: 'var(--text-primary)' }}>{text}</span>
        <span className="text-4xl md:text-6xl text-[var(--accent)] mx-10">✦</span>
        <span className="text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter mr-20" style={{ color: 'var(--text-primary)' }}>{text}</span>
        <span className="text-4xl md:text-6xl text-[var(--accent)] mx-10">✦</span>
      </motion.div>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0 items-center justify-around min-w-full"
      >
        <span className="text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter mr-20" style={{ color: 'var(--text-primary)' }}>{text}</span>
        <span className="text-4xl md:text-6xl text-[var(--accent)] mx-10">✦</span>
        <span className="text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter mr-20" style={{ color: 'var(--text-primary)' }}>{text}</span>
        <span className="text-4xl md:text-6xl text-[var(--accent)] mx-10">✦</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
