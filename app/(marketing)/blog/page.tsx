import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/blog";
import { abs } from "@/lib/site";
import { Container, Breadcrumbs, PostCard, Photo, CtaBand, JsonLd, fmtDate } from "../../components/ui";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: "OB/GYN Billing & Coding Blog | CPT, ICD-10, Denials & 2027" },
  description: "Weekly OB/GYN medical billing and coding articles: CPT and ICD-10 guides, denial fixes, telehealth modifiers, global maternity billing and the 2027 code transition.",
  alternates: { canonical: abs("/blog") },
};

export default function BlogPage() {
  const posts = getPosts();
  const [lead, ...rest] = posts;
  const categories = Array.from(new Set(posts.map((p) => p.data.category)));

  return (
    <>
      <section className="border-b border-line bg-white">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
          <p className="eyebrow mt-6">OB/GYN billing blog</p>
          <h1 className="mt-3 max-w-3xl text-[2rem] font-bold leading-[1.15] tracking-tight text-navy sm:text-5xl">OB/GYN billing & coding guides</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">
            Practical, plain-English articles on OB/GYN CPT and ICD-10 coding, global maternity billing, claim denials, telehealth, credentialing and the 2027 maternity code transition. A new article is published every week.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((c) => (
              <a key={c} href={`#${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="rounded-full border border-line px-3 py-1.5 text-sm text-navy hover:border-teal hover:text-teal">{c}</a>
            ))}
          </div>
        </Container>
      </section>

      {lead && (
        <section className="py-12">
          <Container>
            <Link href={`/blog/${lead.slug}`} className="group grid overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-2">
              <Photo k={lead.data.image} priority className="aspect-[16/10] lg:aspect-auto lg:min-h-[340px]" />
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="eyebrow">Latest · {lead.data.category}</p>
                <h2 className="mt-3 text-2xl font-bold leading-snug text-navy group-hover:text-teal sm:text-3xl">{lead.data.title}</h2>
                <p className="mt-4 leading-relaxed text-ink">{lead.data.description}</p>
                <p className="mt-5 text-sm text-ink">{fmtDate(lead.data.date)} · {lead.readTime} min read</p>
              </div>
            </Link>
          </Container>
        </section>
      )}

      {categories.map((c) => {
        const inCat = rest.filter((p) => p.data.category === c);
        if (!inCat.length) return null;
        return (
          <section key={c} id={c.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="scroll-mt-28 pb-12">
            <Container>
              <h2 className="border-b border-line pb-3 text-2xl font-bold text-navy">{c}</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{inCat.map((p) => <PostCard key={p.slug} p={p} />)}</div>
            </Container>
          </section>
        );
      })}

      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "OBGYNBillingPro Blog",
          url: abs("/blog"),
          blogPost: posts.slice(0, 20).map((p) => ({ "@type": "BlogPosting", headline: p.data.title, url: abs(`/blog/${p.slug}`), datePublished: p.data.date })),
        }}
      />
    </>
  );
}
