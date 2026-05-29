"use client";

import { motion } from "framer-motion";
import React from "react";

const technologies = [
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Jenkins",
  "GitHub Actions",
  "React",
  "Next.js",
  "Node.js",
  "Python",
];

function TechStack() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-blue-500/10 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-cyan-400">
            Modern Technology Stack
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Cloud-native technologies powering
            modern digital platforms
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            We leverage enterprise-grade cloud and
            software technologies to build scalable,
            resilient, and high-performance systems.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
              }}
              className="glass group rounded-3xl p-8 text-center transition"
            >
              {/* Tech Icon Placeholder */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl font-bold text-cyan-400 transition group-hover:bg-cyan-500/20">
                {tech.charAt(0)}
              </div>

              {/* Tech Name */}
              <h3 className="mt-6 text-2xl font-semibold">
                {tech}
              </h3>

              {/* Glow Line */}
              <div className="mx-auto mt-6 h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default React.memo(TechStack);