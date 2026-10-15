"use client";

import { useMemo, useState } from "react";
import { WhatsAppIcon } from "../../components/WhatsAppIcon";

type Props = { waBase: string };

const fmt = (n: number) => (Number.isFinite(n) ? n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }) : "—");

function Field({ id, label, hint, value, onChange, prefix, suffix, step = 1000 }: { id: string; label: string; hint: string; value: number; onChange: (v: number) => void; prefix?: string; suffix?: string; step?: number }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-navy">{label}</label>
      <div className="mt-1.5 flex items-center rounded-lg border border-line bg-white focus-within:border-teal focus-within:ring-2 focus-within:ring-teal/20">
        {prefix && <span className="pl-3 text-ink">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step={step}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => onChange(e.target.value === "" ? 0 : Math.max(0, Number(e.target.value)))}
          className="w-full rounded-lg bg-transparent px-3 py-2.5 text-navy outline-none"
        />
        {suffix && <span className="pr-3 text-ink">{suffix}</span>}
      </div>
      <p className="mt-1 text-xs text-ink">{hint}</p>
    </div>
  );
}

export default function CalculatorClient({ waBase }: Props) {
  const [gross, setGross] = useState(150000);
  const [adj, setAdj] = useState(60000);
  const [paid, setPaid] = useState(80000);
  const [denial, setDenial] = useState(12);
  const [unrecovered, setUnrecovered] = useState(30);

  const r = useMemo(() => {
    const collectible = Math.max(0, gross - adj);
    const ncr = collectible > 0 ? (paid / collectible) * 100 : 0;
    const gapMonthly = Math.max(0, collectible - paid);
    const denialAnnual = collectible * (denial / 100) * (unrecovered / 100) * 12;
    return { collectible, ncr, gapMonthly, gapAnnual: gapMonthly * 12, denialAnnual };
  }, [gross, adj, paid, denial, unrecovered]);

  const message = `Hi! I used your revenue calculator. Estimated NCR: ${r.ncr.toFixed(1)}%, denial rate: ${denial}%. I'd like a free billing audit.`;
  const waHref = `${waBase}?text=${encodeURIComponent(message)}`;

  const ncrNote =
    r.ncr === 0 ? "Enter your numbers to calculate." : r.ncr >= 95 ? "Strong — focus on keeping denials and A/R in check." : r.ncr >= 90 ? "Reasonable, but there may be recoverable revenue worth reviewing." : "Worth a closer look — a meaningful share of collectible revenue isn't being collected.";

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
      <form className="space-y-5 rounded-2xl border border-line bg-mist p-6 sm:p-8" onSubmit={(e) => e.preventDefault()} aria-label="Revenue leakage calculator">
        <p className="text-lg font-bold text-navy">Your monthly numbers</p>
        <Field id="gross" label="Monthly gross charges" hint="Total billed at your fee schedule rates" value={gross} onChange={setGross} prefix="$" />
        <Field id="adj" label="Monthly contractual adjustments" hint="Charges written down to contracted rates" value={adj} onChange={setAdj} prefix="$" />
        <Field id="paid" label="Monthly payments received" hint="Insurance + patient payments posted" value={paid} onChange={setPaid} prefix="$" />
        <Field id="denial" label="First-pass claim denial rate" hint="Share of claims denied on first submission" value={denial} onChange={(v) => setDenial(Math.min(100, v))} suffix="%" step={1} />
        <div>
          <label htmlFor="unrec" className="block text-sm font-semibold text-navy">Share of denied dollars never recovered: {unrecovered}%</label>
          <input id="unrec" type="range" min={0} max={80} step={5} value={unrecovered} onChange={(e) => setUnrecovered(Number(e.target.value))} className="mt-2 w-full accent-[#0E7C7B]" />
          <p className="mt-1 text-xs text-ink">An assumption — adjust it to match your experience.</p>
        </div>
      </form>

      <div className="rounded-2xl bg-navy p-6 text-white sm:p-8" aria-live="polite">
        <p className="eyebrow !text-teal-light">Your estimate</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-5">
            <p className="text-sm text-white/70">Net collection rate</p>
            <p className="mt-1 font-mono text-3xl font-bold">{r.ncr.toFixed(1)}%</p>
          </div>
          <div className="rounded-xl bg-white/5 p-5">
            <p className="text-sm text-white/70">Expected collectible / month</p>
            <p className="mt-1 font-mono text-3xl font-bold">{fmt(r.collectible)}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-5">
            <p className="text-sm text-white/70">Collectible not yet collected / year</p>
            <p className="mt-1 font-mono text-3xl font-bold text-[#F6C177]">{fmt(r.gapAnnual)}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-5">
            <p className="text-sm text-white/70">Est. annual cost of unrecovered denials</p>
            <p className="mt-1 font-mono text-3xl font-bold text-[#F6C177]">{fmt(r.denialAnnual)}</p>
          </div>
        </div>
        <p className="mt-5 text-[15px] leading-relaxed text-white/85">{ncrNote}</p>
        <p className="mt-3 text-xs leading-relaxed text-white/60">Rough estimates only — part of the monthly gap may simply be claims not yet paid. A real audit of your claims gives you facts instead of assumptions.</p>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg mt-6 w-full" data-cta="whatsapp-calculator">
          <WhatsAppIcon />
          Get a Free Audit on WhatsApp
        </a>
      </div>
    </div>
  );
}
