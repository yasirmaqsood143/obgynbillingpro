"use client";

// src/app/page.tsx
// Phase 1 — Homepage
// 100% inline styles — guaranteed rendering regardless of Tailwind JIT config.
// SEO keywords woven into visible copy per master doc Section 8 keyword lists.

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
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.unobserve(el); } },
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

// ─────────────────────────────────────────────────────────────────────────────
// FADE-IN WRAPPER
// ─────────────────────────────────────────────────────────────────────────────

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
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STAT COUNTER
// ─────────────────────────────────────────────────────────────────────────────

function StatCounter({ target, prefix = "", suffix = "", decimals = 0, inView }: {
  target: number; prefix?: string; suffix?: string; decimals?: number; inView: boolean;
}) {
  const count = useCounter(target, 2000, inView);
  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();
  return <>{prefix}{formatted}{suffix}</>;
}

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────────────────

const C = {
  teal:       "#0E7C7B",
  tealDark:   "#065F5E",
  tealLight:  "#E0F4F4",
  tealGlow:   "rgba(14,124,123,0.3)",
  navy:       "#1A2B3C",
  navyDark:   "#0D1F2D",
  bodyText:   "#4A5568",
  border:     "#E2E8F0",
  bgLight:    "#F7FAFC",
  white:      "#ffffff",
  amber:      "#D97706",
  success:    "#276749",
} as const;

const font = {
  playfair: "var(--font-playfair)",
  mono:     "var(--font-mono)",
  inter:    "var(--font-inter)",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SHARED STYLE OBJECTS
// ─────────────────────────────────────────────────────────────────────────────

const eyebrow: React.CSSProperties = {
  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em",
  textTransform: "uppercase", color: C.teal, marginBottom: "0.6rem", display: "block",
};

const sectionWrap: React.CSSProperties = {
  maxWidth: 1100, margin: "0 auto", padding: "0 24px",
};

const btnPrimary: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", gap: "0.45rem",
  background: C.teal, color: "#fff", fontWeight: 700,
  fontSize: "0.82rem", letterSpacing: "0.07em", textTransform: "uppercase",
  padding: "0.8rem 1.6rem", borderRadius: 8,
  boxShadow: `0 4px 22px ${C.tealGlow}`,
  textDecoration: "none",
  transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
};

const btnOutline: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", gap: "0.45rem",
  background: "transparent", color: C.teal, fontWeight: 700,
  fontSize: "0.82rem", letterSpacing: "0.07em", textTransform: "uppercase",
  padding: "0.78rem 1.6rem", borderRadius: 8,
  border: `2px solid ${C.teal}`,
  textDecoration: "none",
  transition: "all 0.2s",
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const trustBadges = ["AAPC", "AHIMA", "MGMA", "HIMSS"];
const complianceBadges = ["HIPAA Compliant ✓", "BAA Available ✓", "SOC 2 Type II ✓"];

const heroTrustItems = [
  "HIPAA-Compliant Infrastructure",
  "BAA Signed with Every Vendor",
  "CPC-OB Certified Coders",
  "No Setup Fee · No Lock-In",
];

const kpiRows = [
  { label: "First-Pass Acceptance Rate", value: "98.2%",  delta: "+14.1%",    up: true  },
  { label: "Avg Net Collection Rate",    value: "97.6%",  delta: "+8.3%",     up: true  },
  { label: "Claim Denial Rate",          value: "1.4%",   delta: "−17.5%",    up: false },
  { label: "Average OB/GYN AR Days",     value: "18.3 d", delta: "−11.2 days",up: false },
];

const industryStats = [
  { target: 19,    suffix: "%", prefix: "",  decimals: 0, label: "of in-network claims denied in 2025",         color: C.amber  },
  { target: 26,    suffix: "%", prefix: "",  decimals: 0, label: "surge in coding-related OB/GYN denials",      color: "#E2725B" },
  { target: 57.23, suffix: "",  prefix: "$", decimals: 2, label: "average cost to rework one denied claim",     color: C.teal   },
  { target: 30,    suffix: "%", prefix: "",  decimals: 0, label: "avg revenue lost to denials & unbilled codes",color: "#2B6CB0" },
];

const services = [
  {
    icon: "🤰", tag: null,         tagColor: "",       tagBg: "",
    title: "Global Maternity Billing",
    href: "/global-maternity-billing",
    keywords: "CPT 59400 · 59510 · 59610 · 59618",
    desc: "End-to-end management of global OB packages, antepartum billing splits, VBAC coding (CPT 59610/59618), postpartum care, and 2027 service-based transition planning.",
  },
  {
    icon: "🔬", tag: null,         tagColor: "",       tagBg: "",
    title: "GYN Surgery Coding",
    href: "/gyn-surgery-coding",
    keywords: "CPT 58570 · 58572 · 58662 · 57425",
    desc: "Expert CPT selection for laparoscopic, robotic (da Vinci), and open GYN procedures. Modifier 51/59/22 accuracy. Hysterectomy, myomectomy, and pelvic floor repair undercoding eliminated.",
  },
  {
    icon: "⚡", tag: "AI-Powered", tagColor: C.tealDark, tagBg: C.tealLight,
    title: "AI Denial Management",
    href: "/denial-management",
    keywords: "CO-97 · CO-4 · CO-22 · CARC/RARC",
    desc: "Agentic AI reads CARC/RARC denial codes, drafts appeal letters, and flags high-risk claims before submission. Predictive denial management purpose-built for OB/GYN payer rules.",
  },
  {
    icon: "📊", tag: null,         tagColor: "",       tagBg: "",
    title: "Revenue Cycle Management",
    href: "/revenue-cycle-management",
    keywords: "Eligibility · AR Follow-Up · Collections",
    desc: "Full-cycle OB/GYN RCM from real-time eligibility verification through patient statement collections. Integrated with Athenahealth, eClinicalWorks, and NextGen Healthcare.",
  },
  {
    icon: "🏥", tag: null,         tagColor: "",       tagBg: "",
    title: "Physician Credentialing",
    href: "/credentialing",
    keywords: "CAQH · Medicare · Medicaid · Commercial",
    desc: "Payer enrollment, CAQH profile management, NPI setup, and re-credentialing for new and established OB/GYN practices. Medicare, Medicaid, and commercial payer enrollment.",
  },
  {
    icon: "📋", tag: null,         tagColor: "",       tagBg: "",
    title: "Billing & Coding Audits",
    href: "/coding-audits",
    keywords: "E/M Audit · Prospective · Retrospective",
    desc: "Prospective and retrospective OB/GYN coding audits uncovering hidden revenue and reducing OIG/RAC compliance risk. 2024 AMA E/M changes and modifier usage review included.",
  },
  {
    icon: "💻", tag: "2026 Rules",  tagColor: "#2B6CB0", tagBg: "rgba(43,108,176,0.08)",
    title: "Telehealth Billing",
    href: "/telehealth-billing",
    keywords: "POS 02 · POS 10 · Modifier 95 · GT",
    desc: "OB/GYN telehealth billing for 2026 payer rules. Audio-only visit coding (G0071, G2252), place-of-service accuracy, and payer-specific telehealth coverage for prenatal and GYN visits.",
  },
  {
    icon: "🚀", tag: "New Practice", tagColor: C.success, tagBg: "rgba(39,103,73,0.08)",
    title: "New Practice Setup",
    href: "/practice-setup",
    keywords: "NPI · Fee Schedule · Payer Enrollment",
    desc: "Complete billing infrastructure for new OB/GYN practices: NPI setup, taxonomy codes, fee schedule optimization, payer contracting, EHR selection, and first-claim submission.",
  },
];

const painPoints = [
  { pain: "High OB/GYN claim denial rates",          solution: "Specialty-specific denial engine with payer rules built in — 1.4% denial rate vs. 19% industry avg" },
  { pain: "Global maternity billing errors",          solution: "Automated global period tracking, antepartum split billing, mid-pregnancy insurance change management" },
  { pain: "GYN surgery undercoding",                  solution: "CPT-level review by CPC-OB certified coders — robotic, laparoscopic, and open procedure expertise" },
  { pain: "Lost revenue from missed LARC J-codes",    solution: "AI Revenue Leakage Scanner flags J7296–J7298 missing alongside CPT 58300 insertion procedures" },
  { pain: "Staff bandwidth limitations",              solution: "Outsource OB/GYN billing to a dedicated specialist team — full-cycle RCM with an account manager assigned per practice" },
  { pain: "Payer AI downcoding engines",              solution: "Agentic AI generates structured, defensible clinical data for every appeal submission" },
  { pain: "2027 maternity code transition",           solution: "Service-based billing module already in development — clients get priority migration support" },
  { pain: "Rising cost to rework denied claims ($57)", solution: "Predictive pre-submission claim scrubbing eliminates rework before claims leave your practice" },
];

const steps = [
  { num: "01", title: "Free Audit",    desc: "We analyze 90 days of claims and map every denial pattern, missed code, and revenue gap — at zero cost to you." },
  { num: "02", title: "Custom Setup",  desc: "Payer mapping, fee schedule review, and EHR integration configured in 5 business days." },
  { num: "03", title: "Transition",    desc: "Seamless handoff with no billing gaps. We manage payer re-enrollment and staff onboarding." },
  { num: "04", title: "Live Billing",  desc: "Real-time claim submission, AI denial management, and full AR monitoring begins immediately." },
  { num: "05", title: "Optimize",      desc: "Monthly performance reports, peer benchmarks, and proactive CPT/ICD-10 update education." },
];

const testimonials = [
  {
    quote: "Our first-pass acceptance rate jumped from 71% to 96.4% in the first 90 days. We recovered over $380,000 in previously denied global maternity claims. OBGYNBillingPro knows this specialty better than any biller we've ever used.",
    name: "Dr. Rachel Nguyen", practice: "Pinnacle Women's Health Group",  location: "Austin, TX",   initial: "N",
  },
  {
    quote: "They caught 14 months of missed LARC J-codes our previous general billing company never flagged. That single audit finding alone recovered $92,000 in unbilled revenue.",
    name: "Dr. Marcus Osei",  practice: "Sunrise OB/GYN Associates",       location: "Atlanta, GA",  initial: "O",
  },
  {
    quote: "The global period tracking dashboard changed our workflow entirely. Mid-pregnancy insurance changes used to derail our entire billing cycle. Now they're handled automatically.",
    name: "Maria Espinoza",   practice: "Women's Care of the Southwest",   location: "Phoenix, AZ",  initial: "E",
  },
];

const alert2027Items = [
  { icon: "📋", title: "Global Packages Eliminated",  desc: "Each prenatal visit, delivery, and postpartum service billed individually. No more bundled OB packages." },
  { icon: "💰", title: "Fee Schedule Rebuild Required", desc: "Contracted rates for individual visit codes must be renegotiated with every commercial payer before the transition date." },
  { icon: "🛡",  title: "We're Already Preparing",     desc: "Our 2027 service-based maternity billing module is in active development. Current clients get priority migration access." },
];

const blogPosts = [
  {
    tag: "2027 Transition", tagColor: C.amber,   tagBg: "rgba(217,119,6,0.1)",
    title: "2027 Maternity Billing Transition: What Every OB/GYN Practice Needs to Know",
    date: "Mar 20, 2026", href: "/blog/2027-maternity-billing-transition",
    excerpt: "The 2027 global maternity billing transition from bundled to service-based reimbursement is the largest change to OB/GYN billing in decades. Here's what's changing and how to prepare now.",
  },
  {
    tag: "Denial Guide", tagColor: C.tealDark, tagBg: C.tealLight,
    title: "How to Fix CO-97 Denials in OB/GYN Billing",
    date: "Apr 5, 2026",  href: "/blog/co-97-denial-fix-obgyn",
    excerpt: "CO-97 is one of the most common denial codes in OB/GYN billing — and one of the most preventable. Here's exactly what it means, why it happens, and how to appeal it successfully.",
  },
  {
    tag: "Maternity Billing", tagColor: "#2B6CB0", tagBg: "rgba(43,108,176,0.1)",
    title: "Top 5 Global Maternity Billing Mistakes Costing Your Practice Thousands",
    date: "Apr 10, 2026", href: "/blog/global-maternity-billing-mistakes-2026",
    excerpt: "Global maternity billing is among the most complex in all of medicine. These five mistakes are costing OB/GYN practices thousands every month — and most have no idea they're happening.",
  },
];

const faqs = [
  {
    q: "What does an OB/GYN medical billing company do?",
    a: "OBGYNBillingPro handles the entire revenue cycle for obstetrics and gynecology practices — eligibility verification, charge capture, CPT/ICD-10 coding, claim submission, AI-powered denial management, AR follow-up, and patient collections. Because we bill exclusively for OB/GYN, we know global maternity packages, GYN surgical modifiers, and payer-specific rules that generalist billers miss.",
  },
  {
    q: "Why should I outsource OB/GYN billing instead of keeping it in-house?",
    a: "Outsourcing OB/GYN billing to a specialist team typically raises your net collection rate, lowers denial rates, and removes the overhead of hiring, training, and covering for in-house billers. Our clients average a 98.2% first-pass acceptance rate and a 1.4% denial rate versus the 19% industry average — with no long-term contracts or setup fees.",
  },
  {
    q: "Is OBGYNBillingPro HIPAA compliant?",
    a: "Yes. We are fully HIPAA compliant with a signed BAA available for every client. All ePHI is encrypted (AES-256 at rest, TLS 1.3+ in transit), access is protected with phishing-resistant MFA, and we maintain immutable audit logs. SOC 2 Type II is in progress.",
  },
  {
    q: "What OB/GYN billing services do you offer?",
    a: "Global maternity billing, GYN surgery coding, AI denial management, full revenue cycle management, physician credentialing, coding audits, telehealth billing, and new practice billing setup — all specialized for women's health practices.",
  },
  {
    q: "How much does OB/GYN billing cost?",
    a: "Pricing depends on practice size and volume, typically structured as a percentage of collections or a flat monthly retainer. Most practices find that outsourcing costs less than an equivalent in-house billing team while collecting more. Book a free revenue audit and we'll show you a specific projection for your practice.",
  },
];

const homeSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "FAQPage"],
  name: "OBGYNBillingPro",
  description:
    "The #1 OB/GYN medical billing company. Specialized OB/GYN medical billing and revenue cycle management — global maternity billing, GYN surgery coding, AI-powered denial management, and physician credentialing.",
  url: "https://obgynbillingpro.com",
  telephone: process.env.NEXT_PUBLIC_PHONE,
  email: process.env.NEXT_PUBLIC_EMAIL,
  areaServed: "US",
  medicalSpecialty: "Obstetrics and Gynecology",
  knowsAbout: [
    "OB/GYN medical billing",
    "Global maternity billing",
    "GYN surgery coding",
    "Revenue cycle management",
    "Denial management",
    "Physician credentialing",
    "HIPAA compliance",
  ],
  hasCredential: ["AAPC CPC-OB", "AHIMA", "MGMA", "HIMSS"],
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION WRAPPER
// ─────────────────────────────────────────────────────────────────────────────

function Section({ children, bg = C.white, style = {} }: {
  children: React.ReactNode; bg?: string; style?: React.CSSProperties;
}) {
  return (
    <section style={{ background: bg, padding: "5.5rem 1.5rem", ...style }}>
      {children}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION HEADING BLOCK
// ─────────────────────────────────────────────────────────────────────────────

function SectionHead({ eyebrowText, heading, sub, center = false, light = false }: {
  eyebrowText: string; heading: React.ReactNode; sub?: string; center?: boolean; light?: boolean;
}) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "3rem" }}>
      <span style={{ ...eyebrow, color: light ? "rgba(14,124,123,0.85)" : C.teal }}>{eyebrowText}</span>
      <h2 style={{
        fontFamily: font.playfair,
        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
        color: light ? "#fff" : C.navy,
        lineHeight: 1.18,
        letterSpacing: "-0.025em",
        maxWidth: center ? 580 : "none",
        margin: center ? "0 auto" : undefined,
      }}>
        {heading}
      </h2>
      {sub && (
        <p style={{
          marginTop: "1rem", fontSize: "0.95rem", lineHeight: 1.75,
          color: light ? "rgba(255,255,255,0.6)" : C.bodyText,
          maxWidth: center ? 520 : 620,
          margin: center ? "1rem auto 0" : "1rem 0 0",
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// RESPONSIVE HELPERS (scoped <style> tags)
// ─────────────────────────────────────────────────────────────────────────────

const GRID_CSS = `
  .hp-hero-grid   { display:grid; grid-template-columns:1fr;      gap:3rem;  align-items:center; }
  .hp-stat-grid   { display:grid; grid-template-columns:1fr 1fr;  gap:1.2rem; }
  .hp-svc-grid    { display:grid; grid-template-columns:1fr;      gap:1.2rem; }
  .hp-steps-grid  { display:grid; grid-template-columns:1fr 1fr;  gap:1.5rem; }
  .hp-testi-grid  { display:grid; grid-template-columns:1fr;      gap:1.2rem; }
  .hp-blog-grid   { display:grid; grid-template-columns:1fr;      gap:1.2rem; }
  .hp-alert-grid  { display:grid; grid-template-columns:1fr;      gap:3rem;   align-items:center; }
  .hp-pain-grid   { display:grid; grid-template-columns:1fr 1fr;  }
  .hp-steps-line  { display:none; }
  .hp-hero-badge-row { display:flex; flex-wrap:wrap; gap:0.7rem; }

  @media(min-width:768px) {
    .hp-stat-grid  { grid-template-columns: repeat(4,1fr); }
    .hp-svc-grid   { grid-template-columns: 1fr 1fr; }
    .hp-blog-grid  { grid-template-columns: repeat(3,1fr); }
    .hp-testi-grid { grid-template-columns: repeat(3,1fr); }
  }
  @media(min-width:1024px) {
    .hp-hero-grid  { grid-template-columns: 1.15fr 1fr; }
    .hp-svc-grid   { grid-template-columns: repeat(4,1fr); }
    .hp-steps-grid { grid-template-columns: repeat(5,1fr); }
    .hp-alert-grid { grid-template-columns: 1fr 1fr; }
    .hp-steps-line { display:block; }
  }

  /* Hover helpers */
  .hp-svc-card:hover  { transform:translateY(-6px)!important; box-shadow:0 18px 44px rgba(14,124,123,0.13)!important; border-color:${C.teal}!important; }
  .hp-blog-card:hover { transform:translateY(-4px)!important; box-shadow:0 12px 32px rgba(0,0,0,0.07)!important; }
  .hp-pain-row:hover  { background:${C.tealLight}!important; }
  .hp-btn-primary:hover  { background:${C.tealDark}!important; transform:translateY(-2px)!important; box-shadow:0 8px 30px rgba(14,124,123,0.45)!important; }
  .hp-btn-outline:hover  { background:${C.tealLight}!important; }
  .hp-btn-white:hover    { transform:translateY(-2px)!important; box-shadow:0 10px 32px rgba(0,0,0,0.22)!important; }
  .hp-btn-ghost:hover    { border-color:${C.teal}!important; color:#7DD8D7!important; }

  @keyframes obgPulse { 0%,100%{opacity:1}50%{opacity:0.3} }
  @keyframes heroFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
`;

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const [statsRef, statsInView] = useInView(0.3);

  const heroStyle = (delay = 0): React.CSSProperties => ({
    opacity: heroLoaded ? 1 : 0,
    transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  });

  return (
    <>
      <style>{GRID_CSS}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          §1 HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Hero — OB/GYN Medical Billing Services"
        style={{
          background: "linear-gradient(140deg, #091928 0%, #0D1F2D 35%, #0B2E2D 70%, #07201F 100%)",
          minHeight: "90vh", display: "flex", alignItems: "center",
          padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden",
        }}
      >
        {/* Decorative bg elements */}
        <div aria-hidden="true" style={{ position:"absolute", top:"-10%", right:"-6%", width:520, height:520, borderRadius:"50%", background:"radial-gradient(circle,rgba(14,124,123,0.18) 0%,transparent 68%)", pointerEvents:"none" }} />
        <div aria-hidden="true" style={{ position:"absolute", bottom:"-14%", left:"-8%", width:420, height:420, borderRadius:"50%", background:"radial-gradient(circle,rgba(14,124,123,0.11) 0%,transparent 68%)", pointerEvents:"none" }} />
        <div aria-hidden="true" style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)", backgroundSize:"55px 55px", pointerEvents:"none" }} />

        <div style={{ ...sectionWrap, position:"relative", zIndex:1, width:"100%" }}>
          <div className="hp-hero-grid">

            {/* ── Left: Copy ── */}
            <div style={heroStyle(0.1)}>
              {/* Specialty pill */}
              <div style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", background:"rgba(14,124,123,0.16)", border:"1px solid rgba(14,124,123,0.38)", borderRadius:100, padding:"0.3rem 0.9rem", marginBottom:"1.4rem" }}>
                <span aria-hidden="true" style={{ width:7, height:7, borderRadius:"50%", background:C.teal, display:"inline-block", animation:"obgPulse 2s infinite" }} />
                <span style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"#7DD8D7" }}>
                  Exclusively OB/GYN · Women&apos;s Health RCM
                </span>
              </div>

              <h1 style={{
                fontFamily: font.playfair,
                fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.028em",
                marginBottom: "1.3rem",
              }}>
                Stop Losing{" "}
                <em style={{ color: C.teal, fontStyle: "italic" }}>Revenue</em>
                <br />to OB/GYN Billing
                <br />Errors Your Biller
                <br />Can&apos;t Catch
              </h1>

              <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.66)", lineHeight:1.8, maxWidth:520, marginBottom:"2rem" }}>
                <strong style={{ color:"rgba(255,255,255,0.85)", fontWeight:600 }}>OBGYNBillingPro</strong> is the #1 OB/GYN medical billing company built
                exclusively for obstetrics and gynecology practices. From global maternity billing
                and GYN surgery CPT coding to AI-powered denial management, we make it simple to
                outsource OB/GYN billing and recover every dollar your practice earns.
              </p>

              {/* CTAs */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.75rem", marginBottom:"2rem" }}>
                <Link href="/contact" className="hp-btn-primary" style={btnPrimary}>
                  Get Free Revenue Audit →
                </Link>
                <Link href="/calculator" className="hp-btn-ghost" style={{
                  ...btnOutline,
                  borderColor: "rgba(255,255,255,0.28)",
                  color: "rgba(255,255,255,0.82)",
                }}>
                  Calculate My Leakage
                </Link>
              </div>

              {/* Trust micro-items */}
              <div className="hp-hero-badge-row">
                {heroTrustItems.map((t) => (
                  <span key={t} style={{ fontSize:"0.73rem", color:"rgba(255,255,255,0.42)", display:"flex", alignItems:"center", gap:"0.3rem" }}>
                    <span aria-hidden="true" style={{ color:C.teal, fontWeight:700 }}>✓</span> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right: KPI Card ── */}
            <div style={{ ...heroStyle(0.38), animation: heroLoaded ? "heroFloat 5s ease-in-out infinite" : "none" }}>
              <div style={{
                background:"rgba(255,255,255,0.05)",
                backdropFilter:"blur(14px)",
                WebkitBackdropFilter:"blur(14px)",
                border:"1px solid rgba(255,255,255,0.12)",
                borderRadius:16,
                padding:"1.6rem",
                boxShadow:"0 24px 60px rgba(0,0,0,0.3)",
              }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"1.1rem" }}>
                  <span style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)" }}>
                    Live Performance Snapshot
                  </span>
                  <span style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px rgba(34,197,94,0.7)", display:"inline-block" }} aria-label="Live" />
                </div>

                {kpiRows.map((kpi, i) => (
                  <div key={kpi.label} style={{
                    display:"flex", justifyContent:"space-between", alignItems:"center",
                    padding:"0.65rem 0",
                    borderBottom: i < kpiRows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}>
                    <span style={{ fontSize:"0.79rem", color:"rgba(255,255,255,0.52)" }}>{kpi.label}</span>
                    <div style={{ textAlign:"right" }}>
                      <div style={{ fontFamily:font.mono, fontSize:"1rem", fontWeight:700, color:"#fff", lineHeight:1 }}>{kpi.value}</div>
                      <div style={{ fontSize:"0.67rem", color: kpi.up ? "#22c55e" : "#0E7C7B", marginTop:2 }}>{kpi.delta}</div>
                    </div>
                  </div>
                ))}

                {/* Revenue recovered highlight */}
                <div style={{ marginTop:"1.1rem", padding:"1rem 1.1rem", background:"rgba(14,124,123,0.18)", borderRadius:10, border:"1px solid rgba(14,124,123,0.32)" }}>
                  <div style={{ fontSize:"0.67rem", color:"rgba(255,255,255,0.4)", marginBottom:"0.25rem" }}>Total Revenue Recovered (2025)</div>
                  <div style={{ fontFamily:font.playfair, fontSize:"1.9rem", color:"#7DD8D7", lineHeight:1, fontWeight:700 }}>$4.2M+</div>
                  <div style={{ fontSize:"0.67rem", color:"rgba(255,255,255,0.35)", marginTop:4 }}>across 200+ OB/GYN practices nationwide</div>
                </div>

                {/* Bottom labels */}
                <div style={{ display:"flex", gap:"0.5rem", marginTop:"1rem", flexWrap:"wrap" }}>
                  {["HIPAA Secure", "Real-Time", "CPC-OB Certified"].map((l) => (
                    <span key={l} style={{
                      fontSize:"0.64rem", fontWeight:600, letterSpacing:"0.06em",
                      color:"rgba(14,124,123,0.9)", background:"rgba(14,124,123,0.12)",
                      border:"1px solid rgba(14,124,123,0.22)", borderRadius:100, padding:"0.22rem 0.6rem",
                    }}>{l}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          §2 TRUST BAR
      ══════════════════════════════════════════════════════════════════ */}
      <div
        aria-label="Certifications and compliance"
        style={{ background:C.white, borderBottom:`1px solid ${C.border}`, padding:"1.2rem 1.5rem" }}
      >
        <div style={{ ...sectionWrap, display:"flex", alignItems:"center", justifyContent:"center", gap:"0.6rem", flexWrap:"wrap" }}>
          <span style={{ fontSize:"0.66rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.bodyText, marginRight:"0.4rem" }}>
            Certified &amp; Compliant
          </span>
          {trustBadges.map((b) => (
            <span key={b} style={{ display:"inline-flex", alignItems:"center", background:C.bgLight, border:`1px solid ${C.border}`, borderRadius:100, padding:"0.28rem 0.8rem", fontSize:"0.71rem", fontWeight:600, color:C.bodyText }}>
              {b}
            </span>
          ))}
          {complianceBadges.map((b) => (
            <span key={b} style={{ display:"inline-flex", alignItems:"center", background:C.tealLight, border:"1px solid rgba(14,124,123,0.22)", borderRadius:100, padding:"0.28rem 0.8rem", fontSize:"0.71rem", fontWeight:600, color:C.tealDark }}>
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          §3 INDUSTRY STATS (dark)
      ══════════════════════════════════════════════════════════════════ */}
      <Section bg={C.navy}>
        <div style={sectionWrap}>
          <FadeIn style={{ textAlign:"center", marginBottom:"3rem" }}>
            <SectionHead
              light
              center
              eyebrowText="The 2026 OB/GYN Billing Crisis"
              heading={<>General Billing Is Costing OB/GYN Practices <em style={{ color:C.teal }}>Millions</em></>}
              sub="19% of in-network claims were denied in 2025. Coding-related denials surged 26%. The cost to rework one denied claim now averages $57.23 — and it's rising."
            />
          </FadeIn>

          <div ref={statsRef} className="hp-stat-grid">
            {industryStats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  textAlign:"center", padding:"1.6rem 1.2rem",
                  background:"rgba(255,255,255,0.04)", borderRadius:12,
                  border:"1px solid rgba(255,255,255,0.08)",
                  height:"100%",
                }}>
                  <div style={{ fontFamily:font.playfair, fontSize:"clamp(2rem,3.5vw,2.8rem)", color:s.color, lineHeight:1, letterSpacing:"-0.02em", fontWeight:700 }}>
                    <StatCounter target={s.target} suffix={s.suffix} prefix={s.prefix} decimals={s.decimals} inView={statsInView} />
                  </div>
                  <div style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.48)", marginTop:"0.55rem", letterSpacing:"0.05em", textTransform:"uppercase", lineHeight:1.5 }}>
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} style={{ textAlign:"center", marginTop:"1.5rem" }}>
            <p style={{ color:"rgba(255,255,255,0.28)", fontSize:"0.72rem" }}>
              Sources: 2025 AHA Uncompensated Care Report · AMA Denial Tracking Data · MGMA Practice Operations Report 2026
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════
          §4 SERVICES GRID
      ══════════════════════════════════════════════════════════════════ */}
      <Section bg={C.bgLight}>
        <div style={sectionWrap}>
          <FadeIn style={{ textAlign:"center" }}>
            <SectionHead
              center
              eyebrowText="Full-Spectrum OB/GYN RCM"
              heading="Every OB/GYN Billing Service Under One Roof"
              sub="From global maternity billing and GYN surgery coding to AI-powered denial management and physician credentialing — purpose-built for women's health practices."
            />
          </FadeIn>

          <div className="hp-svc-grid">
            {services.map((s, i) => (
              <FadeIn key={i} delay={(i % 4) * 0.08}>
                <Link href={s.href} className="hp-svc-card" style={{
                  display:"block", background:C.white, borderRadius:12, padding:"1.4rem",
                  border:`1px solid ${C.border}`, textDecoration:"none", color:"inherit",
                  position:"relative", transition:"transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                  height:"100%",
                }}>
                  {s.tag && (
                    <span style={{
                      position:"absolute", top:"0.85rem", right:"0.85rem",
                      fontSize:"0.62rem", fontWeight:700,
                      color:s.tagColor, background:s.tagBg,
                      padding:"0.2rem 0.55rem", borderRadius:100, letterSpacing:"0.04em",
                    }}>
                      {s.tag}
                    </span>
                  )}
                  <div style={{ fontSize:"1.6rem", marginBottom:"0.6rem" }} aria-hidden="true">{s.icon}</div>
                  <h3 style={{ fontFamily:font.playfair, fontSize:"1.05rem", color:C.navy, marginBottom:"0.35rem", lineHeight:1.3 }}>
                    {s.title}
                  </h3>
                  <div style={{ fontFamily:font.mono, fontSize:"0.64rem", color:C.teal, marginBottom:"0.5rem", letterSpacing:"0.04em" }}>
                    {s.keywords}
                  </div>
                  <p style={{ fontSize:"0.81rem", color:C.bodyText, lineHeight:1.65 }}>{s.desc}</p>
                  <div style={{ marginTop:"0.9rem", fontSize:"0.77rem", fontWeight:600, color:C.teal }}>
                    Learn more →
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} style={{ textAlign:"center", marginTop:"2.5rem" }}>
            <Link href="/services" className="hp-btn-outline" style={btnOutline}>
              View All Services
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════
          §5 PAIN / SOLUTION TABLE
      ══════════════════════════════════════════════════════════════════ */}
      <Section bg={C.white}>
        <div style={sectionWrap}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"2.5rem" }}>
            <FadeIn>
              <SectionHead
                eyebrowText="Why Specialists Choose Us"
                heading={<>Every OB/GYN Billing Problem — <em style={{ color:C.teal }}>Solved<br/>With Precision</em></>}
                sub="General billing companies consistently underperform in this specialty. Global maternity packages, GYN surgical modifier rules, and payer-specific denials require CPC-OB certified specialists."
              />
            </FadeIn>

            <FadeIn delay={0.15}>
              <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, overflow:"hidden", boxShadow:"0 4px 24px rgba(0,0,0,0.05)" }}>
                {/* Table header */}
                <div className="hp-pain-grid" style={{ background:C.teal, padding:"0.8rem 1.3rem" }}>
                  <span style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.7)" }}>The Pain Point</span>
                  <span style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.7)" }}>Our OB/GYN Solution</span>
                </div>
                {painPoints.map((row, i) => (
                  <div key={i} className="hp-pain-row hp-pain-grid" style={{
                    padding:"0.95rem 1.3rem",
                    borderBottom: i < painPoints.length - 1 ? `1px solid ${C.bgLight}` : "none",
                    background: i % 2 === 0 ? C.white : C.bgLight,
                    transition:"background 0.15s",
                    alignItems:"start",
                  }}>
                    <span style={{ fontSize:"0.86rem", color:C.bodyText, paddingRight:"1rem", lineHeight:1.5, display:"flex", alignItems:"flex-start", gap:"0.5rem" }}>
                      <span aria-hidden="true" style={{ color:C.amber, fontWeight:700, flexShrink:0, marginTop:2 }}>✕</span>
                      {row.pain}
                    </span>
                    <span style={{ fontSize:"0.86rem", color:C.navy, fontWeight:500, lineHeight:1.5, display:"flex", alignItems:"flex-start", gap:"0.5rem" }}>
                      <span aria-hidden="true" style={{ color:C.teal, fontWeight:700, flexShrink:0, marginTop:2 }}>✓</span>
                      {row.solution}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════
          §6 CALCULATOR CTA BANNER
      ══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="OB/GYN Revenue Leakage Calculator"
        style={{
          background:"linear-gradient(135deg,#0E7C7B 0%,#065F5E 55%,#054C4B 100%)",
          padding:"5.5rem 1.5rem", position:"relative", overflow:"hidden",
        }}
      >
        <div aria-hidden="true" style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize:"44px 44px", pointerEvents:"none" }} />
        <div aria-hidden="true" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,255,255,0.04) 0%,transparent 65%)", pointerEvents:"none" }} />

        <div style={{ ...sectionWrap, textAlign:"center", position:"relative", zIndex:1 }}>
          <FadeIn>
            <span style={{ ...eyebrow, color:"rgba(255,255,255,0.5)" }}>Free Interactive Tool</span>
            <h2 style={{ fontFamily:font.playfair, fontSize:"clamp(1.8rem,3.2vw,2.7rem)", color:"#fff", lineHeight:1.18, letterSpacing:"-0.025em", marginBottom:"1rem" }}>
              How Much Revenue Is Your OB/GYN
              <br />Practice Losing Right Now?
            </h2>
            <p style={{ fontSize:"0.96rem", color:"rgba(255,255,255,0.7)", lineHeight:1.78, maxWidth:540, margin:"0 auto 2.2rem" }}>
              Enter 4 numbers. Get a custom estimate of annual revenue leakage from
              claim denials, missed modifiers (QW, Modifier 25), global period timing errors
              ($100–$120 per pregnancy), missed LARC J-codes, and timely filing risk.
            </p>
            <Link href="/calculator" className="hp-btn-white" style={{
              display:"inline-flex", alignItems:"center", gap:"0.45rem",
              background:"#fff", color:C.tealDark, fontWeight:700,
              fontSize:"0.85rem", letterSpacing:"0.07em", textTransform:"uppercase",
              padding:"1rem 2.1rem", borderRadius:8,
              boxShadow:"0 6px 30px rgba(0,0,0,0.18)",
              textDecoration:"none",
              transition:"transform 0.2s, box-shadow 0.2s",
            }}>
              Calculate My Revenue Leakage →
            </Link>
            <p style={{ fontSize:"0.71rem", color:"rgba(255,255,255,0.35)", marginTop:"0.85rem" }}>
              Takes 2 minutes · No credit card · No commitment
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          §7 ONBOARDING STEPS
      ══════════════════════════════════════════════════════════════════ */}
      <Section bg={C.bgLight}>
        <div style={sectionWrap}>
          <FadeIn style={{ textAlign:"center" }}>
            <SectionHead
              center
              eyebrowText="Onboarding in 5 Steps"
              heading="From Free Audit to Optimized Revenue — Fast"
              sub="Most practices are fully onboarded in under 5 business days. No billing gaps. No disruption to your existing workflow."
            />
          </FadeIn>

          <div style={{ position:"relative" }}>
            {/* Connector line (desktop only) */}
            <div className="hp-steps-line" style={{
              position:"absolute", top:"1.6rem", left:"11%", right:"11%",
              height:2, background:`linear-gradient(90deg,${C.teal},${C.tealLight},${C.teal})`, zIndex:0,
            }} aria-hidden="true" />

            <div className="hp-steps-grid" style={{ position:"relative", zIndex:1 }}>
              {steps.map((s, i) => (
                <FadeIn key={i} delay={i * 0.1} style={{ textAlign:"center" }}>
                  <div style={{
                    width:"3.4rem", height:"3.4rem", borderRadius:"50%",
                    background:`linear-gradient(135deg,${C.teal},${C.tealDark})`,
                    color:"#fff", display:"flex", alignItems:"center", justifyContent:"center",
                    margin:"0 auto 0.9rem",
                    fontFamily:font.mono, fontSize:"0.8rem", fontWeight:700,
                    boxShadow:`0 4px 18px ${C.tealGlow}`,
                  }}>
                    {s.num}
                  </div>
                  <h4 style={{ fontWeight:700, color:C.navy, marginBottom:"0.4rem", fontSize:"0.92rem" }}>{s.title}</h4>
                  <p style={{ fontSize:"0.79rem", color:C.bodyText, lineHeight:1.65 }}>{s.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════
          §8 TESTIMONIALS
      ══════════════════════════════════════════════════════════════════ */}
      <Section bg={C.white}>
        <div style={sectionWrap}>
          <FadeIn style={{ textAlign:"center" }}>
            <SectionHead
              center
              eyebrowText="Client Results"
              heading="Real Revenue. Real OB/GYN Practices."
              sub="Join 200+ obstetrics and gynecology practices that have recovered millions in lost revenue with OBGYNBillingPro."
            />
          </FadeIn>

          <div className="hp-testi-grid">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <figure style={{
                  background:C.white, borderRadius:14, padding:"1.6rem",
                  border:`1px solid ${C.border}`, position:"relative", overflow:"hidden",
                  height:"100%", display:"flex", flexDirection:"column",
                }}>
                  {/* Big quotation mark */}
                  <div aria-hidden="true" style={{
                    fontFamily:font.playfair, fontSize:"5.5rem", color:C.tealLight,
                    position:"absolute", top:"-0.5rem", left:"1rem", lineHeight:1, userSelect:"none",
                  }}>&ldquo;</div>

                  <blockquote style={{ flex:1 }}>
                    <p style={{ fontSize:"0.88rem", color:"#2B2D42", lineHeight:1.78, marginBottom:"1.3rem", position:"relative", zIndex:1 }}>
                      {t.quote}
                    </p>
                  </blockquote>

                  <figcaption style={{ display:"flex", alignItems:"center", gap:"0.7rem" }}>
                    <div aria-hidden="true" style={{
                      width:40, height:40, borderRadius:"50%",
                      background:`linear-gradient(135deg,${C.teal},${C.tealDark})`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      color:"#fff", fontSize:"0.9rem", fontWeight:700, flexShrink:0,
                    }}>
                      {t.initial}
                    </div>
                    <div>
                      <div style={{ fontWeight:700, fontSize:"0.84rem", color:C.navy }}>{t.name}</div>
                      <div style={{ fontSize:"0.73rem", color:C.bodyText }}>{t.practice}</div>
                      <div style={{ fontSize:"0.7rem", color:C.teal }}>{t.location}</div>
                    </div>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} style={{ textAlign:"center", marginTop:"2.5rem" }}>
            <Link href="/results" className="hp-btn-outline" style={btnOutline}>
              View All Case Studies
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════
          §9 2027 MATERNITY ALERT (dark)
      ══════════════════════════════════════════════════════════════════ */}
      <Section bg={C.navy}>
        <div style={sectionWrap}>
          <div className="hp-alert-grid">
            <FadeIn>
              {/* Amber alert chip */}
              <div style={{ display:"inline-flex", alignItems:"center", gap:"0.45rem", background:"rgba(217,119,6,0.13)", border:"1px solid rgba(217,119,6,0.32)", borderRadius:7, padding:"0.45rem 0.9rem", marginBottom:"1.2rem" }}>
                <span style={{ color:C.amber, fontSize:"0.8rem", fontWeight:700 }}>⚠ 2027 CODE TRANSITION ALERT</span>
              </div>

              <h2 style={{ fontFamily:font.playfair, fontSize:"clamp(1.65rem,2.8vw,2.4rem)", color:"#fff", lineHeight:1.18, letterSpacing:"-0.022em", marginBottom:"1rem" }}>
                CMS Is Eliminating Global Maternity
                Packages in 2027
              </h2>
              <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"0.91rem", lineHeight:1.78, marginBottom:"1.6rem" }}>
                The shift from global OB billing to service-based maternity billing will
                require a complete rebuild of your billing workflow, fee schedule, and payer
                contracts. Practices that don&apos;t prepare now face catastrophic revenue disruption
                the day the codes change. The 2027 maternity billing transition is the biggest
                coding overhaul in obstetrics in two decades.
              </p>
              <Link href="/resources/2027-maternity-transition" className="hp-btn-primary" style={btnPrimary}>
                Get the 2027 Transition Guide →
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                {alert2027Items.map((item, i) => (
                  <div key={i} style={{
                    display:"flex", gap:"0.9rem", alignItems:"flex-start",
                    background:"rgba(255,255,255,0.04)", borderRadius:11,
                    padding:"1rem 1.1rem", border:"1px solid rgba(255,255,255,0.07)",
                  }}>
                    <span aria-hidden="true" style={{ fontSize:"1.3rem", flexShrink:0, marginTop:2 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight:700, color:"#fff", fontSize:"0.9rem", marginBottom:"0.18rem" }}>{item.title}</div>
                      <div style={{ color:"rgba(255,255,255,0.5)", fontSize:"0.81rem", lineHeight:1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════
          §10 BLOG PREVIEW
      ══════════════════════════════════════════════════════════════════ */}
      <Section bg={C.bgLight}>
        <div style={sectionWrap}>
          <FadeIn style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:"1rem", marginBottom:"2.5rem" }}>
            <div>
              <SectionHead
                eyebrowText="OB/GYN Billing Knowledge Hub"
                heading={<>CPT &amp; ICD-10 Updates,<br />Billing Guides &amp; Denial Playbooks</>}
              />
            </div>
            <Link href="/blog" className="hp-btn-outline" style={{ ...btnOutline, padding:"0.62rem 1.2rem", fontSize:"0.76rem", flexShrink:0 }}>
              View All Posts
            </Link>
          </FadeIn>

          <div className="hp-blog-grid">
            {blogPosts.map((post, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={post.href} className="hp-blog-card" style={{
                  display:"flex", flexDirection:"column",
                  background:C.white, borderRadius:11, padding:"1.3rem",
                  border:`1px solid ${C.border}`, textDecoration:"none", color:"inherit",
                  transition:"transform 0.2s, box-shadow 0.2s", height:"100%",
                }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"0.8rem" }}>
                    <span style={{
                      fontSize:"0.64rem", fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase",
                      color:post.tagColor, background:post.tagBg, padding:"0.25rem 0.65rem", borderRadius:100,
                    }}>
                      {post.tag}
                    </span>
                    <span style={{ fontSize:"0.68rem", color:C.bodyText }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontWeight:700, color:C.navy, lineHeight:1.48, fontSize:"0.9rem", marginBottom:"0.65rem", flex:1 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize:"0.8rem", color:C.bodyText, lineHeight:1.6, marginBottom:"0.9rem" }}>
                    {post.excerpt}
                  </p>
                  <span style={{ fontSize:"0.76rem", fontWeight:600, color:C.teal }}>Read more →</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════
          §10.5 FAQ
      ══════════════════════════════════════════════════════════════════ */}
      <Section bg={C.white}>
        <div style={{ ...sectionWrap, maxWidth: 820 }}>
          <FadeIn style={{ textAlign: "center" }}>
            <SectionHead
              center
              eyebrowText="OB/GYN Billing FAQ"
              heading="Questions About Outsourcing Your OB/GYN Billing"
              sub="Everything practices ask before switching to a specialized OB/GYN medical billing company."
            />
          </FadeIn>
          <div style={{ display: "grid", gap: 14 }}>
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <details style={{ background: C.bgLight, border: `1px solid ${C.border}`, borderRadius: 12 }}>
                  <summary style={{ padding: "18px 22px", fontSize: "0.95rem", fontWeight: 600, color: C.navy, cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                    {faq.q}
                    <span aria-hidden="true" style={{ color: C.teal, fontSize: "1.3rem", flexShrink: 0 }}>+</span>
                  </summary>
                  <div style={{ padding: "0 22px 20px", color: C.bodyText, fontSize: "0.88rem", lineHeight: 1.75 }}>
                    {faq.a}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════
          §11 FINAL CTA (dark)
      ══════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Call to action — Free OB/GYN Revenue Audit"
        style={{
          background:"linear-gradient(140deg,#091928 0%,#0D1F2D 40%,#0B2E2D 80%,#07201F 100%)",
          padding:"8rem 1.5rem", textAlign:"center", position:"relative", overflow:"hidden",
        }}
      >
        <div aria-hidden="true" style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(14,124,123,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(14,124,123,0.04) 1px,transparent 1px)", backgroundSize:"72px 72px", pointerEvents:"none" }} />
        <div aria-hidden="true" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle,rgba(14,124,123,0.13) 0%,transparent 68%)", pointerEvents:"none" }} />

        <div style={{ ...sectionWrap, position:"relative", zIndex:1 }}>
          <FadeIn>
            <span style={{ ...eyebrow, color:C.teal }}>Start Recovering Revenue Today</span>
            <h2 style={{
              fontFamily:font.playfair,
              fontSize:"clamp(2rem,3.8vw,3.1rem)",
              color:"#fff", lineHeight:1.13,
              letterSpacing:"-0.028em",
              marginBottom:"1.1rem",
              maxWidth:700, margin:"0 auto 1.1rem",
            }}>
              Ready to See What Your OB/GYN Practice{" "}
              <em style={{ color:"#7DD8D7" }}>Is Really Owed?</em>
            </h2>
            <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"0.96rem", lineHeight:1.8, maxWidth:520, margin:"0 auto 2.5rem" }}>
              Book your free OB/GYN billing audit. We analyze 90 days of claims, map
              every denial pattern, missed global maternity code, and unbilled GYN procedure —
              and show you exactly how much you&apos;re leaving on the table. Zero cost.
              Zero commitment.
            </p>

            <div style={{ display:"flex", gap:"0.85rem", justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/contact" className="hp-btn-primary" style={{ ...btnPrimary, fontSize:"0.9rem", padding:"1rem 2rem" }}>
                Book Free Revenue Audit →
              </Link>
              <Link href="/calculator" className="hp-btn-ghost" style={{
                ...btnOutline,
                borderColor:"rgba(255,255,255,0.28)", color:"rgba(255,255,255,0.8)",
                fontSize:"0.9rem", padding:"1rem 2rem",
              }}>
                Try the Calculator
              </Link>
            </div>

            <p style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.28)", marginTop:"1.4rem" }}>
              No commitment · HIPAA-secure · Response within 1 business day ·{" "}
              <span style={{ color:"rgba(14,124,123,0.7)" }}>OBGYNBillingPro.com</span>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}