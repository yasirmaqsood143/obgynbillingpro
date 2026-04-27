"use client";

// app/about/page.tsx
// About page — follows homepage pattern: inline styles + <style> block, no Tailwind scanning required.
// Sections: Hero | Trust Bar | Our Story | Values | Animated Stats | Team | Certifications | CTA

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.unobserve(el); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount((1 - Math.pow(1 - p, 3)) * target);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function FadeIn({
  children, delay = 0, style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────────────────

const T = {
  teal:         "#0E7C7B",
  tealDark:     "#065F5E",
  tealLight:    "#E0F4F4",
  navy:         "#1A2B3C",
  navyAlt:      "#2B2D42",
  body:         "#4A5568",
  lightBg:      "#F7FAFC",
  successGreen: "#276749",
  white:        "#FFFFFF",
  border:       "#E2E8F0",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const kpiRows = [
  { label: "First-Pass Claim Rate",  value: "98.2%", hi: true },
  { label: "Net Collection Rate",    value: "97.6%", hi: true },
  { label: "Practices Served",       value: "200+",  hi: false },
  { label: "Revenue Recovered",      value: "$4.2M+",hi: false },
  { label: "Average AR Days",        value: "18.3",  hi: false },
  { label: "Appeal Success Rate",    value: "94%",   hi: true },
];

const storyStats = [
  { stat: "19%",    text: "of in-network claims denied in 2025" },
  { stat: "26%",    text: "surge in coding-related denial rates" },
  { stat: "$57.23", text: "average cost to rework a denied claim" },
  { stat: "30%",    text: "average revenue lost to preventable denials" },
  { stat: "2027",   text: "CMS eliminating global maternity packages" },
];

const values = [
  {
    icon: "🎯",
    title: "Clinical Precision",
    body: "Every claim is coded by CPC-OB certified specialists who understand global maternity packages, GYN surgery modifier combinations, and OB/GYN-specific payer policies — not generalist billers cross-trained from another specialty.",
  },
  {
    icon: "🔍",
    title: "Regulatory Foresight",
    body: "We track every CPT, ICD-10, and CMS update that affects OB/GYN before it impacts your revenue — including the 2027 maternity code transition that will eliminate global packages entirely.",
  },
  {
    icon: "⚡",
    title: "Agentic Automation",
    body: "Our AI denial engine reads CARC/RARC codes, identifies root causes in real time, and drafts appeal letters autonomously — turning denied claims into recovered revenue without manual rework.",
  },
];

const stats = [
  { value: 10,   suffix: "+",  label: "Years OB/GYN Focused" },
  { value: 200,  suffix: "+",  label: "Practices Served" },
  { value: 4.2,  suffix: "M+", prefix: "$", label: "Revenue Recovered", decimals: 1 },
  { value: 98.2, suffix: "%",  label: "First-Pass Rate",       decimals: 1 },
];

const team = [
  {
    initials: "SR",
    name: "Sarah Reynolds, CPC-OB",
    role: "Director of OB/GYN Coding",
    certs: ["CPC-OB", "AAPC", "AHIMA"],
    bio: "15+ years coding exclusively for OB/GYN practices. Specializes in global maternity billing, GYN surgery CPT coding, and complex modifier usage for robotic and laparoscopic procedures.",
  },
  {
    initials: "MD",
    name: "Marcus Davis, RHIA",
    role: "Revenue Cycle Manager",
    certs: ["RHIA", "AHIMA", "MGMA"],
    bio: "Expert in OB/GYN revenue cycle optimization. Has helped 80+ practices reduce AR days from 45+ to under 25 through systematic denial management and clean claim protocols.",
  },
  {
    initials: "PL",
    name: "Patricia Liu, CPC",
    role: "Denial Management Specialist",
    certs: ["CPC", "AAPC", "HIMSS"],
    bio: "Specializes in Cigna, UnitedHealthcare, and Aetna OB/GYN denial patterns. Maintains a 94% appeal success rate on first submission for denial codes CO-97, CO-4, and CO-22.",
  },
  {
    initials: "JW",
    name: "James Walker, MBA",
    role: "Practice Success Manager",
    certs: ["MGMA", "HIMSS"],
    bio: "Onboards new OB/GYN practices and manages ongoing client relationships. Ensures every practice hits benchmarks for net collection rate, clean claim rate, and denial rate.",
  },
];

const certOrgs = [
  { org: "AAPC",  full: "American Academy of Professional Coders",        badge: "CPC-OB Certified Coders" },
  { org: "AHIMA", full: "American Health Information Management Assoc.",   badge: "Coding Excellence Credentialed" },
  { org: "MGMA",  full: "Medical Group Management Association",            badge: "Practice Management Certified" },
  { org: "HIMSS", full: "Healthcare Information & Management Systems Soc.",badge: "Health IT Compliance" },
];

const complianceBadges = [
  { icon: "🛡️", label: "HIPAA Compliant",  sub: "2026 Security Rule" },
  { icon: "📋", label: "BAA Available",     sub: "All ePHI Vendors" },
  { icon: "🏆", label: "SOC 2 Type II",     sub: "Phase 3 Initiation" },
  { icon: "🔐", label: "AES-256 Encrypted", sub: "At Rest + In Transit" },
];

// ─────────────────────────────────────────────────────────────────────────────
// STAT COUNTER
// ─────────────────────────────────────────────────────────────────────────────

function StatCounter({
  target, prefix = "", suffix = "", decimals = 0, inView,
}: {
  target: number; prefix?: string; suffix?: string; decimals?: number; inView: boolean;
}) {
  const count = useCounter(target, 2200, inView);
  return (
    <span style={{ fontFamily: "var(--font-inter)", fontWeight: 800 }}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [statsRef, statsInView] = useInView(0.2);

  return (
    <>
      {/* ── Scoped styles ── */}
      <style>{`
        /* Responsive breakpoints */
        @media (max-width: 1023px) {
          .ab-team-grid    { grid-template-columns: repeat(2, 1fr) !important; }
          .ab-cert-grid    { grid-template-columns: repeat(2, 1fr) !important; }
          .ab-comply-grid  { grid-template-columns: repeat(2, 1fr) !important; }
          .ab-stats-grid   { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 767px) {
          .ab-hero-grid    { flex-direction: column !important; }
          .ab-story-grid   { flex-direction: column !important; }
          .ab-values-grid  { grid-template-columns: 1fr !important; }
          .ab-team-grid    { grid-template-columns: 1fr !important; }
          .ab-cert-grid    { grid-template-columns: 1fr !important; }
          .ab-comply-grid  { grid-template-columns: 1fr !important; }
          .ab-stats-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .ab-cta-btns     { flex-direction: column !important; align-items: stretch !important; }
          .ab-cta-btns a   { text-align: center !important; justify-content: center !important; }
        }
        @media (max-width: 479px) {
          .ab-stats-grid   { grid-template-columns: 1fr !important; }
        }

        /* Interactive states */
        .ab-value-card:hover {
          border-color: #0E7C7B !important;
          box-shadow: 0 8px 32px rgba(14,124,123,0.14) !important;
        }
        .ab-team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 40px rgba(14,124,123,0.15) !important;
        }
        .ab-cert-card:hover { background: #E0F4F4 !important; }
        .ab-btn-primary:hover  { background: #065F5E !important; transform: scale(1.02); }
        .ab-btn-secondary:hover {
          background: rgba(14,124,123,0.1) !important;
          border-color: #0E7C7B !important;
        }
        .ab-value-card, .ab-team-card, .ab-cert-card,
        .ab-btn-primary, .ab-btn-secondary {
          transition: all 0.25s ease;
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(135deg, #0D1F2D 0%, #0E2A3A 55%, #0A1F30 100%)",
        padding: "80px 24px 72px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(ellipse at 72% 50%, rgba(14,124,123,0.14) 0%, transparent 60%)",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <FadeIn delay={0}>
            <nav aria-label="Breadcrumb" style={{ marginBottom: 28 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>/</span>
              <span style={{ color: T.teal, fontSize: 13 }}>About Us</span>
            </nav>
          </FadeIn>

          <div className="ab-hero-grid" style={{ display: "flex", gap: 64, alignItems: "center" }}>
            {/* Left — headline + CTAs */}
            <div style={{ flex: "1 1 55%" }}>
              <FadeIn delay={0.05}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(14,124,123,0.15)",
                  border: "1px solid rgba(14,124,123,0.4)",
                  borderRadius: 100, padding: "6px 18px", marginBottom: 24,
                }}>
                  <span style={{
                    color: T.teal, fontSize: 12, fontWeight: 600,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                  }}>
                    Exclusively OB/GYN Since 2014
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(30px, 5vw, 52px)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: 20,
                }}>
                  The Billing Partner Built{" "}
                  <span style={{ color: T.teal }}>Exclusively for OB/GYN</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 18, lineHeight: 1.75,
                  maxWidth: 520, marginBottom: 36,
                }}>
                  We don't bill for primary care, cardiology, or orthopedics. Every
                  coder, every AI protocol, and every denial workflow we built was
                  designed around one specialty — yours.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="ab-cta-btns" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Link href="/contact" className="ab-btn-primary" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: T.teal, color: "#FFFFFF",
                    padding: "14px 30px", borderRadius: 8,
                    fontWeight: 600, fontSize: 14,
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    textDecoration: "none",
                  }}>
                    Get Free Revenue Audit →
                  </Link>
                  <Link href="/calculator" className="ab-btn-secondary" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "transparent", color: "#FFFFFF",
                    padding: "14px 30px", borderRadius: 8,
                    fontWeight: 600, fontSize: 14,
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}>
                    Revenue Calculator
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right — KPI card */}
            <FadeIn delay={0.25} style={{ flex: "1 1 38%" }}>
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16, padding: "32px 28px",
                backdropFilter: "blur(12px)",
              }}>
                <p style={{
                  color: "rgba(255,255,255,0.45)", fontSize: 11,
                  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20,
                }}>
                  Platform-wide metrics
                </p>
                {kpiRows.map((row, i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "11px 0",
                    borderBottom: i < kpiRows.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}>
                    <span style={{ color: "rgba(255,255,255,0.68)", fontSize: 14 }}>{row.label}</span>
                    <span style={{ color: row.hi ? T.teal : "#FFFFFF", fontWeight: 700, fontSize: 16 }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TRUST BAR
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: T.lightBg,
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
        padding: "16px 24px",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", flexWrap: "wrap", gap: 24,
          alignItems: "center", justifyContent: "center",
        }}>
          {["AAPC", "AHIMA", "MGMA", "HIMSS"].map((c) => (
            <span key={c} style={{
              fontSize: 13, fontWeight: 700, letterSpacing: "0.08em",
              color: T.navyAlt, opacity: 0.65,
            }}>{c}</span>
          ))}
          <span style={{ color: "#CBD5E0" }}>|</span>
          {["HIPAA Compliant", "BAA Available", "SOC 2 Type II"].map((b) => (
            <span key={b} style={{
              fontSize: 12, fontWeight: 600,
              color: T.teal, background: T.tealLight,
              padding: "4px 14px", borderRadius: 100,
            }}>{b}</span>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "88px 24px", background: T.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="ab-story-grid" style={{ display: "flex", gap: 72, alignItems: "flex-start" }}>
            {/* Left — narrative */}
            <div style={{ flex: "1 1 55%" }}>
              <FadeIn delay={0}>
                <p style={{
                  fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: T.teal, marginBottom: 12,
                }}>Our Story</p>
                <h2 style={{
                  fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700,
                  color: T.navy, lineHeight: 1.25, marginBottom: 28,
                }}>
                  Why We Chose to Specialize — and Why It Matters for Your Revenue
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p style={{ color: T.body, fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                  OB/GYN billing is unlike any other specialty. A single delivery generates
                  multiple CPT codes — 59400, 59510, 59409 — depending on whether it's
                  vaginal or cesarean, the payer's global period rules, and whether antepartum
                  care was split. One error in global maternity package assignment can mean
                  losing $800–$2,200 per patient.
                </p>
                <p style={{ color: T.body, fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                  We built OBGYNBillingPro after watching generalist billing companies
                  consistently underperform for OB/GYN practices — not from incompetence,
                  but from lack of specialization. GYN surgery requires mastery of 50+
                  CPT modifier combinations. Infertility billing requires fluency in
                  HCPCS J-codes and plan-specific fertility riders. No generalist
                  can maintain that depth across 30+ specialties simultaneously.
                </p>
                <p style={{ color: T.body, fontSize: 16, lineHeight: 1.8 }}>
                  So we made a decision:{" "}
                  <strong style={{ color: T.navy }}>we only bill for OB/GYN.</strong>{" "}
                  That singular focus means our coders, our AI systems, and our denial
                  protocols are tuned to one specialty — and optimized daily as that
                  specialty's payer rules evolve.
                </p>
              </FadeIn>
            </div>

            {/* Right — industry stats box */}
            <FadeIn delay={0.18} style={{ flex: "1 1 40%" }}>
              <div style={{
                background: T.tealLight,
                border: "1px solid rgba(14,124,123,0.2)",
                borderRadius: 16, padding: "36px 30px",
              }}>
                <p style={{
                  fontSize: 13, fontWeight: 700,
                  letterSpacing: "0.07em", textTransform: "uppercase",
                  color: T.teal, marginBottom: 22,
                }}>
                  The OB/GYN Billing Challenge
                </p>
                {storyStats.map((item, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 16, alignItems: "flex-start",
                    padding: "12px 0",
                    borderBottom: i < storyStats.length - 1
                      ? "1px solid rgba(14,124,123,0.15)"
                      : "none",
                  }}>
                    <span style={{
                      fontWeight: 800, fontSize: 20, color: T.teal,
                      minWidth: 62, lineHeight: 1.25,
                    }}>{item.stat}</span>
                    <span style={{ color: T.body, fontSize: 14, lineHeight: 1.65 }}>{item.text}</span>
                  </div>
                ))}
                <div style={{ marginTop: 26 }}>
                  <Link href="/contact" style={{
                    display: "block", textAlign: "center",
                    background: T.teal, color: "#FFFFFF",
                    padding: "13px 24px", borderRadius: 8,
                    fontWeight: 600, fontSize: 14,
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    textDecoration: "none",
                  }}>
                    See How We Solve This →
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          OUR VALUES / DIFFERENTIATORS
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "88px 24px", background: T.lightBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn delay={0} style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{
              fontSize: 12, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: T.teal, marginBottom: 12,
            }}>What Sets Us Apart</p>
            <h2 style={{
              fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700,
              color: T.navy, lineHeight: 1.25,
              maxWidth: 560, margin: "0 auto",
            }}>
              Three Pillars of OB/GYN Billing Excellence
            </h2>
          </FadeIn>

          <div className="ab-values-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28,
          }}>
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="ab-value-card" style={{
                  background: T.white,
                  border: `1px solid ${T.border}`,
                  borderRadius: 16, padding: "36px 28px",
                  boxSizing: "border-box",
                }}>
                  <div style={{ fontSize: 38, marginBottom: 20 }}>{v.icon}</div>
                  <h3 style={{
                    fontSize: 20, fontWeight: 700,
                    color: T.navy, marginBottom: 14,
                  }}>{v.title}</h3>
                  <p style={{ color: T.body, fontSize: 15, lineHeight: 1.78 }}>{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ANIMATED STATS (teal band)
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #0E7C7B 0%, #065F5E 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(ellipse at 28% 50%, rgba(255,255,255,0.06) 0%, transparent 55%)",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <FadeIn delay={0} style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{
              fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 700,
              color: "#FFFFFF", marginBottom: 12,
            }}>
              Results That Speak for Themselves
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.72)", fontSize: 16,
              maxWidth: 440, margin: "0 auto",
            }}>
              Live metrics across all active OB/GYN practices on our platform
            </p>
          </FadeIn>

          <div
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className="ab-stats-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}
          >
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  textAlign: "center",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 16, padding: "32px 20px",
                  backdropFilter: "blur(8px)",
                }}>
                  <div style={{
                    fontSize: "clamp(30px, 4.5vw, 48px)",
                    fontWeight: 800, color: "#FFFFFF", marginBottom: 10,
                    lineHeight: 1,
                  }}>
                    <StatCounter
                      target={s.value}
                      prefix={s.prefix ?? ""}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                      inView={statsInView}
                    />
                  </div>
                  <p style={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: 14, fontWeight: 500,
                  }}>{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TEAM
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "88px 24px", background: T.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn delay={0} style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{
              fontSize: 12, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: T.teal, marginBottom: 12,
            }}>Our Team</p>
            <h2 style={{
              fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700,
              color: T.navy, lineHeight: 1.25,
              maxWidth: 560, margin: "0 auto 16px",
            }}>
              CPC-OB Certified OB/GYN Billing Specialists
            </h2>
            <p style={{ color: T.body, fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
              Every team member is credentialed specifically in OB/GYN coding —
              not cross-trained from another specialty.
            </p>
          </FadeIn>

          <div className="ab-team-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
          }}>
            {team.map((m, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="ab-team-card" style={{
                  background: T.lightBg,
                  border: `1px solid ${T.border}`,
                  borderRadius: 16, padding: "32px 22px",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}>
                  {/* Avatar */}
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${T.teal}, ${T.tealDark})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 18px",
                    fontSize: 22, fontWeight: 700, color: "#FFFFFF",
                    flexShrink: 0,
                  }}>
                    {m.initials}
                  </div>

                  <h3 style={{
                    fontSize: 15, fontWeight: 700,
                    color: T.navy, marginBottom: 4,
                  }}>{m.name}</h3>
                  <p style={{
                    fontSize: 13, fontWeight: 600,
                    color: T.teal, marginBottom: 14,
                  }}>{m.role}</p>

                  {/* Cert pills */}
                  <div style={{
                    display: "flex", flexWrap: "wrap",
                    gap: 6, justifyContent: "center", marginBottom: 16,
                  }}>
                    {m.certs.map((c) => (
                      <span key={c} style={{
                        fontSize: 11, fontWeight: 700,
                        letterSpacing: "0.04em",
                        color: T.teal, background: T.tealLight,
                        padding: "3px 10px", borderRadius: 100,
                      }}>{c}</span>
                    ))}
                  </div>

                  <p style={{ color: T.body, fontSize: 13, lineHeight: 1.68 }}>{m.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CERTIFICATIONS & COMPLIANCE
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", background: T.lightBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn delay={0} style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{
              fontSize: 12, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: T.teal, marginBottom: 12,
            }}>Certifications &amp; Compliance</p>
            <h2 style={{
              fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 700,
              color: T.navy, lineHeight: 1.3,
              maxWidth: 480, margin: "0 auto",
            }}>
              Industry Credentials You Can Trust
            </h2>
          </FadeIn>

          {/* Org certifications */}
          <div className="ab-cert-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20, marginBottom: 36,
          }}>
            {certOrgs.map((cert, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="ab-cert-card" style={{
                  background: T.white,
                  border: `1px solid ${T.border}`,
                  borderRadius: 12, padding: "28px 20px",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}>
                  <div style={{
                    fontSize: 26, fontWeight: 800,
                    color: T.teal, letterSpacing: "-0.02em",
                    marginBottom: 10,
                  }}>{cert.org}</div>
                  <p style={{
                    fontSize: 12, color: T.body,
                    lineHeight: 1.55, marginBottom: 12,
                  }}>{cert.full}</p>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    color: T.successGreen, background: "#F0FFF4",
                    padding: "4px 12px", borderRadius: 100,
                  }}>{cert.badge}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Compliance badges */}
          <div className="ab-comply-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
          }}>
            {complianceBadges.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{
                  background: T.white,
                  border: "1px solid rgba(14,124,123,0.18)",
                  borderRadius: 12, padding: "18px 20px",
                  display: "flex", alignItems: "center", gap: 14,
                  boxSizing: "border-box",
                }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: "50%",
                    background: T.tealLight,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontSize: 17,
                  }}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: T.navy, marginBottom: 2 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 11, color: T.body }}>{item.sub}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: "88px 24px",
        background: "linear-gradient(135deg, #0D1F2D 0%, #1A2B3C 100%)",
        textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(14,124,123,0.22) 0%, transparent 65%)",
        }} />
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <FadeIn delay={0}>
            <p style={{
              fontSize: 12, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: T.teal, marginBottom: 18,
            }}>Start Today</p>
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(26px, 4.5vw, 44px)", fontWeight: 700,
              color: "#FFFFFF", lineHeight: 1.2, marginBottom: 20,
            }}>
              Ready to See What Your OB/GYN Practice Is Really Owed?
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.72)", fontSize: 17, lineHeight: 1.75,
              marginBottom: 42,
            }}>
              Start with a free revenue audit. Our specialists analyze your current billing,
              identify every leakage point, and show you exactly how much we can recover —
              no commitment required.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="ab-cta-btns" style={{
              display: "flex", gap: 16,
              justifyContent: "center", flexWrap: "wrap",
            }}>
              <Link href="/contact" className="ab-btn-primary" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: T.teal, color: "#FFFFFF",
                padding: "16px 38px", borderRadius: 8,
                fontWeight: 600, fontSize: 14,
                letterSpacing: "0.05em", textTransform: "uppercase",
                textDecoration: "none",
              }}>
                Get Free Revenue Audit →
              </Link>
              <Link href="/calculator" className="ab-btn-secondary" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "#FFFFFF",
                padding: "16px 38px", borderRadius: 8,
                fontWeight: 600, fontSize: 14,
                letterSpacing: "0.05em", textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
              }}>
                Try Revenue Calculator
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
