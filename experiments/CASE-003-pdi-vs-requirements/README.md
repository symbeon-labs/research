# CASE-003 — PDI vs Requirements-to-Architecture Baseline

**Status:** Protocol v0.1  
**Evidence class:** Synthetic / Controlled  
**Purpose:** Test whether PDI provides measurable information beyond an established requirements-to-architecture workflow.

## Research question

Does the explicit chain

PROBLEM → REPRESENTATION → CAPABILITIES → ARCHITECTURE → RESOURCES

produce measurable benefits beyond a conventional requirements-to-architecture process?

## Conditions

### A — Conventional baseline

Problem → requirements → architecture → resources.

The baseline may use structured requirements, quality attributes, constraints, acceptance criteria and traceability. It must not be deliberately weakened.

### B — PDI

Problem → computational representation → capability requirements → transformations → architecture → resources.

PDI must preserve explicit problem distinctions and generate capability requirements before architectural components.

## Controls

Both conditions receive identical problem information, constraints, evidence and evaluation criteria.

Neither condition may use the other's intermediate artifacts.

Both must produce:
- requirements/capabilities;
- architecture components;
- rationale;
- trace links;
- resource selection;
- unresolved assumptions.

## Primary measures

1. Requirement coverage.
2. Problem-to-architecture traceability.
3. Capability-to-component traceability.
4. Information loss.
5. Unresolved assumptions.
6. Redundant components.
7. Derivation reproducibility.
8. Design effort.

## Interpretation rule

PDI is not considered superior merely because it produces a different architecture.

A positive result requires a predefined measurable improvement over the baseline on one or more primary measures without unacceptable increase in effort or loss elsewhere.

Equivalent results count against the claim that PDI adds a distinct derivation mechanism.

## Falsification

The PDI value proposition is weakened if:
- baseline and PDI produce equivalent coverage and traceability;
- PDI only renames requirements as capabilities;
- PDI's representation adds no recoverable information;
- PDI improves one metric only by increasing unexplained complexity;
- independent derivations do not reproduce PDI's outputs.

## Important boundary

This experiment does not test:
- model intelligence;
- production performance;
- domain generalization;
- economic value;
- novelty or patentability.

It tests only whether the proposed derivation structure adds measurable value over a competent conventional baseline.
