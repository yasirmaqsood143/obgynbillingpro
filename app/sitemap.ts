import type { MetadataRoute } from 'next';

const BASE = 'https://obgynbillingpro.com';

const blogSlugs = [
  'global-maternity-billing-mistakes-2026',
  'co-97-denial-fix-obgyn',
  'cpt-codes-obgyn-2026',
  '2027-maternity-billing-transition',
  'obgyn-revenue-leakage-calculator',
  'hipaa-security-rule-2026-obgyn',
];

const servicePages = [
  '/global-maternity-billing',
  '/gyn-surgery-coding',
  '/denial-management',
  '/revenue-cycle-management',
  '/credentialing',
  '/telehealth-billing',
  '/practice-setup',
  '/coding-audits',
  '/infertility-rei-billing',
  '/urogynecology-billing',
  '/eligibility-verification',
  '/fee-schedule-optimization',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Core pages — highest priority
    { url: BASE,                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/about`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/calculator`,    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/results`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`,          lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${BASE}/thank-you`,     lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/hipaa`,         lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE}/privacy`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },

    // Service pages — 0.9
    ...servicePages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // Blog posts — 0.8
    ...blogSlugs.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Resource pages — 0.7
    { url: `${BASE}/resources/2027-maternity-transition`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/resources/icd10-o-codes`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/resources/cpt-library`,               lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
