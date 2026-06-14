"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Ahmed Al-Rashidi",
    role: "CEO, TechForge Ltd.",
    quote:
      "Bizease Solutions transformed our IT infrastructure completely. Their team delivered a tailored ERP system in record time — and the ongoing support has been exceptional. Truly a one-stop solution.",
    rating: 5,
    avatar: "AR",
    color: "#2D6A5A",
  },
  {
    id: "testimonial-2",
    name: "Sana Malik",
    role: "Marketing Director, NovaBrand",
    quote:
      "Our digital presence skyrocketed after partnering with BE Solutions. The marketing strategy they crafted doubled our leads in just three months. Professional, proactive, and results-driven.",
    rating: 5,
    avatar: "SM",
    color: "#C9A84C",
  },
  {
    id: "testimonial-3",
    name: "Omar Farooq",
    role: "COO, GlobalTrade Co.",
    quote:
      "From HR restructuring to financial advisory, Bizease handled everything with incredible depth and care. They feel less like consultants and more like an extension of our own leadership team.",
    rating: 5,
    avatar: "OF",
    color: "#3D8B73",
  },
  {
    id: "testimonial-4",
    name: "Layla Hassan",
    role: "Founder, StartSpark",
    quote:
      "As a startup, we needed comprehensive support without breaking the bank. Bizease delivered world-class consulting, tech, and marketing — all under one roof, exactly as promised.",
    rating: 5,
    avatar: "LH",
    color: "#1B4D3E",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[var(--color-gold)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (i: number) => {
    setActive(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[var(--color-green-darkest)] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative */}
      <div className="absolute inset-0 geo-bg opacity-20" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[var(--color-gold)]/30 to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block font-display font-500 text-[var(--color-gold)] text-xs tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5">
            Client Stories
          </span>
          <h2 id="testimonials-heading" className="font-display font-800 text-4xl sm:text-5xl text-[var(--color-beige)] mt-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Active Card */}
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              id={t.id}
              className={`glass-card rounded-2xl p-8 sm:p-12 transition-all duration-500 ${
                i === active ? "opacity-100 scale-100 block" : "opacity-0 scale-95 hidden"
              }`}
              aria-hidden={i !== active}
            >
              {/* Quote Icon */}
              <svg className="w-10 h-10 text-[var(--color-gold)]/30 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M10 8C6.134 8 3 11.134 3 15v9h9v-9H6c0-2.206 1.794-4 4-4V8zm16 0c-3.866 0-7 3.134-7 7v9h9v-9h-6c0-2.206 1.794-4 4-4V8z" />
              </svg>

              <StarRating count={t.rating} />

              <blockquote className="font-body text-lg sm:text-xl text-[var(--color-beige)]/80 leading-relaxed mt-6 mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 hex-clip flex items-center justify-center font-display font-700 text-sm text-white"
                  style={{ background: t.color }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-display font-600 text-[var(--color-beige)] text-base">{t.name}</p>
                  <p className="font-body text-[var(--color-gold)] text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`View testimonial ${i + 1}`}
              onClick={() => handleDotClick(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 h-2.5 bg-[var(--color-gold)]"
                  : "w-2.5 h-2.5 bg-[var(--color-beige)]/20 hover:bg-[var(--color-beige)]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
