import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const dots = Array.from({ length: 3 });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/100 z-50">
      <div className="flex gap-3">
        {dots.map((_, i) => (
          <motion.span
            key={i}
            className="w-3 h-3 rounded-full bg-white"
            animate={{
              y: [0, -10, 0], // up-down bounce
            }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              delay: i * 0.2, // stagger effect
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
