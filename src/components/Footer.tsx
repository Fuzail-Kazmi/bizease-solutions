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
    { label: "Accounting & Bookkeeping", href: "/services" },
    { label: "Taxation Services", href: "/services" },
    { label: "Registration & Compliance", href: "/services" },
    { label: "Audit & Internal Controls", href: "/services" },
    { label: "IT & Tech Solutions", href: "/services" },
    { label: "HR & Payroll Services", href: "/services" },
    { label: "Digital Marketing", href: "/services" },
  ],
  Contact: [
    { label: "info.bizeasesolutions@gmail.com", href: "mailto:info.bizeasesolutions@gmail.com" },
    { label: "+92 3350388841", href: "tel:+923350388841" },
    { label: "Islamabad, Pakistan", href: "#" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-darkest relative overflow-hidden">
      <div
        className="absolute top-8 right-16 w-32 h-32 hex-clip opacity-5 bg-gold"
        aria-hidden="true"
      />
      {/* <div
        className="absolute bottom-16 left-8 w-20 h-20 hex-clip opacity-5 bg-[var(--color-gold)]"
        aria-hidden="true"
      /> */}

      <div className="h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8! py-6!">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-4!">
          <div className="lg:col-span-1 space-y-4!">
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
            <div className="flex gap-3">
              {[
                {
                  id: "footer-linkedin",
                  label: "LinkedIn",
                  path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                  href: "#"
                },
                {
                  id: "footer-facebook",
                  label: "Facebook",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                  href: "https://www.facebook.com/bizeasesolutionspk"
                },
                {
                  id: "footer-youtube",
                  label: "YouTube",
                  path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                  href: "https://www.youtube.com/@BIZEASESOLUTIONS"
                },
              ].map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.href}
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

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-600 text-[var(--color-gold)] text-sm tracking-widest uppercase mb-5!">
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

        <div className="mt-14! pt-6! border-t border-[var(--color-gold)]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
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
