import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'OB/GYN Telehealth Billing Services │ 2026',
    description: 'Expert OB/GYN telehealth billing service. CPT 99213–99215, GT/95 modifiers, POS 02/10, audio-only codes. 2026 permanent telehealth rules.',
    alternates: { canonical: 'https://obgynbillingpro.com/telehealth-billing' },
    openGraph: {
      title: 'OB/GYN Telehealth Billing Services │ 2026',
      description: 'Expert OB/GYN telehealth billing service. CPT 99213–99215, GT/95 modifiers, POS 02/10, audio-only codes. 2026 permanent telehealth rules.',
      url: 'https://obgynbillingpro.com/telehealth-billing',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'OB/GYN Telehealth Billing Services │ 2026', description: 'Expert OB/GYN telehealth billing service. CPT 99213–99215, GT/95 modifiers, POS 02/10, audio-only codes. 2026 permanent telehealth rules.' },
  };
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which CPT codes apply to OB/GYN telehealth visits in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OB/GYN telehealth visits use standard E/M codes 99213, 99214, and 99215 with the appropriate telehealth modifier. Video visits use modifier 95, while audio-only visits use modifier 93 or standalone codes 99441–99443. The place of service code distinguishes facility-based telehealth (POS 02) from home-based visits (POS 10).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between GT modifier and 95 modifier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modifier GT (via interactive audio and video telecommunications systems) is used for Medicare claims submitted to Part B for telehealth services. Modifier 95 (synchronous telemedicine service rendered via a real-time interactive audio and video telecommunications system) is used for commercial payer claims. For most 2026 commercial payer billing, modifier 95 is preferred. Always verify individual payer policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are OB/GYN telehealth services permanently covered by Medicare in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Consolidated Appropriations Act extended and made permanent many telehealth flexibilities introduced during the COVID-19 public health emergency, including coverage for OB/GYN E/M visits, mental health services, and certain preventive services. Audio-only coverage under specific codes was also extended through 2026 under ongoing legislation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What audio-only billing codes can OB/GYN practices use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For telephone-only (audio-only) services, OB/GYN practices can bill CPT 99441 (5–10 min), 99442 (11–20 min), and 99443 (21–30 min) for telephone E/M services. HCPCS code G2012 covers brief virtual check-in services. G2252 covers brief communication technology-based service. G0071 is used for audio-only communication technology-based services under certain payer contracts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we bill telehealth services for Medicaid OB/GYN patients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Medicaid telehealth coverage varies by state. Most state Medicaid programs now cover synchronous video visits for OB/GYN services including prenatal visits, postpartum check-ins, and gynecology consultations. Some states also cover audio-only services. We monitor all state Medicaid telehealth policies and apply the correct billing approach for each patient's payer.",
      },
    },
  ],
};

const bizSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'OBGYNBillingPro — Telehealth Billing',
  description: 'Specialized OB/GYN telehealth billing service for video and audio-only virtual visits.',
  url: 'https://obgynbillingpro.com/telehealth-billing',
  telephone: process.env.NEXT_PUBLIC_PHONE,
  medicalSpecialty: 'Obstetrics and Gynecology',
};

const T = {
  teal: '#0E7C7B',
  tealDark: '#065F5E',
  tealLight: '#E0F4F4',
  navy: '#1A2B3C',
  navyAlt: '#2B2D42',
  body: '#4A5568',
  lightBg: '#F7FAFC',
  success: '#276749',
  terracotta: '#E2725B',
  warning: '#D97706',
  accentBlue: '#2B6CB0',
  border: '#E2E8F0',
  white: '#FFFFFF',
};

const videoVisitCodes = [
  { cpt: '99213', description: 'Office/Outpatient E/M — Low Complexity', modifier: '95 or GT', duration: '20–29 min', notes: 'Follow-up telehealth visit, minor concerns' },
  { cpt: '99214', description: 'Office/Outpatient E/M — Moderate Complexity', modifier: '95 or GT', duration: '30–39 min', notes: 'Prenatal follow-up, contraception consult, GYN management' },
  { cpt: '99215', description: 'Office/Outpatient E/M — High Complexity', modifier: '95 or GT', duration: '40–54 min', notes: 'Complex GYN conditions, high-risk OB, multiple management decisions' },
  { cpt: '99421', description: 'Online Digital E/M — 5–10 min cumulative', modifier: 'None', duration: '5–10 min', notes: 'Asynchronous patient portal messages billed in 7-day period' },
  { cpt: '99422', description: 'Online Digital E/M — 11–20 min cumulative', modifier: 'None', duration: '11–20 min', notes: 'Moderate portal/app-based consultation' },
  { cpt: '99423', description: 'Online Digital E/M — 21+ min cumulative', modifier: 'None', duration: '21+ min', notes: 'Complex asynchronous digital management' },
];

const audioOnlyCodes = [
  { code: '99441', type: 'CPT', description: 'Telephone E/M — Established Patient', duration: '5–10 minutes', coverage: 'Medicare, Medicaid, most commercial' },
  { code: '99442', type: 'CPT', description: 'Telephone E/M — Established Patient', duration: '11–20 minutes', coverage: 'Medicare, Medicaid, most commercial' },
  { code: '99443', type: 'CPT', description: 'Telephone E/M — Established Patient', duration: '21–30 minutes', coverage: 'Medicare, Medicaid, most commercial' },
  { code: 'G2012', type: 'HCPCS', description: 'Brief Virtual Check-In', duration: '5–10 minutes', coverage: 'Medicare Part B' },
  { code: 'G2252', type: 'HCPCS', description: 'Brief Communication Technology-Based Service', duration: '11–20 minutes', coverage: 'Medicare Part B' },
  { code: 'G0071', type: 'HCPCS', description: 'Audio-Only Communication Tech Service (FQHC/RHC)', duration: 'Variable', coverage: 'Medicare FQHC/RHC' },
];

const modifierGuide = [
  { modifier: '95', name: 'Synchronous Telemedicine', when: 'Commercial payer video visits', notes: 'Required by most BCBS, Aetna, UHC, Cigna plans for video-based E/M' },
  { modifier: 'GT', name: 'Interactive A/V Telecom', when: 'Medicare Part B video visits', notes: 'Used on Medicare claims for real-time video telehealth services' },
  { modifier: '93', name: 'Synchronous Telemedicine — Audio-Only', when: 'Audio-only commercial claims', notes: 'New in 2023 — replaces G2010 approach for many commercial payers' },
  { modifier: 'GQ', name: 'Asynchronous Telehealth', when: 'Store-and-forward services', notes: 'Federal telemedicine programs; rarely used in standard OB/GYN' },
];

const posGuide = [
  { pos: '02', name: 'Telehealth — Provider Location', when: 'Patient is NOT at home', notes: 'Patient at office, clinic, or facility; provider at different location' },
  { pos: '10', name: 'Telehealth — Patient at Home', when: 'Patient IS at home', notes: 'Post-PHE standard — patient connected from their own home or residence' },
  { pos: '11', name: 'Office', when: 'In-person follow-up same day', notes: 'Cannot use same day as telehealth for same service/same payer' },
];

const payerPolicies = [
  { payer: 'Medicare', videoVisit: '✓', audioOnly: '✓ (G2012, G2252)', posRequired: 'POS 02 or 10', modifier: 'GT', notes: 'Permanent coverage 2026; originating site waived for home visits' },
  { payer: 'Medicaid', videoVisit: '✓ (varies by state)', audioOnly: '✓ (select states)', posRequired: 'State-specific', modifier: 'GT or 95', notes: 'All 50 states cover OB video visits; audio-only varies' },
  { payer: 'BCBS', videoVisit: '✓', audioOnly: 'Plan-specific', posRequired: 'POS 10 (home)', modifier: '95', notes: 'Most BCBS plans cover prenatal + GYN telehealth; verify plan' },
  { payer: 'Aetna', videoVisit: '✓', audioOnly: 'Limited', posRequired: 'POS 02 or 10', modifier: '95', notes: 'Covers 99213–99215 with modifier 95; audio-only case-by-case' },
  { payer: 'UnitedHealthcare', videoVisit: '✓', audioOnly: '✓ (99441–99443)', posRequired: 'POS 02 or 10', modifier: '95', notes: 'Full telehealth parity in most states for OB/GYN' },
  { payer: 'Cigna', videoVisit: '✓', audioOnly: 'Plan-dependent', posRequired: 'POS 02 or 10', modifier: '95', notes: 'Requires virtual care designation; verify network participation' },
  { payer: 'Humana', videoVisit: '✓', audioOnly: '✓', posRequired: 'POS 02 or 10', modifier: 'GT or 95', notes: 'Strong telehealth coverage; Humana Telehealth Policy updated Q1 2026' },
  { payer: 'Tricare', videoVisit: '✓', audioOnly: 'Limited', posRequired: 'POS 02', modifier: 'GT', notes: 'Direct care and purchased care programs differ; verify beneficiary plan' },
];

const updates2026 = [
  {
    title: 'Permanent Telehealth Coverage Extended',
    icon: '✓',
    color: T.success,
    text: 'Congress made permanent the COVID-era telehealth flexibilities for Medicare, including OB/GYN E/M visits, mental health integration, and expanded home-as-originating-site rules. No cliff dates for core OB telehealth services.',
  },
  {
    title: 'Audio-Only Rules Clarified',
    icon: '📞',
    color: T.accentBlue,
    text: 'CMS finalized audio-only coverage for patients who cannot access video technology, particularly for OB patients in rural areas or with limited smartphone access. Documentation must note inability to use video.',
  },
  {
    title: 'POS 10 Becomes Dominant',
    icon: '🏠',
    color: T.teal,
    text: 'POS 10 (Telehealth — Patient at Home) is now the primary place-of-service code for home-based telehealth, replacing the COVID-era workaround of using POS 11 with modifier 95. POS 10 carries different reimbursement rates than POS 02.',
  },
  {
    title: 'OB Global Period Telehealth',
    icon: '🤰',
    color: T.warning,
    text: 'Antepartum and postpartum telehealth visits within the global maternity package must be tracked carefully. Services inside the global period billed separately can trigger audits. We track global dates and flag all telehealth claims within maternity packages.',
  },
  {
    title: 'Interstate Licensure Compact',
    icon: '⚖️',
    color: T.navyAlt,
    text: 'The Interstate Medical Licensure Compact (IMLC) now covers 40+ states, enabling OB/GYN physicians to bill across state lines for telehealth. We verify provider licensure against patient location before every claim submission.',
  },
];

const faqs = [
  {
    q: 'Which CPT codes apply to OB/GYN telehealth visits in 2026?',
    a: 'OB/GYN telehealth visits use standard E/M codes 99213, 99214, and 99215 with modifier 95 (commercial) or GT (Medicare). Video visits require real-time audio-video capability. Audio-only visits use 99441–99443 or HCPCS G2012/G2252. Place of service codes 02 or 10 are required on all telehealth claims.',
  },
  {
    q: 'What is the difference between GT modifier and 95 modifier?',
    a: 'Modifier GT is used for Medicare Part B telehealth claims and indicates interactive audio-video telecommunications. Modifier 95 is used for commercial payer claims and indicates synchronous telemedicine. Using the wrong modifier causes immediate denials — we apply the correct modifier based on payer type, state, and service type for every claim.',
  },
  {
    q: 'Are OB/GYN telehealth services permanently covered by Medicare in 2026?',
    a: 'Yes. Core OB/GYN telehealth services are permanently covered under Medicare including standard E/M visits, antepartum check-ins (when not in global package), and postpartum follow-up. The Consolidated Appropriations Act locked in most PHE flexibilities through 2026 and beyond for standard care delivery.',
  },
  {
    q: 'What audio-only billing codes can OB/GYN practices use?',
    a: 'For telephone-only visits: CPT 99441 (5–10 min), 99442 (11–20 min), 99443 (21–30 min). HCPCS G2012 covers brief virtual check-ins (5–10 min) for Medicare. G2252 covers 11–20 minute brief technology-based services. Audio-only documentation must specifically note why video was not used.',
  },
  {
    q: 'How do we handle telehealth billing within the OB global maternity package?',
    a: 'Antepartum visits within the global package (59400, 59510, 59610, 59618) are included in the global fee and should not be billed separately regardless of whether they are telehealth or in-person. If a patient changes insurance mid-pregnancy, antepartum visits — including telehealth — may be billed with 59425/59426. We track every global period date to prevent overbilling and audit exposure.',
  },
];

export default function TelehealthBillingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bizSchema) }}
      />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(14,124,123,0.2)', border: '1px solid rgba(14,124,123,0.4)', borderRadius: 20, padding: '6px 14px', marginBottom: 24 }}>
            <span style={{ color: T.tealLight, fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>2026 Telehealth Rules — Permanent Coverage Confirmed</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: T.white, lineHeight: 1.2, maxWidth: 700, marginBottom: 20 }}>
            OB/GYN Telehealth Billing — Every Virtual Visit Properly Reimbursed
          </h1>
          <p style={{ fontSize: 18, color: '#CBD5E0', lineHeight: 1.7, maxWidth: 620, marginBottom: 36 }}>
            Modifier errors cost OB/GYN practices thousands per month in denied telehealth claims. We apply the correct CPT codes, modifiers, and place-of-service codes for every payer — so your virtual visits get paid the first time.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.teal, color: T.white, padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Free Telehealth Billing Review →
            </a>
            <a href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: T.white, padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
              Calculate Revenue Leakage
            </a>
          </div>
          {/* Hero stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { val: '98.2%', label: 'Telehealth First-Pass Rate' },
              { val: '$0', label: 'Missed Modifier Revenue' },
              { val: '8 Payers', label: 'Policy Libraries Maintained' },
              { val: '2026', label: 'Policy Current' },
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
          {['HIPAA Compliant', 'BAA Available', 'SOC 2 Type II (Phase 3)', 'AAPC Certified', 'AHIMA Credentialed'].map((b) => (
            <span key={b} style={{ fontSize: 12, color: '#90CDF4', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>✓ {b}</span>
          ))}
        </div>
      </section>

      {/* 2026 Policy Updates */}
      <section style={{ background: T.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>2026 Updates</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>What Changed for Telehealth Billing in 2026</h2>
            <p style={{ fontSize: 16, color: T.body, maxWidth: 560, margin: '0 auto' }}>Permanent flexibilities, new POS requirements, and audio-only rule clarifications — all built into our billing workflows.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {updates2026.map((u) => (
              <div key={u.title} style={{ background: T.lightBg, borderRadius: 12, padding: 28, borderLeft: `4px solid ${u.color}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 22 }}>{u.icon}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: T.navy, lineHeight: 1.3 }}>{u.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: T.body, lineHeight: 1.7 }}>{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Visit CPT Codes */}
      <section style={{ background: T.lightBg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Video Visit Codes</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>Synchronous Telehealth CPT Codes</h2>
            <p style={{ fontSize: 16, color: T.body, maxWidth: 560, margin: '0 auto' }}>E/M codes with telehealth modifiers — the backbone of OB/GYN virtual care billing.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: T.white, borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}>
              <thead>
                <tr style={{ background: T.teal }}>
                  {['CPT Code', 'Description', 'Modifier', 'Typical Duration', 'OB/GYN Application'].map((h) => (
                    <th key={h} style={{ padding: '14px 16px', textAlign: 'left', color: T.white, fontSize: 13, fontWeight: 600, letterSpacing: '0.03em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {videoVisitCodes.map((row, i) => (
                  <tr key={row.cpt} style={{ background: i % 2 === 0 ? T.white : T.lightBg }}>
                    <td style={{ padding: '14px 16px' }}>
                      <code style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700, color: T.teal, background: T.tealLight, padding: '2px 8px', borderRadius: 4 }}>{row.cpt}</code>
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 14, color: T.navy, fontWeight: 500 }}>{row.description}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: T.navyAlt, background: '#EDF2F7', padding: '2px 8px', borderRadius: 4 }}>{row.modifier}</code>
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: T.body }}>{row.duration}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: T.body }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Audio-Only Codes */}
      <section style={{ background: T.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Audio-Only</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>Telephone & Audio-Only Billing Codes</h2>
              <p style={{ fontSize: 15, color: T.body, lineHeight: 1.7, marginBottom: 24 }}>
                Many OB/GYN patients — especially rural, elderly, or postpartum mothers — cannot access video telehealth. Proper audio-only billing prevents lost revenue and ensures access.
              </p>
              <div style={{ background: T.lightBg, borderRadius: 10, padding: 20, borderLeft: `3px solid ${T.warning}` }}>
                <p style={{ fontSize: 13, color: T.body, lineHeight: 1.6 }}>
                  <strong style={{ color: T.navy }}>Documentation requirement:</strong> For audio-only visits, the clinical note must specifically state why video was not feasible (e.g., patient lacks smartphone, poor connectivity, patient preference for accessibility reasons). Without this documentation, payers may downgrade or deny audio-only claims.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {audioOnlyCodes.map((c) => (
                <div key={c.code} style={{ background: T.lightBg, borderRadius: 10, padding: 18, display: 'flex', gap: 16, alignItems: 'flex-start', border: `1px solid ${T.border}` }}>
                  <div>
                    <code style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 700, color: T.teal, background: T.tealLight, padding: '3px 10px', borderRadius: 5, display: 'block', marginBottom: 6 }}>{c.code}</code>
                    <span style={{ fontSize: 10, fontWeight: 700, color: T.navyAlt, background: '#EDF2F7', padding: '2px 6px', borderRadius: 4, letterSpacing: '0.04em' }}>{c.type}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: T.navy, marginBottom: 4 }}>{c.description}</div>
                    <div style={{ fontSize: 12, color: T.body }}><strong>Duration:</strong> {c.duration}</div>
                    <div style={{ fontSize: 12, color: T.body }}><strong>Coverage:</strong> {c.coverage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modifier Guide */}
      <section style={{ background: T.lightBg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Modifier Guide</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>Telehealth Modifiers — When to Use Which</h2>
            <p style={{ fontSize: 16, color: T.body, maxWidth: 540, margin: '0 auto' }}>Wrong modifier = automatic denial. Our billing team knows exactly which modifier to apply for each payer type.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
            {modifierGuide.map((m) => (
              <div key={m.modifier} style={{ background: T.white, borderRadius: 12, padding: 24, border: `1px solid ${T.border}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <code style={{ fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 700, color: T.teal, background: T.tealLight, padding: '4px 12px', borderRadius: 6 }}>{m.modifier}</code>
                  <span style={{ fontSize: 14, fontWeight: 700, color: T.navy }}>{m.name}</span>
                </div>
                <div style={{ fontSize: 13, color: T.body, marginBottom: 8 }}><strong>Use when:</strong> {m.when}</div>
                <div style={{ fontSize: 13, color: T.body, lineHeight: 1.6 }}>{m.notes}</div>
              </div>
            ))}
          </div>

          {/* POS Guide */}
          <div style={{ marginTop: 16 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: T.navy, marginBottom: 24, textAlign: 'center' }}>Place of Service (POS) Codes for Telehealth</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              {posGuide.map((p) => (
                <div key={p.pos} style={{ background: T.white, borderRadius: 12, padding: 24, border: `2px solid ${p.pos === '10' ? T.teal : T.border}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <code style={{ fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 700, color: p.pos === '10' ? T.teal : T.navyAlt, background: p.pos === '10' ? T.tealLight : '#EDF2F7', padding: '4px 12px', borderRadius: 6 }}>POS {p.pos}</code>
                    <span style={{ fontSize: 14, fontWeight: 700, color: T.navy }}>{p.name}</span>
                    {p.pos === '10' && <span style={{ fontSize: 11, fontWeight: 700, color: T.teal, background: T.tealLight, padding: '2px 8px', borderRadius: 10 }}>2026 Standard</span>}
                  </div>
                  <div style={{ fontSize: 13, color: T.body, marginBottom: 6 }}><strong>When:</strong> {p.when}</div>
                  <div style={{ fontSize: 13, color: T.body }}>{p.notes}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payer Policy Table */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: 'rgba(14,124,123,0.3)', color: T.tealLight, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Payer Policies</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.white, marginBottom: 16 }}>Telehealth Coverage by Major Payer</h2>
            <p style={{ fontSize: 16, color: '#CBD5E0', maxWidth: 540, margin: '0 auto' }}>We maintain up-to-date telehealth policy libraries for every major payer your OB/GYN practice accepts.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(255,255,255,0.05)', borderRadius: 12, overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: 'rgba(14,124,123,0.5)' }}>
                  {['Payer', 'Video Visits', 'Audio-Only', 'POS Required', 'Modifier', 'Key Notes'].map((h) => (
                    <th key={h} style={{ padding: '14px 16px', textAlign: 'left', color: T.white, fontSize: 13, fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {payerPolicies.map((row, i) => (
                  <tr key={row.payer} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <td style={{ padding: '14px 16px', fontSize: 14, color: T.white, fontWeight: 700 }}>{row.payer}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: '#86EFAC' }}>{row.videoVisit}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: '#FDE68A' }}>{row.audioOnly}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: T.tealLight, background: 'rgba(14,124,123,0.3)', padding: '2px 6px', borderRadius: 4 }}>{row.posRequired}</code>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: T.tealLight, background: 'rgba(14,124,123,0.3)', padding: '2px 6px', borderRadius: 4 }}>{row.modifier}</code>
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 12, color: '#CBD5E0' }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Common Telehealth Billing Errors */}
      <section style={{ background: T.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: '#FEF3C7', color: T.warning, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Error Prevention</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>Top Telehealth Billing Errors We Eliminate</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { error: 'Wrong Modifier for Payer', fix: 'Using GT on commercial claims (should be 95) or 95 on Medicare (should be GT) causes immediate CO-4 denials. We maintain a payer-modifier matrix that is updated with every policy change.', severity: 'High' },
              { error: 'Incorrect POS Code', fix: 'Using POS 11 (office) instead of POS 10 (patient home) or POS 02 (non-home) causes claim rejections or reimbursement at wrong rate. Every telehealth claim must reflect where the patient is located.', severity: 'High' },
              { error: 'Billing Telehealth Within Global Period', fix: 'Antepartum telehealth visits billed separately when included in global maternity package triggers overpayment letters. We track every global package enrollment date against telehealth visit dates.', severity: 'High' },
              { error: 'Missing Audio-Only Documentation', fix: 'Audio-only (telephone) claims denied when the note doesn\'t document why video was not used. We flag audio-only claims for documentation review before submission.', severity: 'Medium' },
              { error: 'Cross-State Licensure Not Verified', fix: 'Billing for telehealth when provider is not licensed in patient\'s state violates law and causes clawbacks. We verify licensure for every provider-patient state combination.', severity: 'Critical' },
              { error: 'Duplicate Billing — Telehealth + In-Person Same Day', fix: 'Billing a telehealth E/M and in-person E/M on the same day for the same condition triggers medical necessity review. Legitimate same-day services require modifier 25 on one service.', severity: 'Medium' },
            ].map((item) => (
              <div key={item.error} style={{ background: T.lightBg, borderRadius: 12, padding: 24, borderTop: `3px solid ${item.severity === 'Critical' ? '#E53E3E' : item.severity === 'High' ? T.warning : T.teal}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase',
                    color: item.severity === 'Critical' ? '#E53E3E' : item.severity === 'High' ? T.warning : T.teal,
                    background: item.severity === 'Critical' ? '#FEE2E2' : item.severity === 'High' ? '#FEF3C7' : T.tealLight,
                    padding: '2px 8px', borderRadius: 10
                  }}>{item.severity}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: T.navy }}>{item.error}</h3>
                </div>
                <p style={{ fontSize: 14, color: T.body, lineHeight: 1.7 }}>{item.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ background: `linear-gradient(135deg, ${T.teal} 0%, ${T.tealDark} 100%)`, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, textAlign: 'center' }}>
          {[
            { val: '98.2%', label: 'First-Pass Rate' },
            { val: '$4.2M', label: 'Revenue Recovered' },
            { val: '200+', label: 'OB/GYN Practices Served' },
            { val: '8', label: 'Major Payer Policy Libraries' },
          ].map((s) => (
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
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy }}>Telehealth Billing Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((faq) => (
              <details key={faq.q} style={{ background: T.white, borderRadius: 10, overflow: 'hidden', border: `1px solid ${T.border}` }}>
                <summary style={{ padding: '20px 24px', cursor: 'pointer', fontSize: 16, fontWeight: 600, color: T.navy, listStyle: 'none', userSelect: 'none' }}>
                  {faq.q}
                </summary>
                <div style={{ padding: '0 24px 20px', fontSize: 15, color: T.body, lineHeight: 1.7 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ background: T.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <blockquote style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontStyle: 'italic', color: T.navy, lineHeight: 1.8, marginBottom: 28, padding: '0 16px' }}>
            &ldquo;We were losing around $3,200 per month on denied telehealth claims because our staff was using modifier 95 on Medicare claims instead of GT. OBGYNBillingPro caught this in the first audit, corrected the modifier mapping, and we haven&rsquo;t had a telehealth denial since.&rdquo;
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: T.tealLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: T.teal }}>S</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, color: T.navy, fontSize: 15 }}>Dr. Sara Okonkwo, MD</div>
              <div style={{ fontSize: 13, color: T.body }}>Women's Health Partners — Chicago, IL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ background: T.lightBg, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: T.navy, marginBottom: 24 }}>Related Services</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {[
              { label: 'Revenue Cycle Management', href: '/revenue-cycle-management' },
              { label: 'OB/GYN Credentialing', href: '/credentialing' },
              { label: 'Denial Management', href: '/denial-management' },
              { label: 'Eligibility Verification', href: '/eligibility-verification' },
              { label: 'Revenue Leakage Calculator', href: '/calculator' },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{ padding: '10px 20px', background: T.white, borderRadius: 8, border: `1px solid ${T.border}`, color: T.teal, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                {l.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.white, marginBottom: 16 }}>Stop Losing Revenue on Telehealth Denials</h2>
          <p style={{ fontSize: 17, color: '#CBD5E0', lineHeight: 1.7, marginBottom: 36 }}>Get a free telehealth billing review — we&apos;ll audit your last 90 days of virtual visit claims and show you exactly where the revenue is leaking.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.teal, color: T.white, padding: '16px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Free Telehealth Billing Review →
            </a>
            <a href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: T.white, padding: '16px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Calculate Revenue Leakage
            </a>
          </div>
          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
            {['HIPAA Compliant', 'BAA Available', 'No Setup Fees', 'Month-to-Month'].map((b) => (
              <span key={b} style={{ fontSize: 12, color: T.tealLight, fontWeight: 600 }}>✓ {b}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
