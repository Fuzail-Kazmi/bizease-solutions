"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome
          ? "bg-[var(--color-green-darkest)]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[var(--color-gold)]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Bizease Solutions Home">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/besolutions-logo.png"
                alt="Bizease Solutions Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-body font-500 text-sm rounded-lg transition-all duration-300 group ${
                  pathname === link.href
                    ? "text-[var(--color-gold)]"
                    : "text-[var(--color-beige)]/80 hover:text-[var(--color-beige)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[var(--color-gold)] rounded-full transition-all duration-300 ${
                    pathname === link.href ? "w-4/5" : "w-0 group-hover:w-4/5"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              id="nav-cta"
              className="ml-4 px-5 py-2.5 font-display font-600 text-sm bg-[var(--color-gold)] text-[var(--color-green-darkest)] rounded-lg hover:bg-[var(--color-gold-light)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-gold)]/30 hover:-translate-y-0.5 animate-pulse-gold"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--color-beige)] rounded-full transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-beige)] rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-beige)] rounded-full transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <nav
          className="bg-[var(--color-green-darkest)]/98 backdrop-blur-xl border-t border-[var(--color-gold)]/10 px-4 pb-6 pt-2"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl font-body font-500 text-sm transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-[var(--color-green-mid)]/30 text-[var(--color-gold)] border border-[var(--color-gold)]/20"
                    : "text-[var(--color-beige)]/80 hover:bg-white/5 hover:text-[var(--color-beige)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-4 py-3 text-center font-display font-600 text-sm bg-[var(--color-gold)] text-[var(--color-green-darkest)] rounded-xl hover:bg-[var(--color-gold-light)] transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
