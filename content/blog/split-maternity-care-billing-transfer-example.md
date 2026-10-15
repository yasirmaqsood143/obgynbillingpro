---
title: "Split Maternity Care Billing: When a Patient Changes Providers Mid-Pregnancy (Worked Example)"
metaTitle: "Split Maternity Care Billing: Transfer Mid-Pregnancy Example"
description: "How to code antepartum, delivery and postpartum care when a pregnant patient moves between practices — with a full worked example (Arizona to Wisconsin, repeat cesarean) and a split-care code table."
date: "2026-10-15"
category: "Maternity Billing"
image: pregnantUltrasound
service: global-maternity-billing
keywords: ["split maternity care billing", "global ob billing transfer", "59426 59515", "antepartum care only", "global maternity billing example"]
faqs:
  - q: "Can two practices both bill a global maternity code?"
    a: "No. A global obstetric code (59400, 59510, 59610, 59618) represents all antepartum, delivery and postpartum care by one physician or group. When care is split between practices, each practice bills only the components it provided."
  - q: "How do you bill 1 to 3 antepartum visits?"
    a: "When a practice provides only one to three antepartum visits, those visits are billed with E/M codes rather than an antepartum package code. 59425 is for 4–6 visits and 59426 is for 7 or more."
  - q: "What delivery code applies when the delivering practice also does postpartum care?"
    a: "Use the 'including postpartum care' delivery codes: 59410 (vaginal), 59515 (cesarean), 59614 (VBAC) or 59622 (cesarean after attempted VBAC)."
  - q: "Does this change in 2027?"
    a: "Yes. For dates of service on or after January 1, 2027, the package and component codes are deleted. Each practice will report the prenatal and postpartum visits it provides with E/M codes and the delivering practice will use the new delivery and labor management codes."
---

Patients move, change jobs, change insurance and change doctors — and pregnancy doesn't pause for any of it. When an obstetric patient's care is split between practices, the global maternity package no longer fits, and each practice has to bill only the parts of care it actually provided.

Split care is one of the most common sources of lost obstetric revenue we find. Practices that provided months of prenatal care before a transfer often bill nothing at all, and receiving practices often bill the full global code when they shouldn't. This article explains the rules and works through a complete example.

## The core principle

A global obstetric code — `59400`, `59510`, `59610` or `59618` — represents **all** routine antepartum care, the delivery, and routine postpartum care, provided by **one physician or group**. When that isn't what happened, you break the package into components:

| Care provided by your practice | Code(s) to use (through 2026) |
|---|---|
| 1–3 antepartum visits only | Office E/M codes for each visit |
| 4–6 antepartum visits only | `59425` |
| 7 or more antepartum visits only | `59426` |
| Vaginal delivery only | `59409` |
| Vaginal delivery + postpartum | `59410` |
| Cesarean delivery only | `59514` |
| Cesarean delivery + postpartum | `59515` |
| VBAC delivery only / + postpartum | `59612` / `59614` |
| Cesarean after attempted VBAC, delivery only / + postpartum | `59620` / `59622` |
| Postpartum care only | `59430` |

Antepartum package codes are typically billed once, after the patient's care with your practice has ended — when she transfers out, delivers elsewhere, or the pregnancy ends — rather than visit by visit. Check each payer's policy; some Medicaid programs have their own instructions.

## Worked example: a move from Arizona to Wisconsin

This scenario is a classic coding-exam question, and it mirrors real situations practices face.

> A 23-year-old woman delivers her second child by cesarean. Her first child was delivered by cesarean with a **vertical incision**, and early in this pregnancy the decision was made for a repeat cesarean. She began prenatal care in **Arizona** with two antenatal visits in the first trimester, then moved to **Wisconsin**, where she had 10 more antenatal visits with a new provider before the repeat cesarean. She delivered a healthy baby girl and will follow up with her Wisconsin physician for postpartum care.

### The Arizona physician

**What they provided:** two antepartum visits.

**Procedure coding:** two visits is fewer than four, so the antepartum package codes don't apply. Each visit is billed with an office E/M code that reflects the documentation — for example, a new patient visit (`99202`–`99205`) for the first encounter and an established patient visit (`99212`–`99215`) for the second, selected by medical decision making or total time.

**Diagnosis coding:** the patient has a previous cesarean with a vertical (classical) scar, which is a condition affecting the pregnancy, so this isn't a "normal pregnancy" (`Z34`) encounter.

- `O34.212` — maternal care for vertical scar from previous cesarean delivery
- `Z3A.__` — weeks of gestation on each date of service (for example `Z3A.09`, `Z3A.12`)

If the provider documented other risk factors (for example supervision of a high-risk pregnancy), the appropriate `O09.-` code could also apply.

### The Wisconsin physician

**What they provided:** 10 antepartum visits, the repeat cesarean delivery, and postpartum care.

**Procedure coding:** because the Wisconsin physician didn't provide **all** of the antepartum care, the global code `59510` isn't appropriate. Instead, bill the components:

- `59426` — antepartum care only, 7 or more visits (the Wisconsin practice provided 10)
- `59515` — cesarean delivery only, including postpartum care

This is a planned repeat cesarean, not a trial of labor after cesarean, so the VBAC codes (`59618`–`59622`) don't apply.

**Diagnosis coding for the delivery:**

- `O34.212` — maternal care for vertical scar from previous cesarean delivery (the reason for the cesarean, so it's the principal diagnosis)
- `Z3A.__` — weeks of gestation at delivery (for example `Z3A.39`)
- `Z37.0` — single live birth

Antepartum claims use the same scar code plus the appropriate `Z3A` code.

<!-- cta -->

### Why not bill 59510 anyway?

Some practices reason that the Wisconsin physician did "most" of the care, so the global code should be fine. But the global code describes antepartum care **from the start of the pregnancy**, and the Arizona physician has legitimately billed for the first two visits. Billing `59510` would overlap with those services. A few payers publish exceptions that allow the global code when only a small number of visits were provided elsewhere — if a payer has such a policy, follow it and keep a copy on file. Without one, bill the components.

## Other split-care scenarios

### Insurance changes mid-pregnancy

Same patient, same practice, different insurance. The package typically can't go to either plan alone:

- Antepartum care while Plan A was active → billed to Plan A (E/M, `59425` or `59426`, depending on visit count)
- Antepartum care, delivery and postpartum while Plan B was active → billed to Plan B (remaining antepartum visits plus the delivery-with-postpartum code)

Some payers accept a global code with a date span limited to their coverage period; others require components. Re-verifying coverage during the pregnancy is the only reliable way to catch the change before delivery — see [eligibility verification](/eligibility-verification).

### Delivery by a physician outside your group

If your practice provided all the prenatal care but the baby was delivered by a physician from a different group (for example, a hospitalist or a covering physician not in your group), you bill antepartum care (`59425`/`59426`) and, if you provide it, postpartum care (`59430`). The delivering physician bills the delivery-only code.

### Delivery within your own group

If physicians in the **same group** share prenatal care and one of them delivers, the group can usually bill the global code once, under the delivering physician. Payer rules on which NPI to list vary, so confirm with each major payer.

### Pregnancy loss or termination

When a pregnancy ends before delivery, bill the antepartum care you provided (E/M or `59425`/`59426`) along with any procedure codes for the treatment of the loss. Practices often write this care off unnecessarily.

### Patient transfers out late

If a patient transfers out at 36 weeks after 12 visits, bill `59426`. There's no higher code for "many more than seven" visits, but the code is still well worth billing.

## Documentation that supports split-care billing

- A **visit log** for each pregnancy with dates, rendering providers and payer at each visit
- The **transfer date** (in or out) and where the patient went or came from
- The **date coverage changed**, if applicable
- The **delivery record**, including the delivering physician and group

A pregnancy registry that captures this from the first visit makes split-care billing routine instead of forensic.

## What changes on January 1, 2027

Under the CPT 2027 maternity care changes, the global package and component codes — including `59426`, `59515` and `59430` — are deleted for dates of service on or after January 1, 2027. Each practice will report the prenatal and postpartum visits it provides with E/M codes as they occur, and the delivering clinician will report the new delivery and labor management codes. In many ways, that makes split care simpler: each practice bills what it did, when it did it. But pregnancies that span the change will need careful handling. Our [2027 maternity transition guide](/resources/2027-maternity-transition) covers the details.

## A split-care checklist for your billing team

- At the **first visit**, record whether the patient had prenatal care elsewhere and how many visits.
- Keep a running **antepartum visit count** for every pregnancy.
- **Re-verify insurance** during the pregnancy and log any change date.
- When a patient **transfers out**, bill the antepartum care you provided promptly — don't wait for a delivery that won't happen at your practice.
- When a patient **transfers in**, request records and document the transfer date before billing.
- At **delivery**, confirm who will provide postpartum care before choosing between delivery-only and delivery-plus-postpartum codes.
- **Reconcile** monthly: every pregnancy should end in a billed delivery, a billed antepartum package, or a documented reason (for example, a loss already billed).

## Need help with split-care claims?

Split-care pregnancies are where obstetric revenue most often goes missing. Our [global maternity billing](/global-maternity-billing) service tracks every pregnancy from the first visit so transfers and insurance changes are billed correctly. Send us a WhatsApp message for a free review of your recent OB claims.
