---
title: "7 Global Maternity Billing Mistakes That Cost OB/GYN Practices Revenue"
metaTitle: "7 Global Maternity Billing Mistakes (and How to Fix Them)"
description: "The global maternity billing mistakes we find most often — wrong package vs. component codes, split care, VBAC coding, missed separately billable services, LARC device codes and delivery diagnosis errors — and how to fix each."
date: "2026-04-10"
updated: "2026-10-15"
category: "Maternity Billing"
image: pregnantUltrasound
service: global-maternity-billing
keywords: ["global maternity billing", "global ob billing mistakes", "global maternity billing guidelines", "global billing pregnancy", "maternity billing errors"]
faqs:
  - q: "What is global maternity billing?"
    a: "Global maternity billing reports routine antepartum care, delivery and routine postpartum care with a single package code — 59400 (vaginal), 59510 (cesarean), 59610 (VBAC) or 59618 (cesarean after attempted VBAC) — billed by the physician or group that provided all three components."
  - q: "What's the most common global maternity billing mistake?"
    a: "Billing the global package when the practice didn't provide all of the care — after a transfer, an insurance change, or a delivery by someone outside the group — or failing to bill anything at all when a patient transfers out."
  - q: "How many visits are needed for 59425 and 59426?"
    a: "59425 is antepartum care only for 4–6 visits; 59426 is for 7 or more visits. One to three visits are billed with E/M codes."
  - q: "Do these rules still apply after 2027?"
    a: "The global package codes are deleted for dates of service on or after January 1, 2027. Many of the underlying lessons — tracking visits, verifying coverage, capturing separately billable services — still apply under the new per-encounter structure."
---

Global maternity billing compresses months of care into one claim, and that makes small errors expensive. A missed antepartum package, a VBAC coded as a routine delivery, or a delivery claim missing an outcome code won't trigger alarms — it will just quietly reduce what your practice collects.

These are the seven mistakes we find most often when reviewing obstetric billing, why they happen and how to fix them. (Codes below apply to dates of service through December 31, 2026; see the end of the article for what changes in 2027.)

## Mistake 1: Billing the global code when you didn't provide all the care

The global codes — `59400`, `59510`, `59610`, `59618` — describe **all** routine antepartum, delivery and postpartum care by one physician or group. They don't fit when:

- The patient **transferred in** after starting prenatal care elsewhere
- A physician **outside your group** delivered the baby
- The patient **changed insurance** partway through the pregnancy

**The fix:** bill components. Antepartum care: E/M codes for 1–3 visits, `59425` for 4–6 visits, `59426` for 7 or more. Delivery: delivery-only codes (`59409`, `59514`, `59612`, `59620`) or delivery-plus-postpartum codes (`59410`, `59515`, `59614`, `59622`). Postpartum only: `59430`.

## Mistake 2: Billing nothing when a patient transfers out

The mirror image of mistake 1. A patient sees your practice for eight prenatal visits, then moves away. Nobody bills anything, because the practice was "waiting for the delivery."

**The fix:** bill the antepartum care you provided when the patient's care with you ends — in this example, `59426`. A pregnancy registry that flags patients who haven't been seen in several weeks catches these.

<!-- cta -->

## Mistake 3: Getting the delivery type wrong

Delivery type determines the code family:

| Delivery | Global | Delivery only | Delivery + postpartum |
|---|---|---|---|
| Vaginal | `59400` | `59409` | `59410` |
| Cesarean | `59510` | `59514` | `59515` |
| VBAC (successful) | `59610` | `59612` | `59614` |
| Cesarean after attempted VBAC | `59618` | `59620` | `59622` |

The two most common errors: a successful VBAC billed as `59400`, and a cesarean following a trial of labor after cesarean billed as a routine `59510`. Both misstate the care and can affect payment.

**The fix:** check delivery history on every delivery claim. A prior cesarean changes the code family.

## Mistake 4: Billing the wrong payer after an insurance change

A patient switches plans at 26 weeks. The practice bills the global package to the new plan, which denies it because it wasn't responsible for most of the antepartum period (or bills the old plan, which denies for coverage termination — `CO-27`).

**The fix:** split billing by coverage period. Antepartum care before the change goes to the first plan (E/M or antepartum package codes, by visit count); the remaining antepartum care, delivery and postpartum go to the new plan. Re-verify insurance during the pregnancy so changes are caught before delivery. See our [split maternity care guide](/blog/split-maternity-care-billing-transfer-example).

## Mistake 5: Missing separately billable services

The global package covers **routine** care — not everything that happens during a pregnancy. Commonly missed services include:

- Obstetric ultrasounds (`76801`–`76828`)
- Fetal non-stress tests (`59025`)
- Visits for complications beyond routine care, with the right O-code diagnosis (per payer policy)
- Amniocentesis (`59000`) and external cephalic version (`59412`)
- In-office laboratory testing

**The fix:** make sure charge capture for these services happens on the date of service, not at delivery, and that the diagnosis supports the service. Our [CPT code library](/resources/cpt-library) lists the related codes.

## Mistake 6: Dropping the device code on LARC insertions

Postpartum and interval LARC (IUDs and implants) are common in obstetric practices. When the practice purchases the device, the insertion code (`58300` for IUD, `11981` for implant) must be accompanied by the device's HCPCS code — for example `J7296`, `J7297`, `J7298`, `J7300`, `J7301` or `J7307`. Billing the insertion without the device means the practice absorbs the device cost.

**Two cautions:** LARC placed **immediately postpartum in the hospital** is often billed differently — the hospital may supply and bill the device on the facility claim. And some payers require devices to come from a specialty pharmacy. Confirm who supplies and bills the device before the insertion.

<!-- cta -->

## Mistake 7: Diagnosis errors on the delivery claim

Delivery claims are frequently rejected or denied for diagnosis problems rather than procedure codes:

- **Missing `Z37`** — the outcome-of-delivery code is required on every maternal delivery record.
- **Missing `Z3A`** — weeks of gestation.
- **`O80` misused** — it's only for full-term, uncomplicated vaginal delivery of a single liveborn infant, and it can't be combined with other Chapter 15 codes.
- **Wrong principal diagnosis on cesareans** — it should be the condition that led to the cesarean.
- **Unspecified scar type** for previous cesareans when the record states it (`O34.211` low transverse, `O34.212` vertical).

**The fix:** a delivery claim checklist and claim scrubber rules. See our guide to [sequencing multiple O codes](/blog/multiple-o-codes-sequencing-pregnancy).

## How to find these mistakes in your own practice

Run a simple reconciliation:

1. List every patient with a prenatal visit in the last 12–18 months.
2. For each, confirm the pregnancy ended in one of: a billed global code, billed components, or a documented reason (loss, transfer with antepartum billed).
3. For billed deliveries, check delivery type vs. code family, payer at delivery vs. payer during antepartum care, and the diagnosis set.
4. Check that ultrasounds, NSTs and LARC devices were billed when performed.

Any pregnancy that doesn't reconcile is a potential revenue gap — and a sign of a process to fix.

## What changes in 2027

On January 1, 2027, CPT deletes the global maternity package. Prenatal and postpartum visits will be billed per encounter with E/M codes, and new codes will report labor management (`59080`–`59083`) and delivery (`59431`, `59432`, `59502`, `59503`). Several of the mistakes above disappear — there's no package to misapply — but new ones will appear: undocumented E/M levels, missed visits, labor complexity errors and payer confusion during the transition. Read our [2027 maternity transition guide](/resources/2027-maternity-transition).

## Get a free global maternity billing review

These mistakes are easy to miss from the inside and easy to fix once you see them. Our [global maternity billing](/global-maternity-billing) service tracks every pregnancy from the first visit to the final claim. Send us a WhatsApp message and we'll review a sample of your recent OB claims for free.
