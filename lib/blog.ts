import { getDoc, listSlugs, type Doc, type Faq } from "./content";
import type { ImageKey } from "./images";

export type PostMeta = {
  title: string;
  metaTitle?: string;
  description: string;
  date: string; // YYYY-MM-DD — posts with a future date stay hidden until that day (weekly drip)
  updated?: string;
  category: string;
  image: ImageKey;
  service: string; // related service slug
  keywords?: string[];
  faqs?: Faq[];
};

export type Post = Doc<PostMeta> & { readTime: number };

const today = () => new Date().toISOString().slice(0, 10);

export const isPublished = (p: { data: { date: string } }) => p.data.date <= today();

function load(slug: string): Post | null {
  const doc = getDoc<PostMeta>("blog", slug);
  if (!doc) return null;
  return { ...doc, readTime: Math.max(3, Math.round(doc.rendered.words / 230)) };
}

/** All posts, newest first. Scheduled (future-dated) posts excluded unless asked. */
export function getPosts({ includeScheduled = false } = {}): Post[] {
  return listSlugs("blog")
    .map(load)
    .filter((p): p is Post => !!p && (includeScheduled || isPublished(p)))
    .sort((a, b) => (a.data.date < b.data.date ? 1 : a.data.date > b.data.date ? -1 : a.slug.localeCompare(b.slug)));
}

export function getPost(slug: string): Post | null {
  const p = load(slug);
  return p && isPublished(p) ? p : null;
}

export function getRelatedPosts(post: Post, n = 3): Post[] {
  const all = getPosts().filter((p) => p.slug !== post.slug);
  const same = all.filter((p) => p.data.service === post.data.service || p.data.category === post.data.category);
  return [...same, ...all.filter((p) => !same.includes(p))].slice(0, n);
}

export function getPostsForService(service: string, n = 3): Post[] {
  const all = getPosts();
  const match = all.filter((p) => p.data.service === service);
  return [...match, ...all.filter((p) => !match.includes(p))].slice(0, n);
}

export const CATEGORIES = [
  "Maternity Billing",
  "2027 Transition",
  "GYN Surgery Coding",
  "Denial Management",
  "Telehealth",
  "ICD-10 Coding",
  "Revenue Cycle",
  "Credentialing",
  "Compliance",
  "Practice Management",
] as const;
