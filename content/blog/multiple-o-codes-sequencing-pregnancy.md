---
title: "Multiple O Codes in Pregnancy: How to Sequence Primary and Secondary Diagnoses"
metaTitle: "O Codes Sequencing: Multiple O Codes, Primary & Secondary"
description: "When a pregnant patient has several conditions, which O code goes first? Seven worked examples covering prenatal visits, deliveries, twins, incidental conditions and companion Z codes."
date: "2026-10-15"
category: "ICD-10 Coding"
image: pregnantBelly
service: global-maternity-billing
keywords: ["o codes sequencing", "multiple o codes pregnancy", "o codes secondary sequencing", "icd-10 pregnancy coding"]
faqs:
  - q: "Can you report more than one O code on a claim?"
    a: "Yes. Report every Chapter 15 code that describes a condition affecting the pregnancy and addressed or relevant at the encounter. The code for the main reason for the encounter is sequenced first."
  - q: "Can an O code ever be secondary?"
    a: "Generally O codes are sequenced before codes from other chapters. The main exception is when the provider documents that the pregnancy is incidental to the encounter — then the condition is listed first with Z33.1 (pregnant state, incidental), and no O code is used for that condition."
  - q: "Where does Z3A go?"
    a: "Z3A weeks-of-gestation codes are secondary codes reported with Chapter 15 codes on the maternal record. They are never the first-listed diagnosis."
  - q: "What if two complications are equally responsible for the visit?"
    a: "When two or more complications are equally the reason for the encounter, either may be sequenced first."
---

Chapter 15 of ICD-10-CM gives O codes **sequencing priority** over codes from every other chapter. That rule is easy to remember when a pregnant patient has one problem. It gets harder when she has three: chronic hypertension, a previous cesarean scar and gestational diabetes — and the visit today is mainly about her blood pressure.

This article walks through how to sequence multiple O codes, when an O code can be secondary, and which Z codes belong alongside them. For a full category reference, see our [ICD-10 O codes and sequencing guide](/resources/icd10-o-codes).

## The rules in one place

The ICD-10-CM Official Guidelines for Chapter 15 boil down to a handful of principles:

1. **O codes come first.** Chapter 15 codes are sequenced before codes from other chapters. Other-chapter codes can be added to provide more detail.
2. **The reason for the encounter leads.** Among several O codes, the condition that is the main reason for the visit or admission is sequenced first.
3. **Equal reasons, either order.** If two complications are equally responsible, either can go first.
4. **Report all the O codes that apply.** Every condition that complicates the pregnancy and is relevant to the encounter should be coded — not just the first one.
5. **Pregnancy is assumed to be affected** unless the provider documents otherwise. If the provider states the condition isn't affecting the pregnancy, code the condition first and add `Z33.1`.
6. **Z codes support, not lead.** `Z3A` (weeks of gestation) and `Z37` (outcome of delivery) are secondary. `Z34` normal-pregnancy supervision is never combined with O codes.
7. **Delivery encounters** list the main circumstance or complication of the delivery first; for a cesarean, generally the condition that led to the cesarean.

Now let's apply those rules.

## Example 1: Prenatal visit with three conditions

**Scenario:** 34 weeks. The patient has pre-existing essential hypertension and a prior low transverse cesarean. She also has gestational diabetes controlled by diet. Today's visit is mainly to adjust her antihypertensive medication; her glucose log is also reviewed.

1. `O10.013` — pre-existing essential hypertension complicating pregnancy, third trimester (main reason for visit)
2. `O24.410` — gestational diabetes mellitus in pregnancy, diet controlled
3. `O34.211` — maternal care for low transverse scar from previous cesarean delivery
4. `Z3A.34` — 34 weeks gestation

**Why:** Hypertension is the main reason for the encounter, so it leads. The diabetes and scar are relevant conditions affecting the pregnancy. Note that `O10.01-` codes include the hypertension, so a separate `I10` isn't added; the O10 category instructions tell you when an additional code is needed for associated conditions such as hypertensive heart or kidney disease.

## Example 2: Same patient, different focus

**Scenario:** Two weeks later the visit is mainly about rising glucose readings and starting insulin.

1. `O24.414` — gestational diabetes mellitus in pregnancy, insulin controlled
2. `O10.013` — pre-existing essential hypertension, third trimester
3. `O34.211` — low transverse scar from previous cesarean
4. `Z3A.36` — 36 weeks gestation

**Why:** The diagnoses didn't change, but the reason for the visit did, so the order changes. Also note: don't add `Z79.4` (long-term insulin use) with `O24.4-` gestational diabetes codes — the control method is already captured in the O code.

<!-- cta -->

## Example 3: Repeat cesarean delivery

**Scenario:** A patient with a previous classical (vertical) cesarean scar is admitted at 39 weeks for a planned repeat cesarean. She delivers a single liveborn infant without complications.

1. `O34.212` — maternal care for vertical scar from previous cesarean delivery
2. `Z3A.39` — 39 weeks gestation
3. `Z37.0` — single live birth

**Why:** The previous vertical scar is the reason for the cesarean, so it's the principal diagnosis. `O80` can't be used — it's only for uncomplicated vaginal deliveries. And because the scar type affects both clinical management and coding, "unspecified" (`O34.219`) should be avoided when the operative or prenatal record states the type.

## Example 4: Twins with preterm labor

**Scenario:** A patient with dichorionic/diamniotic twins is admitted at 33 weeks in preterm labor and delivers both babies vaginally.

1. `O60.14X0` — preterm labor third trimester with preterm delivery third trimester (seventh character `0` — the condition isn't specific to one fetus)
2. `O30.043` — twin pregnancy, dichorionic/diamniotic, third trimester
3. `Z3A.33` — 33 weeks gestation
4. `Z37.2` — twins, both liveborn

**Why:** Preterm labor is the main circumstance of the delivery. The twin pregnancy code adds essential context, and `Z37.2` reports the outcome. If a complication affected only one twin — for example malpresentation of the second twin — the code would carry a seventh character identifying that fetus (`1`, `2`, and so on).

## Example 5: An infection during pregnancy

**Scenario:** At 22 weeks, the patient is seen for acute cystitis due to *E. coli*.

1. `O23.12` — infections of bladder in pregnancy, second trimester
2. `B96.20` — unspecified *Escherichia coli* as the cause of diseases classified elsewhere
3. `Z3A.22` — 22 weeks gestation

**Why:** The O code leads and the organism code from Chapter 1 adds specificity, as instructed by the "use additional code" note at `O23`.

## Example 6: When the pregnancy is incidental

**Scenario:** A patient at 18 weeks is seen for an ankle sprain after a fall. The provider documents that the injury is not affecting the pregnancy.

1. `S93.401A` — sprain of unspecified ligament of right ankle, initial encounter (code the actual side and ligament when documented)
2. `Z33.1` — pregnant state, incidental
3. External cause codes as required by payer or state policy

**Why:** This is the main exception to O-code priority. Because the provider explicitly documented that the condition is not affecting the pregnancy, the condition is first-listed and `Z33.1` notes the pregnancy. Without that documentation, the default assumption is that the condition does affect the pregnancy and an O code would be used.

## Example 7: Substance use and obesity

**Scenario:** At 12 weeks, a patient's routine high-risk supervision visit addresses ongoing cigarette smoking and class 2 obesity. She is also an elderly multigravida.

1. `O09.521` — supervision of elderly multigravida, first trimester
2. `O99.331` — smoking (tobacco) complicating pregnancy, first trimester
3. `F17.210` — nicotine dependence, cigarettes, uncomplicated
4. `O99.211` — obesity complicating pregnancy, first trimester
5. `E66.812` — obesity, class 2 (use the obesity code that matches the documentation)
6. `Z3A.12` — 12 weeks gestation

**Why:** For routine prenatal visits of a high-risk patient, the `O09` supervision code is first-listed, with other O codes as secondary. The Chapter 15 codes for smoking and obesity are followed by the other-chapter codes that specify the condition, as their instructional notes require.

<!-- cta -->

## The most common sequencing mistakes

- **Leading with a Z code.** `Z3A`, `Z37` and `Z33.1` are secondary in obstetric encounters (with the incidental-pregnancy exception putting the *condition* first, not `Z33.1`).
- **Combining `Z34` with O codes.** Normal-pregnancy supervision can't coexist with a complication code.
- **Reporting only one O code.** Leaving out relevant conditions understates the complexity of the encounter, which matters even more once prenatal visits are billed by E/M level in 2027.
- **Static diagnosis lists.** Copying the same problem list in the same order to every visit, regardless of what was addressed.
- **Wrong trimester character.** Trimester is based on gestational age on the date of service — 14 weeks 0 days starts the second trimester, 28 weeks 0 days the third.
- **Missing seventh characters** for multiple gestations in categories that require fetus identification.

## Why sequencing matters more in 2027

Through 2026, most routine prenatal care is billed inside a global package, and the diagnosis set on individual visits gets less scrutiny. Starting January 1, 2027, the global package ends: prenatal visits are reported per encounter with E/M codes, and payers can identify pregnancy-related claims by their `Z34` or O-code diagnoses. Accurate, well-sequenced O codes will support the E/M level, medical necessity, and correct routing of maternity claims. Read our [2027 maternity transition guide](/resources/2027-maternity-transition) for the full picture.

## Quick sequencing decision tree

1. Is the patient pregnant (or postpartum) and is the condition related to or affecting the pregnancy? **No / documented as not affecting** → code the condition first, add `Z33.1`. **Yes** → continue.
2. Is this a delivery encounter? **Yes** → principal = main circumstance/complication of delivery (or the reason for cesarean), then other O codes, `Z3A`, `Z37`. **No** → continue.
3. Is this a routine prenatal visit with no complications? **Yes** → `Z34.-` + `Z3A`. **High risk?** → `O09.-` first, then other O codes + `Z3A`.
4. Is the visit for a complication? → the complication that's the main reason first, then other relevant O codes, other-chapter detail codes, and `Z3A`.

## Get help with OB diagnosis coding

Diagnosis errors are a quiet but steady source of obstetric denials and rejections. Our [global maternity billing](/global-maternity-billing) team reviews the diagnosis set on every OB claim before submission, and our [coding audits](/coding-audits) can check your current O-code patterns by provider. Questions? Send us a WhatsApp message — quick answers are free.

*Examples are illustrative and based on the ICD-10-CM Official Guidelines for Coding and Reporting. Always code from the actual documentation and the current year's code set.*
