"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

const contactCards = [
  {
    title: "Enterprise Email",
    value: "enterprise@aveniqtech.com",
    icon: Mail,
  },
  {
    title: "Infrastructure Support",
    value: "+44 20 4000 2026",
    icon: Phone,
  },
  {
    title: "Operations Office",
    value: "London, United Kingdom",
    icon: MapPin,
  },
  {
    title: "Operational Availability",
    value: "24/7 Infrastructure Monitoring",
    icon: Clock3,
  },
];

export default function ContactPage() {
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
              Enterprise Contact System
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl xl:text-[92px]"
            >
              Let’s engineer scalable
              infrastructure together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400"
            >
              Connect with our engineering team to
              discuss cloud infrastructure, DevOps
              automation, AI systems, and enterprise
              platform engineering solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
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
                  className="glass rounded-[30px] p-8"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {card.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid gap-20 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="mb-4 text-cyan-400">
                Enterprise Consultation
              </p>

              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Build infrastructure
                engineered for scale
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-400">
                Our engineering specialists help
                organizations modernize infrastructure,
                optimize cloud operations, and build
                intelligent enterprise systems.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-5">
                {[
                  "Cloud-native infrastructure",
                  "DevOps automation systems",
                  "AI workflow orchestration",
                  "Enterprise security architecture",
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

            {/* Form */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="glass rounded-[40px] border border-white/10 p-8 md:p-10"
            >
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="mb-3 block text-sm text-slate-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-cyan-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-3 block text-sm text-slate-300">
                    Enterprise Email
                  </label>

                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-cyan-400"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="mb-3 block text-sm text-slate-300">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-cyan-400"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="mb-3 block text-sm text-slate-300">
                    Service Interest
                  </label>

                  <select className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-cyan-400">
                    <option>
                      Cloud Infrastructure
                    </option>

                    <option>
                      DevOps Engineering
                    </option>

                    <option>
                      AI Automation
                    </option>

                    <option>
                      Infrastructure Security
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-3 block text-sm text-slate-300">
                    Project Requirements
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your infrastructure requirements..."
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-cyan-400"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:bg-cyan-400"
                >
                  Submit Enterprise Inquiry

                  <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass rounded-[40px] border border-white/10 p-12 text-center md:p-20">
            <p className="text-cyan-400">
              Infrastructure Modernization
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Accelerate enterprise
              engineering transformation
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Modern DevOps systems, scalable
              infrastructure, and intelligent
              automation engineered for modern
              enterprise operations.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
                Schedule Consultation
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 transition hover:bg-white/[0.05]">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}