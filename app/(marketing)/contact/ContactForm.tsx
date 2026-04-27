"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  practiceName: string;
  practiceSize: string;
  message: string;
}

const EMPTY: FormData = { name: '', email: '', phone: '', practiceName: '', practiceSize: '', message: '' };

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm]     = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

  const phone = process.env.NEXT_PUBLIC_PHONE  ?? '+1 (800) 000-0000';
  const email = process.env.NEXT_PUBLIC_EMAIL  ?? 'support@obgynbillingpro.com';

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.name.trim())                         e.name  = 'Name is required.';
    if (!/^\S+@\S+\.\S+$/.test(form.email))       e.email = 'A valid email is required.';
    if (!form.practiceName.trim())                 e.practiceName = 'Practice name is required.';
    if (!form.practiceSize)                        e.practiceSize = 'Please select a practice size.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact-form' }),
      });
      if (!res.ok) throw new Error('Request failed');
      router.push('/thank-you');
    } catch {
      setStatus('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px',
    border: '1px solid #E2E8F0', borderRadius: 8,
    fontSize: 15, fontFamily: 'var(--font-inter)',
    color: '#1A2B3C', background: '#FFFFFF',
    outline: 'none', boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 13, fontWeight: 600,
    color: '#2B2D42', marginBottom: 6,
  };
  const errStyle: React.CSSProperties = { color: '#E53E3E', fontSize: 12, marginTop: 4 };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 48, alignItems: 'start' }}>
      {/* Form */}
      <div>
        <h2 style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 700, color: '#1A2B3C', marginBottom: 8 }}>
          Tell Us About Your Practice
        </h2>
        <p style={{ color: '#4A5568', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
          Fill in the form and a CPC-OB certified specialist will respond within one business day.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
            <div>
              <label style={labelStyle} htmlFor="cf-name">Full Name *</label>
              <input
                id="cf-name" type="text" autoComplete="name"
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{ ...inputStyle, borderColor: errors.name ? '#E53E3E' : '#E2E8F0' }}
                placeholder="Dr. Jane Smith"
              />
              {errors.name && <p style={errStyle}>{errors.name}</p>}
            </div>
            <div>
              <label style={labelStyle} htmlFor="cf-email">Email Address *</label>
              <input
                id="cf-email" type="email" autoComplete="email"
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{ ...inputStyle, borderColor: errors.email ? '#E53E3E' : '#E2E8F0' }}
                placeholder="jane@mypractice.com"
              />
              {errors.email && <p style={errStyle}>{errors.email}</p>}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
            <div>
              <label style={labelStyle} htmlFor="cf-phone">Phone Number</label>
              <input
                id="cf-phone" type="tel" autoComplete="tel"
                value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inputStyle} placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="cf-practice">Practice Name *</label>
              <input
                id="cf-practice" type="text"
                value={form.practiceName} onChange={(e) => setForm({ ...form, practiceName: e.target.value })}
                style={{ ...inputStyle, borderColor: errors.practiceName ? '#E53E3E' : '#E2E8F0' }}
                placeholder="Women's Health Associates"
              />
              {errors.practiceName && <p style={errStyle}>{errors.practiceName}</p>}
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle} htmlFor="cf-size">Practice Size *</label>
            <select
              id="cf-size"
              value={form.practiceSize} onChange={(e) => setForm({ ...form, practiceSize: e.target.value })}
              style={{ ...inputStyle, borderColor: errors.practiceSize ? '#E53E3E' : '#E2E8F0', cursor: 'pointer' }}
            >
              <option value="">Select practice size…</option>
              <option value="solo">Solo Physician</option>
              <option value="small">Small Group (2–5 physicians)</option>
              <option value="large">Large Group (6+ physicians)</option>
            </select>
            {errors.practiceSize && <p style={errStyle}>{errors.practiceSize}</p>}
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={labelStyle} htmlFor="cf-message">Message (optional)</label>
            <textarea
              id="cf-message" rows={4}
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
              placeholder="Tell us about your current billing challenges…"
            />
          </div>

          {status === 'error' && (
            <p style={{ color: '#E53E3E', fontSize: 14, marginBottom: 16, padding: '10px 14px', background: '#FFF5F5', borderRadius: 8 }}>
              Something went wrong. Please try again or call us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              width: '100%', padding: '15px 24px',
              background: status === 'sending' ? '#4A9B9A' : '#0E7C7B',
              color: '#FFFFFF', border: 'none', borderRadius: 8,
              fontWeight: 600, fontSize: 15, letterSpacing: '0.04em',
              textTransform: 'uppercase', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--font-inter)',
            }}
          >
            {status === 'sending' ? 'Sending…' : 'Get My Free Revenue Audit →'}
          </button>

          <p style={{ color: '#718096', fontSize: 12, marginTop: 12, textAlign: 'center' }}>
            🔒 HIPAA Compliant · No spam · We respond within 1 business day
          </p>
        </form>
      </div>

      {/* Sidebar info */}
      <div>
        {/* Stats */}
        <div style={{ background: '#E0F4F4', borderRadius: 16, padding: '28px 24px', marginBottom: 24 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0E7C7B', marginBottom: 18 }}>
            Why practices trust us
          </p>
          {[
            { v: '98.2%', l: 'First-Pass Claim Rate' },
            { v: '200+',  l: 'OB/GYN Practices Served' },
            { v: '$4.2M+',l: 'Revenue Recovered' },
            { v: '94%',   l: 'Appeal Success Rate' },
          ].map((s) => (
            <div key={s.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(14,124,123,0.15)' }}>
              <span style={{ color: '#4A5568', fontSize: 14 }}>{s.l}</span>
              <span style={{ color: '#0E7C7B', fontWeight: 700, fontSize: 15 }}>{s.v}</span>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: 16, padding: '28px 24px', marginBottom: 24 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#2B2D42', marginBottom: 16 }}>Direct Contact</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a href={`tel:${phone}`} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#1A2B3C', textDecoration: 'none', fontSize: 15 }}>
              <span style={{ fontSize: 20 }}>📞</span>
              <div>
                <div style={{ fontWeight: 600 }}>{phone}</div>
                <div style={{ color: '#718096', fontSize: 12 }}>Mon–Fri 8am–6pm ET</div>
              </div>
            </a>
            <a href={`mailto:${email}`} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#1A2B3C', textDecoration: 'none', fontSize: 15 }}>
              <span style={{ fontSize: 20 }}>✉️</span>
              <div>
                <div style={{ fontWeight: 600 }}>{email}</div>
                <div style={{ color: '#718096', fontSize: 12 }}>24/7 monitored</div>
              </div>
            </a>
          </div>
        </div>

        {/* Compliance */}
        <div style={{ border: '1px solid rgba(14,124,123,0.2)', borderRadius: 16, padding: '20px 22px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['HIPAA Compliant', 'BAA Available', 'SOC 2 Type II', 'AAPC Certified', 'CPC-OB Coders'].map((b) => (
              <span key={b} style={{ fontSize: 11, fontWeight: 600, color: '#0E7C7B', background: '#E0F4F4', padding: '4px 12px', borderRadius: 100 }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
