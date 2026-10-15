---
metaTitle: "OB/GYN Taxonomy Code 207V00000X + Subspecialty Codes (2026)"
metaDescription: "The OB/GYN taxonomy code is 207V00000X. See every OB/GYN subspecialty taxonomy code, midwife and NP codes, how taxonomy is used on claims and how to avoid denials."
h1: "OB/GYN Taxonomy Codes: 207V00000X and Every Subspecialty"
crumb: "OB/GYN Taxonomy Codes"
eyebrow: "Provider enrollment reference"
lead: "The healthcare provider taxonomy code for Obstetrics & Gynecology is 207V00000X. This guide lists every OB/GYN subspecialty code, the codes for midwives and women's health nurse practitioners, and how taxonomy affects enrollment and claims."
image: signing
waMessage: "Hi! I have a question about OB/GYN taxonomy codes and enrollment."
updated: "2026-10-15"
faqs:
  - q: "What is the taxonomy code for OB/GYN?"
    a: "The taxonomy code for Obstetrics & Gynecology physicians is 207V00000X. It sits in the Allopathic & Osteopathic Physicians grouping of the NUCC Health Care Provider Taxonomy code set."
  - q: "What is the taxonomy code for a gynecologist only?"
    a: "Physicians who practice gynecology only can use 207VG0400X (Gynecology). Physicians who practice obstetrics only can use 207VX0000X (Obstetrics). Most general OB/GYNs use 207V00000X."
  - q: "What is the taxonomy code for maternal-fetal medicine?"
    a: "Maternal & Fetal Medicine is 207VM0101X."
  - q: "Can a provider have more than one taxonomy code?"
    a: "Yes. A provider can list multiple taxonomy codes on their NPPES record but must designate one as primary. The taxonomy reported on a claim should reflect the specialty under which the service was provided and match the provider's enrollment with that payer."
  - q: "Where does the taxonomy code go on a claim?"
    a: "On electronic 837P claims, taxonomy is reported in the PRV segment for the billing provider and, when required, the rendering provider. On the CMS-1500 paper form it's reported with the ZZ qualifier in the shaded portion of the provider fields. Many Medicaid programs require taxonomy on every claim."
  - q: "How do I change my taxonomy code?"
    a: "Update the taxonomy in your NPPES record online, then update each payer enrollment that relies on it — Medicare (through PECOS), Medicaid and commercial plans. Changing NPPES alone does not update payer records."
---

## The short answer

**The NUCC taxonomy code for Obstetrics & Gynecology is `207V00000X`.** It's the code most general OB/GYN physicians list as their primary taxonomy on their National Provider Identifier (NPI) record. If you subspecialize, a more specific code may describe your practice better — the full list is below.

Taxonomy codes come from the Health Care Provider Taxonomy code set maintained by the National Uniform Claim Committee (NUCC). The set is updated twice a year, so it's worth checking the NUCC website for the latest version before an enrollment.

## OB/GYN physician taxonomy codes

| Taxonomy code | Classification / specialization |
|---|---|
| `207V00000X` | Obstetrics & Gynecology |
| `207VX0000X` | Obstetrics |
| `207VG0400X` | Gynecology |
| `207VM0101X` | Maternal & Fetal Medicine |
| `207VE0102X` | Reproductive Endocrinology |
| `207VX0201X` | Gynecologic Oncology |
| `207VF0040X` | Female Pelvic Medicine & Reconstructive Surgery (urogynecology) |
| `207VC0200X` | Critical Care Medicine |
| `207VH0002X` | Hospice and Palliative Medicine |
| `207VB0002X` | Obesity Medicine |

All OB/GYN physician taxonomy codes start with `207V`. The four characters after it identify the specialization; `00000X` means the general classification with no subspecialty.

<!-- cta -->

## Taxonomy codes for other women's health providers

OB/GYN practices often include providers who aren't physicians. Each has its own taxonomy:

| Provider type | Taxonomy code |
|---|---|
| Advanced Practice Midwife (including certified nurse-midwives) | `367A00000X` |
| Midwife (non-nurse) | `176B00000X` |
| Nurse Practitioner, Obstetrics & Gynecology | `363LX0001X` |
| Nurse Practitioner, Women's Health | `363LW0102X` |
| Physician Assistant | `363A00000X` |

For groups, the organizational (Type 2) NPI usually carries a group taxonomy — for example `193400000X` for a single-specialty group or `193200000X` for a multi-specialty group — though some payers prefer the group to list the specialty taxonomy of its providers. Check each payer's enrollment instructions.

## How to choose the right taxonomy code

Pick the code that best describes the services you actually provide:

- **General OB/GYN practice** — delivering babies and providing gynecologic care — use `207V00000X`.
- **Gynecology only** (no obstetrics) — `207VG0400X` may be more accurate, and some payers use it to route claims and directory listings.
- **Board-certified subspecialists** — maternal-fetal medicine, reproductive endocrinology and infertility, gynecologic oncology, urogynecology — generally list the subspecialty code, and often `207V00000X` as an additional code if they also provide general OB/GYN care.
- **Physicians who provide primarily obstetric care** may use `207VX0000X`.

The taxonomy you choose should be consistent across your NPPES record, your Medicare and Medicaid enrollment, your CAQH profile and your commercial payer contracts.

## Why taxonomy codes matter for billing

Taxonomy isn't just a box on the NPI application. It affects:

- **Claim processing.** Many Medicaid programs and some commercial payers require the taxonomy on claims and use it to match the claim to the right enrollment record. A taxonomy that doesn't match the enrollment can cause rejections.
- **Fee schedules.** Some payers load different fee schedules or allowed services by specialty, which they identify through taxonomy.
- **Provider directories.** Patients searching for a maternal-fetal medicine specialist or a urogynecologist find providers by their listed specialty.
- **Data and quality reporting.** Specialty designation affects how your performance is benchmarked in some programs.

<!-- cta -->

## Where taxonomy goes on a claim

On the **837P electronic claim**, taxonomy is reported in the `PRV` segment:

- Loop 2000A — billing provider specialty information
- Loop 2310B — rendering provider specialty information, when the rendering provider differs from the billing provider

On the **CMS-1500 paper claim**, taxonomy is reported with the `ZZ` qualifier in the shaded area of item 24J (rendering) and item 33b (billing), when a payer requires it.

Your practice management system populates these fields from the provider setup, so the most important step is making sure each provider's taxonomy is configured correctly in the system.

## How to look up or update a taxonomy code

1. **Look up a provider's current taxonomy** on the NPPES NPI Registry by searching the NPI or provider name. The record lists all taxonomy codes and which one is primary.
2. **Update your taxonomy** by logging into NPPES and editing the NPI record. You can add multiple taxonomies but must select one primary.
3. **Update your payer enrollments.** Medicare enrollment is updated through PECOS; Medicaid and commercial plans each have their own process. Changing NPPES alone doesn't change what payers have on file.
4. **Update your PM system** so claims carry the new taxonomy.
5. **Update CAQH** so commercial plans see consistent information.

## Common taxonomy mistakes

- **Mismatch between NPPES and payer enrollment.** The most frequent cause of taxonomy-related rejections, especially with Medicaid.
- **Subspecialists listed only as general OB/GYN**, which can hide them from patients searching directories for their subspecialty.
- **Midwives or NPs billed with a physician taxonomy** — or billed under a physician's NPI when the payer requires their own.
- **Group taxonomy used for an individual** or vice versa.
- **Outdated codes** after NUCC updates or after a provider completes subspecialty training.

## Quick reference: which code should I choose?

| If the provider is… | Primary taxonomy |
|---|---|
| A general OB/GYN who delivers and provides gynecologic care | `207V00000X` |
| A gynecologist who no longer practices obstetrics | `207VG0400X` |
| A maternal-fetal medicine specialist | `207VM0101X` |
| A reproductive endocrinology and infertility specialist | `207VE0102X` |
| A gynecologic oncologist | `207VX0201X` |
| A urogynecologist | `207VF0040X` |
| A certified nurse-midwife | `367A00000X` |
| An OB/GYN or women's health nurse practitioner | `363LX0001X` or `363LW0102X` |

## How we help

Taxonomy is part of our [credentialing and enrollment](/credentialing) service and our [new practice setup](/practice-setup) process. We check that every provider's taxonomy is correct and consistent across NPPES, Medicare, Medicaid, CAQH and commercial payers — and that your billing system reports it the way each payer requires. Taxonomy problems often show up as unexplained rejections; our [denial management](/denial-management) team traces them back to the source.

Have a taxonomy or enrollment question? Send us a WhatsApp message — we're happy to help, free of charge.
