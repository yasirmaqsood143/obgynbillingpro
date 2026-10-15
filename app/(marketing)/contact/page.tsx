import type { Metadata } from "next";
import { Mail, Clock, ShieldCheck } from "lucide-react";
import { abs, SITE } from "@/lib/site";
import { Container, PageHero, Faqs, CtaBand, WaButton, WhatsAppIcon, JsonLd } from "../../components/ui";
import MdBody from "../../components/MdBody";

export const metadata: Metadata = {
  title: { absolute: "Contact OBGYNBillingPro | Free OB/GYN Billing Audit on WhatsApp" },
  description: "Contact OBGYNBillingPro on WhatsApp for a free OB/GYN billing audit — no forms required. Ask a billing question, schedule a call or request a quote.",
  alternates: { canonical: abs("/contact") },
};

const FAQS = [
  { q: "Do I need to fill out a form for the free audit?", a: "No. Just send us a WhatsApp message. We'll ask a few questions and arrange secure access to a sample of your claims after signing a BAA." },
  { q: "Can I send patient information on WhatsApp?", a: "Please don't. WhatsApp is for scheduling and general questions. Patient information is only reviewed through secure access to your systems after a Business Associate Agreement is signed." },
  { q: "How quickly will you respond?", a: "We respond to WhatsApp messages promptly during business hours." },
  { q: "Is there any obligation after the audit?", a: "None. The findings are yours to keep and use however you like." },
  { q: "Do you work with practices outside OB/GYN?", a: "Yes. OB/GYN is our focus, but we also support cardiology, internal medicine, family practice and other specialties. Message us and we'll tell you honestly whether we're a good fit." },
  { q: "Can we just ask a coding question without signing up?", a: "Absolutely. Quick coding and billing questions are free \u2014 just leave patient information out of the message." },
  { q: "What happens after the audit?", a: "We walk you through the findings. If you'd like our help, we'll recommend a service and send a written proposal. If not, you keep the findings." },
];

const CALENDAR = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Tm0Ba4LjScCYjyJH8NPFbP6VtLGC1cR9cDApVjGxT_cCPQQ-h6FKCjzDNjYZbJ71Xgn0mDkDd?gv=true";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to an OB/GYN billing specialist"
        lead="No forms, no phone tag. Send us a WhatsApp message to start your free billing audit, ask a coding question or schedule a call."
        image="officeConsult"
        crumbs={[{ name: "Contact", href: "/contact" }]}
        secondary={{ href: "#schedule", label: "Schedule a call" }}
      />

      <section className="py-14">
        <Container className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-wa/30 bg-[#f1faf4] p-7">
            <WhatsAppIcon className="h-9 w-9 text-wa" />
            <h2 className="mt-4 text-xl font-bold text-navy">WhatsApp (fastest)</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink">Free audits, quick questions, quotes and scheduling.</p>
            <WaButton size="btn-sm" label="Open WhatsApp" className="mt-5" />
          </div>
          <div className="rounded-2xl border border-line p-7">
            <Mail className="h-9 w-9 text-teal" />
            <h2 className="mt-4 text-xl font-bold text-navy">Email</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink">For documents without patient information — contracts, fee schedules, general questions.</p>
            <a href={`mailto:${SITE.email}`} className="mt-5 inline-block break-all font-semibold text-teal hover:underline">{SITE.email}</a>
          </div>
          <div className="rounded-2xl border border-line p-7">
            <ShieldCheck className="h-9 w-9 text-teal" />
            <h2 className="mt-4 text-xl font-bold text-navy">Privacy first</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink">Please don&apos;t send patient information by WhatsApp or email. We review records only through secure access, under a signed BAA.</p>
            <p className="mt-5 flex items-center gap-2 text-sm text-ink"><Clock className="h-4 w-4" /> Prompt replies during business hours</p>
          </div>
        </Container>
      </section>

      <Container className="max-w-4xl pb-6"><MdBody slug="contact" /></Container>

      <section id="schedule" className="scroll-mt-24 bg-mist py-16">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Prefer to schedule a call?</h2>
          <p className="mt-2 text-ink">Pick a time that works for you. It&apos;s optional — WhatsApp is usually faster.</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white">
            <iframe src={CALENDAR} title="Schedule a call with OBGYNBillingPro" className="h-[640px] w-full" loading="lazy" />
          </div>
        </Container>
      </section>

      <section className="py-16"><Container className="max-w-4xl"><Faqs faqs={FAQS} title="Contact FAQs" /></Container></section>
      <CtaBand />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contact OBGYNBillingPro", url: abs("/contact") }} />
    </>
  );
}
