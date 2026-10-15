import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { SERVICES, RESOURCES } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "../ui";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/75">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
              Specialized medical billing, coding and revenue cycle management for independent OB/GYN practices across the United States — backed by {SITE.experience} of hands-on billing experience.
            </p>
            <div className="mt-6 space-y-3 text-[15px]">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-white hover:text-teal-light">
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> Chat on WhatsApp
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 hover:text-white">
                <Mail className="h-5 w-5 text-teal-light" /> {SITE.email}
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="h-5 w-5 text-teal-light" /> Serving practices in all 50 states
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">OB/GYN Services</p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}><Link href={`/${s.slug}`} className="hover:text-white">{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">More Services</p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {SERVICES.slice(7).map((s) => (
                <li key={s.slug}><Link href={`/${s.slug}`} className="hover:text-white">{s.name}</Link></li>
              ))}
              <li><Link href="/services" className="font-semibold text-teal-light hover:text-white">All services →</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Resources</p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {RESOURCES.map((r) => (
                <li key={r.href}><Link href={r.href} className="hover:text-white">{r.name}</Link></li>
              ))}
              <li><Link href="/calculator" className="hover:text-white">Revenue Calculator</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/results" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/areas-we-serve" className="hover:text-white">Areas We Serve</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/hipaa" className="hover:text-white">HIPAA Notice</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
