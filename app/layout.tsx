import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import { JsonLd } from "./components/ui";
import { SITE, waLink } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "OB/GYN Medical Billing Services & RCM | OBGYNBillingPro",
    template: "%s | OBGYNBillingPro",
  },
  description:
    "Specialized OB/GYN medical billing, coding and revenue cycle management for independent practices. 8+ years of experience. Free billing audit via WhatsApp.",
  applicationName: SITE.name,
  openGraph: { siteName: SITE.name, type: "website", locale: "en_US", url: SITE.url },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#0E7C7B", width: "device-width", initialScale: 1 };

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: "OBGYN Billing Pro",
      url: SITE.url,
      logo: `${SITE.url}/icon.svg`,
      email: SITE.email,
      description: "Medical billing, coding and revenue cycle management company specializing in OB/GYN practices.",
      areaServed: { "@type": "Country", name: "United States" },
      knowsAbout: ["OB/GYN medical billing", "Global maternity billing", "Gynecologic surgery coding", "Claim denial management", "Revenue cycle management", "Physician credentialing"],
      contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: SITE.email, url: waLink(), availableLanguage: ["English"] },
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#organization` } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-navy antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <JsonLd data={orgSchema} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
