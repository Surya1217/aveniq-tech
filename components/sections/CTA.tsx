"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 bg-cyan-500/10 blur-[140px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-[40px] p-10 md:p-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            {/* Small Label */}
            <p className="mb-4 text-cyan-400">
              Build Modern Digital Infrastructure
            </p>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Accelerate engineering delivery with
              scalable cloud-native solutions
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Partner with Aveniq Tech LTD to build
              resilient software platforms, modern DevOps
              pipelines, and enterprise cloud infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
                Start Your Project
                <ArrowRight size={18} />
              </button>

              <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur transition hover:bg-white/10">
                Schedule Consultation
              </button>
            </div>

            {/* Newsletter */}
            <div className="mt-16">
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-slate-500">
                Subscribe to infrastructure insights
              </p>

              <form className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white outline-none backdrop-blur placeholder:text-slate-500"
                />

                <button
                  type="submit"
                  className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default React.memo(CTA);