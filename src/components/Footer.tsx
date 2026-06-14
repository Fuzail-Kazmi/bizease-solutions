import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "IT Consulting", href: "/services" },
    { label: "Digital Transformation", href: "/services" },
    { label: "Business Strategy", href: "/services" },
    { label: "Marketing Solutions", href: "/services" },
    { label: "Operations & HR", href: "/services" },
  ],
  Contact: [
    { label: "info@bizease.solutions", href: "mailto:info@bizease.solutions" },
    { label: "+92 300 0000000", href: "tel:+923000000000" },
    { label: "Karachi, Pakistan", href: "#" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-green-darkest)] relative overflow-hidden">
      {/* Decorative hexagons */}
      <div
        className="absolute top-8 right-16 w-32 h-32 hex-clip opacity-5 bg-[var(--color-gold)]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 left-8 w-20 h-20 hex-clip opacity-5 bg-[var(--color-gold)]"
        aria-hidden="true"
      />

      {/* Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
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
                <span className="font-display font-800 text-lg text-[var(--color-beige)] tracking-wide">
                  BIZEASE
                </span>
                <span className="font-display font-500 text-xs text-[var(--color-gold)] tracking-[0.2em] uppercase">
                  Solutions
                </span>
              </div>
            </Link>
            <p className="text-[var(--color-beige)]/60 text-sm leading-relaxed mb-6">
              All business needs under one roof. We empower organizations with
              smart, scalable solutions built for tomorrow.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                {
                  id: "footer-linkedin",
                  label: "LinkedIn",
                  path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                },
                {
                  id: "footer-twitter",
                  label: "Twitter/X",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
                {
                  id: "footer-instagram",
                  label: "Instagram",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
              ].map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-[var(--color-green-mid)]/30 border border-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-beige)]/50 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-green-mid)]/50 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-600 text-[var(--color-gold)] text-sm tracking-widest uppercase mb-5">
                {category}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-beige)]/60 text-sm hover:text-[var(--color-gold)] transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[var(--color-gold)]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--color-beige)]/40 text-xs text-center sm:text-left">
            © {year} Bizease Solutions. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[var(--color-beige)]/40 text-xs hover:text-[var(--color-gold)]/80 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
