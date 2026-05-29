"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  Cpu,
  Bot,
  Workflow,
  Sparkles,
  Activity,
} from "lucide-react";

const systems = [
  {
    title: "AI Orchestration",
    description:
      "Enterprise-scale AI workflow orchestration and intelligent operational systems.",
    icon: BrainCircuit,
  },
  {
    title: "Predictive Intelligence",
    description:
      "Realtime predictive analytics and operational intelligence infrastructure.",
    icon: Cpu,
  },
  {
    title: "Autonomous Agents",
    description:
      "AI-driven automation systems designed for enterprise operational scale.",
    icon: Bot,
  },
  {
    title: "Workflow Automation",
    description:
      "Intelligent automation pipelines optimizing enterprise engineering operations.",
    icon: Workflow,
  },
  {
    title: "Generative Systems",
    description:
      "Next-generation AI infrastructure enabling intelligent enterprise workflows.",
    icon: Sparkles,
  },
  {
    title: "Operational Monitoring",
    description:
      "Realtime AI telemetry and intelligent infrastructure observability systems.",
    icon: Activity,
  },
];

const workflow = [
  "Data Processing",
  "AI Analysis",
  "Predictive Modeling",
  "Workflow Automation",
  "Operational Intelligence",
  "Realtime Optimization",
];

export default function AIPage() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="section-padding relative overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[240px]" />

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-cyan-400"
            >
              Enterprise AI Automation Systems
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl xl:text-[92px]"
            >
              Intelligent automation
              infrastructure engineered
              for enterprise scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400"
            >
              Advanced AI orchestration systems,
              intelligent automation workflows,
              predictive operational infrastructure,
              and enterprise-scale AI engineering platforms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* AI SYSTEMS GRID */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-cyan-400">
              AI Infrastructure Systems
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Intelligent enterprise
              systems powered by AI
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="glass group relative overflow-hidden rounded-[32px] p-8"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-cyan-500/5 group-hover:to-blue-500/10" />

                  {/* Icon */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={30} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-8">
                    <h3 className="text-2xl font-bold">
                      {system.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {system.description}
                    </p>
                  </div>

                  {/* Border */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI DASHBOARD */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="mb-4 text-cyan-400">
                Neural Infrastructure
              </p>

              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                AI operational systems
                optimized for realtime intelligence
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-400">
                Enterprise AI systems engineered
                for intelligent orchestration,
                automation workflows, predictive
                analytics, and operational optimization.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-5">
                {[
                  "Predictive operational analytics",
                  "AI orchestration pipelines",
                  "Autonomous workflow systems",
                  "Realtime infrastructure intelligence",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />

                    <p className="text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT DASHBOARD */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="glass overflow-hidden rounded-[40px] border border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">
                <div>
                  <p className="text-sm text-slate-400">
                    AI Operations Core
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Neural Intelligence Dashboard
                  </h3>
                </div>

                <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
                  Active AI Systems
                </div>
              </div>

              {/* Metrics */}
              <div className="grid gap-6 p-8 md:grid-cols-2">
                {[
                  {
                    label: "AI Workflows",
                    value: "240+",
                  },
                  {
                    label: "Automation Tasks",
                    value: "1.2M",
                  },
                  {
                    label: "Prediction Accuracy",
                    value: "99.4%",
                  },
                  {
                    label: "Realtime Decisions",
                    value: "480K",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                  >
                    <p className="text-sm text-slate-400">
                      {item.label}
                    </p>

                    <h4 className="mt-4 text-4xl font-bold">
                      {item.value}
                    </h4>
                  </div>
                ))}
              </div>

              {/* AI Activity Visualization */}
              <div className="px-8 pb-8">
                <div className="relative flex h-[240px] items-end gap-4 overflow-hidden">
                  {[20, 35, 48, 62, 74, 92, 100].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{
                          height: 0,
                        }}
                        whileInView={{
                          height: `${height}%`,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.08,
                        }}
                        viewport={{ once: true }}
                        className="relative w-full rounded-t-3xl bg-gradient-to-t from-cyan-500 via-blue-500 to-indigo-500"
                      >
                        <motion.div
                          animate={{
                            opacity: [0.2, 0.6, 0.2],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                          className="absolute inset-0 rounded-t-3xl bg-white/10"
                        />
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-cyan-400">
              AI Workflow Architecture
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Intelligent operational
              automation lifecycle
            </h2>
          </div>

          <div className="relative mx-auto mt-24 max-w-6xl">
            {/* Line */}
            <div className="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-cyan-400/20 via-cyan-400 to-blue-500/20 lg:block" />

            <div className="grid gap-8 lg:grid-cols-6">
              {workflow.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="glass relative rounded-[28px] p-6 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    0{index + 1}
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-300">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass rounded-[40px] border border-white/10 p-12 text-center md:p-20">
            <p className="text-cyan-400">
              Enterprise AI Infrastructure
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Build intelligent automation
              systems engineered for scale
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              AI orchestration platforms,
              intelligent automation workflows,
              and predictive enterprise systems
              optimized for operational scale.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
                Schedule AI Consultation
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 transition hover:bg-white/[0.05]">
                Explore AI Systems
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}