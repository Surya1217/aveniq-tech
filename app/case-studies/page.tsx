"use client";

import { motion } from "framer-motion";

import {
  Cloud,
  BrainCircuit,
  Workflow,
  Server,
} from "lucide-react";

const caseStudies = [
  {
    title: "Global Cloud Migration",
    category: "Cloud Infrastructure",
    description:
      "Migrated enterprise infrastructure to distributed cloud-native systems across multiple regions.",
    metric: "99.99% uptime",
    icon: Cloud,
  },
  {
    title: "AI Workflow Automation",
    category: "AI Infrastructure",
    description:
      "Implemented intelligent operational automation pipelines reducing manual workflows dramatically.",
    metric: "78% automation",
    icon: BrainCircuit,
  },
  {
    title: "Enterprise DevOps Scaling",
    category: "DevOps Engineering",
    description:
      "Engineered scalable CI/CD deployment systems supporting global operational delivery.",
    metric: "10x faster deployments",
    icon: Workflow,
  },
  {
    title: "Distributed Infrastructure Platform",
    category: "Infrastructure Systems",
    description:
      "Built resilient multi-region infrastructure optimized for enterprise operational continuity.",
    metric: "24 global regions",
    icon: Server,
  },
];

const timeline = [
  "Infrastructure Assessment",
  "Architecture Planning",
  "Migration & Automation",
  "Operational Optimization",
  "Global Scaling",
];

export default function CaseStudiesPage() {
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
              Enterprise Transformation Stories
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl xl:text-[92px]"
            >
              Engineering scalable
              infrastructure systems
              for enterprise growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400"
            >
              Explore enterprise cloud infrastructure,
              DevOps automation, AI operational systems,
              and scalable engineering transformations
              powering modern digital platforms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid gap-8 xl:grid-cols-2">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;

              return (
                <motion.div
                  key={study.title}
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
                  className="glass group relative overflow-hidden rounded-[40px] p-10"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-cyan-500/5 group-hover:to-blue-500/10" />

                  {/* Top */}
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                      <Icon size={30} />
                    </div>

                    <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                      {study.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-10">
                    <h2 className="text-3xl font-bold">
                      {study.title}
                    </h2>

                    <p className="mt-6 text-lg leading-9 text-slate-400">
                      {study.description}
                    </p>
                  </div>

                  {/* Metric */}
                  <div className="relative z-10 mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-sm text-slate-400">
                      Enterprise Result
                    </p>

                    <h3 className="mt-4 text-5xl font-bold text-cyan-400">
                      {study.metric}
                    </h3>
                  </div>

                  {/* Border */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Enterprise Projects",
                value: "120+",
              },
              {
                label: "Cloud Migrations",
                value: "48",
              },
              {
                label: "Infrastructure Regions",
                value: "24",
              },
              {
                label: "Operational Uptime",
                value: "99.99%",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
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
                className="glass rounded-[32px] p-8 text-center"
              >
                <h3 className="text-5xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-4 text-slate-400">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION TIMELINE */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-cyan-400">
              Transformation Workflow
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Enterprise engineering
              transformation lifecycle
            </h2>
          </div>

          <div className="relative mx-auto mt-24 max-w-6xl">
            {/* Line */}
            <div className="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-cyan-400/20 via-cyan-400 to-blue-500/20 lg:block" />

            <div className="grid gap-8 lg:grid-cols-5">
              {timeline.map((step, index) => (
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

      {/* RESULTS DASHBOARD */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass overflow-hidden rounded-[40px] border border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">
              <div>
                <p className="text-sm text-slate-400">
                  Enterprise Transformation Metrics
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Operational Results Dashboard
                </h3>
              </div>

              <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
                Optimized Systems
              </div>
            </div>

            {/* Dashboard */}
            <div className="grid gap-6 p-8 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  label: "Deployment Velocity",
                  value: "10x",
                },
                {
                  label: "Operational Efficiency",
                  value: "78%",
                },
                {
                  label: "Infrastructure Scaling",
                  value: "480%",
                },
                {
                  label: "System Reliability",
                  value: "99.99%",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-sm text-slate-400">
                    {item.label}
                  </p>

                  <h4 className="mt-4 text-5xl font-bold">
                    {item.value}
                  </h4>
                </div>
              ))}
            </div>

            {/* Graph */}
            <div className="px-8 pb-8">
              <div className="flex h-[260px] items-end gap-4">
                {[30, 55, 72, 48, 90, 84, 100].map(
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
                      className="w-full rounded-t-3xl bg-gradient-to-t from-cyan-500 to-blue-500"
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass rounded-[40px] border border-white/10 p-12 text-center md:p-20">
            <p className="text-cyan-400">
              Enterprise Engineering Systems
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Transform enterprise
              infrastructure at scale
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Cloud-native engineering,
              AI automation systems,
              and scalable infrastructure
              optimized for enterprise operations.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
                Start Enterprise Project
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 transition hover:bg-white/[0.05]">
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}