# CASE-001 — Resolution Primitive Test v0.7

**Evidence class:** Synthetic + Comparative  
**Status:** Protocol and execution  
**Research series:** ART-002

## 1. Research question

When the same heterogeneous evidence answers materially different operational questions, are the resulting transformations instances of a common semantic primitive — **Resolution** — or can they be fully characterized as ordinary independent queries/rules with no common semantic object?

The experiment intentionally separates:

1. **query execution** — obtaining a value/answer;
2. **operational resolution** — deriving a justified operational representation with explicit basis, context, authority, policy and status.

## 2. Fixed evidence

- A1 — NF-e: expected quantity = 100, T0, document authority.
- A2 — scanner: observed quantity = 98, T1, machine authority.
- A3 — authorized operator: verified quantity = 100, T2, authorized operator.
- A4 — ERP: current inventory quantity = 95, T2, system-state authority.

## 3. Questions

Q1 receiving confirmation  
Q2 physical observation  
Q3 inventory entry  
Q4 intervention requirement  
Q5 audit explanation

## 4. Competing representations

### A — Independent query/rule answers

Each question returns an answer directly. The answer is not treated as an object with a common resolution schema.

### B — Resolution records

Each question returns a record with the same semantic slots:

- question;
- context;
- policy;
- participating assertions;
- evidence;
- authority;
- transformation;
- operational state;
- uncertainty/conflict;
- provenance/basis.

The payload may differ, but the semantic structure is invariant.

## 5. Test

The experiment compares the two representations across five questions.

A common primitive is supported only if the same semantic invariants remain necessary across materially different output types.

Candidate invariants:

1. **Question binding** — result is relative to an explicit operational question.
2. **Basis binding** — result identifies participating assertions/evidence.
3. **Context binding** — result is valid under an explicit context.
4. **Authority binding** — authority relevant to the result remains explicit.
5. **Policy binding** — transformation rule/policy is explicit.
6. **Status** — result can express resolved/conflict/uncertain/incomplete/requires-verification.
7. **Operational representation** — output is not merely an answer; it represents something the workflow can act upon.
8. **Traceability** — result can be reconstructed from its basis.
9. **Temporal scope** — relevant observation/state times remain distinguishable.
10. **Non-collapse** — source assertions are not silently replaced by the derived representation.

## 6. Falsification

The Resolution primitive is weakened if:

- the five cases require no common semantic slots beyond ordinary query metadata;
- their outputs cannot be meaningfully represented by one invariant structure;
- removing Resolution terminology changes nothing because the same semantics are already fully captured by conventional query/rule objects;
- no operational behavior depends on the additional structure.

The hypothesis is strengthened only if the invariant structure explains materially different transformations and enables behavior not captured by independent answer records.

This experiment does **not** test novelty against all prior art. It tests internal semantic coherence.

## 7. Important constraint

Naming a JSON object `resolution` does not constitute evidence for a primitive.

The primitive must earn its status through invariant behavior across cases.

## 8. Classification

A positive result means **candidate semantic primitive**, not validated universal primitive, novelty or architectural necessity.
