import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="OBGYNBillingPro home" className="flex shrink-0 items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-teal shadow-md shadow-teal/30">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="8" y="3" width="4" height="14" rx="1.5" fill="white" fillOpacity="0.95" />
          <rect x="3" y="8" width="14" height="4" rx="1.5" fill="white" fillOpacity="0.95" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block text-[17px] font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          OBGYNBilling<span className={light ? "text-teal-light" : "text-teal"}>Pro</span>
        </span>
        <span className={`mt-1 block text-[9.5px] font-medium uppercase tracking-[0.14em] ${light ? "text-white/60" : "text-ink"}`}>
          Women&apos;s Health RCM
        </span>
      </span>
    </Link>
  );
}
