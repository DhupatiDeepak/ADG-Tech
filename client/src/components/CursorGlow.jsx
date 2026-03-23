import React, { useEffect } from "react";

const CursorGlow = () => {
  useEffect(() => {
    // Only add cursor glow on desktop (where pointer: fine is supported)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    // Smooth following using requestAnimationFrame
    const animate = () => {
      // Ease factor (0.1 = smooth drag, 1 = instant)
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      
      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY}px`;
      
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (document.body.contains(glow)) {
        document.body.removeChild(glow);
      }
    };
  }, []);

  return null;
};

export default CursorGlow;
