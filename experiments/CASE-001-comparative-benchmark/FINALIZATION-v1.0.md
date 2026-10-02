# CASE-001 — Finalization of the Resolution Necessity Investigation

**Status:** Stage finalized  
**Scope:** CASE-001 synthetic comparative investigation, v0.1–v0.9  
**Evidence class:** Synthetic / Comparative  
**Finalization date:** 2026-10-02

## 1. Purpose

This document closes the current conceptual investigation into whether ORC's `Resolution` should be treated as an irreducible semantic primitive.

The investigation deliberately progressed through increasingly strong falsification tests rather than assuming the ORC hypothesis was correct.

## 2. Experimental progression

| Version | Main attack | Outcome |
|---|---|---|
| v0.1 | Initial ORC vs conventional capability comparison | Insufficiently controlled |
| v0.2 | Capability-equivalent comparison | No unique operational outcome |
| v0.3 | Semantic-boundary preservation | Preservation benefit observed, but not ORC-specific |
| v0.4 | Explicit preserving conventional baseline | ORC semantic necessity weakened/falsified |
| v0.5 | Composition/reuse | Explicit ORC boundary reduced modeled duplication, but conventional shared composition could reproduce it |
| v0.6 | Question-conditioned resolution | Same evidence produced materially different operational representations; ORC and conventional composition equivalent |
| v0.7 | Resolution primitive test | Common Resolution structure identified across outputs |
| v0.8 | Primitive falsification | Conventional composition reproduced the Resolution contract |
| v0.9 | Resolution-to-Resolution composition | No irreducible property found in chained resolutions |

## 3. Final empirical position

Within the tested synthetic cases, the investigation did **not** establish that `Resolution` is an irreducible semantic primitive.

The tested behavior can be represented through conventional compositions involving:

- assertions/evidence;
- questions;
- context;
- policy/rules;
- authority;
- provenance/dependency graphs;
- operational state;
- status and uncertainty.

The strongest claim that survives is therefore narrower:

> **Operational Resolution is a recurring semantic and architectural composition in which heterogeneous evidence is transformed into a question-conditioned, governed operational representation.**

This is a research conclusion about the tested cases, not a universal claim.

## 4. What the investigation established

### Supported within the synthetic benchmark

1. A single global operational state can lose distinctions needed to answer different operational questions.
2. Operational questions can condition which evidence participates in a derived representation.
3. Source assertions, evidence, authority, temporal scope and derived state can be preserved together.
4. Resolution can participate in chains of downstream derivation.
5. These behaviors can be represented without requiring an irreducible object named `Resolution`.

### Not established

- novelty of ORC;
- patentability;
- superiority over existing architectures;
- universal necessity of an ORC layer;
- real-world validity;
- production readiness;
- measurable engineering advantage of an explicit ORC boundary.

## 5. What remains open

The research question should now move from **semantic necessity** to **architectural value**.

The next evidence must come from:

- real operational workflows;
- independent system boundaries;
- interoperability;
- governance;
- audit/review;
- versioning;
- reproducible re-resolution;
- cross-workflow reuse;
- implementation and integration cost.

These are not extensions of the falsified primitive claim. They are a new hypothesis class.

## 6. Consequence for 3L0

ORC remains a valid candidate architectural substrate for 3L0.

However, 3L0 should be treated as an operational testbed rather than evidence that ORC is semantically necessary.

The relationship is:

`Research → ORC hypothesis/architecture → 3L0 operational implementation → real-world evidence → Research`

3L0 may therefore test whether an explicit resolution boundary creates practical value even though the underlying semantic composition can be implemented conventionally.

## 7. Research discipline

This stage is considered complete.

No additional synthetic experiment should be created solely to rescue the claim that `Resolution` is an irreducible primitive unless new empirical evidence introduces a materially different phenomenon.

The research should now either:

1. move to real-world validation; or
2. test explicit architectural/interoperability value.

A negative result remains a valid research outcome.

## 8. Final boundary

**Closed hypothesis:**

> `Resolution` is necessarily an irreducible semantic primitive.

**Open hypothesis:**

> An explicit Operational Resolution boundary provides measurable architectural, governance, interoperability or operational value in real systems.

