---
title: "CO-97 Denial Code: What It Means and How to Fix It (OB/GYN Guide)"
metaTitle: "CO-97 Denial Code Description, Causes & How to Fix It"
description: "Denial code CO-97 means the service is included in payment for another service. Learn the full description, common OB/GYN causes (global OB, surgical global, NCCI), modifiers that fix it and when the denial is correct."
date: "2026-07-09"
updated: "2026-10-15"
category: "Denial Management"
image: documents
service: denial-management
keywords: ["co 97 denial code", "denial code co 97", "co-97", "97 denial code description", "oa 97 denial code", "pr 97 denial code"]
faqs:
  - q: "What does denial code CO-97 mean?"
    a: "CARC 97 means 'The benefit for this service is included in the payment/allowance for another service/procedure that has already been adjudicated.' With group code CO (contractual obligation), the amount can't be billed to the patient."
  - q: "What's the difference between CO-97, OA-97 and PR-97?"
    a: "The number is the reason (bundled into another service); the letters are the group code. CO means the provider must write it off under contract, OA is an 'other adjustment' that's neither contractual nor patient responsibility, and PR means the patient is responsible — which is unusual for a bundling denial and worth questioning."
  - q: "Can I bill the patient for a CO-97 denial?"
    a: "No. A CO group code means the adjustment is a contractual obligation of the provider."
  - q: "How do I fix a CO-97 denial?"
    a: "First decide whether the bundling is correct. If the service was truly separate and documented, submit a corrected claim with the appropriate modifier (such as 25, 59, XS, XU or 79) or appeal with documentation. If the bundling is correct, adjust it off and fix the charge-capture rule that billed it."
  - q: "Which RARC codes appear with CO-97?"
    a: "Common companions include M15 (separately billed services/tests have been bundled as they are considered components of the same procedure) and M80 (not covered when performed during the same session/date as a previously processed service)."
---

If you work OB/GYN remits, you've seen **CO-97** more times than you can count. It's one of the most common denial codes in the specialty — and one of the most misunderstood, because sometimes it's a mistake that can be fixed and sometimes the payer is right.

This guide explains exactly what CO-97 means, why it shows up so often in women's health, how to tell a fixable CO-97 from a correct one, and how to stop it from recurring.

## The CO-97 description

CO-97 is a combination of a **group code** and a **Claim Adjustment Reason Code (CARC)**:

- **CO** — *Contractual Obligation*: the adjustment is the provider's responsibility under its contract and can't be billed to the patient.
- **97** — *"The benefit for this service is included in the payment/allowance for another service/procedure that has already been adjudicated."*

In plain English: **the payer considers this service part of something else it already paid for.** The CARC usage note also points to the remittance's policy reference segment, if the payer included one, which can tell you which policy or edit triggered the denial.

### CO-97 vs. OA-97 vs. PR-97

The reason code is the same; the group code tells you who bears the cost:

| Code | Meaning | Can you bill the patient? |
|---|---|---|
| `CO-97` | Bundled; contractual write-off | No |
| `OA-97` | Bundled; "other adjustment" | Generally no |
| `PR-97` | Bundled; assigned to patient responsibility | Only if your contract and the payer allow — question it first |

`PR-97` is unusual for a bundling decision. If you see it, check the payer's explanation before sending a statement to the patient.

### Common companion RARCs

Remittance Advice Remark Codes often explain the reason further. Two you'll see frequently with CARC 97:

- **`M15`** — separately billed services/tests have been bundled as they are considered components of the same procedure
- **`M80`** — not covered when performed during the same session/date as a previously processed service

## Why CO-97 is so common in OB/GYN

OB/GYN has more bundling relationships than most specialties because of three overlapping systems:

### 1. The global maternity package

Through 2026, routine antepartum visits, the delivery and routine postpartum care are paid through a single global obstetric code (`59400`, `59510`, `59610`, `59618`). If a routine prenatal or postpartum visit is billed separately with an E/M code — or the global is billed after visits were already paid — CO-97 follows.

**Is it correct?** Usually yes, for **routine** care. But visits for **complications or unrelated problems** during pregnancy can be separately billable with the right diagnosis. The fix there is better diagnosis coding, not a modifier. See [global maternity billing](/global-maternity-billing).

### 2. The surgical global period

Most major gynecologic surgeries carry a 90-day global period. Routine post-op visits are included and should be reported with `99024` (post-op follow-up visit, no charge) for tracking. An E/M billed for a routine post-op visit draws CO-97.

**Is it correct?** For routine follow-up, yes. For an unrelated problem during the global period, use modifier `24` on the E/M. For an unrelated procedure, use `79`. For a staged or related procedure, `58`. For a return to the OR for a complication, `78`.

### 3. NCCI procedure-to-procedure edits

The National Correct Coding Initiative bundles many code pairs commonly performed together — and payers apply those edits (or their own versions) to every claim. Common OB/GYN examples:

- Diagnostic laparoscopy (`49320`) with any surgical laparoscopy
- Diagnostic hysteroscopy (`58555`) with surgical hysteroscopy
- Lysis of adhesions (`58660`) with hysterectomy or other laparoscopic procedures
- Endometriosis excision (`58662`) with hysterectomy in the same field
- Cystoscopy performed during hysterectomy or pelvic floor repair
- An E/M visit on the same day as a minor procedure (IUD insertion, endometrial biopsy, colposcopy) without modifier `25`

<!-- cta -->

## How to work a CO-97 denial: step by step

### Step 1: Identify what it was bundled into

Look at the remit for the claim and the patient's other recent claims. What service did the payer pay that it considers to include this one? A global OB code? A surgery 30 days earlier? Another line on the same claim?

### Step 2: Decide whether the bundling is correct

Ask:

- Was the service **routine** care inside a global package or surgical global period?
- Is the code pair an NCCI edit with a modifier indicator of `0` (never separately payable) or `1` (separately payable with an appropriate modifier and documentation)?
- Does the **documentation** show a separate session, different anatomic site, separate lesion, or significant, separately identifiable E/M work?

If the answer points to correct bundling, the denial stands. Adjust it off — and find out why it was billed.

### Step 3: If it was separate, fix the claim

- **Missing modifier** → submit a **corrected claim** (frequency code `7`) with the right modifier: `25` for a significant, separately identifiable E/M; `59` or an X-modifier (`XE`, `XS`, `XP`, `XU`) for distinct procedures; `24`, `58`, `78` or `79` for global period situations.
- **Wrong diagnosis** → correct the diagnosis to reflect the complication or unrelated problem.
- **Payer misapplied an edit** → request reconsideration or appeal with the operative note or visit note and a short explanation citing the NCCI policy or payer policy.

Don't send a duplicate claim. Duplicates generate `CO-18` denials and slow everything down.

### Step 4: Track it

Log every CO-97 by cause: global OB, surgical global, NCCI pair, E/M with procedure. The pattern tells you where to fix the process.

## Worked examples

**Example 1 — E/M with IUD insertion.** A patient comes in for a problem (abnormal bleeding) that's evaluated and managed, and an IUD is inserted at the same visit. The E/M is denied CO-97.
→ If the note supports a significant, separately identifiable evaluation beyond the pre-procedure assessment, resubmit the E/M with modifier `25`. If the visit was just the IUD insertion, the denial is correct.

**Example 2 — Post-op visit for an unrelated problem.** Six weeks after a hysterectomy, a patient is seen for a breast lump. The E/M is denied CO-97.
→ Resubmit with modifier `24` (unrelated E/M during a post-op period) and a diagnosis reflecting the breast complaint.

**Example 3 — Prenatal visit for a complication.** A 30-week patient is seen for elevated blood pressure outside routine visits. The E/M is denied CO-97 as part of the global.
→ If the payer allows separately billed complication visits, correct the diagnosis to the appropriate O code (for example `O13.3`, gestational hypertension, third trimester) and appeal or resubmit per payer policy.

**Example 4 — Endometriosis excision with hysterectomy.** `58662` is denied CO-97 against `58571`.
→ Usually correct when the excision was in the same operative field. Separate reporting requires clearly distinct lesions or sites documented in the operative note — review carefully before appealing.

<!-- cta -->

## How to prevent CO-97 denials

- **Track global periods** — obstetric and surgical — so routine visits aren't billed and post-op visits are logged with `99024`.
- **Build NCCI edits into your claim scrubber** so bundled pairs are flagged before submission.
- **Make modifier decisions based on documentation**, never by habit. Unsupported modifier `59` is a common audit target.
- **Teach providers** to document separately identifiable work clearly — the problem addressed, the decision making, and why it went beyond the procedure.
- **Review CO-97 trends monthly** by cause and provider.

## When to escalate

If a payer applies a bundling edit that doesn't match NCCI or its own published policy, or consistently ignores valid modifiers, escalate: request a peer-to-peer or written explanation, cite the policy, and keep a log. Patterns across many claims are worth raising with your payer representative.

## Need help with CO-97 and other bundling denials?

CO-97 is fixable when the work was distinct and preventable when it wasn't. Our [denial management](/denial-management) team works every denial to its root cause, and our [coding audits](/coding-audits) identify the modifier and global-period patterns behind recurring CO-97s. Send us a WhatsApp message for a free review of your recent denials.
