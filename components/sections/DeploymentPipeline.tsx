
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Hammer,
  ShieldCheck,
  Rocket,
  Activity,
} from "lucide-react";

const pipeline = [
  {
    title: "Code",
    icon: Code2,
    description:
      "Modern cloud-native application development.",
  },
  {
    title: "Build",
    icon: Hammer,
    description:
      "Automated CI/CD build pipelines and containers.",
  },
  {
    title: "Test",
    icon: ShieldCheck,
    description:
      "Integrated security and infrastructure validation.",
  },
  {
    title: "Deploy",
    icon: Rocket,
    description:
      "Multi-region production deployment systems.",
  },
  {
    title: "Monitor",
    icon: Activity,
    description:
      "Enterprise observability and analytics monitoring.",
  },
];

export default function DeploymentPipeline() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 blur-[180px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-cyan-400">
            Continuous Delivery Infrastructure
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Automated deployment pipelines
            engineered for scale
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Enterprise-grade CI/CD systems enabling
            rapid deployment, infrastructure resilience,
            and operational excellence.
          </p>
        </div>

        {/* Pipeline */}
        <div className="relative mt-24">
          {/* Connection Line */}
          <div className="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-blue-500/20 lg:block" />

          <div className="grid gap-8 lg:grid-cols-5">
            {pipeline.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
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
                  className="glass group relative overflow-hidden rounded-[28px] p-8 text-center transition duration-500 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-cyan-500/5 group-hover:to-blue-500/10" />

                  {/* Step Number */}
                  <div className="absolute right-4 top-4 text-sm text-slate-500">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={36} />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 mt-8 text-2xl font-bold">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-4 leading-7 text-slate-400">
                    {step.description}
                  </p>

                  {/* Status */}
                  <div className="relative z-10 mt-8 flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />

                    <span className="text-sm text-emerald-400">
                      Operational
                    </span>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}