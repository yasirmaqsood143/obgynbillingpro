// Central site config. Contact details come from environment variables —
// never hardcode them in pages. Phone numbers are intentionally NOT displayed
// anywhere on the site; WhatsApp is the primary contact channel.

export const SITE = {
  name: "OBGYNBillingPro",
  legalName: "OBGYN Billing Pro",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://obgynbillingpro.com").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_EMAIL || "obgynbillingpro@gmail.com",
  experience: "8+ years",
  tagline: "Specialized OB/GYN medical billing & revenue cycle management",
} as const;

const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923447864656").replace(/\D/g, "");

export const WA_DEFAULT_MESSAGE =
  "Hi! I'd like a free OB/GYN billing audit for my practice.";

/** Builds a WhatsApp click-to-chat link with a prefilled message. */
export function waLink(message: string = WA_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** 40–55 word entity definition used in the homepage/services answer hub and Organization schema. */
export const ENTITY_DEFINITION =
  "OBGYNBillingPro (OB/GYN Billing Pro) is an OB/GYN-focused medical billing and revenue cycle management (RCM) company serving independent obstetrics, gynecology, maternal-fetal medicine, urogynecology and fertility (REI) practices across the U.S. Experienced OB/GYN coders, supported by robotic process automation (RPA), verify eligibility, scrub claims against NCCI edits, resolve denials and protect maternity reimbursement.";

export const ALTERNATE_NAMES = ["OBGYN Billing Pro", "OB/GYN Billing Pro", "OBGYNbillpro"];

export const abs = (path: string) => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
