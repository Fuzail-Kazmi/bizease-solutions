import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Zap, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bizease Solutions. Tell us about your project and we'll respond within 24 hours with a tailored solution.",
};

const contactInfo = [
  {
    id: "contact-email",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email Us",
    value: "info.bizeasesolutions@gmail.com",
    href: "mailto:info.bizeasesolutions@gmail.com",
  },
  {
    id: "contact-phone",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Call Us",
    value: "+92 3350388841",
    href: "tel: +923350388841",
  },
  {
    id: "contact-location",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Visit Us",
    value: "Islamabad, Pakistan",
    href: "#",
  },
  // {
  //   id: "contact-hours",
  //   icon: (
  //     <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  //     </svg>
  //   ),
  //   label: "Business Hours",
  //   value: "Mon – Sat, 9 AM – 6 PM PKT",
  //   href: "#",
  // },
];

const faqs = [
  {
    id: "faq-1",
    q: "How quickly do you respond to inquiries?",
    a: "We respond to all inquiries within 24 business hours. For urgent matters, please call us directly.",
  },
  {
    id: "faq-2",
    q: "Do you work with startups and small businesses?",
    a: "Absolutely. We have scalable solutions for businesses of all sizes — from early-stage startups to established enterprises.",
  },
  {
    id: "faq-3",
    q: "Can you handle multiple services at once?",
    a: "Yes — that's our core strength. As a unified solutions provider, our integrated teams work in sync across all service areas.",
  },
  {
    id: "faq-4",
    q: "Do you offer retainer-based engagements?",
    a: "Yes, we offer flexible engagement models — project-based, retainer, and long-term partnership contracts.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32! pb-20! bg-green-darkest overflow-hidden" aria-label="Contact hero">
        <img src="./images/contact-pg_carousel.avif" alt="Contact Bizease" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 geo-bg opacity-30" aria-hidden="true" />
        <div className="absolute top-24 right-12 w-36 h-36 hex-clip bg-gold/8 animate-float" aria-hidden="true" />
        <div className="absolute bottom-8 left-8 w-24 h-24 hex-clip bg-gold/5 animate-float" style={{ animationDelay: "1s" }} aria-hidden="true" />

        <div className="relative z-10 max-w-3xl! mx-auto! px-4! sm:px-6! lg:px-8! text-center">
          <span className="inline-block font-display font-500 text-gold text-xs tracking-widest uppercase mb-2! px-4! py-1.5! rounded-full border border-gold/30 bg-gold/10">
            Let&apos;s Talk
          </span>
          <h1 className="font-display font-800 text-5xl sm:text-6xl text-beige mt-4! mb-6! leading-tight">
            Get In{" "}
            <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="font-body text-beige/65 text-xl leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Reach out and
            our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#FAF7F2" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-cream" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8!">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-green-dark/10 p-8! sm:p-10! shadow-sm">
                <h2 id="contact-form-heading" className="font-display font-700 text-2xl text-green-darkest mb-2">
                  Send Us a Message
                </h2>
                <p className="font-body text-green-darkest/55 text-sm mb-8!">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-green-darkest rounded-2xl p-8! relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 hex-clip bg-gold/8" aria-hidden="true" />
                <h3 className="font-display font-700 text-beige text-lg mb-6!">
                  Contact Information
                </h3>
                <div className="flex flex-col gap-5">
                  {contactInfo.map((info) => (
                    <a
                      key={info.id}
                      id={info.id}
                      href={info.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 hex-clip bg-green-mid/40 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/20 transition-colors duration-200">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-display font-500 text-gold text-xs uppercase tracking-widest mb-0.5!">
                          {info.label}
                        </p>
                        <p className="font-body text-beige/70 text-sm group-hover:text-beige transition-colors duration-200">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-green-dark/10 p-6! flex items-center gap-4">
                <div className="w-14 h-14 hex-clip bg-gold/10 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-display font-700 text-green-darkest text-base mb-1!">
                    Fast Response Guarantee
                  </p>
                  <p className="font-body text-sm text-green-darkest/55">
                    We reply to every inquiry within 24 business hours.
                  </p>
                </div>
              </div>

              <div className="bg-linear-to-br from-green-dark to-green-mid rounded-2xl p-6! text-center!">
                <div className="flex justify-center mb-3!">
                  <Target className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-display font-700 text-beige text-lg mb-2!">
                  Free Consultation
                </h4>
                <p className="font-body text-beige/65 text-sm mb-4!">
                  Book a complimentary 30-minute strategy call with one of our experts.
                </p>
                <a
                  id="contact-book-call"
                  href="mailto:info@bizease.solutions?subject=Book a Consultation"
                  className="inline-block px-6! py-2.5! font-display font-600 text-sm bg-gold text-green-darkest rounded-xl hover:bg-gold-light transition-all duration-200"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gradient-section relative overflow-hidden" aria-labelledby="faq-heading">
        <div className="absolute inset-0 geo-bg opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl! mx-auto! px-4! sm:px-6! lg:px-8!">
          <div className="text-center mb-12!">
            <span className="inline-block font-display font-500 text-gold text-xs tracking-widest uppercase mb-3! px-4! py-1.5! rounded-full border border-gold/20">
              FAQ
            </span>
            <h2 id="faq-heading" className="font-display font-800 text-3xl sm:text-4xl text-beige mt-4!">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                id={faq.id}
                className="glass-card rounded-xl p-6!"
              >
                <h3 className="font-display font-600 text-beige text-base mb-2! flex items-start gap-3">
                  <span className="text-gold shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="font-body text-beige/60 text-sm leading-relaxed pl-6!">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
