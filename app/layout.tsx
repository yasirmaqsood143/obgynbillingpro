// src/app/layout.tsx
// Root layout — uses inline styles for guaranteed rendering regardless of Tailwind JIT.

import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// ── Font config ───────────────────────────────────────────────────────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "OB/GYN Billing Services | #1 Specialized | obgynbillingpro.com",
  description:
    "The only medical billing company built exclusively for OB/GYN practices. Reduce claim denials, recover lost revenue, and simplify your entire revenue cycle. CPC-OB certified coders. AI-powered denial management.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://obgynbillingpro.com"
  ),
  alternates: { canonical: "/" },
  openGraph: {
    title: "OB/GYN Billing Services | obgynbillingpro.com",
    description:
      "Specialized OB/GYN billing & RCM. CPC-OB certified coders. AI-powered denial management. Global maternity billing experts.",
    url: "https://obgynbillingpro.com",
    siteName: "OBGYNBillingPro",
    type: "website",
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <body
        style={{
          fontFamily: "var(--font-inter)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          color: "#1A2B3C",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          margin: 0,
          padding: 0,
        }}
      >
        <Header />
        {/* 70px = Header height set in Header.tsx */}
        <main style={{ flex: 1, }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}