# CASE-001 — Question-Conditioned Resolution Results v0.6

**Execution date:** 2026-10-02  
**Evidence class:** Synthetic + Comparative  
**Status:** Executed  
**Runner:** `runner-v0.6.mjs`

## Research question

Does the same evidence require question-conditioned operational resolution rather than one global operational state?

Secondary question: does that transformation require an explicit ORC boundary?

## Fixed evidence

| ID | Source | Assertion | Value | Time | Authority |
|---|---|---|---:|---|---|
| A1 | NF-e | expected quantity | 100 | T0 | document |
| A2 | Scanner | observed quantity | 98 | T1 | machine |
| A3 | Operator | verified quantity | 100 | T2 | authorized operator |
| A4 | ERP | current inventory quantity | 95 | T2 | system state |

## Results

| Question | State-first | Preserving conventional | Explicit ORC |
|---|---|---|---|
| Q1 receiving confirmation | 95 / GLOBAL_STATE | RECEIVING_CONFIRMED = 100 | RECEIVING_CONFIRMED = 100 |
| Q2 physical observation | 95 / GLOBAL_STATE | PHYSICAL_COUNT = 98 | PHYSICAL_COUNT = 98 |
| Q3 inventory entry | 95 / GLOBAL_STATE | INVENTORY_QUANTITY = 100 | INVENTORY_QUANTITY = 100 |
| Q4 intervention required | 95 / GLOBAL_STATE | NO_INTERVENTION_REQUIRED | NO_INTERVENTION_REQUIRED |
| Q5 audit explanation | 95 / GLOBAL_STATE | AUDIT_TRACE (100/98/100/95) | AUDIT_TRACE (100/98/100/95) |

## Direct observations

1. One evidence set generated **five distinct question-conditioned operational representations** under the preserving composition.
2. The state-first condition returned the same ERP quantity (95) for every question and therefore lost the semantic distinction between expected, observed, verified and current inventory quantities.
3. The preserving conventional condition and explicit ORC condition produced **identical operational resolutions** for all five questions.
4. The basis assertions remained explicit in the question-conditioned conditions.

## Interpretation

The experiment supports a narrower statement:

> For this synthetic case, operational resolution is not adequately represented by a single global state; the operational question changes which assertions participate in the resulting representation.

The experiment does **not** support:

> An explicit ORC boundary is necessary for question-conditioned resolution.

In fact, the controlled conventional condition reproduced the same question-conditioned resolutions as the explicit ORC condition.

Therefore the current evidence moves the research boundary from **information preservation** toward **question-conditioned transformation** while leaving the necessity of a distinct ORC boundary unresolved.

## Limitations

- Synthetic evidence only.
- Rules are encoded directly in the runner rather than learned from a real workflow.
- Only one evidence set and five questions were tested.
- Context and authority are represented minimally.
- The experiment does not compare independently implemented external standards.
- Condition B and C share the same resolution function by design; this tests semantic boundary necessity, not engineering maintainability.
- No real operational users or production systems participated.

## Falsification status

### Question-conditioned resolution hypothesis

**Supported for this synthetic case:** a single global state loses distinctions required by materially different operational questions.

### Explicit ORC boundary hypothesis

**Not supported by this experiment:** the conventional preserving condition reproduced the same question-conditioned resolutions.

### Stronger ORC claims

Not established:
- necessity;
- superiority;
- novelty;
- generality;
- real-world validity.

## Reproducibility

Canonical SHA-256:

`d5f324d620797c3ff4db75f52d4a3f28e1b2f479a87af5eef24cb1b8f47222a6`

The hash covers the fixed evidence, questions, policy, all three condition outputs and summary.
