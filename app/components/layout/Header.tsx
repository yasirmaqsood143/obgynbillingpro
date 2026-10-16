import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SERVICES, RESOURCES } from "@/lib/services";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "../ui";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Results", href: "/results" },
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const obgyn = SERVICES.filter((s) => s.group !== "other");
  return (
    <>
      <div className="bg-navy text-[13px] text-white/85">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center sm:px-6 lg:px-8">
          <span><span className="sm:hidden">Free billing audit — no forms.</span><span className="hidden sm:inline">Free OB/GYN billing audit — no forms, no contract.</span></span>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap font-semibold text-teal-light underline underline-offset-2 hover:text-white">
            <span className="sm:hidden">WhatsApp us →</span><span className="hidden sm:inline">Message us on WhatsApp →</span>
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            <div className="nav-item relative">
              <Link href="/services" className="flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium text-navy hover:bg-teal-light hover:text-teal-dark">
                Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </Link>
              <div className="nav-drop absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-3 shadow-2xl shadow-navy/10">
                  {obgyn.map((s) => (
                    <Link key={s.slug} href={`/${s.slug}`} className="rounded-lg px-3 py-2.5 hover:bg-teal-light">
                      <span className="block text-sm font-semibold text-navy">{s.name}</span>
                      <span className="mt-0.5 block font-mono text-[11px] text-ink">{s.codes}</span>
                    </Link>
                  ))}
                  <Link href="/multi-specialty-billing" className="rounded-lg px-3 py-2.5 hover:bg-teal-light">
                    <span className="block text-sm font-semibold text-navy">Other Specialties</span>
                    <span className="mt-0.5 block text-[11px] text-ink">Cardiology, internal medicine & more</span>
                  </Link>
                  <Link href="/services" className="col-span-2 mt-1 rounded-lg bg-mist px-3 py-2.5 text-sm font-semibold text-teal hover:bg-teal-light">
                    View all services →
                  </Link>
                </div>
              </div>
            </div>
            <div className="nav-item relative">
              <Link href="/resources" className="flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium text-navy hover:bg-teal-light hover:text-teal-dark">
                Resources <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </Link>
              <div className="nav-drop absolute left-1/2 top-full w-[380px] -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-line bg-white p-3 shadow-2xl shadow-navy/10">
                  {RESOURCES.map((r) => (
                    <Link key={r.href} href={r.href} className="block rounded-lg px-3 py-2.5 hover:bg-teal-light">
                      <span className="block text-sm font-semibold text-navy">{r.name}</span>
                      <span className="mt-0.5 block text-xs text-ink">{r.short}</span>
                    </Link>
                  ))}
                  <Link href="/calculator" className="block rounded-lg px-3 py-2.5 hover:bg-teal-light">
                    <span className="block text-sm font-semibold text-navy">Revenue Leakage Calculator</span>
                    <span className="mt-0.5 block text-xs text-ink">Estimate what billing gaps may be costing you.</span>
                  </Link>
                </div>
              </div>
            </div>
            {NAV.slice(2).map((n) => (
              <Link key={n.href} href={n.href} className="rounded-md px-3 py-2 text-[15px] font-medium text-navy hover:bg-teal-light hover:text-teal-dark">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm hidden sm:inline-flex" data-cta="whatsapp-header">
              <WhatsAppIcon /> Free Audit
            </a>
            <MobileMenu
              services={SERVICES.map((s) => ({ href: `/${s.slug}`, label: s.name }))}
              resources={[...RESOURCES.map((r) => ({ href: r.href, label: r.name })), { href: "/calculator", label: "Revenue Leakage Calculator" }]}
              nav={NAV.slice(2)}
              waHref={waLink()}
            />
          </div>
        </div>
      </header>
    </>
  );
}
