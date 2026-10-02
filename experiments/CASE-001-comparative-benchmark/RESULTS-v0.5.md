# CASE-001 — Composition and Reuse Results v0.5

**Execution date:** 2026-10-02  
**Evidence class:** Synthetic  
**Status:** Structural cost experiment complete  
**Scope:** five workflows over one shared evidence set

## Research question

Does an explicit Operational Resolution boundary provide a measurable structural benefit when the same evidence must be reused across multiple operational workflows?

## Conditions

Three architectural representations were executed:

1. **Ad-hoc:** each workflow owns its own transformations and rules.
2. **Preserving conventional:** assertions/evidence are shared, but each workflow derives its own operational state.
3. **ORC:** assertions/evidence are shared through an explicit resolution boundary.

The experiment measures declared structural properties only. It is not a runtime-performance benchmark and does not assume that fewer steps are inherently better.

## Results

| Condition | Workflows | Transformation steps | Duplicated rules | Assertion reuse | Provenance reuse |
|---|---:|---:|---:|---:|---:|
| Ad-hoc | 5 | 20 | 15 | 0/5 | 0/5 |
| Preserving conventional | 5 | 15 | 5 | 5/5 | 5/5 |
| ORC | 5 | 10 | 0 | 5/5 | 5/5 |

## Direct observation

The declared architecture model produced a structural gradient:

- ad-hoc composition duplicates transformations and rules across workflows;
- preserving conventional composition removes most duplication while retaining the semantic distinctions demonstrated in v0.4;
- the ORC composition removes the remaining declared per-workflow rule duplication and reduces the declared transformation path further.

## Important limitation

The numerical counts are **model-derived structural counts**, not measurements from independently implemented production systems. They therefore cannot establish that ORC is faster, cheaper, easier to maintain, or superior in practice.

More importantly, the preserving conventional condition already achieves zero loss of the semantic distinctions tested in v0.4. The v0.5 result therefore does not show that ORC is uniquely capable of reuse.

A conventional implementation could introduce its own shared resolution service or reusable library. Doing so would make the architectural distinction between that composition and ORC less clear.

## Interpretation

This experiment provides a **design hypothesis**, not empirical validation:

> An explicit resolution boundary may reduce repeated workflow-level transformation and rule duplication when many operational questions reuse the same evidence.

However, the same engineering benefit may be achievable through conventional shared libraries/services without adopting ORC semantics.

The experiment therefore narrows the remaining falsifiable question to **boundary-specific value** rather than generic reuse.

## Next experiment

Implement the three conditions rather than counting them abstractly:

- same input corpus;
- same five workflows;
- same semantic requirements;
- independent implementations;
- measure actual code size, rule duplication, transformation count, reproducibility and change propagation after one semantic-rule modification.

The critical test is change propagation: modify one resolution rule and observe how many workflow implementations must change in each condition.

## Classification

**Finding:** structural model suggests lower duplication under explicit ORC composition.  
**Evidence strength:** synthetic/design-level.  
**ORC necessity:** not established.  
**ORC superiority:** not established.  
**Real-world validity:** not established.

## Reproducibility

Runner: `runner-v0.5.mjs`  
Canonical SHA-256:

`a5cbcd7d0cdbadfd2f20b56d1d9bafad9d4a4dcf4c0d4bc2b7ef5b09a1c9e8b2`
