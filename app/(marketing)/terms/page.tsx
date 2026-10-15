import LegalPage, { legalMetadata } from "@/app/components/LegalPage";

export const metadata = legalMetadata("terms");

export default function Page() {
  return <LegalPage slug="terms" />;
}
