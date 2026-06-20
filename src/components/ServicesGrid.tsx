"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Calculator, Landmark, ShieldCheck, ClipboardCheck, MonitorSmartphone, Users, Megaphone } from "lucide-react";

const services = [
  {
    id: "svc-accounting",
    icon: <Calculator className="w-8 h-8" />,
    title: "Accounting & Bookkeeping",
    description: "Comprehensive financial tracking, budgeting, and month-end reporting to keep your business financially sound.",
  },
  {
    id: "svc-taxation",
    icon: <Landmark className="w-8 h-8" />,
    title: "Taxation Services",
    description: "Expert handling of individual and corporate returns, withholding, and sales tax compliance across multiple authorities.",
  },
  {
    id: "svc-compliance",
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Registration & Compliance",
    description: "Seamless company formation, licensing, and trademark registration to ensure your business operates legally and securely.",
  },
  {
    id: "svc-audit",
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Audit & Internal Controls",
    description: "Rigorous internal and external audits, risk management, and operational reviews to safeguard your assets.",
  },
  {
    id: "svc-it",
    icon: <MonitorSmartphone className="w-8 h-8" />,
    title: "IT & Tech Solutions",
    description: "From custom web development and E-commerce to ERP consultancy and cloud hosting, we power your digital transformation.",
  },
  {
    id: "svc-hr",
    icon: <Users className="w-8 h-8" />,
    title: "HR & Payroll Services",
    description: "End-to-end HR management, automated payroll, attendance systems, and policy development for growing teams.",
  },
  {
    id: "svc-marketing",
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Data-driven social media campaigns, SEO, paid ads, and content creation to elevate your brand and drive revenue.",
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
    <section className="section-padding bg-cream relative" aria-labelledby="services-heading">
      <div className="absolute inset-0 geo-bg opacity-30" aria-hidden="true" />
      <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8! relative z-10">
        {/* Header */}
        <div className="flex justify-center items-center flex-col text-center space-y-2! gap-4 mb-20!">
          <span className="inline-block font-display font-500 text-gold text-xs tracking-widest uppercase mb-3! px-4! py-1.5! rounded-full border border-gold/30 bg-gold/5">
            What We Offer
          </span>
          <h2
            id="services-heading"
            className="font-display font-800 text-4xl sm:text-5xl text-green-darkest mt-2!"
          >
            Our Core{" "}
            <span className="relative">
              <span className="text-green-mid">Services</span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-gold to-transparent rounded-full" />
            </span>
          </h2>
          <p className="font-body text-green-darkest/60 text-lg mt-4! max-w-2xl! mx-auto!">
            Everything your business needs <br/> delivered by a single, unified team of experts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8! gap-y-16!">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`group relative pt-12! px-6! pb-8! rounded-2xl bg-white border border-green-dark/10 hover:bg-green-dark hover:border-gold/30 hover:shadow-2xl hover:shadow-green-dark/20 text-center transition-all duration-500 hover:-translate-y-2 ${
                visibleCards.has(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${i === 6 ? "md:col-span-2! md:w-[calc(50%-1rem)]! md:justify-self-center! md:mx-auto! lg:col-span-1! lg:col-start-2! lg:w-auto! lg:mx-0!" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-cream border-4 border-white flex items-center justify-center text-green-dark group-hover:bg-gold group-hover:text-green-darkest group-hover:border-green-dark transition-all duration-500 shadow-sm">
                {service.icon}
              </div>

              <h3 className="font-display font-700 text-xl text-green-darkest group-hover:text-gold transition-colors duration-300 mt-2">
                {service.title}
              </h3>
              
              <div className="w-12 h-1 bg-gold mx-auto! my-4! rounded-full group-hover:bg-cream transition-colors duration-300" />

              <p className="font-body text-sm text-green-darkest/70 group-hover:text-beige/90 leading-relaxed mb-8!">
                {service.description}
              </p>

              <Link
                href={`/services#${service.id}`}
                className="inline-block px-8! py-2.5! rounded-full border border-gold/50 bg-gold/10 text-green-dark font-display font-600 text-sm hover:bg-gold hover:text-green-darkest group-hover:bg-gold group-hover:text-green-darkest group-hover:border-gold transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
