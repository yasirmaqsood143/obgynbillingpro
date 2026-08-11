// app/(marketing)/contact/page.tsx
// Server component — exports metadata + JSON-LD + Google Calendar scheduler.

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Us | Free OB/GYN Revenue Audit',
    description:
      'Contact OBGYNBillingPro for a free OB/GYN revenue audit. CPC-OB certified specialists. HIPAA compliant. We respond within one business day.',
    alternates: { canonical: 'https://obgynbillingpro.com/contact' },
    openGraph: {
      title: 'Get Your Free OB/GYN Revenue Audit | OBGYNBillingPro',
      description: 'Reach out to schedule a free revenue audit with our CPC-OB certified billing team.',
      url: 'https://obgynbillingpro.com/contact',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Free OB/GYN Revenue Audit | OBGYNBillingPro',
      description: 'Schedule your free revenue audit — CPC-OB certified billing specialists.',
    },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'OBGYNBillingPro',
  description: 'Specialized OB/GYN medical billing and revenue cycle management.',
  url: 'https://obgynbillingpro.com',
  telephone: process.env.NEXT_PUBLIC_PHONE,
  email: process.env.NEXT_PUBLIC_EMAIL,
  areaServed: 'US',
  knowsAbout: ['OB/GYN billing', 'Medical billing', 'Revenue cycle management', 'HIPAA compliance'],
  hasCredential: ['AAPC CPC-OB', 'AHIMA', 'MGMA'],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0D1F2D 0%, #0E2A3A 100%)',
        padding: '72px 24px 64px',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(14,124,123,0.15)', border: '1px solid rgba(14,124,123,0.4)',
            borderRadius: 100, padding: '6px 18px', marginBottom: 24,
          }}>
            <span style={{ color: '#0E7C7B', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Free, No-Obligation Audit
            </span>
          </div>
          <h1 className="font-display" style={{
            fontSize: 'clamp(28px,5vw,48px)', fontWeight: 700,
            color: '#FFFFFF', lineHeight: 1.2, marginBottom: 20,
          }}>
            Get Your Free OB/GYN Revenue Audit
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, lineHeight: 1.75, maxWidth: 600, margin: '0 auto' }}>
            Tell us about your practice and we&apos;ll analyze your billing performance,
            identify revenue leakage, and show you exactly how much we can recover.
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

      {/* Google Calendar Appointment Scheduling */}
      <section style={{ padding: '72px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: 700, color: '#1A2B3C', marginBottom: 12 }}>
            Book Your Free Revenue Audit
          </h2>
          <p style={{ color: '#4A5568', fontSize: 16, marginBottom: 32 }}>
            Pick a time that works for you — a 30-minute consultation with a CPC-OB certified specialist. No obligation.
          </p>
          <div style={{
            background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16,
            padding: 12, overflow: 'hidden',
          }}>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Tm0Ba4LjScCYjyJH8NPFbP6VtLGC1cR9cDApVjGxT_cCPQQ-h6FKCjzDNjYZbJ71Xgn0mDkDd?gv=true"
              title="Book a free OB/GYN revenue audit with OBGYNBillingPro"
              style={{ border: 0, display: 'block', width: '100%', borderRadius: 12 }}
              width="100%"
              height={600}
              frameBorder={0}
            />
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, #0E7C7B, #065F5E)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
          {[
            { v: '98.2%', l: 'First-Pass Rate' },
            { v: '200+',  l: 'Practices Served' },
            { v: '$4.2M+',l: 'Revenue Recovered' },
            { v: '< 1 Day',l: 'Response Time' },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 6 }}>{s.v}</div>
              <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
