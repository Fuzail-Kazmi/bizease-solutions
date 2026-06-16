"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "service-it-consulting",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "IT Consulting",
    description: "Strategic technology roadmaps, infrastructure modernization, and digital transformation tailored to your business goals.",
  },
  {
    id: "service-digital-marketing",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Digital Marketing",
    description: "Data-driven campaigns, SEO mastery, social media strategy, and content that converts audiences into loyal customers.",
  },
  {
    id: "service-business-strategy",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Business Strategy",
    description: "Market analysis, growth planning, and competitive positioning frameworks that set your business on the path to sustainable success.",
  },
  {
    id: "service-software-dev",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Software Development",
    description: "Custom web apps, enterprise software, and scalable API solutions built with modern tech stacks and industry best practices.",
  },
  {
    id: "service-hr-operations",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "HR & Operations",
    description: "End-to-end HR management, talent acquisition, process optimization, and operational efficiency programs for growing teams.",
  },
  {
    id: "service-finance",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Financial Advisory",
    description: "Smart financial planning, budgeting, investment guidance, and compliance expertise to keep your business financially healthy.",
  },
];

export default function ServicesGrid() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, i]));
            }, i * 100);
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="section-padding bg-[var(--color-cream)]" aria-labelledby="services-heading">
      <div className="max-w-7xl! mx-auto! p-4! sm:p-6! lg:p-8!">
        {/* Header */}
        <div className="flex justify-center items-center flex-col text-center space-y-4 gap-4 mb-16!">
          <span className="inline-block font-display font-500 text-[var(--color-gold)] text-xs tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5">
            What We Offer
          </span>
          <h2
            id="services-heading"
            className="font-display font-800 text-4xl sm:text-5xl text-[var(--color-green-darkest)] mt-4"
          >
            Our Core{" "}
            <span className="relative">
              <span className="text-[var(--color-green-mid)]">Services</span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-gold)] to-transparent rounded-full" />
            </span>
          </h2>
          <p className="font-body text-[var(--color-green-darkest)]/60 text-lg mt-4 max-w-2xl mx-auto">
            Everything your business needs — delivered by a single, unified team of experts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`group relative px-4! py-3! space-y-2! rounded-2xl border border-[var(--color-green-dark)]/10 bg-white hover:border-[var(--color-gold)]/30 hover:shadow-2xl hover:shadow-[var(--color-green-dark)]/10 cursor-default transition-all duration-500 hover:-translate-y-2 ${
                visibleCards.has(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hex icon bg */}
              <div className="relative mb-5">
                <div className="w-14 h-14 hex-clip bg-[var(--color-green-dark)] flex items-center justify-center text-[var(--color-gold)] transition-all duration-300 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-green-darkest)]">
                  {service.icon}
                </div>
              </div>

              <h3 className="font-display font-700 text-lg text-[var(--color-green-darkest)] mb-2 group-hover:text-[var(--color-green-mid)] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-sm text-[var(--color-green-darkest)]/60 leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-2 text-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                <span className="font-display font-500 text-sm">Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Corner hex decoration */}
              <div
                className="absolute top-4 right-4 w-8 h-8 hex-clip bg-[var(--color-gold)]/5 group-hover:bg-[var(--color-gold)]/15 transition-all duration-300"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
