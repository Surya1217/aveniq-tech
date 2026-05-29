"use client";

import { motion } from "framer-motion";
import React from "react";

const logs = [
  "$ kubectl apply -f production.yaml",
  "deployment.apps/api-service configured",
  "service/api-service unchanged",
  "ingress.networking configured",
  "Running infrastructure validation...",
  "CI pipeline completed successfully",
  "Deploying production containers...",
  "Production release operational",
];
function TerminalWindow() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 bg-cyan-500/10 blur-[180px]" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-cyan-400">
              Infrastructure Automation
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Deploy cloud infrastructure
              with automated workflows
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Advanced CI/CD orchestration,
              infrastructure automation, and
              deployment pipelines engineered for
              enterprise cloud environments.
            </p>

            {/* Feature List */}
            <div className="mt-10 space-y-5">
              {[
                "Kubernetes orchestration",
                "Automated deployment pipelines",
                "Infrastructure monitoring",
                "Cloud-native scaling systems",
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

          {/* Terminal */}
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
            className="glass relative overflow-hidden rounded-[32px] border border-white/10"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <p className="text-sm text-slate-500">
                production-terminal
              </p>
            </div>

            {/* Terminal Body */}
            <div className="space-y-4 p-8 font-mono text-sm">
              {logs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="text-cyan-400">
                    ➜
                  </span>

                  <span
                    className={`${
                      log.startsWith("$")
                        ? "text-cyan-300"
                        : "text-slate-400"
                    }`}
                  >
                    {log}
                  </span>
                </motion.div>
              ))}

              {/* Blinking Cursor */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="mt-6 flex items-center gap-2"
              >
                <span className="text-cyan-400">
                  ➜
                </span>

                <div className="h-5 w-3 bg-cyan-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default React.memo(TerminalWindow);