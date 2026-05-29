"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* TOP LEFT GLOW */}
      <motion.div
        style={{
          willChange: "transform",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-[-120px] h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* TOP RIGHT GLOW */}
      <motion.div
        style={{
          willChange: "transform",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] top-[10%] h-[650px] w-[650px] rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* BOTTOM GLOW */}
      <motion.div
        style={{
          willChange: "transform",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] left-[15%] h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-[120px]"
      />

      {/* CENTER GLOW */}
      <motion.div
        style={{
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]"
      />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* RADIAL OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050816_90%)]" />
    </div>
  );
}