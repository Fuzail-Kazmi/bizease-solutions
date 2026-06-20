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
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const isHome = pathname === "/";

  return (
    <>
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen
          ? "opacity-100 pointer-events-auto backdrop-blur-xs bg-white/40"
          : "opacity-0 pointer-events-none"
          }`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || !isHome
          ? "bg-green-darkest/95 text-beige hover:text-beige backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold/10"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8!">
          <div className="flex! items-center! justify-between! h-16!">
            <Link href="/" className="flex items-center gap-3 mb-5 group" aria-label="Bizease Solutions Home">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/besolutions-logo.png"
                  alt="Bizease Solutions"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">

                <span className={`font-display font-800 text-lg tracking-wide ${isScrolled || !isHome ? "text-beige" : "text-beige-light/60"}`}>
                  BIZEASE
                </span>
                <span className="font-display font-500 text-xs text-gold tracking-[0.2em] uppercase">
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-body font-500 text-sm rounded-lg transition-all duration-300 group ${pathname === link.href
                    ? "text-gold"
                    : "text-beige-dark"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold rounded-full transition-all duration-300 ${pathname === link.href ? "w-4/5" : "w-0 group-hover:w-4/5"
                      }`}
                  />
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              id="nav-cta"
              className="hidden md:block text-sm bg-gold text-green-darkest rounded-lg hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-(--color-gold)/30 hover:-translate-y-0.5 animate-pulse-gold px-4! py-1.5!"
            >
              Get Started
            </Link>

            {/* Mobile Hamburger */}
            <button
              ref={hamburgerRef}
              id="mobile-menu-toggle"
              className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-beige rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block w-6 h-0.5 bg-beige rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
              />
              <span
                className={`block w-6 h-0.5 bg-beige rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          id="mobile-menu"
        >
          <nav
            className="bg-green-darkest/98 backdrop-blur-xl border-t border-gold/10 px-4! py-4!"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4! py-2! rounded-xl font-body font-500 text-sm transition-all duration-200 ${pathname === link.href
                    ? "bg-green-mid/30 text-gold border border-gold/20"
                    : "text-beige/80 hover:bg-white/5 hover:text-beige"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2! px-4! py-2! text-center font-display font-600 text-sm bg-gold text-green-darkest rounded-xl hover:bg-gold-light transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}