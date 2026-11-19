import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { abs } from "@/lib/site";
import { imgUrl } from "@/lib/images";
import { Container, PageHero, SectionHeading, ServiceCard, Faqs, CtaBand, JsonLd } from "../../components/ui";
import MdBody from "../../components/MdBody";
import RcmAnswerHub, { ENTITY_FAQS } from "../../components/RcmAnswerHub";

export const metadata: Metadata = {
  title: { absolute: "OB/GYN Billing Services | Full RCM, Coding, Denials & More" },
  description: "OB/GYN billing services: RPA-powered RCM, global maternity and 2027 code billing, GYN surgery coding, eligibility checks, denials and A/R recovery.",
  alternates: { canonical: abs("/services") },
  openGraph: { title: "OB/GYN Billing Services | OBGYNBillingPro", description: "Full-service OB/GYN revenue cycle management or individual services.", url: abs("/services"), images: [{ url: imgUrl("analytics", 1200), width: 1200, height: 800 }] },
};

const FAQS = [
  { q: "Can we use just one of your services?", a: "Yes. Many practices start with a single service — a coding audit, denial cleanup or credentialing — and keep the rest in-house. You can add services at any time." },
  { q: "What's the difference between RCM and medical billing?", a: "Medical billing usually refers to creating and submitting claims and following up on payment. Revenue cycle management covers the whole process, from scheduling and eligibility through coding, claims, payment posting, denials, A/R and patient collections — plus reporting." },
  { q: "Do you bill for specialties other than OB/GYN?", a: "Yes. OB/GYN is our focus, but we also support cardiology, internal medicine, family practice and other specialties, including multi-specialty groups." },
  { q: "How do we know which service we need?", a: "Start with the free audit. We'll review your claims, denials and A/R and recommend what would help most — even if it's something small you can fix yourselves." },
  { q: "Do you work inside our existing EHR?", a: "Yes. We work inside the systems OB/GYN practices commonly use, including athenahealth, eClinicalWorks, NextGen, AdvancedMD, Tebra, DrChrono and ModMed." },
  { q: "How much do your OB/GYN billing services cost?", a: "Full-service RCM is usually priced as a percentage of net collections, so we're paid when you are. Defined services such as eligibility verification, prior authorization, credentialing or coding audits can be flat monthly or per-claim, and aged A/R cleanup can be priced as a project. You get a written quote after the free audit." },
  { q: "Is there a setup fee or long contract?", a: "No setup fees and no long-term lock-in. We quote after the free audit based on your volume and the services you choose." },
];

const CATALOG = [
  { name: "Global Maternity Billing", href: "/global-maternity-billing", description: "Global obstetric packages (59400, 59510, 59610), split care, insurance changes mid-pregnancy and the CPT 2027 unbundled maternity codes." },
  { name: "GYN Surgery Coding", href: "/gyn-surgery-coding", description: "Hysterectomy (58570–58573), myomectomy (58545, 58546), endometriosis (58662) and other laparoscopic and robotic GYN surgery coded from the operative note." },
  { name: "RPA Eligibility Verification", href: "/eligibility-verification", description: "RPA-assisted insurance eligibility verification, benefit checks and prior authorization tracking before visits, deliveries and surgery." },
  { name: "Aged AR Recovery", href: "/denial-management", description: "Root-cause denial management and aged A/R follow-up: CO-97 bundling, corrected claims, appeals and unpaid claims over 60–120 days." },
  { name: "Fertility Clinic Billing Solutions", href: "/infertility-rei-billing", description: "IVF, IUI, egg freezing and REI billing with benefit verification, CPT 58970, 58974, 89250–89356 and fertility mandates." },
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
      <RcmAnswerHub id="how-we-work" />
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
      <section className="border-t border-line py-16"><Container className="max-w-4xl"><Faqs faqs={[...ENTITY_FAQS.slice(1), ...FAQS]} title="Services FAQs" /></Container></section>
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${abs("/services")}#service`,
          name: "OB/GYN medical billing and revenue cycle management",
          serviceType: "Medical billing and revenue cycle management",
          description: "RPA-powered OB/GYN revenue cycle management: eligibility verification, global and 2027 maternity billing, GYN surgery coding, denial management and aged A/R recovery.",
          url: abs("/services"),
          areaServed: { "@type": "Country", name: "United States" },
          audience: { "@type": "BusinessAudience", audienceType: "Independent OB/GYN, MFM, urogynecology and REI practices" },
          provider: { "@type": "Organization", "@id": `${abs("/")}#organization`, name: "OBGYNBillingPro" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "OB/GYN billing services",
            itemListElement: CATALOG.map((c, i) => ({
              "@type": "Offer",
              position: i + 1,
              itemOffered: { "@type": "Service", name: c.name, description: c.description, url: abs(c.href) },
            })),
          },
        }}
      />
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
