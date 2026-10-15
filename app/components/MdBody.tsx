import { getDoc } from "@/lib/content";
import { Prose, InlineCta } from "./ui";

const CTAS = [
  { title: "See it on your own claims — free", text: "Send us a WhatsApp message and we'll review a sample of your claims, denials and A/R at no cost. No forms, no contract." },
  { title: "Questions? Ask us directly", text: "Message us on WhatsApp for a quick answer or to start your free OB/GYN billing audit." },
];

/** Renders a markdown page body from content/pages with inline WhatsApp CTAs at `<!-- cta -->` markers. */
export default function MdBody({ slug, message }: { slug: string; message?: string }) {
  const doc = getDoc("pages", slug);
  if (!doc) return null;
  const { chunks } = doc.rendered;
  return (
    <>
      {chunks.map((html, i) => (
        <div key={i}>
          <Prose html={html} />
          {i < chunks.length - 1 && <InlineCta {...CTAS[i % CTAS.length]} message={message} />}
        </div>
      ))}
    </>
  );
}

export function pageHeadings(slug: string) {
  return getDoc("pages", slug)?.rendered.headings ?? [];
}
