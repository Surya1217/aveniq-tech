"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  Activity,
  Cloud,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const stats = [
  {
    title: "99.99%",
    subtitle: "Infrastructure Uptime",
    icon: Activity,
  },
  {
    title: "50+",
    subtitle: "Cloud Deployments",
    icon: Cloud,
  },
  {
    title: "24/7",
    subtitle: "Monitoring & Support",
    icon: ShieldCheck,
  },
  {
    title: "10x",
    subtitle: "Faster Deployments",
    icon: Rocket,
  },
];

function Stats() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 bg-cyan-500/10 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-cyan-400">
            Infrastructure Metrics
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Engineered for reliability,
            scalability, and performance
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Modern cloud-native engineering optimized for
            enterprise-scale systems and mission-critical
            infrastructure.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                }}
                className="glass group rounded-3xl p-8 transition"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-500/20">
                  <Icon size={24} />
                </div>

                {/* Number */}
                <div className="mt-8 text-5xl font-bold">
                  {stat.title}
                </div>

                {/* Label */}
                <div className="mt-3 text-slate-400">
                  {stat.subtitle}
                </div>

                {/* Bottom Glow Line */}
                <div className="mt-8 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Stats;