"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import React from "react";
import {
  fadeUp,
  staggerContainer,
} from "@/lib/animations/motion";

function Services() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="mb-4 text-cyan-400">Services</p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Enterprise Engineering Solutions
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} 
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.6}}
                className="glass group relative overflow-hidden rounded-3xl p-8 transition duration-500 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-cyan-500/5 group-hover:to-blue-500/10" /> 
                <div className="elative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Icon />
                </div>

                <h3 className="relative z-10 mt-6 text-2xl font-semibold transition group-hover:text-cyan-300">
                  {service.title}
                </h3>

                <p className="relative z-10 mt-4 text-slate-400">
                  {service.description}
                </p>

                <button className="relative z-10 mt-8 flex items-center gap-2 text-cyan-400 transition group-hover:translate-x-1">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
export default React.memo(Services);