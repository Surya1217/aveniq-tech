import dynamic from "next/dynamic";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

import BackgroundEffects from "@/components/effects/BackgroundEffects";
import FloatingParticles from "@/components/effects/FloatingParticles";
import ParallaxBackground from "@/components/effects/ParallaxBackground";

/* LAZY LOADED */
const BentoGrid = dynamic(
  () => import("@/components/sections/BentoGrid"),
);

const DeploymentPipeline = dynamic(
  () =>
    import(
      "@/components/sections/DeploymentPipeline"
    ),
);

const GlobalNetwork = dynamic(
  () =>
    import(
      "@/components/sections/GlobalNetwork"
    ),
);

const AIAutomation = dynamic(
  () =>
    import(
      "@/components/sections/AIAutomation"
    ),
);

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* EFFECTS */}
      <BackgroundEffects />
      <ParallaxBackground />
      <FloatingParticles />

      {/* CORE */}
      <Hero />
      <Services />
      <Stats />

      {/* PREMIUM */}
      <BentoGrid />
      <DeploymentPipeline />
      <GlobalNetwork />
      <AIAutomation />

      {/* CONTENT */}
      <TechStack />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}