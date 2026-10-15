import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { Container, WaButton, LinkButton } from "../../components/ui";

export const metadata: Metadata = { title: "Thank You", robots: { index: false, follow: true } };

const CALENDAR = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Tm0Ba4LjScCYjyJH8NPFbP6VtLGC1cR9cDApVjGxT_cCPQQ-h6FKCjzDNjYZbJ71Xgn0mDkDd?gv=true";

export default function ThankYouPage() {
  return (
    <Container className="max-w-4xl py-16">
      <CircleCheck className="h-12 w-12 text-olive" />
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy">Thank you — we&apos;ll be in touch shortly.</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink">The fastest way to start your free OB/GYN billing audit is a WhatsApp message. You can also book a call below.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <WaButton />
        <LinkButton href="/resources" label="Browse free resources" />
      </div>
      <div className="mt-12 overflow-hidden rounded-2xl border border-line">
        <iframe src={CALENDAR} title="Schedule a call with OBGYNBillingPro" className="h-[640px] w-full" loading="lazy" />
      </div>
    </Container>
  );
}
