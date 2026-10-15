import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calculator } from "lucide-react";
import { RESOURCES } from "@/lib/services";
import { getPosts } from "@/lib/blog";
import { abs } from "@/lib/site";
import { Container, PageHero, PostCard, CtaBand, SectionHeading, Faqs } from "../../components/ui";
import MdBody from "../../components/MdBody";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: { absolute: "OB/GYN Billing & Coding Resources | Free Guides" },
  description: "Free OB/GYN billing resources: 2027 maternity code transition, ICD-10 O codes and sequencing, OB/GYN taxonomy codes, CPT code library and revenue calculator.",
  alternates: { canonical: abs("/resources") },
};

const FAQS = [
  { q: "Are these resources free?", a: "Yes. All of our guides and the revenue calculator are free, with no sign-up or email required." },
  { q: "How often are the guides updated?", a: "We review them when coding rules change — CPT updates each January, ICD-10-CM each October — and when major changes like the 2027 maternity codes are finalized. Each guide shows its last-updated date." },
  { q: "Can I share these guides with my staff?", a: "Please do. Linking to the guides is the best way to make sure your team always sees the latest version." },
  { q: "Can you answer a question the guides don't cover?", a: "Yes. Send us a WhatsApp message (without patient information) and we'll answer quick coding and billing questions for free." },
];

export default function ResourcesPage() {
  const posts = getPosts().slice(0, 6);
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Free OB/GYN billing & coding resources"
        lead="Reference guides our billing team uses every day — CPT and ICD-10 codes, taxonomy, sequencing rules and the 2027 maternity transition — free for every practice."
        image="binders"
        crumbs={[{ name: "Resources", href: "/resources" }]}
        waMessage="Hi! I have an OB/GYN billing question."
      />
      <section className="py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          {RESOURCES.map((r) => (
            <Link key={r.href} href={r.href} className="group flex gap-5 rounded-2xl border border-line bg-white p-7 transition hover:border-teal/40 hover:shadow-xl hover:shadow-teal/10">
              <BookOpen className="h-8 w-8 shrink-0 text-teal" />
              <div>
                <h2 className="text-xl font-bold text-navy group-hover:text-teal">{r.name}</h2>
                <p className="mt-2 leading-relaxed text-ink">{r.short}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">Read the guide <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
          <Link href="/calculator" className="group flex gap-5 rounded-2xl bg-navy p-7 text-white md:col-span-2">
            <Calculator className="h-8 w-8 shrink-0 text-teal-light" />
            <div>
              <h2 className="text-xl font-bold">Revenue leakage calculator</h2>
              <p className="mt-2 leading-relaxed text-white/80">Estimate your net collection rate and the annual cost of denials in two minutes — no email required.</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-light">Open the calculator <ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>
        </Container>
      </section>
      <Container className="max-w-4xl pb-16"><MdBody slug="resources" /></Container>
      {posts.length > 0 && (
        <section className="bg-mist py-16">
          <Container>
            <SectionHeading eyebrow="From the blog" title="Latest OB/GYN billing articles" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">{posts.map((p) => <PostCard key={p.slug} p={p} />)}</div>
          </Container>
        </section>
      )}
      <section className="py-16"><Container className="max-w-4xl"><Faqs faqs={FAQS} title="Resources FAQs" /></Container></section>
      <CtaBand />
    </>
  );
}
