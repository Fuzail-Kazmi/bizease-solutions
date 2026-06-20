import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";
import Link from "next/link";
import { Target, Link as LinkIcon, TrendingUp, Zap, ArrowRight, CheckCircle2, PieChart } from "lucide-react";

export const metadata: Metadata = {
  title: "BizEase Solutions - All Business Needs Under One Roof",
  description:
    "BizEase Solutions is a leading B2B business solutions provider offering IT consulting, digital marketing, business strategy, software development, HR & operations, and financial advisory.",
};

const whyUs = [
  {
    id: "why-expert",
    icon: <Target className="w-8 h-8 text-green-dark" />,
    title: "Deep Expertise",
    desc: "Senior-level specialists across every domain from tech to finance to marketing.",
  },
  {
    id: "why-unified",
    icon: <LinkIcon className="w-8 h-8 text-green-dark" />,
    title: "Unified Partnership",
    desc: "One team, one relationship, every service you need. No juggling multiple vendors.",
  },
  {
    id: "why-results",
    icon: <TrendingUp className="w-8 h-8 text-green-dark" />,
    title: "Results-Driven",
    desc: "We measure success by your growth tangible KPIs, not just deliverables.",
  },
  {
    id: "why-agile",
    icon: <Zap className="w-8 h-8 text-green-dark" />,
    title: "Agile Execution",
    desc: "Fast turnarounds with rigorous quality standards, powered by proven frameworks.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

       <section className="section-padding bg-cream" aria-labelledby="why-us-heading">
        <div className="max-w-7xl! mx-auto! p-4! sm:p-6! lg:p-8!">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-112.5 sm:h-150 w-full">
              <img src="./images/home-pg_img1.avif" alt="Team Meeting" className="absolute top-0 left-0 w-[85%] h-[85%] object-cover rounded-3xl shadow-xl" />
              <img src="./images/home-pg_img2.avif" alt="Office Work" className="absolute bottom-0 right-0 w-[60%] h-[50%] object-cover rounded-3xl border-10 border-cream shadow-2xl" />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4!">
                <div className="h-px w-12 bg-green-dark" />
                <span className="font-display font-600 text-green-dark text-sm tracking-widest uppercase">
                  ABOUT US
                </span>
              </div>
              
              <h2
                id="why-us-heading"
                className="font-display font-800 text-4xl sm:text-5xl text-green-darkest mb-6! leading-tight"
              >
                Your Complete <span className="text-green-mid">Accounting</span> And Financial Solutions
              </h2>
              
              <p className="font-body text-green-darkest/70 text-base leading-relaxed mb-8!">
                BizEase Solutions goes beyond traditional service delivery. We provide comprehensive business strategies, empowering your organization to grow with confidence through tailored financial, IT, and operational expertise.
              </p>

              <ul className="flex flex-col gap-4 mb-8!">
                {[
                  "Take a look at our round-up of the best solutions",
                  "Seven specialized service areas to cover every aspect of your business",
                  "A single, trusted partner for all your business needs",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-mid shrink-0" />
                    <span className="font-body text-sm text-green-darkest/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-6 p-6! bg-white rounded-2xl border border-green-dark/10 shadow-sm mb-8!">
                <div className="w-12 h-12 flex items-center justify-center bg-green-light/20 rounded-full text-green-mid shrink-0">
                  <PieChart className="w-6 h-6" />
                </div>
                <p className="font-display font-600 text-green-darkest text-sm leading-relaxed">
                  We Provides all Kinds of Accounting And Financial Solutions That Increase Your Success.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8! py-4! font-display font-600 text-sm bg-green-mid text-white rounded-xl hover:bg-green-dark transition-all duration-300 hover:shadow-xl hover:shadow-green-dark/20 hover:-translate-y-1 group"
              >
                DISCOVER MORE
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <ServicesGrid />

      {/* CTA Banner */}
      <section
        className="section-padding relative bg-gradient-hero overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 geo-bg opacity-30" aria-hidden="true" />
        <div
          className="absolute top-0 left-1/4 w-64 h-64 hex-clip bg-gold/5"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-1/4 w-48 h-48 hex-clip bg-gold/5"
          aria-hidden="true"
        />

        <div className="relative z-10 space-y-6! max-w-4xl! mx-auto! px-4! sm:px-6! lg:px-8! text-center!">
          <h2
            id="cta-heading"
            className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-beige mb-6! leading-tight"
          >
            Ready to{" "}
            <span className="text-gradient-gold">Transform</span>
            <br />
            Your Business?
          </h2>
          <p className="font-body text-beige/60 text-xl mb-10! max-w-2xl! mx-auto!">
            Let&apos;s build something exceptional together. Our team is ready to
            understand your goals and craft a solution that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              id="home-final-cta"
              className="px-10! py-4! font-display font-700 text-base bg-gold text-green-darkest rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1 animate-pulse-gold"
            >
              Start Your Journey
            </Link>
            <Link
              href="/services"
              id="home-view-services"
              className="px-10! py-4! font-display font-600 text-base border border-beige/20 text-beige rounded-xl hover:border-gold/40 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
