import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000"
  ),

  title: {
    default:
      "AveniqTech — Enterprise Infrastructure Engineering",
    template: "%s | AveniqTech",
  },

  description:
    "Enterprise infrastructure engineering, DevOps, cloud platforms, AI automation, and scalable software systems.",

  openGraph: {
    title:
      "AveniqTech — Enterprise Infrastructure Engineering",

    description:
      "Enterprise infrastructure engineering, DevOps, cloud platforms, AI automation, and scalable software systems.",

    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#050816] text-white antialiased`}
      >
        <header>
          <Navbar />
        </header>

        <main className="relative overflow-hidden pt-20">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>

        <Analytics />
      </body>
    </html>
  );
}