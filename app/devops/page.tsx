"use client";

import { motion } from "framer-motion";

import {
  Workflow,
  Server,
  Activity,
  ShieldCheck,
  Cloud,
  Cpu,
} from "lucide-react";

const services = [
  {
    title: "CI/CD Automation",
    description:
      "Automated deployment pipelines engineered for rapid enterprise delivery.",
    icon: Workflow,
  },
  {
    title: "Kubernetes Orchestration",
    description:
      "Scalable container orchestration systems for cloud-native infrastructure.",
    icon: Server,
  },
  {
    title: "Observability Systems",
    description:
      "Realtime infrastructure monitoring, telemetry, and operational intelligence.",
    icon: Activity,
  },
  {
    title: "Infrastructure Security",
    description:
      "Integrated enterprise-grade security across deployment environments.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Distributed multi-region infrastructure optimized for resilience and scale.",
    icon: Cloud,
  },
  {
    title: "Automation Workflows",
    description:
      "Infrastructure-as-code and intelligent operational automation systems.",
    icon: Cpu,
  },
];

const workflow = [
  "Source Control",
  "CI Pipeline",
  "Container Build",
  "Kubernetes Deploy",
  "Infrastructure Monitoring",
  "Global Operations",
];

export default function DevOpsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="section-padding relative overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[200px]" />

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-cyan-400"
            >
              Enterprise DevOps Engineering
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl xl:text-[92px]"
            >
              Cloud-native DevOps
              infrastructure engineered
              for scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400"
            >
              Enterprise-grade CI/CD automation,
              Kubernetes orchestration, infrastructure
              observability, and scalable DevOps
              systems for modern engineering teams.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-cyan-400">
              Infrastructure Automation
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Engineering operational
              infrastructure systems
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
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
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {service.description}
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

      {/* CI/CD PIPELINE */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-cyan-400">
              Deployment Architecture
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Automated CI/CD workflows
              for enterprise delivery
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

      {/* KUBERNETES DASHBOARD */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="mb-4 text-cyan-400">
                Kubernetes Operations
              </p>

              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Distributed infrastructure
                optimized for resilience
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-400">
                Enterprise Kubernetes architecture,
                scalable container orchestration,
                realtime observability, and cloud-native
                deployment systems designed for modern
                infrastructure operations.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-5">
                {[
                  "Multi-region deployment systems",
                  "Infrastructure-as-code automation",
                  "Container orchestration pipelines",
                  "Enterprise observability architecture",
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

            {/* Dashboard */}
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
                    Cluster Operations
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Kubernetes Dashboard
                  </h3>
                </div>

                <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
                  Operational
                </div>
              </div>

              {/* Metrics */}
              <div className="grid gap-6 p-8 md:grid-cols-2">
                {[
                  {
                    label: "Active Clusters",
                    value: "24",
                  },
                  {
                    label: "Containers",
                    value: "480+",
                  },
                  {
                    label: "Deployment Success",
                    value: "99.99%",
                  },
                  {
                    label: "Global Nodes",
                    value: "128",
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

              {/* Graph */}
              <div className="px-8 pb-8">
                <div className="flex h-[220px] items-end gap-4">
                  {[35, 60, 48, 92, 66, 88, 100].map(
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass rounded-[40px] border border-white/10 p-12 text-center md:p-20">
            <p className="text-cyan-400">
              Enterprise DevOps Systems
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Modernize infrastructure
              with scalable DevOps systems
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Cloud-native infrastructure,
              Kubernetes automation, and
              enterprise deployment systems
              engineered for operational scale.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
                Schedule Consultation
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 transition hover:bg-white/[0.05]">
                Explore Infrastructure
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}