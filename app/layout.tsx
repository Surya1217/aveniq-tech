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
  // your existing metadata
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
        <Navbar />

        <main className="relative overflow-hidden pt-20">
          {children}
        </main>

        <Footer />

        {/* Analytics goes here */}
        <Analytics />
      </body>
    </html>
  );
}