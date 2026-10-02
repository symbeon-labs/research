# CASE-001 — Resolution Composition / Resolution-to-Resolution Attack v0.9

## Research question

Does treating a Resolution as a first-class semantic object enable a property that cannot be reproduced by conventional composition of:

- decision records;
- operational states;
- provenance/dependency graphs?

This is the final conceptual attack on the current ORC semantic-necessity hypothesis.

## Test structure

### R1

Primary heterogeneous evidence produces a receiving resolution.

### R2

R2 consumes R1 plus new ERP evidence to produce an inventory-update resolution.

### R3

R3 consumes R1 and R2 to produce a supplier-dispute resolution.

This creates:

`EVIDENCE → R1 → R2 → R3`

The test then mutates R1's authority/status and checks whether invalidation/re-resolution propagates equivalently in:

1. explicit Resolution objects;
2. conventional decision + state + provenance records.

## Candidate unique property

A positive result would require a property of resolution chaining that the conventional representation cannot reproduce without effectively introducing the same semantic abstraction.

The experiment therefore compares:

- ancestry recovery;
- dependency propagation;
- authority propagation;
- status propagation;
- re-resolution requirements.

## Falsification

If conventional records can preserve the same dependency graph and propagate the same semantic effects, the claim that Resolution-to-Resolution composition requires an irreducible Resolution primitive is falsified for this case.

## Classification

Negative results do not invalidate ORC as an engineering architecture. They constrain the semantic claim that ORC contains an irreducible primitive.
