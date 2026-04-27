// app/(marketing)/calculator/page.tsx
// Server component: exports metadata + JSON-LD, renders client calculator.

import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'OB/GYN Revenue Leakage Calculator | Free Tool',
    description:
      'Calculate exactly how much revenue your OB/GYN practice is losing to denials, missed modifiers, and billing inefficiencies. Free 3-step calculator.',
    alternates: { canonical: 'https://obgynbillingpro.com/calculator' },
    openGraph: {
      title: 'Free OB/GYN Revenue Leakage Calculator | OBGYNBillingPro',
      description: 'See your net collection rate, annual revenue loss, and recovery opportunity in 3 steps.',
      url: 'https://obgynbillingpro.com/calculator',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Free OB/GYN Revenue Leakage Calculator',
      description: '3-step calculator showing how much your OB/GYN practice is leaving on the table.',
    },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'OB/GYN Revenue Leakage Calculator',
  applicationCategory: 'BusinessApplication',
  description: 'Free 3-step calculator that quantifies revenue leakage in OB/GYN practices.',
  url: 'https://obgynbillingpro.com/calculator',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  operatingSystem: 'Web Browser',
};

export default function CalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F2D 0%, #0E2A3A 100%)', padding: '72px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(14,124,123,0.15)', border: '1px solid rgba(14,124,123,0.4)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
            <span style={{ color: '#0E7C7B', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Free Tool</span>
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2, marginBottom: 20 }}>
            OB/GYN Revenue Leakage Calculator
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
            Answer 8 questions about your practice and see — in real time — how much revenue
            you&apos;re leaving on the table every year.
          </p>
        </div>
      </section>

      {/* Compliance bar */}
      <section style={{ padding: '14px 24px', background: '#F7FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
          {['HIPAA Compliant', 'BAA Available', 'SOC 2 Type II', 'AAPC', 'AHIMA', 'MGMA', 'HIMSS'].map((b) => (
            <span key={b} style={{ fontSize: 12, fontWeight: 600, color: '#2B2D42', opacity: 0.7 }}>{b}</span>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section style={{ padding: '64px 0 80px', background: '#F7FAFC' }}>
        <CalculatorClient />
      </section>

      {/* Stat strip */}
      <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, #0E7C7B, #065F5E)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
          {[
            { v: '98.2%', l: 'First-Pass Rate' },
            { v: '1.4%',  l: 'Denial Rate Achieved' },
            { v: '$4.2M+',l: 'Revenue Recovered' },
            { v: '200+',  l: 'Practices Served' },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 6 }}>{s.v}</div>
              <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
