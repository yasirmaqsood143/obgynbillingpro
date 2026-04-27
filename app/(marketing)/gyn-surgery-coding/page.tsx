// app/(marketing)/gyn-surgery-coding/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'GYN Surgery Coding Service | CPT Expert Coders',
    description:
      'Expert gynecology surgery CPT coding. Hysterectomy, myomectomy, laparoscopy, robotic da Vinci. Modifiers 51, 59, 22, 25. Stop undercoding GYN surgical procedures.',
    alternates: { canonical: 'https://obgynbillingpro.com/gyn-surgery-coding' },
    openGraph: {
      title: 'GYN Surgery Coding Experts | OBGYNBillingPro',
      description: 'Capture every billable procedure with expert GYN surgery CPT coding — no undercoding, no downcoding.',
      url: 'https://obgynbillingpro.com/gyn-surgery-coding',
      siteName: 'OBGYNBillingPro', type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'GYN Surgery Coding | OBGYNBillingPro', description: 'Expert GYN surgery CPT coding. No undercoding.' },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': ['FAQPage', 'MedicalBusiness'],
  name: 'GYN Surgery Coding — OBGYNBillingPro',
  url: 'https://obgynbillingpro.com/gyn-surgery-coding',
  mainEntity: [
    { '@type': 'Question', name: 'How do you bill laparoscopic vs open GYN surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Laparoscopic GYN procedures use specific lap CPT codes (58570-58573 for laparoscopic hysterectomy) while open procedures use different codes (58150 for total abdominal hysterectomy). The approach determines the code — never use the same CPT for both.' } },
    { '@type': 'Question', name: 'When to use Modifier 51 vs Modifier 59?', acceptedAnswer: { '@type': 'Answer', text: 'Modifier 51 is used for multiple procedures performed at the same session (secondary procedure to primary). Modifier 59 identifies a distinct procedural service that would normally be bundled. Use 59 when procedures are performed at different sites, different sessions, or involve different organs.' } },
    { '@type': 'Question', name: 'How to bill robotic hysterectomy?', acceptedAnswer: { '@type': 'Answer', text: 'Robotic-assisted laparoscopic hysterectomy is billed with CPT 58572 (laparoscopic, with tubes and ovaries) or 58571 (tubes only). The documentation must specifically state robotic-assisted approach and da Vinci system usage.' } },
    { '@type': 'Question', name: 'What causes GYN surgery claim denials?', acceptedAnswer: { '@type': 'Answer', text: 'The most common GYN surgery denial causes are: incorrect modifier usage (especially Modifier 51/59 confusion), insufficient documentation for complex procedures (Modifier 22), bundling errors (CO-97), and missing prior authorization for robotic procedures.' } },
  ],
};

const cptCodes = [
  { code: '58570', desc: 'Laparoscopic hysterectomy with uterus 250g or less', note: 'Lap approach' },
  { code: '58571', desc: 'Laparoscopic hysterectomy with tubes, uterus 250g or less', note: 'Lap + tubes' },
  { code: '58572', desc: 'Laparoscopic hysterectomy with tubes + ovaries, ≤250g', note: 'Lap + BSO' },
  { code: '58573', desc: 'Laparoscopic hysterectomy, radical, ≤250g', note: 'Radical lap' },
  { code: '58150', desc: 'Total abdominal hysterectomy with or without tubes/ovaries', note: 'Open approach' },
  { code: '58140', desc: 'Myomectomy, abdominal, with 1–4 intramural fibroids', note: 'Fibroid removal' },
  { code: '58661', desc: 'Laparoscopic removal of adnexal structures (salpingo-oophorectomy)', note: 'Lap SO' },
  { code: '58558', desc: 'Hysteroscopy with endometrial biopsy', note: 'Hysteroscopy' },
  { code: '57250', desc: 'Posterior colporrhaphy, rectocele repair with or without perineorrhaphy', note: 'Pelvic floor' },
  { code: '58662', desc: 'Laparoscopic fulguration/excision of endometriosis lesions', note: 'Endometriosis' },
  { code: '58300', desc: 'Insertion of intrauterine device (IUD)', note: 'LARC' },
  { code: '58301', desc: 'Removal of intrauterine device (IUD)', note: 'LARC' },
];

const modifiers = [
  { mod: '51', title: 'Multiple Procedures', desc: 'Append to secondary procedures when multiple surgeries are performed at the same operative session. Payer reduces payment on secondary procedures.' },
  { mod: '59', title: 'Distinct Procedural Service', desc: 'Identifies a procedure/service that would normally be bundled but is distinct. Use when procedures are at different sites, different sessions, or different organs.' },
  { mod: '25', title: 'Significant E/M Same Day', desc: 'Required when a significant, separately identifiable E/M service is performed on the same day as a procedure. Must document medical decision-making independently.' },
  { mod: '22', title: 'Increased Procedural Complexity', desc: 'Used when procedure requires substantially more time, effort, or skills than typical. Documentation must clearly support increased complexity. Increases reimbursement 20–30%.' },
  { mod: '50', title: 'Bilateral Procedure', desc: 'Indicates the identical procedure was performed bilaterally. Some payers require the code listed twice with modifier 50; others require a single line with modifier 50.' },
  { mod: '78', title: 'Unplanned Return to OR', desc: 'Identifies a return to the operating room during the postoperative period of the original procedure. Do not use 78 if return was planned.' },
  { mod: '62', title: 'Two Surgeons', desc: 'Indicates two surgeons (e.g., urogynecologist + OB/GYN) each perform distinct portions of a procedure. Each surgeon bills with modifier 62; reimbursement is typically split 50/50.' },
];

const icd10 = [
  { code: 'D25', desc: 'Leiomyoma of uterus (uterine fibroids)' },
  { code: 'N80', desc: 'Endometriosis (N80.0–N80.9)' },
  { code: 'N81', desc: 'Female genital prolapse (cystocele, rectocele, uterine prolapse)' },
  { code: 'N83', desc: 'Ovarian cyst and related conditions' },
  { code: 'N87', desc: 'Cervical dysplasia (N87.0–N87.9)' },
];

const painPoints = [
  { p: 'Undercoding complex procedures', s: 'Line-by-line procedure review ensures Modifier 22 is applied where documented complexity justifies it' },
  { p: 'Payer downcoding laparoscopic to open', s: 'Pre-submission documentation review flags insufficient operative notes before claim submission' },
  { p: 'Modifier 51 vs 59 errors', s: 'Automated modifier assignment logic based on procedure combination and NCCI edits' },
  { p: 'Missing documentation for robotic billing', s: 'Pre-surgery documentation checklist for da Vinci cases with automatic claim hold if incomplete' },
  { p: 'CO-97 bundling denials on same-day E/M', s: 'Modifier 25 applied correctly to all same-day E/M + procedure combinations' },
  { p: 'Bilateral procedure undercoding', s: 'Automatic bilateral detection and proper Modifier 50 application per payer requirements' },
];

const faqs = [
  { q: 'How do you bill laparoscopic vs open GYN surgery?', a: 'Laparoscopic GYN procedures use specific lap CPT codes (e.g., 58570–58573 for laparoscopic hysterectomy) while open procedures use different codes (58150 for total abdominal). The surgical approach determines the CPT code — using an open code for a laparoscopic approach is a critical billing error that triggers audits.' },
  { q: 'When should I use Modifier 51 vs Modifier 59?', a: 'Modifier 51 (multiple procedures) is for secondary procedures performed at the same session as the primary, where payer reduces the secondary payment. Modifier 59 is for distinct procedural services that would normally bundle but are separate — different site, different organ, or different operative session.' },
  { q: 'How to bill robotic-assisted hysterectomy (da Vinci)?', a: 'Robotic-assisted laparoscopic hysterectomy is billed with CPT 58572 (with tubes and ovaries) or 58571 (tubes only). Documentation must explicitly state "robotic-assisted" and the da Vinci system. Some payers require a specific modifier or have separate coverage policies for robotic procedures.' },
  { q: 'What causes the most GYN surgery claim denials?', a: 'The top GYN surgery denial causes are: (1) modifier 51/59 confusion resulting in CO-97 bundling denials, (2) insufficient documentation for Modifier 22, (3) missing prior authorization for robotic procedures, (4) using an open CPT code for a laparoscopic procedure, and (5) incorrect bilateral billing.' },
];

export default function GynSurgeryCodingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F2D 0%, #0E2A3A 100%)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <nav style={{ marginBottom: 24 }}>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none' }}>Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span>
            <span style={{ color: '#0E7C7B', fontSize: 13 }}>GYN Surgery Coding</span>
          </nav>
          <div style={{ maxWidth: 720 }}>
            <h1 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: 20 }}>
              GYN Surgery Coding That Captures Every Billable Procedure
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75, marginBottom: 32 }}>
              50+ CPT/modifier combinations. Laparoscopic, robotic (da Vinci), open. Zero undercoding. Our CPC-OB certified coders know every GYN surgical CPT and every payer downcoding trap.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Free GYN Surgery Audit →
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

      {/* Stats */}
      <section style={{ padding: '40px 24px', background: 'linear-gradient(135deg, #0E7C7B, #065F5E)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
          {[{ v: '98.2%', l: 'First-Pass Rate' }, { v: '50+', l: 'CPT/Modifier Combos' }, { v: '$4.2M+', l: 'Revenue Recovered' }, { v: '94%', l: 'Appeal Success Rate' }].map((s) => (
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
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 40 }}>What Goes Wrong — and How We Fix It</h2>
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
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', marginBottom: 8 }}>GYN Surgery CPT Code Reference</h2>
          <p style={{ color: '#4A5568', fontSize: 15, marginBottom: 32 }}>All major GYN procedure CPT codes — correctly matched to approach (lap, robotic, open) and complexity.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#FFFFFF', borderRadius: 12, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
              <thead>
                <tr style={{ background: '#E0F4F4' }}>
                  <th style={{ padding: '14px 18px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#0E7C7B', letterSpacing: '0.06em', textTransform: 'uppercase' }}>CPT Code</th>
                  <th style={{ padding: '14px 18px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#0E7C7B', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Description</th>
                  <th style={{ padding: '14px 18px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#0E7C7B', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Category</th>
                </tr>
              </thead>
              <tbody>
                {cptCodes.map((row, i) => (
                  <tr key={row.code} style={{ borderTop: '1px solid #E2E8F0', background: i % 2 === 0 ? '#FFFFFF' : '#F7FAFC' }}>
                    <td style={{ padding: '14px 18px' }}><code style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 700, color: '#0E7C7B' }}>{row.code}</code></td>
                    <td style={{ padding: '14px 18px', fontSize: 14, color: '#2B2D42' }}>{row.desc}</td>
                    <td style={{ padding: '14px 18px' }}><span style={{ fontSize: 11, fontWeight: 600, color: '#065F5E', background: '#E0F4F4', padding: '3px 10px', borderRadius: 100 }}>{row.note}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modifiers */}
          <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1A2B3C', marginTop: 52, marginBottom: 24 }}>Modifier Guide — GYN Surgery</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {modifiers.map((m) => (
              <div key={m.mod} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 12, padding: '18px 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <code style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 800, color: '#0E7C7B', background: '#E0F4F4', padding: '4px 10px', borderRadius: 6 }}>-{m.mod}</code>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#2B2D42' }}>{m.title}</span>
                </div>
                <p style={{ fontSize: 13, color: '#4A5568', lineHeight: 1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>

          {/* ICD-10 */}
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1A2B3C', marginTop: 48, marginBottom: 20 }}>Key ICD-10-CM Codes for GYN Surgery</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {icd10.map((c) => (
              <div key={c.code} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 10, padding: '14px 16px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700, color: '#2B6CB0', flexShrink: 0 }}>{c.code}</code>
                <span style={{ fontSize: 13, color: '#4A5568' }}>{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 40 }}>GYN Surgery Coding — FAQ</h2>
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
            Our robotic hysterectomy claims were being downcoded to laparoscopic rates. OBGYNBillingPro fixed the documentation workflow and recovered $82,000 within 3 months.
          </p>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1A2B3C' }}>Dr. Kathryn L.</div>
          <div style={{ fontSize: 13, color: '#718096' }}>GYN Surgeon, Group Practice — Florida</div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ padding: '48px 24px', background: '#E0F4F4' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/denial-management" style={{ background: '#FFFFFF', color: '#0E7C7B', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(14,124,123,0.2)' }}>Denial Management →</Link>
          <Link href="/coding-audits" style={{ background: '#FFFFFF', color: '#0E7C7B', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(14,124,123,0.2)' }}>Coding Audits →</Link>
          <Link href="/calculator" style={{ background: '#0E7C7B', color: '#FFFFFF', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Revenue Calculator →</Link>
        </div>
      </section>

      <section style={{ padding: '64px 24px', background: 'linear-gradient(135deg, #0D1F2D, #1A2B3C)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>Stop Undercoding Your GYN Surgical Procedures</h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>Get a free GYN surgery coding audit and see exactly what you&apos;re leaving on the table.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '15px 32px', borderRadius: 8, fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Get Free Coding Audit →
          </Link>
        </div>
      </section>
    </>
  );
}
