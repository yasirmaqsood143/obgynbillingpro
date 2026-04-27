'use client';

import { useEffect, useRef, useState } from 'react';

const T = {
  teal: '#0E7C7B', tealDark: '#065F5E', tealLight: '#E0F4F4',
  navy: '#1A2B3C', navyAlt: '#2B2D42', body: '#4A5568',
  lightBg: '#F7FAFC', success: '#276749', terracotta: '#E2725B',
  warning: '#D97706', accentBlue: '#2B6CB0', border: '#E2E8F0', white: '#FFFFFF',
};

function useCounter(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

function AnimatedStat({ value, label, prefix = '', suffix = '', duration = 2000 }: { value: number; label: string; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCounter(value, duration, started);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const display = value < 10 ? count.toFixed(1) : count.toString();
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, color: T.white, lineHeight: 1 }}>
        {prefix}{display}{suffix}
      </div>
      <div style={{ fontSize: 14, color: T.tealLight, marginTop: 10, fontWeight: 500 }}>{label}</div>
    </div>
  );
}

const caseStudies = [
  {
    title: 'Solo OB/GYN Practice — Houston, TX',
    tag: 'Case Study 1',
    tagColor: T.teal,
    subtitle: 'Collections up 34% in 90 days',
    description: 'A solo OB/GYN with 8 years in practice was collecting $78,000/month against $145,000 in monthly gross charges — a Net Collection Rate of just 53.8%. After transition to OBGYNBillingPro:',
    before: [
      { metric: 'Monthly Collections', value: '$78,000' },
      { metric: 'Net Collection Rate', value: '53.8%' },
      { metric: 'Denial Rate', value: '24.3%' },
      { metric: 'AR Days', value: '62 days' },
      { metric: 'First-Pass Rate', value: '71%' },
    ],
    after: [
      { metric: 'Monthly Collections', value: '$104,500' },
      { metric: 'Net Collection Rate', value: '94.2%' },
      { metric: 'Denial Rate', value: '4.1%' },
      { metric: 'AR Days', value: '19 days' },
      { metric: 'First-Pass Rate', value: '97.8%' },
    ],
    improvement: '+34%',
    improvementLabel: 'Collections Increase',
    timeline: '90 days',
    rootCauses: ['No modifier 59 on surgical procedure pairs', 'Postpartum visit (59430) never billed as standalone', 'E/M levels 3 grades below documentation support', 'No global period tracking — 22% mid-pregnancy insurance change errors'],
  },
  {
    title: '4-Physician OB/GYN Group — Atlanta, GA',
    tag: 'Case Study 2',
    tagColor: T.accentBlue,
    subtitle: 'Denial rate slashed from 22% to 4.8%',
    description: 'A 4-physician group practice was experiencing a 22% claim denial rate and spending $11,400/month in staff time working denials. The practice had 3 in-house billers with no OB/GYN specialty training.',
    before: [
      { metric: 'Monthly Denial Rate', value: '22%' },
      { metric: 'Monthly Denial Rework Cost', value: '$11,400' },
      { metric: 'In-House Billing Cost', value: '$18,750/mo' },
      { metric: 'AR Days', value: '71 days' },
      { metric: 'Annual Revenue Lost to Denials', value: '$287,000' },
    ],
    after: [
      { metric: 'Monthly Denial Rate', value: '4.8%' },
      { metric: 'Monthly Denial Rework Cost', value: '$2,100' },
      { metric: 'Outsourced Billing Cost', value: '$7,200/mo' },
      { metric: 'AR Days', value: '22 days' },
      { metric: 'Annual Revenue Lost to Denials', value: '$61,000' },
    ],
    improvement: '78%',
    improvementLabel: 'Denial Rate Reduction',
    timeline: '60 days',
    rootCauses: ['CO-97 denials from modifier errors on laparoscopic procedures', 'Global maternity bundling errors during mid-pregnancy insurance transitions', 'No payer-specific modifier library', 'Zero denial appeal workflow — denials aging past timely filing'],
  },
  {
    title: 'Multi-Location Women\'s Health Group — Dallas, TX',
    tag: 'Case Study 3',
    tagColor: T.success,
    subtitle: '$280K recovered in underbilled procedures',
    description: 'A 3-location women\'s health group with 6 OB/GYN physicians had never conducted a coding audit. A retrospective audit of 18 months of claims identified $280,000 in underbilled services that could be recovered through corrected billing and appeals.',
    before: [
      { metric: 'Modifier 22 Usage', value: '0 claims' },
      { metric: '59430 Standalone Billings', value: '3/month' },
      { metric: 'Average E/M Level', value: '99213 (low)' },
      { metric: 'IUD J-Code Capture Rate', value: '41%' },
      { metric: 'Coding Audit History', value: 'Never' },
    ],
    after: [
      { metric: 'Modifier 22 Usage', value: '14 claims/month' },
      { metric: '59430 Standalone Billings', value: '31/month' },
      { metric: 'Average E/M Level', value: '99214 (appropriate)' },
      { metric: 'IUD J-Code Capture Rate', value: '99%' },
      { metric: 'Annual Revenue Impact', value: '+$280K recovered' },
    ],
    improvement: '$280K',
    improvementLabel: 'Revenue Recovered',
    timeline: '12-month period',
    rootCauses: ['Modifier 22 never used despite complex surgical cases', 'J-codes for IUD/Nexplanon dropped from claims at 59% rate', 'E/M undercoding — documentation supported 99214 in 78% of 99213 visits', '59430 postpartum code treated as included in global despite separate insurance'],
  },
];

const testimonials = [
  {
    quote: 'We went from a 22% denial rate to under 5% in two months. I didn\'t realize how much money we were losing until they showed us the actual numbers.',
    name: 'Dr. Priya Sharma, MD',
    practice: 'Atlanta Women\'s OB/GYN — 4-Physician Group',
    initial: 'P',
  },
  {
    quote: 'The coding audit found $180,000 in underbilled procedures in a single year. We\'d never even had an audit before. That was a wake-up call.',
    name: 'Dr. Marcus Webb, MD',
    practice: 'Dallas Women\'s Health Centers — Multi-Location',
    initial: 'M',
  },
  {
    quote: 'My collections went up 34% in 90 days without seeing a single additional patient. It was all recovered revenue that was already owed to me.',
    name: 'Dr. Fatima Osei, MD',
    practice: 'Houston OB/GYN Solo Practice',
    initial: 'F',
  },
  {
    quote: 'The 2027 maternity billing transition prep alone was worth the entire year\'s contract. They caught us before we would have been scrambling.',
    name: 'Dr. Elena Vasquez, MD',
    practice: 'Women\'s Wellness Partners — Chicago, IL',
    initial: 'E',
  },
];

export default function ResultsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'OBGYNBillingPro — Client Results',
            description: 'Real results for OB/GYN practices — case studies showing collections increases, denial rate reductions, and recovered revenue.',
            url: 'https://obgynbillingpro.com/results',
            telephone: process.env.NEXT_PUBLIC_PHONE,
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(14,124,123,0.2)', border: '1px solid rgba(14,124,123,0.4)', borderRadius: 20, padding: '6px 14px', marginBottom: 24 }}>
            <span style={{ color: T.tealLight, fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Verified Practice Results — Not Projections</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: T.white, lineHeight: 1.2, maxWidth: 700, marginBottom: 20 }}>
            Real Results for Real OB/GYN Practices
          </h1>
          <p style={{ fontSize: 18, color: '#CBD5E0', lineHeight: 1.7, maxWidth: 620, marginBottom: 36 }}>
            Not estimates. Not projections. These are real collection improvements, denial rate reductions, and recovered revenue from actual OB/GYN practices that switched to OBGYNBillingPro.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.teal, color: T.white, padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Get Similar Results →
            </a>
            <a href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: T.white, padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
              Calculate Your Leakage
            </a>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section style={{ background: `linear-gradient(135deg, ${T.teal} 0%, ${T.tealDark} 100%)`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48 }}>
          <AnimatedStat value={98} suffix=".2%" label="First-Pass Claim Rate" duration={2000} />
          <AnimatedStat value={4.2} prefix="$" suffix="M" label="Revenue Recovered for Clients" duration={2500} />
          <AnimatedStat value={200} suffix="+" label="OB/GYN Practices Served" duration={1800} />
          <AnimatedStat value={26} suffix="%" label="Average Denial Rate Reduction" duration={1600} />
        </div>
      </section>

      {/* Trust badges */}
      <section style={{ background: T.navy, padding: '14px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 28 }}>
          {['HIPAA Compliant', 'BAA Available', 'SOC 2 Type II (Phase 3)', 'AAPC Certified', 'AHIMA Credentialed', 'MGMA Member'].map((b) => (
            <span key={b} style={{ fontSize: 12, color: '#90CDF4', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>✓ {b}</span>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ background: T.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Case Studies</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy, marginBottom: 16 }}>Three Practices. Three Transformations.</h2>
            <p style={{ fontSize: 16, color: T.body, maxWidth: 560, margin: '0 auto' }}>Before and after metrics from real OB/GYN practices across practice sizes and geographies.</p>
          </div>

          {caseStudies.map((cs, idx) => (
            <div key={cs.title} style={{ marginBottom: 64, background: T.lightBg, borderRadius: 16, overflow: 'hidden', border: `1px solid ${T.border}` }}>
              {/* Case study header */}
              <div style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '32px 40px', display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: T.tealLight, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>{cs.tag}</span>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: T.white, marginBottom: 6 }}>{cs.title}</h3>
                  <p style={{ fontSize: 16, color: T.tealLight, fontWeight: 500 }}>{cs.subtitle}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 48, fontWeight: 700, color: T.tealLight }}>{cs.improvement}</div>
                  <div style={{ fontSize: 13, color: '#90CDF4' }}>{cs.improvementLabel}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>in {cs.timeline}</div>
                </div>
              </div>

              <div style={{ padding: '32px 40px' }}>
                <p style={{ fontSize: 15, color: T.body, lineHeight: 1.7, marginBottom: 32 }}>{cs.description}</p>

                {/* Before / After grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
                  {/* Before */}
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#E53E3E', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#E53E3E', display: 'block' }} />
                      Before
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {cs.before.map((item) => (
                        <div key={item.metric} style={{ background: '#FEF2F2', borderRadius: 8, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: 13, color: '#742A2A' }}>{item.metric}</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: '#E53E3E' }}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* After */}
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: T.success, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: T.success, display: 'block' }} />
                      After OBGYNBillingPro
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {cs.after.map((item) => (
                        <div key={item.metric} style={{ background: '#F0FFF4', borderRadius: 8, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: 13, color: '#276749' }}>{item.metric}</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: T.success }}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Root causes */}
                <div style={{ background: T.white, borderRadius: 10, padding: 20, border: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: T.body, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>Root Causes We Found & Fixed</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cs.rootCauses.map((cause) => (
                      <span key={cause} style={{ fontSize: 12, color: T.teal, background: T.tealLight, padding: '4px 10px', borderRadius: 8 }}>{cause}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: T.lightBg, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-block', background: T.tealLight, color: T.teal, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>Testimonials</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.navy }}>What OB/GYN Physicians Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{ background: T.white, borderRadius: 14, padding: 28, border: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#F6AD55', fontSize: 16 }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: 15, color: T.navy, lineHeight: 1.7, fontStyle: 'italic', flex: 1 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: T.tealLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: T.teal, flexShrink: 0 }}>{t.initial}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: T.navy }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: T.body }}>{t.practice}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Teaser */}
      <section style={{ background: `linear-gradient(135deg, ${T.teal} 0%, ${T.tealDark} 100%)`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.tealLight, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Free Tool</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: T.white, marginBottom: 16 }}>Calculate Your Own Revenue Recovery</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 24 }}>
              Our free Revenue Leakage Calculator takes 3 minutes and shows you exactly how much your practice is leaving on the table — in dollars, not percentages.
            </p>
            <a href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.white, color: T.teal, padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', letterSpacing: '0.03em' }}>
              Use Free Calculator →
            </a>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: 28, border: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: T.tealLight, marginBottom: 16 }}>What the calculator measures:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Net Collection Rate (NCR)', 'Annual Revenue Lost to Denials', 'In-House Billing Overhead', 'Missed Modifier Revenue', 'Timely Filing Risk Exposure', 'Total Net Recovery Opportunity'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.9)' }}>
                  <span style={{ color: T.tealLight, fontWeight: 700 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyAlt} 100%)`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: T.white, marginBottom: 16 }}>Get Similar Results for Your Practice</h2>
          <p style={{ fontSize: 17, color: '#CBD5E0', lineHeight: 1.7, marginBottom: 36 }}>
            Schedule a free revenue audit. We&apos;ll review your last 90 days of claims, identify your specific revenue leakage sources, and show you what recovery looks like for your practice size and payer mix.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.teal, color: T.white, padding: '16px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Get Free Revenue Audit →</a>
            <a href="/calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: T.white, padding: '16px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Free Revenue Calculator</a>
          </div>
          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
            {['HIPAA Compliant', 'BAA Available', 'No Obligation', 'Month-to-Month'].map((b) => (
              <span key={b} style={{ fontSize: 12, color: T.tealLight, fontWeight: 600 }}>✓ {b}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
