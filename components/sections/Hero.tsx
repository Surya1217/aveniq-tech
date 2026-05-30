"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Cloud,
  Server,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40 xl:py-48">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
      >
        <div className="absolute left-0 top-0 h-[400px] w-[400px] bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-blue-500/20 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container-custom grid min-h-[90vh] items-center gap-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Cloud • DevOps • Platform Engineering
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl xl:text-[92px]">
            Engineering

            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Scalable Digital Infrastructure
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            Enterprise-grade software, DevOps,
            cloud, and AI engineering solutions
            designed for modern businesses
            building at scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              aria-label="Get started with Aveniq Tech"
              className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Get Started

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              aria-label="Book a consultation"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur transition hover:bg-white/10"
            >
              Book Consultation
            </button>
          </div>

          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <div className="text-3xl font-bold">
                99.99%
              </div>

              <div className="mt-1 text-sm text-slate-300">
                Infrastructure Uptime
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold">
                50+
              </div>

              <div className="mt-1 text-sm text-slate-300">
                Cloud Deployments
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold">
                24/7
              </div>

              <div className="mt-1 text-sm text-slate-300">
                Monitoring & Support
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="glass rounded-[32px] p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  Infrastructure Overview
                </h2>

                <p className="mt-1 text-sm text-slate-300">
                  Cloud-native deployment
                  architecture
                </p>
              </div>

              <Activity
                className="text-cyan-400"
                aria-hidden="true"
              />
            </div>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Kubernetes Cluster",
                  icon: Server,
                },
                {
                  title: "Cloud Infrastructure",
                  icon: Cloud,
                },
                {
                  title: "Security Monitoring",
                  icon: ShieldCheck,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/30 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          aria-hidden="true"
                          className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400"
                        >
                          <Icon size={20} />
                        </div>

                        <div>
                          <div className="font-medium">
                            {item.title}
                          </div>

                          <div className="text-sm text-slate-300">
                            Operational
                          </div>
                        </div>
                      </div>

                      <div className="h-2 w-24 rounded-full bg-slate-800">
                        <div className="h-2 w-20 rounded-full bg-cyan-400" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-300">
                    Active Infrastructure Nodes
                  </div>

                  <div className="mt-2 text-4xl font-bold">
                    124
                  </div>
                </div>

                <div className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
                  Healthy
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -bottom-8 -left-6 hidden rounded-2xl border border-white/10 bg-[#0B1120]/90 p-5 backdrop-blur-xl xl:block"
          >
            <div className="text-sm text-slate-300">
              Deployment Speed
            </div>

            <div className="mt-2 text-3xl font-bold text-cyan-400">
              10x Faster
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}