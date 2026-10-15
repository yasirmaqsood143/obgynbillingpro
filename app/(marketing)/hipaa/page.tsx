import LegalPage, { legalMetadata } from "@/app/components/LegalPage";

export const metadata = legalMetadata("hipaa");

export default function Page() {
  return <LegalPage slug="hipaa" />;
}
