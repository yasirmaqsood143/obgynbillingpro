import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Baby, Scissors, FileSearch, ShieldCheck, Users, CalendarClock, ClipboardCheck, MessageCircle, LineChart, Handshake, CircleCheck, TriangleAlert } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { getPosts } from "@/lib/blog";
import { getDoc } from "@/lib/content";
import { abs } from "@/lib/site";
import { imgUrl } from "@/lib/images";
import { Container, SectionHeading, WaButton, Photo, ServiceCard, PostCard, Faqs, CtaBand, Prose, LinkButton } from "./components/ui";
import { STATES } from "@/lib/areas";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: { absolute: "OB/GYN Medical Billing Services & RCM Company | OBGYNBillingPro" },
  description:
    "OB/GYN medical billing services for independent practices: global maternity billing, GYN surgery coding, denial management and full RCM. 8+ years of experience. Free audit on WhatsApp.",
  alternates: { canonical: abs("/") },
  openGraph: {
    title: "OB/GYN Medical Billing Services | OBGYNBillingPro",
    description: "Specialized OB/GYN billing, coding and revenue cycle management. Free billing audit — no forms, just WhatsApp.",
    url: abs("/"),
    images: [{ url: imgUrl("doctorPatient", 1200), width: 1200, height: 800, alt: "OB/GYN physician with a patient" }],
  },
};

const PROBLEMS = [
  { icon: Baby, title: "Global OB packages", text: "Antepartum visits not tracked, insurance changes mid-pregnancy, VBAC and twins billed wrong — and claims held until long after delivery." },
  { icon: Scissors, title: "Surgical undercoding", text: "Hysterectomies billed before the path report, missing adnexal codes, and modifiers that don't match the op note." },
  { icon: FileSearch, title: "Repeat denials", text: "CO-97, CO-4, CO-16 and CO-197 resubmitted instead of fixed at the source — so they come back every month." },
  { icon: ShieldCheck, title: "Front-end errors", text: "Inactive coverage, wrong primary payer and missing authorizations that no amount of coding can fix later." },
  { icon: Users, title: "Credentialing gaps", text: "New providers seeing patients before they're effective with the plans you bill — revenue that's hard to recover." },
  { icon: CalendarClock, title: "The 2027 code change", text: "The global maternity package ends January 1, 2027. Charge capture, documentation and contracts all need to change." },
];

const STEPS = [
  { icon: MessageCircle, title: "Message us on WhatsApp", text: "No forms. Tell us a little about your practice and we'll set up read-only access to a sample of claims, remits and A/R." },
  { icon: FileSearch, title: "Get your free audit", text: "Within days you'll get a written summary: denial patterns, coding issues, unbilled services and A/R at risk. It's yours to keep." },
  { icon: Handshake, title: "Onboard without disruption", text: "If you choose to work with us, we sign a BAA, work inside your existing EHR/PM system and keep old A/R moving during cutover." },
  { icon: LineChart, title: "Billing + monthly reporting", text: "Clean claims daily, every denial worked, and a monthly report on collections, A/R, denial reasons and open pregnancies." },
];

const WHY = [
  "8+ years of hands-on OB/GYN billing and coding experience",
  "OB/GYN is our focus — global maternity, GYN surgery, REI and urogynecology",
  "Every claim coded from the documentation, by people — not guesswork",
  "Every denial worked and tracked to its root cause",
  "We work in your EHR: athenahealth, eClinicalWorks, NextGen, AdvancedMD, Tebra and more",
  "BAA signed before we touch any patient data",
  "No setup fees and no long-term lock-in",
  "Honest reporting — we don't promise numbers before we've seen your data",
];

const FAQS = [
  { q: "What does an OB/GYN medical billing company do?", a: "An OB/GYN billing company manages the process of getting paid for women's health care: verifying insurance, obtaining authorizations, coding obstetric and gynecologic services, submitting claims, posting payments, working denials, following up on unpaid claims and billing patients. Specialized companies also handle global maternity package rules and gynecologic surgery coding." },
  { q: "How is the free billing audit done?", a: "Send us a WhatsApp message — there's no form. We'll ask a few questions and arrange read-only access to a sample of your recent claims, remittances and A/R. You'll receive a written summary of what we find, and you're free to use it whether or not you hire us." },
  { q: "How much does OB/GYN billing cost?", a: "Most practices choose a percentage of collections, so we're paid when you're paid. Flat monthly pricing is also available. We quote after the free audit, once we understand your volume and payer mix, and we don't charge setup fees." },
  { q: "Do you only work with OB/GYN practices?", a: "OB/GYN and women's health are our focus. We also support cardiology, internal medicine, family practice and other specialties, including multi-specialty groups that include OB/GYN providers." },
  { q: "Which EHR and practice management systems do you work in?", a: "We work inside the systems OB/GYN practices commonly use, including athenahealth, eClinicalWorks, NextGen Healthcare, AdvancedMD, Tebra (Kareo), DrChrono and ModMed. You don't need to change software." },
  { q: "Are you HIPAA compliant?", a: "Yes. We sign a Business Associate Agreement before accessing any protected health information, use individual user accounts in your systems, follow the minimum-necessary standard and never send patient information over WhatsApp." },
  { q: "How are you preparing practices for the 2027 maternity code changes?", a: "We're inventorying pregnancies that will span January 1, 2027, rebuilding charge capture for per-visit prenatal billing and the new labor and delivery codes, reviewing payer contracts that reference global OB rates, and training staff. Our 2027 transition guide explains the changes." },
];

export default function Home() {
  const posts = getPosts().slice(0, 3);
  const home = getDoc("pages", "home");
  const obgyn = SERVICES.filter((s) => s.group !== "other");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-25 grid-bg" aria-hidden="true" />
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-teal/30 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-light">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" /> OB/GYN billing specialists · 8+ years
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              OB/GYN medical billing services that get you paid for <span className="font-display italic text-teal-light">every</span> part of the care you give.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Global maternity packages, gynecologic surgery, denials, credentialing and the 2027 maternity code transition — handled by a billing team that works with OB/GYN practices every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WaButton size="btn-lg" />
              <Link href="/calculator" className="btn btn-ghost-light btn-lg">
                Estimate Revenue Leakage <ArrowRight strokeWidth={2.25} />
              </Link>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
              {["Free audit — no forms, no obligation", "BAA signed before any data access", "Works inside your current EHR", "No setup fees · no long-term lock-in"].map((t) => (
                <li key={t} className="flex items-center gap-2"><CircleCheck className="h-4 w-4 shrink-0 text-teal-light" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Photo k="doctorPatient" priority className="aspect-[4/5] rounded-3xl ring-1 ring-white/10 sm:aspect-[4/3] lg:aspect-[4/5]" />
            <div className="absolute -bottom-6 -left-4 hidden w-64 rounded-2xl bg-white p-4 shadow-2xl sm:block lg:-left-10">
              <div className="flex items-center gap-3">
                <Photo k="pregnantUltrasound" className="h-14 w-14 shrink-0 rounded-xl" sizes="56px" />
                <div>
                  <p className="text-sm font-bold text-navy">Every pregnancy tracked</p>
                  <p className="text-xs text-ink">First visit to postpartum check</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problems */}
      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Where revenue leaks" title="Where OB/GYN practices lose revenue — and how we stop it" lead="OB/GYN billing is harder than most specialties because three billing models run at once: months-long obstetric care, high-value surgery and office gynecology. These are the gaps we see most often in more than eight years of OB/GYN billing." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-light text-teal"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-mist py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Services" title="Complete OB/GYN billing & revenue cycle services" lead="Choose full-service revenue cycle management, or just the pieces your team needs help with." />
            <LinkButton href="/services" label="All services" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {obgyn.slice(0, 9).map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
          <p className="mt-8 text-center text-ink">
            Also: <Link href="/telehealth-billing" className="font-semibold text-teal hover:underline">telehealth billing</Link>,{" "}
            <Link href="/infertility-rei-billing" className="font-semibold text-teal hover:underline">infertility & REI billing</Link>,{" "}
            <Link href="/urogynecology-billing" className="font-semibold text-teal hover:underline">urogynecology billing</Link> and{" "}
            <Link href="/multi-specialty-billing" className="font-semibold text-teal hover:underline">cardiology & other specialties</Link>.
          </p>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <Photo k="femaleDoctorDesk" className="aspect-[4/3] rounded-3xl" />
            <div className="absolute -bottom-6 right-6 rounded-2xl bg-teal p-5 text-white shadow-xl">
              <p className="text-3xl font-bold">8+ years</p>
              <p className="text-sm text-white/85">of OB/GYN billing experience</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Why OBGYNBillingPro" title="A billing partner that knows women's health" lead="We don't use inflated statistics or badges we haven't earned. Here's what we actually offer:" />
            <ul className="mt-8 grid gap-3">
              {WHY.map((w) => (
                <li key={w} className="flex gap-3 text-[16px] leading-relaxed text-navy">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-olive" /> {w}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <WaButton />
              <LinkButton href="/about" label="About us" />
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-navy py-20">
        <Container>
          <SectionHeading light center eyebrow="How it works" title="From first message to clean claims" lead="Starting is simple — and the free audit comes first, so you see the value before you commit to anything." />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal text-white"><Icon className="h-5 w-5" /></span>
                  <span className="font-mono text-sm text-white/40">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-white/75">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center"><WaButton size="btn-lg" label="Start Your Free Audit" /></div>
        </Container>
      </section>

      {/* 2027 alert */}
      <section className="border-b border-line bg-sand">
        <Container className="flex flex-col items-start gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <TriangleAlert className="mt-1 h-7 w-7 shrink-0 text-amber" />
            <div>
              <p className="text-lg font-bold text-navy">The global maternity package ends January 1, 2027.</p>
              <p className="mt-1 max-w-2xl text-ink">CPT 2027 deletes <span className="code-chip">59400</span>, <span className="code-chip">59510</span> and related codes. Prenatal and postpartum visits move to E/M, with new labor management and delivery codes.</p>
            </div>
          </div>
          <LinkButton href="/resources/2027-maternity-transition" label="Read the 2027 guide" variant="btn-primary" />
        </Container>
      </section>

      {/* Long-form */}
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0">
            <p className="eyebrow">A guide for practice owners</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Choosing OB/GYN medical billing services</h2>
            <div className="mt-10">{home && <Prose html={home.rendered.chunks.join("")} />}</div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Photo k="billingLaptop" className="aspect-[4/3] rounded-2xl" sizes="340px" />
            <div className="rounded-2xl border border-line p-6">
              <ClipboardCheck className="h-7 w-7 text-teal" />
              <p className="mt-3 text-lg font-bold text-navy">Free OB/GYN billing audit</p>
              <p className="mt-2 text-sm leading-relaxed text-ink">A written review of your denials, coding and A/R — no form, no contract, no cost.</p>
              <WaButton size="btn-sm" label="Start on WhatsApp" className="mt-4 w-full" />
            </div>
          </aside>
        </Container>
      </section>

      {/* Areas */}
      <section className="bg-mist py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading eyebrow="Areas we serve" title="OB/GYN billing for practices in all 50 states" lead="We work remotely inside your systems, so location is never a barrier. We know the Medicaid programs and major commercial payers in every region." />
          <div>
            <div className="flex flex-wrap gap-2">
              {STATES.filter((s) => s.featured).map((s) => (
                <span key={s.name} className="rounded-full border border-line bg-white px-3 py-1.5 text-sm text-navy">{s.name}</span>
              ))}
              <span className="rounded-full bg-teal-light px-3 py-1.5 text-sm font-semibold text-teal-dark">+ every other state</span>
            </div>
            <div className="mt-6"><LinkButton href="/areas-we-serve" label="See areas we serve" /></div>
          </div>
        </Container>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section className="py-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="Knowledge hub" title="Latest OB/GYN billing & coding guides" lead="Practical articles on CPT and ICD-10 coding, denials, payer rules and the 2027 maternity transition — new posts every week." />
              <LinkButton href="/blog" label="All articles" />
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {posts.map((p) => <PostCard key={p.slug} p={p} />)}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-line bg-white py-20">
        <Container className="max-w-4xl">
          <Faqs faqs={FAQS} title="OB/GYN billing FAQs" />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
