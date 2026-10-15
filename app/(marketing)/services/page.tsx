import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { abs } from "@/lib/site";
import { imgUrl } from "@/lib/images";
import { Container, PageHero, SectionHeading, ServiceCard, Faqs, CtaBand, JsonLd } from "../../components/ui";
import MdBody from "../../components/MdBody";

export const metadata: Metadata = {
  title: { absolute: "OB/GYN Billing Services | Full RCM, Coding, Denials & More" },
  description: "All OB/GYN medical billing services: global maternity billing, GYN surgery coding, denial management, RCM, credentialing, coding audits, telehealth, REI and more.",
  alternates: { canonical: abs("/services") },
  openGraph: { title: "OB/GYN Billing Services | OBGYNBillingPro", description: "Full-service OB/GYN revenue cycle management or individual services.", url: abs("/services"), images: [{ url: imgUrl("analytics", 1200), width: 1200, height: 800 }] },
};

const FAQS = [
  { q: "Can we use just one of your services?", a: "Yes. Many practices start with a single service — a coding audit, denial cleanup or credentialing — and keep the rest in-house. You can add services at any time." },
  { q: "What's the difference between RCM and medical billing?", a: "Medical billing usually refers to creating and submitting claims and following up on payment. Revenue cycle management covers the whole process, from scheduling and eligibility through coding, claims, payment posting, denials, A/R and patient collections — plus reporting." },
  { q: "Do you bill for specialties other than OB/GYN?", a: "Yes. OB/GYN is our focus, but we also support cardiology, internal medicine, family practice and other specialties, including multi-specialty groups." },
  { q: "How do we know which service we need?", a: "Start with the free audit. We'll review your claims, denials and A/R and recommend what would help most — even if it's something small you can fix yourselves." },
  { q: "Do you work inside our existing EHR?", a: "Yes. We work inside the systems OB/GYN practices commonly use, including athenahealth, eClinicalWorks, NextGen, AdvancedMD, Tebra, DrChrono and ModMed." },
  { q: "Is there a setup fee or long contract?", a: "No setup fees and no long-term lock-in. We quote after the free audit based on your volume and the services you choose." },
];

export default function ServicesPage() {
  const groups = [
    { title: "Core OB/GYN billing & coding", items: SERVICES.filter((s) => s.group === "core") },
    { title: "Practice operations", items: SERVICES.filter((s) => s.group === "operations") },
    { title: "Specialty billing", items: SERVICES.filter((s) => s.group === "specialty" || s.group === "other") },
  ];
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="OB/GYN medical billing services"
        lead="Everything an independent OB/GYN practice needs to get paid accurately and on time — available as complete revenue cycle management or as individual services alongside your in-house team."
        image="analytics"
        crumbs={[{ name: "Services", href: "/services" }]}
        waMessage="Hi! I'd like to know which of your OB/GYN billing services fits our practice."
      />
      {groups.map((g, i) => (
        <section key={g.title} className={i % 2 ? "bg-mist py-16" : "py-16"}>
          <Container>
            <SectionHeading title={g.title} />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((s) => <ServiceCard key={s.slug} s={s} />)}
            </div>
          </Container>
        </section>
      ))}
      <Container className="max-w-4xl py-16"><MdBody slug="services" message="Hi! I'd like help choosing the right OB/GYN billing service." /></Container>
      <section className="border-t border-line py-16"><Container className="max-w-4xl"><Faqs faqs={FAQS} title="Services FAQs" /></Container></section>
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "OB/GYN billing services",
          itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: abs(`/${s.slug}`) })),
        }}
      />
    </>
  );
}
