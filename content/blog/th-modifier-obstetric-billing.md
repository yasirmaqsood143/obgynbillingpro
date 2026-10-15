---
title: "TH Modifier in Medical Billing: Obstetrical Treatment and Services Explained"
metaTitle: "TH Modifier: What It Means & When to Use It in OB Billing"
description: "The TH modifier identifies obstetrical treatment or services, prenatal or postpartum. Learn which payers require it, how it's used with E/M and component codes, and how it will matter after the 2027 maternity code changes."
date: "2026-10-15"
category: "Maternity Billing"
image: officeConsult
service: global-maternity-billing
keywords: ["th modifier", "th modifier in medical billing", "modifier th", "obstetrical modifier", "prenatal visit modifier"]
faqs:
  - q: "What does the TH modifier mean?"
    a: "TH is a HCPCS Level II modifier meaning 'obstetrical treatment/services, prenatal or postpartum.' It identifies a service as pregnancy-related."
  - q: "Who requires the TH modifier?"
    a: "Mostly state Medicaid programs and some Medicaid managed care plans, which use it to identify prenatal and postpartum services — sometimes for reporting, sometimes for payment or cost-sharing exemptions. A few commercial plans also recognize it. Medicare generally doesn't require it."
  - q: "Can TH be used with E/M codes?"
    a: "Yes. Where a payer requires it, TH is commonly appended to E/M codes for prenatal or postpartum visits billed outside a global package, or to the codes a payer specifies in its obstetric billing policy."
  - q: "Will the TH modifier matter more in 2027?"
    a: "Likely. When the global maternity package ends on January 1, 2027, prenatal and postpartum visits will be billed with E/M codes. The AMA notes payers can identify pregnancy-related claims using Z34 or O-chapter diagnosis codes and the TH modifier where applicable."
---

Most modifiers describe *how* a service was performed — bilateral, distinct, reduced, telehealth. The **TH modifier** describes *what kind* of care it was: **obstetrical treatment or services, prenatal or postpartum**. It's a small detail that some payers — especially Medicaid programs — rely on to process and pay maternity claims correctly.

## What the TH modifier means

`TH` is a HCPCS Level II modifier with the descriptor **"Obstetrical treatment/services, prenatal or postpartum."** Appending it tells the payer the service was provided because of the pregnancy or the postpartum period.

Payers use that information in several ways:

- **Identifying maternity services** for reporting and quality programs
- **Applying maternity benefits** — for example, waiving cost-sharing for pregnancy-related care in programs that do so
- **Routing claims** to maternity payment rules or case management
- **Tracking prenatal care timeliness** (for example, whether a first prenatal visit occurred in the first trimester)

## Which payers use TH

The TH modifier is primarily a **Medicaid** tool. Many state Medicaid programs and Medicaid managed care plans mention it in their obstetric billing policies, but how they use it varies:

- Some require `TH` on **every prenatal and postpartum E/M visit** billed outside a global package.
- Some require it on the **first prenatal visit** as a pregnancy notification.
- Some use it to exempt pregnant patients from **copayments**.
- Some accept it but don't require it.

A few commercial plans also recognize `TH`. Medicare generally doesn't require it, which makes sense given Medicare's limited role in obstetrics.

The only reliable way to know is to read each payer's current obstetric billing policy and provider manual. We keep a payer-by-payer rule for every client.

<!-- cta -->

## How TH is used on claims

### Prenatal visits billed outside the global package

When prenatal visits are billed with E/M codes — for example when a practice provides only one to three antepartum visits, or when a Medicaid program requires visit-by-visit billing — a payer that requires `TH` will expect it on those E/M lines:

`99213-TH` with diagnosis `O09.-` or `Z34.-` (as appropriate) and the weeks-of-gestation code.

### Postpartum visits billed separately

When postpartum care is billed separately — for example a postpartum visit after a delivery billed by another provider, or a postpartum problem visit — `TH` may be required on the E/M code.

### Component and package codes

Practices sometimes ask whether `TH` belongs on `59400`, `59425` or `59430`. Because those codes are already obstetric by definition, many payers don't require it on them — but some do. Follow the payer's written instructions; don't add it by default.

### Other prenatal services

Some Medicaid programs also ask for `TH` on prenatal services such as certain screenings or education services. Again, follow the payer's policy.

## TH and diagnosis codes work together

Payers that use `TH` almost always check that the diagnosis supports it. A claim with `TH` should carry a pregnancy-related diagnosis — a Chapter 15 O code, `Z34.-` for supervision of a normal pregnancy, `O09.-` for a high-risk pregnancy, or a postpartum code such as `Z39.2` for routine postpartum follow-up. A `TH` modifier with a non-pregnancy diagnosis is a common reason for denial. See our guide to [sequencing multiple O codes](/blog/multiple-o-codes-sequencing-pregnancy).

## Why TH will matter more after January 1, 2027

The CPT 2027 maternity changes eliminate the global obstetric package. Prenatal and postpartum visits will be reported **per encounter with E/M codes** — the same codes used for every other office visit. Payers need a way to tell a prenatal E/M visit apart from a routine gynecology visit, and the AMA's guidance notes they can do that with:

- **Diagnosis codes** — `Z34` or Chapter 15 O codes
- **The `TH` modifier**, where applicable

Practices should expect more payers — including commercial plans — to publish instructions about `TH` as they update policies for 2027. When your payers publish 2027 maternity policies, check whether `TH` is required on prenatal and postpartum E/M visits. Our [2027 maternity transition guide](/resources/2027-maternity-transition) covers the rest of the changes.

## Common TH modifier errors

1. **Missing TH** on prenatal or postpartum visits for payers that require it — leading to denials or incorrect cost-sharing
2. **Adding TH** to every claim for a pregnant patient, including unrelated services (for example, a sprained ankle documented as not affecting the pregnancy)
3. **TH with a non-pregnancy diagnosis** — the modifier and diagnosis must agree
4. **Inconsistent use** across providers in the same practice
5. **Not updating rules** when a Medicaid program changes its obstetric policy

<!-- cta -->

## Building TH into your workflow

- Keep a **payer rule table** that lists, for each payer, whether `TH` is required, on which codes and visits.
- Configure your **claim scrubber** to flag prenatal/postpartum E/M visits missing `TH` for payers that require it, and to flag `TH` on claims without a pregnancy-related diagnosis.
- **Train front-desk staff** to identify pregnant patients at check-in so visit types are set correctly.
- **Review denials** for TH-related reasons monthly and adjust rules as needed.

## Related modifiers worth knowing

- **`25`** — significant, separately identifiable E/M on the same day as a procedure or other service
- **`33`** — preventive service (used by some payers to identify ACA preventive services, such as certain screenings during pregnancy)
- **`95` / `93`** — telemedicine (audio-video / audio-only); see our guide to [telehealth modifiers](/blog/modifier-95-vs-93-vs-gt-telehealth)
- **`22`** — increased procedural services, sometimes used on complex deliveries

## Worked example: a Medicaid prenatal visit outside the global

**Scenario:** A patient covered by a state Medicaid managed care plan is seen at 10 weeks for her first prenatal visit. She transfers to another practice after her second visit. The plan's obstetric policy requires `TH` on prenatal E/M visits billed outside a global package.

**Coding for each visit:**

- `99204-TH` (first visit, new patient, level supported by documentation) with `Z34.01` (supervision of normal first pregnancy, first trimester) and `Z3A.10`
- `99213-TH` (second visit) with `Z34.01` and the appropriate `Z3A` code

Because the practice provided only two visits, E/M codes are used rather than an antepartum package. If the plan exempts prenatal visits from copays, `TH` helps ensure the patient isn't charged one in error.

**What if she'd been high risk?** The `Z34` codes would be replaced by the appropriate `O09.-` supervision code, plus any O codes for conditions addressed.

## Need help with obstetric billing rules?

Small details like the `TH` modifier decide whether maternity claims are paid on the first pass. Our [global maternity billing](/global-maternity-billing) service maintains payer-specific obstetric rules for every client — including Medicaid programs and managed care plans. Send us a WhatsApp message for a free review of your OB claims.
