"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "DevOps", href: "/devops" },
  { name: "Cloud", href: "/cloud" },
  { name: "Software", href: "/software-development" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="container-custom flex items-center justify-between py-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide"
          aria-label="Aveniq Tech Home"
        >
          Aveniq Tech LTD
        </Link>

        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Book a consultation"
          className="hidden rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400 lg:block"
        >
          Book Consultation
        </button>

        <button
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#050816]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-custom flex flex-col py-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-4 text-slate-300 transition hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}

              <button
                aria-label="Book a consultation"
                className="mt-6 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-black"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}