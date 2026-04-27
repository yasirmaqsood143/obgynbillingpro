import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'OB/GYN Medical Billing Coding Audits │ CPC-OB Certified',
    description: 'OB/GYN medical billing coding audit by CPC-OB, AHIMA & AAPC certified auditors. Find undercoding, reduce OIG risk, recover missed revenue. Free audit assessment.',
    alternates: { canonical: 'https://obgynbillingpro.com/coding-audits' },
    openGraph: {
      title: 'OB/GYN Medical Billing Coding Audits │ CPC-OB Certified',
      description: 'OB/GYN medical billing coding audit. Find undercoding, reduce OIG risk, recover missed revenue.',
      url: 'https://obgynbillingpro.com/coding-audits',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'OB/GYN Medical Billing Coding Audits │ CPC-OB Certified',
      description: 'OB/GYN medical billing coding audit. Find undercoding, reduce OIG risk.',
    },
  };
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an OB/GYN coding audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An OB/GYN coding audit is a systematic review of your billing records to verify that the CPT codes, ICD-10 diagnosis codes, and modifiers on your claims accurately reflect the services documented in the medical record. Audits identify both undercoding (leaving revenue on the table) and upcoding (billing for more than was documented, creating compliance risk). Our certified OB/GYN coders review your claims against clinical documentation to find errors, missed revenue, and OIG risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should an OB/GYN practice conduct a coding audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most compliance experts recommend a formal coding audit at least once per year, with quarterly internal reviews. However, you should conduct an audit immediately after: any change in billing staff or coding team, payer contract renegotiation, introduction of a new service line, increased denial rates, any OIG or RAC audit notice, or any significant change in coding guidelines (like the 2024 AMA E/M updates). High-volume practices (200+ claims/month) benefit from quarterly prospective audits.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between upcoding and undercoding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upcoding means billing a higher-level or higher-paying code than what is supported by the documentation — for example, billing a 99215 (high complexity) E/M visit when the documentation only supports 99213 (low complexity). Upcoding can trigger OIG investigations, payer audits, and False Claims Act liability. Undercoding means billing a lower-level code than what is documented — billing 99213 when documentation supports 99215. Undercoding is more common than upcoding and costs practices 15–30% of collectable revenue annually.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does a coding audit find missed revenue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Auditors compare your billed CPT codes against the clinical documentation for each encounter and identify cases where a higher-level code was supported but not billed, additional procedures were performed but not coded, modifiers were missing that would have allowed separate reimbursement, or supply/device codes (like J-codes for IUDs) were omitted. For OB/GYN, common missed revenue includes: postpartum-only visits (59430), modifier 22 on complex surgeries, LARC device codes alongside insertion procedures, and correct E/M levels for antepartum visits with multiple chronic conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a RAC audit and how does a coding audit prepare us?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recovery Audit Contractors (RACs) are CMS-contracted auditors who review Medicare claims for improper payments — both overpayments and underpayments. RAC auditors focus heavily on E/M upcoding, global maternity billing errors, and surgical procedure bundling. A proactive coding audit prepares your practice by identifying and correcting these issues before a RAC auditor does — and by documenting your compliance efforts, which is a mitigating factor if you do receive an audit notice.',
      },
    },
  ],
};

const bizSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'OBGYNBillingPro — Coding Audits',
  description: 'OB/GYN medical billing coding audit service. CPC-OB, AHIMA, AAPC certified auditors.',
  url: 'https://obgynbillingpro.com/coding-audits',
  telephone: process.env.NEXT_PUBLIC_PHONE,
  medicalSpecialty: 'Obstetrics and Gynecology',
};

const T = {
  teal: '#0E7C7B', tealDark: '#065F5E', tealLight: '#E0F4F4',
  navy: '#1A2B3C', navyAlt: '#2B2D42', body: '#4A5568',
  lightBg: '#F7FAFC', success: '#276749', terracotta: '#E2725B',
  warning: '#D97706', accentBlue: '#2B6CB0', border: '#E2E8F0', white: '#FFFFFF',
};

const auditTypes = [
  {
    type: 'Prospective Audit',
    icon: '🔍',
    description: 'Claims reviewed BEFORE submission. Catches coding errors before they become denials or compliance exposure.',
    bestFor: 'High-volume surgical services, new providers, after coding guideline changes',
    benefits: ['Zero denial risk on audited claims', 'Immediate revenue optimization', 'Real-time coder education'],
    color: T.teal,
  },
  {
    type: 'Retrospective Audit',
    icon: '📊',
    description: 'Claims reviewed AFTER submission and payment. Identifies patterns in past billing for correction and recovery.',
    bestFor: 'Baseline compliance assessment, post-OIG inquiry, annual compliance review',
    benefits: ['Identifies systemic errors', 'Recovery opportunities on underbilled claims', 'Compliance documentation'],
    color: T.accentBlue,
  },
  {
    type: 'E/M Coding Audit',
    icon: '🩺',
    description: 'Focused review of Evaluation & Management codes (99202–99215) against 2024 AMA MDM guidelines.',
    bestFor: 'Practices concerned about E/M level distribution, high denial rates on 99215',
    benefits: ['MDM documentation alignment', 'Level optimization', 'OIG risk reduction'],
    color: T.navyAlt,
  },
  {
    type: 'Surgical Coding Audit',
    icon: '⚕️',
    description: 'Review of procedure codes, modifiers, and operative report documentation for all GYN surgical cases.',
    bestFor: 'High-volume surgical practices, robotic surgery programs, laparoscopic specialists',
    benefits: ['Modifier error elimination', 'Bundling rule compliance', 'Operative report documentation review'],
    color: T.success,
  },
  {
    type: 'Modifier Usage Audit',
    icon: '🏷️',
    description: 'Analysis of modifier application patterns across all claim types — identifying both missing and incorrect modifiers.',
    bestFor: 'Practices with high CO-4 or CO-97 denial rates, after payer downcoding trends',
    benefits: ['Modifier matrix development', 'Denial root cause resolution', 'Correct unbundling documentation'],
    color: T.warning,
  },
  {
    type: 'Charge Capture Audit',
    icon: '📋',
    description: 'Review of the entire charge capture workflow from clinical encounter to claim submission. Identifies dropped charges.',
    bestFor: 'Practices experiencing unexplained revenue drops, after EHR transitions',
    benefits: ['Zero dropped charges', 'Workflow optimization', 'Staff training targets'],
    color: T.terracotta,
  },
];

const emChanges = [
  { old: 'History & Physical Exam drove E/M level', current: 'Medical Decision Making (MDM) drives E/M level', impact: 'Many OB/GYN visits qualify for higher-level codes based on MDM alone' },
  { old: 'Detailed exam required for 99214+', current: 'MDM with moderate complexity sufficient for 99214', impact: 'Postpartum visits with complications legitimately bill at 99214' },
  { old: 'Time-based had strict counting rules', current: 'Total time including pre/post-visit work counts', impact: 'Complex prenatal counseling sessions support higher E/M levels' },
  { old: 'Bullet-counting for exam elements', current: 'Clinical appropriateness standard', impact: 'Documentation burden reduced; focus shifts to problem complexity' },
];

const oigRisks = [
  { risk: 'E/M Upcoding', level: 'Critical', description: 'Billing 99215 without documentation supporting high complexity MDM. OIG consistently flags practices with >90th percentile 99215 rates.' },
  { risk: 'Global Maternity Errors', level: 'High', description: 'Billing global package when visit threshold not met, or billing components inside a global period. Creates overpayment liability.' },
  { risk: 'Unbundling Without Modifier', level: 'High', description: 'Billing CPT code pairs separately without modifier 59/X when NCCI edits indicate bundling required. Systematic unbundling without justification triggers RAC focus.' },
  { risk: 'Modifier 22 Without Documentation', level: 'Medium', description: 'Using modifier 22 (increased procedural services) without operative report documentation of unusual complexity.' },
  { risk: 'Duplicate Billing', level: 'High', description: 'Billing the same service twice — often happens when paper and electronic submission both process.' },
  { risk: 'Missing LARC Supply Codes', level: 'Low', description: 'Not billing J-codes for IUD/implant devices alongside insertion codes. Underbilling — not a compliance risk, but a revenue risk.' },
];

const auditProcess = [
  { step: 1, title: 'Record Request', description: 'We request a random statistical sample of 20–50 claims from the audit period — enough for statistical significance without operational burden.' },
  { step: 2, title: 'Documentation Review', description: 'Our CPC-OB certified auditors review each claim against the underlying clinical documentation in your EHR.' },
  { step: 3, title: 'Code Comparison', description: 'Billed codes are compared against audit-correct codes. Discrepancies are categorized: undercoded, overcoded, modifier error, missing code, or documentation gap.' },
  { step: 4, title: 'Error Rate Calculation', description: 'We calculate your error rate by category. An error rate above 5% on any category warrants a corrective action plan.' },
  { step: 5, title: 'Revenue Impact Analysis', description: 'We quantify the revenue impact of identified errors — both missed revenue (undercoding) and overpayment risk (upcoding).' },
  { step: 6, title: 'Corrective Action Report', description: 'You receive a written report with specific findings, recommended code corrections, education priorities, and a 90-day corrective action plan.' },
];

const faqs = [
  { q: 'What is an OB/GYN coding audit?', a: 'An OB/GYN coding audit is a systematic review of your billing records comparing billed codes against clinical documentation. It identifies undercoding (lost revenue), upcoding (compliance risk), modifier errors, and documentation gaps. Our CPC-OB certified auditors review your claims, quantify the revenue impact of errors, and provide a written corrective action report.' },
  { q: 'How often should an OB/GYN practice audit?', a: 'Minimum annually, ideally quarterly. Immediate audits are warranted after: any change in billing staff, new service line introduction, increased denial rates, OIG or RAC audit notice, or major coding guideline changes. Prospective audits on surgical cases should be ongoing for high-volume surgical practices.' },
  { q: 'What is the difference between upcoding and undercoding?', a: 'Upcoding means billing a higher-level code than documentation supports — creating OIG risk and False Claims Act exposure. Undercoding means billing lower than documentation supports — the more common problem, costing OB/GYN practices 15–30% of collectable revenue annually. Both are identified and corrected in a coding audit.' },
  { q: 'How does a coding audit find missed revenue?', a: 'Auditors compare billed codes against documentation and identify cases where higher-level E/M codes were supported, additional procedures were performed but not coded, modifiers were missing, or supply codes (J-codes for IUDs) were omitted. Most practices find $50,000–$200,000 in recoverable revenue in the first audit.' },
  { q: 'What is a RAC audit and how do we prepare?', a: 'Recovery Audit Contractors (RACs) audit Medicare claims for improper payments. They focus on E/M upcoding, global maternity errors, and surgical bundling. A proactive internal coding audit corrects these issues before RAC auditors find them — and documents your compliance efforts as a mitigating factor if you do receive an audit notice.' },
];

export default function CodingAuditsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bizSchema) }} />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(14,124,123,0.2)', border: '1px solid rgba(14,124,123,0.4)', borderRadius: 20, padding: '6px 14px', marginBottom: 24 }}>
            <span style={{ color: T.tealLight, fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>CPC-OB · AHIMA · AAPC Certified Audit Team</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: T.white, lineHeight: 1.2, maxWidth: 700, marginBottom: 20 }}>
            OB/GYN Coding Audits That Find What You Are Missing
          </h1>
          <p style={{ fontSize: 18, color: '#CBD5E0', lineHeight: 1.7, maxWidth: 620, marginBottom: 36 }}>
            The average OB/GYN practice loses 15–30% of collectable revenue to coding errors. Our certified auditors find the missed codes, fix the modifier errors, and eliminate the OIG exposure — with a written corrective action report in 14 business days.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.teal, color: T.white, padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Free Coding Audit Assessment →
            </a>
            <a href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: T.white, padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
              Calculate Revenue Leakage
            </a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { val: '15–30%', label: 'Revenue Lost to Coding Errors' },
              { val: '14 Days', label: 'Report Delivery Turnaround' },
              { val: '5%', label: 'Error Rate Threshold for Action' },
              { val: '$57.23', label: 'Cost to Rework One Denied Claim' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontWeight: 700, color: T.tealLight }}>{s.val}</div>
                <div style={{ fontSize: 13, color: '#90CDF4', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Bar */}
      <section style={{ background: T.navy, padding: '12px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
          {['HIPAA Compliant', 'BAA Available', 'CPC-OB Certified', 'AHIMA Credentialed', 'AAPC Member', 'MGMA Member'].map((b) => (
            <span key={b} style={{ fontSize: 12, color: '#90CDF4', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>✓ {b}</span>
          ))}
        </div>
      </section>

      {/* Key Stats */}
      <section style={{ background: T.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { stat: '15–30%', label: 'Average revenue lost to coding errors in OB/GYN', icon: '💸', color: T.warning },
              { stat: '26%', label: 'Surge in coding-related denials in 2025', icon: '📈', color: '#E53E3E' },
              { stat: '$50K–$200K', label: 'Typical missed revenue found in first audit', icon: '💰', color: T.success },
              { stat: '19%', label: 'In-network claims denied in 2025', icon: '❌', color: T.terracotta },
            ].map((item) => (
              <div key={item.label} style={{ background: T.lightBg, borderRadius: 14, padding: 28, borderTop: `3px solid ${item.color}`, textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 32, fontWeight: 700, color: item.color, marginBottom: 8 }}>{item.stat}</div>
                <div style={{ fontSize: 13, color: T.body, lineHeight: 1.5 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Types */}
      <section style={{ background: T.lightBg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Audit Types</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>Six Types of OB/GYN Coding Audits</h2>
            <p style={{ fontSize: 16, color: T.body, maxWidth: 560, margin: '0 auto' }}>Different practice situations call for different audit approaches. We recommend the right type for your specific risk profile.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {auditTypes.map((audit) => (
              <div key={audit.type} style={{ background: T.white, borderRadius: 14, padding: 28, border: `1px solid ${T.border}`, borderTop: `3px solid ${audit.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: 28 }}>{audit.icon}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: T.navy }}>{audit.type}</h3>
                </div>
                <p style={{ fontSize: 14, color: T.body, lineHeight: 1.6, marginBottom: 14 }}>{audit.description}</p>
                <div style={{ fontSize: 12, color: T.body, marginBottom: 14 }}>
                  <strong style={{ color: T.navy }}>Best for:</strong> {audit.bestFor}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {audit.benefits.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: T.body }}>
                      <span style={{ color: audit.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2024 AMA E/M Update Impact */}
      <section style={{ background: T.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: '#FEF3C7', color: T.warning, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>2024 AMA Update</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>E/M Coding Changes — Are You Still Billing Under Old Rules?</h2>
            <p style={{ fontSize: 16, color: T.body, maxWidth: 580, margin: '0 auto' }}>The 2024 AMA E/M revision changed how visit complexity is determined. Practices still coding by history/exam bullet counts are systematically underbilling.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: T.white, borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}>
              <thead>
                <tr style={{ background: T.navy }}>
                  {['Old Rule (Pre-2024)', 'Current Rule (2024+)', 'Revenue Impact for OB/GYN'].map((h) => (
                    <th key={h} style={{ padding: '14px 20px', textAlign: 'left', color: T.white, fontSize: 13, fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {emChanges.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? T.white : T.lightBg, borderBottom: `1px solid ${T.border}` }}>
                    <td style={{ padding: '14px 20px', fontSize: 13, color: '#E53E3E' }}>{row.old}</td>
                    <td style={{ padding: '14px 20px', fontSize: 13, color: T.success, fontWeight: 500 }}>{row.current}</td>
                    <td style={{ padding: '14px 20px', fontSize: 13, color: T.body }}>{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upcoding vs Undercoding */}
      <section style={{ background: T.lightBg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Risk Analysis</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>Upcoding vs Undercoding — Both Cost You</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div style={{ background: '#FEF2F2', borderRadius: 14, padding: 32, border: '1px solid #FECACA', borderTop: `4px solid #E53E3E` }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>⚠️</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#C53030', marginBottom: 12 }}>Upcoding</h3>
              <p style={{ fontSize: 14, color: '#742A2A', lineHeight: 1.7, marginBottom: 16 }}>Billing a higher-level code than documentation supports. Less common than undercoding, but far more dangerous.</p>
              <div style={{ fontSize: 13, color: '#742A2A', fontWeight: 600, marginBottom: 8 }}>Consequences:</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['OIG civil investigation', 'False Claims Act liability', 'CMS exclusion from Medicare/Medicaid', 'Mandatory repayment + penalties', 'State medical board review'].map((c) => (
                  <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#742A2A' }}>
                    <span style={{ color: '#E53E3E', fontWeight: 700, flexShrink: 0 }}>✗</span>{c}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#FFFBEB', borderRadius: 14, padding: 32, border: '1px solid #FDE68A', borderTop: `4px solid ${T.warning}` }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>💸</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#92400E', marginBottom: 12 }}>Undercoding</h3>
              <p style={{ fontSize: 14, color: '#78350F', lineHeight: 1.7, marginBottom: 16 }}>Billing a lower-level code than documentation supports. The most common coding error in OB/GYN — costing practices 15–30% of collectable revenue.</p>
              <div style={{ fontSize: 13, color: '#78350F', fontWeight: 600, marginBottom: 8 }}>Common OB/GYN undercoding examples:</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['99213 billed when 99214 supported', 'Missing modifier 22 on complex surgery', '59430 postpartum never billed', 'No J-code for IUD alongside 58300', 'LARC counseling codes omitted'].map((c) => (
                  <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#78350F' }}>
                    <span style={{ color: T.warning, fontWeight: 700, flexShrink: 0 }}>→</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OIG Risk Table */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: 'rgba(14,124,123,0.3)', color: T.tealLight, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>OIG Risk Reduction</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.white, marginBottom: 16 }}>Top OIG Audit Targets in OB/GYN Billing</h2>
            <p style={{ fontSize: 16, color: '#CBD5E0', maxWidth: 540, margin: '0 auto' }}>We audit for every OIG work plan priority relevant to OB/GYN — finding and fixing issues before federal auditors do.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {oigRisks.map((r) => (
              <div key={r.risk} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                  color: r.level === 'Critical' ? '#FC8181' : r.level === 'High' ? '#FBD38D' : r.level === 'Medium' ? '#90CDF4' : '#9AE6B4',
                  background: r.level === 'Critical' ? 'rgba(229,62,62,0.2)' : r.level === 'High' ? 'rgba(214,158,46,0.2)' : r.level === 'Medium' ? 'rgba(44,82,130,0.3)' : 'rgba(39,103,73,0.3)',
                  padding: '3px 10px', borderRadius: 10, flexShrink: 0, marginTop: 2
                }}>{r.level}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: T.white, marginBottom: 6 }}>{r.risk}</div>
                  <div style={{ fontSize: 13, color: '#A0AEC0', lineHeight: 1.6 }}>{r.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section style={{ background: T.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Our Process</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>How Our Coding Audit Works</h2>
            <p style={{ fontSize: 16, color: T.body, maxWidth: 540, margin: '0 auto' }}>6 steps from record request to corrective action report — completed in 14 business days.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {auditProcess.map((step) => (
              <div key={step.step} style={{ background: T.lightBg, borderRadius: 14, padding: 28, border: `1px solid ${T.border}`, position: 'relative' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.teal, color: T.white, fontSize: 16, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>{step.step}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: T.navy, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: T.body, lineHeight: 1.7 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ background: T.lightBg, padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: T.navy, marginBottom: 32 }}>Our Audit Team Certifications</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
            {[
              { cert: 'CPC-OB', org: 'AAPC', desc: 'OB/GYN specialty certification' },
              { cert: 'CCS', org: 'AHIMA', desc: 'Clinical coding specialist' },
              { cert: 'CPC', org: 'AAPC', desc: 'Certified professional coder' },
              { cert: 'CPCO', org: 'AAPC', desc: 'Certified compliance officer' },
              { cert: 'CRC', org: 'AAPC', desc: 'Risk adjustment coder' },
            ].map((c) => (
              <div key={c.cert} style={{ background: T.white, borderRadius: 12, padding: '16px 24px', border: `1px solid ${T.border}`, textAlign: 'center', minWidth: 150 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 700, color: T.teal, marginBottom: 6 }}>{c.cert}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.navy }}>{c.org}</div>
                <div style={{ fontSize: 11, color: T.body }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ background: `linear-gradient(135deg, ${T.teal} 0%, ${T.tealDark} 100%)`, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, textAlign: 'center' }}>
          {[{ val: '98.2%', label: 'First-Pass Rate' }, { val: '$4.2M', label: 'Revenue Recovered' }, { val: '200+', label: 'OB/GYN Practices Served' }, { val: '14 Days', label: 'Audit Report Delivery' }].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 40, fontWeight: 700, color: T.white }}>{s.val}</div>
              <div style={{ fontSize: 14, color: T.tealLight, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: T.lightBg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy }}>Coding Audit Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((faq) => (
              <details key={faq.q} style={{ background: T.white, borderRadius: 10, overflow: 'hidden', border: `1px solid ${T.border}` }}>
                <summary style={{ padding: '20px 24px', cursor: 'pointer', fontSize: 16, fontWeight: 600, color: T.navy, listStyle: 'none', userSelect: 'none' }}>{faq.q}</summary>
                <div style={{ padding: '0 24px 20px', fontSize: 15, color: T.body, lineHeight: 1.7 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ background: T.white, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: T.navy, marginBottom: 24 }}>Related Services</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {[{ label: 'Denial Management', href: '/denial-management' }, { label: 'Revenue Cycle Management', href: '/revenue-cycle-management' }, { label: 'Global Maternity Billing', href: '/global-maternity-billing' }, { label: 'GYN Surgery Coding', href: '/gyn-surgery-coding' }, { label: 'Revenue Leakage Calculator', href: '/calculator' }].map((l) => (
              <a key={l.label} href={l.href} style={{ padding: '10px 20px', background: T.lightBg, borderRadius: 8, border: `1px solid ${T.border}`, color: T.teal, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>{l.label} →</a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.white, marginBottom: 16 }}>Find Out What Your Coding Errors Are Costing You</h2>
          <p style={{ fontSize: 17, color: '#CBD5E0', lineHeight: 1.7, marginBottom: 36 }}>Get a free coding audit assessment — we&apos;ll review a sample of your recent claims and identify your highest-risk coding areas at no charge.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.teal, color: T.white, padding: '16px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Free Coding Audit Assessment →</a>
            <a href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: T.white, padding: '16px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Calculate Revenue Leakage</a>
          </div>
          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
            {['CPC-OB Certified', 'Written Report in 14 Days', 'No Obligation', 'HIPAA Compliant'].map((b) => (
              <span key={b} style={{ fontSize: 12, color: T.tealLight, fontWeight: 600 }}>✓ {b}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
