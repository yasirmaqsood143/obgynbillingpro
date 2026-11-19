import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import { JsonLd } from "./components/ui";
import { SITE, waLink, ENTITY_DEFINITION, ALTERNATE_NAMES } from "@/lib/site";

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
      alternateName: ALTERNATE_NAMES,
      url: SITE.url,
      logo: `${SITE.url}/icon.svg`,
      email: SITE.email,
      description: ENTITY_DEFINITION,
      slogan: SITE.tagline,
      areaServed: { "@type": "Country", name: "United States", identifier: "US" },
      knowsAbout: [
        "OB/GYN revenue cycle management",
        "RPA medical billing (robotic process automation)",
        "CPT 2027 maternity codes (59080–59083, 59431, 59432, 59502, 59503)",
        "Global maternity billing (59400, 59510, 59610)",
        "Robotic hysterectomy coding (58570–58573)",
        "Myomectomy and endometriosis surgery coding",
        "Fertility and REI billing",
        "Claim denial management (CO-97)",
        "Insurance eligibility verification and prior authorization",
        "ICD-10-CM Chapter 15 O code sequencing",
        "Physician credentialing (taxonomy 207V00000X)",
      ],
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
