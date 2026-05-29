"use client";

import { motion } from "framer-motion";

import {
  Globe,
  BrainCircuit,
  Workflow,
  ShieldCheck,
  Rocket,
  Users,
} from "lucide-react";

const positions = [
  {
    title: "Senior DevOps Engineer",
    location: "Remote • UK",
    type: "Full-time",
    description:
      "Build scalable Kubernetes infrastructure and enterprise CI/CD systems.",
  },
  {
    title: "Cloud Infrastructure Architect",
    location: "Remote • UK",
    type: "Full-time",
    description:
      "Design distributed multi-region cloud systems for enterprise platforms.",
  },
  {
    title: "AI Automation Engineer",
    location: "Remote • UK",
    type: "Full-time",
    description:
      "Develop intelligent workflow automation and AI orchestration systems.",
  },
  {
    title: "Platform Reliability Engineer",
    location: "Remote • UK",
    type: "Full-time",
    description:
      "Optimize infrastructure observability, uptime, and operational resilience.",
  },
];

const culture = [
  {
    title: "Global Engineering",
    description:
      "Distributed infrastructure teams collaborating across modern cloud environments.",
    icon: Globe,
  },
  {
    title: "AI Innovation",
    description:
      "Engineering intelligent automation systems shaping modern enterprise operations.",
    icon: BrainCircuit,
  },
  {
    title: "Operational Excellence",
    description:
      "Building scalable DevOps systems optimized for resilience and performance.",
    icon: Workflow,
  },
  {
    title: "Infrastructure Security",
    description:
      "Enterprise-grade engineering focused on reliability and operational trust.",
    icon: ShieldCheck,
  },
];

const hiringSteps = [
  "Application Review",
  "Technical Assessment",
  "Engineering Interview",
  "Infrastructure Discussion",
  "Team Collaboration",
  "Final Offer",
];

export default function CareersPage() {
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
              Enterprise Engineering Careers
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl xl:text-[92px]"
            >
              Build the future of
              intelligent infrastructure
              systems
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400"
            >
              Join a distributed engineering team
              building enterprise cloud platforms,
              AI automation systems, and scalable
              infrastructure powering modern operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-cyan-400">
              Engineering Culture
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Building infrastructure
              with modern engineering teams
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {culture.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={30} />
                  </div>

                  <div className="relative z-10 mt-8">
                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-cyan-400">
              Open Positions
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Join our infrastructure
              engineering team
            </h2>
          </div>

          <div className="mt-20 space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
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
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className="glass flex flex-col gap-8 rounded-[36px] border border-white/10 p-8 lg:flex-row lg:items-center lg:justify-between"
              >
                {/* Left */}
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-3xl font-bold">
                      {position.title}
                    </h3>

                    <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                      {position.type}
                    </div>
                  </div>

                  <p className="mt-3 text-slate-400">
                    {position.location}
                  </p>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                    {position.description}
                  </p>
                </div>

                {/* Button */}
                <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING WORKFLOW */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="mb-4 text-cyan-400">
                Engineering Environment
              </p>

              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Infrastructure teams
                optimized for innovation
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-400">
                Collaborate with distributed engineering
                teams building cloud-native platforms,
                AI orchestration systems, and enterprise
                operational infrastructure.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-5">
                {[
                  "Remote-first engineering culture",
                  "Enterprise cloud infrastructure systems",
                  "AI automation engineering workflows",
                  "Scalable DevOps operations",
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

            {/* Right Dashboard */}
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
                    Engineering Operations
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Team Infrastructure
                  </h3>
                </div>

                <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
                  Hiring Active
                </div>
              </div>

              {/* Metrics */}
              <div className="grid gap-6 p-8 md:grid-cols-2">
                {[
                  {
                    label: "Global Engineers",
                    value: "48+",
                  },
                  {
                    label: "Cloud Regions",
                    value: "24",
                  },
                  {
                    label: "Infrastructure Projects",
                    value: "120+",
                  },
                  {
                    label: "Remote Operations",
                    value: "100%",
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

              {/* Team Visualization */}
              <div className="flex items-center justify-center gap-6 px-8 pb-10">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <motion.div
                    key={item}
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10"
                  >
                    <Users className="text-cyan-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-cyan-400">
              Hiring Workflow
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Transparent engineering
              recruitment process
            </h2>
          </div>

          <div className="relative mx-auto mt-24 max-w-6xl">
            {/* Line */}
            <div className="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-cyan-400/20 via-cyan-400 to-blue-500/20 lg:block" />

            <div className="grid gap-8 lg:grid-cols-6">
              {hiringSteps.map((step, index) => (
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
                    delay: index * 0.08,
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
              Enterprise Engineering Careers
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Build the future of
              cloud infrastructure systems
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Join distributed engineering teams
              building intelligent infrastructure,
              AI automation systems, and scalable
              enterprise cloud platforms.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
                Explore Open Positions
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 transition hover:bg-white/[0.05]">
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}