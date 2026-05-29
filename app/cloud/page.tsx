"use client";

import { motion } from "framer-motion";

import {
  Globe,
  Cloud,
  Database,
  ShieldCheck,
  Server,
  Activity,
} from "lucide-react";

const services = [
  {
    title: "Global Infrastructure",
    description:
      "Distributed multi-region cloud systems engineered for enterprise resilience.",
    icon: Globe,
  },
  {
    title: "Cloud Architecture",
    description:
      "Scalable cloud-native infrastructure optimized for operational performance.",
    icon: Cloud,
  },
  {
    title: "Distributed Databases",
    description:
      "High-availability enterprise data systems with global redundancy architecture.",
    icon: Database,
  },
  {
    title: "Infrastructure Security",
    description:
      "Enterprise-grade cloud security and compliance systems.",
    icon: ShieldCheck,
  },
  {
    title: "Compute Scaling",
    description:
      "Elastic cloud compute infrastructure optimized for global operations.",
    icon: Server,
  },
  {
    title: "Realtime Monitoring",
    description:
      "Advanced telemetry, observability, and operational intelligence systems.",
    icon: Activity,
  },
];

const regions = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Middle East",
  "South America",
  "Australia",
];

export default function CloudPage() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="section-padding relative overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-cyan-400"
            >
              Enterprise Cloud Infrastructure
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl xl:text-[92px]"
            >
              Global cloud systems
              engineered for resilience
              and scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400"
            >
              Distributed cloud-native infrastructure,
              enterprise scaling systems, global
              deployment architecture, and advanced
              infrastructure engineering for modern platforms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-cyan-400">
              Infrastructure Solutions
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Enterprise cloud systems
              designed for global operations
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

      {/* GLOBAL NETWORK */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="mb-4 text-cyan-400">
                Global Infrastructure Network
              </p>

              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Multi-region infrastructure
                powering global operations
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-400">
                Distributed infrastructure systems
                optimized for enterprise resilience,
                cloud scalability, and realtime
                operational continuity across regions.
              </p>

              {/* Regions */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="glass flex items-center gap-4 rounded-2xl p-5"
                  >
                    <div className="h-3 w-3 rounded-full bg-cyan-400" />

                    <p className="text-slate-300">
                      {region}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
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
              className="glass relative overflow-hidden rounded-[40px] border border-white/10 p-10"
            >
              {/* Rings */}
              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

              <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/5" />

              {/* Core */}
              <div className="relative z-10 mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10">
                <div className="text-center">
                  <h3 className="text-3xl font-bold">
                    Global
                  </h3>

                  <p className="mt-2 text-sm text-cyan-300">
                    Cloud Core
                  </p>
                </div>
              </div>

              {/* Nodes */}
              <div className="relative mt-16 grid grid-cols-2 gap-6">
                {[
                  "London",
                  "New York",
                  "Singapore",
                  "Tokyo",
                ].map((city, index) => (
                  <motion.div
                    key={city}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="glass rounded-3xl border border-white/10 p-6 text-center"
                  >
                    <div className="mx-auto h-3 w-3 rounded-full bg-cyan-400" />

                    <p className="mt-4 text-lg font-medium">
                      {city}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLOUD DASHBOARD */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass overflow-hidden rounded-[40px] border border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">
              <div>
                <p className="text-sm text-slate-400">
                  Operational Infrastructure
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Global Cloud Dashboard
                </h3>
              </div>

              <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
                All Systems Operational
              </div>
            </div>

            {/* Metrics */}
            <div className="grid gap-6 p-8 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  label: "Global Regions",
                  value: "24",
                },
                {
                  label: "Infrastructure Nodes",
                  value: "128+",
                },
                {
                  label: "Monthly Requests",
                  value: "480M",
                },
                {
                  label: "Operational Uptime",
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
                {[30, 50, 72, 55, 90, 75, 100].map(
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
              Enterprise Cloud Engineering
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Engineer resilient cloud
              infrastructure at global scale
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Distributed infrastructure systems,
              scalable cloud architecture, and
              enterprise engineering optimized
              for global operational resilience.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
                Schedule Infrastructure Call
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 transition hover:bg-white/[0.05]">
                Explore Cloud Systems
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}