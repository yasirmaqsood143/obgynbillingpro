import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
  },
  // Markdown content is read from disk at build time and during ISR revalidation.
  outputFileTracingIncludes: {
    "/*": ["./content/**/*"],
    "/**/*": ["./content/**/*"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/services/:slug", destination: "/:slug", permanent: true },
      { source: "/areas", destination: "/areas-we-serve", permanent: true },
      { source: "/case-studies", destination: "/results", permanent: true },
      // Thin or duplicate posts consolidated into stronger pages (old URLs keep working)
      { source: "/blog/icd-10-o-codes-guide", destination: "/resources/icd10-o-codes", permanent: true },
      { source: "/blog/2026-cpt-code-updates-obgyn", destination: "/resources/cpt-library", permanent: true },
      { source: "/blog/2027-maternity-billing-transition", destination: "/resources/2027-maternity-transition", permanent: true },
      { source: "/blog/preparing-for-2027-maternity-billing-changes", destination: "/resources/2027-maternity-transition", permanent: true },
      { source: "/blog/co-97-denial-fix-obgyn", destination: "/blog/co-97-denial-code-explained", permanent: true },
      { source: "/blog/obgyn-revenue-leakage-calculator", destination: "/calculator", permanent: true },
      { source: "/blog/telehealth-modifiers-explained", destination: "/blog/modifier-95-vs-93-vs-gt-telehealth", permanent: true },
      { source: "/blog/laparoscopic-hysterectomy-coding-guide", destination: "/blog/cpt-code-robotic-hysterectomy", permanent: true },
      { source: "/blog/measuring-billing-company-performance", destination: "/blog/obgyn-billing-kpis", permanent: true },
      { source: "/blog/telehealth-billing-obgyn-2026", destination: "/telehealth-billing", permanent: true },
      { source: "/blog/urogynecology-billing-guide", destination: "/urogynecology-billing", permanent: true },
      { source: "/blog/why-regular-coding-audits-matter", destination: "/coding-audits", permanent: true },
      { source: "/blog/starting-new-obgyn-practice-billing-setup", destination: "/practice-setup", permanent: true },
      { source: "/blog/infertility-billing-challenges", destination: "/infertility-rei-billing", permanent: true },
      { source: "/blog/eligibility-verification-best-practices", destination: "/eligibility-verification", permanent: true },
      { source: "/blog/fee-schedule-optimization-guide", destination: "/fee-schedule-optimization", permanent: true },
      { source: "/blog/cpt-codes-obgyn-2026", destination: "/resources/cpt-library", permanent: true },
      { source: "/blog/hipaa-security-rule-2026-obgyn", destination: "/hipaa", permanent: true },
    ];
  },
};

export default nextConfig;
