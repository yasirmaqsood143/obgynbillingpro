// app/(marketing)/thank-you/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Thank You | OBGYNBillingPro',
    description:
      'Thank you for contacting OBGYNBillingPro. A CPC-OB certified specialist will reach out within one business day to schedule your free OB/GYN revenue audit.',
    alternates: { canonical: 'https://obgynbillingpro.com/thank-you' },
    robots: { index: false },
    openGraph: {
      title: 'Thank You | OBGYNBillingPro',
      description: 'We received your request and will be in touch within one business day.',
      url: 'https://obgynbillingpro.com/thank-you',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'Thank You | OBGYNBillingPro', description: 'Your request was received.' },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Thank You — OBGYNBillingPro',
  description: 'Confirmation page after submitting a lead or calculator request.',
  url: 'https://obgynbillingpro.com/thank-you',
};

const nextSteps = [
  { step: '01', title: 'Review Your Email', body: 'A confirmation email is on its way with details about what to expect from your free revenue audit.' },
  { step: '02', title: 'Specialist Call (1 Business Day)', body: 'A CPC-OB certified billing specialist will call to understand your practice\'s current billing workflow and identify leakage areas.' },
  { step: '03', title: 'Custom Revenue Audit Report', body: 'We analyze your claims data, denial patterns, and AR metrics — then deliver a clear report showing how much we can recover.' },
  { step: '04', title: 'No-Pressure Proposal', body: 'If we\'re a fit, you\'ll receive a custom proposal. No long-term contracts. No setup fees. Just results.' },
];

export default function ThankYouPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F2D 0%, #0E2A3A 100%)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'rgba(14,124,123,0.2)', border: '2px solid #0E7C7B',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px', fontSize: 32,
          }}>✓</div>
          <h1 className="font-display" style={{
            fontSize: 'clamp(28px,5vw,48px)', fontWeight: 700, color: '#FFFFFF',
            lineHeight: 1.2, marginBottom: 20,
          }}>
            You&apos;re All Set!
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, lineHeight: 1.75, marginBottom: 32 }}>
            Thank you for reaching out. A CPC-OB certified specialist will contact you
            within <strong style={{ color: '#0E7C7B' }}>one business day</strong> to schedule
            your free OB/GYN revenue audit.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/calculator" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#0E7C7B', color: '#FFFFFF',
              padding: '14px 28px', borderRadius: 8,
              fontWeight: 600, fontSize: 14, letterSpacing: '0.05em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Try Revenue Calculator →
            </Link>
            <Link href="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: '#FFFFFF',
              padding: '14px 28px', borderRadius: 8,
              fontWeight: 600, fontSize: 14, letterSpacing: '0.05em',
              textTransform: 'uppercase', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.25)',
            }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Calendly placeholder ── */}
      <section style={{ padding: '64px 24px', background: '#F7FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0E7C7B', marginBottom: 12 }}>
            Skip the Wait
          </p>
          <h2 style={{ fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: 700, color: '#1A2B3C', marginBottom: 16 }}>
            Book Your Discovery Call Now
          </h2>
          <p style={{ color: '#4A5568', fontSize: 16, marginBottom: 32 }}>
            Pick a time that works for you — 30-minute consultation with a CPC-OB specialist.
          </p>
          {/* Google Calendar Appointment Scheduling */}
          <div style={{
            background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16,
            padding: 12, overflow: 'hidden',
          }}>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Tm0Ba4LjScCYjyJH8NPFbP6VtLGC1cR9cDApVjGxT_cCPQQ-h6FKCjzDNjYZbJ71Xgn0mDkDd?gv=true"
              title="Book a discovery call with OBGYNBillingPro"
              style={{ border: 0, display: 'block', width: '100%', borderRadius: 12 }}
              width="100%"
              height={600}
              frameBorder={0}
            />
          </div>
        </div>
      </section>

      {/* ── Next steps ── */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 48 }}>
            What Happens Next
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28 }}>
            {nextSteps.map((s) => (
              <div key={s.step} style={{
                background: '#F7FAFC', border: '1px solid #E2E8F0',
                borderRadius: 16, padding: '28px 24px',
              }}>
                <div style={{
                  fontSize: 12, fontWeight: 800, letterSpacing: '0.1em',
                  color: '#0E7C7B', marginBottom: 12,
                }}>{s.step}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1A2B3C', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: '#4A5568', fontSize: 14, lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Links back ── */}
      <section style={{ padding: '48px 24px', background: '#F7FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#4A5568', fontSize: 15, marginBottom: 24 }}>
            While you wait, explore our resources:
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'Global Maternity Billing', href: '/global-maternity-billing' },
              { label: 'Denial Management', href: '/denial-management' },
              { label: 'Revenue Calculator', href: '/calculator' },
              { label: 'All Services', href: '/services' },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{
                color: '#0E7C7B', fontWeight: 600, fontSize: 14,
                textDecoration: 'none', padding: '8px 18px',
                border: '1px solid #0E7C7B', borderRadius: 8,
              }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
