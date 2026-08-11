"use client";

import { create } from 'zustand';
import Link from 'next/link';

// ── Zustand store ─────────────────────────────────────────────────────────────

interface CalcInputs {
  grossCharges:     number | '';
  contractualAdj:   number | '';
  paymentsReceived: number | '';
  denialRate:       number | '';
  firstPassRate:    number | '';
  practiceSize:     'solo' | 'small' | 'large' | '';
  staffCount:       number | '';
  avgSalary:        number | '';
}

interface CalcResults {
  ncr:              number;
  annualRevLost:    number;
  overhead:         number;
  missedModifier:   number;
  timelyFilingRisk: number;
  netRecovery:      number;
}

interface CalcStore {
  step:     number;
  inputs:   CalcInputs;
  results:  CalcResults | null;
  setStep:  (s: number) => void;
  setInput: (k: keyof CalcInputs, v: string) => void;
  compute:  () => void;
}

const EMPTY_INPUTS: CalcInputs = {
  grossCharges: '', contractualAdj: '', paymentsReceived: '',
  denialRate: '', firstPassRate: '', practiceSize: '',
  staffCount: '', avgSalary: '',
};

function toNum(v: number | ''): number { return v === '' ? 0 : v; }

const useCalcStore = create<CalcStore>((set, get) => ({
  step: 1,
  inputs: EMPTY_INPUTS,
  results: null,

  setStep: (step) => set({ step }),

  setInput: (k, v) => {
    const parsed = v === '' ? '' : Number(v);
    set((s) => ({ inputs: { ...s.inputs, [k]: k === 'practiceSize' ? v : parsed } }));
  },

  compute: () => {
    const { inputs: i } = get();
    const gross  = toNum(i.grossCharges);
    const adj    = toNum(i.contractualAdj);
    const paid   = toNum(i.paymentsReceived);
    const dr     = toNum(i.denialRate) / 100;
    const staff  = toNum(i.staffCount);
    const salary = toNum(i.avgSalary);

    const net        = gross - adj;
    const ncr        = net > 0 ? (paid / net) * 100 : 0;
    const monthlyCol = paid;
    const annualRevLost    = monthlyCol * dr * 12 * 0.60;
    const overhead         = staff * salary * 1.25;
    const missedModifier   = gross * 0.12;
    const timelyFilingRisk = (gross * 12) * 0.10;
    const outsourcingCost  = (i.practiceSize === 'solo' ? 1500 : i.practiceSize === 'small' ? 2500 : 3500) * 12;
    const netRecovery      = annualRevLost + missedModifier + timelyFilingRisk + Math.max(0, overhead - outsourcingCost);

    set({ results: { ncr, annualRevLost, overhead, missedModifier, timelyFilingRisk, netRecovery } });
  },
}));

// ── Helpers ───────────────────────────────────────────────────────────────────

function fmt(n: number, style: 'currency' | 'percent' = 'currency') {
  if (style === 'percent') return `${n.toFixed(1)}%`;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ProgressBar({ step }: { step: number }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        {['Practice Financials', 'Performance Metrics', 'Staff & Overhead'].map((label, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 700, marginBottom: 6,
              background: step > i + 1 ? '#0E7C7B' : step === i + 1 ? '#0E7C7B' : '#E2E8F0',
              color: step >= i + 1 ? '#FFFFFF' : '#718096',
            }}>{step > i + 1 ? '✓' : i + 1}</div>
            <span style={{ fontSize: 11, color: step >= i + 1 ? '#0E7C7B' : '#718096', fontWeight: step === i + 1 ? 700 : 400, textAlign: 'center' }}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <div style={{ height: 4, background: '#E2E8F0', borderRadius: 2, position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', borderRadius: 2, background: '#0E7C7B', width: `${((step - 1) / 2) * 100}%`, transition: 'width 0.4s ease' }} />
      </div>
    </div>
  );
}

function Field({ label, id, value, onChange, type = 'number', placeholder, prefix, hint }: {
  label: string; id: string; value: string | number; onChange: (v: string) => void;
  type?: string; placeholder?: string; prefix?: string; hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#2B2D42', marginBottom: 6 }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        {prefix && (
          <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#718096', fontSize: 15, pointerEvents: 'none' }}>
            {prefix}
          </span>
        )}
        <input
          id={id} type={type}
          value={value === '' ? '' : String(value)}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={0}
          style={{
            width: '100%', padding: prefix ? '12px 14px 12px 28px' : '12px 14px',
            border: '1px solid #E2E8F0', borderRadius: 8,
            fontSize: 15, fontFamily: 'var(--font-inter)', color: '#1A2B3C',
            background: '#FFFFFF', outline: 'none', boxSizing: 'border-box' as const,
          }}
        />
      </div>
      {hint && <p style={{ color: '#718096', fontSize: 12, marginTop: 4 }}>{hint}</p>}
    </div>
  );
}

// ── Steps ─────────────────────────────────────────────────────────────────────

function Step1() {
  const { inputs, setInput, setStep } = useCalcStore();

  function next() {
    if (!inputs.grossCharges || !inputs.contractualAdj || !inputs.paymentsReceived) {
      alert('Please fill in all Step 1 fields.');
      return;
    }
    setStep(2);
  }

  return (
    <div>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1A2B3C', marginBottom: 6 }}>Step 1 — Practice Financials</h3>
      <p style={{ color: '#4A5568', fontSize: 14, marginBottom: 24 }}>Enter your last full month&apos;s billing data.</p>
      <div style={{ display: 'grid', gap: 20, marginBottom: 32 }}>
        <Field label="Gross Monthly Charges ($)" id="grossCharges" value={inputs.grossCharges} onChange={(v) => setInput('grossCharges', v)} placeholder="250000" prefix="$" hint="Total billed amount before any adjustments." />
        <Field label="Total Contractual Adjustments ($)" id="contractualAdj" value={inputs.contractualAdj} onChange={(v) => setInput('contractualAdj', v)} placeholder="75000" prefix="$" hint="Write-offs, contractual reductions, insurance adjustments." />
        <Field label="Total Payments Received ($)" id="paymentsReceived" value={inputs.paymentsReceived} onChange={(v) => setInput('paymentsReceived', v)} placeholder="160000" prefix="$" hint="All insurance + patient payments collected." />
      </div>
      <button onClick={next} style={{ width: '100%', padding: '14px', background: '#0E7C7B', color: '#FFFFFF', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: 'var(--font-inter)' }}>
        Next: Performance Metrics →
      </button>
    </div>
  );
}

function Step2() {
  const { inputs, setInput, setStep } = useCalcStore();

  function next() {
    if (inputs.denialRate === '' || inputs.firstPassRate === '' || !inputs.practiceSize) {
      alert('Please fill in all Step 2 fields.');
      return;
    }
    setStep(3);
  }

  return (
    <div>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1A2B3C', marginBottom: 6 }}>Step 2 — Performance Metrics</h3>
      <p style={{ color: '#4A5568', fontSize: 14, marginBottom: 24 }}>Your current claim performance benchmarks.</p>
      <div style={{ display: 'grid', gap: 20, marginBottom: 32 }}>
        <Field label="Claim Denial Rate (%)" id="denialRate" value={inputs.denialRate} onChange={(v) => setInput('denialRate', v)} placeholder="8" hint="Industry average: 8-19%. Enter as a number, e.g. 8 for 8%." />
        <Field label="First-Pass Resolution Rate (%)" id="firstPassRate" value={inputs.firstPassRate} onChange={(v) => setInput('firstPassRate', v)} placeholder="85" hint="% of claims paid on first submission. Benchmark: 95%+." />
        <div>
          <label htmlFor="practiceSize" style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#2B2D42', marginBottom: 6 }}>Practice Size</label>
          <select
            id="practiceSize"
            value={inputs.practiceSize}
            onChange={(e) => setInput('practiceSize', e.target.value)}
            style={{ width: '100%', padding: '12px 14px', border: '1px solid #E2E8F0', borderRadius: 8, fontSize: 15, fontFamily: 'var(--font-inter)', color: '#1A2B3C', background: '#FFFFFF', cursor: 'pointer', boxSizing: 'border-box' as const }}
          >
            <option value="">Select size…</option>
            <option value="solo">Solo Physician</option>
            <option value="small">Small Group (2–5)</option>
            <option value="large">Large Group (6+)</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <button onClick={() => setStep(1)} style={{ padding: '13px', background: '#F7FAFC', color: '#4A5568', border: '1px solid #E2E8F0', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'var(--font-inter)' }}>
          ← Back
        </button>
        <button onClick={next} style={{ padding: '13px', background: '#0E7C7B', color: '#FFFFFF', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'var(--font-inter)' }}>
          Next: Staff & Overhead →
        </button>
      </div>
    </div>
  );
}

function Step3() {
  const { inputs, setInput, setStep, compute } = useCalcStore();

  function calculate() {
    if (inputs.staffCount === '' || inputs.avgSalary === '') {
      alert('Please fill in all Step 3 fields.');
      return;
    }
    compute();
    setStep(4);
  }

  return (
    <div>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1A2B3C', marginBottom: 6 }}>Step 3 — Staff & Overhead</h3>
      <p style={{ color: '#4A5568', fontSize: 14, marginBottom: 24 }}>In-house billing staff costs.</p>
      <div style={{ display: 'grid', gap: 20, marginBottom: 32 }}>
        <Field label="In-House Billing Staff Count" id="staffCount" value={inputs.staffCount} onChange={(v) => setInput('staffCount', v)} placeholder="2" hint="Full-time billing/coding staff headcount." />
        <Field label="Average Staff Salary ($/year)" id="avgSalary" value={inputs.avgSalary} onChange={(v) => setInput('avgSalary', v)} placeholder="52000" prefix="$" hint="Average annual salary per billing staff member." />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <button onClick={() => setStep(2)} style={{ padding: '13px', background: '#F7FAFC', color: '#4A5568', border: '1px solid #E2E8F0', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'var(--font-inter)' }}>
          ← Back
        </button>
        <button onClick={calculate} style={{ padding: '13px', background: '#0E7C7B', color: '#FFFFFF', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'var(--font-inter)' }}>
          Calculate My Recovery →
        </button>
      </div>
    </div>
  );
}

function Results() {
  const { results } = useCalcStore();
  if (!results) return null;

  const rows = [
    { label: 'Net Collection Rate',                value: fmt(results.ncr, 'percent'),  note: results.ncr >= 95 ? '✅ Above benchmark' : '⚠️ Below 95% benchmark', color: results.ncr >= 95 ? '#276749' : '#D97706' },
    { label: 'Annual Revenue Lost to Denials',     value: fmt(results.annualRevLost),    note: 'Based on denial rate × 60% recovery', color: '#E53E3E' },
    { label: 'Missed Modifier Revenue (est.)',     value: fmt(results.missedModifier),   note: '~12% of gross charges left unbilled',  color: '#D97706' },
    { label: 'Timely Filing Risk (annual)',        value: fmt(results.timelyFilingRisk), note: '10% of annual gross at risk',          color: '#D97706' },
    { label: 'In-House Billing Overhead (annual)', value: fmt(results.overhead),         note: 'Staff × salary × 1.25 (benefits)',     color: '#4A5568' },
  ];

  return (
    <div>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1A2B3C', marginBottom: 6 }}>Your Revenue Recovery Estimate</h3>
      <p style={{ color: '#4A5568', fontSize: 14, marginBottom: 24 }}>Here&apos;s your personalized breakdown:</p>

      {rows.map((row, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid #E2E8F0' }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#2B2D42' }}>{row.label}</div>
            <div style={{ fontSize: 12, color: row.color }}>{row.note}</div>
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: row.color }}>{row.value}</div>
        </div>
      ))}

      <div style={{ marginTop: 20, padding: '20px', background: 'linear-gradient(135deg, #0E7C7B, #065F5E)', borderRadius: 12 }}>
        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, marginBottom: 4 }}>Net Recovery Opportunity</div>
        <div style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, color: '#FFFFFF' }}>{fmt(results.netRecovery)}</div>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 4 }}>estimated annual recovery from outsourcing to OBGYNBillingPro</div>
      </div>

      <Link href="/contact" style={{
        display: 'block', marginTop: 20, padding: '14px', textAlign: 'center',
        background: '#0E7C7B', color: '#FFFFFF', borderRadius: 8,
        fontWeight: 700, fontSize: 14, letterSpacing: '0.05em',
        textTransform: 'uppercase', textDecoration: 'none',
      }}>
        Get My Free Revenue Audit →
      </Link>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function CalculatorClient() {
  const { step } = useCalcStore();

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 40, alignItems: 'start' }}>
        {/* Left: Steps */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '36px 32px' }}>
          <ProgressBar step={step} />
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Results />}
        </div>

        {/* Right: explainer */}
        <div>
          <div style={{ background: '#E0F4F4', borderRadius: 16, padding: '28px 24px', marginBottom: 24 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0E7C7B', marginBottom: 12 }}>
              What This Calculator Measures
            </p>
            {[
              { icon: '📊', title: 'Net Collection Rate', body: 'Your true collection efficiency after contractual adjustments — benchmark is 95%+.' },
              { icon: '💸', title: 'Denial Revenue Loss', body: 'Annual revenue lost to denied claims, accounting for 60% typical recovery rate.' },
              { icon: '🔧', title: 'Missed Modifier Revenue', body: 'Estimated unbilled revenue from missed or incorrect CPT modifier usage (~12% of gross).' },
              { icon: '⏰', title: 'Timely Filing Risk', body: '10% of annual gross charges at risk from late or failed timely filing.' },
              { icon: '💼', title: 'In-House Overhead', body: 'Total cost of billing staff including benefits (×1.25 multiplier on salary).' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 0', borderBottom: i < 4 ? '1px solid rgba(14,124,123,0.15)' : 'none' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#1A2B3C', marginBottom: 3 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: '#4A5568', lineHeight: 1.6 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#1A2B3C', borderRadius: 16, padding: '24px 22px' }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF', marginBottom: 12 }}>Industry Benchmarks</p>
            {[
              { label: 'Net Collection Rate', target: '≥ 95%' },
              { label: 'Denial Rate',          target: '< 5%' },
              { label: 'First-Pass Rate',       target: '≥ 95%' },
              { label: 'AR Days',               target: '< 35' },
            ].map((b) => (
              <div key={b.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>{b.label}</span>
                <span style={{ color: '#0E7C7B', fontWeight: 700, fontSize: 13 }}>{b.target}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
