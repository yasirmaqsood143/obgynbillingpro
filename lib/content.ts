import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";

const ROOT = path.join(process.cwd(), "content");

export type Faq = { q: string; a: string };
export type Heading = { id: string; text: string };

export type Rendered = {
  /** HTML chunks split on `<!-- cta -->` markers so inline CTAs can be placed between them. */
  chunks: string[];
  headings: Heading[];
  words: number;
};

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&#?[a-z0-9]+;/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function postProcess(html: string): string {
  return html
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, "</table></div>")
    .replace(
      /<a href="(https?:\/\/(?!(?:www\.)?obgynbillingpro\.com)[^"]+)"/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer"'
    );
}

export function renderMarkdown(md: string): Rendered {
  const headings: Heading[] = [];
  const seen = new Map<string, number>();
  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const inner = this.parser.parseInline(tokens);
        const plain = inner
          .replace(/<[^>]+>/g, "")
          .replace(/&#39;/g, "'")
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, "&");
        let id = slugify(plain) || "section";
        const n = seen.get(id) ?? 0;
        seen.set(id, n + 1);
        if (n) id = `${id}-${n}`;
        if (depth === 2) headings.push({ id, text: plain });
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
    },
  });
  const chunks = md
    .split(/^<!--\s*cta\s*-->\s*$/m)
    .map((c) => postProcess(marked.parse(c, { async: false }) as string));
  return { chunks, headings, words: countWords(md) };
}

export function countWords(md: string): number {
  return md
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/[#>*_`|\-[\]()]/g, " ")
    .split(/\s+/)
    .filter((w) => /[a-z0-9]/i.test(w)).length;
}

const cache = new Map<string, unknown>();

export type Doc<T> = { slug: string; data: T; body: string; rendered: Rendered };

export function getDoc<T>(collection: string, slug: string): Doc<T> | null {
  const key = `${collection}/${slug}`;
  if (cache.has(key)) return cache.get(key) as Doc<T>;
  const file = path.join(ROOT, collection, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const doc: Doc<T> = { slug, data: data as T, body: content, rendered: renderMarkdown(content) };
  cache.set(key, doc);
  return doc;
}

export function listSlugs(collection: string): string[] {
  const dir = path.join(ROOT, collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
