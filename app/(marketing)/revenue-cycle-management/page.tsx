// app/(marketing)/revenue-cycle-management/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'OB/GYN Revenue Cycle Management | Full RCM',
    description:
      'Full-cycle OB/GYN revenue cycle management — from eligibility verification to patient collections. 95%+ NCR, AR days under 35. Athenahealth, eCW, NextGen integration.',
    alternates: { canonical: 'https://obgynbillingpro.com/revenue-cycle-management' },
    openGraph: {
      title: 'OB/GYN RCM Services | OBGYNBillingPro',
      description: 'Complete OB/GYN revenue cycle management with real-time KPI dashboards and EHR integration.',
      url: 'https://obgynbillingpro.com/revenue-cycle-management',
      siteName: 'OBGYNBillingPro', type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'OB/GYN RCM | OBGYNBillingPro', description: 'Full RCM. 95%+ NCR. AR days under 35.' },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': ['FAQPage', 'MedicalBusiness'],
  name: 'OB/GYN Revenue Cycle Management — OBGYNBillingPro',
  url: 'https://obgynbillingpro.com/revenue-cycle-management',
  mainEntity: [
    { '@type': 'Question', name: 'What is RCM for OB/GYN?', acceptedAnswer: { '@type': 'Answer', text: 'OB/GYN revenue cycle management (RCM) covers the full billing lifecycle: insurance eligibility verification, prior authorization, charge capture, claims submission, payment posting, AR follow-up, denial management, and patient collections — all tailored to OB/GYN-specific payer rules and coding requirements.' } },
    { '@type': 'Question', name: 'How much revenue is my OB/GYN practice losing?', acceptedAnswer: { '@type': 'Answer', text: 'The average OB/GYN practice loses 15–30% of potential revenue to billing inefficiencies. With 19% claim denial rates and $57.23 per denied claim, a $250K/month practice may be leaving $37,500–$75,000 per month on the table.' } },
    { '@type': 'Question', name: 'What is a good net collection rate?', acceptedAnswer: { '@type': 'Answer', text: 'A good net collection rate (NCR) for OB/GYN is 95% or higher. NCR is calculated as total payments divided by (gross charges minus contractual adjustments). Our client average NCR is 97.6%.' } },
    { '@type': 'Question', name: 'How long does outsourcing RCM take to implement?', acceptedAnswer: { '@type': 'Answer', text: 'Our onboarding timeline is 2–4 weeks. Week 1: EHR access and workflow review. Week 2: payer rule configuration and staff training. Weeks 3–4: parallel billing before full handoff. Most practices see first payments in week 2.' } },
  ],
};

const rcmCycle = [
  { step: '01', title: 'Eligibility Verification', desc: 'Real-time insurance verification for every OB/GYN patient before the appointment. Catches expired coverage, wrong payer, and missing authorizations before they cause denials.', icon: '✓' },
  { step: '02', title: 'Prior Authorization',       desc: 'Automated auth requests for OB ultrasounds, GYN surgeries, robotic procedures, and high-cost diagnostic services. Auth tracking dashboard included.', icon: '📋' },
  { step: '03', title: 'Charge Capture',            desc: 'Same-day charge entry from EHR visit notes. Automated scrubbing for CPT/ICD-10 errors, missing modifiers, and bundling conflicts before submission.', icon: '💡' },
  { step: '04', title: 'Claims Submission',         desc: 'Clean claim rate of 98.2% on first submission. Electronic submission to all payers via 837P/837I EDI. Real-time submission confirmation.', icon: '📤' },
  { step: '05', title: 'Payment Posting',           desc: 'ERA/EOB auto-posting with exception flagging. Contractual adjustment verification against fee schedule. Underpayment identification and recovery.', icon: '💰' },
  { step: '06', title: 'AR Follow-Up',              desc: 'Systematic AR follow-up on all claims at 30/60/90-day intervals. Priority queue based on dollar value and aging. No claim slips past filing deadline.', icon: '🔔' },
  { step: '07', title: 'Denial Management',         desc: 'AI-powered denial detection and appeal drafting. CARC/RARC auto-analysis. 94% appeal success rate on first submission.', icon: '🛡️' },
  { step: '08', title: 'Patient Collections',       desc: 'HIPAA-compliant patient balance billing. Online payment portal. Payment plans. Compassionate collections protocols for obstetric patients.', icon: '👤' },
];

const kpis = [
  { metric: 'Net Collection Rate (NCR)',       target: '≥ 95%', ours: '97.6%', desc: 'Total payments / (Gross charges − Contractual adjustments)' },
  { metric: 'Clean Claim Rate',                target: '≥ 95%', ours: '98.2%', desc: 'Claims paid on first submission without rework' },
  { metric: 'AR Days',                         target: '< 35',  ours: '18.3',  desc: 'Average days from date of service to payment posting' },
  { metric: 'Denial Rate',                     target: '< 5%',  ours: '1.4%',  desc: 'Percentage of claims denied by payers' },
  { metric: 'First-Pass Acceptance Rate',      target: '≥ 95%', ours: '98.2%', desc: 'Claims accepted by payer clearinghouse on first pass' },
];

const ehrs = [
  { name: 'Athenahealth',       specialty: 'OB/GYN optimized',           api: true },
  { name: 'eClinicalWorks',     specialty: 'Full OB module',             api: true },
  { name: 'NextGen Healthcare', specialty: 'OB/GYN billing templates',   api: true },
  { name: 'Kareo',              specialty: 'Independent practice focus',  api: true },
  { name: 'DrChrono',           specialty: 'Mobile-first OB/GYN',        api: true },
];

const practiceSizes = [
  { size: 'Solo Physician', desc: 'Flat-rate billing from $1,500/month. Setup in 2 weeks. No minimum volume requirements.', benefits: ['Personal billing manager', 'All payer enrollment included', 'Monthly performance report'] },
  { size: 'Small Group (2–5)', desc: 'Tiered pricing $2,000–$3,500/month based on volume. Group credentialing support.', benefits: ['Dedicated team of 2–3 billers', 'Group payer contracting', 'Quarterly strategy review'] },
  { size: 'Large Group (6+)', desc: 'Enterprise pricing $3,500–$6,000/month. Custom EHR integration and reporting.', benefits: ['Dedicated account manager', 'Custom AR dashboards', 'Monthly executive reports'] },
  { size: 'Hospital-Affiliated', desc: 'Custom enterprise contract. Integration with hospital billing system. Physician group RCM.', benefits: ['CBO integration support', 'Hospital payer matrix', 'Compliance reporting'] },
];

const faqs = [
  { q: 'What is RCM for OB/GYN practices?', a: 'OB/GYN revenue cycle management covers the complete billing lifecycle — from the first eligibility check before an antepartum visit through patient balance collection after delivery. It includes coding, claim submission, payment posting, denial management, and AR follow-up, all designed around OB/GYN-specific payer rules.' },
  { q: 'How much revenue is my OB/GYN practice losing?', a: 'Industry data shows OB/GYN practices lose 15–30% of potential revenue to billing inefficiencies. For a $250K/month practice, that\'s $37,500–$75,000 per month. Our free revenue audit calculates your specific leakage based on your actual metrics.' },
  { q: 'What is a good net collection rate for OB/GYN?', a: 'A benchmark net collection rate (NCR) for OB/GYN practices is 95% or higher. NCR is calculated as total payments ÷ (gross charges − contractual adjustments). Our client average NCR is 97.6%. Below 90% indicates significant revenue leakage.' },
  { q: 'How long does the outsourcing implementation take?', a: 'Our standard onboarding is 2–4 weeks. Week 1: EHR read access review and payer credentialing audit. Week 2: charge entry workflows and fee schedule configuration. Weeks 3–4: parallel billing with daily reviews. Full handoff at week 4 with zero revenue gap.' },
];

export default function RcmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F2D 0%, #0E2A3A 100%)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <nav style={{ marginBottom: 24 }}>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none' }}>Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span>
            <span style={{ color: '#0E7C7B', fontSize: 13 }}>Revenue Cycle Management</span>
          </nav>
          <div style={{ maxWidth: 720 }}>
            <h1 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: 20 }}>
              Full-Cycle OB/GYN Revenue Management — From Eligibility to Collections
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75, marginBottom: 32 }}>
              8-step revenue cycle, purpose-built for OB/GYN. Real-time KPI dashboards. EHR integration with Athenahealth, eCW, and NextGen. 97.6% average net collection rate.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Free RCM Assessment →
              </Link>
              <Link href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
                Revenue Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section style={{ padding: '14px 24px', background: '#F7FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
          {['HIPAA Compliant', 'BAA Available', 'SOC 2 Type II', 'AAPC CPC-OB', 'AHIMA', 'MGMA'].map((b) => (
            <span key={b} style={{ fontSize: 12, fontWeight: 600, color: '#0E7C7B', background: '#E0F4F4', padding: '4px 12px', borderRadius: 100 }}>{b}</span>
          ))}
        </div>
      </section>

      {/* KPIs */}
      <section style={{ padding: '64px 24px', background: 'linear-gradient(135deg, #0E7C7B, #065F5E)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: '#FFFFFF', textAlign: 'center', marginBottom: 36 }}>Our Performance vs Industry Benchmarks</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
              <thead>
                <tr>
                  {['KPI Metric', 'Industry Target', 'Our Average', 'How It\'s Calculated'].map((h) => (
                    <th key={h} style={{ padding: '14px 18px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {kpis.map((k, i) => (
                  <tr key={k.metric} style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                    <td style={{ padding: '14px 18px', fontSize: 14, fontWeight: 600, color: '#FFFFFF' }}>{k.metric}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{k.target}</td>
                    <td style={{ padding: '14px 18px', fontSize: 16, fontWeight: 800, color: '#A7F3D0' }}>{k.ours}</td>
                    <td style={{ padding: '14px 18px', fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{k.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RCM cycle */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 48 }}>8-Step OB/GYN Revenue Cycle</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
            {rcmCycle.map((s) => (
              <div key={s.step} style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#0E7C7B', background: '#E0F4F4', padding: '4px 10px', borderRadius: 100, letterSpacing: '0.06em' }}>{s.step}</span>
                  <span style={{ fontSize: 20 }}>{s.icon}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1A2B3C', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: '#4A5568', fontSize: 13, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EHR integrations */}
      <section style={{ padding: '72px 24px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 36 }}>EHR Integrations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
            {ehrs.map((e) => (
              <div key={e.name} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 12, padding: '20px 18px', textAlign: 'center' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#1A2B3C', marginBottom: 6 }}>{e.name}</div>
                <div style={{ fontSize: 12, color: '#4A5568', marginBottom: 10 }}>{e.specialty}</div>
                {e.api && <span style={{ fontSize: 11, fontWeight: 700, color: '#276749', background: '#F0FFF4', padding: '3px 10px', borderRadius: 100 }}>API Connected</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice sizes */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 48 }}>RCM Solutions by Practice Size</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {practiceSizes.map((p) => (
              <div key={p.size} style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: '28px 24px' }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0E7C7B', marginBottom: 10 }}>{p.size}</h3>
                <p style={{ color: '#4A5568', fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
                <ul style={{ display: 'grid', gap: 8 }}>
                  {p.benefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#4A5568' }}>
                      <span style={{ color: '#0E7C7B', flexShrink: 0 }}>✓</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 40 }}>OB/GYN RCM — FAQ</h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 12 }}>
                <summary style={{ padding: '20px 24px', fontSize: 15, fontWeight: 600, color: '#1A2B3C', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                  {faq.q}<span style={{ color: '#0E7C7B', fontSize: 20, marginLeft: 12 }}>+</span>
                </summary>
                <div style={{ padding: '0 24px 20px', color: '#4A5568', fontSize: 14, lineHeight: 1.75 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '72px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 32, color: '#0E7C7B', marginBottom: 16 }}>&ldquo;</div>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: '#2B2D42', marginBottom: 24 }}>
            We went from 42 AR days and 91% collection rate to 19 AR days and 97.4% collection rate in 90 days. The ROI was immediate.
          </p>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1A2B3C' }}>Practice Administrator, Rebecca S.</div>
          <div style={{ fontSize: 13, color: '#718096' }}>5-Physician OB/GYN Group — Ohio</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 24px', background: 'linear-gradient(135deg, #0D1F2D, #1A2B3C)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>Start Your Free RCM Assessment</h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>We analyze your current billing metrics, identify leakage, and show you a realistic recovery projection — in 48 hours.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '15px 32px', borderRadius: 8, fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Free RCM Assessment →
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
