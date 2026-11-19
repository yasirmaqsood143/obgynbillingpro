// SEO overrides kept in one place so snippet copy can be tuned without touching long Markdown files.
// - META_DESCRIPTIONS: 145–160 character meta descriptions by path. They win over front matter
//   (`metaDescription:` for services/resources, `description:` for blog/legal). The blog's visible
//   lead under the H1 still comes from the post's own `description:`.
// - RELATED: curated "Related OB/GYN Billing Guides" per page (blog slugs or /resources/... paths).
//   A page's own `related:` front matter, if present, takes priority.

export const META_DESCRIPTIONS: Record<string, string> = {
  "/blog/2027-delivery-codes-59431-59502":
    "CPT 2027 delivery codes explained: 59431 vaginal delivery, 59432 VBAC, 59502 primary and 59503 repeat cesarean, 59504 — with crosswalks from 59400 and 59510.",
  "/blog/2027-labor-management-codes-59080-59083":
    "CPT 59080, 59081, 59082 and 59083 explained: initial vs. subsequent day labor management, straightforward vs. complex criteria, per-day rules and examples.",
  "/blog/co-97-denial-code-explained":
    "Denial code CO-97 means the service is bundled into another paid service. See OB/GYN causes (global OB, NCCI, 58662), CO vs OA vs PR-97 and how to fix it.",
  "/blog/cpt-59400-explained":
    "CPT 59400: routine obstetric care with antepartum care, vaginal delivery and postpartum care. What it includes, when to split it, and its 2027 deletion.",
  "/blog/cpt-59409-vs-59410-delivery-codes":
    "CPT 59409 is vaginal delivery only; 59410 adds postpartum care. Descriptors, the MMM global period, 59430 and 59425/59426 use, and the 2027 replacement codes.",
  "/blog/cpt-99459-pelvic-exam-billing":
    "CPT 99459 pelvic exam add-on: documentation requirements, which preventive and problem E/M codes it pairs with, payer reimbursement and mistakes to avoid.",
  "/blog/cpt-code-robotic-hysterectomy":
    "Robotic-assisted total laparoscopic hysterectomy CPT codes: 58570, 58571, 58572 or 58573 by uterine weight and adnexa, and when HCPCS S2900 applies.",
  "/blog/credentialing-checklist-new-obgyn":
    "Credentialing checklist for new OB/GYN physicians, midwives and NPs: NPI, taxonomy 207V00000X, CAQH, Medicare PECOS, Medicaid, commercial plans, timelines.",
  "/blog/endometriosis-excision-cpt-coding":
    "How to code laparoscopic or robotic endometriosis excision with CPT 58662: NCCI bundling with hysterectomy, bowel or bladder work, modifier 22 and N80 codes.",
  "/blog/global-maternity-billing-by-payer":
    "Global OB billing rules by payer: how Medicaid, Medicaid managed care, Blue Cross Blue Shield, commercial plans and TRICARE differ, plus a 2027 rule table.",
  "/blog/global-maternity-billing-mistakes-2026":
    "The global maternity billing mistakes we see most: package vs. component codes, split care, VBAC coding, missed billable services and delivery diagnoses.",
  "/blog/gyn-surgery-coding-mistakes":
    "GYN surgery coding mistakes that cost revenue: wrong approach or weight tier, missed adnexal codes, unbundling, modifier 22 and 59 misuse, global errors.",
  "/blog/hipaa-compliance-billing-staff":
    "HIPAA essentials for OB/GYN billing staff: minimum necessary access, secure claim and EOB handling, patient communications, business associates, training.",
  "/blog/how-to-reduce-days-in-ar":
    "Ten steps to reduce days in A/R for an OB/GYN practice: faster charge entry, clean claims, 48-hour denial work, payer-level A/R and global maternity tracking.",
  "/blog/icd-10-prenatal-visit-z34-o09":
    "Which ICD-10 code fits a prenatal visit: Z34 for normal pregnancy, O09 for high-risk supervision, Z32 for pregnancy tests and Z3A weeks, with examples.",
  "/blog/itemized-vs-global-maternity-billing":
    "When to bill the global OB package vs. itemize antepartum, delivery and postpartum care: a decision tree, common scenarios, payer rules and the 2027 change.",
  "/blog/iui-ivf-cpt-codes":
    "IUI and IVF CPT codes: 58322 insemination, 58970 retrieval, 58974 transfer, 89250–89356 embryology lab, ICSI, PGT, cryopreservation and S-codes explained.",
  "/blog/laparoscopic-oophorectomy-ovarian-cystectomy-cpt":
    "Laparoscopic oophorectomy and ovarian cystectomy CPT codes: 58661, 58662, 58925, 58940, modifier 50 rules, robotic adnexal cases and ICD-10 N83 coding.",
  "/blog/larc-billing-iud-nexplanon-codes":
    "LARC billing: IUD insertion and removal (58300, 58301), Nexplanon implant codes 11981–11983, device J-codes, same-day E/M with modifier 25, postpartum LARC.",
  "/blog/modifier-25-well-woman-visit":
    "Billing a problem visit with a well-woman exam: modifier 25 rules, documentation requirements, Medicare G0101 and Q0091, patient cost-sharing and errors.",
  "/blog/modifier-59-xs-gyn-surgery-ncci":
    "When modifier 59 or XE, XS, XP and XU can bypass NCCI edits on GYN surgery claims: OB/GYN examples, documentation, modifier 22 alternatives and audit risk.",
  "/blog/modifier-95-vs-93-vs-gt-telehealth":
    "Modifier 95 vs 93 vs GT vs GQ: audio-video vs audio-only telehealth, POS 02 and 10, which payers want which modifier, and OB/GYN telehealth denials to avoid.",
  "/blog/multiple-o-codes-sequencing-pregnancy":
    "How to sequence multiple O codes in pregnancy: principal vs. secondary O codes, trimester characters, Z3A gestation and Z37 outcome codes, with 7 examples.",
  "/blog/myomectomy-cpt-codes":
    "Myomectomy CPT codes by approach: 58545/58546 laparoscopic or robotic, 58140/58146 abdominal, 58561 hysteroscopic, with fibroid count and 250 g weight rules.",
  "/blog/negotiating-payer-contracts-obgyn":
    "How OB/GYN practices prepare for payer contract talks: know your volume, benchmark rates against Medicare, time renewals and plan for 2027 maternity codes.",
  "/blog/ob-ultrasound-billing-cpt-76801-76817":
    "OB ultrasound CPT codes 76801–76817: choosing by gestational age and exam type, multiple gestations, transvaginal add-ons, frequency limits and diagnoses.",
  "/blog/obgyn-billing-kpis":
    "12 OB/GYN revenue cycle KPIs with formulas: net collection rate, days in A/R, denial rate, charge lag, open pregnancies — and how to judge your biller.",
  "/blog/obgyn-coding-audit-checklist":
    "Run an internal OB/GYN coding audit: sampling, global vs. itemized maternity, surgical codes, O-code specificity, modifiers, E/M levels, LARC and ultrasound.",
  "/blog/obgyn-coding-challenges-2026":
    "The biggest OB/GYN coding challenges in 2026: global maternity rules, the 2027 transition, surgical weight tiers, modifier 25, NCCI edits and telehealth.",
  "/blog/obgyn-practice-management-software-checklist":
    "OB/GYN practice management software checklist: pregnancy tracking, 2027 maternity code readiness, claim scrubbing, ERA posting, denial queues and reports.",
  "/blog/obgyn-rcm-software-vs-outsourced-billing":
    "Best OB/GYN revenue cycle management option? Compare cloud-based RCM software with outsourced billing: features, demo questions, cost and performance.",
  "/blog/outsourcing-obgyn-billing-cost":
    "What outsourced OB/GYN billing costs: percentage-of-collections vs. flat-fee pricing, what should be included, hidden fees and an in-house comparison.",
  "/blog/outsourcing-obgyn-billing-pros-cons":
    "In-house vs. outsourced OB/GYN billing: real pros and cons, how to calculate ROI, hybrid options, red flags in billing companies and a transition checklist.",
  "/blog/payer-credentialing-timeline":
    "How long payer credentialing takes for OB/GYN providers: realistic Medicare, Medicaid, managed care and commercial timelines, delays and start-date planning.",
  "/blog/pelvic-floor-procedure-coding":
    "Pelvic floor repair coding: anterior and posterior colporrhaphy, enterocele repair, apical suspension, sacrocolpopexy, slings and hysterectomy combinations.",
  "/blog/prior-authorization-obgyn-procedures":
    "OB/GYN procedures that often need prior authorization: hysterectomy, myomectomy, laparoscopy, imaging, genetic tests and infertility care, and avoiding denials.",
  "/blog/revenue-cycle-management-basics-obgyn":
    "The OB/GYN revenue cycle step by step: scheduling, eligibility, coding, claims, payment posting, denials, A/R and patient billing, and why OB cycles run long.",
  "/blog/split-maternity-care-billing-transfer-example":
    "Split maternity care billing when a patient transfers mid-pregnancy: an Arizona-to-Wisconsin repeat cesarean example with 59426, 59515, O34.212 and Z37.0.",
  "/blog/th-modifier-obstetric-billing":
    "TH modifier description: obstetrical treatment/services, prenatal or postpartum. Which Medicaid plans require it, how to use it with E/M and why 2027 matters.",
  "/blog/top-obgyn-denial-reasons":
    "Top OB/GYN claim denial reasons: eligibility, authorization, CO-97 bundling, diagnosis errors, global conflicts, credentialing and timely filing, with fixes.",
  "/blog/understanding-global-maternity-billing-guidelines":
    "Global maternity billing guidelines: what the global OB package includes, what is billed separately, the MMM global indicator, payer rules and the 2027 change.",
  "/resources/2027-maternity-transition":
    "CPT 2027 ends the global OB package: labor management 59080–59083, delivery codes 59431, 59432, 59502 and 59503, worked VBAC and transfer examples.",
  "/resources/cpt-library":
    "OB/GYN CPT code list: global OB and delivery codes with global periods, robotic hysterectomy 58570–58573, myomectomy 58545/58546, 58662 and CO-97 fixes.",
  "/resources/icd10-o-codes":
    "ICD-10-CM Chapter 15 O codes: sequencing rules for multiple O codes, trimester and fetus characters, Z34 vs O09, Z3A weeks of gestation, Z37 and O80.",
  "/resources/obgyn-taxonomy-codes":
    "The OB/GYN taxonomy code is 207V00000X. Copy every subspecialty code (MFM 207VM0101X, REI 207VE0102X and more) and learn the Medicaid TH modifier.",
  "/coding-audits":
    "Independent OB/GYN coding audits: E/M levels, GYN surgery, global maternity, modifiers and charge capture. Find undercoding and compliance risk. Free sample.",
  "/credentialing":
    "OB/GYN credentialing and payer enrollment: CAQH, NPI, taxonomy 207V00000X, Medicare PECOS, Medicaid and commercial plans, so new providers get paid on time.",
  "/denial-management":
    "OB/GYN denial management that fixes root causes: CO-97, CO-4, CO-16, CO-11 and CO-197 denials, corrected claims, appeals and aged A/R recovery. Free review.",
  "/eligibility-verification":
    "RPA-assisted eligibility verification and prior authorization for OB/GYN practices: prenatal benefits, delivery coverage and surgery auths before the visit.",
  "/fee-schedule-optimization":
    "OB/GYN fee schedule optimization: chargemaster review, payer contract analysis, RVU benchmarking, underpayment recovery and 2027 maternity code rate planning.",
  "/global-maternity-billing":
    "Global maternity billing for OB/GYN practices: 59400, 59510, 59610, split care, mid-pregnancy insurance changes and the 2027 unbundled maternity codes.",
  "/gyn-surgery-coding":
    "GYN surgery coding for hysterectomy, myomectomy, laparoscopy and robotic cases: 58570–58573, 58545, 58662, modifiers and NCCI edits coded from the op note.",
  "/infertility-rei-billing":
    "Fertility and REI billing for IVF, IUI, egg freezing and workups: benefit verification, CPT 58322, 58970, 58974, 89250–89356, S-codes and state mandates.",
  "/multi-specialty-billing":
    "Beyond OB/GYN: medical billing and RCM for cardiology, internal medicine, family practice, urology and multi-specialty groups, with one transparent process.",
  "/practice-setup":
    "Opening an OB/GYN practice? Billing set up from day one: NPI, taxonomy, payer enrollment, PM/EHR setup, fee schedule, superbills and workflows. Free consult.",
  "/revenue-cycle-management":
    "End-to-end OB/GYN revenue cycle management: eligibility, charge capture, claim scrubbing, payment posting, A/R follow-up, denials and monthly reporting.",
  "/telehealth-billing":
    "OB/GYN telehealth billing: modifier 95 vs 93 vs GT, POS 02 and 10, telemedicine E/M codes 98000–98016, audio-only rules and virtual prenatal visit policies.",
  "/urogynecology-billing":
    "Urogynecology billing for prolapse repair, sacrocolpopexy, slings, urodynamics, neuromodulation and mesh revision: correct CPT, NCCI bundling and ICD-10.",
  "/hipaa":
    "How OBGYNBillingPro protects health information as a business associate: BAAs before access, minimum necessary use, secure handling and breach response.",
  "/privacy":
    "OBGYNBillingPro privacy policy: what information this website and our WhatsApp and email conversations collect, how it is used and protected, and your choices.",
  "/terms":
    "Terms of service for the OBGYNBillingPro website, free billing resources, revenue calculator and free audit, including disclaimers on coding guidance.",
};

export const RELATED: Record<string, string[]> = {
  "/blog/2027-delivery-codes-59431-59502": ["2027-labor-management-codes-59080-59083", "/resources/2027-maternity-transition", "split-maternity-care-billing-transfer-example", "multiple-o-codes-sequencing-pregnancy"],
  "/blog/2027-labor-management-codes-59080-59083": ["2027-delivery-codes-59431-59502", "/resources/2027-maternity-transition", "split-maternity-care-billing-transfer-example", "th-modifier-obstetric-billing"],
  "/blog/co-97-denial-code-explained": ["myomectomy-cpt-codes", "endometriosis-excision-cpt-coding", "top-obgyn-denial-reasons", "cpt-code-robotic-hysterectomy"],
  "/blog/cpt-59409-vs-59410-delivery-codes": ["cpt-59400-explained", "2027-delivery-codes-59431-59502", "/resources/cpt-library", "split-maternity-care-billing-transfer-example"],
  "/blog/cpt-99459-pelvic-exam-billing": ["modifier-25-well-woman-visit", "larc-billing-iud-nexplanon-codes", "icd-10-prenatal-visit-z34-o09", "/resources/cpt-library", "co-97-denial-code-explained"],
  "/blog/cpt-code-robotic-hysterectomy": ["myomectomy-cpt-codes", "endometriosis-excision-cpt-coding", "co-97-denial-code-explained", "/resources/cpt-library"],
  "/blog/endometriosis-excision-cpt-coding": ["cpt-code-robotic-hysterectomy", "myomectomy-cpt-codes", "co-97-denial-code-explained", "modifier-59-xs-gyn-surgery-ncci", "/resources/cpt-library"],
  "/blog/global-maternity-billing-mistakes-2026": ["split-maternity-care-billing-transfer-example", "cpt-59400-explained", "2027-delivery-codes-59431-59502", "itemized-vs-global-maternity-billing"],
  "/blog/modifier-95-vs-93-vs-gt-telehealth": ["th-modifier-obstetric-billing", "cpt-99459-pelvic-exam-billing", "icd-10-prenatal-visit-z34-o09", "top-obgyn-denial-reasons"],
  "/blog/multiple-o-codes-sequencing-pregnancy": ["/resources/icd10-o-codes", "icd-10-prenatal-visit-z34-o09", "2027-delivery-codes-59431-59502", "split-maternity-care-billing-transfer-example"],
  "/blog/myomectomy-cpt-codes": ["cpt-code-robotic-hysterectomy", "endometriosis-excision-cpt-coding", "co-97-denial-code-explained", "/resources/cpt-library"],
  "/blog/obgyn-billing-kpis": ["obgyn-rcm-software-vs-outsourced-billing", "how-to-reduce-days-in-ar", "top-obgyn-denial-reasons", "outsourcing-obgyn-billing-pros-cons"],
  "/blog/obgyn-rcm-software-vs-outsourced-billing": ["obgyn-billing-kpis", "outsourcing-obgyn-billing-pros-cons", "revenue-cycle-management-basics-obgyn", "how-to-reduce-days-in-ar"],
  "/blog/split-maternity-care-billing-transfer-example": ["2027-delivery-codes-59431-59502", "global-maternity-billing-mistakes-2026", "multiple-o-codes-sequencing-pregnancy", "th-modifier-obstetric-billing"],
  "/blog/th-modifier-obstetric-billing": ["/resources/obgyn-taxonomy-codes", "icd-10-prenatal-visit-z34-o09", "split-maternity-care-billing-transfer-example", "2027-labor-management-codes-59080-59083"],
  "/resources/2027-maternity-transition": ["2027-labor-management-codes-59080-59083", "2027-delivery-codes-59431-59502", "split-maternity-care-billing-transfer-example", "th-modifier-obstetric-billing"],
  "/resources/cpt-library": ["cpt-code-robotic-hysterectomy", "myomectomy-cpt-codes", "co-97-denial-code-explained", "cpt-59409-vs-59410-delivery-codes"],
  "/resources/icd10-o-codes": ["multiple-o-codes-sequencing-pregnancy", "icd-10-prenatal-visit-z34-o09", "th-modifier-obstetric-billing", "2027-delivery-codes-59431-59502"],
  "/resources/obgyn-taxonomy-codes": ["th-modifier-obstetric-billing", "credentialing-checklist-new-obgyn", "payer-credentialing-timeline", "icd-10-prenatal-visit-z34-o09"],
};
