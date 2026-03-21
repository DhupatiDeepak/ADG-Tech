import React from "react";
import { motion } from "framer-motion";

const LiveBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[var(--bg-primary)] overflow-hidden">
      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(var(--border-color) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft Pastel Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-50/50 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-indigo-50/40 blur-[100px]"
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default LiveBackground;
