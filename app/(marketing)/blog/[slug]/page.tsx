import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calculator, Clock, CalendarDays } from "lucide-react";
import { getPost, getPosts, getRelatedPosts } from "@/lib/blog";
import { getService } from "@/lib/services";
import { abs, SITE } from "@/lib/site";
import { imgUrl } from "@/lib/images";
import { Container, Breadcrumbs, Photo, Prose, InlineCta, Toc, Faqs, PostCard, CtaBand, JsonLd, WaButton, fmtDate } from "../../../components/ui";

export const revalidate = 3600;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found", robots: { index: false } };
  const d = post.data;
  const url = abs(`/blog/${slug}`);
  return {
    title: { absolute: d.metaTitle ?? `${d.title} | OBGYNBillingPro` },
    description: d.description,
    keywords: d.keywords,
    alternates: { canonical: url },
    openGraph: { title: d.title, description: d.description, url, type: "article", publishedTime: d.date, modifiedTime: d.updated ?? d.date, images: [{ url: imgUrl(d.image, 1200), width: 1200, height: 800, alt: d.title }] },
    twitter: { card: "summary_large_image", title: d.title, description: d.description },
  };
}

function withMidCta(chunks: string[]): string[] {
  if (chunks.length > 1) return chunks;
  const html = chunks[0];
  const parts = html.split(/(?=<h2 )/);
  if (parts.length < 4) return chunks;
  const mid = Math.ceil(parts.length / 2);
  return [parts.slice(0, mid).join(""), parts.slice(mid).join("")];
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const d = post.data;
  const service = getService(d.service);
  const related = getRelatedPosts(post, 3);
  const chunks = withMidCta(post.rendered.chunks);
  const url = abs(`/blog/${slug}`);
  const waMessage = `Hi! I read "${d.title}" and have a question about our billing.`;

  return (
    <>
      <section className="border-b border-line bg-white">
        <Container className="max-w-5xl pb-10 pt-10">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: d.title, href: `/blog/${slug}` }]} />
          <p className="eyebrow mt-8">{d.category}</p>
          <h1 className="mt-3 text-[1.75rem] font-bold leading-[1.2] tracking-tight text-navy sm:text-[2.6rem] sm:leading-tight">{d.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">{d.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink">
            <span className="font-semibold text-navy">By the OBGYNBillingPro billing team</span>
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {fmtDate(d.date)}{d.updated && d.updated !== d.date ? ` · Updated ${fmtDate(d.updated)}` : ""}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime} min read</span>
          </div>
          <Photo k={d.image} priority className="mt-8 aspect-[2/1] rounded-3xl" sizes="(min-width: 1024px) 1000px, 100vw" />
        </Container>
      </section>

      <Container className="grid max-w-6xl gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="min-w-0">
          {chunks.map((html, i) => (
            <div key={i}>
              <Prose html={html} />
              {i < chunks.length - 1 && <InlineCta title="Want us to check your claims for this?" text="Send us a WhatsApp message and we'll review a sample of your claims and remits for free — no forms, no obligation." message={waMessage} />}
            </div>
          ))}

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {service && (
              <Link href={`/${service.slug}`} className="group rounded-2xl border border-line p-6 hover:border-teal/40">
                <p className="eyebrow">Related service</p>
                <p className="mt-2 text-lg font-bold text-navy group-hover:text-teal">{service.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink">{service.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal">Learn more <ArrowRight className="h-4 w-4" /></span>
              </Link>
            )}
            <Link href="/calculator" className="group rounded-2xl border border-line p-6 hover:border-teal/40">
              <Calculator className="h-6 w-6 text-teal" />
              <p className="mt-2 text-lg font-bold text-navy group-hover:text-teal">Revenue leakage calculator</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">Estimate your net collection rate and the cost of denials in two minutes.</p>
            </Link>
          </div>

          {d.faqs?.length ? <div className="mt-14"><Faqs faqs={d.faqs} /></div> : null}

          <p className="mt-12 rounded-xl bg-mist p-5 text-sm leading-relaxed text-ink">
            <strong className="text-navy">Disclaimer:</strong> This article is for general educational purposes and reflects coding rules and payer policies as we understand them on the date shown. Always confirm against the current CPT and ICD-10-CM code sets and your payers&apos; published policies.
          </p>
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-6">
            <Toc headings={post.rendered.headings} />
            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="text-lg font-bold">Free OB/GYN billing audit</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">No forms. We review your claims, denials and A/R and send a written summary.</p>
              <WaButton size="btn-sm" label="Start on WhatsApp" message={waMessage} className="mt-4 w-full" />
            </div>
          </div>
        </aside>
      </Container>

      {related.length > 0 && (
        <section className="border-t border-line bg-mist py-16">
          <Container>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Related articles</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((p) => <PostCard key={p.slug} p={p} />)}</div>
          </Container>
        </section>
      )}

      <CtaBand message={waMessage} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: d.title,
          description: d.description,
          image: imgUrl(d.image, 1200),
          datePublished: d.date,
          dateModified: d.updated ?? d.date,
          mainEntityOfPage: url,
          url,
          author: { "@type": "Organization", name: `${SITE.name} billing team`, url: SITE.url },
          publisher: { "@type": "Organization", "@id": `${SITE.url}/#organization`, name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}/icon.svg` } },
          articleSection: d.category,
          keywords: d.keywords?.join(", "),
          wordCount: post.rendered.words,
        }}
      />
    </>
  );
}
