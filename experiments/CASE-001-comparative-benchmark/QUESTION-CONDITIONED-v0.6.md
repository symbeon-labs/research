# CASE-001 — Question-Conditioned Resolution Experiment v0.6

**Evidence class:** Synthetic  
**Status:** Executed  
**Research series:** ART-002  
**Purpose:** Test the corrected semantic question identified after v0.1–v0.5.

## 1. Research question

Given the **same heterogeneous evidence**, does the operational result depend materially on the **operational question/context**, rather than being a single global state?

A secondary question is whether that question-conditioned transformation requires an explicit ORC boundary.

The experiment therefore separates:

`EVIDENCE + QUESTION + POLICY → RESOLUTION → OPERATIONAL REPRESENTATION`

from the weaker model:

`EVIDENCE → GLOBAL STATE`

## 2. Why this experiment follows v0.4

v0.4 showed that a conventional preserving composition can retain source assertions, provenance, timestamps, authority and question-specific information without naming an ORC boundary.

Therefore, information preservation is no longer treated as the distinguishing hypothesis.

v0.6 tests the transformation itself: whether one operational state can serve materially different questions over the same evidence.

## 3. Fixed evidence

- A1 — NF-e: expected quantity = 100 at T0.
- A2 — scanner: observed quantity = 98 at T1.
- A3 — authorized operator: verified quantity = 100 at T2.
- A4 — ERP: current inventory quantity = 95 at T2.

The evidence is intentionally heterogeneous and contains temporal and semantic distinctions.

## 4. Operational questions

1. Can receiving be confirmed?
2. How many units were physically observed?
3. What quantity should enter inventory?
4. Is intervention required?
5. What should be presented to an auditor?

## 5. Conditions

### A — State-first

A single operational state is derived before the operational question is known.

This condition tests the proposition that a global state can adequately answer all questions.

### B — Preserving conventional

Assertions remain explicit and ordinary question-specific rules derive each operational representation.

No ORC-named service, object or semantic boundary is introduced.

### C — Explicit ORC

The same question-conditioned semantics are placed behind an explicit resolution boundary.

Condition C is deliberately given the same rules as B. If B and C produce identical resolutions, v0.6 does not establish that ORC is necessary for the transformation.

## 6. Controlled variables

All conditions use:

- identical evidence;
- identical questions;
- identical policy assumptions;
- identical expected semantic distinctions.

Only the representation/architectural boundary differs.

## 7. Evaluation

The run records:

- whether a global state preserves question semantics;
- number of distinct operational resolutions generated from one evidence set;
- whether B and C produce identical resolutions;
- basis assertions used by each resolution;
- reproducibility hash.

## 8. Falsification

The question-conditioned hypothesis is weakened if one global state can answer all questions without semantic loss.

The ORC-boundary hypothesis is weakened if a conventional preserving composition produces the same question-conditioned resolutions as the explicit ORC condition.

A positive finding must identify the specific transformation or capability that cannot be reproduced by the conventional condition.

## 9. Result classification

This is **synthetic comparative evidence**.

It does not establish:

- ORC necessity;
- ORC superiority;
- novelty;
- real-world validity;
- production readiness.

## 10. Reproducibility

Runner: `runner-v0.6.mjs`

Canonical execution hash is recorded in `RESULTS-v0.6.md`.
