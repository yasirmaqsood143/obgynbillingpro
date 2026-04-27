// app/(marketing)/privacy/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Privacy Policy | OBGYNBillingPro',
    description:
      'OBGYNBillingPro privacy policy. How we collect, use, and protect your data. HIPAA compliant. BAA available. Effective April 2026.',
    alternates: { canonical: 'https://obgynbillingpro.com/privacy' },
    openGraph: {
      title: 'Privacy Policy | OBGYNBillingPro',
      description: 'Our privacy practices and data handling policies.',
      url: 'https://obgynbillingpro.com/privacy',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'Privacy Policy | OBGYNBillingPro', description: 'Privacy and data handling policy.' },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy — OBGYNBillingPro',
  url: 'https://obgynbillingpro.com/privacy',
};

const sections = [
  {
    title: '1. Information We Collect',
    body: `We collect the following categories of information:

• Contact information: name, email address, phone number, practice name, and practice size when you submit a form or create an account.
• Usage data: pages visited, time on site, referring URL, browser type, and IP address through analytics tools.
• Protected Health Information (PHI): billing data, claim information, and related documents you upload through the secure client portal. PHI is handled under a separate Business Associate Agreement (BAA) in accordance with HIPAA.
• Communications: messages you send through our contact forms or portal messaging system.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `We use collected information to:

• Provide OB/GYN medical billing and revenue cycle management services.
• Respond to inquiries and schedule consultations.
• Send transactional emails related to your account or service delivery.
• Improve our website and services based on usage analytics.
• Comply with legal obligations, including HIPAA and applicable state regulations.

We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: '3. HIPAA Compliance & PHI Handling',
    body: `OBGYNBillingPro is a Business Associate under HIPAA. We handle Protected Health Information (PHI) only as described in our Business Associate Agreement (BAA), which is required before any PHI is shared with us.

PHI is:
• Encrypted at rest using AES-256 (AWS KMS).
• Encrypted in transit using TLS 1.3+.
• Accessible only to authorized personnel with the minimum necessary access.
• Never stored in application logs, analytics, or error-tracking systems.
• Subject to mandatory FIDO2/TOTP multi-factor authentication for portal access.

To request a BAA, contact us at ${process.env.NEXT_PUBLIC_EMAIL ?? 'support@obgynbillingpro.com'}.`,
  },
  {
    title: '4. Third-Party Vendors',
    body: `We work with the following vendors that may process data on our behalf:

• AWS (S3, RDS) — Cloud storage and database (HIPAA-eligible, BAA signed)
• Resend — Transactional email (BAA-covered)
• Vercel — Hosting platform (BAA available)
• PostHog — Product analytics (no PHI transmitted)
• Sentry — Error tracking (no PHI in error payloads)

All vendors with access to ePHI are required to sign a BAA prior to go-live.`,
  },
  {
    title: '5. Data Retention',
    body: `• Lead and contact form data: retained for 2 years from last contact.
• Portal data and documents: retained per the terms of your service agreement, minimum 6 years per HIPAA record retention requirements.
• Audit logs: 90-day hot storage, then archived to S3 Glacier for 6 years.
• Analytics data: retained for 24 months.

You may request deletion of your personal data (excluding data we are legally required to retain) by contacting us.`,
  },
  {
    title: '6. Your Rights',
    body: `You have the right to:

• Access the personal information we hold about you.
• Request correction of inaccurate data.
• Request deletion of your data where legally permissible.
• Opt out of marketing communications at any time by clicking "Unsubscribe" or contacting us.
• For PHI: exercise your rights under HIPAA, including the right to access and amend your health information. Contact your covered entity (your OB/GYN practice) to exercise these rights.`,
  },
  {
    title: '7. Cookies & Tracking',
    body: `We use first-party cookies for session management and analytics. We do not use third-party advertising cookies. You can control cookie preferences through your browser settings.

Analytics: We use PostHog for product analytics. PostHog does not receive any PHI. You can opt out of analytics by enabling "Do Not Track" in your browser.`,
  },
  {
    title: '8. Security',
    body: `We implement administrative, technical, and physical safeguards to protect your information. These include AES-256 encryption, TLS 1.3+, phishing-resistant MFA, role-based access control, and immutable audit logging. See our HIPAA Compliance page for full technical details.

Despite our safeguards, no internet transmission is completely secure. If you believe your information has been compromised, contact us immediately.`,
  },
  {
    title: '9. Changes to This Policy',
    body: `We may update this Privacy Policy periodically. Material changes will be communicated via email to active clients and posted on this page with an updated effective date. Continued use of our services after such changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '10. Contact Us',
    body: `For privacy-related inquiries:

Email: ${process.env.NEXT_PUBLIC_EMAIL ?? 'support@obgynbillingpro.com'}
Phone: ${process.env.NEXT_PUBLIC_PHONE ?? '+1 (800) 000-0000'}

OBGYNBillingPro
United States`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section style={{ background: '#1A2B3C', padding: '56px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0E7C7B', marginBottom: 12 }}>
            Legal
          </p>
          <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15 }}>
            Effective Date: April 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '64px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ color: '#4A5568', fontSize: 16, lineHeight: 1.8, marginBottom: 40, padding: '20px 24px', background: '#E0F4F4', borderRadius: 10, borderLeft: '4px solid #0E7C7B' }}>
            OBGYNBillingPro (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy of our clients, website visitors, and the patients whose data we process on behalf of OB/GYN practices. This policy describes how we collect, use, and protect personal and health information.
          </p>

          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1A2B3C', marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid #E2E8F0' }}>
                {s.title}
              </h2>
              <div style={{ color: '#4A5568', fontSize: 15, lineHeight: 1.85, whiteSpace: 'pre-line' }}>
                {s.body}
              </div>
            </div>
          ))}

          <div style={{ marginTop: 48, padding: '24px', background: '#F7FAFC', borderRadius: 12, border: '1px solid #E2E8F0' }}>
            <p style={{ color: '#4A5568', fontSize: 14, marginBottom: 16 }}>
              Related policies and resources:
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/hipaa" style={{ color: '#0E7C7B', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                HIPAA Compliance →
              </Link>
              <Link href="/contact" style={{ color: '#0E7C7B', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
