import type { Metadata } from "next";
import { getDoc } from "@/lib/content";
import { abs } from "@/lib/site";
import { Container, Breadcrumbs, Prose } from "./ui";

type Meta = { title: string; description: string };

export function legalMetadata(slug: string): Metadata {
  const d = getDoc<Meta>("legal", slug)?.data;
  return d ? { title: d.title, description: d.description, alternates: { canonical: abs(`/${slug}`) } } : {};
}

export default function LegalPage({ slug }: { slug: string }) {
  const doc = getDoc<Meta>("legal", slug);
  if (!doc) return null;
  return (
    <Container className="max-w-3xl py-14">
      <Breadcrumbs items={[{ name: doc.data.title, href: `/${slug}` }]} />
      <h1 className="mt-6 text-[2rem] font-bold leading-[1.15] tracking-tight text-navy sm:text-4xl">{doc.data.title}</h1>
      <div className="mt-8"><Prose html={doc.rendered.chunks.join("")} /></div>
    </Container>
  );
}
