import type { Metadata } from "next";
import { Info } from "lucide-react";
import { abs } from "@/lib/site";
import { imgUrl } from "@/lib/images";
import { Container, PageHero, Faqs, CtaBand, Photo, Toc } from "../../components/ui";
import MdBody, { pageHeadings } from "../../components/MdBody";

export const metadata: Metadata = {
  title: { absolute: "OB/GYN Billing Case Studies | How We Fix Revenue Problems" },
  description: "Illustrative OB/GYN billing case studies: global maternity gaps, denial backlogs and coding audits — what we review, what we fix and what we measure. No inflated claims.",
  alternates: { canonical: abs("/results") },
  openGraph: { title: "OB/GYN Billing Case Studies | OBGYNBillingPro", description: "How we approach common OB/GYN billing problems.", url: abs("/results"), images: [{ url: imgUrl("tabletFinance", 1200), width: 1200, height: 800 }] },
};

const FAQS = [
  { q: "Are these real client results?", a: "They're illustrative composites based on situations we've encountered over more than eight years of OB/GYN billing, with details removed and simplified. They show our approach — not a guaranteed outcome." },
  { q: "What results can my practice expect?", a: "It depends on your starting point, payer mix, documentation and the age of your A/R. We don't promise numbers before seeing your data. The free audit shows you what we'd find in your own claims." },
  { q: "How do you report results once we work together?", a: "Monthly: net collection rate, days in A/R, A/R over 90 days, first-pass acceptance, denials by reason, charge lag and open pregnancies — compared to your own baseline." },
  { q: "Can you show references?", a: "We're happy to discuss our experience and approach in detail. The most reliable evidence, though, is what a free audit finds in your own claims." },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="How we solve common OB/GYN billing problems"
        lead="Three illustrative case studies showing what we review, what we typically find and what we change — plus the metrics we track for every client. No inflated statistics, no invented testimonials."
        image="tabletFinance"
        crumbs={[{ name: "Case Studies", href: "/results" }]}
        waMessage="Hi! I read your case studies and would like a free audit of our billing."
      />
      <section className="border-b border-line bg-sand">
        <Container className="flex gap-3 py-5 text-[15px] text-navy">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
          <p>These case studies are illustrative composites with identifying details removed. They describe our approach and are not a guarantee of any specific financial result.</p>
        </Container>
      </section>
      <Container className="grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-20">
        <article className="min-w-0"><MdBody slug="results" message="Hi! I'd like a free audit like the ones in your case studies." /></article>
        <aside className="hidden space-y-6 lg:block lg:sticky lg:top-28 lg:self-start">
          <Toc headings={pageHeadings("results")} />
          <Photo k="reviewingDocs" className="aspect-[4/3] rounded-2xl" sizes="320px" />
        </aside>
      </Container>
      <section className="border-t border-line py-16"><Container className="max-w-4xl"><Faqs faqs={FAQS} title="Case study FAQs" /></Container></section>
      <CtaBand />
    </>
  );
}
