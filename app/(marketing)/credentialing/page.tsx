// app/(marketing)/credentialing/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'OB/GYN Physician Credentialing Services | Fast',
    description:
      'OB/GYN physician credentialing — CAQH setup, payer enrollment, Medicare/Medicaid, hospital privileges. Taxonomy 207V00000X. Eliminate revenue gaps during enrollment.',
    alternates: { canonical: 'https://obgynbillingpro.com/credentialing' },
    openGraph: {
      title: 'OB/GYN Credentialing Services | OBGYNBillingPro',
      description: 'Get credentialed with all commercial payers fast. CAQH, Medicare, Medicaid, BCBS, Aetna, UHC, Cigna.',
      url: 'https://obgynbillingpro.com/credentialing',
      siteName: 'OBGYNBillingPro', type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'OB/GYN Credentialing | OBGYNBillingPro', description: 'Fast OB/GYN payer enrollment and credentialing.' },
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': ['FAQPage', 'MedicalBusiness'],
  name: 'OB/GYN Physician Credentialing — OBGYNBillingPro',
  url: 'https://obgynbillingpro.com/credentialing',
  mainEntity: [
    { '@type': 'Question', name: 'How long does OB/GYN credentialing take?', acceptedAnswer: { '@type': 'Answer', text: 'Standard OB/GYN credentialing takes 60–120 days depending on the payer. Medicare typically takes 30–60 days. Commercial payers like BCBS and Aetna can take 90–120 days. Our team submits applications within 48 hours and actively follows up weekly.' } },
    { '@type': 'Question', name: 'What is CAQH and why do I need it?', acceptedAnswer: { '@type': 'Answer', text: 'CAQH ProView is a centralized credentialing database used by most major commercial payers. Setting up and maintaining your CAQH profile is typically the first step in payer enrollment. We set up your CAQH profile and re-attest quarterly to keep it current.' } },
    { '@type': 'Question', name: 'Can I bill while credentialing is pending?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, in limited circumstances. Locum tenens billing under a credentialed provider is common. For Medicare, provisional billing may be available. We advise on your specific situation and set up bridge billing arrangements to minimize revenue gaps.' } },
    { '@type': 'Question', name: 'What is taxonomy code 207V00000X?', acceptedAnswer: { '@type': 'Answer', text: '207V00000X is the National Uniform Claim Committee (NUCC) taxonomy code for OB/GYN physicians. It must appear correctly on all claims and payer enrollment applications. Using a general medicine taxonomy code (208D00000X) is a common error that causes enrollment delays and claim denials.' } },
  ],
};

const services = [
  { icon: '👤', title: 'CAQH Profile Setup & Maintenance', desc: 'Complete CAQH ProView profile setup, documentation collection, and quarterly re-attestation to keep your profile current.' },
  { icon: '📄', title: 'Commercial Payer Applications', desc: 'Applications to all major commercial payers: BCBS, Aetna, UHC, Cigna, Humana, Tricare, and all regional plans in your state.' },
  { icon: '🏥', title: 'Medicare & Medicaid Enrollment', desc: 'Medicare Part B enrollment via PECOS. Medicaid enrollment in your state. NPI registration and NPPES updates.' },
  { icon: '🔍', title: 'Primary Source Verification', desc: 'Verification of medical school, residency, board certification, state licensure, malpractice history, and DEA registration.' },
  { icon: '🏢', title: 'Hospital Privileges', desc: 'Application for clinical privileges at affiliated hospitals and surgical centers. Coordination with medical staff offices.' },
  { icon: '🔄', title: 'Re-Credentialing & Expiration Tracking', desc: 'Proactive re-credentialing management. Automated expiration alerts for DEA, state license, board certification, and payer credentials.' },
];

const payers = ['Medicare', 'Medicaid (all states)', 'Blue Cross Blue Shield', 'Aetna', 'UnitedHealthcare', 'Cigna', 'Humana', 'Tricare', 'Anthem', 'Molina', 'Centene', 'WellCare', 'All regional commercial payers'];

const timeline = [
  { week: 'Week 1', title: 'Intake & CAQH', tasks: ['Physician intake form', 'CAQH profile setup', 'Document collection checklist', 'NPI verification'] },
  { week: 'Weeks 2–3', title: 'Applications Submitted', tasks: ['Medicare PECOS application', 'Medicaid application', 'Top 5 commercial payers', 'Hospital privileges (if needed)'] },
  { week: 'Weeks 4–8', title: 'Active Follow-Up', tasks: ['Weekly status calls with payers', 'Additional document requests handled', 'Application tracking dashboard', 'Credentialing committee prep'] },
  { week: 'Weeks 8–16', title: 'Approval & Activation', tasks: ['Payer approval confirmation', 'Effective date tracking', 'Provider portal access setup', 'First claim submission test'] },
];

const painPoints = [
  { p: 'Revenue gap during credentialing (60–120 days)', s: 'Bridge billing arrangements and locum tenens setup to maintain cash flow during enrollment' },
  { p: 'Delayed enrollment from CAQH errors', s: 'Complete CAQH audit before submitting any payer applications to catch discrepancies' },
  { p: 'Expired DEA/license causing claim denials', s: 'Automated expiration tracking with 90/60/30-day alerts and proactive renewal workflow' },
  { p: 'Wrong taxonomy code (207V00000X)', s: 'Taxonomy code verification on all applications and existing claims to catch past errors' },
  { p: 'New practice setup — no payer relationships', s: 'Simultaneous submission to all priority payers with fee schedule negotiation support' },
];

const faqs = [
  { q: 'How long does OB/GYN credentialing take?', a: 'Medicare typically takes 30–60 days via PECOS. Commercial payers (BCBS, Aetna, UHC, Cigna) take 90–120 days. State Medicaid averages 60–90 days. We submit all applications simultaneously within 48 hours of receiving complete documentation, and follow up weekly.' },
  { q: 'What is CAQH and why does every OB/GYN need it?', a: 'CAQH ProView is the centralized credentialing database that most commercial payers use as the starting point for enrollment. Without an up-to-date CAQH profile, your payer applications will be delayed or rejected. We build and maintain your CAQH profile, including quarterly re-attestation.' },
  { q: 'Can I bill during the credentialing period?', a: 'Yes — we set up bridge billing arrangements to minimize revenue gaps. Options include locum tenens billing under a credentialed provider, provisional Medicare billing when available, and retroactive billing arrangements for the enrollment period that some payers allow.' },
  { q: 'What is taxonomy code 207V00000X?', a: '207V00000X is the OB/GYN specialty taxonomy code from the NUCC code set. It must appear on your CAQH profile, payer applications, and claim form Box 33b. Using a general or incorrect taxonomy code is one of the most common OB/GYN enrollment errors — it delays credentialing and causes claim denials.' },
];

export default function CredentialingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1F2D 0%, #0E2A3A 100%)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <nav style={{ marginBottom: 24 }}>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none' }}>Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span>
            <span style={{ color: '#0E7C7B', fontSize: 13 }}>Physician Credentialing</span>
          </nav>
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: '#0E7C7B' }}>207V00000X</code>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>OB/GYN Taxonomy</span>
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: 20 }}>
              OB/GYN Credentialing That Gets You In-Network Fast
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75, marginBottom: 32 }}>
              We submit applications within 48 hours, follow up weekly, and keep your credentials current — so your practice never loses a dollar to expired credentials or missed payer relationships.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Start Credentialing Today →
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
          {['HIPAA Compliant', 'BAA Available', 'AAPC CPC-OB', 'AHIMA', 'MGMA', 'HIMSS'].map((b) => (
            <span key={b} style={{ fontSize: 12, fontWeight: 600, color: '#0E7C7B', background: '#E0F4F4', padding: '4px 12px', borderRadius: 100 }}>{b}</span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '40px 24px', background: 'linear-gradient(135deg, #0E7C7B, #065F5E)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
          {[{ v: '48 hrs', l: 'Application Submission' }, { v: '13+', l: 'Payers Covered' }, { v: '< 60 days', l: 'Medicare Enrollment' }, { v: '200+', l: 'Providers Credentialed' }].map((s) => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(22px,3.5vw,36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 4 }}>{s.v}</div>
              <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 13 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 48 }}>Complete Credentialing Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: '28px 24px' }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1A2B3C', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: '#4A5568', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taxonomy callout */}
      <section style={{ padding: '56px 24px', background: '#1A2B3C' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: 'rgba(14,124,123,0.15)', border: '1px solid rgba(14,124,123,0.3)', borderRadius: 16, padding: '36px 32px' }}>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 800, color: '#0E7C7B', display: 'block', marginBottom: 12 }}>207V00000X</code>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF', marginBottom: 12 }}>OB/GYN Specialty Taxonomy Code</h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, lineHeight: 1.75 }}>
              This taxonomy code must appear correctly on every CAQH profile, payer application, and claim form Box 33b. Using a general medicine or incorrect taxonomy code delays enrollment and causes claim denials. We verify taxonomy accuracy on every application we submit.
            </p>
          </div>
        </div>
      </section>

      {/* Payers */}
      <section style={{ padding: '72px 24px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 32 }}>Payers We Handle</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {payers.map((p) => (
              <span key={p} style={{ fontSize: 13, fontWeight: 600, color: '#2B2D42', background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '8px 18px', borderRadius: 8 }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 48 }}>Typical Credentialing Timeline</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {timeline.map((t, i) => (
              <div key={i} style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: '24px 20px' }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#0E7C7B', letterSpacing: '0.06em', marginBottom: 8 }}>{t.week}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1A2B3C', marginBottom: 12 }}>{t.title}</h3>
                <ul style={{ display: 'grid', gap: 6 }}>
                  {t.tasks.map((task, j) => (
                    <li key={j} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#4A5568' }}>
                      <span style={{ color: '#0E7C7B', flexShrink: 0 }}>→</span>{task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section style={{ padding: '72px 24px', background: '#F7FAFC' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 40 }}>Common Credentialing Pitfalls — Solved</h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {painPoints.map((item, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 12, padding: '20px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div style={{ display: 'flex', gap: 10 }}>
                  <span style={{ color: '#E53E3E', fontSize: 16, flexShrink: 0 }}>✗</span>
                  <span style={{ fontSize: 14, color: '#2B2D42' }}>{item.p}</span>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <span style={{ color: '#0E7C7B', fontSize: 16, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 14, color: '#4A5568', lineHeight: 1.65 }}>{item.s}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#1A2B3C', textAlign: 'center', marginBottom: 40 }}>Credentialing — FAQ</h2>
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
            We opened a new OB/GYN practice and were fully credentialed with 8 payers within 90 days. OBGYNBillingPro handled everything — we didn&apos;t miss a single revenue day.
          </p>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1A2B3C' }}>Dr. Priya K.</div>
          <div style={{ fontSize: 13, color: '#718096' }}>Solo OB/GYN — California</div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ padding: '48px 24px', background: '#E0F4F4' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/practice-setup" style={{ background: '#FFFFFF', color: '#0E7C7B', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(14,124,123,0.2)' }}>New Practice Setup →</Link>
          <Link href="/revenue-cycle-management" style={{ background: '#FFFFFF', color: '#0E7C7B', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(14,124,123,0.2)' }}>Revenue Cycle Management →</Link>
          <Link href="/calculator" style={{ background: '#0E7C7B', color: '#FFFFFF', padding: '10px 22px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Revenue Calculator →</Link>
        </div>
      </section>

      <section style={{ padding: '64px 24px', background: 'linear-gradient(135deg, #0D1F2D, #1A2B3C)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>Ready to Get In-Network Fast?</h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>Start your credentialing today. We submit within 48 hours and follow up until you&apos;re approved.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0E7C7B', color: '#FFFFFF', padding: '15px 32px', borderRadius: 8, fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Start Credentialing Today →
          </Link>
        </div>
      </section>
    </>
  );
}
