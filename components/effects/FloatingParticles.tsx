"use client";

import { motion } from "framer-motion";

const particles = [
  {
    id: 1,
    left: "10%",
    top: "20%",
    size: 4,
    duration: 18,
    delay: 0,
  },
  {
    id: 2,
    left: "25%",
    top: "70%",
    size: 5,
    duration: 20,
    delay: 1,
  },
  {
    id: 3,
    left: "45%",
    top: "35%",
    size: 4,
    duration: 22,
    delay: 2,
  },
  {
    id: 4,
    left: "70%",
    top: "25%",
    size: 6,
    duration: 19,
    delay: 1.5,
  },
  {
    id: 5,
    left: "85%",
    top: "75%",
    size: 4,
    duration: 21,
    delay: 2.5,
  },
];

export default function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            willChange: "transform",
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            opacity: 0.15,
            y: 0,
          }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
            y: [-10, -40, -10],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cyan-400/30 blur-sm"
        />
      ))}
    </div>
  );
}