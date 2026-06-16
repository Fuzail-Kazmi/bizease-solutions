"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { id: "stat-clients",   value: 150, suffix: "+", label: "Clients Served" },
  { id: "stat-projects",  value: 300, suffix: "+", label: "Projects Delivered"},
  { id: "stat-years",     value: 8,   suffix: "+", label: "Years of Experience" },
  { id: "stat-countries", value: 12,  suffix: "",  label: "Countries Reached"},
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return count;
}

function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: (typeof stats)[0];
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      id={stat.id}
      className={`flex flex-col items-center text-center gap-3 p-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-4xl mb-1">{stat.icon}</div>
      <div className="font-display font-800 text-5xl sm:text-6xl text-gradient-gold leading-none">
        {count}
        {stat.suffix}
      </div>
      <div className="font-body text-[var(--color-beige)]/60 text-sm uppercase tracking-widest">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-section overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background hex decorations */}
      <div className="absolute inset-0 geo-bg opacity-30" aria-hidden="true" />
      <div className="absolute -top-8 -left-8 w-48 h-48 hex-clip bg-[var(--color-gold)]/5" aria-hidden="true" />
      <div className="absolute -bottom-8 -right-8 w-48 h-48 hex-clip bg-[var(--color-gold)]/5" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl! mx-auto! p-4! sm:p-6! lg:p-8!">
        <h2
          id="stats-heading"
          className={`font-display font-700 text-center text-[var(--color-beige)]/40 text-xs tracking-widest uppercase mb-10! transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Our Impact in Numbers
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[var(--color-gold)]/10">
          {stats.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
