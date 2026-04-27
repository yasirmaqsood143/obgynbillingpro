# OBGYNBillingPro — Claude Code Project Context
# obgynbillingpro.com | Next.js 14+ | April 2026
# Prepared by Yasir Maqsood | ProBuild Sites | probuildsites.com
# ⚠️ READ THIS FILE BEFORE GENERATING ANY CODE OR CONTENT

---

## 🏥 BUSINESS OVERVIEW

- **Domain:** obgynbillingpro.com
- **Service:** OB/GYN Medical Billing & Revenue Cycle Management (RCM) ONLY
- **Core Differentiator:** We ONLY bill for OB/GYN — no generalist services
- **Target Clients:** OB/GYN physicians, private practices, multi-specialty clinics, hospital-affiliated groups
- **Addressable Market:** 40,000+ active OB/GYN physicians in the US
- **Pricing:** $1,500–$4,000/month per practice retainer
- **Framework:** Next.js 14+ (App Router, React Server Components, ISR)
- **Document Version:** v3.0 Master Merged Edition — April 2026

---

## 📞 CONTACT SHORTCODES (Environment Variables)

NEVER hardcode phone or email. Always use these:

```tsx
const phone = process.env.NEXT_PUBLIC_PHONE;
const email = process.env.NEXT_PUBLIC_EMAIL;
```

In JSX: `{process.env.NEXT_PUBLIC_PHONE}` and `{process.env.NEXT_PUBLIC_EMAIL}`

Stored in `.env.local`:
```
NEXT_PUBLIC_PHONE=         ← Fill in real number
NEXT_PUBLIC_EMAIL=         ← Fill in real email
NEXT_PUBLIC_SITE_URL=https://obgynbillingpro.com
```

---

## 🎨 DESIGN SYSTEM — "MEDICAL PRO" AESTHETIC

### Color Palette (Tailwind CSS custom tokens)

| Token | Hex | Usage |
|-------|-----|-------|
| Primary (Deep Teal) | `#0E7C7B` | CTAs, headings, active states, borders |
| Primary Dark | `#065F5E` | Button hover, emphasis |
| Primary Light | `#E0F4F4` | Section backgrounds, table headers |
| Deep Navy | `#1A2B3C` | Hero text, authority headings |
| Navy Alt | `#2B2D42` | Page headers, sidebar backgrounds |
| Neutral Mid | `#4A5568` | Body text, captions |
| Neutral Light | `#F7FAFC` | Card backgrounds, alternating rows |
| Accent Blue | `#2B6CB0` | Hyperlinks, secondary CTAs |
| Olive Spruce | `#4A5F3C` | Icons, feature checkmarks |
| Success Green | `#276749` | Revenue recovered, success states |
| Warning Amber | `#D97706` | Denial rate indicators, alerts |
| Terracotta | `#E2725B` | Secondary buttons, badge backgrounds |
| Soft Linen | `#E8E5E0` | Dashboard backgrounds |
| White | `#FFFFFF` | Primary page backgrounds, modals |

### Typography

| Role | Font | Weight/Size |
|------|------|-------------|
| Display / H1 | Inter | 700 Bold — 48px / -0.02em |
| H2 | Inter | 600 SemiBold — 36px |
| H3 | Inter | 600 SemiBold — 24px |
| Body | Inter Regular | 400 — 16px / 1.7 line-height |
| Premium Hero | Playfair Display | 700 Bold — Use sparingly |
| CPT/ICD Codes | JetBrains Mono | For all medical codes |
| Labels | Inter | 400 — 12px / uppercase / +0.05em |
| Button Labels | Inter | 600 SemiBold — 14px uppercase |

Load fonts via `next/font/google`. Never use a `<link>` tag.

### Key UI Components

- **Primary CTA Button:** Deep Teal `#0E7C7B`, `rounded-md` (8px), 14px uppercase, right-arrow icon, `hover:scale(1.02)` + darken to `#065F5E`
- **Stat Counter Section (animated):** "98.2% First-Pass Rate" | "$4.2M Recovered" | "200+ Practices Served"
- **Certification Badge Row:** AAPC | AHIMA | MGMA | HIMSS logos horizontal
- **Compliance Banner:** "HIPAA Compliant | BAA Available | SOC 2 Type II (Phase 3)"
- **Sticky Header CTA:** "Get Free Revenue Audit" — persists on scroll, hamburger at 375px
- **Testimonial Cards:** Photo + name + practice name + specialty + quote
- **AR Aging Table:** 0–30 days (green) | 31–60 (yellow) | 61–90 (orange) | 90+ (red)
- **KPI Cards:** Icon + large number + label + trend arrow (up/down %)
- **Glassmorphism Calculator Gate:** Result blurred, email required to unlock
- **Exit Intent Modal (Phase 2):** "Before you go — see how much revenue you might be missing"

---

## 🗂️ TECH STACK (STRICT — DO NOT DEVIATE)

### Frontend
- **Framework:** Next.js 14+ (App Router, RSC, Server Actions, ISR)
- **Language:** TypeScript (strict mode — MANDATORY)
- **Styling:** Tailwind CSS + shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion (stat counters, transitions, scroll reveals)
- **Forms:** React Hook Form + Zod (client + server validation)
- **State:** Zustand (calculator multi-step, portal UI)
- **Charts:** Recharts (AR aging, denial trends, KPI cards)
- **Font:** next/font/google — Inter + Playfair Display + JetBrains Mono

### Backend & API
- **API:** Next.js Route Handlers (serverless, typed)
- **Database:** PostgreSQL (AWS RDS or Supabase) + Prisma ORM
- **Auth:** Clerk or NextAuth.js — FIDO2/TOTP MFA — NO SMS-only auth
- **Storage:** AWS S3 (HIPAA-eligible, BAA signed) — pre-signed URLs ONLY
- **Jobs:** Inngest (background jobs, email triggers, report generation)
- **Email:** Resend (BAA-covered) — transactional only
- **Malware:** ClamAV — scan ALL file uploads before permanent storage
- **PDF:** Puppeteer — server-side PDF generation for portal reports

### CMS & Content
- **CMS:** Sanity.io (blog posts, service page copy, CPT update articles)
- **ISR:** Service pages revalidate every 86400s (24h), blog posts every 3600s (1h)
- **Sitemap:** next-sitemap (auto-generated, submitted to GSC)

### Deployment
- **Hosting:** Vercel (frontend + serverless API routes)
- **PHI Infrastructure:** AWS (S3, RDS, Lambda) — covered under AWS BAA
- **CDN/DNS/WAF:** Cloudflare
- **CI/CD:** GitHub Actions (test → lint → typecheck → deploy)
- **Monitoring:** Sentry (NO PHI in error payloads) + Vercel Analytics + PostHog

---

## 🔒 HIPAA & SECURITY — NON-NEGOTIABLE RULES

Apply these to EVERY file that touches data:

1. **BAA required** with ALL vendors handling ePHI before go-live (AWS, Supabase/RDS, Resend, Vercel, Auth provider)
2. **Encryption:** AES-256 at rest (DB + S3), TLS 1.3+ in transit
3. **HSTS:** `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
4. **Security Headers:** CSP, X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin
5. **Auth:** Phishing-resistant MFA (FIDO2/TOTP) — 15-min session timeout — auto-logout on inactivity
6. **RBAC:** Roles: Admin | Staff | Client — least-privilege, Row-Level Security (RLS)
7. **File Uploads:** S3 pre-signed URLs ONLY — files go client → S3 directly — NEVER through app server
8. **Storage path:** `clients/{uuid}/documents/` — client-isolated
9. **Audit Logs:** Immutable, WORM — 90-day hot storage → S3 Glacier cold
10. **Zero PHI in:** client-side state, analytics, logs, console, error tracking, Sentry payloads
11. **Malware:** ClamAV scan every upload before moving to permanent S3 path
12. **Session:** 15-min access tokens, 7-day refresh, auto-logout after 15 min inactivity
13. **Rate Limiting:** On `/api/leads` and all auth endpoints (use `@upstash/ratelimit` or middleware)

```tsx
// ✅ CORRECT — pre-signed URL pattern
const presignedUrl = await getSignedUrl(s3Client, new PutObjectCommand({
  Bucket: process.env.AWS_S3_BUCKET_NAME,
  Key: `clients/${clientUuid}/documents/${fileId}`,
  ServerSideEncryption: 'aws:kms',
}), { expiresIn: 300 });

// ❌ NEVER — stream through server
app.post('/upload', (req, res) => { req.pipe(s3Stream) }) // FORBIDDEN
```

---

## 📁 PROJECT FOLDER STRUCTURE

```
src/
├── app/
│   ├── layout.tsx                          # Root layout — fonts, metadata, analytics
│   ├── page.tsx                            # Homepage (/)
│   ├── (marketing)/                        # Route group — invisible in URL
│   │   ├── about/page.tsx                  # /about
│   │   ├── services/page.tsx               # /services (hub)
│   │   ├── global-maternity-billing/page.tsx
│   │   ├── gyn-surgery-coding/page.tsx
│   │   ├── denial-management/page.tsx
│   │   ├── credentialing/page.tsx
│   │   ├── revenue-cycle-management/page.tsx
│   │   ├── coding-audits/page.tsx
│   │   ├── practice-setup/page.tsx
│   │   ├── telehealth-billing/page.tsx
│   │   ├── infertility-rei-billing/page.tsx
│   │   ├── urogynecology-billing/page.tsx
│   │   ├── eligibility-verification/page.tsx
│   │   ├── fee-schedule-optimization/page.tsx
│   │   ├── calculator/page.tsx             # /calculator (lead magnet)
│   │   ├── results/page.tsx               # /results
│   │   ├── blog/
│   │   │   ├── page.tsx                   # /blog listing
│   │   │   └── [slug]/page.tsx            # /blog/[slug] (ISR via Sanity)
│   │   ├── contact/page.tsx               # /contact
│   │   ├── assessment/page.tsx            # /assessment
│   │   ├── hipaa/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── thank-you/page.tsx
│   ├── (portal)/                          # Auth-guarded — invisible in URL
│   │   └── portal/
│   │       ├── dashboard/page.tsx
│   │       ├── documents/page.tsx
│   │       ├── reports/page.tsx
│   │       └── messages/page.tsx
│   ├── api/
│   │   ├── leads/route.ts                 # Lead capture — rate limited
│   │   ├── presign/route.ts               # S3 pre-signed URL generation
│   │   ├── reports/route.ts               # PDF generation (Puppeteer)
│   │   └── auth/[...nextauth]/route.ts    # NextAuth handler
│   ├── robots.ts                          # Block /portal /api /admin
│   └── sitemap.ts                         # Auto-sitemap via next-sitemap
├── components/
│   ├── ui/                                # shadcn/ui primitives
│   ├── layout/
│   │   ├── Header.tsx                     # Uses NEXT_PUBLIC_PHONE
│   │   └── Footer.tsx                     # Uses NEXT_PUBLIC_EMAIL
│   ├── calculator/                        # Revenue Leakage Calculator
│   ├── portal/                            # Portal-specific components
│   └── seo/                               # Schema markup components
├── lib/
│   ├── prisma.ts                          # Prisma client singleton
│   ├── s3.ts                              # AWS S3 client
│   ├── auth.ts                            # NextAuth config
│   ├── email.ts                           # Resend client + templates
│   ├── hipaa.ts                           # Audit log helpers
│   └── validations/                       # Zod schemas
├── types/
├── styles/
│   └── globals.css
└── middleware.ts                          # Auth guard for /portal
```

---

## 🌐 URL STRUCTURE — CRITICAL RULES

⚠️ Service pages use `/service-name` NOT `/services/service-name`

| Page | URL | File Path |
|------|-----|-----------|
| Homepage | `/` | `src/app/page.tsx` |
| About | `/about` | `src/app/(marketing)/about/page.tsx` |
| Services Hub | `/services` | `src/app/(marketing)/services/page.tsx` |
| Global Maternity Billing | `/global-maternity-billing` | `src/app/(marketing)/global-maternity-billing/page.tsx` |
| GYN Surgery Coding | `/gyn-surgery-coding` | `src/app/(marketing)/gyn-surgery-coding/page.tsx` |
| Denial Management | `/denial-management` | `src/app/(marketing)/denial-management/page.tsx` |
| Credentialing | `/credentialing` | `src/app/(marketing)/credentialing/page.tsx` |
| RCM | `/revenue-cycle-management` | `src/app/(marketing)/revenue-cycle-management/page.tsx` |
| Coding Audits | `/coding-audits` | `src/app/(marketing)/coding-audits/page.tsx` |
| Practice Setup | `/practice-setup` | `src/app/(marketing)/practice-setup/page.tsx` |
| Telehealth Billing | `/telehealth-billing` | `src/app/(marketing)/telehealth-billing/page.tsx` |
| Infertility/REI | `/infertility-rei-billing` | `src/app/(marketing)/infertility-rei-billing/page.tsx` |
| Urogynecology | `/urogynecology-billing` | `src/app/(marketing)/urogynecology-billing/page.tsx` |
| Eligibility | `/eligibility-verification` | `src/app/(marketing)/eligibility-verification/page.tsx` |
| Fee Schedule | `/fee-schedule-optimization` | `src/app/(marketing)/fee-schedule-optimization/page.tsx` |
| Calculator | `/calculator` | `src/app/(marketing)/calculator/page.tsx` |
| Results | `/results` | `src/app/(marketing)/results/page.tsx` |
| Blog | `/blog` | `src/app/(marketing)/blog/page.tsx` |
| Blog Post | `/blog/[slug]` | `src/app/(marketing)/blog/[slug]/page.tsx` |
| Contact | `/contact` | `src/app/(marketing)/contact/page.tsx` |
| HIPAA | `/hipaa` | `src/app/(marketing)/hipaa/page.tsx` |
| Privacy | `/privacy` | `src/app/(marketing)/privacy/page.tsx` |
| Thank You | `/thank-you` | `src/app/(marketing)/thank-you/page.tsx` |
| Portal Dashboard | `/portal/dashboard` | `src/app/(portal)/portal/dashboard/page.tsx` |
| Portal Documents | `/portal/documents` | `src/app/(portal)/portal/documents/page.tsx` |
| Portal Reports | `/portal/reports` | `src/app/(portal)/portal/reports/page.tsx` |
| Portal Messages | `/portal/messages` | `src/app/(portal)/portal/messages/page.tsx` |
| 2027 Transition | `/resources/2027-maternity-transition` | resource page |
| ICD-10 O Codes | `/resources/icd10-o-codes` | resource page |
| CPT Library | `/resources/cpt-library` | resource page |
| Whitepapers | `/resources/whitepapers` | gated lead gen |

---

## 📄 PAGE-BY-PAGE CONTENT GUIDE

### Homepage (/)
**SEO Title:** OB/GYN Billing Services │ #1 Specialized │ obgynbillingpro.com
**Primary Keyword:** OB/GYN medical billing services
**Sections:**
1. Hero — "We Only Bill for OB/GYN" + animated stat counters + CTA → /calculator
2. Pain Points vs Solutions table
3. Value proposition: Clinical Precision | Regulatory Foresight | Agentic Automation
4. Animated stats: 98.2% First-Pass Rate | $4.2M Recovered | 200+ Practices Served
5. Service cards grid → all 12 service landing pages
6. Trust signals: AAPC | AHIMA | MGMA | HIMSS badges
7. Compliance banner: HIPAA Compliant | BAA Available | SOC 2 Type II (Phase 3)
8. Testimonials carousel
9. Revenue Calculator CTA section
10. Final CTA: "Get Free Revenue Audit" → /contact

**Market Stats to include:**
- Denied amounts in outpatient settings rose 14% prior year
- Coding-related denials surged 26%
- 15–30% average revenue loss from denials
- Cost to rework a denied claim: $57.23
- 19% of in-network claims denied in 2025

---

### About Page (/about)
**SEO Title:** About Us │ OB/GYN Billing Experts │ obgynbillingpro.com
**Sections:**
1. Hero — Mission statement: "Built exclusively for OB/GYN practices"
2. Our story — Why we specialize only in OB/GYN
3. Team bios — Certifications: CPC-OB, AHIMA, AAPC
4. Certifications & credentials block
5. Compliance badges: HIPAA Compliant | BAA Available | SOC 2 Type II (Phase 3)
6. Stats: Years of experience, practices served, revenue recovered
7. CTA → /calculator or /contact

---

### Global Maternity Billing (/global-maternity-billing)
**SEO Title:** Global Maternity Billing Services │ OB/GYN Specialists
**Primary Keyword:** OB/GYN global maternity billing service
**Key CPT Codes to mention:** 59400, 59510, 59610, 59618, 59430, 59409, 59515, 59425, 59426
**Key ICD-10:** O80, O34.21, Z34, O60, O14, O30, O82
**Pain points:** Global period tracking errors, mid-pregnancy insurance changes, incorrect delivery CPT, VBAC billing, antepartum underbilling
**2027 Hook:** Service-based billing transition — shift from global to component-based
**CTA:** Free Global Maternity Billing Audit

---

### GYN Surgery Coding (/gyn-surgery-coding)
**SEO Title:** GYN Surgery Coding Services │ CPT Expert Coders
**Primary Keyword:** Gynecology surgery CPT coding service
**Key CPT Codes:** 58570, 58571, 58572, 58573, 58150, 58140, 58661, 58558, 57250, 57260, 58662, 58300, 58301
**Key Modifiers:** 51, 59, XE, XP, XS, XU, 25, 22, 50, 78, 79, 62
**Procedures:** Hysterectomy, myomectomy, laparoscopy, endometriosis, robotic (da Vinci), pelvic floor repair, LEEP, colposcopy
**ICD-10:** D25 (fibroids), N80 (endometriosis), N81 (prolapse), N83 (ovarian cyst), N87 (cervical dysplasia)
**Pain points:** Undercoding, payer downcoding, modifier errors, documentation gaps

---

### Denial Management (/denial-management)
**SEO Title:** OB/GYN Claim Denial Management │ AI-Powered
**Primary Keyword:** AI-powered OB/GYN claim denial management
**Common Denial Codes:** CO-97, CO-4, CO-22, PR-96, CO-11, CO-16, CO-18, CO-50, CO-197
**Key Stats:** $57.23 cost to rework denied claim | 19% in-network claims denied 2025 | 26% surge in coding denials
**AI Features:** Agentic denial prediction, automated root-cause analysis, AI-drafted appeal letters, CARC/RARC analysis
**Payers:** Cigna, UnitedHealthcare, Aetna, Medicare, Medicaid, BCBS, Humana, Anthem, Tricare
**CTA:** Free Denial Rate Analysis

---

### Revenue Cycle Management (/revenue-cycle-management)
**SEO Title:** OB/GYN Revenue Cycle Management │ Full RCM
**Primary Keyword:** OB/GYN revenue cycle management
**RCM Cycle steps:** Eligibility → Prior Auth → Charge Capture → Claims Submission → Payment Posting → AR Follow-up → Denial Management → Patient Collections
**KPIs to highlight:** Net Collection Rate (NCR), AR Days, First-Pass Acceptance Rate, Denial Rate, Clean Claim Rate
**EHR Integrations:** Athenahealth, eClinicalWorks, NextGen Healthcare, Kareo, DrChrono
**Practice sizes:** Solo | Small Group (2–5) | Large Group (6+) | Hospital-affiliated

---

### Physician Credentialing (/credentialing)
**SEO Title:** OB/GYN Physician Credentialing Services
**Primary Keyword:** OB/GYN physician credentialing service
**Services:** CAQH setup, payer enrollment, re-credentialing, primary source verification, NPI registration, Medicare/Medicaid enrollment, hospital privileges
**Payers:** Medicare, Medicaid, BCBS, Aetna, UHC, Cigna, Humana, Tricare + all commercial
**Taxonomy code:** 207V00000X (OB/GYN)
**Pain points:** Credentialing delays, revenue gap during enrollment, expired credentials

---

### Coding Audits (/coding-audits)
**SEO Title:** OB/GYN Medical Billing Coding Audits
**Primary Keyword:** OB/GYN medical billing coding audit
**Audit types:** Prospective, retrospective, E/M audit, surgical coding, diagnosis coding, modifier usage, charge capture
**2024 AMA Update:** E/M code selection changes — MDM vs time-based
**Risks:** Upcoding (OIG risk), undercoding (revenue loss), global maternity errors, missed LARC codes
**Certifications:** CPC-OB, AHIMA, AAPC certified audit team

---

### Practice Setup (/practice-setup)
**SEO Title:** New OB/GYN Practice Billing Setup │ Launch Ready
**Primary Keyword:** New OB/GYN practice billing setup
**Services:** EHR/PM selection, payer enrollment, fee schedule setup, charge master, CAQH, NPI, superbill design, billing policy manual, staff training
**Practice types:** Solo launch, new group, practice acquisition, hospital spin-off

---

### Telehealth Billing (/telehealth-billing)
**SEO Title:** OB/GYN Telehealth Billing Services │ 2026
**Primary Keyword:** OB/GYN telehealth billing service
**Key codes:** CPT 99213–99215 (telehealth E/M), GT modifier, 95 modifier, POS 02, POS 10, G2012, G0071
**Audio-only codes:** CPT 99441–99443, G2252
**Payer rules:** Medicare, Medicaid, Commercial, BCBS, Aetna, UHC, Cigna telehealth policies
**2026 Update:** Permanent telehealth flexibilities, audio-only billing rules

---

### Infertility/REI Billing (/infertility-rei-billing)
**SEO Title:** Infertility & REI Billing Services │ Specialists
**Primary Keyword:** REI billing for infertility clinics
**Services:** IVF billing, IUI billing, HCPCS J-codes for fertility drugs, prior auth management, fertility-specific payer rules

---

### Urogynecology Billing (/urogynecology-billing)
**SEO Title:** Urogynecology Billing & Coding Services
**Primary Keyword:** Urogynecology billing complexity coding
**Key procedures:** Pelvic floor repair, sacral colpopexy, mesh removal, urethral surgery, rectocele/cystocele repair

---

### Revenue Leakage Calculator (/calculator)
**SEO Title:** OB/GYN Revenue Leakage Calculator │ Free Tool
**Primary Keyword:** OB/GYN billing calculator
**Build:** 3-step form, Zustand state, glassmorphism email gate on result

**Input Variables:**
- Gross Monthly Charges ($)
- Total Contractual Adjustments ($)
- Total Payments Received ($)
- Claim Denial Rate (%)
- First-Pass Resolution Rate (%)
- In-house Billing Staff Count
- Avg Staff Salary ($/year)
- Practice Size (Solo / Small 2–5 / Large 6+)

**Output Formulas:**
```
NCR = Total Payments / (Gross Charges - Contractual Adjustments) × 100
Annual Revenue Lost to Denials = (Monthly Gross Collections × Denial Rate) × 12 × 0.60
In-House Overhead = Staff Count × Avg Salary × 1.25 (benefits)
Missed Modifier Revenue = Gross Charges × 0.10–0.15
Global Maternity Risk = $100–120 per pregnancy
Timely Filing Risk = 10% additional revenue loss
Net Recovery Opportunity = Revenue Lost + (Overhead - Projected Outsourcing Cost)
```

**User Flow:** Form → Blurred result → Email gate (glassmorphism overlay) → POST /api/leads → Resend email → CRM webhook → Redirect /thank-you + Calendly embed

---

### Client Portal (/portal)
**Auth:** Email + password + TOTP MFA mandatory. Session: 15-min timeout.
**Roles:** Practice Admin (full) | Staff (limited) | Billing Team (internal read/write)

**Modules:**
- Document Upload: drag-and-drop, PDF/TIFF/PNG/XLSX/CSV, 50MB/file, 500MB/session, ClamAV scan
- AR Dashboard: monthly gross charges, payments, adjustments, AR aging table (color-coded)
- Denial Trend Chart: Recharts line chart, teal fill, 6-month rolling window
- Top Denial Codes: Top 5 CARC/RARC + recommended action
- PDF Reports: Puppeteer server-side generation, downloadable monthly
- Messaging: Threaded, file attachments, email notifications, role-based visibility
- S3 Path: `clients/{uuid}/documents/`

---

## 🔍 SEO RULES (APPLY TO EVERY PAGE)

Use `generateMetadata()` in every `page.tsx`:

```tsx
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Page Title Under 60 Chars | obgynbillingpro.com',
    description: 'Under 160 chars. Include primary keyword + CTA.',
    alternates: { canonical: 'https://obgynbillingpro.com/page-url' },
    openGraph: {
      title: '...',
      description: '...',
      url: 'https://obgynbillingpro.com/page-url',
      siteName: 'OBGYNBillingPro',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: '...', description: '...' },
  };
}
```

**Schema Markup per page type:**
- Homepage: `MedicalBusiness`
- Service pages: `FAQPage`
- Blog posts: `Article`
- Calculator: `SoftwareApplication`

**Internal Linking Rule:**
- Every blog post → links to 1 service page + /calculator
- Every service page → links to 3 related blog cluster posts

**robots.ts — Block these:**
```ts
export default function robots() {
  return {
    rules: [{ userAgent: '*', disallow: ['/portal', '/api', '/admin'] }],
    sitemap: 'https://obgynbillingpro.com/sitemap.xml',
  };
}
```

**Core Web Vitals targets:**
- LCP < 2.5s — use `next/image` with `priority` on hero images
- INP < 200ms — prefer Server Components, minimize client JS
- CLS < 0.1 — always set `width` + `height` on all images
- Initial JS bundle < 100KB — dynamic imports for calculator, charts, modals

---

## 📊 PRIMARY SEO KEYWORDS (TOP TARGETS)

| Keyword | Monthly Volume | Target Page |
|---------|---------------|-------------|
| OB/GYN medical billing services | 800 | / |
| OB/GYN billing company | 500 | / |
| OB/GYN revenue cycle management | 600 | /revenue-cycle-management |
| CPT codes for OB/GYN 2026 | 1,200 | /blog |
| ICD-10 codes obstetrics 2026 | 900 | /blog |
| global maternity billing service | 300 | /global-maternity-billing |
| 2027 maternity code update | 500 | /resources/2027-maternity-transition |
| global period OB/GYN billing | 400 | /blog + /global-maternity-billing |
| outsource OB/GYN billing | 450 | / |
| OB/GYN claim denial management | 200 | /denial-management |
| gynecology surgery CPT coding service | 250 | /gyn-surgery-coding |
| infertility billing service | 300 | /infertility-rei-billing |
| OB/GYN billing calculator | 200 | /calculator |
| OB/GYN billing audit services | 220 | /coding-audits |

---

## 🚀 PHASED DEVELOPMENT ROADMAP

### Phase 1 (Months 1–3) — CURRENT PHASE
- [x] Homepage, About, Contact, HIPAA, Privacy, Thank You pages
- [ ] Revenue Leakage Calculator (/calculator) — primary lead magnet
- [ ] 7 core service pages (Maternity, GYN Surgery, Denial, RCM, Credentialing, Telehealth, Practice Setup)
- [ ] Blog infrastructure (Sanity.io CMS + 50 launch articles)
- [ ] Full SEO setup: meta tags, JSON-LD schema, sitemap, robots.txt
- [ ] GA4 + Google Search Console
- [ ] Vercel deployment + Cloudflare DNS + SSL
- [ ] Email automation: 3-email welcome sequence via Resend
- [ ] Header + Footer with NEXT_PUBLIC_PHONE and NEXT_PUBLIC_EMAIL

### Phase 2 (Months 4–8)
- [ ] NextAuth.js: email + password + mandatory TOTP MFA
- [ ] Client portal: document upload (S3 pre-signed), AR dashboard, denial trend charts
- [ ] PDF reports via Puppeteer
- [ ] Threaded in-app messaging
- [ ] EHR API bridges: Athenahealth, eClinicalWorks, NextGen
- [ ] 4 additional service pages (Infertility/REI, Urogynecology, Eligibility, Fee Schedule)
- [ ] Exit intent lead capture modal

### Phase 3 (Months 9–14)
- [ ] Agentic AI denial engine (reads CARC/RARC, drafts appeals autonomously)
- [ ] Predictive revenue integrity (pre-submission claim scrubbing)
- [ ] 2027 Maternity Transition Hub (service-based billing module)
- [ ] White-label portal option
- [ ] API Access Tier (RESTful, PM system integrations)
- [ ] SOC 2 Type II compliance audit initiation
- [ ] Affiliate/partner program

---

## ⚙️ ENVIRONMENT VARIABLES (.env.local)

```env
# Contact (shortcodes — used everywhere)
NEXT_PUBLIC_PHONE=
NEXT_PUBLIC_EMAIL=
NEXT_PUBLIC_SITE_URL=https://obgynbillingpro.com

# Database
DATABASE_URL=

# Auth
NEXTAUTH_SECRET=        # openssl rand -base64 32
NEXTAUTH_URL=https://obgynbillingpro.com

# AWS S3 (HIPAA-eligible, BAA signed)
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-east-1
AWS_S3_BUCKET_NAME=

# Email (BAA-covered)
RESEND_API_KEY=

# CMS
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_TOKEN=

# CRM (optional)
HUBSPOT_API_KEY=

# Malware scanning
CLAMAV_HOST=
CLAMAV_PORT=

# Error tracking
SENTRY_DSN=
```

⚠️ NEVER commit `.env.local` to git. It must be in `.gitignore`.

---

## ✅ PRE-LAUNCH CHECKLIST

Before every deploy, verify:

- [ ] BAAs signed with AWS, Supabase/RDS, Resend, Vercel, and all analytics tools
- [ ] SSL/TLS enforced site-wide. HSTS, CSP, X-Frame-Options configured
- [ ] NEXT_PUBLIC_PHONE + NEXT_PUBLIC_EMAIL set in Vercel environment variables
- [ ] All meta titles unique, under 60 chars. Descriptions under 160 chars
- [ ] Sitemap submitted to Google Search Console
- [ ] Schema markup validated via Rich Results Test
- [ ] Core Web Vitals passing in PageSpeed Insights (mobile + desktop)
- [ ] All images WebP/AVIF via next/image
- [ ] GA4 events firing: form submit, calculator complete, CTA click
- [ ] All lead forms → CRM. Thank-you emails triggering. Calendly tested
- [ ] Tested in Chrome, Firefox, Safari, Edge. Responsive at 375/768/1280px
- [ ] WCAG 2.2 AA compliance. All images have alt text
- [ ] No PHI in git, logs, analytics, console, or error tracking
- [ ] `.env.local` in `.gitignore`. All secrets in Vercel env vars only
- [ ] Rate limiting active on `/api/leads` and auth endpoints
- [ ] Sentry error tracking active. Uptime monitoring configured

---

## 💡 HOW TO USE THIS FILE WITH CLAUDE CODE

Just say what you want to build. Claude Code reads this file automatically:

```
Build the About page
Build the Global Maternity Billing service page  
Build the Revenue Leakage Calculator
Build the Homepage hero section
Build the client portal AR dashboard
Build the Header and Footer components
Add schema markup to the denial management page
```

No need to repeat context. This file has everything.

---

*OBGYNBillingPro.com | v3.0 | April 2026 | Confidential & Proprietary*
*Prepared by Yasir Maqsood | ProBuild Sites | probuildsites.com*
