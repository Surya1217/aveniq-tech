"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const values = [
  {
    title: "Cloud Engineering",
    description:
      "Scalable infrastructure systems designed for enterprise resilience.",
    icon: Cloud,
  },
  {
    title: "Platform Security",
    description:
      "Enterprise-grade security integrated into every deployment layer.",
    icon: ShieldCheck,
  },
  {
    title: "AI Automation",
    description:
      "Intelligent operational systems engineered for scale.",
    icon: BrainCircuit,
  },
  {
    title: "Infrastructure Velocity",
    description:
      "Modern DevOps workflows accelerating engineering delivery.",
    icon: Rocket,
  },
];

const timeline = [
  {
    year: "2026",
    title: "Enterprise Foundation",
    description:
      "Established as a next-generation cloud, DevOps, and AI infrastructure engineering company.",
  },
  {
    year: "2026",
    title: "Cloud Infrastructure Systems",
    description:
      "Expanded enterprise-grade cloud-native deployment and distributed infrastructure operations.",
  },
  {
    year: "2026",
    title: "AI Automation Platform",
    description:
      "Integrated intelligent automation, orchestration systems, and operational AI workflows.",
  },
  {
    year: "2026",
    title: "Global Engineering Operations",
    description:
      "Scaled infrastructure engineering, deployment pipelines, and enterprise cloud platform services globally.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-cyan-400"
            >
              About Aveniq Tech LTD
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl xl:text-[92px]"
            >
              Engineering the future of
              intelligent cloud infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400"
            >
              Aveniq Tech LTD builds enterprise-grade
              cloud platforms, DevOps infrastructure,
              and intelligent automation systems for
              modern digital businesses operating at scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="mb-4 text-cyan-400">
                Our Story
              </p>

              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Building modern infrastructure
                for next-generation platforms
              </h2>
            </div>

            {/* Right */}
            <div className="space-y-8 text-lg leading-9 text-slate-400">
              <p>
                We specialize in scalable cloud-native
                engineering, enterprise infrastructure,
                and intelligent automation systems
                designed for modern operational demands.
              </p>

              <p>
                Our engineering-first philosophy focuses
                on reliability, performance, security,
                and operational excellence across every
                deployment environment.
              </p>

              <p>
                From DevOps pipelines to distributed
                infrastructure and AI orchestration,
                we build resilient systems that power
                modern digital operations globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-cyan-400">
              Engineering Philosophy
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Infrastructure engineered
              for resilience and scale
            </h2>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
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
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -6,
                  }}
                  className="glass group relative overflow-hidden rounded-[30px] p-8"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {value.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Infrastructure Uptime",
                value: "99.99%",
              },
              {
                label: "Global Deployments",
                value: "480+",
              },
              {
                label: "Cloud Regions",
                value: "24",
              },
              {
                label: "Enterprise Clients",
                value: "120+",
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
                className="glass rounded-[30px] p-8 text-center"
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

      {/* Timeline */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-cyan-400">
              Company Evolution
            </p>

            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Scaling infrastructure
              through continuous innovation
            </h2>
          </div>

          <div className="relative mx-auto mt-24 max-w-4xl">
            {/* Line */}
            <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 to-blue-500" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  {/* Dot */}
                  <div className="absolute left-[14px] top-2 h-6 w-6 rounded-full border-4 border-[#050816] bg-cyan-400" />

                  <p className="text-cyan-400">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-400">
                    {item.description}
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
              Enterprise Engineering
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Let’s build scalable cloud
              infrastructure together
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Modern infrastructure systems,
              DevOps automation, and enterprise
              engineering solutions built for scale.
            </p>

            <button className="mt-10 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}