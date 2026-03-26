import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MechanicalGear = ({ size = 100, color = 'var(--accent)', speed = 1, reverse = false }) => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, 360 * speed * (reverse ? -1 : 1)]
  );

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ rotate }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-20 pointer-events-none"
    >
      <path
        d="M50 20C47.2 20 45 22.2 45 25V27.1C41.7 27.8 38.6 29.1 35.8 30.9L34.3 29.4C32.3 27.4 29.1 27.4 27.1 29.4C25.1 31.4 25.1 34.6 27.1 36.6L28.6 38.1C26.8 40.9 25.5 44 24.8 47.3H22.7C19.9 47.3 17.7 49.5 17.7 52.3C17.7 55.1 19.9 57.3 22.7 57.3H24.8C25.5 60.6 26.8 63.7 28.6 66.5L27.1 68C25.1 70 25.1 73.2 27.1 75.2C29.1 77.2 32.3 77.2 34.3 75.2L35.8 73.7C38.6 75.5 41.7 76.8 45 77.5V79.6C45 82.4 47.2 84.6 50 84.6C52.8 84.6 55 82.4 55 79.6V77.5C58.3 76.8 61.4 75.5 64.2 73.7L65.7 75.2C67.7 77.2 70.9 77.2 72.9 75.2C74.9 73.2 74.9 70 72.9 68L71.4 66.5C73.2 63.7 74.5 60.6 75.2 57.3H77.3C80.1 57.3 82.3 55.1 82.3 52.3C82.3 49.5 80.1 47.3 77.3 47.3H75.2C74.5 44 73.2 40.9 71.4 38.1L72.9 36.6C74.9 34.6 74.9 31.4 72.9 29.4C70.9 27.4 67.7 27.4 65.7 29.4L64.2 30.9C61.4 29.1 58.3 27.8 55 27.1V25C55 22.2 52.8 20 50 20ZM50 40C56.8 40 62.3 45.5 62.3 52.3C62.3 59.1 56.8 64.6 50 64.6C43.2 64.6 37.7 59.1 37.7 52.3C37.7 45.5 43.2 40 50 40Z"
        fill={color}
      />
    </motion.svg>
  );
};

export default MechanicalGear;
