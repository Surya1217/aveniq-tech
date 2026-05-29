"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  Server,
  Globe,
} from "lucide-react";

const cards = [
  {
    title: "Realtime Traffic",
    value: "2.4M",
    icon: Activity,
    position:
      "top-0 left-0 lg:left-10",
  },
  {
    title: "Infrastructure Security",
    value: "Protected",
    icon: Shield,
    position:
      "top-40 right-0 lg:right-20",
  },
  {
    title: "Global Nodes",
    value: "128",
    icon: Globe,
    position:
      "bottom-10 left-10 lg:left-32",
  },
  {
    title: "Cloud Compute",
    value: "94%",
    icon: Server,
    position:
      "bottom-0 right-10 lg:right-32",
  },
];

export default function FloatingDashboardCards() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-cyan-400">
            Intelligent Infrastructure Layer
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Enterprise telemetry visualized
            through intelligent systems
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Advanced infrastructure intelligence,
            distributed analytics, and operational
            telemetry engineered for modern cloud
            platforms.
          </p>
        </div>

        {/* Floating Area */}
        <div className="relative mt-32 h-[800px]">
          {/* Center Dashboard */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="glass absolute left-1/2 top-1/2 z-20 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[40px] border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">
              <div>
                <p className="text-sm text-slate-400">
                  Global Infrastructure
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Operational Intelligence
                </h3>
              </div>

              <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
                Active
              </div>
            </div>

            {/* Graph Area */}
            <div className="p-8">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    label: "Requests",
                    value: "480M",
                  },
                  {
                    label: "Latency",
                    value: "12ms",
                  },
                  {
                    label: "Deployments",
                    value: "142",
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

              {/* Bars */}
              <div className="mt-10 flex h-[220px] items-end gap-4">
                {[40, 70, 55, 95, 65, 85, 100].map(
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

          {/* Floating Cards */}
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
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className={`glass absolute z-30 w-[280px] rounded-[30px] border border-white/10 p-6 ${card.position}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      {card.title}
                    </p>

                    <h4 className="mt-3 text-3xl font-bold">
                      {card.value}
                    </h4>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={28} />
                  </div>
                </div>

                {/* Activity Line */}
                <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}