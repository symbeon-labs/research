# CASE-001 — Preserving Conventional Baseline Results v0.4

**Execution date:** 2026-10-02  
**Evidence class:** Synthetic  
**Status:** Falsification test complete  
**Scope:** S03, S04, S05, S07, S08

## Research question

Can a conventional composition preserve the same assertion, evidence, temporal, authority and conflict distinctions observed in v0.3 without introducing an explicit ORC boundary?

## Baseline condition

The baseline explicitly preserves:

- source assertions as first-class records;
- source provenance/evidence;
- timestamps;
- missing-source information;
- authority metadata;
- operational-state derivation;
- question-specific answers.

It does **not** introduce an ORC-named service, object or semantic boundary.

## Result

The preserving conventional baseline reproduced the distinctions required by all five scenarios.

| Scenario | Required distinction | Preserved without ORC boundary? | Observation |
|---|---|---|---|
| S03 | conflicting quantity assertions | Yes | NF-e=100, scanner=98, operator=100 retained |
| S04 | missing evidence | Yes | camera absence retained explicitly |
| S05 | temporal distinction | Yes | T1 scanner observation and T2 ERP state retained |
| S07 | authority/override | Yes | operator authority and override basis retained |
| S08 | conflicting identity assertions | Yes | camera→X and scanner→Y retained |

## Direct observation

The semantic distinctions identified in v0.3 can be represented and queried without introducing an explicit ORC boundary.

Therefore, the specific claim that these distinctions **require** an ORC architectural boundary is not supported by this experiment.

## Interpretation

This is a **negative result for the current semantic-boundary necessity hypothesis**.

The result does not mean that ORC has no value. It means that the currently tested semantics do not uniquely require an ORC abstraction. The same information-preserving behavior can be obtained by composing explicit assertion, evidence, provenance, context, temporal and authority structures with question-specific rules.

This substantially narrows the defensible ORC hypothesis.

A potentially stronger research question is no longer:

> Is an explicit operational-resolution layer necessary to preserve these semantics?

but rather:

> Does an explicit operational-resolution boundary provide measurable benefits in composition, reproducibility, governance, implementation complexity, or cross-workflow reuse that are not obtained by an equivalent preserving composition?

## What this does NOT establish

- that ORC is generally unnecessary;
- that existing standards already provide this composition in practice;
- that a preserving conventional implementation is cheaper or simpler;
- that ORC has no engineering value;
- that the six ORC primitives are invalid;
- real-world validity;
- novelty or patentability.

## Reproducibility

Runner: `runner-v0.4.mjs`  
Canonical SHA-256:

`7fcbdf25b1f99c24dfd7fc87b3e91f83e8db5f2f52d35a42af1b0e48c6f9b4d7`

## Next experiment

Move from semantic necessity to **architectural cost and reuse**.

Construct multiple operational questions and workflows over the same evidence graph, then compare:

1. preserving conventional composition;
2. explicit ORC composition;
3. duplicated/ad-hoc domain rules.

Measure reproducibility, transformation count, information loss, rule duplication, human intervention and implementation complexity.

The comparison must remain empirical and must not assume that an ORC boundary is beneficial before measurement.
