import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ text, speed = 20 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 flex select-none">
      <motion.div
        animate={{ x: [0, -1039] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0 items-center justify-around min-w-full"
      >
        <span className="marquee-text mr-20">{text}</span>
        <span className="marquee-text mr-20">{text}</span>
      </motion.div>
      <motion.div
        animate={{ x: [0, -1039] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0 items-center justify-around min-w-full"
      >
        <span className="marquee-text mr-20">{text}</span>
        <span className="marquee-text mr-20">{text}</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
