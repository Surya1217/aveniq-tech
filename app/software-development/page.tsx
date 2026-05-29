import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/sections/PageHeader";

export default function SoftwarePage() {
  return (
    <main>
      <Navbar />

      <PageHeader
        title="Enterprise Software Development"
        subtitle="Modern SaaS platforms, APIs, and scalable digital applications."
      />

      <section className="section-padding">
        <div className="container-custom grid gap-6 md:grid-cols-2">
          {[
            "SaaS Platforms",
            "API Development",
            "Microservices",
            "React & Next.js",
            "Node.js Systems",
            "AI Integrations",
          ].map((item) => (
            <div
              key={item}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}