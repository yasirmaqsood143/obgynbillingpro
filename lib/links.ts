// Internal-linking architecture: the crawl hub (footer guides, homepage resource center) and the
// "Related OB/GYN Billing Guides" blocks on every blog post and resource guide. Keeping it in one
// place makes it easy to see which pages feed links to which.
import { getPost, getRelatedPosts, type Post } from "./blog";
import { RESOURCES } from "./services";

export type GuideLink = { href: string; title: string; text?: string; eyebrow?: string };

/** Footer "Popular OB/GYN Coding & Billing Guides" — the pages we most want crawled from every URL. */
export const FEATURED_GUIDES: { slug: string; label: string }[] = [
  { slug: "2027-delivery-codes-59431-59502", label: "2027 Delivery Codes 59431–59503" },
  { slug: "2027-labor-management-codes-59080-59083", label: "2027 Labor Management Codes 59080–59083" },
  { slug: "multiple-o-codes-sequencing-pregnancy", label: "Multiple O Codes: Sequencing Rules" },
  { slug: "myomectomy-cpt-codes", label: "Myomectomy CPT Codes (58545, 58546)" },
  { slug: "modifier-95-vs-93-vs-gt-telehealth", label: "Modifier 95 vs 93 vs GT Telehealth" },
  { slug: "cpt-99459-pelvic-exam-billing", label: "CPT 99459 Pelvic Exam Billing" },
  { slug: "obgyn-billing-kpis", label: "OB/GYN Billing KPIs & Formulas" },
  { slug: "obgyn-rcm-software-vs-outsourced-billing", label: "OB/GYN RCM Software vs Outsourcing" },
  { slug: "outsourcing-obgyn-billing-pros-cons", label: "Outsourcing OB/GYN Billing: Pros & Cons" },
  { slug: "global-maternity-billing-mistakes-2026", label: "Global Maternity Billing Mistakes" },
];

/** Only published posts are linked (scheduled posts would 404 until their date). */
export function featuredGuides() {
  return FEATURED_GUIDES.filter((g) => getPost(g.slug)).map((g) => ({ href: `/blog/${g.slug}`, label: g.label }));
}

const postLink = (p: Post): GuideLink => ({ href: `/blog/${p.slug}`, title: p.data.title, text: p.data.description, eyebrow: p.data.category });

/** Resolve a curated `related:` list (blog slugs or /resources/... paths) into links, skipping unpublished posts. */
export function resolveRelated(refs: string[] | undefined): GuideLink[] {
  const out: GuideLink[] = [];
  for (const ref of refs ?? []) {
    if (ref.startsWith("/resources/")) {
      const r = RESOURCES.find((x) => x.href === ref);
      if (r) out.push({ href: r.href, title: r.name, text: r.short, eyebrow: "Coding resource" });
      continue;
    }
    const p = getPost(ref);
    if (p) out.push(postLink(p));
  }
  return out;
}

/** 4 related guides for a blog post: curated first, topped up with same-service/category posts. */
export function relatedForPost(post: Post, curated?: string[], n = 4): GuideLink[] {
  const picked = resolveRelated(curated).filter((l) => l.href !== `/blog/${post.slug}`);
  const seen = new Set(picked.map((l) => l.href));
  for (const p of getRelatedPosts(post, n + picked.length)) {
    if (picked.length >= n) break;
    const l = postLink(p);
    if (!seen.has(l.href)) { picked.push(l); seen.add(l.href); }
  }
  return picked.slice(0, n);
}

/** The commercial page each guide hands readers to (front-end/eligibility topics → eligibility verification). */
export function commercialFor(service?: string, category?: string): GuideLink {
  if (service === "eligibility-verification" || service === "credentialing" || category === "Credentialing") {
    return { href: "/eligibility-verification", title: "Insurance eligibility verification & prior authorization", text: "RPA-assisted benefit checks and prior authorization tracking before the visit, delivery or surgery — so claims aren't denied on the front end." };
  }
  return { href: "/services", title: "OB/GYN medical billing & RCM services", text: "Global maternity and 2027 code billing, GYN surgery coding, denial and aged A/R recovery — as full-service RCM or individual services." };
}
