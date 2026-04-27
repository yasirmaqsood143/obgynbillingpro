// app/(marketing)/denial-management/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI-Powered OB/GYN Denial Management | Cut Denials',
    description:
      'AI-powered OB/GYN claim denial management. CO-97, CO-4, CO-22, CO-11. 94% appeal success rate. Reduce your OB/GYN denial rate below 5% with agentic automation.',
    alternates: { canonical: 'https://obgynbillingpro.com/denial-management' },
    openGraph: {
      title: 'AI OB/GYN Denial Management | OBGYNBillingPro',
      description: 'Cut your OB/GYN denial rate with AI-powered root cause analysis and automated appeal drafting.',
      url: 'https://obgynbillingpro.com/denial-management',
      siteName: 'OBGYNBillingPro', type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'AI OB/GYN Denial Management | OBGYNBillingPro', description: 'Agentic denial management. 94% appeal success.' },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': ['FAQPage', 'MedicalBusiness'],
  name: 'OB/GYN Denial Management — OBGYNBillingPro',
  url: 'https://obgynbillingpro.com/denial-management',
  mainEntity: [
    { '@type': 'Question', name: 'What causes most OB/GYN claim denials?', acceptedAnswer: { '@type': 'Answer', text: 'The top OB/GYN denial causes are: CO-97 (bundling of global package with separate procedures), CO-4 (incorrect modifier), CO-16 (missing information), CO-197 (missing prior authorization), and CO-22 (coordination of benefits issue).' } },
    { '@type': 'Question', name: 'How to appeal a CO-97 denial?', acceptedAnswer: { '@type': 'Answer', text: 'A CO-97 (payment bundled) denial is appealed by demonstrating the services are distinct and separately billable. Include the NCCI edit that was triggered, the specific modifier (59, XS, XE, XP, or XU) that justifies separate billing, and supporting documentation.' } },
    { '@type': 'Question', name: 'What is the cost of a denied claim?', acceptedAnswer: { '@type': 'Answer', text: 'The average cost to rework a denied claim in 2025 is $57.23 — including staff time, appeals preparation, and delayed cash flow. Multiply that by your monthly denial volume to see the true cost of your denial rate.' } },
    { '@type': 'Question', name: 'How does AI improve denial management?', acceptedAnswer: { '@type': 'Answer', text: 'Our AI denial engine reads CARC/RARC codes from each EOB in real time, identifies the root cause pattern, auto-drafts a customized appeal letter, and flags claims that require peer-to-peer review — reducing manual effort by 70%.' } },
  ],
};

const denialCodes = [
  { code: 'CO-97',  remark: 'CARC 97',  title: 'Payment Bundled',          desc: 'Service is included in another service already adjudicated. Most common in global OB package conflicts and same-day E/M + procedure.', severity: 'High' },
  { code: 'CO-4',   remark: 'CARC 4',   title: 'Incorrect Modifier',       desc: 'The service was inconsistent with the modifier used. Frequent in Modifier 51 vs 59 confusion and Modifier 22 without documentation.', severity: 'High' },
  { code: 'CO-22',  remark: 'CARC 22',  title: 'Coordination of Benefits', desc: 'This care may be covered by another payer. Triggered by mid-pregnancy insurance changes not caught before submission.', severity: 'Medium' },
  { code: 'PR-96',  remark: 'CARC 96',  title: 'Non-Covered Charge',       desc: 'Service not covered by the plan. Common with fertility treatments, elective sterilization, and cosmetic GYN procedures.', severity: 'Medium' },
  { code: 'CO-11',  remark: 'CARC 11',  title: 'Diagnosis Inconsistent',   desc: 'Diagnosis inconsistent with procedure. CPT/ICD-10 combination mismatch — e.g., wrong trimester code or non-specific diagnosis.', severity: 'High' },
  { code: 'CO-16',  remark: 'CARC 16',  title: 'Missing/Invalid Info',     desc: 'Claim lacks information or has invalid data. Missing NPI, invalid date of birth, or incomplete box entries.', severity: 'Medium' },
  { code: 'CO-197', remark: 'CARC 197', title: 'Prior Auth Missing',       desc: 'Precertification/authorization absent for service. Required for robotic GYN surgery, high-cost labs, and some inpatient OB stays.', severity: 'Critical' },
  { code: 'CO-50',  remark: 'CARC 50',  title: 'Non-Covered Service',     desc: 'These services are not covered. Differs from PR-96 — this denial comes from plan-level exclusions, not benefit limitations.', severity: 'Medium' },
];

const aiFeatures = [
  { icon: '🤖', title: 'Agentic Denial Prediction', desc: 'Pre-submission AI scans identify claims at high risk of denial before they\'re sent — based on payer rules, historical patterns, and real-time NCCI edits.' },
  { icon: '🔍', title: 'Automated Root-Cause Analysis', desc: 'Every denial is automatically categorized by CARC/RARC code, payer, procedure type, and root cause — no manual research required.' },
  { icon: '✉️', title: 'AI-Drafted Appeal Letters', desc: 'Our AI engine generates payer-specific appeal letters in seconds, incorporating clinical documentation, applicable guidelines, and prior appeal outcomes.' },
  { icon: '📊', title: 'Real-Time Denial Dashboard', desc: 'Live denial trending by payer, code, physician, and procedure — so you can see patterns emerging before they become revenue problems.' },
  { icon: '⚡', title: 'Automated CARC/RARC Analysis', desc: 'Every remittance advice is parsed automatically. CARC and RARC codes are decoded, categorized, and actioned within 24 hours of receipt.' },
  { icon: '📞', title: 'Peer-to-Peer Review Coordination', desc: 'When clinical peer-to-peer review is warranted, we coordinate the physician-to-physician call with the payer\'s medical director.' },
];

const payers = [
  { payer: 'Medicare',        timely: '365 days from date of service',  note: 'Clean claim = 30-day pay' },
  { payer: 'Medicaid',        timely: 'Varies by state (90–365 days)',   note: 'Check state-specific rules' },
  { payer: 'Cigna',           timely: '180 days from date of service',   note: 'Appeal: 180 days from denial' },
  { payer: 'UnitedHealthcare',timely: '90–180 days',                     note: 'UHC OB-specific auth lists vary' },
  { payer: 'Aetna',           timely: '180 days from date of service',   note: 'OB global: auth required >22 wks' },
  { payer: 'BCBS',            timely: '180 days (plan-dependent)',        note: 'State BCBS plans vary widely' },
];

const faqs = [
  { q: 'What causes most OB/GYN claim denials?', a: 'The top 5 OB/GYN denial causes in 2025: (1) CO-97 bundling of global package procedures, (2) CO-197 missing prior authorization for robotic GYN surgery, (3) CO-4 incorrect modifier usage on multi-procedure claims, (4) CO-11 CPT/ICD-10 combination mismatches, and (5) CO-16 missing or invalid claim information.' },
  { q: 'How do you appeal a CO-97 bundling denial?', a: 'A CO-97 appeal requires proving the procedures are distinct and separately payable. We include: the specific NCCI edit triggered, the X-modifier justification (XS, XE, XP, or XU), and supporting documentation showing the procedures are clinically distinct. Our AI drafts the letter with payer-specific language.' },
  { q: 'What does it cost to work a denied OB/GYN claim?', a: 'The 2025 industry average is $57.23 per denied claim — including staff time researching the denial, drafting the appeal, resubmitting, and managing delayed cash flow. At 8% denial rate, a $250,000/month practice loses roughly $14,400 per month just to rework costs.' },
  { q: 'How does AI denial management work?', a: 'Our agentic AI reads every EOB remittance in real time, decodes CARC/RARC codes, matches against our OB/GYN-specific denial pattern database, selects the appropriate appeal strategy, and drafts a customized letter — all within 24 hours of denial receipt. Physicians review and sign; we handle submission.' },
];

const workflow = [
  { step: '01', title: 'Denial Receipt & Triage',  desc: 'All denials captured from ERA/EDI within 24 hours. Auto-sorted by code, payer, dollar value, and appeal deadline.' },
  { step: '02', title: 'AI Root Cause Analysis',    desc: 'CARC/RARC codes decoded. Pattern matched against 50,000+ historical OB/GYN denial outcomes. Root cause identified.' },
  { step: '03', title: 'Appeal Letter Generation',  desc: 'AI drafts payer-specific appeal with clinical documentation requests, guideline citations, and precedent references.' },
  { step: '04', title: 'Physician Review & Sign',   desc: 'Physician reviews AI-drafted appeal in portal (< 5 min). Digital signature. Automated submission tracking.' },
  { step: '05', title: 'Peer-to-Peer if Needed',    desc: 'High-value clinical denials escalated to peer-to-peer review. We coordinate scheduling with the payer\'s medical director.' },
  { step: '06', title: 'External Review (Final)',   desc: 'If internal appeal fails, we file for independent external review — final escalation before write-off consideration.' },
];

export default function DenialManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F2D 0%, #0E2A3A 100%)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <nav style={{ marginBottom: 24 }}>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none' }}>Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span>
            <span style={{ color: '#0E7C7B', fontSize: 13 }}>Denial Management</span>
          </nav>
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(43,108,176,0.2)', border: '1px solid rgba(43,108,176,0.4)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
              <span style={{ color: '#63B3ED', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>AI-Powered</span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: 20 }}>
              Cut Your OB/GYN Denial Rate With AI-Powered Resolution
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75, marginBottom: 32 }}>
              19% of in-network claims were denied in 2025. Coding denials surged 26%. At $57.23 to rework each denial, the math is brutal — unless you have AI automation working faster than the denials come in.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Free Denial Rate Analysis →
              </Link>
              <Link href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
                Calculate Denial Cost
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

      {/* Industry stats */}
      <section style={{ padding: '56px 24px', background: '#1A2B3C' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
          {[
            { v: '$57.23', l: 'Avg Cost Per Denied Claim', color: '#E53E3E' },
            { v: '19%',    l: 'In-Network Claims Denied (2025)', color: '#D97706' },
            { v: '26%',    l: 'Surge in Coding Denials', color: '#D97706' },
            { v: '94%',    l: 'Our Appeal Success Rate', color: '#0E7C7B' },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: '24px 16px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: s.color, marginBottom: 6 }}>{s.v}</div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Features */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 12 }}>Agentic AI Denial Engine</h2>
          <p style={{ color: '#4A5568', textAlign: 'center', fontSize: 15, maxWidth: 560, margin: '0 auto 48px' }}>Our AI doesn&apos;t just flag denials — it reads them, analyzes them, and drafts the appeal automatically.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {aiFeatures.map((f, i) => (
              <div key={i} style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: '28px 24px' }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1A2B3C', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: '#4A5568', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Denial Codes */}
      <section style={{ padding: '80px 24px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', marginBottom: 8 }}>Common OB/GYN Denial Codes (CARC)</h2>
          <p style={{ color: '#4A5568', fontSize: 15, marginBottom: 32 }}>We handle every OB/GYN denial code pattern — from first denial through external appeal.</p>
          <div style={{ display: 'grid', gap: 16 }}>
            {denialCodes.map((d) => (
              <div key={d.code} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 12, padding: '20px 22px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 20, alignItems: 'center' }}>
                <div>
                  <code style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 800, color: '#0E7C7B' }}>{d.code}</code>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1A2B3C', marginBottom: 4 }}>{d.title}</div>
                  <div style={{ fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>{d.desc}</div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100, whiteSpace: 'nowrap',
                  background: d.severity === 'Critical' ? '#FFF5F5' : d.severity === 'High' ? '#FFFAF0' : '#F0FFF4',
                  color: d.severity === 'Critical' ? '#E53E3E' : d.severity === 'High' ? '#D97706' : '#276749' }}>
                  {d.severity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 48 }}>Our 6-Step Appeal Workflow</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {workflow.map((w) => (
              <div key={w.step} style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#0E7C7B', letterSpacing: '0.1em', marginBottom: 10 }}>{w.step}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1A2B3C', marginBottom: 8 }}>{w.title}</h3>
                <p style={{ color: '#4A5568', fontSize: 13, lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payer rules */}
      <section style={{ padding: '72px 24px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 700, color: '#1A2B3C', marginBottom: 32 }}>Timely Filing Limits by Payer</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#FFFFFF', borderRadius: 12, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
              <thead>
                <tr style={{ background: '#E0F4F4' }}>
                  {['Payer', 'Timely Filing Limit', 'OB/GYN Notes'].map((h) => (
                    <th key={h} style={{ padding: '14px 18px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#0E7C7B', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {payers.map((p, i) => (
                  <tr key={p.payer} style={{ borderTop: '1px solid #E2E8F0', background: i % 2 === 0 ? '#FFFFFF' : '#F7FAFC' }}>
                    <td style={{ padding: '14px 18px', fontSize: 14, fontWeight: 700, color: '#2B2D42' }}>{p.payer}</td>
                    <td style={{ padding: '14px 18px', fontSize: 14, color: '#4A5568' }}>{p.timely}</td>
                    <td style={{ padding: '14px 18px', fontSize: 13, color: '#718096' }}>{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 40 }}>Denial Management — FAQ</h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 12 }}>
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
      <section style={{ padding: '72px 24px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 32, color: '#0E7C7B', marginBottom: 16 }}>&ldquo;</div>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: '#2B2D42', marginBottom: 24 }}>
            Our denial rate dropped from 14% to 3.2% in four months. The AI appeal system is remarkable — it writes better appeals than our staff did manually.
          </p>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1A2B3C' }}>Dr. Amara N.</div>
          <div style={{ fontSize: 13, color: '#718096' }}>OB/GYN, 3-Physician Group — Georgia</div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ padding: '48px 24px', background: '#E0F4F4' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/revenue-cycle-management" style={{ background: '#FFFFFF', color: '#0E7C7B', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(14,124,123,0.2)' }}>Revenue Cycle Management →</Link>
          <Link href="/coding-audits" style={{ background: '#FFFFFF', color: '#0E7C7B', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(14,124,123,0.2)' }}>Coding Audits →</Link>
          <Link href="/calculator" style={{ background: '#0E7C7B', color: '#FFFFFF', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Calculate Denial Cost →</Link>
        </div>
      </section>

      <section style={{ padding: '64px 24px', background: 'linear-gradient(135deg, #0D1F2D, #1A2B3C)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>Ready to Cut Your Denial Rate to Under 5%?</h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>Get a free denial rate analysis. We&apos;ll show you exactly where your revenue is leaking and how our AI closes the gap.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '15px 32px', borderRadius: 8, fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Get Free Denial Rate Analysis →
          </Link>
        </div>
      </section>
    </>
  );
}
