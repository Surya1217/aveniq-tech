import Link from "next/link";

const platformLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

const infrastructureLinks = [
  {
    label: "DevOps",
    href: "/devops",
  },
  {
    label: "Cloud Infrastructure",
    href: "/cloud",
  },
  {
    label: "AI Systems",
    href: "/ai",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

const contactLinks = [
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "enterprise@aveniqtech.com",
    href: "#",
  },
  {
    label: "London, United Kingdom",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="container-custom relative z-10 py-24">
        <div className="grid gap-16 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold tracking-[-0.04em]">
              <span className="text-white">
                Aveniq
              </span>

              <span className="text-cyan-400">
                Tech
              </span>
            </h2>

            <p className="mt-8 max-w-sm text-lg leading-8 text-slate-400">
              Enterprise infrastructure engineering,
              AI automation systems, and scalable
              cloud-native operational platforms.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold">
              Platform
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              {platformLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Infrastructure */}
          <div>
            <h3 className="text-lg font-semibold">
              Infrastructure
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              {infrastructureLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 AveniqTech. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}