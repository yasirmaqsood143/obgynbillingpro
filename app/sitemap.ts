import type { MetadataRoute } from "next";
import { SERVICES, RESOURCES } from "@/lib/services";
import { getPosts } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string) => `${SITE.url}${path}`;
  const core: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: u("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/results"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/areas-we-serve"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: u("/calculator"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: u("/resources"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: u("/hipaa"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: u("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: u("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
  const services = SERVICES.map((s) => ({ url: u(`/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 }));
  const resources = RESOURCES.map((r) => ({ url: u(r.href), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 }));
  const posts = getPosts().map((p) => ({ url: u(`/blog/${p.slug}`), lastModified: new Date(`${p.data.updated ?? p.data.date}T12:00:00Z`), changeFrequency: "monthly" as const, priority: 0.6 }));
  return [...core, ...services, ...resources, ...posts];
}
