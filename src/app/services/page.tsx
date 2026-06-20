import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, Landmark, ShieldCheck, ClipboardCheck, MonitorSmartphone, Users, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the full range of Bizease Solutions services - IT consulting, digital marketing, business strategy, software development, HR & operations, and financial advisory.",
};

const services = [
  {
    id: "svc-accounting",
    icon: <Calculator className="w-8 h-8" />,
    title: "Accounting & Bookkeeping",
    description: "Comprehensive financial tracking, budgeting, and month-end reporting to keep your business financially sound.",
    features: [
      "Daily transaction recording",
      "Bank & GL reconciliations",
      "Accounts receivable & payable management",
      "Payroll recording",
      "Budgeting & forecasting",
      "Cash flow management",
      "Month & Year-end Financial reporting"
    ]
  },
  {
    id: "svc-taxation",
    icon: <Landmark className="w-8 h-8" />,
    title: "Taxation Services",
    description: "Expert handling of individual and corporate returns, withholding, and sales tax compliance across multiple authorities.",
    features: [
      "Individual & Corporate tax returns",
      "Withholding tax returns",
      "Sales Tax Returns (PRA/FBR)",
      "Income & Sale Tax Registration (FBR, PRA, SRB etc.)",
      "Monthly/Quarterly returns"
    ]
  },
  {
    id: "svc-compliance",
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Registration & Compliance",
    description: "Seamless company formation, licensing, and trademark registration to ensure your business operates legally and securely.",
    features: [
      "Sole Proprietorship",
      "Partnership",
      "SMC & Private Limited Company",
      "Punjab Food Authority license",
      "Trademark/Brand registration"
    ]
  },
  {
    id: "svc-audit",
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Audit & Internal Controls",
    description: "Rigorous internal and external audits, risk management, and operational reviews to safeguard your assets.",
    features: [
      "Internal & External Audit",
      "Operational audit",
      "Compliance audit",
      "Risk management audit"
    ]
  },
  {
    id: "svc-it",
    icon: <MonitorSmartphone className="w-8 h-8" />,
    title: "IT & Tech Solutions",
    description: "From custom web development and E-commerce to ERP consultancy and cloud hosting, we power your digital transformation.",
    features: [
      "Website designing & development",
      "E-commerce websites (Shopify, WooCommerce, WordPress)",
      "SEO optimization",
      "ERP Consultancy (SAP, Oracle, etc)",
      "IT Infrastructure setup",
      "Cloud hosting solutions"
    ]
  },
  {
    id: "svc-hr",
    icon: <Users className="w-8 h-8" />,
    title: "HR & Payroll Services",
    description: "End-to-end HR management, automated payroll, attendance systems, and policy development for growing teams.",
    features: [
      "Payroll processing",
      "Attendance & biometric systems",
      "Provident fund & gratuity management",
      "HR policies & manuals"
    ]
  },
  {
    id: "svc-marketing",
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Data-driven campaigns, SEO mastery, and content creation to elevate your brand and drive revenue.",
    features: [
      "Social Media Marketing (SMM)",
      "Facebook, Instagram, Twitter (X), LinkedIn campaigns",
      "Paid ads management (Meta Ads, Google Ads)",
      "Content creation & graphic design",
      "Google Ads & Display Marketing",
      "YouTube Ads",
      "Email & SMS Marketing",
      "Content Marketing",
      "Blogs & articles",
      "Video production & editing"
    ]
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
      <section className="relative pt-32! pb-20! bg-green-darkest overflow-hidden" aria-label="Services hero">
        <img src="./images/service-pg_carousel.avif" alt="Bizease Services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
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
            Seven specialized service areas. One unified team. Infinite possibilities for your business growth.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#FAF7F2" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-cream" aria-labelledby="services-list-heading">
        <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8!">
          <h2 id="services-list-heading" className="sr-only">All Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12! gap-y-20! pt-8!">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`group relative pt-14! px-8! pb-10! rounded-2xl bg-white shadow-md border border-green-dark/10 hover:bg-green-dark hover:border-gold/30 hover:shadow-2xl hover:shadow-green-dark/20 text-center transition-all duration-500 hover:-translate-y-2 scroll-mt-32 ${
                  index === 6 ? "lg:col-span-2 lg:w-[calc(50%-1.5rem)]! lg:justify-self-center! lg:mx-auto!" : ""
                }`}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-cream border-4 border-white flex items-center justify-center text-green-dark group-hover:bg-gold group-hover:text-green-darkest group-hover:border-green-dark transition-all duration-500 shadow-sm">
                  {service.icon}
                </div>

                <h2 className="font-display font-700 text-2xl text-green-darkest group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h2>
                
                <div className="w-16 h-1 bg-gold mx-auto! my-5! rounded-full group-hover:bg-cream transition-colors duration-300" />

                <p className="font-body text-base text-green-darkest/70 group-hover:text-beige/90 leading-relaxed mb-8!">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-3 text-left">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 font-body text-sm text-green-darkest/80 group-hover:text-beige transition-colors duration-300">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5! group-hover:bg-gold/20">
                        <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />

            {process.map((step, i) => (
              <div
                key={step.id}
                id={step.id}
                className="flex flex-col items-center text-center gap-4 p-6!"
              >
                <div className="relative">
                  <div className="w-20 h-20 hex-clip bg-green-mid/30 border border-gold/20 flex items-center justify-center">
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
