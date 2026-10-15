import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleCheck } from "lucide-react";
import { getDoc, type Faq } from "@/lib/content";
import { getPostsForService } from "@/lib/blog";
import { SERVICES } from "@/lib/services";
import { SITE, abs } from "@/lib/site";
import { imgUrl, type ImageKey } from "@/lib/images";
import { Container, PageHero, Prose, InlineCta, Toc, Faqs, CtaBand, PostCard, WaButton, JsonLd } from "./ui";

export type PageMeta = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow?: string;
  lead: string;
  image: ImageKey;
  waMessage?: string;
  highlights?: { title: string; text: string }[];
  faqs?: Faq[];
  ctas?: { title: string; text: string }[];
  crumb?: string;
  updated?: string;
};

type Kind = "service" | "resource" | "page";

export function pageMetadata(collection: string, slug: string, path: string): Metadata {
  const doc = getDoc<PageMeta>(collection, slug);
  if (!doc) return {};
  const d = doc.data;
  return {
    title: { absolute: d.metaTitle },
    description: d.metaDescription,
    alternates: { canonical: abs(path) },
    openGraph: { title: d.metaTitle, description: d.metaDescription, url: abs(path), type: "website", images: [{ url: imgUrl(d.image, 1200), width: 1200, height: 800, alt: d.h1 }] },
    twitter: { card: "summary_large_image", title: d.metaTitle, description: d.metaDescription },
  };
}

export default function MarkdownPage({ collection, slug, path, kind = "service", parent }: { collection: string; slug: string; path: string; kind?: Kind; parent?: { name: string; href: string } }) {
  const doc = getDoc<PageMeta>(collection, slug);
  if (!doc) notFound();
  const d = doc.data;
  const { chunks, headings } = doc.rendered;
  const posts = getPostsForService(slug, 3);
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 8);
  const defaultCtas = [
    { title: "Want us to check this on your own claims?", text: "Send a WhatsApp message and we'll review a sample of your recent claims and remits for free — no forms to fill out." },
    { title: "Not sure where your revenue is leaking?", text: "Our free audit looks at denials, A/R and coding patterns, then gives you a plain-English list of what to fix — whether or not you hire us." },
    { title: "Get a second set of eyes on your billing", text: "Message us on WhatsApp to set up a no-cost review. You keep the findings either way." },
  ];
  const ctas = d.ctas?.length ? d.ctas : defaultCtas;
  const crumbs = [...(parent ? [parent] : []), { name: d.crumb ?? d.h1, href: path }];

  const schema =
    kind === "service"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: d.crumb ?? d.h1,
          serviceType: d.crumb ?? d.h1,
          description: d.metaDescription,
          url: abs(path),
          areaServed: { "@type": "Country", name: "United States" },
          provider: { "@type": "Organization", "@id": `${SITE.url}/#organization`, name: SITE.name },
        }
      : {
          "@context": "https://schema.org",
          "@type": kind === "resource" ? "Article" : "WebPage",
          headline: d.h1,
          description: d.metaDescription,
          url: abs(path),
          image: imgUrl(d.image, 1200),
          ...(d.updated ? { dateModified: d.updated } : {}),
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", "@id": `${SITE.url}/#organization`, name: SITE.name },
        };

  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={d.h1} lead={d.lead} image={d.image} crumbs={crumbs} waMessage={d.waMessage} />

      {d.highlights?.length ? (
        <section className="border-b border-line bg-mist">
          <Container className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {d.highlights.map((h) => (
              <div key={h.title} className="flex gap-3">
                <CircleCheck className="mt-0.5 h-6 w-6 shrink-0 text-olive" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-navy">{h.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink">{h.text}</p>
                </div>
              </div>
            ))}
          </Container>
        </section>
      ) : null}

      <Container className="grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-20">
        <article className="min-w-0">
          {chunks.map((html, i) => (
            <div key={i}>
              <Prose html={html} />
              {i < chunks.length - 1 && <InlineCta {...ctas[i % ctas.length]} message={d.waMessage} />}
            </div>
          ))}
          <div className="mt-16">
            <Faqs faqs={d.faqs ?? []} />
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-6">
            <Toc headings={headings} />
            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="text-lg font-bold">Free billing audit</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">No forms. Message us on WhatsApp and we&apos;ll review your claims, denials and A/R at no cost.</p>
              <WaButton size="btn-sm" label="Start on WhatsApp" message={d.waMessage} className="mt-4 w-full" />
            </div>
            {kind === "service" && (
              <div className="rounded-2xl border border-line p-5">
                <p className="eyebrow">Related services</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {others.slice(0, 6).map((s) => (
                    <li key={s.slug}><Link href={`/${s.slug}`} className="text-ink hover:text-teal">{s.name}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </Container>

      {posts.length > 0 && (
        <section className="border-t border-line bg-mist py-16">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Keep learning</p>
                <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">Related guides from our blog</h2>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-1.5 font-semibold text-teal hover:text-teal-dark">
                All articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {posts.map((p) => <PostCard key={p.slug} p={p} />)}
            </div>
          </Container>
        </section>
      )}

      <CtaBand message={d.waMessage} />
      <JsonLd data={schema} />
    </>
  );
}
