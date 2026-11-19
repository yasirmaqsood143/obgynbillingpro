import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import type { GuideLink } from "@/lib/links";
import { Container } from "./ui";

/**
 * "Related OB/GYN Billing Guides" — plain crawlable <a href> links with descriptive anchor text to
 * 3–4 sibling guides plus one commercial page. Rendered on every blog post and resource guide.
 */
export default function RelatedGuides({ items, commercial, title = "Related OB/GYN Billing Guides" }: { items: GuideLink[]; commercial: GuideLink; title?: string }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="related-guides" className="border-t border-line bg-mist py-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Keep learning</p>
            <h2 id="related-guides" className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
          </div>
          <Link href="/resources" className="inline-flex items-center gap-1.5 font-semibold text-teal hover:text-teal-dark">
            All coding resources <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-lg hover:shadow-navy/5">
                {l.eyebrow && <span className="eyebrow">{l.eyebrow}</span>}
                <span className="mt-2 font-bold leading-snug text-navy group-hover:text-teal">{l.title}</span>
                {l.text && <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink">{l.text}</span>}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={commercial.href} className="group mt-6 flex flex-col gap-3 rounded-2xl border border-teal/30 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-light text-teal"><Briefcase className="h-5 w-5" aria-hidden="true" /></span>
            <span>
              <span className="block text-lg font-bold text-navy group-hover:text-teal">{commercial.title}</span>
              {commercial.text && <span className="mt-1 block text-sm leading-relaxed text-ink">{commercial.text}</span>}
            </span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-teal">
            See how we help <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </Link>
      </Container>
    </section>
  );
}
