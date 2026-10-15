import type { Metadata } from "next";
import { abs, waLink, SITE } from "@/lib/site";
import { Container, Breadcrumbs, Faqs, CtaBand, JsonLd } from "../../components/ui";
import MdBody from "../../components/MdBody";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
  title: { absolute: "OB/GYN Revenue Leakage Calculator | Free Billing Calculator" },
  description: "Free OB/GYN billing calculator: estimate your net collection rate, uncollected revenue and the annual cost of claim denials in under two minutes. No email required.",
  alternates: { canonical: abs("/calculator") },
};

const FAQS = [
  { q: "Do I need to enter my email to see results?", a: "No. Results appear instantly as you type. Nothing you enter is stored or sent anywhere." },
  { q: "What is a good net collection rate for an OB/GYN practice?", a: "Benchmarks vary by source, but well-run practices typically collect the large majority of their contractually collectible revenue. Rather than comparing to a single number, track your own rolling three- to six-month NCR and look for the reasons behind any gap." },
  { q: "Why doesn't the calculator include global maternity or coding errors?", a: "Those gaps usually don't appear in summary numbers because the charges were never created. Finding them requires reviewing claims and documentation — which is what our free audit does." },
  { q: "Is this estimate a guarantee?", a: "No. It's a rough, informational estimate based on your inputs and the assumptions shown. It isn't a guarantee of any revenue recovery." },
  { q: "Where do I find gross charges and adjustments?", a: "Most practice management systems include them in a month-end or financial summary report. Your denial rate may come from the clearinghouse or a denial report." },
  { q: "Why use net collection rate instead of gross collection rate?", a: "Gross collection rate mostly reflects how high your fee schedule is. Net collection rate removes contractual adjustments, so it shows how much of the revenue you're actually entitled to you collect." },
];

export default function CalculatorPage() {
  const waBase = waLink("").split("?")[0];
  return (
    <>
      <section className="border-b border-line bg-white">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: "Resources", href: "/resources" }, { name: "Revenue Calculator", href: "/calculator" }]} />
          <p className="eyebrow mt-6">Free tool · no email required</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-navy sm:text-5xl">OB/GYN revenue leakage calculator</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">Enter four numbers from your monthly practice management report to estimate your net collection rate, uncollected revenue and the annual cost of claim denials.</p>
          <div className="mt-10"><CalculatorClient waBase={waBase} /></div>
        </Container>
      </section>
      <Container className="max-w-4xl py-16"><MdBody slug="calculator" message="Hi! I tried your revenue calculator and would like a free audit." /></Container>
      <section className="border-t border-line py-16"><Container className="max-w-4xl"><Faqs faqs={FAQS} title="Calculator FAQs" /></Container></section>
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "OB/GYN Revenue Leakage Calculator",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: abs("/calculator"),
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          publisher: { "@id": `${SITE.url}/#organization` },
        }}
      />
    </>
  );
}
