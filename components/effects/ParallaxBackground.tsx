"use client";

import { motion } from "framer-motion";

export default function ParallaxBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* LAYER 1 */}
      <motion.div
        style={{
          willChange: "transform",
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[15%] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"
      />

      {/* LAYER 2 */}
      <motion.div
        style={{
          willChange: "transform",
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-[30%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[110px]"
      />

      {/* LAYER 3 */}
      <motion.div
        style={{
          willChange: "transform",
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] left-[30%] h-[280px] w-[280px] rounded-full bg-indigo-500/10 blur-[100px]"
      />
    </div>
  );
}