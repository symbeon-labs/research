# ART-003 — Computational Problem Representation

**Version:** v0.1 DRAFT  
**Status:** Research Hypothesis + Experimental Design  
**Author:** JX-SH1W4  
**Organization:** SYMBEON — Intelligence Systems Lab

## Abstract

ART-003 returns to the foundational question of Problem-Derived Intelligence: before an intelligence architecture can be derived from a problem, the problem itself must be represented computationally.

ART-003 investigates what information a computational representation of a problem must preserve so that capability requirements, transformations and governance constraints can be derived without losing distinctions that matter operationally.

The article deliberately does not assume a universal ontology of problems. It treats problem representation as an empirical design question.

The first working hypothesis is:

> **A computational representation of a problem is adequate for architectural derivation only if it preserves the distinctions that are necessary to derive the relevant capabilities, transformations and governance constraints for that problem.**

This hypothesis will be tested through controlled representation-loss experiments.

---

## 1. Research question

> **What information must a computational representation of a problem preserve so that capability requirements, transformations and governance constraints can be derived without losing distinctions that matter operationally?**

The question follows ART-001 and incorporates the main limitation exposed by ART-002: operational transformations can be represented in multiple equivalent ways, so the next research target should be the information available **before** architecture derivation.

---

## 2. Relation to previous research

ART-001 proposed:

`PROBLEM → FORMALIZATION → CAPABILITIES → ARCHITECTURE → RESOURCES → SOLUTION`

ART-002 showed that evidence-governed operational transformations are important research boundaries, while failing to establish `Resolution` as an irreducible primitive.

ART-003 therefore moves one step upstream:

`PROBLEM → REPRESENTATION → CAPABILITIES → TRANSFORMATIONS → ARCHITECTURE`

The purpose is to determine what the `REPRESENTATION` stage must preserve.

---

## 3. Working hypothesis

### H1 — Preservation hypothesis

> A computational problem representation is adequate for architectural derivation only if it preserves the distinctions necessary to derive the capabilities, transformations and governance constraints required by the problem.

This is intentionally weaker than claiming that one fixed representation schema is universally correct.

### Falsification condition

H1 is weakened or rejected if controlled experiments show that materially different representations can systematically discard a distinction required by the target architecture without affecting the derivation of the required capabilities, transformations or governance constraints.

Conversely, evidence that removing a distinction causes systematic derivation failure would support the hypothesis for that class of problems.

---

## 4. What is a problem representation?

For this research stage, a **problem representation** is a computationally usable description of a problem domain that is provided to an architecture-derivation process.

It may contain information about:

- objective or operational question;
- actors and entities;
- observations and sources;
- state and temporal scope;
- relationships;
- constraints;
- uncertainty and conflict;
- authority and governance;
- required outputs;
- consequences or actions;
- evaluation criteria.

These are candidate dimensions, not a finalized ontology.

The experiment must determine which distinctions are actually necessary rather than assuming that all are always required.

---

## 5. Representation loss

The central experimental operation is deliberate **representation loss**.

Starting from a sufficiently expressive problem description:

`P_full`

we construct reduced representations:

`P_1, P_2, ..., P_n`

where each reduction removes or collapses one identifiable distinction.

Examples:

- remove temporal scope;
- collapse source identity;
- remove authority;
- collapse uncertainty;
- remove conflict;
- remove operational objective;
- collapse entity identity;
- remove constraints;
- collapse evaluation criteria.

The derived architecture is then compared against the requirements of the original problem.

---

## 6. Target derivation

For each problem, the representation is used to derive at least three classes of requirements:

### Capabilities

What the system must be able to do.

Examples:

- observe;
- extract;
- identify;
- correlate;
- compare;
- infer;
- verify;
- resolve;
- review;
- authorize;
- act.

### Transformations

What information transformations are required.

Examples:

- observation → assertion;
- assertion → evidence;
- evidence → interpretation;
- interpretation → operational representation;
- representation → action.

### Governance constraints

What must constrain those transformations.

Examples:

- authority;
- provenance;
- uncertainty;
- temporal validity;
- review requirements;
- conflict handling;
- auditability.

The experiment does not assume these lists are complete.

---

## 7. Core experimental question

For each candidate distinction:

> **If this information is removed from the problem representation, can the same required capabilities, transformations and governance constraints still be derived correctly?**

This creates a direct test:

`DISTINCTION PRESERVED`

vs.

`DISTINCTION REMOVED`

and measures whether derivation remains equivalent.

---

## 8. First experimental design

The first benchmark will use synthetic operational problems with deliberately controlled distinctions.

Each problem will have:

1. a full reference representation;
2. one or more reduced representations;
3. a target requirement set;
4. an independent derivation procedure;
5. a comparison of derived requirements.

The benchmark should initially avoid testing model intelligence itself. The first objective is representation adequacy.

---

## 9. Evaluation

A representation-loss experiment should evaluate at least:

- capability preservation;
- transformation preservation;
- governance preservation;
- constraint preservation;
- ambiguity introduced;
- unsupported assumptions introduced;
- information that becomes impossible to derive.

The first benchmark should prefer explicit structured comparison over subjective quality scoring.

---

## 10. Expected result classes

Each distinction may produce one of four outcomes:

### Required

Removing the distinction causes a reproducible loss in derivation.

### Useful but recoverable

Removing the distinction causes loss, but equivalent information can be reconstructed from remaining representation.

### Redundant

Removing the distinction does not affect the tested derivation.

### Context-dependent

The distinction matters for some problem classes but not others.

This classification is provisional and may change as experiments progress.

---

## 11. Research discipline

ART-003 will not assume that:

- every problem requires the same representation;
- all candidate dimensions are fundamental;
- a richer representation is automatically better;
- more fields imply better architecture;
- the final representation must resemble ORC;
- a representation that works for one domain generalizes to another.

The objective is to identify **necessary information under explicit problem conditions**.

---

## 12. Relationship to ORC and 3L0

ORC remains an architectural candidate and 3L0 remains an operational testbed.

ART-003 is upstream of both.

The relationship is:

`PROBLEM → REPRESENTATION → ARCHITECTURAL DERIVATION → ORC / OTHER COMPOSITION → 3L0 → REAL-WORLD EVIDENCE`

The experiment must therefore remain independent of ORC. If a non-ORC representation produces the same derivation, that is a valid result.

---

## 13. Limitations of v0.1

This draft does not establish:

- a universal problem ontology;
- empirical validation;
- a complete representation schema;
- superiority of any representation;
- ORC necessity;
- generalization across domains.

The first benchmark is intentionally narrow and synthetic.

---

## 14. Next experiment

**CASE-002 — Representation Loss Benchmark**

Initial question:

> Which distinctions, when removed from a computational problem representation, cause a measurable failure in deriving the capabilities, transformations or governance constraints required by the original problem?

The benchmark should begin with a small controlled matrix rather than a large ontology.

---

## 15. Current position

ART-003 begins from a deliberately modest claim:

> **Architecture derivation is only as reliable as the problem information that survives representation.**

Whether this claim yields a useful computational principle is an empirical question.

`PROBLEM → REPRESENTATION → DERIVATION`

is therefore the next boundary under investigation.
