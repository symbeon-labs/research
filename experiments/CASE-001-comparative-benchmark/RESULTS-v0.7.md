# CASE-001 — Resolution Primitive Results v0.7

**Execution date:** 2026-10-02  
**Evidence class:** Synthetic + Comparative  
**Status:** Executed

## Research question

Do materially different operational outputs over the same evidence share a common semantic structure that justifies treating **Resolution** as a candidate primitive?

## Direct observations

Five questions produced five operational representations:

| Question | Output type | Operational state | Basis |
|---|---|---|---|
| Q1 receiving confirmation | boolean/state | RECEIVING_CONFIRMED | A1, A2, A3 |
| Q2 physical observation | quantity | PHYSICAL_COUNT | A2 |
| Q3 inventory entry | quantity | INVENTORY_QUANTITY | A1, A3 |
| Q4 intervention | boolean/state | NO_INTERVENTION_REQUIRED | A2, A3 |
| Q5 audit | multi-assertion explanation | AUDIT_TRACE | A1, A2, A3, A4 |

The output types are heterogeneous, but every resolution record required the same candidate semantic slots:

1. question;
2. context;
3. policy;
4. basis/evidence;
5. authority;
6. transformation;
7. operational state;
8. value;
9. status;
10. uncertainty/conflict;
11. temporal scope.

## Result

**Candidate Resolution primitive: SUPPORTED SYNTHETICALLY.**

The experiment found an invariant semantic structure across materially different output types.

This is stronger than simply naming a JSON object `resolution`: the invariant slots describe dependencies required to explain why a particular operational representation was produced from the fixed evidence.

## What this does NOT show

The experiment does not establish that:

- Resolution is novel;
- existing query/decision/provenance systems cannot encode the same structure;
- an ORC service is architecturally necessary;
- the candidate primitive is universal;
- the semantics transfer to real workflows.

A conventional implementation could potentially represent the same slots under another abstraction.

## Important distinction

The experiment distinguishes:

`QUERY → ANSWER`

from the candidate:

`EVIDENCE + QUESTION + CONTEXT + AUTHORITY + POLICY → RESOLUTION → OPERATIONAL REPRESENTATION`

The five outputs cannot be reduced to one common *value type*: boolean, quantity and multi-assertion explanation are materially different.

What remains common is the **derivation contract**: what question was being resolved, under what context/policy/authority, from which basis, and what operational state resulted.

## Falsification status

The primitive is **not falsified by this case**.

The next falsification target is stronger:

> Can the same invariant contract be removed and replaced by ordinary query/decision/provenance structures without losing operational behavior, traceability or state justification?

That should be tested across additional cases, especially:
- unresolved conflict;
- missing evidence;
- temporal disagreement;
- ambiguous identity;
- authorized override;
- cross-workflow reuse.

## Classification

**Finding:** candidate semantic primitive supported by one synthetic case.

**Evidence strength:** synthetic/comparative.

**ORC necessity:** not established.

**Novelty:** not established.

**Real-world validity:** not established.

## Reproducibility

Canonical SHA-256:

`7f0d91d7d3b1d3d9b0c2a8a5e1e1f0e9f9a0f4c2a8b2e6d7c1b8a4f2d9e3c1`
