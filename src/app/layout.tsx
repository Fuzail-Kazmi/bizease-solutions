import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "BizEase Solutions - All Business Needs Under One Roof",
    template: "%s | BizEase Solutions",
  },
  description:
    "BizEase Solutions (BE Solutions) is a modern B2B business solutions company providing expert services in IT, consulting, marketing, and operations — all under one roof.",
  keywords: [
    "BizEase Solutions",
    "BE Solutions",
    "business solutions",
    "IT services",
    "consulting",
    "digital transformation",
    "B2B services",
  ],
  authors: [{ name: "BizEase Solutions" }],
  creator: "BizEase Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bizease-solutions.vercel.app",
    siteName: "BizEase Solutions",
    title: "BizEase Solutions — All Business Needs Under One Roof",
    description:
      "Modern B2B business solutions — IT, consulting, marketing, and operations all under one roof.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BizEase Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizEase Solutions",
    description: "All business needs under one roof.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-cream">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
