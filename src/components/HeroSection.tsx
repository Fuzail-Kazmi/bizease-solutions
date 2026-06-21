"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const floatingHexagons = [
  { size: 120, top: "12%", left: "5%", delay: "0s", opacity: 0.06 },
  { size: 80, top: "60%", left: "2%", delay: "1.5s", opacity: 0.04 },
  { size: 200, top: "8%", right: "3%", delay: "0.8s", opacity: 0.05 },
  { size: 100, top: "70%", right: "6%", delay: "2s", opacity: 0.07 },
  { size: 60, top: "40%", left: "12%", delay: "1s", opacity: 0.05 },
  { size: 140, top: "30%", right: "15%", delay: "2.5s", opacity: 0.04 },
];

const carouselImages = [
  "./images/home-pg_carousel1.webp",
  "./images/home-pg_carousel2.jpg",
  "./images/home-pg_carousel3.jpg",
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero geo-bg overflow-hidden"
      aria-label="Hero section"
    >
      {floatingHexagons.map((hex, i) => (
        <div
          key={i}
          className="absolute hex-clip bg-gold animate-float pointer-events-none"
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(61,139,115,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8! pt-20 sm:pt-25! sm:pb-8!">
        <div className="items-center grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            {/* <div
              className={`inline-flex self-center lg:self-start items-center gap-2 px-4! py-1.5! rounded-full border border-gold/30 bg-black/40 backdrop-blur-md transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-display font-500 text-gold text-xs tracking-widest uppercase">
                BE Solutions
              </span>
            </div> */}

            <h1
              className={`font-display font-800 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white drop-shadow-xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              All Business
              <br />
              Needs{" "}
              <span className="text-gradient-gold">Under</span>
              <br />
              <span className="text-gradient-gold">One Roof</span>
            </h1>

            <p
              className={`font-body text-beige/90 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              BizEase Solutions empowers businesses with cutting-edge IT, strategic
              consulting, digital marketing, and operational excellence all in one
              expert partnership.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2! transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <Link
                href="/services"
                id="hero-explore-cta"
                className="px-4! py-2! font-display font-600 text-base bg-gold text-black/90 rounded-xl hover:bg-gold-light hover:text-green-darkest transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1 text-center animate-pulse-gold"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                id="hero-contact-cta"
                className="px-4! py-2! font-display font-600 text-base border border-gold/60 text-gold bg-black/30 backdrop-blur-sm rounded-xl hover:border-gold hover:bg-gold/20 hover:text-gold transition-all duration-300 hover:-translate-y-1 text-center"
              >
                Get In Touch
              </Link>
            </div>

            <div
              className={`flex flex-wrap gap-8 justify-center lg:justify-start mt-6! transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              {[
                { value: "150+", label: "Clients Served" },
                { value: "300+", label: "Projects Delivered" },
                { value: "8+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start pb-4!">
                  <span className="font-display font-800 text-3xl text-gradient-gold">
                    {stat.value}
                  </span>
                  <span className="font-body text-xs text-beige/80 uppercase tracking-widest mt-0.5!">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`hidden lg:flex items-center justify-center relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div
              className="absolute w-96 h-96 rounded-full border border-dashed border-gold/30 animate-spin-slow"
              aria-hidden="true"
            />
            <div
              className="absolute w-80 h-80 rounded-full border border-white/20 animate-spin-slow"
              style={{ animationDirection: "reverse", animationDuration: "20s" }}
              aria-hidden="true"
            />

            <div className="relative w-64 h-64 hex-clip bg-black/40 backdrop-blur-md border border-gold/20 flex items-center justify-center animate-float shadow-2xl">
              <div className="relative w-48 h-48">
                <Image
                  src="/besolutions-logo.png"
                  alt="BE Solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, 192px"
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>

            {[
              { label: "IT Consulting", top: "5%", left: "0%", delay: "0s" },
              { label: "Digital Growth", top: "10%", right: "-5%", delay: "0.5s" },
              { label: "HR Solutions", bottom: "10%", left: "-5%", delay: "1s" },
              { label: "Strategy", bottom: "5%", right: "0%", delay: "1.5s" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="absolute bg-black/60 backdrop-blur-md px-3! py-1.5! rounded-full border border-gold/30 animate-float shadow-xl"
                style={{
                  top: badge.top,
                  left: "left" in badge ? badge.left : undefined,
                  right: "right" in badge ? badge.right : undefined,
                  bottom: "bottom" in badge ? badge.bottom : undefined,
                  animationDelay: badge.delay,
                }}
                aria-hidden="true"
              >
                <span className="font-display font-600 text-xs text-gold tracking-wide">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {carouselImages.map((src, index) => (
          <div 
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={src} alt={`Carousel_${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>
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
