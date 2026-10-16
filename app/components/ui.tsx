import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Plus, Clock } from "lucide-react";
import { waLink, abs } from "@/lib/site";
import { img, type ImageKey } from "@/lib/images";
import type { Faq, Heading } from "@/lib/content";
import type { Service } from "@/lib/services";
import { getPost, type Post } from "@/lib/blog";

export { WhatsAppIcon } from "./WhatsAppIcon";
import { WhatsAppIcon } from "./WhatsAppIcon";

/* ── Layout primitives ─────────────────────────────────────────────────────── */
export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, lead, center = false, light = false }: { eyebrow?: string; title: React.ReactNode; lead?: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${light ? "!text-teal-light" : ""}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-[1.75rem] font-bold leading-[1.2] tracking-tight sm:text-4xl sm:leading-tight ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {lead && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/80" : "text-ink"}`}>{lead}</p>}
    </div>
  );
}

/* ── CTAs ──────────────────────────────────────────────────────────────────── */
export function WaButton({ label = "Get a Free Audit on WhatsApp", message, size = "", className = "" }: { label?: string; message?: string; size?: "" | "btn-sm" | "btn-lg"; className?: string }) {
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className={`btn btn-wa ${size} ${className}`} data-cta="whatsapp">
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function LinkButton({ href, label, variant = "btn-outline", size = "" }: { href: string; label: string; variant?: string; size?: string }) {
  return (
    <Link href={href} className={`btn ${variant} ${size}`}>
      {label}
      <ArrowRight strokeWidth={2.25} />
    </Link>
  );
}

export function CtaBand({ title = "Find out where your practice is losing revenue — free.", text = "Send us a WhatsApp message. We'll review a sample of your claims, denials and A/R and tell you exactly what we see. No forms, no contract, no obligation.", message }: { title?: string; text?: string; message?: string }) {
  return (
    <section className="relative overflow-hidden bg-teal-dark">
      <div className="absolute inset-0 opacity-30 grid-bg" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow !text-teal-light">Free OB/GYN billing audit</p>
            <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.2] tracking-tight text-white sm:text-4xl sm:leading-tight">{title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <WaButton size="btn-lg" message={message} />
            <Link href="/calculator" className="btn btn-ghost-light btn-lg">
              Estimate Revenue Leakage <ArrowRight strokeWidth={2.25} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function InlineCta({ title, text, message }: { title: string; text: string; message?: string }) {
  return (
    <aside className="not-prose my-10 rounded-2xl border border-teal/20 bg-teal-light/60 p-6 sm:p-7">
      <p className="text-lg font-bold text-navy">{title}</p>
      <p className="mt-2 text-[15px] leading-relaxed text-ink">{text}</p>
      <div className="mt-4">
        <WaButton size="btn-sm" label="Message Us on WhatsApp" message={message} />
      </div>
    </aside>
  );
}

/* ── SEO helpers ───────────────────────────────────────────────────────────── */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Breadcrumbs({ items, light = false }: { items: { name: string; href: string }[]; light?: boolean }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={`flex min-w-0 flex-wrap items-center gap-1 text-sm ${light ? "text-white/70" : "text-ink"}`}>
        {all.map((c, i) => (
          <span key={c.href} className="flex min-w-0 items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />}
            {i < all.length - 1 ? (
              <Link href={c.href} className={`hover:underline ${light ? "hover:text-white" : "hover:text-teal"}`}>{c.name}</Link>
            ) : (
              <span aria-current="page" className={`max-w-[60vw] truncate sm:max-w-none ${light ? "text-white" : "text-navy"}`}>{c.name}</span>
            )}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.href) })),
        }}
      />
    </>
  );
}

export function Faqs({ faqs, title = "Frequently asked questions", schema = true }: { faqs: Faq[]; title?: string; schema?: boolean }) {
  if (!faqs?.length) return null;
  return (
    <section id="faq" className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">{title}</h2>
      <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
        {faqs.map((f) => (
          <details key={f.q} className="faq group p-5 sm:p-6">
            <summary className="flex items-start justify-between gap-4 text-left text-[17px] font-semibold text-navy">
              {f.q}
              <Plus className="faq-icon mt-0.5 h-5 w-5 shrink-0 text-teal transition-transform" aria-hidden="true" />
            </summary>
            <p className="mt-3 leading-relaxed text-ink">{f.a}</p>
          </details>
        ))}
      </div>
      {schema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }}
        />
      )}
    </section>
  );
}

/* ── Content ───────────────────────────────────────────────────────────────── */
/** Links to blog posts that aren't published yet (scheduled weekly) render as plain text until their date. */
function unlinkScheduled(html: string): string {
  return html.replace(/<a href="\/blog\/([a-z0-9-]+)"[^>]*>([\s\S]*?)<\/a>/g, (m, slug: string, text: string) => (getPost(slug) ? m : text));
}

export function Prose({ html, className = "" }: { html: string; className?: string }) {
  return <div className={`prose max-w-none ${className}`} dangerouslySetInnerHTML={{ __html: unlinkScheduled(html) }} />;
}

export function Toc({ headings }: { headings: Heading[] }) {
  if (headings.length < 3) return null;
  return (
    <nav aria-label="On this page" className="rounded-2xl border border-line bg-white p-5">
      <p className="eyebrow">On this page</p>
      <ol className="mt-3 space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className="block leading-snug text-ink hover:text-teal">{h.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Photo({ k, className = "", priority = false, sizes = "(min-width: 1024px) 50vw, 100vw" }: { k: ImageKey; className?: string; priority?: boolean; sizes?: string }) {
  const { src, alt } = img(k);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

/* ── Cards ─────────────────────────────────────────────────────────────────── */
export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link href={`/${s.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl hover:shadow-teal/10">
      <Photo k={s.image} className="aspect-[16/9]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      <div className="flex flex-1 flex-col p-6">
        {s.codes && <p className="font-mono text-xs text-teal-dark">{s.codes}</p>}
        <h3 className="mt-2 text-lg font-bold text-navy group-hover:text-teal">{s.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink">{s.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
          Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function PostCard({ p }: { p: Post }) {
  return (
    <Link href={`/blog/${p.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
      <Photo k={p.data.image} className="aspect-[16/9]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{p.data.category}</p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-navy group-hover:text-teal">{p.data.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-[15px] leading-relaxed text-ink">{p.data.description}</p>
        <p className="mt-4 flex items-center gap-2 text-xs text-ink">
          <Clock className="h-3.5 w-3.5" /> {p.readTime} min read · {fmtDate(p.data.date)}
        </p>
      </div>
    </Link>
  );
}

export function fmtDate(d: string) {
  return new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/* ── Page hero (interior pages) ────────────────────────────────────────────── */
export function PageHero({ eyebrow, title, lead, image, crumbs, waMessage, secondary }: { eyebrow?: string; title: string; lead: string; image: ImageKey; crumbs: { name: string; href: string }[]; waMessage?: string; secondary?: { href: string; label: string } }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 opacity-25 grid-bg" aria-hidden="true" />
      <Container className="relative grid items-center gap-10 py-12 lg:grid-cols-[1.15fr_1fr] lg:py-16">
        <div>
          <Breadcrumbs items={crumbs} light />
          {eyebrow && <p className="eyebrow mt-6 !text-teal-light">{eyebrow}</p>}
          <h1 className="mt-3 text-[2rem] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl sm:leading-[1.1]">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WaButton message={waMessage} />
            <Link href={secondary?.href ?? "/calculator"} className="btn btn-ghost-light">
              {secondary?.label ?? "Revenue Calculator"} <ArrowRight strokeWidth={2.25} />
            </Link>
          </div>
        </div>
        <Photo k={image} priority className="aspect-[4/3] rounded-3xl ring-1 ring-white/10" />
      </Container>
    </section>
  );
}
