# CASE-001 — Baseline Composition v0.1

**Status:** Experimental baseline specification  
**Purpose:** Define the non-ORC comparison condition before benchmark execution.

## 1. Principle

The baseline must use established mechanisms where they are relevant and must not import the ORC semantic kernel under another name.

The baseline is not a single product or protocol. It is a documented composition of existing capabilities.

## 2. Candidate baseline layers

| Need | Baseline mechanism | What it is expected to provide |
|---|---|---|
| Entity linkage | Entity Resolution / Record Linkage | candidate identity matches |
| Provenance | W3C PROV or equivalent provenance representation | source/derivation trace |
| Context | NGSI-LD or equivalent context model | entity/relation/context representation |
| Event representation | EPCIS where applicable to receiving events | interoperable visibility events |
| Evidence/attestation | RATS/attestation mechanism where applicable | evidence provenance/verifiability |
| Domain decision | explicit receiving rules | operational decision logic |

These are comparison mechanisms, not mandatory implementation dependencies.

## 3. Baseline constraint

The baseline must not introduce a dedicated object or service whose semantics are equivalent to:

- source assertion preservation;
- contextual resolution;
- conflict/uncertainty resolution;
- operational representation;

and then label that component as a baseline.

If such a component is necessary to make the baseline work, that fact must be recorded as an experimental observation rather than hidden.

## 4. Fairness rule

The baseline receives the same:

- source inputs;
- timestamps;
- identifiers;
- domain rules;
- operational question;
- evaluation criteria;
- computational budget, where measurable.

The baseline may use standard-native structures even when they differ from ORC's representation.

## 5. Required baseline record

Before execution, record:

- exact mechanism/version;
- mapping from each source input;
- transformation rules;
- conflict handling;
- uncertainty representation;
- provenance representation;
- operational-state derivation;
- unresolved gaps.

No benchmark result may be attributed to the baseline before this record exists.

## 6. Important limitation

This document defines a candidate baseline, not a claim that the listed standards can already be composed into a complete implementation.

The baseline itself is an experimental object.

## 7. Decision rule

If the baseline can satisfy the benchmark criteria without an explicit ORC boundary, that is evidence against the necessity of ORC as currently formulated.

If it cannot, the exact failure must be recorded.

No superiority conclusion follows automatically from either outcome.
