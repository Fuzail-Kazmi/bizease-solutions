import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Link from "next/link";
import { Target, Link as LinkIcon, TrendingUp, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Bizease Solutions — All Business Needs Under One Roof",
  description:
    "Bizease Solutions is a leading B2B business solutions provider offering IT consulting, digital marketing, business strategy, software development, HR & operations, and financial advisory.",
};

const whyUs = [
  {
    id: "why-expert",
    icon: <Target className="w-8 h-8 text-[var(--color-green-dark)]" />,
    title: "Deep Expertise",
    desc: "Senior-level specialists across every domain — from tech to finance to marketing.",
  },
  {
    id: "why-unified",
    icon: <LinkIcon className="w-8 h-8 text-[var(--color-green-dark)]" />,
    title: "Unified Partnership",
    desc: "One team, one relationship, every service you need. No juggling multiple vendors.",
  },
  {
    id: "why-results",
    icon: <TrendingUp className="w-8 h-8 text-[var(--color-green-dark)]" />,
    title: "Results-Driven",
    desc: "We measure success by your growth — tangible KPIs, not just deliverables.",
  },
  {
    id: "why-agile",
    icon: <Zap className="w-8 h-8 text-[var(--color-green-dark)]" />,
    title: "Agile Execution",
    desc: "Fast turnarounds with rigorous quality standards, powered by proven frameworks.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Why Choose Us */}
      <section className="section-padding bg-[var(--color-cream)]" aria-labelledby="why-us-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div>
              <span className="inline-block font-display font-500 text-[var(--color-gold)] text-xs tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5">
                Why Choose Us
              </span>
              <h2
                id="why-us-heading"
                className="font-display font-800 text-4xl sm:text-5xl text-[var(--color-green-darkest)] mb-6 leading-tight"
              >
                Your Growth Is Our
                <span className="block text-[var(--color-green-mid)]">Mission</span>
              </h2>
              <p className="font-body text-[var(--color-green-darkest)]/60 text-lg leading-relaxed mb-8">
                We don&apos;t just deliver services — we build long-term partnerships.
                Bizease Solutions brings enterprise-grade expertise to businesses of all
                sizes, helping you scale smarter and faster.
              </p>
              <Link
                href="/about"
                id="home-about-link"
                className="inline-flex items-center gap-2 font-display font-600 text-[var(--color-green-mid)] hover:text-[var(--color-gold)] transition-colors duration-300 group"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Right grid */}
            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="p-6 rounded-2xl bg-white border border-[var(--color-green-dark)]/10 hover:border-[var(--color-gold)]/30 hover:shadow-xl hover:shadow-[var(--color-green-dark)]/5 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="mb-3 flex items-center justify-center">{item.icon}</div>
                  <h3 className="font-display font-700 text-base text-[var(--color-green-darkest)] mb-1.5 group-hover:text-[var(--color-green-mid)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--color-green-darkest)]/55 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <ServicesGrid />
      <TestimonialsSection />

      {/* CTA Banner */}
      <section
        className="section-padding relative bg-gradient-hero overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 geo-bg opacity-30" aria-hidden="true" />
        <div
          className="absolute top-0 left-1/4 w-64 h-64 hex-clip bg-[var(--color-gold)]/5"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-1/4 w-48 h-48 hex-clip bg-[var(--color-gold)]/5"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-[var(--color-beige)] mb-6 leading-tight"
          >
            Ready to{" "}
            <span className="text-gradient-gold">Transform</span>
            <br />
            Your Business?
          </h2>
          <p className="font-body text-[var(--color-beige)]/60 text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s build something exceptional together. Our team is ready to
            understand your goals and craft a solution that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              id="home-final-cta"
              className="px-10 py-4 font-display font-700 text-base bg-[var(--color-gold)] text-[var(--color-green-darkest)] rounded-xl hover:bg-[var(--color-gold-light)] transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-gold)]/30 hover:-translate-y-1 animate-pulse-gold"
            >
              Start Your Journey
            </Link>
            <Link
              href="/services"
              id="home-view-services"
              className="px-10 py-4 font-display font-600 text-base border border-[var(--color-beige)]/20 text-[var(--color-beige)] rounded-xl hover:border-[var(--color-gold)]/40 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
