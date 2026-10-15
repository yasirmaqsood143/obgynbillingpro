import type { Metadata } from "next";
import { CircleCheck, Target, Scale, Users, Lock } from "lucide-react";
import { abs, SITE } from "@/lib/site";
import { imgUrl } from "@/lib/images";
import { Container, PageHero, SectionHeading, Photo, Faqs, CtaBand, JsonLd, WaButton, LinkButton } from "../components/ui";
import MdBody from "../components/MdBody";

export const metadata: Metadata = {
  title: { absolute: "About OBGYNBillingPro | OB/GYN Billing Specialists, 8+ Years" },
  description: "Meet OBGYNBillingPro: medical billing and revenue cycle specialists for independent OB/GYN practices, with 8+ years of experience. Honest reporting, accurate coding.",
  alternates: { canonical: abs("/about") },
  openGraph: { title: "About OBGYNBillingPro", description: "OB/GYN billing specialists with 8+ years of experience.", url: abs("/about"), images: [{ url: imgUrl("meeting", 1200), width: 1200, height: 800 }] },
};

const VALUES = [
  { icon: Target, title: "Specialty focus", text: "Women's health is our core. We know global maternity rules, GYN surgery coding and Chapter 15 diagnosis coding inside out." },
  { icon: Scale, title: "Accurate coding", text: "We code what the documentation supports — protecting you from both lost revenue and compliance risk." },
  { icon: Users, title: "Real people", text: "Every claim, denial and appeal is handled by experienced billing professionals who read the record." },
  { icon: Lock, title: "Privacy first", text: "BAA signed before any access. Individual accounts, minimum-necessary access, no PHI over WhatsApp." },
];

const FAQS = [
  { q: "How long has OBGYNBillingPro been doing OB/GYN billing?", a: "Our team brings more than eight years of hands-on medical billing and coding experience, with a focus on OB/GYN and women's health practices." },
  { q: "Where is your team located?", a: "We work remotely, inside your practice management and EHR systems, which lets us serve independent practices in all 50 states. We schedule calls at times that work for your practice." },
  { q: "What size practices do you work with?", a: "Solo physicians, small groups, multi-location groups and new practices — including practices with certified nurse-midwives and nurse practitioners. Our focus is independent practices." },
  { q: "Why don't you show client statistics on your website?", a: "Because every practice is different, and we don't want to advertise numbers you can't verify. Instead, we offer a free audit so you can see real findings from your own claims." },
  { q: "How do I get started?", a: "Send us a WhatsApp message. We'll ask a few questions and set up your free billing audit — no form, no obligation." },
  { q: "Do you sign a Business Associate Agreement?", a: "Yes \u2014 before accessing any protected health information, with every client." },
  { q: "Do you use automated tools to code claims?", a: "We use standard billing tools such as claim scrubbers and clearinghouse edits, but coding decisions, denial work and appeals are handled by experienced billing professionals who read the documentation." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="OB/GYN billing specialists who tell you the truth about your revenue"
        lead={`OBGYNBillingPro is a medical billing and revenue cycle management company focused on independent OB/GYN practices. Our team brings ${SITE.experience} of hands-on billing and coding experience — and a simple promise: accurate coding, persistent follow-up and honest reporting.`}
        image="meeting"
        crumbs={[{ name: "About", href: "/about" }]}
        waMessage="Hi! I'd like to learn more about OBGYNBillingPro."
      />

      <section className="border-b border-line bg-mist">
        <Container className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal text-white"><Icon className="h-5 w-5" /></span>
              <h2 className="mt-4 text-lg font-bold text-navy">{title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">{text}</p>
            </div>
          ))}
        </Container>
      </section>

      <Container className="grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:py-20">
        <article className="min-w-0"><MdBody slug="about" /></article>
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <Photo k="femaleDoctorDesk" className="aspect-[4/5] rounded-2xl" sizes="360px" />
          <div className="rounded-2xl bg-navy p-6 text-white">
            <p className="text-4xl font-bold">8+</p>
            <p className="mt-1 text-white/80">years of medical billing & coding experience, focused on OB/GYN</p>
            <ul className="mt-5 space-y-2 text-sm text-white/85">
              {["Global maternity & split care", "GYN surgery & urogynecology", "REI & fertility billing", "Credentialing & enrollment", "2027 maternity transition"].map((t) => (
                <li key={t} className="flex gap-2"><CircleCheck className="h-4 w-4 shrink-0 text-teal-light" /> {t}</li>
              ))}
            </ul>
            <WaButton size="btn-sm" label="Talk to us" className="mt-6 w-full" />
          </div>
        </aside>
      </Container>

      <section className="bg-mist py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Photo k="colleaguesDocs" className="aspect-[16/10] rounded-3xl" />
          <div>
            <SectionHeading eyebrow="Start with facts" title="See what we'd find in your billing — before you decide anything" lead="Our free audit reviews a sample of your claims, remittances and A/R and gives you a written summary. No forms, no contract, no pressure." />
            <div className="mt-8 flex flex-wrap gap-3">
              <WaButton />
              <LinkButton href="/results" label="See case studies" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-4xl"><Faqs faqs={FAQS} title="About OBGYNBillingPro" /></Container>
      </section>
      <CtaBand />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: "About OBGYNBillingPro", url: abs("/about"), about: { "@id": `${SITE.url}/#organization` } }} />
    </>
  );
}
