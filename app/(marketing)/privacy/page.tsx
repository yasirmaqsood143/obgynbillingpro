import LegalPage, { legalMetadata } from "@/app/components/LegalPage";

export const metadata = legalMetadata("privacy");

export default function Page() {
  return <LegalPage slug="privacy" />;
}
