"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "../WhatsAppIcon";
import Logo from "./Logo";

type L = { href: string; label: string; note?: string };

/**
 * Full-screen mobile menu.
 * Rendered through a portal to <body>: the sticky header uses backdrop-blur, and any
 * backdrop-filter turns the header into the containing block for position:fixed
 * children — which clipped the old panel to the 72px header bar.
 */
export default function MobileMenu({ services, resources, nav, waHref }: { services: L[]; resources: L[]; nav: L[]; waHref: string }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = overflow; window.removeEventListener("keydown", onKey); };
  }, [open]);

  const link = "flex items-center justify-between border-b border-line py-4 text-[17px] font-semibold text-navy";
  const sub = "block rounded-lg px-3 py-2.5 text-[15px] text-navy hover:bg-teal-light active:bg-teal-light";

  const panel = (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="mobile-menu fixed inset-0 z-[100] flex flex-col bg-white xl:hidden"
      onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}
    >
      <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-line px-4 sm:px-6">
        <Logo />
        <button
          ref={closeRef}
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-4 pb-6 pt-2 sm:px-6">
        <details className="group border-b border-line">
          <summary className={`${link} cursor-pointer list-none border-b-0 [&::-webkit-details-marker]:hidden`}>
            Services <ChevronDown className="h-5 w-5 text-teal transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="grid gap-0.5 pb-3">
            <Link href="/services" className={`${sub} font-semibold !text-teal`}>All services →</Link>
            {services.map((s) => <Link key={s.href} href={s.href} className={sub}>{s.label}</Link>)}
          </div>
        </details>

        <details className="group border-b border-line">
          <summary className={`${link} cursor-pointer list-none border-b-0 [&::-webkit-details-marker]:hidden`}>
            Resources <ChevronDown className="h-5 w-5 text-teal transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="grid gap-0.5 pb-3">
            <Link href="/resources" className={`${sub} font-semibold !text-teal`}>All resources →</Link>
            {resources.map((r) => <Link key={r.href} href={r.href} className={sub}>{r.label}</Link>)}
          </div>
        </details>

        {nav.map((n) => (
          <Link key={n.href} href={n.href} className={link}>
            {n.label} <ArrowRight className="h-4 w-4 text-ink/50" aria-hidden="true" />
          </Link>
        ))}

        <p className="mt-6 rounded-xl bg-mist p-4 text-sm leading-relaxed text-ink">
          Free OB/GYN billing audit — no forms, no contract. Please don&apos;t send patient information over WhatsApp.
        </p>
      </nav>

      <div className="shrink-0 border-t border-line bg-white px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6">
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg w-full" data-cta="whatsapp-mobile-menu">
          <WhatsAppIcon /> Free Audit on WhatsApp
        </a>
      </div>
    </div>
  );

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy"
      >
        <Menu className="h-5 w-5" />
      </button>
      {open && createPortal(panel, document.body)}
    </div>
  );
}
