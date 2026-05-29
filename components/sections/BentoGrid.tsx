"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  ShieldCheck,
  Activity,
  Database,
} from "lucide-react";

const cards = [
  {
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud-native architecture optimized for modern enterprise workloads.",
    icon: Cloud,
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Security & Compliance",
    description:
      "Enterprise-grade security integrated into every deployment pipeline.",
    icon: ShieldCheck,
    className: "",
  },
  {
    title: "Real-time Monitoring",
    description:
      "Advanced observability and infrastructure monitoring systems.",
    icon: Activity,
    className: "",
  },
  {
    title: "Distributed Databases",
    description:
      "Highly available data platforms engineered for scale and resilience.",
    icon: Database,
    className: "lg:col-span-2",
  },
];

export default function BentoGrid() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 bg-cyan-500/10 blur-[140px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-cyan-400">
            Enterprise Infrastructure Platform
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Engineered for modern
            cloud-native systems
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Advanced infrastructure architecture,
            resilient deployment systems, and
            enterprise-scale engineering platforms.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid auto-rows-[260px] gap-6 lg:grid-cols-3">
          {cards.map((card, index) => {
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
                className={`glass group relative overflow-hidden rounded-[32px] p-8 transition duration-500 hover:border-cyan-400/30 hover:bg-white/[0.05] ${card.className}`}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-cyan-500/5 group-hover:to-blue-500/10" />

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={28} />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-3xl font-bold">
                    {card.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-8 text-slate-400">
                    {card.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60" />

                {/* Decorative Circle */}
                <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full border border-cyan-400/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}