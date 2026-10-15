"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

type L = { href: string; label: string };

export default function MobileMenu({ services, nav, waHref }: { services: L[]; nav: L[]; waHref: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open && (
        <div onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }} className="fixed inset-x-0 bottom-0 top-[72px] z-50 overflow-y-auto border-t border-line bg-white px-4 pb-10 pt-4 sm:px-6">
          <details className="group border-b border-line py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-lg font-semibold text-navy">
              Services <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
            </summary>
            <div className="grid gap-1 pb-2">
              <Link href="/services" className="rounded-md px-2 py-2 font-semibold text-teal">All services</Link>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="rounded-md px-2 py-2 text-ink hover:bg-teal-light">{s.label}</Link>
              ))}
            </div>
          </details>
          {nav.slice(1).map((n) => (
            <Link key={n.href} href={n.href} className="block border-b border-line py-4 text-lg font-semibold text-navy">
              {n.label}
            </Link>
          ))}
          <Link href="/calculator" className="block border-b border-line py-4 text-lg font-semibold text-navy">Revenue Calculator</Link>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg mt-6 w-full">
            Free Audit on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
