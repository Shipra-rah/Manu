import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Background = ({ intensity = "medium", className = "" }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Particle generator
  const generateParticles = (count) =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 6,
      size: Math.random() * 0.4 + 0.2,
    }));

  const settings = {
    low: { particles: 12, nodes: 6 },
    medium: { particles: 20, nodes: 10 },
    high: { particles: 30, nodes: 14 },
  }[intensity];

  const particles = generateParticles(settings.particles);

  return (
    <div
      className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Smooth gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

      {/* Subtle animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Minimal grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Circuit nodes */}
      {Array.from({ length: settings.nodes }).map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full bg-cyan-400/70"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={`particle-${p.id}`}
          className="absolute rounded-full bg-cyan-400/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size * 6}px`,
            height: `${p.size * 6}px`,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.6, 1.1, 0.6],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Minimal HUD corners */}
      <div className="absolute top-6 left-6 w-10 h-10 border-l-2 border-t-2 border-cyan-400/30"></div>
      <div className="absolute top-6 right-6 w-10 h-10 border-r-2 border-t-2 border-purple-400/30"></div>
      <div className="absolute bottom-6 left-6 w-10 h-10 border-l-2 border-b-2 border-pink-400/30"></div>
      <div className="absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-green-400/30"></div>

      {/* Subtle status bar */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-6 bg-black/20 border-t border-cyan-400/10"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center justify-between h-full px-4 font-mono text-xs text-cyan-400/60">
          <span>PORTFOLIO_SYSTEM: ACTIVE</span>
          <span className="flex items-center gap-2">
            <motion.span
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            READY
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Background;
