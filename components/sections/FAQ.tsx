"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import React from "react";
const faqs = [
  {
    question: "What cloud platforms do you support?",
    answer:
      "We work with AWS, Azure, and Google Cloud Platform, delivering scalable and secure cloud-native infrastructure solutions.",
  },
  {
    question: "Do you provide ongoing DevOps support?",
    answer:
      "Yes. We provide continuous infrastructure monitoring, CI/CD optimization, platform engineering, and operational support.",
  },
  {
    question: "Can you modernize legacy systems?",
    answer:
      "Absolutely. We help organizations migrate legacy applications into scalable cloud-native architectures and modern platforms.",
  },
  {
    question: "Do you build custom SaaS platforms?",
    answer:
      "Yes. We design and engineer enterprise-grade SaaS applications using modern technologies like React, Next.js, Node.js, and cloud infrastructure.",
  },
  {
    question: "How secure are your infrastructure solutions?",
    answer:
      "Security is integrated throughout our engineering lifecycle including infrastructure hardening, observability, IAM, and compliance automation.",
  },
];

function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-cyan-500/10 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-cyan-400">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Common questions about our
            engineering services
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Everything you need to know about our
            DevOps, cloud infrastructure, and software
            engineering solutions.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-20 max-w-4xl space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={faq.question}
                layout
                className="glass overflow-hidden rounded-3xl"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-8 text-left"
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <div className="text-cyan-400">
                    {isOpen ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="px-8 pb-8 text-slate-400 leading-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default React.memo(FAQ);