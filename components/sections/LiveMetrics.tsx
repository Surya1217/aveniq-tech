"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Activity,
  Zap,
} from "lucide-react";

const metrics = [
  {
    title: "Global Requests",
    value: 480,
    suffix: "M+",
    description:
      "Monthly infrastructure requests processed.",
    icon: Globe,
  },
  {
    title: "Infrastructure Nodes",
    value: 128,
    suffix: "+",
    description:
      "Distributed cloud infrastructure systems.",
    icon: Server,
  },
  {
    title: "Realtime Events",
    value: 96,
    suffix: "K",
    description:
      "Operational telemetry events per minute.",
    icon: Activity,
  },
  {
    title: "Deployment Velocity",
    value: 142,
    suffix: "%",
    description:
      "CI/CD deployment performance optimization.",
    icon: Zap,
  },
];

export default function LiveMetrics() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 bg-cyan-500/10 blur-[160px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-cyan-400">
            Live Platform Telemetry
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Enterprise-scale infrastructure
            operating globally
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Real-time cloud telemetry, deployment
            analytics, and distributed infrastructure
            performance monitoring.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.title}
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
                className="glass group relative overflow-hidden rounded-[30px] p-8 transition duration-500 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-cyan-500/5 group-hover:to-blue-500/10" />

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={30} />
                </div>

                {/* Counter */}
                <div className="relative z-10 mt-10">
                  <h3 className="text-5xl font-bold tracking-tight">
                    <CountUp
                      end={metric.value}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {metric.suffix}
                  </h3>

                  <p className="mt-4 text-xl font-semibold">
                    {metric.title}
                  </p>

                  <p className="mt-4 leading-7 text-slate-400">
                    {metric.description}
                  </p>
                </div>

                {/* Decorative Border */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}