// app/(marketing)/services/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'OB/GYN Billing Services | Full RCM Suite',
    description:
      'OBGYNBillingPro offers 7 specialized OB/GYN billing services: global maternity, GYN surgery coding, denial management, credentialing, RCM, telehealth, and practice setup.',
    alternates: { canonical: 'https://obgynbillingpro.com/services' },
    openGraph: {
      title: 'OB/GYN Billing Services | OBGYNBillingPro',
      description: 'Complete OB/GYN revenue cycle management — from eligibility to collections.',
      url: 'https://obgynbillingpro.com/services',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'OB/GYN Billing Services | OBGYNBillingPro', description: 'Full-suite OB/GYN billing and RCM.' },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'OBGYNBillingPro',
  description: 'Specialized OB/GYN medical billing and revenue cycle management.',
  url: 'https://obgynbillingpro.com/services',
  medicalSpecialty: 'Obstetrics and Gynecology',
  areaServed: 'US',
};

const services = [
  {
    icon: '🤱',
    title: 'Global Maternity Billing',
    description: 'End-to-end management of global OB packages — from first antepartum visit through postpartum care. We track every period, every payer rule, and every code change.',
    benefit: 'Stop losing $100–$120 per pregnancy to global period errors',
    href: '/global-maternity-billing',
    tag: '2027 Critical',
    tagColor: '#E2725B',
  },
  {
    icon: '🔬',
    title: 'GYN Surgery Coding',
    description: 'Expert coding for laparoscopic, robotic, and open GYN procedures. 50+ CPT/modifier combinations. Zero downcoding. Full documentation audit support.',
    benefit: 'Maximize reimbursement on hysterectomy, myomectomy, and endometriosis procedures',
    href: '/gyn-surgery-coding',
    tag: 'High Revenue Impact',
    tagColor: '#0E7C7B',
  },
  {
    icon: '🛡️',
    title: 'Denial Management',
    description: 'AI-powered denial detection, root-cause analysis, and automated appeal drafting. We handle CO-97, CO-4, CO-22, CO-11, and all major OB/GYN denial codes.',
    benefit: 'Reduce denial rate below 5% with agentic AI resolution',
    href: '/denial-management',
    tag: 'AI-Powered',
    tagColor: '#2B6CB0',
  },
  {
    icon: '⚙️',
    title: 'Revenue Cycle Management',
    description: 'Full-cycle RCM from eligibility verification through patient collections. Real-time KPI dashboards, AR follow-up, and EHR integration.',
    benefit: 'Achieve 95%+ net collection rate and AR days under 35',
    href: '/revenue-cycle-management',
    tag: 'Full RCM',
    tagColor: '#4A5F3C',
  },
  {
    icon: '📋',
    title: 'Physician Credentialing',
    description: 'CAQH setup, payer enrollment, primary source verification, and re-credentialing. All commercial payers including Medicare, Medicaid, BCBS, Aetna, UHC, and Cigna.',
    benefit: 'Enroll in-network faster and eliminate revenue gaps during credentialing',
    href: '/credentialing',
    tag: 'Taxonomy 207V00000X',
    tagColor: '#2B2D42',
  },
  {
    icon: '💻',
    title: 'Telehealth Billing',
    description: 'Compliant billing for OB/GYN telehealth visits under 2026 permanent rules. GT/95 modifiers, POS 02/10, audio-only codes, and state parity law compliance.',
    benefit: 'Capture full reimbursement on every virtual OB/GYN visit',
    href: '/telehealth-billing',
    tag: '2026 Rules',
    tagColor: '#0E7C7B',
  },
  {
    icon: '🚀',
    title: 'New Practice Setup',
    description: 'End-to-end billing infrastructure for new OB/GYN practices. NPI, CAQH, payer enrollment, fee schedule, EHR selection, charge master, and superbill design.',
    benefit: 'Launch billing-ready in 30 days with the right foundation',
    href: '/practice-setup',
    tag: 'New Practice',
    tagColor: '#E2725B',
  },
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F2D 0%, #0E2A3A 100%)', padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(14,124,123,0.15)', border: '1px solid rgba(14,124,123,0.4)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
            <span style={{ color: '#0E7C7B', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>OB/GYN Only</span>
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: 20 }}>
            Every Service Built for One Specialty
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75, maxWidth: 600, margin: '0 auto 32px' }}>
            We don&apos;t offer a generic billing menu. Every service we provide was designed around
            the specific coding, payer rules, and revenue challenges of OB/GYN practices.
          </p>
          <Link href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Calculate Your Revenue Loss →
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ padding: '16px 24px', background: '#F7FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {['AAPC', 'AHIMA', 'MGMA', 'HIMSS'].map((c) => (
            <span key={c} style={{ fontSize: 13, fontWeight: 700, color: '#2B2D42', opacity: 0.65, letterSpacing: '0.06em' }}>{c}</span>
          ))}
          <span style={{ color: '#CBD5E0' }}>|</span>
          {['HIPAA Compliant', 'BAA Available', 'SOC 2 Type II'].map((b) => (
            <span key={b} style={{ fontSize: 12, fontWeight: 600, color: '#0E7C7B', background: '#E0F4F4', padding: '4px 14px', borderRadius: 100 }}>{b}</span>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0E7C7B', marginBottom: 12 }}>Our Services</p>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 700, color: '#1A2B3C', maxWidth: 560, margin: '0 auto' }}>
              Comprehensive OB/GYN Billing Solutions
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {services.map((s) => (
              <div key={s.href} style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 16, padding: '32px 26px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <span style={{ fontSize: 36 }}>{s.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', color: s.tagColor, background: s.tagColor + '18', padding: '4px 10px', borderRadius: 100 }}>{s.tag}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1A2B3C', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: '#4A5568', fontSize: 14, lineHeight: 1.75, marginBottom: 14, flex: 1 }}>{s.description}</p>
                <div style={{ background: '#E0F4F4', borderRadius: 8, padding: '10px 14px', fontSize: 12, color: '#065F5E', fontWeight: 600, marginBottom: 20 }}>
                  ✓ {s.benefit}
                </div>
                <Link href={s.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#0E7C7B', fontWeight: 700, fontSize: 14, textDecoration: 'none', paddingTop: 16, borderTop: '1px solid #E2E8F0' }}>
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '72px 24px', background: 'linear-gradient(135deg, #0E7C7B, #065F5E)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
          {[
            { v: '98.2%', l: 'First-Pass Rate' },
            { v: '97.6%', l: 'Net Collection Rate' },
            { v: '$4.2M+', l: 'Revenue Recovered' },
            { v: '200+',  l: 'Practices Served' },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 6 }}>{s.v}</div>
              <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: '#1A2B3C', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 18 }}>
            Ready to Stop Leaving Revenue on the Table?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}>
            Start with a free revenue audit. No commitment. No setup fees. Just results.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '15px 32px', borderRadius: 8, fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Get Free Revenue Audit →
            </Link>
            <Link href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#FFFFFF', padding: '15px 32px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
              Revenue Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
