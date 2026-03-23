import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const LiveBackground = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { isDark } = useTheme();

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden ${isDark ? 'ai-animated-bg' : ''}`}
      style={{ background: isDark ? undefined : 'var(--bg-primary)' }}
    >
      {/* Dot Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(var(--border-color) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.6,
        }}
      />

      {isHome ? (
        <>
          {/* Futuristic Control Room Background for Home Page */}
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/futuristic_bg.jpg")' }}
          />
          {/* Deep blending overlay for readability */}
          <div className="absolute inset-0 bg-[var(--bg-primary)]/60 backdrop-blur-[2px]" />
        </>
      ) : (
        <>
          {/* Animated Blobs for other pages */}
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[15%] -left-[10%] w-[45%] h-[45%] rounded-full blur-[130px]"
            style={{ background: 'var(--blob-1)' }}
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 100, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[5%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[130px]"
            style={{ background: 'var(--blob-2)' }}
          />
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -80, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-[25%] right-[15%] w-[35%] h-[35%] rounded-full blur-[110px]"
            style={{ background: 'var(--blob-3)' }}
          />
        </>
      )}

      {/* Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.02, mixBlendMode: 'multiply', backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />
    </div>
  );
};

export default LiveBackground;
