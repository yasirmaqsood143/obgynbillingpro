---
title: "Modifier 95 vs 93 vs GT vs GQ: Telehealth Modifiers Explained for 2026"
metaTitle: "Modifier 95 vs 93 vs GT: Telehealth Modifiers (2026 Guide)"
description: "What modifier 95, 93, GT, GQ and FQ mean, which payers want which, how they work with POS 02 and 10, and the telehealth modifier mistakes that cause denials in OB/GYN practices."
date: "2026-10-15"
category: "Telehealth"
image: telehealth2
service: telehealth-billing
keywords: ["modifier 95", "93 modifier vs 95", "gt modifier", "gq modifier", "telehealth modifier", "modifier 95 for telehealth"]
faqs:
  - q: "What does modifier 95 mean?"
    a: "Modifier 95 means synchronous telemedicine service rendered via a real-time interactive audio and video telecommunications system. It's appended to codes eligible for telemedicine — listed in CPT Appendix P — when the visit is done by live audio-video."
  - q: "What is the difference between modifier 93 and 95?"
    a: "Modifier 95 is for real-time audio-video visits; modifier 93 is for real-time audio-only visits. Use 93 only when no video was used, and document why."
  - q: "Is modifier GT still valid?"
    a: "GT is still a valid HCPCS modifier, but its use is limited. Medicare uses it mainly for critical access hospital method II billing, and some Medicaid and commercial plans still request it. Most payers now want modifier 95 instead."
  - q: "What does modifier GQ mean?"
    a: "GQ means via asynchronous (store-and-forward) telecommunications system. Medicare uses it for federal telemedicine demonstration programs in Alaska and Hawaii; a few other payers use it for store-and-forward services."
  - q: "Does Medicare require modifier 95?"
    a: "Medicare relies mainly on the place-of-service code — POS 02 or POS 10 — to identify telehealth. Modifier 95 is required only in certain situations defined by CMS. Many commercial and Medicaid plans, however, require modifier 95 on every audio-video visit."
---

Telehealth modifiers are small — two characters — but they decide whether a virtual visit is paid, denied, or paid at the wrong rate. The trouble is that **payers don't agree** on which ones to use. A visit billed perfectly for one commercial plan can deny at Medicare, and a modifier one Medicaid program requires may be rejected by another.

This guide explains each telehealth modifier, how it interacts with place-of-service codes, and how to build payer-specific rules so your practice stops guessing.

## The telehealth modifiers at a glance

| Modifier | Meaning | Typical use |
|---|---|---|
| `95` | Synchronous telemedicine via real-time interactive **audio and video** | Commercial and Medicaid audio-video visits; Medicare in specific situations |
| `93` | Synchronous telemedicine via **audio only** | Audio-only visits where payers cover them |
| `GT` | Via interactive audio and video telecommunication systems | Medicare critical access hospital method II; some Medicaid/commercial plans |
| `GQ` | Via **asynchronous** (store-and-forward) telecommunications | Medicare demonstration programs in Alaska and Hawaii; some payer store-and-forward services |
| `FQ` | Service furnished using audio-only communication technology | Medicare rural health clinics and FQHCs |

## Modifier 95 — the workhorse

Modifier `95` is a CPT modifier that indicates a synchronous telemedicine service rendered through a real-time interactive audio and video system. It's meant for services that are listed in **CPT Appendix P**, the list of codes that may be used for synchronous telemedicine.

For OB/GYN practices, that includes office and outpatient E/M visits (`99202`–`99215`) and a range of counseling and other services. When a commercial or Medicaid plan asks for modifier `95`, it typically wants:

- The **E/M code** that reflects the medical decision making or total time
- **Modifier 95**
- A **place of service** that the payer specifies — often `02` or `10`, sometimes the POS where the visit would have occurred in person (usually `11`)

## Modifier 93 — audio-only visits

Modifier `93` (synchronous telemedicine via telephone or other real-time interactive **audio-only** system) was added to CPT for services listed in Appendix T. Use it only when no video was used for the visit.

When audio-only visits are covered, payers usually expect:

- Documentation that the patient was offered video or couldn't use it, or that audio-only was clinically appropriate
- The same medical documentation required for the visit level billed
- Modifier `93` instead of `95`

Don't confuse modifier `93` with the old audio-only telephone codes `99441`–`99443`, which were **deleted in 2025**.

<!-- cta -->

## Modifier GT — mostly retired

`GT` ("via interactive audio and video telecommunication systems") was the original Medicare telehealth modifier. CMS replaced it with POS `02` years ago, and it's now limited to:

- Medicare claims from **critical access hospitals billing under method II**
- Some **state Medicaid programs** that never updated their telehealth policy
- A handful of **commercial plans** with older policies

If a payer hasn't specifically asked for `GT`, use `95` instead.

## Modifier GQ — store-and-forward

`GQ` identifies **asynchronous** telecommunication — for example, images or recorded information sent for later review. For Medicare, it's used in the federal telemedicine demonstration programs in Alaska and Hawaii. Outside those programs, a few payers use it for store-and-forward services. Most OB/GYN practices will rarely need it.

## Modifier FQ — RHCs and FQHCs

`FQ` identifies audio-only services furnished by Medicare rural health clinics and federally qualified health centers. If your practice is part of an FQHC or RHC, Medicare's billing rules for those settings — including the specific G-codes they use for virtual communication and mental health visits — apply instead of the standard physician fee schedule rules.

## How modifiers work with place of service

Modifiers tell the payer *how* the service was delivered. The place-of-service code tells the payer *where the patient was*:

| POS | Meaning |
|---|---|
| `02` | Telehealth provided other than in patient's home |
| `10` | Telehealth provided in patient's home |

For **Medicare**, POS `02` and `10` are the main identifiers of telehealth; POS `10` visits are paid at the non-facility rate. Medicare requires modifier `95` only in specific circumstances CMS has defined, and modifier `93` for audio-only services where applicable.

For **commercial and Medicaid plans**, rules vary widely. Common patterns include:

- POS `02`/`10` **plus** modifier `95`
- POS `11` (as if in person) **plus** modifier `95`
- POS `02` with **no** modifier
- `GT` instead of `95` (older Medicaid policies)

That's why a single "telehealth rule" in your billing system almost always produces denials somewhere.

## Medicare telehealth status in 2026

The Consolidated Appropriations Act, 2026 extended the major Medicare telehealth flexibilities through **December 31, 2027** — including telehealth to patients at home, removal of geographic restrictions, and coverage of audio-only services where appropriate. Watch for CMS updates as that date approaches.

## Telemedicine E/M codes 98000–98016

CPT 2025 introduced dedicated telemedicine E/M codes: `98000`–`98007` for audio-video visits and `98008`–`98015` for audio-only visits, plus `98016` for brief virtual check-ins (replacing HCPCS `G2012`). These codes describe the telemedicine modality in the code itself, so they don't need modifier `95` or `93`.

Payer adoption is mixed. Medicare generally hasn't paid most of these codes, continuing to use `99202`–`99215` with telehealth POS codes, while some commercial plans have adopted them. Check each payer's policy before switching.

<!-- cta -->

## Telehealth modifiers in OB/GYN: special considerations

- **Routine prenatal visits inside a global package** aren't billed separately, whether virtual or in person (through 2026). Don't add `95` to a visit that shouldn't be billed at all.
- **Problem visits during pregnancy** — managing hypertension or gestational diabetes between in-person visits — may be billed separately with the right O-code diagnosis.
- **Postoperative telehealth visits** within a 90-day surgical global period are included, unless they address something unrelated.
- **From January 1, 2027**, prenatal and postpartum visits will be reported per encounter with E/M codes, which means virtual prenatal visits will need the correct telehealth modifier and POS for every payer. See our [2027 maternity transition guide](/resources/2027-maternity-transition).

## Build a payer-by-payer telehealth table

The most reliable fix for telehealth denials is a simple table for your top payers:

| Payer | Audio-video code set | POS | Modifier | Audio-only covered? | Audio-only modifier |
|---|---|---|---|---|---|
| Medicare | `99202`–`99215` | `02` / `10` | Per CMS rules | Yes (through 2027) | `93` |
| Commercial plan A | per policy | per policy | `95` | per policy | `93` |
| State Medicaid | per state policy | per policy | `95` or `GT` | per policy | per policy |

Fill in each row from the payer's current published telehealth policy, then build those rules into your claim scrubber. Review the table whenever a payer issues a policy update.

## Documentation checklist

- Patient consent for telehealth, if required by state law or payer policy
- Modality — audio-video or audio-only — and the reason audio-only was used
- Patient location (home vs. other) and provider location
- Medical decision making or total time supporting the E/M level
- Start and end times when billing by time

## Quick reference: which modifier when?

- **Live video visit, commercial plan that requires a modifier** → `95` (with the payer's required POS)
- **Live video visit, Medicare** → POS `02` or `10`; add `95` only where CMS instructs
- **Phone-only visit, payer covers audio-only** → `93`
- **Medicaid program with an older policy** → whatever the state manual specifies — sometimes `GT`
- **Store-and-forward service** → `GQ` where the payer recognizes it
- **RHC/FQHC audio-only service to Medicare** → `FQ`
- **Telemedicine E/M code (`98000`–`98015`)** → no telehealth modifier needed; the code describes the modality

## Let us check your telehealth claims

Telehealth rules shift frequently and vary by payer. Our [telehealth billing](/telehealth-billing) service maintains payer-specific rules for every client, and a free review of your recent virtual visits takes only a WhatsApp message to start.
