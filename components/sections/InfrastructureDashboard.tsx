"use client";

import { motion } from "framer-motion";
import {
  Server,
  Activity,
  Shield,
  Cpu,
} from "lucide-react";

const metrics = [
  {
    label: "API Uptime",
    value: "99.99%",
    icon: Activity,
  },
  {
    label: "Infrastructure Nodes",
    value: "128",
    icon: Server,
  },
  {
    label: "Threat Protection",
    value: "Active",
    icon: Shield,
  },
  {
    label: "CPU Optimization",
    value: "94%",
    icon: Cpu,
  },
];

export default function InfrastructureDashboard() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] bg-cyan-500/10 blur-[140px]" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-cyan-400">
              Infrastructure Intelligence
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Operate cloud systems with
              enterprise-grade visibility
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Advanced observability, deployment
              monitoring, and infrastructure analytics
              designed for modern engineering teams.
            </p>

            {/* Metrics */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <motion.div
                    key={metric.label}
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
                    whileHover={{
                      y: -4,
                    }}
                    className="glass rounded-3xl p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                        <Icon size={24} />
                      </div>

                      <div>
                        <p className="text-sm text-slate-400">
                          {metric.label}
                        </p>

                        <h3 className="mt-1 text-2xl font-bold">
                          {metric.value}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dashboard UI */}
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
            className="glass relative overflow-hidden rounded-[36px] border border-white/10 p-8"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-sm text-slate-400">
                  Production Environment
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Infrastructure Dashboard
                </h3>
              </div>

              <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
                Operational
              </div>
            </div>

            {/* Graph */}
            <div className="mt-10">
              <div className="flex items-end gap-4">
                {[40, 70, 55, 90, 65, 85, 100].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="w-full rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-500"
                    />
                  ),
                )}
              </div>

              <div className="mt-4 flex justify-between text-xs text-slate-500">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Bottom Metrics */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                {
                  label: "Latency",
                  value: "12ms",
                },
                {
                  label: "Deployments",
                  value: "142",
                },
                {
                  label: "Availability",
                  value: "99.99%",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-sm text-slate-400">
                    {item.label}
                  </p>

                  <h4 className="mt-2 text-xl font-bold">
                    {item.value}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}