import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'New OB/GYN Practice Billing Setup │ Launch Ready',
    description: 'New OB/GYN practice billing setup service. NPI, CAQH, payer enrollment, EHR selection, fee schedule, superbill, and staff training — launch-ready in 30 days.',
    alternates: { canonical: 'https://obgynbillingpro.com/practice-setup' },
    openGraph: {
      title: 'New OB/GYN Practice Billing Setup │ Launch Ready',
      description: 'New OB/GYN practice billing setup service. NPI, CAQH, payer enrollment, EHR selection, fee schedule, superbill, and staff training — launch-ready in 30 days.',
      url: 'https://obgynbillingpro.com/practice-setup',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'New OB/GYN Practice Billing Setup │ Launch Ready',
      description: 'New OB/GYN practice billing setup service. Launch-ready in 30 days.',
    },
  };
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to set up billing for a new OB/GYN practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A solo OB/GYN practice can be fully billing-operational in 30–45 days. This includes NPI registration (1–3 days), CAQH profile completion (3–5 days), payer credentialing (45–120 days, but interim billing arrangements can be made), EHR/PM setup, fee schedule build, and superbill design. The critical path is payer credentialing — we initiate this immediately so your revenue stream starts as early as possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What EHR system is best for a new OB/GYN practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The right EHR depends on practice size and focus. For solo practices, Kareo or DrChrono offer affordable, OB-friendly setups. For groups (2–5 physicians), eClinicalWorks or NextGen Healthcare provide stronger billing integrations. For larger groups or hospital-affiliated practices, Athenahealth or Epic are industry standards. We guide every new practice through EHR selection and configure the billing module regardless of which system is chosen.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is CAQH and why does an OB/GYN practice need it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CAQH ProView is the universal credentialing database used by most commercial insurance payers. Completing a CAQH profile is required before you can enroll with UnitedHealthcare, Aetna, BCBS, Cigna, Humana, and most other major payers. We build and maintain your CAQH profile, keep attestations current (required every 120 days), and submit it to all applicable payers during enrollment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we bill claims before credentialing is complete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — through provisional billing or locum tenens arrangements. Many payers allow new providers to submit claims under a sponsoring physician\'s NPI while credentialing is pending, with retroactive payment once approved. We manage these interim arrangements, track pending applications, and ensure retroactive claim resubmission as each payer credentialing is completed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in the OB/GYN fee schedule setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our fee schedule setup includes: loading all relevant OB/GYN CPT codes (global maternity, GYN surgery, E/M, in-office procedures, telehealth), setting charges at 200–250% of Medicare rates for negotiating leverage, configuring payer-specific allowed amounts, establishing global maternity package tracking, and setting up LARC and preventive care codes. We also identify commonly missed or underbilled codes specific to your practice mix.',
      },
    },
  ],
};

const bizSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'OBGYNBillingPro — Practice Setup',
  description: 'Billing setup services for new OB/GYN practices — NPI, CAQH, payer enrollment, EHR, fee schedule, and superbill.',
  url: 'https://obgynbillingpro.com/practice-setup',
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

const practiceTypes = [
  {
    type: 'Solo Launch',
    icon: '👩‍⚕️',
    description: 'A single OB/GYN physician opening a new independent practice.',
    timeline: '30–45 days to first claim',
    services: ['Individual NPI registration', 'Solo CAQH profile', 'Direct payer enrollment', 'Lean EHR/PM setup', 'Solo practitioner superbill', 'Personal fee schedule'],
    highlight: false,
  },
  {
    type: 'New Group Practice',
    icon: '🏥',
    description: '2–5 OB/GYN physicians forming a new group practice entity.',
    timeline: '45–60 days to first claim',
    services: ['Group NPI (Type II) setup', 'Individual + group CAQH', 'Multi-provider payer enrollment', 'Group billing module configuration', 'Shared charge master', 'Provider-level fee schedule'],
    highlight: true,
  },
  {
    type: 'Practice Acquisition',
    icon: '🤝',
    description: 'Buying an existing OB/GYN practice and transitioning billing.',
    timeline: '14–21 days transition',
    services: ['Billing system audit & migration', 'Payer ID reassignment', 'Open AR transition management', 'Contract renegotiation support', 'Staff retraining', 'Historical data reconciliation'],
    highlight: false,
  },
  {
    type: 'Hospital Spin-Off',
    icon: '🏛️',
    description: 'OB/GYN group leaving a hospital system to form an independent practice.',
    timeline: '30–60 days transition',
    services: ['Entity separation billing setup', 'New payer contracting from scratch', 'Patient notification billing transition', 'Hospital vs. office CPT code alignment', 'Facility vs. non-facility fee schedules', 'Provider credentialing for new entity'],
    highlight: false,
  },
];

const setupPhases = [
  {
    phase: 'Week 1',
    title: 'Foundation & Registration',
    color: T.teal,
    tasks: [
      { task: 'Individual NPI (Type I) registration via NPPES', done: true },
      { task: 'Group/Organization NPI (Type II) if applicable', done: true },
      { task: 'Taxonomy code selection: 207V00000X (OB/GYN)', done: true },
      { task: 'CAQH ProView profile creation and completion', done: true },
      { task: 'State medical license verification', done: true },
      { task: 'DEA registration confirmation', done: true },
      { task: 'Tax ID / EIN setup for billing purposes', done: true },
    ],
  },
  {
    phase: 'Weeks 2–3',
    title: 'Payer Applications & EHR',
    color: T.accentBlue,
    tasks: [
      { task: 'Medicare enrollment via PECOS (45–60 day timeline)', done: true },
      { task: 'Medicaid enrollment for applicable state(s)', done: true },
      { task: 'BCBS credentialing application submitted', done: true },
      { task: 'Aetna, UHC, Cigna, Humana applications submitted', done: true },
      { task: 'EHR/PM system selected and provisioned', done: true },
      { task: 'Billing module configured with OB/GYN-specific setup', done: true },
      { task: 'ERA/EFT enrollment initiated with all payers', done: true },
    ],
  },
  {
    phase: 'Weeks 3–4',
    title: 'Fee Schedule & Superbill',
    color: T.success,
    tasks: [
      { task: 'Global maternity CPT codes loaded (59400, 59510, 59610, 59618)', done: true },
      { task: 'GYN surgery CPT codes configured', done: true },
      { task: 'E/M codes 99202–99215 with complexity levels', done: true },
      { task: 'Preventive care / well-woman codes (99381–99397)', done: true },
      { task: 'In-office procedure codes (colposcopy, LEEP, IUD, etc.)', done: true },
      { task: 'Fee schedule set at 200–250% of Medicare rates', done: true },
      { task: 'OB/GYN-specific superbill designed and approved', done: true },
    ],
  },
  {
    phase: 'Weeks 4–5',
    title: 'Launch & Training',
    color: T.warning,
    tasks: [
      { task: 'Billing policy manual drafted and delivered', done: true },
      { task: 'Staff training: charge capture, insurance verification', done: true },
      { task: 'Global maternity tracking workflow established', done: true },
      { task: 'Prior auth process documented for payer requirements', done: true },
      { task: 'Claim scrubbing rules configured in PM system', done: true },
      { task: 'Test claims submitted and reconciled', done: true },
      { task: 'Go-live: live claims submission begins', done: true },
    ],
  },
];

const setupServices = [
  {
    icon: '🪪',
    title: 'NPI Registration',
    description: 'Individual (Type I) and Group (Type II) NPI registration through NPPES. Correct taxonomy code selection (207V00000X) and provider data verification.',
  },
  {
    icon: '📋',
    title: 'CAQH ProView Setup',
    description: 'Complete CAQH profile build with all required credentialing documents. Ongoing attestation management (every 120 days) to keep your profile active.',
  },
  {
    icon: '🏦',
    title: 'Payer Enrollment',
    description: 'Applications submitted to Medicare (PECOS), Medicaid, and all commercial payers. ERA/EFT enrollment for electronic remittance and direct deposit.',
  },
  {
    icon: '💻',
    title: 'EHR/PM Configuration',
    description: 'Billing module setup in your chosen EHR: Athenahealth, eCW, NextGen, Kareo, DrChrono. OB/GYN-specific code lists, global period tracking, and claims integration.',
  },
  {
    icon: '💰',
    title: 'Fee Schedule Build',
    description: 'Comprehensive OB/GYN fee schedule loaded at 200–250% of Medicare rates. Global maternity packages, in-office procedures, preventive care, and telehealth codes.',
  },
  {
    icon: '📄',
    title: 'Charge Master & Superbill',
    description: 'Custom OB/GYN superbill design with all CPT, ICD-10, and modifier fields. Charge master aligned to fee schedule for accurate charge capture from day one.',
  },
  {
    icon: '📚',
    title: 'Billing Policy Manual',
    description: 'Written billing policies covering: claim submission timelines, denial protocols, patient balance billing, refund procedures, and payer-specific rules.',
  },
  {
    icon: '👥',
    title: 'Staff Training',
    description: 'Front-desk and billing staff training covering insurance verification, prior auth workflows, charge capture, and common OB/GYN billing pitfalls.',
  },
];

const ehrComparison = [
  { ehr: 'Kareo / Tebra', bestFor: 'Solo practices', obgynFeatures: 'OB prenatal flow sheets, basic maternity tracking', billing: 'Built-in PM, solid for simple practices', cost: '$', recommend: true },
  { ehr: 'DrChrono', bestFor: 'Solo to small group', obgynFeatures: 'Customizable templates, mobile-friendly', billing: 'Strong billing automation, ERA integration', cost: '$$', recommend: false },
  { ehr: 'eClinicalWorks (eCW)', bestFor: 'Small to mid-size groups', obgynFeatures: 'OB registry, prenatal notes, maternity module', billing: 'Strong PM, global period tracking available', cost: '$$', recommend: true },
  { ehr: 'NextGen Healthcare', bestFor: 'Mid to large groups', obgynFeatures: 'OB-specific content, pelvic floor templates', billing: 'Enterprise-grade PM, strong payer integrations', cost: '$$$', recommend: false },
  { ehr: 'Athenahealth', bestFor: 'Large groups, hospital-affiliated', obgynFeatures: 'OB-specific content library, maternity workflows', billing: 'Industry-leading RCM, real-time eligibility', cost: '$$$', recommend: true },
];

const missedCodes = [
  { code: '59430', label: 'Postpartum care only', risk: 'Often missed when delivery done by different provider' },
  { code: '57170', label: 'Diaphragm/cervical cap fitting', risk: 'Underreported contraceptive visit service' },
  { code: 'J7296–J7302', label: 'IUD device supply codes', risk: 'Supply code frequently dropped from IUD insertion claims' },
  { code: '99401–99404', label: 'Preventive counseling', risk: 'Billed separately from E/M but often overlooked' },
  { code: '58300', label: 'IUD insertion', risk: 'Global period confusion with same-day E/M' },
  { code: '96372', label: 'Therapeutic injection', risk: 'Missed when Depo-Provera or Rho(D) administered in office' },
];

const faqs = [
  {
    q: 'How long does it take to set up billing for a new OB/GYN practice?',
    a: 'A solo OB/GYN practice can be billing-operational in 30–45 days. NPI registration takes 1–3 days, CAQH profile 3–5 days. The long-pole item is payer credentialing (45–120 days), but we initiate interim billing arrangements so revenue starts immediately. Groups typically take 45–60 days given multi-provider enrollment.',
  },
  {
    q: 'What EHR system is best for a new OB/GYN practice?',
    a: 'It depends on practice size. Solo practices do well with Kareo or DrChrono. Small groups (2–5) should evaluate eClinicalWorks or NextGen. Larger groups or hospital-affiliated practices are best served by Athenahealth. We help you evaluate options, configure the billing module, and train your team regardless of which system you choose.',
  },
  {
    q: 'What is CAQH and why does my practice need it?',
    a: 'CAQH ProView is the universal credentialing database used by most major commercial payers. UnitedHealthcare, Aetna, BCBS, Cigna, and Humana all pull from CAQH. Without a complete CAQH profile, you cannot enroll in these payer networks. We build your CAQH profile, upload all required documents, and maintain the 120-day attestation cycle.',
  },
  {
    q: 'Can we bill claims before credentialing is complete?',
    a: 'Yes. Through provisional billing or locum tenens arrangements, new OB/GYN providers can submit claims under a sponsoring physician\'s NPI while credentialing is pending. Most payers honor retroactive payment once credentialing is approved. We manage these interim arrangements and handle retroactive resubmission.',
  },
  {
    q: 'What is included in the OB/GYN fee schedule setup?',
    a: 'We load all OB/GYN CPT codes including global maternity packages (59400, 59510, 59610, 59618), GYN surgical codes, E/M levels, preventive care, in-office procedures, and telehealth. Charges are set at 200–250% of Medicare rates. We also configure global maternity tracking, LARC codes, and payer-specific allowed amounts as contracts are executed.',
  },
];

export default function PracticeSetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bizSchema) }} />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(14,124,123,0.2)', border: '1px solid rgba(14,124,123,0.4)', borderRadius: 20, padding: '6px 14px', marginBottom: 24 }}>
            <span style={{ color: T.tealLight, fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>30-Day Launch Plan — Billing Operational from Day One</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: T.white, lineHeight: 1.2, maxWidth: 720, marginBottom: 20 }}>
            Launch Your OB/GYN Practice With the Right Billing Foundation
          </h1>
          <p style={{ fontSize: 18, color: '#CBD5E0', lineHeight: 1.7, maxWidth: 620, marginBottom: 36 }}>
            Billing errors made at launch follow a practice for years — wrong fee schedules, incomplete payer enrollment, missed codes. We build your billing infrastructure correctly from the start so you collect every dollar from the very first claim.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.teal, color: T.white, padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Free Practice Setup Consultation →
            </a>
            <a href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: T.white, padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
              Calculate Revenue Potential
            </a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { val: '30 Days', label: 'Solo Practice Launch Timeline' },
              { val: '200+', label: 'Practices Successfully Launched' },
              { val: '0', label: 'Billing Gaps at Go-Live' },
              { val: '$0', label: 'Revenue Lost to Setup Errors' },
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
          {['HIPAA Compliant', 'BAA Available', 'SOC 2 Type II (Phase 3)', 'AAPC Certified', 'AHIMA Credentialed', 'MGMA Member'].map((b) => (
            <span key={b} style={{ fontSize: 12, color: '#90CDF4', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>✓ {b}</span>
          ))}
        </div>
      </section>

      {/* Practice Types */}
      <section style={{ background: T.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Practice Types</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>Every OB/GYN Launch Scenario Covered</h2>
            <p style={{ fontSize: 16, color: T.body, maxWidth: 560, margin: '0 auto' }}>Whether you&apos;re opening a solo practice or spinning off from a hospital system, we&apos;ve built the billing infrastructure for every scenario.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {practiceTypes.map((pt) => (
              <div key={pt.type} style={{ background: T.lightBg, borderRadius: 14, padding: 28, border: pt.highlight ? `2px solid ${T.teal}` : `1px solid ${T.border}`, position: 'relative' }}>
                {pt.highlight && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: T.teal, color: T.white, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 12px', borderRadius: 10, whiteSpace: 'nowrap' }}>
                    Most Common
                  </div>
                )}
                <div style={{ fontSize: 36, marginBottom: 14 }}>{pt.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: T.navy, marginBottom: 8 }}>{pt.type}</h3>
                <p style={{ fontSize: 14, color: T.body, lineHeight: 1.6, marginBottom: 16 }}>{pt.description}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: T.tealLight, borderRadius: 8, padding: '4px 10px', marginBottom: 16 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: T.teal }}>⚡ {pt.timeline}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {pt.services.map((s) => (
                    <li key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: T.body }}>
                      <span style={{ color: T.teal, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-Day Launch Plan */}
      <section style={{ background: T.lightBg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>30-Day Plan</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>Your OB/GYN Practice Launch Checklist</h2>
            <p style={{ fontSize: 16, color: T.body, maxWidth: 560, margin: '0 auto' }}>Every task, in order, with nothing missed. We execute this entire checklist for your practice.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {setupPhases.map((phase, idx) => (
              <div key={phase.phase} style={{ background: T.white, borderRadius: 14, overflow: 'hidden', border: `1px solid ${T.border}` }}>
                <div style={{ background: phase.color, padding: '20px 24px' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>Phase {idx + 1} — {phase.phase}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: T.white }}>{phase.title}</div>
                </div>
                <div style={{ padding: '20px 24px' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {phase.tasks.map((t) => (
                      <li key={t.task} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{ width: 18, height: 18, borderRadius: '50%', background: `${phase.color}20`, border: `2px solid ${phase.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <span style={{ fontSize: 10, color: phase.color, fontWeight: 700 }}>✓</span>
                        </span>
                        <span style={{ fontSize: 13, color: T.body, lineHeight: 1.5 }}>{t.task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Services Grid */}
      <section style={{ background: T.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>What We Do</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>Complete Practice Billing Setup Services</h2>
            <p style={{ fontSize: 16, color: T.body, maxWidth: 560, margin: '0 auto' }}>Everything you need to start billing from day one — not just the paperwork, but the infrastructure, workflows, and training.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {setupServices.map((s) => (
              <div key={s.title} style={{ background: T.lightBg, borderRadius: 14, padding: 28, border: `1px solid ${T.border}` }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: T.navy, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: T.body, lineHeight: 1.7 }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EHR Comparison */}
      <section style={{ background: T.lightBg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>EHR Selection</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>OB/GYN EHR Comparison Guide</h2>
            <p style={{ fontSize: 16, color: T.body, maxWidth: 540, margin: '0 auto' }}>The right EHR determines how smoothly your billing runs. We configure and integrate with all major platforms.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: T.white, borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}>
              <thead>
                <tr style={{ background: T.teal }}>
                  {['EHR / PM System', 'Best For', 'OB/GYN Features', 'Billing Strength', 'Cost Tier', ''].map((h) => (
                    <th key={h} style={{ padding: '14px 16px', textAlign: 'left', color: T.white, fontSize: 13, fontWeight: 600, letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ehrComparison.map((row, i) => (
                  <tr key={row.ehr} style={{ background: i % 2 === 0 ? T.white : T.lightBg, borderBottom: `1px solid ${T.border}` }}>
                    <td style={{ padding: '14px 16px', fontWeight: 700, color: T.navy, fontSize: 14 }}>{row.ehr}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: T.body }}>{row.bestFor}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: T.body }}>{row.obgynFeatures}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: T.body }}>{row.billing}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700, color: T.teal }}>{row.cost}</span>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      {row.recommend && (
                        <span style={{ background: T.tealLight, color: T.teal, fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 8 }}>Our Pick</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Commonly Missed Codes */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: 'rgba(14,124,123,0.3)', color: T.tealLight, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Revenue Protection</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.white, marginBottom: 16 }}>OB/GYN Codes Most Often Missed at Launch</h2>
            <p style={{ fontSize: 16, color: '#CBD5E0', maxWidth: 540, margin: '0 auto' }}>New practices lose thousands monthly on these codes. We configure your charge capture to catch all of them.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {missedCodes.map((c) => (
              <div key={c.code} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: 24, border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <code style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 700, color: T.tealLight, background: 'rgba(14,124,123,0.3)', padding: '3px 10px', borderRadius: 5 }}>{c.code}</code>
                  <span style={{ fontSize: 14, fontWeight: 600, color: T.white }}>{c.label}</span>
                </div>
                <p style={{ fontSize: 13, color: '#90CDF4', lineHeight: 1.6 }}>{c.risk}</p>
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
            { val: '30 Days', label: 'Avg Solo Practice Launch' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 40, fontWeight: 700, color: T.white }}>{s.val}</div>
              <div style={{ fontSize: 14, color: T.tealLight, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Payer Enrollment Details */}
      <section style={{ background: T.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Payer Enrollment</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>We Enroll You With Every Payer You Need</h2>
              <p style={{ fontSize: 15, color: T.body, lineHeight: 1.7, marginBottom: 24 }}>
                Payer credentialing is the critical path for new OB/GYN practices. We initiate applications with all payers simultaneously, track every application, and manage follow-up — so credentialing doesn&apos;t delay your first paycheck.
              </p>
              <div style={{ background: T.lightBg, borderRadius: 10, padding: 20, borderLeft: `3px solid ${T.teal}`, marginBottom: 20 }}>
                <p style={{ fontSize: 13, color: T.body, lineHeight: 1.6 }}>
                  <strong style={{ color: T.navy }}>Taxonomy code 207V00000X</strong> is the correct OB/GYN specialty designation for all payer enrollment applications. Using the wrong taxonomy code during CAQH setup causes enrollment rejections that can add 30+ days to your launch timeline.
                </p>
              </div>
              <p style={{ fontSize: 14, color: T.body, lineHeight: 1.7 }}>
                We manage enrollment for: Medicare (PECOS), Medicaid, BCBS, Aetna, UnitedHealthcare, Cigna, Humana, Tricare, and all major regional commercial payers in your area.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: T.navy, marginBottom: 20 }}>Enrollment Timelines by Payer</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { payer: 'NPI Registration (NPPES)', days: '1–3 days', color: T.success },
                  { payer: 'CAQH Profile Completion', days: '3–5 days', color: T.success },
                  { payer: 'Medicare (PECOS)', days: '45–60 days', color: T.warning },
                  { payer: 'Medicaid', days: '30–90 days (state-specific)', color: T.warning },
                  { payer: 'BCBS', days: '30–60 days', color: T.warning },
                  { payer: 'Aetna', days: '30–45 days', color: T.accentBlue },
                  { payer: 'UnitedHealthcare', days: '45–90 days', color: T.warning },
                  { payer: 'Cigna', days: '30–60 days', color: T.accentBlue },
                  { payer: 'Humana', days: '30–45 days', color: T.accentBlue },
                ].map((p) => (
                  <div key={p.payer} style={{ background: T.lightBg, borderRadius: 8, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${T.border}` }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: T.navy }}>{p.payer}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: p.color, background: `${p.color}15`, padding: '2px 10px', borderRadius: 8 }}>{p.days}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: T.lightBg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy }}>Practice Setup Questions</h2>
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
            &ldquo;We tried to set up our billing in-house and lost almost three months of revenue waiting on payer credentialing we&apos;d done incorrectly. OBGYNBillingPro took over, fixed every application, set up provisional billing through my supervising physician, and we were collecting within the first week. I wish we&apos;d started with them.&rdquo;
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: T.tealLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: T.teal }}>A</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, color: T.navy, fontSize: 15 }}>Dr. Amara Diallo, MD</div>
              <div style={{ fontSize: 13, color: T.body }}>Sunrise Women&apos;s Health — Atlanta, GA — Solo Practice, Opened 2025</div>
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
              { label: 'OB/GYN Credentialing', href: '/credentialing' },
              { label: 'Revenue Cycle Management', href: '/revenue-cycle-management' },
              { label: 'Global Maternity Billing', href: '/global-maternity-billing' },
              { label: 'Coding Audits', href: '/coding-audits' },
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
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.white, marginBottom: 16 }}>Build Your Billing Foundation Right the First Time</h2>
          <p style={{ fontSize: 17, color: '#CBD5E0', lineHeight: 1.7, marginBottom: 36 }}>
            Get a free practice setup consultation. We&apos;ll review your launch timeline, identify your payer enrollment priorities, and map out the exact steps to get your OB/GYN practice billing-operational in 30 days.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.teal, color: T.white, padding: '16px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Free Practice Setup Consultation →
            </a>
            <a href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: T.white, padding: '16px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Calculate Revenue Potential
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
