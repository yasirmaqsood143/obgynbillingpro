---
title: "ICD-10 Codes for Prenatal Visits: Z34 vs. O09, Pregnancy Tests and First Visits"
metaTitle: "ICD-10 Code for Prenatal Visit: Z34 vs O09 (Pregnancy Codes)"
description: "Which ICD-10 code to use for a prenatal visit: Z34 for normal pregnancy, O09 for high-risk supervision, Z32 for pregnancy tests, Z3A weeks of gestation — with examples for first visits, rule-out pregnancy and postpartum visits."
date: "2026-11-12"
category: "ICD-10 Coding"
image: pregnantBelly
service: global-maternity-billing
keywords: ["icd 10 code for prenatal visit", "icd 10 code for pregnancy visit", "rule out pregnancy icd 10", "pregnancy icd 10 codes", "z34", "o09"]
faqs:
  - q: "What is the ICD-10 code for a routine prenatal visit?"
    a: "For a normal pregnancy with no complications, use Z34.0- (supervision of normal first pregnancy) or Z34.8- (supervision of other normal pregnancy), with the final character for the trimester, plus a Z3A code for weeks of gestation."
  - q: "When do I use O09 instead of Z34?"
    a: "Use O09.- (supervision of high-risk pregnancy) when the pregnancy is high risk — for example advanced maternal age, history of preterm labor, pregnancy from assisted reproduction or insufficient prenatal care. O09 replaces Z34; the two aren't used together."
  - q: "What is the ICD-10 code for a pregnancy test?"
    a: "Z32.00 (pregnancy examination or test, pregnancy unconfirmed), Z32.01 (result positive) or Z32.02 (result negative)."
  - q: "Can I code 'rule out pregnancy'?"
    a: "In outpatient settings, don't code a 'rule out' diagnosis as if confirmed. Code the pregnancy test encounter (Z32.0-) or the signs and symptoms that prompted the test, such as missed period (N91.-) or nausea."
  - q: "What is the ICD-10 code for a postpartum visit?"
    a: "Z39.2 (encounter for routine postpartum follow-up) for a routine visit. If the visit addresses a postpartum complication, code the complication from Chapter 15 instead."
---

Prenatal visits are some of the most frequent encounters in an OB/GYN practice, and their diagnosis codes matter more than many practices realize. Through 2026, routine prenatal visits are mostly bundled into the global maternity package — but the diagnoses still drive medical necessity for ultrasounds and labs, identify high-risk patients, and determine whether problem visits are separately billable. Starting January 1, 2027, when prenatal visits are billed per encounter, they'll matter even more.

## The core codes

| Situation | ICD-10-CM codes |
|---|---|
| Possible pregnancy, test performed | `Z32.00` unconfirmed · `Z32.01` positive · `Z32.02` negative |
| Routine prenatal visit, normal first pregnancy | `Z34.0-` (by trimester) + `Z3A.__` |
| Routine prenatal visit, normal subsequent pregnancy | `Z34.8-` (by trimester) + `Z3A.__` |
| Routine prenatal visit, high-risk pregnancy | `O09.-` (by risk factor and trimester) + `Z3A.__` |
| Prenatal visit for a complication | The complication's O code first, + `Z3A.__` |
| Pregnant, unrelated condition, documented as not affecting pregnancy | Condition first + `Z33.1` |
| Routine postpartum visit | `Z39.2` |
| Lactating mother encounter | `Z39.1` |

## Z34: supervision of normal pregnancy

`Z34.-` is for **routine** prenatal care of a pregnancy with **no complications**:

- `Z34.00`–`Z34.03` — supervision of normal **first** pregnancy (unspecified trimester, first, second, third)
- `Z34.80`–`Z34.83` — supervision of **other** normal pregnancy (second and subsequent)
- `Z34.90`–`Z34.93` — supervision of normal pregnancy, unspecified

**Key rule:** `Z34` codes are **not used with any Chapter 15 code**. The moment a complication or high-risk factor is documented, `Z34` no longer applies.

Use the trimester character based on the gestational age on the date of service: first trimester is less than 14 weeks 0 days; second is 14 weeks 0 days to less than 28 weeks 0 days; third is 28 weeks 0 days until delivery.

## O09: supervision of high-risk pregnancy

`O09.-` codes are first-listed for **routine prenatal visits of high-risk patients**. Common categories:

| Code | Risk factor |
|---|---|
| `O09.0-` | Pregnancy with history of infertility |
| `O09.1-` | Pregnancy with history of ectopic pregnancy |
| `O09.21-` / `O09.29-` | History of pre-term labor / other poor reproductive or obstetric history |
| `O09.3-` | Insufficient antenatal care |
| `O09.4-` | Grand multiparity |
| `O09.51-` / `O09.52-` | Elderly primigravida / elderly multigravida (35 or older at expected delivery) |
| `O09.61-` / `O09.62-` | Young primigravida / young multigravida |
| `O09.7-` | High-risk pregnancy due to social problems |
| `O09.81-` | Pregnancy resulting from assisted reproductive technology |
| `O09.82-` | Pregnancy with history of in utero procedure during previous pregnancy |
| `O09.89-` | Supervision of other high-risk pregnancies |
| `O09.A-` | Pregnancy with history of molar pregnancy |

Unlike `Z34`, `O09` codes **can** be combined with other O codes that describe complications addressed at the visit.

<!-- cta -->

## The first prenatal visit

The first prenatal visit often confirms the pregnancy, establishes dating and identifies risk factors. Coding depends on what's documented:

- **Pregnancy confirmed earlier, routine first OB visit, no risk factors:** `Z34.01` (first pregnancy, first trimester) or `Z34.81` (subsequent pregnancy, first trimester) + `Z3A.__`.
- **Risk factors identified:** the applicable `O09` code(s) + `Z3A.__`, and O codes for any conditions addressed.
- **Pregnancy confirmed at this visit:** some coders add `Z32.01` (positive pregnancy test) when the test is performed at the visit; others code the supervision code once pregnancy is confirmed. Follow your payer's guidance and be consistent.

Some Medicaid programs require a notification claim for the first visit — sometimes with the `TH` modifier. See our [TH modifier guide](/blog/th-modifier-obstetric-billing).

## Pregnancy tests and "rule out pregnancy"

Searches for "rule out pregnancy ICD-10" are common because the phrase appears in many orders. The ICD-10-CM outpatient guidelines say **don't code diagnoses documented as "rule out," "probable" or "suspected" as if they were confirmed**. Instead:

- Code the **encounter for a pregnancy test**: `Z32.00`, `Z32.01` or `Z32.02`, depending on whether the result is known.
- Or code the **signs and symptoms** that prompted the test — for example amenorrhea or a missed period (`N91.-`), nausea (`R11.0`) or abnormal bleeding.
- When a pregnancy test is done as a precaution before another service (for example, imaging or LARC insertion), code the reason for the main service and, if needed, `Z32.0-`.

## Weeks of gestation: Z3A

`Z3A.__` codes report the weeks of gestation on the date of service — `Z3A.01` (less than 8 weeks) through `Z3A.42` and `Z3A.49` (greater than 42 weeks). They're added to Chapter 15 codes and supervision codes on the maternal record. They aren't used for pregnancies with abortive outcomes (`O00`–`O08`), elective terminations, or postpartum conditions.

## Problem visits during pregnancy

When a prenatal visit addresses a complication — elevated blood pressure, gestational diabetes, bleeding, anemia — the **complication's O code** is first-listed:

- `O13.-` gestational hypertension, `O14.-` pre-eclampsia
- `O24.41-` gestational diabetes (with the sixth character for control method)
- `O20.-` hemorrhage in early pregnancy
- `O99.01-` anemia complicating pregnancy (with an additional code for the type of anemia)
- `O21.-` excessive vomiting in pregnancy

These visits may be separately billable outside the global package, depending on payer policy. Sequencing rules for several complications at once are in our guide to [multiple O codes](/blog/multiple-o-codes-sequencing-pregnancy).

<!-- cta -->

## Postpartum visits

- **Routine postpartum follow-up:** `Z39.2`. Within the global package, the routine postpartum visit isn't billed separately (through 2026).
- **Postpartum complications:** Chapter 15 codes for the puerperium, such as `O86.-` (other puerperal infections), `O90.-` (complications of the puerperium) or `F53.0` (postpartum depression), as documented.
- **Postpartum depression screening:** commonly reported with the screening instrument code and an appropriate encounter or screening diagnosis per payer policy.

Under the 2027 maternity changes, postpartum visits will be billed per encounter with E/M codes, making accurate postpartum diagnoses part of every claim.

## Common prenatal diagnosis errors

1. `Z34` used with O codes or for a high-risk pregnancy
2. Trimester character based on the wrong date
3. `Z3A` missing — or used on postpartum or abortive-outcome encounters
4. Diagnosis copied forward from the first visit without updating risk factors or complications
5. "Rule out" diagnoses coded as confirmed
6. `O80` used outside a delivery encounter

## Preparing for per-visit prenatal billing in 2027

When prenatal visits become individually billed E/M services on January 1, 2027, the diagnosis on each visit will help payers identify it as pregnancy-related, support the E/M level and determine patient cost-sharing. Practices should review provider templates now so each visit's diagnoses reflect what was actually addressed. Read the [2027 maternity transition guide](/resources/2027-maternity-transition) and our full [ICD-10 O codes reference](/resources/icd10-o-codes).

## Need help with prenatal coding?

Our [global maternity billing](/global-maternity-billing) team checks the diagnosis set on every obstetric claim and helps practices update templates for 2027. Send us a WhatsApp message for a free review.
