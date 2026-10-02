# CASE-001 — Resolution Falsification Protocol v0.8

This experiment directly attacks the v0.7 result.

The v0.7 experiment found an invariant semantic contract across five operational outputs and treated that as evidence for a candidate Resolution primitive.

v0.8 asks the stronger question:

> Can the same contract and behavior be reproduced by conventional composition of query, provenance, decision/rule and operational state records, without a Resolution primitive?

## Controlled conditions

### A — Conventional composition

Separate but explicit structures:

`QUERY_RESULT + PROVENANCE + DECISION + STATE`

No Resolution object or Resolution semantic boundary.

### B — Resolution composition

One explicit structure containing the same semantic slots.

Both conditions receive identical evidence, questions, policy and expected operational semantics.

## Falsification criterion

If A reproduces B semantically and behaviorally across the cases, the primitive-necessity hypothesis is weakened/falsified.

If B exhibits a property A cannot reproduce without adding the same semantic boundary under another name, the candidate primitive remains viable.

## Cases

S03, S04, S05, S07 and S08.

These cover conflict, missing evidence, temporal semantics, authority and unresolved identity.

## Important constraint

The experiment does not artificially cripple the conventional condition. It receives all semantic information needed by the candidate Resolution condition.

Therefore a negative result is meaningful evidence against primitive necessity.

## Classification

A negative result does not invalidate ORC as an implementation architecture. It narrows what can legitimately be claimed about ORC's semantic necessity.
