# CASE-001 — Resolution Composition Results v0.9

**Execution date:** 2026-10-02  
**Evidence class:** Synthetic + Comparative  
**Status:** Executed

## Research question

Does Resolution-to-Resolution composition require a distinct Resolution primitive?

## Chain

`EVIDENCE → R1 → R2 → R3`

- **R1:** receiving confirmed from NF-e, scanner and authorized operator.
- **R2:** inventory update authorized from R1 + ERP state.
- **R3:** supplier-dispute outcome derived from R1 + R2.

## Direct observations

The explicit Resolution representation and the conventional representation both preserved:

- dependency ancestry;
- question;
- policy/rule;
- basis;
- authority;
- operational state;
- status;
- effective time;
- downstream dependency;
- mutation/re-resolution propagation.

When R1's authority was changed from authorized operator to unverified machine:

- R1 became invalid/uncertain;
- R2 required re-resolution;
- R3 required re-resolution.

The same dependency and invalidation behavior was representable using conventional decision + state + provenance records.

## Result

**Final conceptual attack: negative.**

No irreducible semantic property of Resolution was identified in this synthetic chain.

The current evidence therefore does not justify claiming:

> Resolution is a primitive that existing computational compositions cannot reproduce.

Instead, the evidence supports the weaker formulation:

> Resolution is a recurring semantic composition/pattern for deriving and governing operational representations from evidence, questions, context, policy and authority.

## Consequence for ORC

The ORC hypothesis should no longer be framed as discovery of a uniquely necessary semantic primitive.

A defensible research position is:

> ORC is an architectural composition that packages a recurring operational-resolution pattern and makes its boundaries explicit.

Whether this explicit packaging has measurable engineering, governance, interoperability or human-review benefits remains an empirical question.

## What remains genuinely open

The remaining ORC value proposition is no longer semantic necessity. It is **boundary value**:

- interoperability between independent producers/consumers;
- canonical exchange of resolution records;
- audit/review as first-class artifacts;
- governance and authority propagation;
- cross-workflow reuse;
- reproducible re-resolution;
- independent implementations;
- integration cost.

These require new experiments or real-world evidence.

## Classification

**Semantic primitive necessity:** not established; current synthetic hypothesis falsified.

**Resolution pattern:** supported as a recurring composition.

**ORC architectural usefulness:** unresolved.

**ORC superiority:** not established.

**Novelty:** not established.

**Real-world validity:** not established.

## Reproducibility

Canonical SHA-256 was independently computed from the runner's canonical input structure: `d8a2f3c1b8e46f3d9c0a0e7e4f9a5a9b1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a`.
