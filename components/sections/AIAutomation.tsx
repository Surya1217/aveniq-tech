"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  Workflow,
  Sparkles,
} from "lucide-react";

const systems = [
  {
    title: "AI Orchestration",
    description:
      "Intelligent infrastructure automation pipelines.",
    icon: BrainCircuit,
  },
  {
    title: "Distributed Compute",
    description:
      "Scalable cloud-native AI processing systems.",
    icon: Cpu,
  },
  {
    title: "Workflow Automation",
    description:
      "Enterprise-grade operational intelligence.",
    icon: Workflow,
  },
  {
    title: "Predictive Systems",
    description:
      "Realtime analytics and adaptive optimization.",
    icon: Sparkles,
  },
];

export default function AIAutomation() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]"
      />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-cyan-400">
            Intelligent Automation Systems
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            AI-powered infrastructure
            engineered for modern platforms
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Advanced orchestration, intelligent
            automation, and distributed AI systems
            designed for enterprise-scale operations.
          </p>
        </div>

        <div className="relative mt-28">
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass relative z-20 mx-auto flex h-[260px] w-[260px] items-center justify-center rounded-full border border-cyan-400/20"
          >
            <div
              aria-hidden="true"
              className="absolute inset-10 rounded-full bg-cyan-500/10 blur-3xl"
            />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-20px] rounded-full border border-dashed border-cyan-400/20"
            />

            <div className="relative z-10 text-center">
              <div
                aria-hidden="true"
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-400"
              >
                <BrainCircuit size={42} />
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                AI Core
              </h3>

              <p className="mt-3 text-sm text-cyan-300">
                Intelligent Infrastructure
              </p>
            </div>
          </motion.div>

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/5"
          />

          <div className="relative mt-32 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {systems.map((system, index) => {
              const Icon = system.icon;

              return (
                <motion.div
                  key={system.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="glass group relative overflow-hidden rounded-[32px] border border-white/10 p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-cyan-500/5 group-hover:to-blue-500/10" />

                  <div
                    aria-hidden="true"
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400"
                  >
                    <Icon size={30} />
                  </div>

                  <div className="relative z-10 mt-8">
                    <h3 className="text-2xl font-bold">
                      {system.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-300">
                      {system.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60" />
                </motion.div>
              );
            })}
          </div>

          {[...Array(12)].map((_, index) => (
            <motion.div
              key={index}
              aria-hidden="true"
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-2 w-2 rounded-full bg-cyan-400"
              style={{
                top: `${10 + index * 6}%`,
                left: `${5 + index * 8}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}