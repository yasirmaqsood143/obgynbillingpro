export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: number; // minutes
  date: string;
  author: string;
  content: string;
  relatedService: string;
  relatedServiceHref: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'global-maternity-billing-mistakes-2026',
    title: 'Top 5 Global Maternity Billing Mistakes Costing Your Practice Thousands',
    category: 'Maternity Billing',
    excerpt:
      'Global maternity billing is among the most complex in all of medicine. These five mistakes are costing OB/GYN practices thousands every month — and most have no idea they\'re happening.',
    readTime: 6,
    date: '2026-04-10',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Global Maternity Billing',
    relatedServiceHref: '/global-maternity-billing',
    content: `
Global maternity billing is one of the most misunderstood areas in all of medical billing. Unlike most specialties where each visit is billed independently, OB/GYN practices must manage global maternity packages that bundle dozens of services into a single code — and the rules governing when to use those codes, how to track them, and what to do when circumstances change mid-pregnancy are complex enough to confuse even experienced billers.

The result? Practices lose thousands every month to billing errors they don't even know they're making.

## Mistake 1: Wrong Global Period Start Date

The global maternity period begins at the first antepartum visit — not at the time of delivery, not at 20 weeks, not at the date of the delivery CPT code. This seems obvious, but it's one of the most common documentation errors we find during coding audits.

When the start date is wrong, the practice either:
- **Overbills**: Antepartum visits before the documented start date get billed separately, creating duplicate billing exposure
- **Underbills**: Antepartum visits after an incorrectly late start date get bundled when they should have been billed component-by-component

The fix: Train your front desk to document the exact date of the first OB visit in the EHR's designated global period field. Audit this field quarterly.

## Mistake 2: Missing Antepartum Components

CPT codes 59400 (vaginal delivery with antepartum and postpartum care) and 59510 (cesarean with antepartum and postpartum care) are global packages that include:
- A minimum of 4 antepartum visits for code 59426
- A minimum of 7 antepartum visits for code 59425

If your practice delivers a patient who had fewer than 4 antepartum visits with you — because she transferred from another provider, changed insurance mid-pregnancy, or started care late — you cannot bill the global code. You must bill component codes instead.

Billing the global code when the antepartum visit threshold hasn't been met is both a revenue mistake and a compliance risk. We see this constantly in audits.

## Mistake 3: VBAC Coding Errors

Vaginal Birth After Cesarean (VBAC) is billed with CPT 59610 or 59618, not 59400. The distinction matters because:
- 59610 includes antepartum and postpartum care
- 59618 covers only the delivery
- The payer reimbursement rates differ significantly

Many practices default to 59400 for all vaginal deliveries without checking the delivery history, leaving VBAC-specific codes unused. This creates both underbilling and incorrect documentation.

VBAC documentation should be clearly noted in the delivery record. Your billing team must review this before code selection.

## Mistake 4: Mid-Pregnancy Insurance Changes

A patient switches from Plan A to Plan B at 28 weeks. Plan A covers weeks 1–27 of antepartum care; Plan B covers delivery and postpartum. This scenario is far more common than most practices realize.

The billing error: The practice bills the global package (59400) to Plan B, which never covers more than a handful of antepartum visits. Plan B denies the global code because it wasn't responsible for the antepartum period.

The correct approach: Split the billing. Bill Plan A for antepartum care up to the coverage end date using component codes (59425 or 59426). Bill Plan B for delivery and postpartum using the appropriate delivery-only code (59409, 59515, or 59618).

Missing this split can result in $1,200–$2,800 in uncollected revenue per patient.

## Mistake 5: Postpartum Visit Underbilling

CPT 59430 covers postpartum care only — the visit(s) after delivery when not part of the global package. This code is legitimately billable when:
- The delivering provider did not provide antepartum care (the global package wasn't used)
- The patient changes providers for postpartum follow-up
- A mid-pregnancy insurance change means postpartum is being billed separately

Yet many practices never bill 59430, either because staff don't know it exists as a standalone code, or because the EHR defaulted to including it in a global bundle incorrectly.

Practices that audit their postpartum billing consistently find 59430 is their most-underbilled code, sometimes representing $8,000–$15,000 in annual missed revenue for a solo OB/GYN.

## The Bottom Line

Global maternity billing errors are systematic — if your process has a flaw, you're making the same mistake on every applicable patient. A single coding audit can identify and quantify these errors, and most corrections can be implemented within one billing cycle.

If your practice delivers 100+ babies per year, there's a statistically strong probability that at least one of these five mistakes is costing you money right now.
    `,
  },

  {
    slug: 'co-97-denial-fix-obgyn',
    title: 'How to Fix CO-97 Denials in OB/GYN Billing',
    category: 'Denial Management',
    excerpt:
      'CO-97 is one of the most common denial codes in OB/GYN billing — and one of the most preventable. Here\'s exactly what it means, why it happens, and how to appeal it successfully.',
    readTime: 6,
    date: '2026-04-05',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Denial Management',
    relatedServiceHref: '/denial-management',
    content: `
CO-97 — "The benefit for this service is included in the payment/allowance for another service/procedure that has already been adjudicated" — is one of the most common denial codes in OB/GYN billing. It's frustrating because it can indicate either a legitimate bundling rule or a payer error, and distinguishing between the two requires knowing your CPT code bundles cold.

## What CO-97 Means

When a payer returns CO-97, they're telling you they already paid for the service you're billing as part of a different payment they made on the same claim or a prior claim. They're not saying the service wasn't provided — they're saying they consider it bundled into something else.

In OB/GYN billing, CO-97 most commonly appears in these scenarios:

**Global package bundling**: You billed a separate E/M visit (99213–99215) alongside a global maternity delivery code (59400, 59510). The payer considers the E/M included in the global package.

**Surgical procedure bundling**: You billed two surgical procedures where one is considered a "component" of the other under National Correct Coding Initiative (NCCI) edits. For example, billing 58661 (laparoscopic oophorectomy) alongside 58662 (laparoscopic excision of lesion) without modifier 59 to indicate a separate, distinct service.

**Add-on code issues**: A code intended as an add-on to a primary procedure was billed without the primary, or the primary was denied, causing the add-on to be bundled with nothing.

## Why CO-97 Happens in OB/GYN

OB/GYN has a uniquely high density of NCCI bundling rules because so many procedures share anatomical sites and are commonly performed together. The surgical suite for an OB/GYN is often the same for pelvic floor repair, hysterectomy components, and adnexal surgery — and the bundling edits don't always reflect clinical reality.

Common CO-97 situations in OB/GYN:

- Postpartum care visit billed within the global package period
- Office colposcopy and LEEP billed without modifier 59 on same service date
- Hysteroscopy with biopsy where the biopsy (58100) is bundled into the hysteroscopy (58558)
- Anesthesia services billed in addition to global surgical package

## Step-by-Step Appeal Process

**Step 1: Identify the pair**
Determine which two codes triggered the CO-97. This is usually visible in the 835 ERA transaction or the paper EOB under the line-item detail.

**Step 2: Check NCCI edits**
Use CMS's NCCI edit lookup tool to determine whether the two codes have a Column 1/Column 2 relationship. If they do, check whether the edit allows a modifier to override the bundle.

**Step 3: Apply the correct modifier**
If the services were genuinely distinct (different anatomical sites, different operative sessions, separate encounters), apply modifier 59 (Distinct Procedural Service) or the appropriate X modifier (XE, XS, XP, XU) based on payer preference.

**Step 4: Draft the appeal letter**
Your appeal should include:
- Claim number and date of service
- The specific CO-97 denial and the two codes involved
- Clinical documentation showing the services were distinct
- Reference to the NCCI edit and the applicable modifier justification
- The operative report, if applicable

**Step 5: Track timely filing deadlines**
CO-97 appeals have payer-specific timely filing deadlines — typically 90–180 days from the original denial date. Track these carefully.

## Prevention Tips

**Pre-submission claim scrubbing**: Configure your PM system to flag code pairs with known NCCI bundling relationships before claims go out. Most modern EHR/PM systems have this capability.

**Modifier mapping**: Build a reference sheet for your most common procedure pairs and the modifiers that correctly unbundle them. Share it with all clinical staff who enter charges.

**Global period tracking**: For maternity-related CO-97 denials, the solution is accurate global period documentation. Every antepartum, delivery, and postpartum service needs to be coded with reference to whether the patient is inside or outside a global maternity package.

**Audit your top denial codes monthly**: If CO-97 appears in your top 5 denial codes month after month, there's a systemic coding error that needs to be identified and corrected at the source.

CO-97 denials are among the most recoverable in OB/GYN billing — the key is moving quickly, knowing your NCCI edits, and building prevention into your claim submission workflow.
    `,
  },

  {
    slug: 'cpt-codes-obgyn-2026',
    title: 'Complete CPT Code Guide for OB/GYN 2026',
    category: 'CPT Updates',
    excerpt:
      'Every major CPT code OB/GYN practices need in 2026 — global maternity packages, GYN surgery, E/M levels, and the modifier rules that determine whether you get paid.',
    readTime: 8,
    date: '2026-03-28',
    author: 'OBGYNBillingPro Team',
    relatedService: 'GYN Surgery Coding',
    relatedServiceHref: '/gyn-surgery-coding',
    content: `
OB/GYN billing covers one of the broadest CPT code ranges in any medical specialty — from routine preventive care to complex robotic surgery, from routine prenatal visits to high-risk delivery management. This guide covers the most important codes your practice needs in 2026.

## Global Maternity CPT Codes

The global maternity package codes cover bundled antepartum, delivery, and postpartum care. The correct code depends on the delivery type and which care components your practice provided.

**59400** — Routine obstetric care including antepartum care, vaginal delivery, and postpartum care. Used when you provided all components.

**59410** — Vaginal delivery only (with or without episiotomy, forceps). Use when another provider handled antepartum or postpartum care.

**59409** — Vaginal delivery only — use this when antepartum was not provided by your practice.

**59425** — Antepartum care only; 4–6 visits.

**59426** — Antepartum care only; 7 or more visits.

**59430** — Postpartum care only. Billable when you did not deliver or provide antepartum care.

**59510** — Routine obstetric care including antepartum care, cesarean delivery, and postpartum care.

**59514** — Cesarean delivery only.

**59515** — Cesarean delivery only, with postpartum care.

**59610** — VBAC with antepartum and postpartum care.

**59618** — VBAC — attempted delivery after prior cesarean, resulting in cesarean delivery, with antepartum and postpartum care.

## GYN Surgery CPT Codes

### Hysterectomy
**58150** — Total abdominal hysterectomy
**58260** — Vaginal hysterectomy, uterus ≤250g
**58570** — Laparoscopic-assisted vaginal hysterectomy (LAVH)
**58571** — Laparoscopic-assisted vaginal hysterectomy with BSO
**58572** — Laparoscopic total hysterectomy, uterus >250g
**58573** — Laparoscopic total hysterectomy, uterus >250g, with removal of tube(s) and/or ovary(s)

### Myomectomy
**58140** — Myomectomy, abdominal approach
**58545** — Laparoscopic myomectomy, single intramural or subserous myoma
**58546** — Laparoscopic myomectomy, multiple fibroids

### Laparoscopy
**58661** — Laparoscopic removal of adnexal structure
**58662** — Laparoscopic fulguration or excision of lesions of the ovary, pelvic viscera, or peritoneal surface
**58670** — Laparoscopic fulguration of oviducts

### In-Office Procedures
**57454** — Colposcopy with biopsy(ies) of the cervix
**57461** — Colposcopy with loop electrode excision procedure (LEEP)
**57505** — Endocervical curettage
**58300** — Insertion of IUD
**58301** — Removal of IUD
**58558** — Hysteroscopy, surgical with sampling and/or polypectomy

## E/M Codes (2024 AMA Guidelines Still Active in 2026)

The 2024 AMA E/M revision changed how visit complexity is determined. MDM (Medical Decision Making) is now the primary driver — not the physical exam.

**99202** — New patient, straightforward MDM (10–19 min)
**99203** — New patient, low complexity (20–29 min)
**99204** — New patient, moderate complexity (30–39 min)
**99205** — New patient, high complexity (40–54 min)
**99211** — Established patient, minimal (nurse/MA visit)
**99212** — Established patient, straightforward (10–19 min)
**99213** — Established patient, low complexity (20–29 min)
**99214** — Established patient, moderate complexity (30–39 min)
**99215** — Established patient, high complexity (40–54 min)

**Key MDM principle for OB/GYN**: A patient presenting with multiple chronic conditions (e.g., gestational diabetes + hypertension + advanced maternal age) at a prenatal visit can legitimately be coded at 99214 or 99215 based on complexity — not just time.

## Critical Modifiers for OB/GYN

**25** — Significant, separately identifiable E/M service on the same day as a procedure. Attach to the E/M code when both a procedure and a separate E/M decision were made on the same date.

**51** — Multiple procedures. Appended to secondary procedures when two or more procedures performed during the same session.

**59** — Distinct procedural service. Use when procedures are at different anatomical sites, different encounters, or not ordinarily billed together but clinically justified.

**XE, XS, XP, XU** — The X modifiers (CMS preferred over 59 for Medicare): XE (separate encounter), XS (separate structure), XP (separate practitioner), XU (unusual non-overlapping service).

**22** — Increased procedural services. Document the extra work in the operative report — this modifier requires a report, not just a modifier.

**TC / 26** — Technical Component / Professional Component. Used when billing global, professional-only, or technical-only components of procedures.

## Preventive Care Codes

**99385–99387** — New patient preventive care, various age ranges
**99391–99397** — Established patient preventive care, various age ranges
**G0101** — Cervical/vaginal cancer screening (pelvic + pap)
**Q0091** — Obtaining cervical/vaginal smear

## 2026 Key Reminders

1. IUD placement still requires correct J-code for the device supply (J7296–J7302) billed alongside 58300
2. Global maternity codes require documentation of which visits are included — always note visit count in the delivery summary
3. Modifier 59 vs. X modifiers: most commercial payers accept 59; Medicare prefers X modifiers for new unbundling situations
4. Telehealth codes (99213–99215 with modifier 95 or GT) are permanently covered for most OB/GYN services as of 2026

This guide covers core codes — your practice's specific code mix should be reviewed quarterly in a coding audit to ensure no revenue is being left on the table.
    `,
  },

  {
    slug: '2027-maternity-billing-transition',
    title: '2027 Maternity Billing Transition: What Every OB/GYN Practice Needs to Know',
    category: '2027 Transition',
    excerpt:
      'The 2027 global maternity billing transition from bundled to service-based reimbursement is the largest change to OB/GYN billing in decades. Here\'s what\'s changing and how to prepare now.',
    readTime: 7,
    date: '2026-03-20',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Global Maternity Billing',
    relatedServiceHref: '/global-maternity-billing',
    content: `
The 2027 maternity billing transition represents the most significant change to OB/GYN reimbursement in a generation. CMS has proposed moving from the current global maternity package model to a service-based (component) billing model — and if your practice is not preparing now, the revenue impact could be severe.

## What Is Changing

Under the current global maternity package model, CPT codes like 59400 (vaginal delivery with antepartum and postpartum) bundle all prenatal visits, delivery, and postpartum care into a single fee. This fee is paid once, regardless of how many visits were actually provided.

Under the proposed 2027 model, each service component would be billed separately:
- Every antepartum visit billed as a standalone E/M service
- Delivery billed as a separate procedure
- Postpartum visits billed individually
- Additional services (ultrasound, stress tests, amniocentesis) billed as always

This is fundamentally how most other specialties bill — but it's a complete operational overhaul for OB/GYN practices.

## Why CMS Is Making This Change

The shift is driven by several policy goals:
1. **Better data collection**: Under global packages, CMS cannot easily identify how many prenatal visits a patient actually received or the quality of antepartum care
2. **Telehealth integration**: The telehealth-era flexibility created billing confusion when some visits were virtual and some in-person within a global package
3. **Value-based care alignment**: Service-based billing allows payers to attach quality metrics to individual service components
4. **Equity concerns**: Global package underpayment in Medicaid has been linked to access disparities in rural areas

## Timeline (As Currently Proposed)

- **2026**: CMS publishes final rule (expected Q3 2026)
- **January 1, 2027**: New service-based codes effective for Medicare and most Medicaid programs
- **2027–2028**: Commercial payer contracts transition over 12–24 months following federal lead

Note: Many commercial payers are already preparing contract language based on the expected transition.

## How to Prepare Now

### 1. Audit Your Current Global Package Revenue

Before the transition, understand your current global maternity revenue baseline:
- How many global deliveries per month?
- Average reimbursement per global package by payer?
- Average antepartum visits per patient?
- Current postpartum visit capture rate?

This data tells you whether the transition will increase or decrease your revenue — and by how much.

### 2. Upgrade Your EHR Visit Tracking

Under service-based billing, every antepartum visit needs an independently billable E/M code (99212–99214 depending on complexity). Your EHR must:
- Create a separate charge for every visit
- Assign MDM-appropriate E/M level to each prenatal visit
- Track which services are billable vs. included

Most EHR systems will require configuration updates when the final rule is published.

### 3. Renegotiate Commercial Contracts

Global maternity rates are embedded in your current commercial contracts. As payers transition to service-based reimbursement, they will attempt to set individual visit rates that may total less than your current global package rate.

Begin contract review discussions with your major commercial payers in late 2026 — before the transition, while you still have leverage.

### 4. Update Your Fee Schedule

Your fee schedule will need to include:
- Per-visit antepartum E/M codes with appropriate charges
- Delivery-only codes with current market rates
- Postpartum visit codes

### 5. Train Your Billing and Clinical Staff

This transition changes how clinical staff documents prenatal visits. Each visit will need visit-level documentation supporting the billed E/M code — not just a "routine OB visit" note that was acceptable under the global package model.

## Revenue Impact

For practices that currently underprovide antepartum visits (delivering patients with fewer than the 13-visit standard), service-based billing may reduce revenue. For practices that routinely document high-complexity antepartum care and see patients for the full antepartum schedule, the transition could increase revenue.

The critical factor: documentation quality. Under the current model, documentation errors cost you relatively little because the global fee is predetermined. Under service-based billing, every visit's revenue depends on the documentation supporting the E/M code billed.

## What We Recommend

Start the transition preparation now — in 2026 — with a baseline coding audit that:
1. Documents your current global maternity revenue
2. Identifies documentation gaps in your antepartum visit notes
3. Quantifies the revenue impact of the transition under different scenarios
4. Creates a training plan for your clinical team

Practices that wait until Q4 2026 to prepare will struggle with the operational complexity of the transition. Practices that start in mid-2026 will be positioned to maintain or increase revenue from day one of the new model.
    `,
  },

  {
    slug: 'obgyn-revenue-leakage-calculator',
    title: 'Is Your OB/GYN Practice Losing Revenue? Use Our Free Calculator',
    category: 'Revenue Optimization',
    excerpt:
      'Most OB/GYN practices lose 15–30% of collectable revenue to billing errors, denied claims, and missed codes. Our free calculator shows you exactly how much your practice is leaving on the table.',
    readTime: 4,
    date: '2026-03-15',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Revenue Cycle Management',
    relatedServiceHref: '/revenue-cycle-management',
    content: `
Revenue leakage in OB/GYN billing isn't always visible. Unlike a denied claim — which at least shows up in your AR as an obvious problem — revenue leakage often happens silently: codes never billed, modifiers never applied, global periods never tracked, antepartum components counted wrong.

The average OB/GYN practice loses 15–30% of its collectable revenue to billing inefficiencies. For a practice generating $1.5M in annual collections, that's $225,000–$450,000 walking out the door every year.

## The Most Common Sources of OB/GYN Revenue Leakage

### Denied Claims — 19% of In-Network Claims

In 2025, 19% of in-network claims were denied by commercial payers. In OB/GYN, denial rates are often higher because of the complexity of global maternity billing, modifier requirements for surgical procedures, and telehealth coding rules.

The cost to rework a single denied claim is $57.23 in staff time and administrative overhead. If your practice submits 500 claims per month and 19% are denied, you're spending $5,400 per month just chasing denials — before counting the revenue you never recover.

### Underbilling — The Silent Killer

Underbilling is less visible than denials but often costs more. Common underbilling scenarios in OB/GYN:
- Billing 99213 when the visit complexity supports 99214
- Missing modifier 22 on complicated surgical procedures
- Not billing CPT 59430 for standalone postpartum visits
- Omitting J-codes for IUD device supply alongside 58300
- Never billing 99401–99404 for standalone preventive counseling

A single coding audit typically identifies $50,000–$200,000 in underbilled services for a mid-size OB/GYN practice.

### In-House Billing Overhead

In-house billing staff carrying average salaries of $45,000–$65,000 plus benefits represent $56,250–$81,250 per year in fully loaded cost per biller. For practices with 2–3 billers, that's $112,500–$243,750 per year in overhead.

Outsourced billing typically costs 4–7% of collections — for a practice collecting $1.5M annually, that's $60,000–$105,000 per year, often less than the cost of equivalent in-house staff while achieving higher collection rates.

### Timely Filing Failures

Every payer has a timely filing deadline — Medicare is 12 months from date of service, but many commercial payers are 90 or 180 days. Claims submitted after the timely filing window are non-recoverable. Practices with manual billing workflows frequently miss timely filing deadlines on denied claims that were never worked.

## Calculate Your Revenue Leakage

Our free Revenue Leakage Calculator takes 3 minutes to complete. You enter:
- Gross monthly charges
- Total contractual adjustments
- Total payments received
- Your current claim denial rate
- First-pass resolution rate
- Billing staff count and salary

The calculator outputs:
- Your current Net Collection Rate (NCR)
- Annual revenue lost to denials
- In-house billing overhead cost
- Estimated missed modifier revenue
- Timely filing risk exposure
- **Total Net Recovery Opportunity** — what you could be collecting that you're not

The average practice that completes the calculator discovers $80,000–$350,000 in annual revenue leakage.

## What Happens After

The calculator is free. The result is blurred until you enter your email address — and then you receive a complete personalized analysis of your practice's revenue leakage by email, along with a free 30-minute consultation to review the findings with one of our certified OB/GYN billing specialists.

No obligation. No pitch call if you don't want one. Just the data.

If you're billing $100K+ per month in gross charges and your Net Collection Rate is below 95%, there's almost certainly significant recoverable revenue sitting in your AR right now.

Use the calculator. See the number. Then decide.
    `,
  },

  {
    slug: 'hipaa-security-rule-2026-obgyn',
    title: '2026 HIPAA Security Rule Updates: What OB/GYN Practices Must Do Now',
    category: 'Compliance',
    excerpt:
      'The 2026 HIPAA Security Rule overhaul is the largest update since 2013. Every OB/GYN practice that works with a billing company handling ePHI must understand what changed — and what their business associates are required to do.',
    readTime: 7,
    date: '2026-03-10',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Credentialing',
    relatedServiceHref: '/credentialing',
    content: `
The 2026 HIPAA Security Rule update — published in January 2026 and effective 180 days after publication — is the most significant overhaul of HIPAA security requirements since the original Security Rule was finalized in 2003. For OB/GYN practices that outsource billing, understanding what changed is critical: you are responsible for ensuring your business associates comply.

## What Changed: The Biggest Updates

### 1. All Specifications Are Now Mandatory

Under the previous HIPAA Security Rule, safeguards were divided into "required" and "addressable" specifications. Required specifications had to be implemented. Addressable specifications had to be implemented OR documented with a reason why they were not.

The 2026 rule eliminates the "addressable" category. All 24 implementation specifications — previously including those previously called "addressable" — are now mandatory. This means practices can no longer document a reason for not implementing multi-factor authentication, encryption, or access controls.

### 2. Phishing-Resistant MFA Is Required

The 2026 rule explicitly requires multi-factor authentication for accessing systems containing ePHI. More importantly, it specifically mandates phishing-resistant MFA — meaning:

- **SMS-based one-time passwords (OTP) no longer satisfy the MFA requirement**
- FIDO2 hardware keys (YubiKey, Titan Key) are compliant
- TOTP authenticator apps (Google Authenticator, Authy) are compliant
- SMS codes are explicitly not sufficient

For OB/GYN practices using a billing company's client portal, your business associate must implement FIDO2 or TOTP MFA for all portal access — and must document this in your Business Associate Agreement.

### 3. Ransomware Response Plan Mandatory

The 2026 rule requires covered entities and business associates to maintain a documented ransomware incident response plan that includes:
- Detection and analysis procedures
- Containment and eradication steps
- Recovery from immutable backups
- Post-incident review and notification protocols

The plan must be tested annually and updated after any ransomware incident.

### 4. Immutable Audit Logs Required

Under the previous rule, audit log requirements were partially "addressable." The 2026 rule makes audit logging mandatory and adds a requirement that audit logs be stored in an immutable format — Write Once Read Many (WORM) storage — to prevent tampering or deletion.

Audit logs must be retained for a minimum of 6 years, with hot storage of at least 90 days.

### 5. Encryption Is Now Mandatory

While encryption was already considered best practice and effectively required by most HIPAA guidance, the 2026 rule explicitly mandates:
- AES-256 encryption for ePHI at rest
- TLS 1.3+ for ePHI in transit
- Key management documentation and rotation schedules

### 6. BAA Updates Required

Because the rule changes what business associates are required to implement, all existing Business Associate Agreements must be reviewed and updated to reflect the new mandatory requirements. BAAs that reference the old "addressable vs. required" framework may not be sufficient under the 2026 rule.

## What OB/GYN Practices Must Do

### Audit Your Business Associates

Every vendor that touches your ePHI — billing company, EHR vendor, clearinghouse, transcription service — is a business associate under HIPAA. You are responsible for ensuring they comply with the 2026 rule.

Questions to ask your billing company:
- How is ePHI encrypted at rest and in transit?
- What MFA method is required for portal access?
- Where are audit logs stored and in what format?
- Do you have a documented ransomware response plan?
- When was your BAA last updated?

### Update Your BAAs

Request updated BAAs from all business associates that reflect the 2026 mandatory requirements. If a business associate cannot provide a compliant BAA or cannot answer basic questions about their security controls, that is a material risk to your practice.

### Implement Internal Controls

Even if you don't access billing systems directly, your practice systems — EHR, patient portal, scheduling system — also handle ePHI and must comply with the 2026 rule. Common gaps in OB/GYN practices:
- Staff accessing EHR with shared passwords (violates access control requirements)
- No formal workforce training documentation for the past 12 months
- PHI transmitted via regular email (not encrypted in transit)
- No formal security risk assessment conducted in the past year

### Conduct a Security Risk Assessment

The HIPAA Security Rule has always required an annual security risk assessment. Under the 2026 rule, this assessment must be more comprehensive and must specifically address:
- Ransomware exposure
- MFA gaps
- Encryption status for all systems and data flows
- Audit log completeness

## What We Do at OBGYNBillingPro

OBGYNBillingPro was built to meet the 2026 HIPAA Security Rule from the ground up:
- AES-256 encryption at rest (AWS KMS)
- TLS 1.3+ for all data in transit
- FIDO2/TOTP MFA mandatory for all portal access — SMS-only is prohibited
- WORM audit logs with 90-day hot storage and S3 Glacier archiving
- Files uploaded via S3 pre-signed URLs only — ePHI never passes through our application server
- Zero PHI in application logs, error tracking, or analytics
- Documented ransomware response plan, tested annually
- BAA provided before any ePHI is shared, updated to reflect 2026 requirements

If you're evaluating a billing partner or reviewing your current billing company's HIPAA posture, these are the questions to ask — and these are the answers you should expect.
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
