# CASE-001 — Execution Results v0.2

**Execution date:** 2026-10-02  
**Evidence class:** Synthetic  
**Status:** Controlled-capability pilot complete  
**Scope:** S01–S08, matched baseline and ORC conditions

## Research question

When the baseline and ORC conditions are given the same explicit capabilities for:

1. provenance/evidence preservation;
2. completeness/missing-source handling;
3. temporal semantics;
4. authority/override semantics;
5. identifier crosswalks;

does an explicit ORC boundary produce a different operational resolution?

## Experimental control

This run deliberately removes the four implementation gaps observed in v0.1.

The two conditions use the same executable semantic mechanisms. The distinction retained is only the architectural label/boundary:

- baseline-v0.2: conventional composition of the controlled capabilities;
- orc-v0.2: the same capabilities represented as an explicit operational-resolution boundary.

This is therefore a **boundary-isolation experiment**, not a benchmark of W3C PROV, NGSI-LD, EPCIS or RATS.

## Result

All eight scenarios produced the same operational result in both conditions.

| Scenario | Baseline state | ORC state | Identity | Quantity | Difference |
|---|---|---|---|---|---|
| S01 | RESOLVED | RESOLVED | same | same | None observed |
| S02 | RESOLVED | RESOLVED | crosswalk | same | None observed |
| S03 | REQUIRES_VERIFICATION | REQUIRES_VERIFICATION | same | same | None observed |
| S04 | INCOMPLETE | INCOMPLETE | same | same | None observed |
| S05 | RESOLVED | RESOLVED | same | same | None observed |
| S06 | CONFLICT | CONFLICT | same | same | None observed |
| S07 | RESOLVED | RESOLVED | same | same | None observed |
| S08 | CONFLICT | CONFLICT | same | same | None observed |

### Reproducibility record

Runner: runner-v0.2.mjs  
Canonical result SHA-256:

ff908f737480002b96a24382bf718ddb773805c40b8c265e1de5a9fd574c3418

## Direct observation

Under this controlled synthetic set, the explicit ORC boundary did **not** produce an operational outcome different from a conventional composition carrying the same capabilities.

This is a negative result for the stronger version of the ORC necessity hypothesis tested here.

## Interpretation

The current evidence does not justify claiming that an explicit ORC architectural boundary is necessary for these eight scenarios.

The result instead narrows the research question:

> If an explicit ORC boundary is useful, what property does it provide that is not captured by the underlying capabilities themselves?

Candidate properties for the next test include:

- preservation of source assertions as distinct objects rather than only source provenance;
- explicit distinction between assertion, evidence, interpretation and resolved state;
- reproducible transformation records;
- resolution semantics across multiple operational questions;
- compositional behavior when the same evidence is reused across workflows;
- boundary integrity when model inference enters the resolution process.

These are hypotheses, not findings.

## What this does NOT establish

- that ORC is unnecessary in general;
- that existing standards fully implement the tested composition;
- that the six ORC primitives are invalid;
- that the same equivalence holds for real operational data;
- that ORC has no architectural value;
- novelty or patentability.

## Limitation

The experiment is still synthetic and the two conditions share the same executable semantic core. This intentionally isolates the boundary variable, but it also means the experiment cannot establish real-world implementation cost, interoperability, maintainability, or governance effects.

## Next experiment

Move from **capability equivalence** to **semantic-boundary testing**.

Construct cases where the same source assertions and evidence must support multiple operational questions and where:

ASSERTION → EVIDENCE → INTERPRETATION → RESOLUTION → STATE

must remain explicitly distinguishable.

The next experiment should test whether collapsing these distinctions into a conventional state/context representation causes information loss, irreproducible transformations, or unjustified certainty.

A real workflow trace should be added before any broader claim.
