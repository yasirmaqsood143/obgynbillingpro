import type { ImageKey } from "./images";

export type Service = {
  slug: string;
  name: string;
  short: string;
  image: ImageKey;
  codes?: string;
  group: "core" | "specialty" | "operations" | "other";
};

// Order matters: drives nav, /services hub and footer.
export const SERVICES: Service[] = [
  { slug: "global-maternity-billing", name: "Global Maternity Billing", short: "Global OB packages, split care, insurance changes mid-pregnancy and the 2027 maternity code transition.", image: "pregnantUltrasound", codes: "59400 · 59510 · 59610 · 59425", group: "core" },
  { slug: "gyn-surgery-coding", name: "GYN Surgery Coding", short: "Hysterectomy, myomectomy, laparoscopy and robotic procedures coded to the operative note.", image: "surgeryTeam", codes: "58570–58573 · 58661 · 58662", group: "core" },
  { slug: "denial-management", name: "Denial Management", short: "Root-cause denial work, corrected claims and appeals for CO-97, CO-4, CO-16 and more.", image: "reviewingDocs", codes: "CO-97 · CO-4 · CO-16 · PR-96", group: "core" },
  { slug: "revenue-cycle-management", name: "Revenue Cycle Management", short: "End-to-end RCM: eligibility, charge entry, claims, payment posting, A/R follow-up and reporting.", image: "analytics", codes: "Full-cycle RCM", group: "core" },
  { slug: "coding-audits", name: "Coding Audits", short: "Independent OB/GYN coding and documentation audits that find undercoding and compliance risk.", image: "colleaguesDocs", codes: "E/M · Surgical · Modifiers", group: "core" },
  { slug: "credentialing", name: "Credentialing & Enrollment", short: "CAQH, NPI, taxonomy 207V00000X, Medicare, Medicaid and commercial payer enrollment.", image: "signing", codes: "CAQH · PECOS · 207V00000X", group: "operations" },
  { slug: "eligibility-verification", name: "Eligibility Verification", short: "Insurance verification and prior authorization before the visit, delivery or surgery.", image: "hospitalLobby", codes: "270/271 · Prior auth", group: "operations" },
  { slug: "fee-schedule-optimization", name: "Fee Schedule Optimization", short: "Fee schedule review, payer contract analysis and underpayment recovery.", image: "calculatorStethoscope", codes: "RVU · Contract rates", group: "operations" },
  { slug: "practice-setup", name: "New Practice Billing Setup", short: "Billing infrastructure for new and growing OB/GYN practices — from enrollment to first clean claim.", image: "meeting", codes: "Launch-ready", group: "operations" },
  { slug: "telehealth-billing", name: "Telehealth Billing", short: "POS 02/10, modifiers 95 and 93, and payer-specific virtual visit rules for women's health.", image: "telehealth", codes: "POS 02 · POS 10 · Mod 95", group: "specialty" },
  { slug: "infertility-rei-billing", name: "Infertility & REI Billing", short: "IUI, IVF, fertility preservation and benefit verification for reproductive endocrinology.", image: "coupleUltrasound", codes: "58974 · 58976 · 89250+", group: "specialty" },
  { slug: "urogynecology-billing", name: "Urogynecology Billing", short: "Pelvic floor repair, sacrocolpopexy, sling and prolapse procedure coding.", image: "doctorConsult", codes: "57425 · 57288 · 57240", group: "specialty" },
  { slug: "multi-specialty-billing", name: "Other Specialties", short: "Cardiology, internal medicine, family practice and more — same process, same transparency.", image: "cardiology", codes: "Cardiology · IM · FP", group: "other" },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const RESOURCES = [
  { href: "/resources/2027-maternity-transition", name: "2027 Maternity Code Transition", short: "What replaces 59400, 59510 and the global OB package on January 1, 2027." },
  { href: "/resources/icd10-o-codes", name: "ICD-10 O Codes & Sequencing", short: "Chapter 15 pregnancy codes, sequencing rules and trimester characters." },
  { href: "/resources/obgyn-taxonomy-codes", name: "OB/GYN Taxonomy Codes", short: "207V00000X and every OB/GYN subspecialty taxonomy code explained." },
  { href: "/resources/cpt-library", name: "OB/GYN CPT Code Library", short: "Obstetric, gynecologic surgery, office procedure and LARC codes in one place." },
];
