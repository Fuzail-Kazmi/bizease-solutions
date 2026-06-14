"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const floatingHexagons = [
  { size: 120, top: "12%", left: "5%", delay: "0s", opacity: 0.06 },
  { size: 80,  top: "60%", left: "2%", delay: "1.5s", opacity: 0.04 },
  { size: 200, top: "8%",  right: "3%", delay: "0.8s", opacity: 0.05 },
  { size: 100, top: "70%", right: "6%", delay: "2s",   opacity: 0.07 },
  { size: 60,  top: "40%", left: "12%", delay: "1s",  opacity: 0.05 },
  { size: 140, top: "30%", right: "15%", delay: "2.5s",opacity: 0.04 },
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay so fonts load first
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero geo-bg overflow-hidden"
      aria-label="Hero section"
    >
      {/* Floating hex decorations */}
      {floatingHexagons.map((hex, i) => (
        <div
          key={i}
          className="absolute hex-clip bg-[var(--color-gold)] animate-float pointer-events-none"
          style={{
            width: hex.size,
            height: hex.size,
            top: hex.top,
            left: "left" in hex ? hex.left : undefined,
            right: "right" in hex ? hex.right : undefined,
            opacity: hex.opacity,
            animationDelay: hex.delay,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(61,139,115,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex self-center lg:self-start items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
              <span className="font-display font-500 text-[var(--color-gold)] text-xs tracking-widest uppercase">
                BE Solutions
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-display font-800 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-[var(--color-beige)] transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              All Business
              <br />
              Needs{" "}
              <span className="text-gradient-gold">Under</span>
              <br />
              <span className="text-gradient-gold">One Roof</span>
            </h1>

            {/* Subtext */}
            <p
              className={`font-body text-[var(--color-beige)]/70 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Bizease Solutions empowers businesses with cutting-edge IT, strategic
              consulting, digital marketing, and operational excellence — all in one
              expert partnership.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/services"
                id="hero-explore-cta"
                className="px-8 py-4 font-display font-600 text-base bg-[var(--color-gold)] text-[var(--color-green-darkest)] rounded-xl hover:bg-[var(--color-gold-light)] transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-gold)]/30 hover:-translate-y-1 text-center animate-pulse-gold"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                id="hero-contact-cta"
                className="px-8 py-4 font-display font-600 text-base border border-[var(--color-beige)]/20 text-[var(--color-beige)] rounded-xl hover:border-[var(--color-gold)]/50 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats Row */}
            <div
              className={`flex flex-wrap gap-8 justify-center lg:justify-start mt-6 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { value: "150+", label: "Clients Served" },
                { value: "300+", label: "Projects Delivered" },
                { value: "8+",   label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                  <span className="font-display font-800 text-3xl text-gradient-gold">
                    {stat.value}
                  </span>
                  <span className="font-body text-xs text-[var(--color-beige)]/50 uppercase tracking-widest mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div
            className={`hidden lg:flex items-center justify-center relative transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Rotating ring */}
            <div
              className="absolute w-96 h-96 rounded-full border border-dashed border-[var(--color-gold)]/20 animate-spin-slow"
              aria-hidden="true"
            />
            <div
              className="absolute w-80 h-80 rounded-full border border-[var(--color-green-light)]/20 animate-spin-slow"
              style={{ animationDirection: "reverse", animationDuration: "20s" }}
              aria-hidden="true"
            />

            {/* Center Logo Hex */}
            <div className="relative w-64 h-64 hex-clip bg-[var(--color-green-mid)]/30 border border-[var(--color-gold)]/20 flex items-center justify-center animate-float">
              <div className="relative w-48 h-48">
                <Image
                  src="/besolutions-logo.svg"
                  alt="BE Solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Floating badges */}
            {[
              { label: "IT Consulting", top: "5%",  left: "0%",   delay: "0s" },
              { label: "Digital Growth", top: "10%", right: "-5%", delay: "0.5s" },
              { label: "HR Solutions", bottom: "10%",left: "-5%",  delay: "1s" },
              { label: "Strategy",      bottom: "5%", right: "0%", delay: "1.5s" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="absolute glass-card px-3 py-1.5 rounded-full border border-[var(--color-gold)]/20 animate-float"
                style={{
                  top: badge.top,
                  left: "left" in badge ? badge.left : undefined,
                  right: "right" in badge ? badge.right : undefined,
                  bottom: "bottom" in badge ? badge.bottom : undefined,
                  animationDelay: badge.delay,
                }}
                aria-hidden="true"
              >
                <span className="font-display font-500 text-xs text-[var(--color-gold)]">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#FAF7F2"
          />
        </svg>
      </div>
    </section>
  );
}
