// app/api/leads/route.ts
// Rate limited lead capture endpoint.
// Phase 1: logs to console. Phase 2: Prisma DB + CRM webhook.

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// ── Schema ────────────────────────────────────────────────────────────────────

const LeadSchema = z.object({
  name:         z.string().min(2, 'Name required').max(100),
  email:        z.string().email('Invalid email'),
  phone:        z.string().optional(),
  practiceName: z.string().optional(),
  practiceSize: z.enum(['solo', 'small', 'large']).optional(),
  message:      z.string().max(2000).optional(),
  source:       z.string().optional(),
  calculatorData: z.object({
    grossCharges:       z.number().optional(),
    contractualAdj:     z.number().optional(),
    paymentsReceived:   z.number().optional(),
    denialRate:         z.number().optional(),
    firstPassRate:      z.number().optional(),
    staffCount:         z.number().optional(),
    avgSalary:          z.number().optional(),
    ncr:                z.number().optional(),
    annualRevenueLost:  z.number().optional(),
    overhead:           z.number().optional(),
    netRecovery:        z.number().optional(),
  }).optional(),
});

// ── Rate limiting — in-memory (replace with @upstash/ratelimit in Phase 2) ───

const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT   = 5;
const WINDOW_MS    = 15 * 60 * 1000;

function checkRate(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// ── Handler ───────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1';

  if (!checkRate(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait 15 minutes and try again.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const lead = parsed.data;

  // Phase 1: persist to console. Zero PHI logged outside name/email.
  console.log('[LEAD_CAPTURED]', {
    name:         lead.name,
    email:        lead.email,
    source:       lead.source ?? 'unknown',
    practiceSize: lead.practiceSize,
    timestamp:    new Date().toISOString(),
  });

  // Send welcome email via Resend when key is available
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `OBGYNBillingPro <noreply@obgynbillingpro.com>`,
        to:   lead.email,
        subject: 'Your Free OB/GYN Revenue Audit — What Happens Next',
        html: `
          <h2>Hi ${lead.name},</h2>
          <p>Thank you for reaching out to OBGYNBillingPro. A member of our CPC-OB certified team will contact you within one business day to schedule your free revenue audit.</p>
          <p>In the meantime, you can <a href="https://obgynbillingpro.com/calculator">run your Revenue Leakage Calculator</a> to see a real-time estimate of what your practice may be losing.</p>
          <p>— The OBGYNBillingPro Team</p>
        `.trim(),
      });
    } catch (err) {
      console.error('[RESEND_ERROR]', (err as Error).message);
    }
  }

  return NextResponse.json({ success: true });
}
