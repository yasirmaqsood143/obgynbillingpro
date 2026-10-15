import MarkdownPage, { pageMetadata } from "@/app/components/MarkdownPage";

const SLUG = "global-maternity-billing";
const PATH = `/${SLUG}`;

export const revalidate = 86400;

export const metadata = pageMetadata("services", SLUG, PATH);

export default function Page() {
  return <MarkdownPage collection="services" slug={SLUG} path={PATH} parent={{ name: "Services", href: "/services" }} />;
}
