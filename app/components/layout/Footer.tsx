// src/components/layout/Footer.tsx
// Phase 1 — Server Component (no "use client" needed)
// All hover effects handled via CSS classes in the <style> block below.
// No event handlers — safe for RSC / Next.js 14+ App Router.

import Link from "next/link";

const serviceLinks = [
  { label: "Global Maternity Billing",  href: "/global-maternity-billing" },
  { label: "GYN Surgery Coding",        href: "/gyn-surgery-coding" },
  { label: "Denial Management",         href: "/denial-management" },
  { label: "Revenue Cycle Management",  href: "/revenue-cycle-management" },
  { label: "Credentialing",             href: "/credentialing" },
  { label: "Telehealth Billing",        href: "/telehealth-billing" },
  { label: "Practice Setup",            href: "/practice-setup" },
  { label: "Coding Audits",             href: "/coding-audits" },
];

const companyLinks = [
  { label: "About Us",           href: "/about" },
  { label: "Client Results",     href: "/results" },
  { label: "Blog & Resources",   href: "/blog" },
  { label: "Contact Us",         href: "/contact" },
  // { label: "Client Portal",      href: "/portal" },
  { label: "Revenue Calculator", href: "/calculator" },
];

const certBadges = [
  { emoji: "🛡️", label: "HIPAA Compliant",   sub: "2026 Security Rule" },
  { emoji: "📋", label: "BAA Available",      sub: "All ePHI Vendors" },
  { emoji: "🏆", label: "AAPC Certified",     sub: "CPC-OB Coders" },
  { emoji: "✅", label: "AHIMA Credentialed", sub: "Coding Excellence" },
];

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE ?? "{{PHONE}}";
  const email = process.env.NEXT_PUBLIC_EMAIL ?? "{{EMAIL}}";
  const year  = new Date().getFullYear();

  return (
    <>
      {/*
        All hover/responsive styles live here — zero JS event handlers needed.
        This keeps the component a pure Server Component.
      */}
      <style>{`
        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: white;
          color: #0E7C7B;
          font-weight: 700;
          font-size: 14px;
          border-radius: 10px;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .footer-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.22);
          background: #f0fdfd;
        }
        .footer-nav-link {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13.5px;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          padding: 5px 0;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .footer-nav-link:hover {
          color: rgba(255,255,255,0.9);
          padding-left: 4px;
        }
        .footer-nav-link .nav-arrow {
          color: #0E7C7B;
          font-size: 16px;
          line-height: 1;
          transition: transform 0.2s ease;
        }
        .footer-nav-link:hover .nav-arrow {
          transform: translateX(2px);
        }
        .footer-contact-link {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          margin-bottom: 10px;
          transition: color 0.2s ease;
        }
        .footer-contact-link:hover { color: #4ecdc4; }
        .footer-cert-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .footer-cert-card:hover {
          background: rgba(14,124,123,0.1);
          border-color: rgba(14,124,123,0.25);
        }
        .footer-legal-link {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          padding: 4px 10px;
          border-radius: 5px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .footer-legal-link:hover {
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.06);
        }
        .footer-brand-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          text-decoration: none;
        }
        .footer-main-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 24px 50px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 48px;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 1024px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .footer-main-grid { grid-template-columns: 1fr; }
          .footer-cta-inner { flex-direction: column !important; text-align: center; }
        }
      `}</style>

      <footer
        style={{
          background: "linear-gradient(160deg, #0d1e2e 0%, #1A2B3C 40%, #0f2030 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid texture */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(14,124,123,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,124,123,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />
        {/* Radial glow orb */}
        <div aria-hidden="true" style={{
          position: "absolute", top: -120, right: -80,
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(14,124,123,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* ══ CTA Banner ══ */}
        <div style={{
          background: "linear-gradient(135deg, #0E7C7B 0%, #0a6160 50%, #085958 100%)",
          position: "relative", overflow: "hidden",
        }}>
          <div aria-hidden="true" style={{
            position: "absolute", top: -60, right: -60,
            width: 200, height: 200,
            background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
          }} />
          <div className="footer-cta-inner" style={{
            maxWidth: 1200, margin: "0 auto", padding: "32px 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 24, flexWrap: "wrap", position: "relative", zIndex: 1,
          }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)", marginBottom: 10,
              }}>
                ✦ Free No-Obligation Offer
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "white", lineHeight: 1.3 }}>
                Ready to recover lost OB/GYN revenue?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginTop: 5 }}>
                Most practices find $50K–$200K in annual leakage within the first audit.
              </p>
            </div>
            <Link href="/contact" className="footer-cta-btn">
              Schedule Free Audit →
            </Link>
          </div>
        </div>

        {/* ══ Main Footer Grid ══ */}
        <div className="footer-main-grid">

          {/* Brand */}
          <div>
            <Link href="/" className="footer-brand-link">
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "linear-gradient(135deg, #0E7C7B, #0a9e9c)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: 13, color: "white", letterSpacing: -0.5,
                boxShadow: "0 4px 12px rgba(14,124,123,0.4)",
              }}>
                OB
              </div>
              <span style={{ fontSize: 17, fontWeight: 700, color: "white" }}>
                OBGYNBillingPro
              </span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, lineHeight: 1.7, marginBottom: 24 }}>
              The only medical billing service built exclusively for OB/GYN and
              women&apos;s health practices. Specialty-specific precision. Full-cycle RCM.
            </p>
            <a href={`tel:${phone}`} className="footer-contact-link">
              <span style={{
                width: 30, height: 30, borderRadius: 7, flexShrink: 0,
                background: "rgba(14,124,123,0.2)", border: "1px solid rgba(14,124,123,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13,
              }}>📞</span>
              {phone}
            </a>
            <a href={`mailto:${email}`} className="footer-contact-link">
              <span style={{
                width: 30, height: 30, borderRadius: 7, flexShrink: 0,
                background: "rgba(14,124,123,0.2)", border: "1px solid rgba(14,124,123,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13,
              }}>✉️</span>
              {email}
            </a>
          </div>

          {/* Services */}
          <div>
            <ColHeading>Our Services</ColHeading>
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-nav-link">
                <span className="nav-arrow">›</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <ColHeading>Company</ColHeading>
            {companyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-nav-link">
                <span className="nav-arrow">›</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <ColHeading>Certifications</ColHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {certBadges.map((badge) => (
                <div key={badge.label} className="footer-cert-card">
                  <span style={{ fontSize: 16 }}>{badge.emoji}</span>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.85)", lineHeight: 1.2 }}>
                      {badge.label}
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                      {badge.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 14, padding: 12,
              background: "rgba(14,124,123,0.08)",
              border: "1px solid rgba(14,124,123,0.2)",
              borderRadius: 8, borderLeft: "3px solid #0E7C7B",
            }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                All data handled under signed BAAs. HIPAA Security Rule 2026 compliant.
                AES-256 encryption at rest.
              </p>
            </div>
          </div>
        </div>

        {/* ══ Bottom Bar ══ */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative", zIndex: 1 }}>
          <div style={{
            maxWidth: 1200, margin: "0 auto", padding: "18px 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 12,
          }}>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
              © {year}{" "}
              <span style={{ color: "rgba(14,124,123,0.8)", fontWeight: 600 }}>
                OBGYNBillingPro.com
              </span>{" "}
              · All rights reserved.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {[
                { label: "Privacy Policy",   href: "/privacy" },
                { label: "HIPAA Notice",     href: "/hipaa" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item, i, arr) => (
                <span key={item.href} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Link href={item.href} className="footer-legal-link">
                    {item.label}
                  </Link>
                  {i < arr.length - 1 && (
                    <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline strip */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          padding: "12px 24px", textAlign: "center",
          position: "relative", zIndex: 1,
        }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
            Specialized OB/GYN billing ·{" "}
            <span style={{ color: "rgba(14,124,123,0.5)" }}>obgynbillingpro.com</span>{" "}
            · Built exclusively for women&apos;s health practices
          </p>
        </div>
      </footer>
    </>
  );
}

/* ── Sub-components — no event handlers, RSC-safe ────────────────────── */

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
      textTransform: "uppercase", color: "#0E7C7B",
      marginBottom: 20, display: "flex", alignItems: "center", gap: 8,
    }}>
      {children}
      <span style={{
        flex: 1, height: 1, display: "block",
        background: "linear-gradient(to right, rgba(14,124,123,0.4), transparent)",
      }} />
    </div>
  );
}