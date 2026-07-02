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


{
    slug: 'understanding-global-maternity-billing-guidelines',
    title: 'Understanding Global Maternity Billing Guidelines for OB/GYN Practices',
    category: 'Maternity Billing',
    excerpt:
      'A breakdown of how global maternity billing works, when it applies, and where practices lose revenue by misapplying the package.',
    readTime: 4,
    date: '2026-07-05',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Global Maternity Billing',
    relatedServiceHref: '/global-maternity-billing',
    content: `
Global maternity billing bundles the full arc of a pregnancy — antepartum visits, delivery, and postpartum care — into a single claim under one CPT code. On paper it looks simple. In practice, it's one of the most misapplied billing concepts in OB/GYN care, and misapplying it is a quiet, recurring source of lost revenue.

## What the Global Package Actually Covers

The global maternity package typically includes routine antepartum visits (usually defined as more than one but fewer than a set threshold), the delivery itself, and postpartum care through six weeks. Services outside that window — a problem visit unrelated to the pregnancy, an unscheduled ultrasound for a specific complaint, or care delivered by a different provider group — should usually be billed separately, not folded into the global fee.

## Where Practices Lose Money

The most common mistake isn't billing the wrong code — it's billing everything as "part of the package" when it isn't. Complications like hyperemesis, gestational diabetes management, or a change in provider mid-pregnancy often qualify for itemized billing instead. Practices that don't distinguish between global and itemized scenarios consistently under-bill without realizing it.

Our detailed breakdown of [itemized vs. global maternity billing](/blog/itemized-vs-global-maternity-billing) walks through exactly when each approach applies.

## Getting the Diagnosis Coding Right

Global billing accuracy also depends on correct use of obstetric diagnosis codes. If you're not confident your ICD-10 O-code assignments line up with what the payer expects to see alongside a global claim, our [ICD-10 O-codes guide](/resources/icd10-o-codes) is a good reference point.

## Key Takeaways

- Global billing applies to routine, uncomplicated pregnancy care only
- Complications and provider changes usually require itemized billing
- Documentation must clearly support which model applies to each patient

Getting this distinction right consistently — across every chart, every month — is exactly the kind of detail-level work a dedicated [OB/GYN revenue cycle management](/revenue-cycle-management) partner is built for. If you want a second set of eyes on how your practice currently classifies maternity claims, [reach out for a free practice analysis](/contact).
    `,
  },

  {
    slug: 'itemized-vs-global-maternity-billing',
    title: 'Itemized vs. Global Maternity Billing: Which Applies to Your Patient?',
    category: 'Maternity Billing',
    excerpt:
      'How to decide between global maternity billing and itemized billing, with common scenarios that trip up OB/GYN practices.',
    readTime: 4,
    date: '2026-07-06',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Global Maternity Billing',
    relatedServiceHref: '/global-maternity-billing',
    content: `
One of the most frequent billing questions OB/GYN practices ask is deceptively simple: should this pregnancy be billed globally, or itemized? Getting it wrong in either direction either leaves money on the table or invites a denial.

## When Global Billing Applies

Global billing is designed for the standard case: one provider (or group), a full course of antepartum care, a single delivery, and routine postpartum follow-up, with no major complications requiring separate management. For background on what's bundled into that package, see our guide to [global maternity billing guidelines](/blog/understanding-global-maternity-billing-guidelines).

## When Itemized Billing Applies

Itemized billing becomes the correct approach when the standard package breaks down — a patient transfers care mid-pregnancy, a miscarriage occurs before delivery, or a high-risk complication requires services well beyond routine visits. In these situations, submitting a global claim isn't just conservative, it's usually inaccurate, and payers will often deny or partially pay the claim, triggering a correction cycle that costs staff time.

## The Transfer-of-Care Scenario

Transfers are one of the trickiest cases. When a patient switches providers partway through pregnancy, the originating provider bills only for the care actually delivered — not the full global fee. This requires precise date-of-service tracking and clear documentation of exactly which antepartum visits, if any, were completed before transfer.

## Reducing the Guesswork

The safest practices build a simple internal rule: if anything deviates from the routine path, default to reviewing the case for itemized billing rather than assuming the global package still applies. Pairing that rule with periodic [coding audits](/coding-audits) catches misclassifications before they become a pattern.

## Key Takeaways

- Default to global only for genuinely routine, single-provider pregnancies
- Complications, transfers, and early pregnancy loss usually require itemized billing
- Documentation timing (exact visit dates) is what protects itemized claims from denial

If your practice is seeing inconsistent maternity reimbursement, it's often this exact global-vs-itemized judgment call causing it. Use our [revenue leakage calculator](/calculator) to get a rough sense of what inconsistent billing classification might be costing you annually.
    `,
  },

  {
    slug: 'cpt-59400-explained',
    title: 'CPT 59400 Explained: Routine Obstetric Care Billing Guide',
    category: 'CPT Updates',
    excerpt:
      'Everything OB/GYN billers need to know about CPT 59400, what it includes, and when it\'s the wrong code to use.',
    readTime: 4,
    date: '2026-07-07',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Global Maternity Billing',
    relatedServiceHref: '/global-maternity-billing',
    content: `
CPT 59400 is the workhorse code of obstetric billing — routine obstetric care including antepartum care, vaginal delivery, and postpartum care. It's also one of the most commonly misused codes in the specialty, usually because practices apply it reflexively without checking whether the case actually qualifies.

## What 59400 Includes

Under 59400, all routine antepartum visits, the vaginal delivery, and postpartum care are bundled into one fee. It assumes a single provider group manages the case from confirmation of pregnancy through the six-week postpartum visit, with no complications requiring separate billing.

## When 59400 Is the Wrong Choice

If the delivery was cesarean rather than vaginal, 59400 doesn't apply — that falls under a separate cesarean delivery global code. If care was split between providers, or complications required additional itemized services, billing 59400 in full will likely overstate the claim and draw a denial or clawback. For the C-section equivalent and other delivery-related codes, our [CPT code library](/resources/cpt-library) is worth bookmarking.

## Common Documentation Gaps

Payers increasingly want to see a clear count of antepartum visits documented before they'll accept a global 59400 claim without question. Practices that don't track visit counts carefully sometimes bill globally for cases with too few visits to qualify, which is an easy audit flag. Cross-check this against your [global maternity billing](/global-maternity-billing) workflow to make sure visit counts are being logged consistently by front-desk and clinical staff alike.

## Key Takeaways

- 59400 covers vaginal delivery with routine antepartum and postpartum care only
- Cesarean deliveries require a different code entirely
- Visit count documentation is what payers scrutinize most

Coding accuracy on high-volume codes like 59400 has an outsized impact on monthly revenue simply because of how often it's billed. A quick internal [coding audit](/coding-audits) focused specifically on 59400 usage is often one of the highest-ROI reviews a practice can run.
    `,
  },

  {
    slug: 'icd-10-o-codes-guide',
    title: 'A Practical Guide to ICD-10 O-Codes for Obstetric Diagnoses',
    category: 'CPT Updates',
    excerpt:
      'How ICD-10 O-codes work, why trimester specificity matters, and how to avoid the coding errors that trigger denials.',
    readTime: 4,
    date: '2026-07-08',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Coding Audits',
    relatedServiceHref: '/coding-audits',
    content: `
ICD-10's O-code chapter covers pregnancy, childbirth, and the puerperium, and it's built around a level of specificity that trips up even experienced coders. Getting comfortable with how these codes are structured pays off directly in cleaner claims.

## Why Trimester Specificity Matters

Most O-codes require a trimester designation as part of the code itself, not as a separate modifier. Submitting a code without the correct trimester digit — or defaulting to "unspecified" out of habit — is one of the most common reasons obstetric claims bounce back for correction. Payers are increasingly strict about this, and unspecified codes are more likely to trigger manual review.

## Complication Codes Need Supporting Documentation

Codes for conditions like gestational diabetes, preeclampsia, or placental complications carry real weight in itemized billing decisions — they're often the exact detail that justifies moving a claim from global to itemized billing (see our comparison of [itemized vs. global maternity billing](/blog/itemized-vs-global-maternity-billing)). But the diagnosis code alone isn't enough; documentation needs to support the condition's presence and management at each relevant visit.

## Sequencing Multiple O-Codes

When a patient has more than one active condition, code sequencing matters. Payers expect the primary reason for the encounter listed first, with secondary conditions following. Getting this order wrong doesn't always cause an outright denial, but it can affect how the claim is processed and reviewed.

## Key Takeaways

- Always include the correct trimester digit — avoid unspecified codes when specificity is available
- Complication codes should be backed by matching clinical documentation
- Code sequencing affects how payers process multi-condition claims

For a full working reference alongside CPT codes for the same encounters, pair this guide with our [CPT code library](/resources/cpt-library). If your denial rate on obstetric claims feels higher than it should be, our [denial management](/denial-management) team can help pinpoint whether O-code specificity is the root cause.
    `,
  },

  {
    slug: 'co-97-denial-code-explained',
    title: 'What Is a CO-97 Denial and How OB/GYN Practices Can Fix It',
    category: 'Denial Management',
    excerpt:
      'CO-97 denials are common in OB/GYN billing. Here\'s what triggers them, how to appeal, and how to prevent recurrence.',
    readTime: 4,
    date: '2026-07-09',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Denial Management',
    relatedServiceHref: '/denial-management',
    content: `
A CO-97 denial means the payer considers a billed service to be bundled into the payment for another service already reimbursed. In OB/GYN billing, this shows up constantly around global maternity claims and postpartum visits billed separately when they shouldn't have been.

## Common OB/GYN Triggers

The most frequent cause is billing a service separately that the payer considers part of the global maternity package — a postpartum visit, a routine antepartum check, or a procedure the payer bundles under a different code. For a deeper look at exactly what falls inside that bundle, see our [global maternity billing guidelines](/blog/understanding-global-maternity-billing-guidelines).

## How to Fix an Existing CO-97 Denial

Start by confirming whether the service genuinely falls outside the bundle — sometimes it does, and the fix is an appeal with documentation showing the service was distinct (different date of service, unrelated diagnosis, or a documented complication). If the service is correctly bundled, the fix isn't an appeal — it's adjusting how the claim is submitted going forward.

## Preventing Recurrence

CO-97 denials tend to cluster around the same handful of CPT codes once a practice has one. Running a focused review of your last 90 days of CO-97s, sorted by CPT code, usually reveals a pattern — often a single front-desk or coding habit repeated across many claims. Our detailed walkthrough on [fixing CO-97 denials in OB/GYN billing](/blog/co-97-denial-fix-obgyn) covers the appeal process step by step.

## Key Takeaways

- CO-97 means the payer sees the service as bundled, not medically unnecessary
- Confirm bundling rules before appealing — sometimes the denial is correct
- Pattern-review denials by CPT code to catch recurring root causes

If CO-97 denials are a recurring line item on your aging report, it's worth having a dedicated [denial management](/denial-management) review of your last two quarters of EOBs to find the pattern before it costs another quarter of revenue.
    `,
  },

  {
    slug: 'top-obgyn-denial-reasons',
    title: 'Top 7 Reasons OB/GYN Claims Get Denied (and How to Prevent Them)',
    category: 'Denial Management',
    excerpt:
      'The most common denial reasons in OB/GYN billing, ranked by frequency, with practical prevention steps for each.',
    readTime: 4,
    date: '2026-07-10',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Denial Management',
    relatedServiceHref: '/denial-management',
    content: `
Denials rarely come from one dramatic mistake — they come from a handful of small, repeatable errors that show up across hundreds of claims a month. Here are the seven most common denial reasons we see in OB/GYN billing, and what actually prevents each one.

## 1. Eligibility Not Verified at Time of Service

Coverage lapses and plan changes are the single most preventable denial cause. A same-day eligibility check, not just one done at scheduling, closes this gap. Our [eligibility verification best practices](/blog/eligibility-verification-best-practices) guide covers exactly how to build this into front-desk workflow.

## 2. Missing or Incorrect Prior Authorization

Certain procedures — many gynecological surgeries and some infertility treatments — require authorization before the claim is even submitted. See our breakdown of [which OB/GYN procedures typically require prior authorization](/blog/prior-authorization-obgyn-procedures).

## 3. Bundled Service Denials (CO-97)

Billing a service separately that the payer considers bundled into another. Our dedicated guide on [CO-97 denials](/blog/co-97-denial-code-explained) covers this in depth.

## 4. Unspecified or Missing Trimester Codes

O-codes without the correct trimester digit are an easy, avoidable denial trigger — see our [ICD-10 O-codes guide](/blog/icd-10-o-codes-guide).

## 5. Global Period Conflicts

Billing a follow-up visit separately during a procedure's global period, when it should be bundled.

## 6. Credentialing Gaps

Claims submitted under a provider not yet fully credentialed with that specific payer are denied outright, regardless of medical necessity. See our [credentialing checklist](/blog/credentialing-checklist-new-obgyn).

## 7. Timely Filing Limits

Every payer has a filing deadline, and OB/GYN claims — with their bundled, delayed-submission nature — are especially vulnerable to missing it.

## Key Takeaways

- Most denials trace back to front-end verification gaps, not coding errors
- Fixing the top 2-3 reasons usually resolves the majority of denial volume
- Denial patterns should be reviewed monthly, not just when cash flow tightens

A structured [denial management](/denial-management) process — one that categorizes and trends denials rather than just resubmitting them — is what separates practices with a shrinking denial rate from ones stuck fighting the same fires every month.
    `,
  },

  {
    slug: 'gyn-surgery-coding-mistakes',
    title: 'Common Gynecological Surgery Coding Mistakes That Cost Practices Revenue',
    category: 'GYN Surgery',
    excerpt:
      'The recurring coding errors in gynecological surgery billing, from bundling issues to modifier misuse.',
    readTime: 4,
    date: '2026-07-11',
    author: 'OBGYNBillingPro Team',
    relatedService: 'GYN Surgery Coding',
    relatedServiceHref: '/gyn-surgery-coding',
    content: `
Gynecological surgery coding involves more moving parts than most other areas of OB/GYN billing — multiple possible approaches (open, laparoscopic, robotic), bundled components, and modifier rules that change the reimbursement outcome significantly if applied incorrectly.

## Coding the Wrong Surgical Approach

Laparoscopic and open procedures are billed under entirely different code sets, and a converted procedure — one that starts laparoscopically but converts to open — has its own specific coding rules. Billing the originally planned approach instead of what was actually documented is a common and costly error. Our [laparoscopic hysterectomy coding guide](/blog/laparoscopic-hysterectomy-coding-guide) walks through this scenario specifically.

## Missing Modifier 22 for Increased Complexity

When a procedure is significantly more complex than the code typically describes — extensive adhesions, unusual anatomy — modifier 22 allows for additional reimbursement, but only with documentation that clearly justifies the increased work. Many practices simply never use it, leaving legitimate additional revenue unclaimed.

## Unbundling Components That Should Be Bundled

Some surgical codes already include exploration, closure, and related minor procedures performed in the same session. Billing these separately triggers denials rather than additional payment — the opposite of the intended effect.

## Key Takeaways

- Code the approach actually performed and documented, not the one originally planned
- Use modifier 22 when complexity documentation supports it — don't leave it unused by default
- Know which components are bundled into major surgical codes before billing them separately

Surgical coding errors tend to be higher-dollar than routine visit coding errors simply because the codes themselves carry more value. A focused [coding audit](/coding-audits) on your surgical claims from the last two quarters is one of the fastest ways to find both over- and under-billing patterns before they compound.
    `,
  },

  {
    slug: 'laparoscopic-hysterectomy-coding-guide',
    title: 'Laparoscopic Hysterectomy Coding: A Step-by-Step Guide',
    category: 'GYN Surgery',
    excerpt:
      'A practical walkthrough of coding laparoscopic hysterectomy procedures, including conversions and bundled components.',
    readTime: 4,
    date: '2026-07-12',
    author: 'OBGYNBillingPro Team',
    relatedService: 'GYN Surgery Coding',
    relatedServiceHref: '/gyn-surgery-coding',
    content: `
Laparoscopic hysterectomy coding depends heavily on exactly what was removed, what approach was used, and whether the procedure converted to an open approach partway through. Each variation maps to a different code, and mixing them up is one of the more expensive [gynecological surgery coding mistakes](/blog/gyn-surgery-coding-mistakes) practices make.

## Step 1: Confirm the Exact Procedure Performed

Total vs. supracervical hysterectomy, with or without removal of tubes and ovaries, all map to different codes. The operative note — not the pre-op scheduling note — is the source of truth here.

## Step 2: Confirm the Approach as Documented

If the surgeon began laparoscopically and converted to open due to complications, the case is coded as an open procedure, with documentation of the conversion supporting medical necessity. Coding it as laparoscopic because that's how it was scheduled is a common and easily audited error.

## Step 3: Check for Bundled Components

Diagnostic laparoscopy performed immediately before a laparoscopic hysterectomy in the same session is typically bundled and not separately billable. Adhesiolysis performed as an incidental part of exposure is usually bundled too, unless it meets specific criteria for separate billing.

## Step 4: Apply Modifiers Where Documentation Supports Them

If complexity significantly exceeded what the code typically describes, modifier 22 may apply — see our broader discussion of this in [common gyn surgery coding mistakes](/blog/gyn-surgery-coding-mistakes).

## Key Takeaways

- The operative note determines the code, not the scheduled plan
- Conversions to open procedures require open-procedure coding, with documentation
- Confirm which components are bundled before adding separate line items

Hysterectomy coding errors are disproportionately expensive because the base reimbursement is high — small classification mistakes translate to real dollars. If your practice performs a high volume of these procedures, a specialty-specific [coding audit](/coding-audits) focused on your GYN surgical caseload is worth scheduling.
    `,
  },

  {
    slug: 'revenue-cycle-management-basics-obgyn',
    title: 'Revenue Cycle Management Basics Every OB/GYN Practice Should Know',
    category: 'Revenue Cycle Management',
    excerpt:
      'An overview of the OB/GYN revenue cycle from eligibility to payment posting, and where most practices lose money.',
    readTime: 4,
    date: '2026-07-13',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Revenue Cycle Management',
    relatedServiceHref: '/revenue-cycle-management',
    content: `
Revenue cycle management is the entire path a claim travels — from the moment a patient is scheduled to the moment payment lands in the practice's account. In OB/GYN specifically, this cycle is longer and more complex than most specialties because of bundled maternity billing and delayed claim submission.

## The Five Core Stages

Eligibility verification, charge capture and coding, claim submission, denial management, and payment posting/reconciliation. A weakness at any one stage creates downstream problems at the next — a missed eligibility check, for instance, doesn't show up as a problem until a denial arrives weeks later.

## Why OB/GYN Revenue Cycles Run Longer

Global maternity billing means a single pregnancy's revenue cycle can span nine months or more before the final claim is even submitted, since most payers require the delivery to occur before the global claim goes out. This delay makes cash flow forecasting harder and makes early-stage accuracy — correct eligibility, correct visit tracking — even more important than in specialties with shorter cycles.

## Where Practices Typically Lose the Most

Days in accounts receivable creeping upward is usually the clearest sign of revenue cycle friction. See our detailed guide on [reducing days in AR](/blog/how-to-reduce-days-in-ar) for specific tactics.

## Key Takeaways

- OB/GYN revenue cycles are structurally longer due to global billing timelines
- Weaknesses compound downstream — fix eligibility and coding accuracy first
- Days in AR is the clearest single metric for revenue cycle health

Understanding your own numbers is the first step. Our [revenue leakage calculator](/calculator) gives a quick estimate of what cycle inefficiencies might currently be costing your practice, and our [results page](/results) shows what practices have recovered after tightening these exact stages.
    `,
  },

  {
    slug: 'how-to-reduce-days-in-ar',
    title: 'How to Reduce Days in Accounts Receivable for Your OB/GYN Practice',
    category: 'Revenue Cycle Management',
    excerpt:
      'Practical steps to bring down days in AR, a key indicator of revenue cycle health for OB/GYN practices.',
    readTime: 4,
    date: '2026-07-14',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Revenue Cycle Management',
    relatedServiceHref: '/revenue-cycle-management',
    content: `
Days in accounts receivable — the average time it takes to collect payment after a service is rendered — is one of the clearest health indicators for a practice's [revenue cycle](/blog/revenue-cycle-management-basics-obgyn). When it climbs, it's rarely one problem; it's usually several small ones compounding.

## Audit Your Claim Submission Timing

Claims sitting in a batch queue for days before submission add directly to your AR clock before a payer has even seen them. Same-day or next-day submission should be the standard, not the exception.

## Work Denials Within 48 Hours

The longer a denial sits untouched, the more likely it ages past a payer's correction window entirely. A dedicated daily denial-working process — not a weekly batch review — keeps claims moving instead of stalling. Our [denial management](/denial-management) approach is built around exactly this cadence.

## Track AR by Payer, Not Just in Aggregate

A blended AR number can hide a single problem payer dragging the average up. Breaking AR down by payer usually reveals that 80% of your aged AR sits with 2-3 specific payers — which is far more actionable than a single overall number.

## Don't Let Global Maternity Claims Sit Unmonitored

Because global maternity claims can't be submitted until after delivery, it's easy for a practice to lose track of exactly when each pregnancy's claim should go out. A simple tracking system tied to expected delivery date prevents these claims from silently aging.

## Key Takeaways

- Submission delays and slow denial follow-up are the two biggest AR drivers
- Segment AR by payer to find where the real problem sits
- Track expected maternity claim submission dates proactively, not reactively

Practices that tighten these habits typically see measurable AR improvement within one to two billing cycles — see real examples on our [results page](/results), or use our [calculator](/calculator) to estimate your own potential recovery.
    `,
  },

  {
    slug: 'credentialing-checklist-new-obgyn',
    title: 'The Complete Credentialing Checklist for New OB/GYN Providers',
    category: 'Credentialing',
    excerpt:
      'A step-by-step checklist for credentialing a new OB/GYN provider with commercial and government payers.',
    readTime: 4,
    date: '2026-07-15',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Credentialing',
    relatedServiceHref: '/credentialing',
    content: `
Credentialing is the process that determines whether a provider can bill a payer at all — and it's often the single biggest delay between hiring a new OB/GYN provider and that provider generating revenue. Starting early and staying organized is the difference between a 60-day process and a 150-day one.

## Documents to Gather First

Medical license, DEA registration, board certification, malpractice insurance certificate, hospital privileges documentation, and a complete work history with no unexplained gaps — payers flag gaps immediately and will request explanation letters, adding weeks to the timeline.

## Apply to Payers in Priority Order

Start with the payers representing your largest existing patient volume, not alphabetically or randomly. A new provider who can't bill your top three payers for months is a far bigger revenue hit than delays with smaller, lower-volume plans.

## Understand Realistic Timelines

Credentialing timelines vary significantly by payer, and expecting a uniform turnaround leads to poor planning. See our detailed breakdown in [how long payer credentialing really takes](/blog/payer-credentialing-timeline).

## Don't Forget Hospital Privileging in Parallel

If the provider will deliver at a hospital, privileging is a separate process from payer credentialing and should be started at the same time, not after — the two timelines rarely align naturally, and running them sequentially adds months.

## Key Takeaways

- Start gathering documentation before day one of employment, not after
- Prioritize payer applications by patient volume, not convenience
- Run hospital privileging and payer credentialing in parallel, not in sequence

Credentialing delays are one of the most common causes of unexpected revenue gaps when [setting up a new OB/GYN practice](/practice-setup) or onboarding an associate provider. Our [credentialing services](/credentialing) are built specifically to keep these timelines as short as the payer process allows.
    `,
  },

  {
    slug: 'payer-credentialing-timeline',
    title: 'How Long Does Payer Credentialing Really Take?',
    category: 'Credentialing',
    excerpt:
      'Realistic credentialing timelines by payer type, and what actually causes delays beyond the official estimates.',
    readTime: 4,
    date: '2026-07-16',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Credentialing',
    relatedServiceHref: '/credentialing',
    content: `
Every payer publishes an official credentialing timeline, and almost no payer actually hits it consistently. Understanding the realistic range — and what causes the gap between quoted and actual timelines — helps practices plan hiring and onboarding without unpleasant revenue surprises.

## Why Official Timelines Are Optimistic

Published timelines usually assume a complete, error-free application submitted with no follow-up needed. In practice, a single missing document or an unexplained employment gap resets the review clock, and payers rarely proactively flag what's missing — the delay is often silent until someone calls to check status.

## Commercial vs. Government Payer Differences

Government payers like Medicare and Medicaid often have more standardized, if not always faster, processes. Commercial payers vary enormously by plan and region, and some maintain closed panels that require a formal request just to apply, adding an entirely separate delay before the credentialing clock even starts.

## What Actually Speeds Things Up

Proactive follow-up — checking status every one to two weeks rather than waiting for the payer to reach out — consistently shortens real-world timelines. Payers process what's in front of them; applications that go silent tend to sit.

## Planning Around Realistic Timelines

Given this variability, the practical approach is to start credentialing the moment an offer is signed, not the start date, and to build revenue projections around the possibility that some payers may take considerably longer than quoted.

## Key Takeaways

- Official timelines assume a perfect application — plan for longer
- Commercial payer timelines vary far more than government payer timelines
- Regular proactive follow-up meaningfully shortens real-world processing time

For a full walkthrough of the documentation that keeps applications moving without resets, see our [credentialing checklist for new OB/GYN providers](/blog/credentialing-checklist-new-obgyn), or explore our [credentialing services](/credentialing) if you'd rather hand the follow-up cadence to a dedicated team.
    `,
  },

  {
    slug: 'telehealth-billing-obgyn-2026',
    title: 'Telehealth Billing for OB/GYN Practices: 2026 Rules and Modifiers',
    category: 'Telehealth',
    excerpt:
      'Current telehealth billing rules for OB/GYN visits, including which visit types qualify and which modifiers apply.',
    readTime: 4,
    date: '2026-07-17',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Telehealth Billing',
    relatedServiceHref: '/telehealth-billing',
    content: `
Telehealth billing rules have stabilized somewhat since the rapid changes of the pandemic years, but OB/GYN-specific nuances still trip up practices — particularly around which visit types are appropriate for telehealth at all, and how to bill them correctly when they are.

## Which OB/GYN Visits Are Appropriate for Telehealth

Certain antepartum visits — particularly ones focused on counseling, medication review, or lab result discussion rather than physical assessment — are well suited to telehealth. Visits requiring physical exam, fetal heart tones, or in-person testing are not, regardless of payer telehealth policy, simply because the clinical need doesn't disappear.

## Modifier and Place of Service Requirements

Correctly identifying a telehealth visit to a payer requires the right combination of modifier and place-of-service code, and the specific requirement varies by payer. Our companion piece on [telehealth modifiers 95 and GT](/blog/telehealth-modifiers-explained) covers this distinction in detail.

## Billing Within a Global Maternity Package

One nuance specific to OB/GYN: if a telehealth visit is part of the routine antepartum care already covered under [global maternity billing](/global-maternity-billing), it isn't billed separately regardless of whether it happened via telehealth or in person — the delivery method doesn't change the bundling rules.

## Key Takeaways

- Telehealth appropriateness should be a clinical decision first, billing decision second
- Modifier and place-of-service requirements vary by payer — verify before relying on assumption
- Telehealth visits inside the global maternity window are still bundled, not separately billable

Telehealth billing errors tend to be quiet — claims process without an obvious denial, but at a reduced or incorrect rate. A periodic review as part of your broader [coding audit](/coding-audits) process is the most reliable way to catch this.
    `,
  },

  {
    slug: 'telehealth-modifiers-explained',
    title: 'Telehealth Modifiers 95 and GT: What OB/GYN Billers Need to Know',
    category: 'Telehealth',
    excerpt:
      'The difference between modifier 95 and GT for telehealth claims, and when each one is required.',
    readTime: 4,
    date: '2026-07-18',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Telehealth Billing',
    relatedServiceHref: '/telehealth-billing',
    content: `
Telehealth modifiers exist to tell a payer that a service, normally delivered in person, was instead delivered via audio-video technology. Two modifiers dominate this space — 95 and GT — and payer-specific preference between them is one of the more common sources of avoidable telehealth denials.

## Modifier 95

Modifier 95 indicates a synchronous telemedicine service delivered via real-time audio and video communication. It's the more widely used of the two across commercial payers and has become the default expectation in many payer policies.

## Modifier GT

Modifier GT historically indicated a similar synchronous telehealth service, primarily used in Medicare and some Medicaid billing contexts. Its usage has narrowed over time as more payers have standardized around modifier 95, but some regional and government payers still require it specifically.

## Why Getting This Wrong Causes Denials

Submitting the wrong modifier for a given payer doesn't always draw a straightforward "wrong modifier" denial — it often shows up as an outright rejection for a service the payer says isn't covered, which can be misleading during a first review. This is part of why our broader [telehealth billing guide](/blog/telehealth-billing-obgyn-2026) recommends verifying payer-specific requirements before submission rather than defaulting to one modifier across the board.

## Building a Payer Modifier Reference

The most effective long-term fix is a simple internal reference sheet listing each contracted payer and their required telehealth modifier, place-of-service code, and any visit-type restrictions. This turns a recurring judgment call into a lookup.

## Key Takeaways

- Modifier 95 and GT are not interchangeable — payer preference varies
- Wrong-modifier denials often look like coverage denials at first glance
- A payer-specific modifier reference sheet prevents repeat errors

Our full [CPT code library](/resources/cpt-library) includes modifier guidance alongside procedure codes for exactly this kind of quick reference during claim submission.
    `,
  },

  {
    slug: 'starting-new-obgyn-practice-billing-setup',
    title: 'Setting Up Billing Infrastructure for a New OB/GYN Practice',
    category: 'Practice Setup',
    excerpt:
      'A practical roadmap for building billing operations from scratch when launching a new OB/GYN practice.',
    readTime: 4,
    date: '2026-07-19',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Practice Setup',
    relatedServiceHref: '/practice-setup',
    content: `
Launching a new OB/GYN practice involves dozens of parallel workstreams, and billing infrastructure is one that's easy to underestimate — because the cost of getting it wrong doesn't show up until the first claims start getting denied or delayed months later.

## Start Credentialing Before You Have Patients

Credentialing timelines routinely stretch to several months. Practices that wait until opening day to start this process often spend their first quarter unable to bill several major payers. See our full [credentialing checklist](/blog/credentialing-checklist-new-obgyn) for a head start.

## Choose a Billing Software That Matches Your Volume

A system built for a small solo practice will strain under a multi-provider group, and an enterprise system can be needlessly complex for a small practice. Match the tool to realistic patient volume projections, not aspirational ones.

## Build Your Fee Schedule Deliberately

New practices often inherit a fee schedule from a template or a previous employer's numbers rather than building one intentionally. Our guide on [fee schedule optimization](/blog/fee-schedule-optimization-guide) covers how to approach this from scratch.

## Decide Early: In-House or Outsourced Billing

This decision shapes hiring, software, and workflow design from day one, and reversing it later is disruptive. Our comparison of [outsourcing OB/GYN billing pros and cons](/blog/outsourcing-obgyn-billing-pros-cons) can help frame the decision.

## Key Takeaways

- Credentialing lead time is the most underestimated launch timeline
- Software and fee schedules should match actual, not hoped-for, patient volume
- The in-house vs. outsourced billing decision is easier to make right the first time than to reverse

For practices actively in the launch phase, our [practice setup services](/practice-setup) are designed to compress this timeline and avoid the most common first-year revenue gaps.
    `,
  },

  {
    slug: 'obgyn-coding-audit-checklist',
    title: 'Internal Coding Audit Checklist for OB/GYN Practices',
    category: 'Coding Audits',
    excerpt:
      'A practical checklist for running an internal coding audit, covering the highest-risk areas in OB/GYN billing.',
    readTime: 4,
    date: '2026-07-20',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Coding Audits',
    relatedServiceHref: '/coding-audits',
    content: `
A coding audit doesn't need to review every chart to be effective — a focused, representative sample targeting the highest-risk areas catches most systemic issues without consuming weeks of staff time.

## Step 1: Pull a Representative Sample

Aim for a mix across providers, visit types, and payers rather than reviewing only the easiest or most recent charts. A sample skewed toward one provider or one payer will miss issues specific to others.

## Step 2: Check Global vs. Itemized Maternity Classification

This is consistently one of the highest-error areas — see our full comparison of [itemized vs. global maternity billing](/blog/itemized-vs-global-maternity-billing) for the exact criteria to check against.

## Step 3: Review High-Dollar Surgical Codes First

Surgical coding errors carry more financial weight per instance than routine visit errors. Prioritize reviewing your highest-volume GYN surgical codes — our [gynecological surgery coding mistakes](/blog/gyn-surgery-coding-mistakes) guide lists the most common errors to check for specifically.

## Step 4: Verify O-Code Trimester Specificity

A quick scan for unspecified or missing trimester digits, as covered in our [ICD-10 O-codes guide](/resources/icd10-o-codes), often surfaces an easy, high-volume fix.

## Step 5: Cross-Check Modifier Usage

Confirm modifiers like 22 (increased complexity) and telehealth modifiers 95/GT are applied correctly and consistently, not just present or absent at random.

## Key Takeaways

- A focused, representative sample is more useful than an exhaustive review
- Maternity classification and surgical coding are the highest-risk areas to check first
- Run this audit quarterly, not just after a denial spike

If you'd rather have this done independently and objectively, our [coding audit services](/coding-audits) apply this exact checklist with an outside perspective that's often better at catching blind spots than an internal review.
    `,
  },

  {
    slug: 'why-regular-coding-audits-matter',
    title: 'Why Regular Coding Audits Protect Your OB/GYN Practice from Compliance Risk',
    category: 'Coding Audits',
    excerpt:
      'The compliance case for regular coding audits, beyond just recovering missed revenue.',
    readTime: 4,
    date: '2026-07-21',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Coding Audits',
    relatedServiceHref: '/coding-audits',
    content: `
Coding audits are usually framed as a revenue recovery tool, and they are — but the compliance angle deserves equal attention, particularly for OB/GYN practices navigating complex bundled billing and sensitive patient data.

## Coding Errors Are a Compliance Exposure, Not Just a Revenue One

Systematic overbilling, even when unintentional, can trigger payer audits and, in serious or repeated cases, allegations of fraudulent billing. A practice that catches and corrects a pattern proactively is in a fundamentally different position than one a payer catches first.

## HIPAA and Documentation Overlap With Coding Accuracy

Accurate coding depends on documentation that's both clinically complete and properly secured. Our overview of [HIPAA compliance essentials for billing staff](/blog/hipaa-compliance-billing-staff) covers how these two compliance areas intersect in daily billing operations — see also our [HIPAA page](/hipaa) for our own commitments in this area.

## Audits Build a Paper Trail of Good Faith

Regular, documented internal audits demonstrate an ongoing effort to bill accurately, which matters significantly if a payer ever does flag a claim pattern for review. Practices with no audit history have a harder time framing an error as isolated rather than systemic.

## Building a Sustainable Audit Cadence

Quarterly audits, using a consistent [checklist](/blog/obgyn-coding-audit-checklist), strike a reasonable balance between staff time investment and catching issues before they compound across an entire year of claims.

## Key Takeaways

- Coding errors carry compliance risk beyond simple revenue loss
- Documented, regular audits demonstrate good-faith billing practices
- A consistent quarterly cadence catches issues before they become annual patterns

Our [coding audit](/coding-audits) service is built around this exact compliance-first framing — not just finding missed revenue, but building the audit trail that protects your practice if a payer ever asks questions.
    `,
  },

  {
    slug: 'infertility-billing-challenges',
    title: 'Common Infertility and REI Billing Challenges (and Solutions)',
    category: 'Infertility Billing',
    excerpt:
      'The specific billing hurdles infertility and reproductive endocrinology practices face, and how to address them.',
    readTime: 4,
    date: '2026-07-22',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Infertility & REI Billing',
    relatedServiceHref: '/infertility-rei-billing',
    content: `
Infertility and REI billing sits in a uniquely difficult spot — a mix of diagnostic codes, cycle-based procedures, and inconsistent insurance coverage that varies more by state and plan than almost any other area of OB/GYN care.

## Coverage Verification Is More Complex Than Usual

Many plans exclude infertility treatment entirely, cover only diagnostic workup but not treatment, or cap coverage at a specific dollar amount or cycle count. A standard eligibility check often isn't enough — verifying infertility-specific benefit language is its own separate step. Our broader [eligibility verification best practices](/blog/eligibility-verification-best-practices) guide is a useful starting point, but infertility coverage requires an additional layer of specificity.

## Cycle-Based Billing Requires Careful Tracking

IUI and IVF cycles involve multiple encounters — monitoring visits, the procedure itself, lab work — that need to be tracked and billed correctly against whatever cycle limit the patient's plan allows. Losing track of cycle counts leads to claims denied for exceeding coverage the patient may not have actually exhausted. Our companion guide on [IUI and IVF CPT codes](/blog/iui-ivf-cpt-codes) covers the specific codes involved.

## Prior Authorization Is the Norm, Not the Exception

Nearly every step of an infertility treatment cycle may require separate prior authorization, and missing even one step in the sequence can jeopardize coverage for the entire cycle.

## Key Takeaways

- Infertility coverage requires verification beyond a standard eligibility check
- Cycle limits must be tracked precisely across multiple encounters per cycle
- Prior authorization gaps are a leading cause of infertility claim denials

Given how much of infertility billing hinges on payer-specific coverage nuance, our dedicated [infertility and REI billing](/infertility-rei-billing) service is built specifically around this level of detail — reach out via our [contact page](/contact) if this is an area currently causing denial headaches.
    `,
  },

  {
    slug: 'iui-ivf-cpt-codes',
    title: 'IUI and IVF CPT Codes: A Billing Reference for Fertility Practices',
    category: 'Infertility Billing',
    excerpt:
      'A practical reference for the CPT codes involved in IUI and IVF cycles, and how they\'re typically bundled or billed separately.',
    readTime: 4,
    date: '2026-07-23',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Infertility & REI Billing',
    relatedServiceHref: '/infertility-rei-billing',
    content: `
IUI and IVF cycles involve a sequence of distinct services — monitoring, retrieval or insemination, and lab work — each with its own code, and understanding how they fit together is essential to avoiding the [infertility billing challenges](/blog/infertility-billing-challenges) practices commonly face.

## IUI Cycle Coding Basics

Intrauterine insemination billing typically separates the monitoring visits (ultrasounds and labs tracking follicle development) from the insemination procedure itself. Each monitoring visit is generally billed individually as it occurs, rather than bundled into a single cycle fee.

## IVF Cycle Coding Basics

IVF involves considerably more components — ovarian stimulation monitoring, egg retrieval, lab-based fertilization and embryo culture, and embryo transfer — each coded separately. Some payers apply their own bundling rules across these components even when CPT itself doesn't bundle them, which makes payer-specific verification essential before assuming a code will be reimbursed as billed.

## Where Coverage Limits Interact With Coding

Even correctly coded claims can be denied if a patient's plan has exhausted its cycle limit, which is why tracking cycle counts carefully — as discussed in our broader [infertility billing challenges](/blog/infertility-billing-challenges) guide — matters as much as the coding itself.

## Diagnosis Coding Matters Too

Infertility diagnosis codes need to clearly support medical necessity for each billed component, and vague or generic diagnosis coding is a common reason otherwise correctly coded fertility claims get denied.

## Key Takeaways

- IUI and IVF each involve multiple distinct, separately coded components
- Payer-specific bundling rules can differ from standard CPT bundling
- Diagnosis coding must clearly support medical necessity component by component

For the full code set alongside other OB/GYN specialty codes, see our [CPT code library](/resources/cpt-library), and explore our [infertility and REI billing services](/infertility-rei-billing) if your practice needs dedicated support in this area.
    `,
  },

  {
    slug: 'urogynecology-billing-guide',
    title: 'Urogynecology Billing Guide: Codes, Modifiers, and Common Errors',
    category: 'Urogynecology',
    excerpt:
      'An overview of urogynecology billing, covering the procedure codes and errors most specific to this subspecialty.',
    readTime: 4,
    date: '2026-07-24',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Urogynecology Billing',
    relatedServiceHref: '/urogynecology-billing',
    content: `
Urogynecology sits at the intersection of gynecology and urology, and its billing reflects that overlap — procedures often have both gynecologic and urologic code options, and choosing the wrong one is one of the more common, avoidable errors in this subspecialty.

## Diagnostic Testing Codes

Urodynamic studies — cystometry, uroflowmetry, and related testing — each have their own codes, and many practices under-bill by treating a multi-component urodynamic study as a single bundled service when its components are separately billable under CPT guidelines.

## Procedural Coding Overlaps

Procedures like sling placement or pelvic organ prolapse repair sometimes have coding pathways that overlap with urology-specific codes. Choosing the code set that matches payer expectations, and that's consistent with how the procedure was actually documented, prevents a class of denials specific to this cross-specialty billing.

## Bundling Around Pelvic Floor Repairs

Combined procedures — repairing prolapse and treating incontinence in the same surgical session — have specific bundling rules that determine which components can be billed separately. Our companion guide on [coding for pelvic floor repair procedures](/blog/pelvic-floor-procedure-coding) covers this in more detail.

## Key Takeaways

- Urodynamic testing often has separately billable components frequently under-billed as one
- Procedure code selection should reflect actual documentation, especially where gynecologic and urologic codes overlap
- Combined pelvic floor procedures have specific bundling rules worth reviewing case by case

Because urogynecology billing draws on two overlapping specialties' coding conventions, it's an area where a dedicated [urogynecology billing](/urogynecology-billing) review often finds meaningful missed revenue that general OB/GYN coding review overlooks.
    `,
  },

  {
    slug: 'pelvic-floor-procedure-coding',
    title: 'Coding for Pelvic Floor Repair Procedures: What to Know',
    category: 'Urogynecology',
    excerpt:
      'How to approach coding for combined pelvic floor repair procedures, including common bundling pitfalls.',
    readTime: 4,
    date: '2026-07-25',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Urogynecology Billing',
    relatedServiceHref: '/urogynecology-billing',
    content: `
Pelvic floor repair procedures are frequently performed in combination — repairing prolapse and addressing incontinence in the same operative session — and this combination is exactly where [urogynecology billing](/blog/urogynecology-billing-guide) gets complicated.

## Identifying Each Component Performed

The operative note needs to clearly document each distinct repair performed — anterior repair, posterior repair, apical suspension, sling placement — since each may map to a different code, and vague operative documentation ("pelvic floor repair performed") makes accurate coding difficult regardless of coder skill.

## Understanding Bundling Between Components

Not every component performed in the same session is separately billable. Some repairs are considered inclusive of others when performed together, while others remain distinct and separately reportable. This is one of the more nuanced bundling areas in gynecologic surgery coding, and it's worth cross-referencing against our broader [gynecological surgery coding mistakes](/blog/gyn-surgery-coding-mistakes) guide.

## Modifier Use for Multiple Procedures

When multiple separately billable procedures are performed in the same session, modifier 51 (multiple procedures) often applies, affecting how each subsequent procedure is reimbursed relative to the primary one. Missing this modifier, or applying it to a component that should be primary rather than secondary, both distort the claim.

## Key Takeaways

- Detailed operative documentation is the foundation of accurate combined-procedure coding
- Not all repair components performed together are separately billable — check bundling rules carefully
- Modifier 51 usage affects reimbursement sequencing across multiple procedures in one session

Given how often these procedures are billed incorrectly — usually through no fault of the surgeon, but through coding shortcuts — a periodic [coding audit](/coding-audits) focused specifically on combined pelvic floor cases is a worthwhile investment for any practice performing this volume of urogynecologic surgery.
    `,
  },

  {
    slug: 'eligibility-verification-best-practices',
    title: 'Insurance Eligibility Verification Best Practices for OB/GYN Front Desks',
    category: 'Eligibility & Authorization',
    excerpt:
      'How to build a reliable eligibility verification process that prevents the most common denial category in OB/GYN billing.',
    readTime: 4,
    date: '2026-07-26',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Eligibility Verification',
    relatedServiceHref: '/eligibility-verification',
    content: `
Eligibility issues are consistently one of the [top reasons OB/GYN claims get denied](/blog/top-obgyn-denial-reasons), and almost all of them are preventable with a consistent front-desk process rather than a one-time check at scheduling.

## Verify Twice: At Scheduling and Again at Check-In

Coverage can change between when an appointment is scheduled and when the patient actually arrives — sometimes weeks or months later, especially for prenatal care scheduled well in advance. A same-day re-verification at check-in catches these changes before the visit happens rather than after the claim is denied.

## Verify Specific Benefit Details, Not Just Active Coverage

Confirming a plan is "active" isn't enough — deductible status, copay amount, and whether the specific service planned is covered at all (particularly relevant for infertility-related visits — see our [infertility billing challenges](/blog/infertility-billing-challenges) guide) all need separate confirmation.

## Document What Was Verified

A simple log of who verified what, and when, protects the practice if a denial does occur despite verification — it turns "we're not sure what happened" into a specific, correctable process gap.

## Build Verification Into New Patient Intake

New OB patients in particular benefit from a more thorough initial verification, since the same coverage will need to hold — or be re-verified — across the entire pregnancy.

## Key Takeaways

- Verify eligibility at both scheduling and check-in, not just once
- Confirm specific benefit details, not just whether coverage is technically active
- Document verification steps to make denial troubleshooting faster

Strong front-desk eligibility habits are one of the highest-leverage, lowest-cost improvements a practice can make — see our [eligibility verification services](/eligibility-verification) if you'd like this handled with dedicated staff rather than folded into an already-busy front desk.
    `,
  },

  {
    slug: 'prior-authorization-obgyn-procedures',
    title: 'Which OB/GYN Procedures Typically Require Prior Authorization?',
    category: 'Eligibility & Authorization',
    excerpt:
      'A reference guide to the OB/GYN procedures most likely to require prior authorization, and how to avoid authorization-related denials.',
    readTime: 4,
    date: '2026-07-27',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Eligibility Verification',
    relatedServiceHref: '/eligibility-verification',
    content: `
Prior authorization requirements vary by payer, but certain categories of OB/GYN procedures are consistently likely to require it, and missing this step is one of the [top denial reasons](/blog/top-obgyn-denial-reasons) practices deal with.

## Surgical Procedures

Most non-emergent gynecological surgeries — hysterectomy, myomectomy, and many pelvic floor repair procedures — typically require prior authorization from commercial payers. Emergency procedures are generally exempt, but the definition of "emergency" for authorization purposes is narrower than clinical urgency might suggest, so it's worth confirming rather than assuming.

## Infertility Treatment

Nearly every step of infertility treatment, from diagnostic workup through IVF cycles, often requires separate authorization at each stage. Our [infertility billing challenges](/blog/infertility-billing-challenges) guide covers this in more depth.

## Advanced Imaging

Certain advanced imaging ordered in an OB/GYN context — beyond routine obstetric ultrasound — frequently requires authorization, and this requirement is easy to miss since routine ultrasounds typically don't need it, creating an inconsistent expectation across visit types.

## Building an Authorization Checklist by Payer

Because requirements vary so much, the most reliable approach is a payer-specific checklist reviewed and updated periodically, rather than relying on staff memory or assuming last year's requirements still apply.

## Key Takeaways

- Non-emergent surgery, infertility treatment, and advanced imaging are the highest-risk categories
- "Emergency" exemptions are narrower than general clinical urgency
- Authorization requirements should be tracked per payer and reviewed periodically, not assumed

Missing a required authorization is one of the more frustrating denial types because the medical necessity usually isn't in question — it's a pure process gap. Our [eligibility verification](/eligibility-verification) and [denial management](/denial-management) services both address this from different angles — prevention and recovery.
    `,
  },

  {
    slug: 'fee-schedule-optimization-guide',
    title: 'How to Optimize Your Fee Schedule for Better OB/GYN Reimbursement',
    category: 'Fee Schedules & Contracts',
    excerpt:
      'A practical approach to reviewing and optimizing your OB/GYN practice\'s fee schedule.',
    readTime: 4,
    date: '2026-07-28',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Fee Schedule Optimization',
    relatedServiceHref: '/fee-schedule-optimization',
    content: `
A fee schedule that hasn't been reviewed in years is quietly leaving money on the table, regardless of how accurate your coding is — because coding accuracy determines whether you bill the right code, while the fee schedule determines what you're actually asking to be paid for it.

## Start With Your Highest-Volume Codes

Rather than reviewing every code your practice bills, start with the twenty or so codes that make up the bulk of your billed volume — global maternity billing codes, common office visit levels, and your most frequent GYN procedures. Small adjustments here have outsized impact simply due to volume.

## Compare Against Regional Benchmarks

Fee schedules should reflect regional reimbursement patterns, not a static number carried forward from years ago or copied from a generic template. What's competitive in one region may significantly underbill in another.

## Separate Fee Schedule From Contracted Rates

Your fee schedule (what you bill) and your contracted rate with a given payer (what you'll actually be paid) are different things, and confusing them leads to either unrealistic revenue expectations or a fee schedule set too low to matter for payers reimbursing at a percentage of billed charges.

## Review Annually, Not Reactively

Waiting for a specific complaint or a noticeably low payment to trigger a fee schedule review means the practice has likely been underbilling for a long stretch already. An annual review, tied to the CPT code update cycle, keeps this from happening.

## Key Takeaways

- Focus fee schedule review on your highest-volume codes first
- Benchmark against regional data, not historical inertia
- Review annually as a standing process, not just reactively

Our [fee schedule optimization](/fee-schedule-optimization) service pairs this review with actual [payer contract negotiation](/blog/negotiating-payer-contracts-obgyn) strategy, since the two work best addressed together rather than in isolation.
    `,
  },

  {
    slug: 'negotiating-payer-contracts-obgyn',
    title: 'Negotiating Payer Contracts: A Guide for OB/GYN Practice Owners',
    category: 'Fee Schedules & Contracts',
    excerpt:
      'How OB/GYN practices can approach payer contract negotiations with better data and better timing.',
    readTime: 4,
    date: '2026-07-29',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Fee Schedule Optimization',
    relatedServiceHref: '/fee-schedule-optimization',
    content: `
Payer contract negotiation is one of the most consistently avoided tasks in practice management — often because it feels adversarial or because practices don't feel they have leverage. In reality, most negotiations are more procedural than confrontational, and preparation matters more than posture.

## Know Your Actual Volume and Value to the Payer

Before any negotiation, understand exactly how much patient volume and billed revenue you represent to a given payer. A practice with meaningful regional patient volume has more leverage than it typically assumes, particularly for a specialty like OB/GYN where continuity of maternity care matters to payer networks.

## Time Negotiations Around Contract Renewal Windows

Most contracts have a renewal or renegotiation window, often requiring notice well in advance. Missing this window typically locks in existing rates for another full contract term, so tracking these dates proactively — tied to your broader [credentialing](/blog/credentialing-checklist-new-obgyn) records — matters.

## Bring Fee Schedule Data to the Table

A well-benchmarked fee schedule, as discussed in our [fee schedule optimization guide](/blog/fee-schedule-optimization-guide), gives concrete numbers to anchor a negotiation rather than a general request for "better rates."

## Consider Multi-Year Terms Carefully

Payers often prefer multi-year contracts for rate stability, but locking in current rates for several years can mean missing broader reimbursement trend improvements. Weigh the certainty against the opportunity cost explicitly rather than defaulting to whatever term is offered.

## Key Takeaways

- Understand your actual volume leverage before entering negotiation
- Track renewal windows proactively — missing them locks in current terms
- Anchor negotiations with specific, benchmarked fee schedule data

Payer negotiation is a natural extension of [fee schedule optimization](/fee-schedule-optimization) work, and our team often supports both together since the data gathered for one directly strengthens the other.
    `,
  },

  {
    slug: 'hipaa-compliance-billing-staff',
    title: 'HIPAA Compliance Essentials for OB/GYN Billing Staff',
    category: 'Compliance',
    excerpt:
      'The specific HIPAA considerations that matter most for billing and coding staff in an OB/GYN practice.',
    readTime: 4,
    date: '2026-07-30',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Credentialing',
    relatedServiceHref: '/credentialing',
    content: `
Billing staff handle some of the most sensitive information in a medical practice — diagnosis codes, treatment history, and financial data together — which makes HIPAA compliance in the billing department a distinct discipline from general clinical HIPAA training.

## Minimum Necessary Access

Billing staff generally need less clinical detail than treating providers to do their jobs accurately, and access should reflect that. Broad, unrestricted chart access for billing roles is both a compliance risk and, frankly, unnecessary for accurate claims submission.

## Secure Handling of Claims and EOBs

Explanation of benefits documents and claims data often move between systems — practice management software, clearinghouses, payer portals — and each transfer point is a potential exposure if not properly secured. Staff should understand which channels are approved for this data and which aren't.

## Coding Accuracy and Compliance Overlap

Interestingly, accurate coding and HIPAA compliance reinforce each other — the same discipline that requires precise, documented coding decisions (see our [why regular coding audits matter](/blog/why-regular-coding-audits-matter) piece) also produces a cleaner audit trail if a compliance question ever arises.

## Training Should Be Role-Specific, Not Generic

Generic annual HIPAA training often skips the scenarios billing staff actually encounter — clearinghouse data handling, payer portal access, and claims correspondence — in favor of broader clinical scenarios. Role-specific training closes this gap.

## Key Takeaways

- Billing staff access should follow minimum-necessary principles, not default to broad chart access
- Every system claims data passes through is a potential compliance touchpoint
- Role-specific HIPAA training covers scenarios generic training misses

You can review our own approach to handling practice and patient data on our [HIPAA page](/hipaa) and [privacy policy](/privacy) — transparency here is something we consider part of being a trustworthy billing partner, not just a compliance checkbox.
    `,
  },

  {
    slug: 'outsourcing-obgyn-billing-pros-cons',
    title: 'Should You Outsource OB/GYN Billing? Pros, Cons, and ROI',
    category: 'Revenue Optimization',
    excerpt:
      'An honest look at the tradeoffs between in-house and outsourced OB/GYN billing, and how to evaluate ROI.',
    readTime: 4,
    date: '2026-07-31',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Our Services',
    relatedServiceHref: '/services',
    content: `
The in-house versus outsourced billing decision is rarely as simple as cost comparison alone, though cost is usually where the conversation starts. A clearer framework looks at specialization, scalability, and opportunity cost together.

## The Case for In-House Billing

Direct oversight, immediate communication with clinical staff, and full control over process are the main advantages. For very small practices with simple billing needs, this can work well, provided staff have genuine OB/GYN billing specialization — not just general medical billing experience.

## The Case for Outsourcing

OB/GYN billing has enough specialty-specific complexity — global maternity billing, infertility coverage nuances, surgical bundling — that dedicated specialization often outperforms general in-house billing knowledge, particularly for practices without the volume to justify a large, specialized in-house team. Outsourcing also removes the hiring, training, and turnover risk that comes with maintaining in-house billing expertise.

## Calculating Real ROI

The right comparison isn't outsourcing cost versus in-house salary alone — it should include denial rate differences, days in AR, and the opportunity cost of practice leadership time spent managing billing issues versus patient care. Our [revenue leakage calculator](/calculator) is designed to help estimate this more completely than a simple cost comparison would.

## A Middle Ground: Hybrid Models

Some practices keep front-desk eligibility and prior authorization in-house while outsourcing coding, claims submission, and denial management — splitting the work along the lines where specialization matters most.

## Key Takeaways

- Compare total revenue cycle performance, not just billing cost, when evaluating ROI
- OB/GYN's specialty-specific complexity often favors dedicated expertise over generalist in-house billing
- Hybrid models can combine the strengths of both approaches

See real outcomes from practices that made this switch on our [results page](/results), and explore our full [services](/services) if you're evaluating what a partial or full outsourcing arrangement could look like for your practice.
    `,
  },

  {
    slug: 'measuring-billing-company-performance',
    title: '8 KPIs to Measure Whether Your Billing Company Is Actually Working',
    category: 'Revenue Optimization',
    excerpt:
      'The key performance indicators that reveal whether a billing partner is genuinely improving your revenue cycle.',
    readTime: 4,
    date: '2026-08-01',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Revenue Cycle Management',
    relatedServiceHref: '/revenue-cycle-management',
    content: `
Whether billing is handled in-house or outsourced, the same core metrics reveal whether the process is actually working — and practices that don't track these regularly often don't discover a problem until cash flow makes it obvious.

## 1. Days in Accounts Receivable

Covered in depth in our [reducing days in AR](/blog/how-to-reduce-days-in-ar) guide — this is the single clearest indicator of overall revenue cycle health.

## 2. First-Pass Claim Acceptance Rate

The percentage of claims accepted without correction on first submission. A low rate here points to upstream eligibility, coding, or authorization issues.

## 3. Denial Rate by Category

Not just an overall denial percentage, but denials broken down by reason — see our [top OB/GYN denial reasons](/blog/top-obgyn-denial-reasons) guide for the categories worth tracking specifically.

## 4. Net Collection Rate

The percentage of collectible revenue actually collected, which accounts for contractual adjustments rather than comparing collections to gross charges.

## 5. Credentialing Turnaround Time

Relevant whenever onboarding new providers — see our [credentialing timeline guide](/blog/payer-credentialing-timeline) for realistic benchmarks to compare against.

## 6. Cost to Collect

Total billing-related cost as a percentage of collections — the metric that ultimately determines whether a billing arrangement, in-house or outsourced, is genuinely cost-effective.

## 7. Aging Bucket Distribution

How much AR sits in 0-30, 31-60, 61-90, and 90+ day buckets — a shifting distribution toward older buckets is an early warning sign before the total AR number itself looks alarming.

## 8. Patient Statement Response Time

How quickly patient-responsibility balances are billed and collected, which affects both cash flow and patient satisfaction.

## Key Takeaways

- Track denial rate by category, not just as a single aggregate number
- Aging bucket distribution often signals problems before total AR does
- Cost to collect is the metric that ultimately validates ROI

See how these metrics translate into real practice outcomes on our [results page](/results), or use our [calculator](/calculator) to benchmark your own numbers.
    `,
  },

  {
    slug: '2026-cpt-code-updates-obgyn',
    title: '2026 CPT Code Updates OB/GYN Practices Need to Know',
    category: 'CPT Updates',
    excerpt:
      'A summary of what\'s changed in CPT coding for 2026 that\'s relevant to OB/GYN practices, and how to update internal workflows.',
    readTime: 4,
    date: '2026-08-02',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Coding Audits',
    relatedServiceHref: '/coding-audits',
    content: `
Annual CPT code updates require OB/GYN practices to review and adjust internal coding references, billing software settings, and staff training every year — a task that's easy to deprioritize until an outdated code causes a denial.

## Why Annual Review Matters More in a Specialty Like OB/GYN

Because OB/GYN billing relies so heavily on a relatively small set of high-volume codes — global maternity codes, common GYN procedures — a single missed update to one of these core codes has outsized impact compared to specialties with more evenly distributed coding patterns.

## Updating Internal Reference Materials First

Before any updated codes are used in live billing, internal reference materials — cheat sheets, EHR code favorites lists, and training materials — need to be updated to match. Continuing to reference last year's materials during a transition period is a common source of early-year denials.

## Cross-Check Against Your CPT Library

Our own [CPT code library](/resources/cpt-library) is maintained to reflect current-year coding, and is worth cross-referencing against your internal materials during any annual update cycle to catch discrepancies early.

## Watch for Downstream Effects on Related Guides

Code updates can ripple into related billing guidance — for instance, changes affecting delivery codes may also affect how [CPT 59400](/blog/cpt-59400-explained) or related global billing codes should be applied going forward.

## Key Takeaways

- Review and update internal coding references before the update takes effect, not after
- High-volume core codes deserve priority review given their outsized billing impact
- Cross-check internal materials against a maintained external reference each year

For a related look at anticipated bigger structural changes on the horizon, see our guide on [preparing for the 2027 maternity billing transition](/blog/preparing-for-2027-maternity-billing-changes).
    `,
  },

  {
    slug: 'preparing-for-2027-maternity-billing-changes',
    title: 'How to Prepare Your Practice for the 2027 Maternity Billing Transition',
    category: '2027 Transition',
    excerpt:
      'What OB/GYN practices should be doing now to prepare for upcoming changes to maternity billing structure.',
    readTime: 4,
    date: '2026-08-03',
    author: 'OBGYNBillingPro Team',
    relatedService: 'Revenue Cycle Management',
    relatedServiceHref: '/revenue-cycle-management',
    content: `
Structural changes to maternity billing don't arrive overnight — they're typically signaled well in advance, and practices that start preparing early avoid the scramble that catches less-prepared practices off guard when the transition date arrives.

## Why Early Preparation Matters for Maternity Billing Specifically

Because global maternity claims can span nine months or more between the start of care and final claim submission, a billing structure change needs to be understood well before it takes effect — patients already mid-pregnancy when a transition occurs may need to be billed under different rules than patients starting care afterward, creating a transition period practices need to plan for explicitly.

## Review Current Documentation Practices Now

Whatever the specifics of an upcoming transition, strong baseline documentation — clear antepartum visit counts, clearly noted complications, accurate trimester-specific coding as covered in our [ICD-10 O-codes guide](/resources/icd10-o-codes) — makes any future transition easier to adapt to, regardless of exactly how the new rules are structured.

## Build Flexibility Into Internal Tracking Systems

Practices relying on rigid, hard-coded billing workflows will have a harder time adapting than those with more flexible internal tracking of visit dates, provider changes, and complication documentation. Building this flexibility now pays off regardless of the specific final shape of the 2027 changes.

## Stay Connected to Updated Guidance

Our full breakdown of the transition itself, updated as more specifics become available, is maintained on our dedicated [2027 maternity billing transition](/resources/2027-maternity-transition) resource page — worth bookmarking directly rather than relying on memory of a single announcement.

## Key Takeaways

- Mid-transition pregnancies will need special handling — plan for this explicitly
- Strong current documentation habits ease adaptation to almost any future rule change
- Flexible internal tracking systems outperform rigid ones during structural transitions

If your practice wants a head start on transition readiness specifically, our [revenue cycle management](/revenue-cycle-management) team is already incorporating anticipated 2027 changes into current process design — [reach out](/contact) to discuss what that looks like for your practice.
    `,
  },

];



export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
