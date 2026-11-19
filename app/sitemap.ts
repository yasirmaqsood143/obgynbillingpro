import type { MetadataRoute } from "next";
import { SERVICES, RESOURCES } from "@/lib/services";
import { getPosts } from "@/lib/blog";
import { getDoc } from "@/lib/content";
import { SITE } from "@/lib/site";

export const revalidate = 86400;

/**
 * Only canonical, indexable, non-redirecting https://obgynbillingpro.com URLs belong here.
 * - No www / http variants, no redirected legacy blog URLs (see next.config.ts), no /thank-you.
 * - Legal pages (/hipaa, /privacy, /terms) are intentionally excluded: they stay crawlable via the
 *   footer but shouldn't compete for crawl budget with commercial and coding pages.
 * - lastmod comes from each file's `updated:` (or post `date:`) front matter so it only changes when
 *   the content does. Files without one fall back to the October 2026 redesign launch date.
 */
const CONTENT_BASELINE = "2026-10-15";

const at = (d: string) => new Date(`${d}T12:00:00Z`);

function docDate(collection: string, slug: string): Date {
  const d = getDoc<{ updated?: string }>(collection, slug)?.data.updated;
  return at(d ?? CONTENT_BASELINE);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string) => `${SITE.url}${path === "/" ? "" : path}`;
  const posts = getPosts();
  const latestPost = posts.reduce((max, p) => {
    const d = p.data.updated ?? p.data.date;
    return d > max ? d : max;
  }, CONTENT_BASELINE);

  const core: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: docDate("pages", "home"), changeFrequency: "weekly", priority: 1 },
    { url: u("/services"), lastModified: docDate("pages", "services"), changeFrequency: "monthly", priority: 0.95 },
    { url: u("/eligibility-verification"), lastModified: docDate("services", "eligibility-verification"), changeFrequency: "monthly", priority: 0.95 },
    { url: u("/calculator"), lastModified: docDate("pages", "calculator"), changeFrequency: "monthly", priority: 0.9 },
    { url: u("/resources"), lastModified: docDate("pages", "resources"), changeFrequency: "monthly", priority: 0.85 },
    { url: u("/blog"), lastModified: at(latestPost), changeFrequency: "weekly", priority: 0.8 },
    { url: u("/results"), lastModified: docDate("pages", "results"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/about"), lastModified: docDate("pages", "about"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/areas-we-serve"), lastModified: docDate("pages", "areas-we-serve"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/contact"), lastModified: docDate("pages", "contact"), changeFrequency: "yearly", priority: 0.6 },
  ];

  const services = SERVICES.filter((s) => s.slug !== "eligibility-verification").map((s) => ({
    url: u(`/${s.slug}`),
    lastModified: docDate("services", s.slug),
    changeFrequency: "monthly" as const,
    priority: s.group === "other" ? 0.6 : 0.85,
  }));

  const resources = RESOURCES.map((r) => ({
    url: u(r.href),
    lastModified: docDate("resources", r.href.replace("/resources/", "")),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blog = posts.map((p) => ({
    url: u(`/blog/${p.slug}`),
    lastModified: at(p.data.updated ?? p.data.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...core, ...services, ...resources, ...blog];
}
