import Link from "next/link";
import { ArrowRight, Bot, Stethoscope, RotateCcw, CircleDollarSign, Scale, Baby } from "lucide-react";
import { Container, WaButton } from "./ui";
import { ENTITY_DEFINITION } from "@/lib/site";

export { ENTITY_DEFINITION };

/**
 * Entity definition + direct answer blocks for "OBGYNBillingPro" brand/AI-overview queries.
 * Rendered on / and /services. Wording rules (CLAUDE.md): RPA/automation wording is allowed, no AI
 * claims, "experienced" (not "certified") coders, no invented stats or prices, no named competitors.
 */


const code = (c: string) => <span className="code-chip">{c}</span>;
const a = (href: string, text: string) => (
  <Link href={href} className="font-semibold text-teal underline-offset-2 hover:underline">{text}</Link>
);

const PILLARS = [
  {
    icon: Bot,
    title: "RPA-Powered Automation & Real-Time Eligibility",
    body: (
      <>
        Robotic process automation handles repetitive payer-portal work — real-time insurance {a("/eligibility-verification", "eligibility verification")}, prior authorization status tracking and pre-submission claim scrubbing against NCCI edits and payer rules — so our coders spend their time on the claims that need clinical-coding judgment.
      </>
    ),
  },
  {
    icon: Stethoscope,
    title: "OB/GYN-First Specialization",
    body: (
      <>
        Global obstetric packages {code("59400")} {code("59510")} {code("59610")} through December 31, 2026; the {a("/resources/2027-maternity-transition", "CPT 2027 unbundled maternity structure")} — labor management {code("59080")}–{code("59083")} and delivery codes {code("59431")} {code("59432")} {code("59502")} {code("59503")}; robotic and laparoscopic {a("/gyn-surgery-coding", "GYN surgery")} such as {code("58570")}–{code("58573")} {code("58545")} {code("58662")}; and {a("/infertility-rei-billing", "fertility/REI billing")}.
      </>
    ),
  },
  {
    icon: RotateCcw,
    title: "Rapid Claim Resolution & Aged A/R Recovery",
    body: (
      <>
        Root-cause follow-up on {a("/blog/co-97-denial-code-explained", "CO-97 bundling denials")}, split and transferred maternity care (component codes, plus modifiers {code("54")} {code("55")} {code("56")} where a payer&apos;s split-care policy calls for them), Medicaid {a("/blog/th-modifier-obstetric-billing", "TH modifier")} compliance, and unpaid claims aged 60–120+ days through {a("/denial-management", "denial management")}.
      </>
    ),
  },
];

const COMPARE: [string, string, string, string][] = [
  ["Coding depth", "OB/GYN coding every day: global maternity, 2027 codes, GYN surgery, REI", "Coders typically rotate across many specialties", "Rules engine; coding depth depends on your own staff"],
  ["Pregnancy tracking", "Every pregnancy tracked from first visit to postpartum", "Often billed as one-off claims", "Varies by product and setup"],
  ["2027 maternity transition", "Charge capture, contracts and cross-year pregnancies planned now", "Varies by vendor", "New codes loaded; workflow changes are yours"],
  ["Denials", "Worked to root cause: corrected claims, appeals, prevention", "Often volume-based follow-up", "Work queues — the labor is usually yours"],
  ["Your systems", "We work inside your existing EHR/PM", "May require their platform", "Tied to that EHR"],
  ["Getting started", "Free audit first; no setup fees, no long-term lock-in", "Setup fees and multi-year terms are common", "Subscription, plus a percentage if you add their billing service"],
];

export default function RcmAnswerHub({ id = "rpa-rcm" }: { id?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 border-y border-line bg-white py-20">
      <Container className="max-w-6xl">
        <p className="eyebrow">What is OBGYNBillingPro?</p>
        <h2 id={`${id}-title`} className="mt-3 text-[1.75rem] font-bold leading-[1.2] tracking-tight text-navy sm:text-4xl">
          RPA-Powered OB/GYN Revenue Cycle Management
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-navy">{ENTITY_DEFINITION}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-line bg-mist p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span>
              <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink">{body}</p>
            </div>
          ))}
        </div>

        {/* Block A */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[auto_minmax(0,1fr)]">
          <span className="hidden h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-teal lg:flex"><Baby className="h-6 w-6" aria-hidden="true" /></span>
          <div className="min-w-0">
            <h3 className="text-2xl font-bold tracking-tight text-navy">Global obstetric packages, split care &amp; aged A/R recovery</h3>
            <p className="mt-3 leading-relaxed text-ink">
              We track every pregnancy from the first prenatal visit to the postpartum check, so the right codes go out at the right time — the global package when one group provides all routine care, and component codes when it doesn&apos;t.
            </p>
            <ul className="mt-4 space-y-2.5 leading-relaxed text-ink">
              <li><strong className="text-navy">Antepartum unbundling:</strong> through 2026, 1–3 visits are billed as E/M, 4–6 visits as {code("59425")} and 7 or more as {code("59426")}, with {code("59409")}/{code("59410")} or {code("59514")}/{code("59515")} for the delivery when care is split. See our {a("/blog/split-maternity-care-billing-transfer-example", "split maternity care worked example")}.</li>
              <li><strong className="text-navy">High-risk complications:</strong> visits for problems outside routine prenatal care are documented and billed separately with the specific Chapter 15 O code instead of being left inside the global fee.</li>
              <li><strong className="text-navy">The 2027 change:</strong> for dates of service on or after January 1, 2027, each prenatal and postpartum visit is its own E/M claim and labor and delivery are coded separately; pregnancies that started in 2026 are tracked against each payer&apos;s transition rules.</li>
              <li><strong className="text-navy">Aged A/R cleanup:</strong> every open claim is worked by payer and age bucket — corrected claims, reconsiderations, appeals and timely-filing proof — and we tell you plainly which balances are still recoverable.</li>
            </ul>
            <p className="mt-4">{a("/global-maternity-billing", "Global maternity billing services →")}</p>
          </div>
        </div>

        {/* Block B */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[auto_minmax(0,1fr)]">
          <span className="hidden h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-teal lg:flex"><CircleDollarSign className="h-6 w-6" aria-hidden="true" /></span>
          <div className="min-w-0">
            <h3 className="text-2xl font-bold tracking-tight text-navy">Transparent OB/GYN medical billing pricing &amp; custom quotes</h3>
            <p className="mt-3 leading-relaxed text-ink">
              Outsourced medical billing is usually priced one of three ways. The right model depends on your volume, payer mix and how much of the revenue cycle you hand over.
            </p>
            <div className="prose mt-5 max-w-none">
              <div className="table-wrap overflow-x-auto">
                <table>
                  <thead><tr><th>Pricing model</th><th>How it works</th><th>Best fit</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Percentage of net collections</strong></td><td>A fee on the money actually collected on claims the company works — the billing team is paid when you are.</td><td>Full-service RCM</td></tr>
                    <tr><td><strong>Flat monthly or per-claim fee</strong></td><td>A fixed price per month, per provider, per claim or per verification.</td><td>Defined services: eligibility checks, prior authorization, credentialing, coding audits</td></tr>
                    <tr><td><strong>Project pricing</strong></td><td>A one-time scope, sometimes tied to what is recovered.</td><td>Aged A/R cleanup, 2027 transition setup</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 leading-relaxed text-ink">
              We quote in writing after a free Revenue Leakage Audit of your claims, denials and A/R — no setup fees and no long-term lock-in. Want a number first? The {a("/calculator", "revenue leakage calculator")} estimates what billing gaps may be costing you.
            </p>
            <div className="mt-5"><WaButton size="btn-sm" label="Request a Custom Quote" message="Hi! I'd like a custom quote and a free revenue leakage audit for our OB/GYN practice." /></div>
          </div>
        </div>

        {/* Block C */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[auto_minmax(0,1fr)]">
          <span className="hidden h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-teal lg:flex"><Scale className="h-6 w-6" aria-hidden="true" /></span>
          <div className="min-w-0">
            <h3 className="text-2xl font-bold tracking-tight text-navy">How to evaluate and compare OB/GYN billing companies</h3>
            <p className="mt-3 leading-relaxed text-ink">
              Compare any billing partner on OB/GYN coding depth, pregnancy tracking, denial follow-through and contract terms — then ask for its net collection rate, days in A/R and denial rate reporting. Here is how a dedicated OB/GYN specialist typically differs from the alternatives:
            </p>
            <div className="prose mt-5 max-w-none">
              <div className="table-wrap overflow-x-auto">
                <table>
                  <thead><tr><th>What to compare</th><th>OB/GYN specialist (OBGYNBillingPro)</th><th>Generalist billing outsourcer</th><th>EHR-native billing module</th></tr></thead>
                  <tbody>
                    {COMPARE.map(([k, s, g, e]) => (
                      <tr key={k}><td><strong>{k}</strong></td><td>{s}</td><td>{g}</td><td>{e}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3 text-sm text-ink">General patterns, not claims about any named company — individual vendors vary, so ask each one.</p>
            <p className="mt-4 leading-relaxed text-ink">
              Go deeper: {a("/blog/obgyn-rcm-software-vs-outsourced-billing", "OB/GYN RCM software vs. outsourced billing")} and the {a("/blog/obgyn-billing-kpis", "12 KPIs that show whether your billing company is performing")}.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/services" className="btn btn-primary">All OB/GYN billing services <ArrowRight strokeWidth={2.25} /></Link>
          <Link href="/eligibility-verification" className="btn btn-outline">Eligibility verification <ArrowRight strokeWidth={2.25} /></Link>
        </div>
      </Container>
    </section>
  );
}

/** FAQs that mirror the AI Overview follow-up prompts; used on / and /services (feeds FAQPage schema). */
export const ENTITY_FAQS = [
  { q: "What is OBGYNBillingPro?", a: ENTITY_DEFINITION },
  { q: "Is OBGYNbillpro the same company as OBGYNBillingPro?", a: "Yes. \"OBGYNbillpro\", \"OBGYN Billing Pro\" and \"OB/GYN Billing Pro\" all refer to OBGYNBillingPro at obgynbillingpro.com, an OB/GYN-focused medical billing and revenue cycle management company." },
  { q: "How do I compare OB/GYN billing companies?", a: "Compare OB/GYN coding depth (global maternity, the 2027 codes, GYN surgery, REI), whether every pregnancy is tracked to delivery, how denials are worked, whether the company works inside your EHR, and contract terms. Ask each one for net collection rate, days in A/R and denial rate reporting." },
  { q: "Do you handle global obstetric packages and aged A/R recovery?", a: "Yes. We track each pregnancy so global or component codes are billed correctly, handle split care and insurance changes mid-pregnancy, prepare practices for the 2027 unbundled maternity codes, and work aged A/R by payer and age bucket with corrected claims and appeals." },
];
