"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "@/lib/animations/motion";

const testimonials = [
  {
    name: "Daniel Foster",
    role: "CTO • FinTech Platform",
    feedback:
      "Aveniq Tech LTD transformed our cloud infrastructure and reduced deployment times dramatically.",
  },
  {
    name: "Sarah Mitchell",
    role: "Engineering Director • SaaS Company",
    feedback:
      "Their DevOps expertise helped us scale infrastructure reliably across multiple environments.",
  },
  {
    name: "James Carter",
    role: "Product Lead • Enterprise Platform",
    feedback:
      "Exceptional engineering quality, modern cloud-native practices, and outstanding delivery execution.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 h-[300px] w-[300px] bg-cyan-500/10 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-cyan-400">
            Trusted Engineering Partner
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Trusted by modern businesses
            building at scale
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Delivering cloud-native engineering,
            DevOps automation, and scalable digital
            infrastructure for ambitious organizations.
          </p>
        </div>

        {/* Testimonial Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -5,
              }}
              className="glass rounded-3xl p-8 transition"
            >
              {/* Quote */}
              <div className="text-lg leading-8 text-slate-300">
                “{item.feedback}”
              </div>

              {/* Divider */}
              <div className="mt-8 h-px w-full bg-white/10" />

              {/* User */}
              <div className="mt-6 flex items-center gap-4">
                {/* Avatar */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-lg font-bold text-cyan-400">
                  {item.name.charAt(0)}
                </div>

                {/* Details */}
                <div>
                  <div className="font-semibold">
                    {item.name}
                  </div>

                  <div className="text-sm text-slate-400">
                    {item.role}
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="mt-8 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}