# obgynbillingpro.com

Next.js 16 marketing site for OBGYNBillingPro (OB/GYN medical billing & RCM).

- `npm run dev` — local dev
- Content lives in `content/` as Markdown (services, resources, pages, blog, legal)
- New blog post: add `content/blog/<slug>.md` with frontmatter (title, description, date, category, image, service, faqs). Future dates publish automatically on that day.
- See `CLAUDE.md` for content rules (no phone numbers, no fake stats, WhatsApp CTAs).

Env vars: `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
