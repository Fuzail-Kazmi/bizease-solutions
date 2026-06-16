import type { Metadata } from "next";
import Link from "next/link";
import { MonitorSmartphone, Search, BarChart3, Code2, Users, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the full range of Bizease Solutions services — IT consulting, digital marketing, business strategy, software development, HR & operations, and financial advisory.",
};

const services = [
  {
    id: "svc-it-consulting",
    icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
    title: "IT Consulting",
    tagline: "Technology that works for you",
    description:
      "We design technology roadmaps that align with your business goals. From cloud migration to legacy system modernization, our IT consultants bring clarity to complex challenges and deliver measurable outcomes.",
    features: ["Digital Transformation Strategy", "Cloud Migration & Architecture", "Infrastructure Audit & Optimization", "Cybersecurity Assessment", "ERP Implementation"],
    color: "var(--color-green-mid)",
  },
  {
    id: "svc-digital-marketing",
    icon: <Search className="w-6 h-6 text-white" />,
    title: "Digital Marketing",
    tagline: "Growth through data and creativity",
    description:
      "Our digital marketing team combines data analytics with creative strategy to build your brand, acquire customers, and drive sustainable revenue growth across all digital channels.",
    features: ["SEO & Content Strategy", "Paid Advertising (PPC/Social)", "Social Media Management", "Email Marketing Automation", "Analytics & Reporting"],
    color: "var(--color-gold)",
  },
  {
    id: "svc-business-strategy",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "Business Strategy",
    tagline: "Direction, clarity, and execution",
    description:
      "Whether you&apos;re launching, scaling, or pivoting, our strategy team delivers market insights, competitive positioning, and actionable growth plans that set you apart and keep you ahead.",
    features: ["Market Research & Analysis", "Competitive Intelligence", "Business Model Design", "Growth Planning", "KPI Framework Design"],
    color: "var(--color-green-light)",
  },
  {
    id: "svc-software-dev",
    icon: <Code2 className="w-6 h-6 text-white" />,
    title: "Software Development",
    tagline: "Custom solutions, built to scale",
    description:
      "From web applications to complex enterprise systems, our development team delivers clean, maintainable, and scalable software using modern tech stacks and industry best practices.",
    features: ["Custom Web Applications", "Enterprise Software", "API Design & Integration", "Mobile App Development", "QA & Testing"],
    color: "var(--color-green-dark)",
  },
  {
    id: "svc-hr-operations",
    icon: <Users className="w-6 h-6 text-white" />,
    title: "HR & Operations",
    tagline: "People-first. Process-driven.",
    description:
      "We help you build high-performing teams and efficient operations. From talent acquisition to process automation, our HR and operations experts optimize your most critical assets.",
    features: ["Talent Acquisition & Recruitment", "HR Policy Design", "Performance Management", "Process Optimization", "Organizational Development"],
    color: "var(--color-green-mid)",
  },
  {
    id: "svc-financial",
    icon: <DollarSign className="w-6 h-6 text-white" />,
    title: "Financial Advisory",
    tagline: "Financial clarity for confident decisions",
    description:
      "Our financial advisory practice provides the guidance your business needs to stay healthy, compliant, and strategically positioned from budgeting to investment planning.",
    features: ["Financial Planning & Budgeting", "Investment Advisory", "Tax Compliance", "Cash Flow Management", "Financial Reporting"],
    color: "var(--color-gold)",
  },
];

const process = [
  { id: "process-1", step: "01", title: "Discovery",    desc: "We deep-dive into your business, challenges, and goals to build a complete picture." },
  { id: "process-2", step: "02", title: "Strategy",     desc: "We craft a tailored roadmap with clear milestones, timelines, and success metrics." },
  { id: "process-3", step: "03", title: "Execution",    desc: "Our expert teams implement with precision, keeping you informed at every stage." },
  { id: "process-4", step: "04", title: "Growth",       desc: "We measure results, iterate, and continuously optimize for sustained impact." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32! pb-20! bg-gradient-hero overflow-hidden" aria-label="Services hero">
        <div className="absolute inset-0 geo-bg opacity-30" aria-hidden="true" />
        <div className="absolute top-24 right-10 w-44 h-44 hex-clip bg-gold/8 animate-float" aria-hidden="true" />
        <div className="absolute bottom-10 left-10 w-28 h-28 hex-clip bg-gold/5 animate-float" style={{ animationDelay: "2s" }} aria-hidden="true" />

        <div className="relative z-10 max-w-4xl! mx-auto! px-4! sm:px-6! lg:px-8! text-center">
          <span className="inline-block font-display font-500 text-gold text-xs tracking-widest uppercase px-4! py-1.5! rounded-full border border-gold/30 bg-gold/10">
            Our Services
          </span>
          <h1 className="font-display font-800 text-5xl sm:text-6xl text-beige mt-4! mb-6! leading-tight">
            Everything Your
            <br />
            <span className="text-gradient-gold">Business Needs</span>
          </h1>
          <p className="font-body text-beige/65 text-xl leading-relaxed max-w-3xl! mx-auto!">
            Six specialized service areas. One unified team. Infinite possibilities for your business growth.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#FAF7F2" />
          </svg>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="section-padding bg-[var(--color-cream)]" aria-labelledby="services-list-heading">
        <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8!">
          <h2 id="services-list-heading" className="sr-only">All Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group p-8! rounded-2xl bg-white border border-green-dark/10 hover:border-gold/30 hover:shadow-2xl hover:shadow-green-dark/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* BG hex */}
                <div
                  className="absolute -top-6 -right-6 w-32 h-32 hex-clip opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: service.color }}
                  aria-hidden="true"
                />

                {/* Header */}
                <div className="flex items-start gap-4 mb-5!">
                  <div
                    className="w-14 h-14 hex-clip flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: service.color }}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="font-display font-700 text-xl text-green-darkest group-hover:text-green-mid transition-colors">
                      {service.title}
                    </h2>
                    <p className="font-body text-sm text-gold mt-0.5!">{service.tagline}</p>
                  </div>
                </div>

                <p className="font-body text-green-darkest/60 leading-relaxed text-sm mb-6!">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 font-body text-sm text-green-darkest/70">
                      <div
                        className="w-4 h-4 hex-clip shrink-0 flex items-center justify-center"
                        style={{ background: service.color }}
                        aria-hidden="true"
                      >
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gradient-section relative overflow-hidden" aria-labelledby="process-heading">
        <div className="absolute inset-0 geo-bg opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8!">
          <div className="text-center mb-14!">
            <span className="inline-block font-display font-500 text-gold text-xs tracking-widest uppercase px-4! py-1.5! rounded-full border border-gold/20">
              How We Work
            </span>
            <h2 id="process-heading" className="font-display font-800 text-4xl sm:text-5xl text-beige mt-4!">
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />

            {process.map((step, i) => (
              <div
                key={step.id}
                id={step.id}
                className="flex flex-col items-center text-center gap-4 p-6!"
              >
                <div className="relative">
                  <div className="w-20  h-20 hex-clip bg-green-mid/30 border border-gold/20 flex items-center justify-center">
                    <span className="font-display font-800 text-2xl text-gradient-gold">{step.step}</span>
                  </div>
                </div>
                <h3 className="font-display font-700 text-beige text-lg">{step.title}</h3>
                <p className="font-body text-beige/55 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream" aria-label="Services CTA">
        <div className="max-w-3xl! mx-auto! px-4! sm:px-6! lg:px-8! text-center!">
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-green-darkest mb-4!">
            Ready to Get Started?
          </h2>
          <p className="font-body text-green-darkest/60 text-lg mb-8!">
            Tell us your challenge. We&apos;ll craft the perfect solution fast.
          </p>
          <Link
            href="/contact"
            id="services-cta"
            className="inline-block px-10! py-4! font-display font-700 text-base bg-green-dark text-beige rounded-xl hover:bg-green-mid hover:shadow-xl hover:shadow-green-dark/30 transition-all duration-300 hover:-translate-y-1"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
