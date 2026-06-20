import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, Lightbulb, Star, Link as LinkIcon, Zap, TrendingUp, Target, Telescope } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bizease Solutions our story, mission, values, and the team behind Pakistan's most comprehensive B2B business solutions provider.",
};

const values = [
  { id: "value-integrity",    icon: <Handshake className="w-8 h-8" />, title: "Integrity",    desc: "We operate with full transparency and honesty in every client relationship." },
  { id: "value-innovation",   icon: <Lightbulb className="w-8 h-8" />, title: "Innovation",   desc: "Constant evolution and adoption of cutting-edge approaches to solve complex challenges." },
  { id: "value-excellence",   icon: <Star className="w-8 h-8" />, title: "Excellence",   desc: "We hold ourselves to the highest standards in every deliverable and interaction." },
  { id: "value-partnership",  icon: <LinkIcon className="w-8 h-8" />, title: "Partnership",  desc: "We invest in your success as if it were our own your goals become ours." },
  { id: "value-agility",      icon: <Zap className="w-8 h-8" />, title: "Agility",      desc: "We move fast without sacrificing quality, adapting to your evolving needs." },
  { id: "value-impact",       icon: <TrendingUp className="w-8 h-8" />, title: "Impact",       desc: "Every engagement is measured against real-world outcomes, not just outputs." },
];

const timeline = [
  { year: "2016", title: "Founded",              desc: "Bizease Solutions was established with a vision to simplify business complexity." },
  { year: "2018", title: "IT Division Launch",   desc: "Expanded into technology consulting and custom software development." },
  { year: "2020", title: "Digital Growth Unit",  desc: "Launched a full-service digital marketing and branding practice." },
  { year: "2022", title: "Regional Expansion",   desc: "Extended services across 12 countries with a 50+ person expert team." },
  { year: "2024", title: "Enterprise Services",  desc: "Introduced enterprise-grade HR, finance, and operations consulting." },
  { year: "2026", title: "150+ Clients Strong",  desc: "Continuing to grow as the region's leading unified business solutions partner." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32! pb-20! bg-green-darkest overflow-hidden" aria-label="About hero">
        <img src="./images/about-pg_carousel.avif" alt="About Bizease" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 geo-bg opacity-30" aria-hidden="true" />
        <div className="absolute top-20 right-16 w-40 h-40 hex-clip bg-gold/8 animate-float" aria-hidden="true" />
        <div className="absolute bottom-10 left-10 w-24 h-24 hex-clip bg-gold/6 animate-float" style={{ animationDelay: "1.5s" }} aria-hidden="true" />

        <div className="relative z-10 max-w-4xl! mx-auto! px-4! sm:px-6! lg:px-8! text-center!">
          <span className="inline-block font-display font-500 text-gold text-xs tracking-widest uppercase mb-2! px-4! py-1.5! rounded-full border border-gold/30 bg-gold/10">
            About Bizease Solutions
          </span>
          <h1 className="font-display font-800 text-5xl sm:text-6xl text-beige mt-2! mb-6! leading-tight">
            Built to Simplify
            <br />
            <span className="text-gradient-gold">Business Complexity</span>
          </h1>
          <p className="font-body text-beige/65 text-xl leading-relaxed max-w-3xl! mx-auto!">
            BizEase Solutions was born from a simple belief: businesses shouldn&apos;t have to
            juggle dozens of vendors for core functions. We bring it all together under
            one roof, with one dedicated team.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#FAF7F2" />
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-cream" aria-labelledby="mission-heading">
        <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8!">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div
              id="about-mission"
              className="p-8! sm:p-10! rounded-2xl bg-green-darkest border border-gold/10 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 w-20 h-20 hex-clip bg-gold/5 group-hover:bg-gold/10 transition-all duration-300" aria-hidden="true" />
              <div className="w-12 h-12 hex-clip bg-cream/20 flex items-center justify-center mb-6!">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <h2 id="mission-heading" className="font-display font-700 text-2xl text-gold mb-4!">Our Mission</h2>
              <p className="font-body text-beige/70 leading-relaxed text-lg">
                To empower businesses with integrated solutions, smart technology, and professional expertise for sustainable growth. 
              </p>
            </div>

            {/* Vision */}
            <div
              id="about-vision"
              className="p-8! sm:p-10! rounded-2xl bg-white border border-gold/10 relative overflow-hidden group hover:border-gold/20 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 w-20 h-20 hex-clip bg-gold/5 group-hover:bg-gold/10 transition-all duration-300" aria-hidden="true" />
              <div className="w-12 h-12 hex-clip bg-gold/75 flex items-center justify-center mb-6!">
                <Telescope className="w-6 h-6 text-green-darkest" />
              </div>
              <h2 className="font-display font-700 text-2xl text-green-darkest mb-4!">Our Vision</h2>
              <p className="font-body text-green-darkest/60 leading-relaxed text-lg">
                To provide all-in-one business solutions that simplify operations, ensure compliance, and help organizations achieve success with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="section-padding bg-gradient-section relative overflow-hidden" aria-labelledby="story-heading">
        <div className="absolute inset-0 geo-bg opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-5xl! mx-auto! px-4! sm:px-6! lg:px-8!">
          <div className="text-center! mb-14!">
            <span className="inline-block font-display font-500 text-gold text-xs tracking-widest uppercase mb-2! px-4! py-1.5! border rounded-full  border-gold/20">
              Our Journey
            </span>
            <h2 id="story-heading" className="font-display font-800 text-4xl sm:text-5xl text-beige mt-2!">
              A Decade of Growth
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-linear-to-b from-gold/50 via-gold/20 to-transparent" aria-hidden="true" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  id={`timeline-${item.year}`}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-14 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <div className="glass-card rounded-xl p-6! inline-block w-full">
                      <span className="font-display font-800 text-gold text-2xl">{item.year}</span>
                      <h3 className="font-display font-700 text-beige text-lg mt-1! mb-2!">{item.title}</h3>
                      <p className="font-body text-beige/55 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-gold border-4 border-green-darkest shrink-0" aria-hidden="true" />

                  {/* Empty side */}
                  <div className="hidden sm:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream" aria-labelledby="values-heading">
        <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8!">
          <div className="text-center mb-14!">
            <span className="inline-block font-display font-500 text-gold text-xs tracking-widest uppercase mb-2! px-4! py-1.5! border rounded-full border-gold/30 bg-gold/5">
              Core Values
            </span>
            <h2 id="values-heading" className="font-display font-800 text-4xl! sm:text-5xl! text-green-darkest mt-2!">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.id}
                id={v.id}
                className="p-6! rounded-2xl bg-white border border-green-dark/10 hover:border-gold/30 hover:shadow-xl hover:shadow-green-dark/5 transition-all duration-300 hover:-translate-y-1 group text-center"
              >
                <div className="mb-3! flex items-center justify-center text-green-darkest group-hover:text-gold transition-colors">{v.icon}</div>
                <h3 className="font-display font-700 text-green-darkest group-hover:text-green-mid transition-colors mb-2!">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-green-darkest/55 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-green-dark" aria-label="About CTA">
        <div className="max-w-3xl! mx-auto! px-4! sm:px-6! lg:px-8! text-center!">
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-beige mb-4!">
            Let&apos;s Work Together
          </h2>
          <p className="font-body text-beige/60 text-lg mb-8!">
            Ready to experience the Bizease difference? Start a conversation with our team today.
          </p>
          <Link
            href="/contact"
            id="about-cta"
            className="inline-block px-10! py-4! font-display font-700 text-base bg-gold text-green-darkest rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
