import MarkdownPage, { pageMetadata } from "@/app/components/MarkdownPage";

const SLUG = "cpt-library";
const PATH = `/resources/${SLUG}`;

export const revalidate = 86400;

export const metadata = pageMetadata("resources", SLUG, PATH);

export default function Page() {
  return <MarkdownPage collection="resources" slug={SLUG} path={PATH} kind="resource" parent={{ name: "Resources", href: "/resources" }} />;
}
