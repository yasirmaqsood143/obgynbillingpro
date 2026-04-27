// app/(marketing)/hipaa/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'HIPAA Compliance | OBGYNBillingPro',
    description:
      'OBGYNBillingPro meets the 2026 HIPAA Security Rule. AES-256 encryption, FIDO2 MFA, immutable audit logs, BAA with all ePHI vendors. OB/GYN billing compliance experts.',
    alternates: { canonical: 'https://obgynbillingpro.com/hipaa' },
    openGraph: {
      title: 'HIPAA Compliance | OBGYNBillingPro',
      description: 'How OBGYNBillingPro protects your patient data under HIPAA 2026.',
      url: 'https://obgynbillingpro.com/hipaa',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'HIPAA Compliance | OBGYNBillingPro', description: 'HIPAA 2026 compliance details.' },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'HIPAA Compliance — OBGYNBillingPro',
  description: 'HIPAA Security Rule 2026 compliance details for OBGYNBillingPro.',
  url: 'https://obgynbillingpro.com/hipaa',
};

const controls = [
  { icon: '🔐', title: 'AES-256 Encryption at Rest', body: 'All ePHI stored in AWS RDS and S3 is encrypted with AES-256 using AWS KMS-managed keys. Key rotation is automated annually.' },
  { icon: '🔒', title: 'TLS 1.3+ in Transit', body: 'All data in transit between clients, our servers, and third-party vendors uses TLS 1.3 or higher. TLS 1.0/1.1 are disabled at the load-balancer level.' },
  { icon: '🛡️', title: 'FIDO2 / TOTP MFA', body: 'Phishing-resistant multi-factor authentication is mandatory for all portal users. SMS-only MFA is prohibited. FIDO2 hardware keys and TOTP apps are supported.' },
  { icon: '👤', title: 'Role-Based Access Control', body: 'Least-privilege RBAC with three roles: Admin, Staff, and Client. Row-Level Security (RLS) ensures each practice sees only its own data.' },
  { icon: '📋', title: 'Immutable WORM Audit Logs', body: 'All access and modification events are written to immutable Write Once Read Many (WORM) audit logs. Hot storage: 90 days. Cold archive: S3 Glacier.' },
  { icon: '⏱️', title: '15-Minute Session Timeout', body: 'Portal sessions auto-expire after 15 minutes of inactivity. Access tokens expire after 15 minutes; refresh tokens expire after 7 days.' },
  { icon: '🦠', title: 'ClamAV Malware Scanning', body: 'Every file uploaded through the portal is scanned by ClamAV before being moved to permanent S3 storage. Infected files are quarantined and flagged.' },
  { icon: '☁️', title: 'S3 Pre-Signed URLs Only', body: 'Files never pass through the application server. Clients upload directly to S3 via pre-signed URLs (5-minute expiry). Direct streaming through the app server is forbidden.' },
  { icon: '🚫', title: 'Zero PHI in Logs / Analytics', body: 'No patient health information is written to application logs, error tracking (Sentry), analytics (PostHog), or console output. All error messages are sanitized before logging.' },
  { icon: '📊', title: 'Rate Limiting on Auth Endpoints', body: 'Login, password reset, and API lead endpoints are rate-limited at 5 requests per IP per 15 minutes using Upstash Redis-backed rate limiting.' },
  { icon: '🔑', title: 'BAA with All ePHI Vendors', body: 'Business Associate Agreements are signed with every vendor that handles ePHI: AWS (S3, RDS), Resend, Vercel, and all authentication providers.' },
  { icon: '🚨', title: '60-Day Breach Notification', body: 'In the event of a breach, affected practices and individuals are notified within 60 days per the HIPAA Breach Notification Rule. We maintain a documented notification workflow.' },
];

const updates2026 = [
  { title: 'All Specifications Now Mandatory', body: 'The 2026 HIPAA Security Rule update removes the distinction between "required" and "addressable" specifications. All prior addressable controls are now mandatory.' },
  { title: 'Phishing-Resistant MFA Required', body: 'SMS-based authentication no longer satisfies HIPAA MFA requirements. Only FIDO2 hardware keys and TOTP authenticator apps are compliant.' },
  { title: 'Ransomware Response Plan Mandatory', body: 'Covered entities must maintain a documented ransomware incident response plan, including restoration procedures from immutable backups.' },
  { title: 'Immutable Audit Log Requirement', body: 'Audit logs must be stored in an immutable format (WORM) to prevent deletion or tampering. Our S3-based audit storage meets this requirement.' },
];

export default function HipaaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F2D 0%, #0E2A3A 100%)', padding: '72px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(14,124,123,0.15)', border: '1px solid rgba(14,124,123,0.4)',
            borderRadius: 100, padding: '6px 18px', marginBottom: 24,
          }}>
            <span style={{ color: '#0E7C7B', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              HIPAA 2026 Compliant
            </span>
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2, marginBottom: 20 }}>
            Your Patient Data, Secured to the Highest HIPAA Standard
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>
            OBGYNBillingPro is built on the 2026 HIPAA Security Rule — including all controls
            previously designated as &ldquo;addressable&rdquo; that are now mandatory.
          </p>
        </div>
      </section>

      {/* Compliance badges */}
      <section style={{ padding: '18px 24px', background: '#F7FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
          {['HIPAA Compliant', 'BAA Available', 'SOC 2 Type II (Phase 3)', 'AES-256 Encrypted', 'TLS 1.3+', 'FIDO2 MFA'].map((b) => (
            <span key={b} style={{ fontSize: 12, fontWeight: 600, color: '#0E7C7B', background: '#E0F4F4', padding: '4px 14px', borderRadius: 100 }}>
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* 2026 Updates */}
      <section style={{ padding: '72px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0E7C7B, #065F5E)',
            borderRadius: 16, padding: '40px 36px', marginBottom: 56,
          }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>
              What Changed in 2026
            </p>
            <h2 style={{ fontSize: 'clamp(22px,3.5vw,30px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 28 }}>
              HIPAA Security Rule 2026 Updates
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {updates2026.map((u, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '20px 18px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>{u.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, lineHeight: 1.65 }}>{u.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security controls grid */}
          <h2 style={{ fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 40 }}>
            Our Technical &amp; Administrative Safeguards
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {controls.map((c, i) => (
              <div key={i} style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: '24px 22px' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1A2B3C', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ color: '#4A5568', fontSize: 13, lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAA statement */}
      <section style={{ padding: '64px 24px', background: '#E0F4F4' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px,3.5vw,30px)', fontWeight: 700, color: '#1A2B3C', marginBottom: 16 }}>
            Business Associate Agreement (BAA)
          </h2>
          <p style={{ color: '#4A5568', fontSize: 16, lineHeight: 1.75, marginBottom: 24 }}>
            OBGYNBillingPro serves as your Business Associate under HIPAA. We provide a signed BAA
            before any ePHI is shared, and we maintain BAAs with every downstream vendor that touches
            your data — including AWS, Resend, and our authentication provider.
          </p>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#0E7C7B', color: '#FFFFFF',
            padding: '14px 28px', borderRadius: 8,
            fontWeight: 600, fontSize: 14, letterSpacing: '0.05em',
            textTransform: 'uppercase', textDecoration: 'none',
          }}>
            Request a BAA →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '64px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: '#1A2B3C', marginBottom: 16 }}>
            Questions About Our HIPAA Compliance?
          </h2>
          <p style={{ color: '#4A5568', fontSize: 15, marginBottom: 16 }}>
            Contact our compliance team at{' '}
            <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL ?? 'support@obgynbillingpro.com'}`} style={{ color: '#0E7C7B' }}>
              {process.env.NEXT_PUBLIC_EMAIL ?? 'support@obgynbillingpro.com'}
            </a>
          </p>
          <p style={{ color: '#718096', fontSize: 13 }}>Last reviewed: April 2026</p>
        </div>
      </section>
    </>
  );
}
