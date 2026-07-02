// app/(marketing)/terms/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Terms of Service | OBGYNBillingPro',
    description:
      'OBGYNBillingPro Terms of Service. The terms governing use of our OB/GYN medical billing and revenue cycle management services. Effective April 2026.',
    alternates: { canonical: 'https://obgynbillingpro.com/terms' },
    openGraph: {
      title: 'Terms of Service | OBGYNBillingPro',
      description: 'The terms governing use of our OB/GYN medical billing and revenue cycle management services.',
      url: 'https://obgynbillingpro.com/terms',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'Terms of Service | OBGYNBillingPro', description: 'Terms governing use of our services.' },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service — OBGYNBillingPro',
  url: 'https://obgynbillingpro.com/terms',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing our website, submitting a form, signing a service agreement, or otherwise using OBGYNBillingPro's services, you ("Client," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our website or services.

These Terms apply in addition to, and do not replace, any signed service agreement or Business Associate Agreement (BAA) between you and OBGYNBillingPro. Where a conflict exists between these Terms and a signed service agreement, the signed service agreement controls.`,
  },
  {
    title: '2. Description of Services',
    body: `OBGYNBillingPro provides medical billing and revenue cycle management services to OB/GYN practices, including but not limited to: claims submission, coding and coding audits, denial management, eligibility verification, credentialing support, and related administrative services (the "Services").

The specific scope of Services provided to a given Client is defined in that Client's individual service agreement. General descriptions of our Services on this website are for informational purposes and do not themselves constitute a service agreement.`,
  },
  {
    title: '3. Client Responsibilities',
    body: `As a condition of receiving our Services, you agree to:

• Provide accurate, complete, and timely information necessary for claims submission and billing, including patient encounter data, clinical documentation, and insurance information.
• Maintain valid provider credentials and licensure required to bill for services rendered.
• Review and approve claims and reports within the timeframes specified in your service agreement.
• Promptly notify us of any changes to your practice's payer contracts, provider roster, or billing NPI/Tax ID information.
• Comply with all applicable healthcare laws and regulations, including HIPAA, in your own operations.

We are not responsible for revenue loss, denials, or compliance issues resulting from inaccurate, incomplete, or untimely information provided by the Client.`,
  },
  {
    title: '4. Fees & Payment',
    body: `Fees for Services are set out in your individual service agreement and are typically structured as a percentage of collections, a flat monthly fee, or a hybrid model as agreed in writing.

• Invoices are due within the timeframe specified in your service agreement, typically net 15 or net 30 days.
• Late payments may be subject to a late fee as specified in your service agreement.
• Fee disputes must be raised in writing within 30 days of the invoice date.
• We reserve the right to suspend Services for accounts more than 60 days past due, with prior written notice.

Fee schedules and pricing structures are reviewed periodically and any changes will be communicated in writing prior to taking effect for existing Clients.`,
  },
  {
    title: '5. HIPAA & Business Associate Agreement',
    body: `OBGYNBillingPro acts as a Business Associate under HIPAA when handling Protected Health Information (PHI) on behalf of a Client. A signed Business Associate Agreement (BAA) is required before any PHI is transmitted to or processed by us, and is incorporated by reference into these Terms once executed.

Our data handling, security, and breach notification practices are described in our BAA and our Privacy Policy. In the event of any conflict between these Terms and an executed BAA regarding the handling of PHI, the BAA controls.`,
  },
  {
    title: '6. Intellectual Property',
    body: `All content on this website — including text, graphics, logos, and software — is the property of OBGYNBillingPro or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our website content without prior written permission.

Any proprietary tools, templates, workflows, or reporting formats we use to deliver Services remain our intellectual property, even when customized for a specific Client engagement, unless otherwise agreed in writing.`,
  },
  {
    title: '7. Confidentiality',
    body: `Both parties agree to maintain the confidentiality of proprietary, financial, and patient information disclosed during the course of the engagement, using at least the same degree of care used to protect their own confidential information, and no less than a reasonable degree of care.

This obligation survives termination of Services and continues for as long as the underlying information remains confidential, except as required by law or as otherwise permitted under a signed BAA.`,
  },
  {
    title: '8. Disclaimers',
    body: `Our Services are provided on an "as is" and "as available" basis. While we apply industry-standard billing and coding practices, we do not guarantee any specific reimbursement outcome, claim approval rate, or revenue figure, as these depend significantly on factors outside our control, including payer policy, Client documentation quality, and regulatory changes.

Website content, including blog articles and educational resources, is provided for general informational purposes only and does not constitute legal, financial, or coding advice for any specific claim or situation. Always consult your compliance officer or legal counsel for guidance specific to your practice.`,
  },
  {
    title: '9. Limitation of Liability',
    body: `To the maximum extent permitted by law, OBGYNBillingPro's total liability arising out of or related to the Services shall not exceed the fees paid by the Client to OBGYNBillingPro in the six (6) months preceding the event giving rise to the claim.

In no event shall OBGYNBillingPro be liable for indirect, incidental, consequential, or punitive damages, including lost profits or lost revenue, even if advised of the possibility of such damages, except where such limitation is prohibited by law or where the damages arise from a breach of confidentiality or HIPAA obligations.`,
  },
  {
    title: '10. Indemnification',
    body: `You agree to indemnify and hold harmless OBGYNBillingPro from any claims, damages, or expenses (including reasonable attorney's fees) arising from your breach of these Terms, your violation of applicable law, or inaccurate information you provided that was relied upon in the course of Services.

We agree to indemnify and hold harmless the Client from claims arising directly from our gross negligence or willful misconduct in performing the Services, subject to the limitations described in Section 9.`,
  },
  {
    title: '11. Term & Termination',
    body: `These Terms remain in effect for as long as you use our website or Services. Individual service agreements specify their own term length and termination provisions, which typically include a notice period (commonly 30 or 60 days) for termination without cause.

Upon termination, we will provide reasonable transition assistance, including return or secure destruction of PHI as specified in the BAA, and final accounting of outstanding claims and payments as specified in the service agreement.`,
  },
  {
    title: '12. Governing Law & Dispute Resolution',
    body: `These Terms are governed by the laws of the United States and the state specified in your service agreement, without regard to conflict-of-law principles.

Any dispute arising out of these Terms or a service agreement will first be addressed through good-faith negotiation between the parties. If unresolved, disputes will be handled according to the dispute resolution process (which may include mediation or arbitration) specified in your individual service agreement.`,
  },
  {
    title: '13. Changes to These Terms',
    body: `We may update these Terms periodically to reflect changes in our Services, legal requirements, or business practices. Material changes will be communicated via email to active Clients and posted on this page with an updated effective date. Continued use of our website or Services after such changes constitutes acceptance of the updated Terms.`,
  },
  {
    title: '14. Contact Us',
    body: `For questions about these Terms:

Email: ${process.env.NEXT_PUBLIC_EMAIL ?? 'support@obgynbillingpro.com'}
Phone: ${process.env.NEXT_PUBLIC_PHONE ?? '+1 (800) 000-0000'}

OBGYNBillingPro
United States`,
  },
];

export default function TermsPage() {
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
            Terms of Service
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
            These Terms of Service govern your use of the OBGYNBillingPro website and your engagement of our OB/GYN medical billing and revenue cycle management services. Please read them carefully before using our website or services.
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
              <Link href="/privacy" style={{ color: '#0E7C7B', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Privacy Policy →
              </Link>
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