import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { STATES, REGIONS } from "@/lib/areas";
import { abs, SITE } from "@/lib/site";
import { imgUrl } from "@/lib/images";
import { Container, PageHero, SectionHeading, Faqs, CtaBand, JsonLd, Photo } from "../../components/ui";
import MdBody from "../../components/MdBody";

export const metadata: Metadata = {
  title: { absolute: "Areas We Serve | OB/GYN Billing Services in All 50 States" },
  description: "OB/GYN medical billing for independent practices nationwide — Texas, New Jersey, New York, Florida, California and every other state. State Medicaid and payer expertise.",
  alternates: { canonical: abs("/areas-we-serve") },
  openGraph: { title: "Areas We Serve | OBGYNBillingPro", description: "OB/GYN billing services in all 50 states.", url: abs("/areas-we-serve"), images: [{ url: imgUrl("city", 1200), width: 1200, height: 800 }] },
};

const FAQS = [
  { q: "Do you work with OB/GYN practices outside your home state?", a: "Yes. We work remotely inside your practice management and EHR systems, so we serve independent practices in all 50 states and Washington, D.C." },
  { q: "Do you know my state's Medicaid rules?", a: "We research each state's Medicaid program, managed care plans and major commercial payers before onboarding a practice there, and we maintain payer-specific rules for the plans our clients bill." },
  { q: "Can you handle practices that operate in more than one state?", a: "Yes. Multi-state practices need separate Medicaid enrollment and often separate payer contracts in each state. We manage billing and credentialing across state lines." },
  { q: "Will we ever meet in person?", a: "Most of our work happens through your systems, WhatsApp, email and video calls — which keeps costs down and responses fast. We schedule regular review calls at a time that works for your practice." },
  { q: "Do you handle Medicaid managed care plans?", a: "Yes. Medicaid managed care is a major part of obstetric billing in most states, and we work with each plan's rules, portals and appeal processes." },
];

export default function AreasPage() {
  const featured = STATES.filter((s) => s.featured);
  return (
    <>
      <PageHero
        eyebrow="Areas we serve"
        title="OB/GYN billing services for practices in all 50 states"
        lead="We work remotely inside your systems, so an independent OB/GYN practice anywhere in the U.S. gets the same specialized billing team — with research into your state's Medicaid program and commercial payers before we start."
        image="city"
        crumbs={[{ name: "Areas We Serve", href: "/areas-we-serve" }]}
        waMessage="Hi! I'd like a free OB/GYN billing audit for my practice."
      />

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="Featured states" title="Where many of our OB/GYN clients practice" lead="We serve practices nationwide. These are some of the states and metro areas where we most often work." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <div key={s.abbr} className="rounded-2xl border border-line bg-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-navy">OB/GYN billing in {s.name}</h3>
                  <span className="font-mono text-sm text-teal">{s.abbr}</span>
                </div>
                <p className="mt-2 text-sm text-ink"><span className="font-semibold text-navy">Medicaid:</span> {s.medicaid}</p>
                <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-ink">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {s.cities?.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16">
        <Container>
          <SectionHeading eyebrow="Nationwide" title="All states we serve, by region" />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {REGIONS.map((r) => (
              <div key={r}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-teal-dark">{r}</h3>
                <ul className="mt-3 space-y-1.5 text-[15px] text-navy">
                  {STATES.filter((s) => s.region === r).map((s) => <li key={s.abbr}>{s.name}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:py-20">
        <article className="min-w-0"><MdBody slug="areas-we-serve" /></article>
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <Photo k="usFlag" className="aspect-[4/3] rounded-2xl" sizes="340px" />
          <div className="rounded-2xl border border-line p-6">
            <p className="text-lg font-bold text-navy">Wherever you practice</p>
            <p className="mt-2 text-sm leading-relaxed text-ink">{SITE.experience} of OB/GYN billing experience, applied to your state&apos;s payers. Start with a free audit.</p>
          </div>
        </aside>
      </Container>

      <section className="border-t border-line py-16"><Container className="max-w-4xl"><Faqs faqs={FAQS} title="Areas we serve FAQs" /></Container></section>
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "OB/GYN medical billing services",
          provider: { "@id": `${SITE.url}/#organization` },
          areaServed: STATES.map((s) => ({ "@type": "State", name: s.name })),
          url: abs("/areas-we-serve"),
        }}
      />
    </>
  );
}
