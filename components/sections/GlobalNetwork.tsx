"use client";

import { motion } from "framer-motion";

const nodes = [
  {
    city: "London",
    top: "18%",
    left: "32%",
  },
  {
    city: "New York",
    top: "30%",
    left: "18%",
  },
  {
    city: "Singapore",
    top: "62%",
    left: "74%",
  },
  {
    city: "Tokyo",
    top: "36%",
    left: "82%",
  },
  {
    city: "Frankfurt",
    top: "28%",
    left: "48%",
  },
  {
    city: "Sydney",
    top: "78%",
    left: "86%",
  },
];

export default function GlobalNetwork() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-cyan-400">
            Distributed Infrastructure Network
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Global cloud architecture
            operating across regions
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Enterprise-scale distributed systems,
            global deployment infrastructure, and
            resilient multi-region cloud operations.
          </p>
        </div>

        {/* Network Visualization */}
        <div className="relative mt-28 h-[700px] overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03]">
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* Central Core */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-xl"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold">
                Global
              </h3>

              <p className="mt-2 text-sm text-cyan-300">
                Infrastructure
              </p>
            </div>
          </motion.div>

          {/* Connection Rings */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/5" />

          {/* Nodes */}
          {nodes.map((node, index) => (
            <motion.div
              key={node.city}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="absolute z-30"
              style={{
                top: node.top,
                left: node.left,
              }}
            >
              {/* Beam */}
              <div className="absolute left-1/2 top-1/2 h-[2px] w-[240px] origin-left -translate-y-1/2 bg-gradient-to-r from-cyan-400/70 to-transparent" />

              {/* Node */}
              <div className="glass relative flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4">
                {/* Pulse */}
                <motion.div
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-400"
                />

                {/* Dot */}
                <div className="relative z-10 h-3 w-3 rounded-full bg-cyan-400" />

                {/* City */}
                <p className="relative z-10 text-sm font-medium text-white">
                  {node.city}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Floating Stats */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass absolute bottom-10 left-10 rounded-3xl border border-white/10 p-6"
          >
            <p className="text-sm text-slate-400">
              Active Regions
            </p>

            <h4 className="mt-3 text-4xl font-bold">
              24
            </h4>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass absolute right-10 top-10 rounded-3xl border border-white/10 p-6"
          >
            <p className="text-sm text-slate-400">
              Global Requests
            </p>

            <h4 className="mt-3 text-4xl font-bold">
              480M+
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}