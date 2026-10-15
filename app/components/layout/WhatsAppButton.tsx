// Floating WhatsApp button — rendered once in the root layout on every page.
// Number comes from NEXT_PUBLIC_WHATSAPP_NUMBER (digits only, with country code).
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "../ui";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink("Hi! I have a question about OB/GYN billing.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-cta="whatsapp-float"
      className="fixed bottom-4 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition hover:scale-105 sm:bottom-6 sm:right-6 sm:h-[60px] sm:w-[60px]"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" aria-hidden="true" />
      <WhatsAppIcon className="relative h-8 w-8 text-white" />
    </a>
  );
}
