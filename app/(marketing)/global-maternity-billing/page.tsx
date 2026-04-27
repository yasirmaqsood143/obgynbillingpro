// app/(marketing)/global-maternity-billing/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Global Maternity Billing Service | OB/GYN Experts',
    description:
      'Expert OB/GYN global maternity billing. CPT 59400, 59510, 59610, 59618, 59430. We track every global period, mid-pregnancy payer change, and 2027 CMS transition.',
    alternates: { canonical: 'https://obgynbillingpro.com/global-maternity-billing' },
    openGraph: {
      title: 'Global Maternity Billing Experts | OBGYNBillingPro',
      description: 'Stop losing $100–$120 per pregnancy to global period errors. CPC-OB certified maternity billing specialists.',
      url: 'https://obgynbillingpro.com/global-maternity-billing',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'Global Maternity Billing | OBGYNBillingPro', description: 'Expert global OB maternity billing. CPT 59400, 59510, 59610.' },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': ['FAQPage', 'MedicalBusiness'],
  name: 'Global Maternity Billing — OBGYNBillingPro',
  url: 'https://obgynbillingpro.com/global-maternity-billing',
  medicalSpecialty: 'Obstetrics',
  mainEntity: [
    { '@type': 'Question', name: 'What is a global OB package?', acceptedAnswer: { '@type': 'Answer', text: 'A global OB package bundles antepartum visits, the delivery, and postpartum care into a single CPT code (e.g., 59400 for vaginal delivery). The global period typically begins at the first antepartum visit after 28 weeks.' } },
    { '@type': 'Question', name: 'When does the global period start?', acceptedAnswer: { '@type': 'Answer', text: 'The global maternity period generally begins after the first antepartum visit and includes all routine antepartum visits, the delivery, and one postpartum visit. The exact start depends on payer rules.' } },
    { '@type': 'Question', name: 'Can I bill antepartum visits separately?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — CPT codes 59425 (4-6 antepartum visits) and 59426 (7+ antepartum visits) allow separate billing when the physician does not complete the delivery, or when care is split between providers.' } },
    { '@type': 'Question', name: 'How do you handle mid-pregnancy insurance changes?', acceptedAnswer: { '@type': 'Answer', text: 'Mid-pregnancy insurance changes require switching global package billing from the original payer to the new payer, often requiring retroactive claims or component billing. We track every payer transition automatically.' } },
    { '@type': 'Question', name: 'What happens with a failed VBAC?', acceptedAnswer: { '@type': 'Answer', text: 'A failed VBAC (vaginal birth after cesarean) that converts to cesarean is billed with CPT 59618 (attempted VBAC, cesarean delivery) or 59620 for the cesarean only. Incorrect coding is one of the most common and costly errors in maternity billing.' } },
  ],
};

const cptCodes = [
  { code: '59400', desc: 'Global vaginal delivery package (antepartum + delivery + postpartum)', type: 'Global Package' },
  { code: '59510', desc: 'Global cesarean delivery package (antepartum + C-section + postpartum)', type: 'Global Package' },
  { code: '59610', desc: 'Global VBAC — routine vaginal delivery after prior C-section', type: 'VBAC' },
  { code: '59618', desc: 'Attempted VBAC — resulting in cesarean delivery', type: 'Failed VBAC' },
  { code: '59430', desc: 'Postpartum care only — separate from delivery package', type: 'Postpartum' },
  { code: '59425', desc: 'Antepartum care only — 4–6 visits (split care)', type: 'Antepartum' },
  { code: '59426', desc: 'Antepartum care only — 7+ visits (split care)', type: 'Antepartum' },
  { code: '59409', desc: 'Vaginal delivery only — no antepartum or postpartum', type: 'Delivery Only' },
  { code: '59515', desc: 'Cesarean delivery only — no antepartum or postpartum', type: 'Delivery Only' },
];

const icd10Codes = [
  { code: 'O80',    desc: 'Normal delivery, uncomplicated' },
  { code: 'O34.21', desc: 'Maternal care for scar from previous cesarean delivery' },
  { code: 'Z34',    desc: 'Encounter for supervision of normal pregnancy' },
  { code: 'O60',    desc: 'Preterm labor' },
  { code: 'O14',    desc: 'Pre-eclampsia' },
  { code: 'O30',    desc: 'Multiple gestation' },
  { code: 'O82',    desc: 'Encounter for cesarean delivery without indication' },
  { code: 'Z3A',    desc: 'Weeks of gestation (Z3A.xx — specify weeks)' },
];

const painPoints = [
  { p: 'Global period tracking errors', s: 'Automated tracking of each patient\'s global period start/end date across all payer rules' },
  { p: 'Mid-pregnancy insurance changes', s: 'Real-time payer change detection with same-day rebilling workflow' },
  { p: 'VBAC billing mistakes (CPT 59618 vs 59610)', s: 'Pre-submission delivery type verification against patient history' },
  { p: 'Antepartum underbilling (CPT 59425/59426)', s: 'Automated split-care tracking when delivery is at a different facility' },
  { p: 'Postpartum visit missed billing', s: 'Post-discharge follow-up reminder triggers for 59430 billing' },
  { p: '2027 transition to service-based billing', s: 'Migration planning and coder training for component-based billing' },
];

const faqs = [
  { q: 'What is a global OB package?', a: 'A global OB package bundles antepartum visits, the delivery, and postpartum care into a single CPT code — 59400 for vaginal delivery or 59510 for cesarean. Errors in package assignment or period tracking are the leading cause of maternity billing revenue loss.' },
  { q: 'When does the global period start?', a: 'The global maternity period typically begins after the first antepartum visit (often after 28 weeks), following the date the physician commits to deliver the patient. The exact rules vary by payer — Medicare, Medicaid, and commercial payers each have different definitions.' },
  { q: 'Can I bill antepartum visits separately?', a: 'Yes. CPT 59425 (4–6 antepartum visits) and 59426 (7+ antepartum visits) allow separate billing when the delivering physician does not provide the full antepartum course, such as in referral or split-care situations.' },
  { q: 'How do you handle mid-pregnancy insurance changes?', a: 'We track every active patient\'s insurance in real time. When a mid-pregnancy change occurs, we immediately switch billing to the new payer, adjust the global package assignment, and retroactively bill any antepartum visits under the prior payer using component codes.' },
  { q: 'What happens with a failed VBAC billing-wise?', a: 'A VBAC attempt that converts to cesarean is billed with CPT 59618 (attempted VBAC, cesarean). If only the cesarean is billable (antepartum done separately), use 59620. Incorrect coding between 59610, 59618, and 59620 is one of the highest-value error patterns we correct.' },
];

export default function GlobalMaternityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F2D 0%, #0E2A3A 100%)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <nav style={{ marginBottom: 24 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none' }}>Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span>
            <span style={{ color: '#0E7C7B', fontSize: 13 }}>Global Maternity Billing</span>
          </nav>
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(226,114,91,0.15)', border: '1px solid rgba(226,114,91,0.4)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
              <span style={{ color: '#E2725B', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>⚠ 2027 CMS Transition</span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: 20 }}>
              Global Maternity Billing Experts — We Track Every Global Period So You Don&apos;t Lose a Dollar
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75, marginBottom: 32 }}>
              From CPT 59400 through VBAC coding and the 2027 service-based billing transition, our CPC-OB certified team manages every aspect of your global maternity billing.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Free Maternity Billing Audit →
              </Link>
              <Link href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
                Revenue Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance bar */}
      <section style={{ padding: '14px 24px', background: '#F7FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
          {['HIPAA Compliant', 'BAA Available', 'SOC 2 Type II', 'AAPC CPC-OB', 'AHIMA', 'MGMA', 'HIMSS'].map((b) => (
            <span key={b} style={{ fontSize: 12, fontWeight: 600, color: '#0E7C7B', background: '#E0F4F4', padding: '4px 12px', borderRadius: 100 }}>{b}</span>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ padding: '40px 24px', background: 'linear-gradient(135deg, #0E7C7B, #065F5E)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
          {[
            { v: '98.2%', l: 'First-Pass Rate' },
            { v: '$100–$120', l: 'Avg Recovered Per Pregnancy' },
            { v: '200+', l: 'Practices Served' },
            { v: '2027', l: 'Transition Ready' },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(22px,3.5vw,36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 4 }}>{s.v}</div>
              <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 13 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pain points */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 12 }}>
            The #1 Source of OB Revenue Loss
          </h2>
          <p style={{ color: '#4A5568', fontSize: 15, textAlign: 'center', maxWidth: 560, margin: '0 auto 40px' }}>
            Global maternity billing errors cost OB/GYN practices $100–$120 per pregnancy. Here&apos;s what goes wrong — and how we fix it.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {painPoints.map((item, i) => (
              <div key={i} style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: '24px 22px' }}>
                <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                  <span style={{ color: '#E53E3E', fontSize: 18, flexShrink: 0 }}>✗</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#2B2D42' }}>{item.p}</span>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <span style={{ color: '#0E7C7B', fontSize: 18, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 14, color: '#4A5568', lineHeight: 1.65 }}>{item.s}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPT Codes */}
      <section style={{ padding: '80px 24px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', marginBottom: 8 }}>Global Maternity CPT Code Reference</h2>
          <p style={{ color: '#4A5568', fontSize: 15, marginBottom: 32 }}>CPC-OB certified coders who know every code, every modifier, every edge case.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#FFFFFF', borderRadius: 12, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
              <thead>
                <tr style={{ background: '#E0F4F4' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#0E7C7B', letterSpacing: '0.06em', textTransform: 'uppercase' }}>CPT Code</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#0E7C7B', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Description</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#0E7C7B', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Type</th>
                </tr>
              </thead>
              <tbody>
                {cptCodes.map((row, i) => (
                  <tr key={row.code} style={{ borderTop: '1px solid #E2E8F0', background: i % 2 === 0 ? '#FFFFFF' : '#F7FAFC' }}>
                    <td style={{ padding: '14px 20px' }}>
                      <code style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 700, color: '#0E7C7B' }}>{row.code}</code>
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: 14, color: '#2B2D42' }}>{row.desc}</td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#065F5E', background: '#E0F4F4', padding: '3px 10px', borderRadius: 100 }}>{row.type}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ICD-10 */}
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1A2B3C', marginTop: 48, marginBottom: 20 }}>Key ICD-10-CM Diagnosis Codes</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {icd10Codes.map((c) => (
              <div key={c.code} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 10, padding: '14px 16px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700, color: '#2B6CB0', flexShrink: 0 }}>{c.code}</code>
                <span style={{ fontSize: 13, color: '#4A5568' }}>{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2027 Callout */}
      <section style={{ padding: '72px 24px', background: '#1A2B3C' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ background: 'rgba(226,114,91,0.1)', border: '1px solid rgba(226,114,91,0.3)', borderRadius: 16, padding: '40px 36px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(226,114,91,0.2)', borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ color: '#E2725B', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>⚠ 2027 Transition Alert</span>
            </div>
            <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>
              CMS Is Eliminating Global Maternity Packages in 2027
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
              The Centers for Medicare &amp; Medicaid Services is transitioning from global maternity billing to <strong style={{ color: '#FFFFFF' }}>service-based (component) billing</strong> starting in 2027. This means every antepartum visit, the delivery, and postpartum care will be billed separately — fundamentally changing how OB/GYN practices capture revenue.
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
              {[
                'Individual E/M codes for each antepartum visit',
                'Separate delivery CPT codes per episode',
                'Per-service postpartum billing',
                'New documentation requirements per visit',
                'Payer-by-payer adoption timeline varies',
              ].map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, display: 'flex', gap: 10 }}>
                  <span style={{ color: '#E2725B', flexShrink: 0 }}>→</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#E2725B', color: '#FFFFFF', padding: '13px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', marginTop: 24 }}>
              Prepare for 2027 Transition →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 40 }}>
            Global Maternity Billing — Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: '0' }}>
                <summary style={{ padding: '20px 24px', fontSize: 15, fontWeight: 600, color: '#1A2B3C', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.q}
                  <span style={{ color: '#0E7C7B', fontSize: 20, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <div style={{ padding: '0 24px 20px', color: '#4A5568', fontSize: 14, lineHeight: 1.75 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '72px 24px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 32, marginBottom: 16, color: '#0E7C7B' }}>&ldquo;</div>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: '#2B2D42', marginBottom: 24 }}>
            We were losing nearly $150 per delivery to global period tracking errors. OBGYNBillingPro identified the issue within the first week and recovered over $48,000 in the first 6 months.
          </p>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1A2B3C' }}>Dr. Maria T.</div>
          <div style={{ fontSize: 13, color: '#718096' }}>OB/GYN, Solo Practice — Texas</div>
        </div>
      </section>

      {/* Related services */}
      <section style={{ padding: '48px 24px', background: '#E0F4F4' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0E7C7B', textAlign: 'center', marginBottom: 20 }}>Related Services</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/denial-management" style={{ background: '#FFFFFF', color: '#0E7C7B', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(14,124,123,0.2)' }}>Denial Management →</Link>
            <Link href="/revenue-cycle-management" style={{ background: '#FFFFFF', color: '#0E7C7B', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(14,124,123,0.2)' }}>Revenue Cycle Management →</Link>
            <Link href="/calculator" style={{ background: '#0E7C7B', color: '#FFFFFF', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Revenue Calculator →</Link>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <section style={{ padding: '64px 24px', background: 'linear-gradient(135deg, #0D1F2D, #1A2B3C)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>
            Ready to Stop Losing Revenue on Every Delivery?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Start with a free global maternity billing audit. We&apos;ll identify every error pattern and show you exactly what we can recover.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '15px 32px', borderRadius: 8, fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Get Free Revenue Audit →
          </Link>
        </div>
      </section>
    </>
  );
}
