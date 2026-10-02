# SYMBEON Research Roadmap

## Purpose

This roadmap describes the current sequence of research questions emerging from the SYMBEON Intelligence Systems Research program.

It is a working research map, not a fixed publication commitment. Articles may be split, merged, reordered, renamed or discontinued as evidence and experiments change the direction of the program.

## Research sequence

### ART-001 — Problem-Derived Intelligence

**Focus:** Foundational research hypothesis.

Investigates whether the computable structure of a problem can guide the derivation of the intelligence architecture required to solve it.

**Status:** Final v1.0

---

### ART-002 — From Problem-Derived Intelligence to Evidence-Governed Resolution

**Focus:** Evolution of the foundational hypothesis.

Investigates whether problem-derived architecture must specify not only capabilities and topology, but also transformations between observation, evidence, interpretation, resolution, state and action, together with uncertainty handling and authority boundaries.

**Status:** Final v1.0

---

### ART-003 — Computational Problem Representation

**Focus:** Problem representation.

Investigates what information a computational representation of a problem must preserve in order to support meaningful capability inference and architectural derivation.

**Status:** Draft v0.1

Initial experiment: CASE-002 — Representation Loss Benchmark.

---

### ART-004 — Capability and Transformation Ontology

**Focus:** Capabilities and transformations.

Investigates how intelligence requirements should be represented beyond model or tool names, including transformations such as observation, extraction, interpretation, relation, resolution, verification, review, attestation and action.

**Status:** Planned

---

### ART-005 — Architecture Derivation Engine

**Focus:** Architecture derivation.

Investigates mechanisms for transforming structured problem requirements into candidate intelligence architectures.

**Status:** Planned

---

### ART-006 — Evidence, Uncertainty and Authority

**Focus:** Governance of intelligence transformations.

Investigates how evidence requirements, uncertainty and authority boundaries affect the architecture itself.

**Status:** Planned

---

### ART-007 — Controlled Benchmark for Problem-Derived Architectures

**Focus:** Empirical evaluation.

Defines and executes controlled comparisons between baseline and problem-derived architectures.

The experimental progression currently considers B0 through B6, from a single general model through evidence-governed problem-derived architecture.

**Status:** Planned

---

### ART-008 — Cross-Domain Generalization

**Focus:** Transferability.

Investigates whether the principles and mechanisms developed by the research program remain useful across materially different classes of problems.

**Status:** Planned

---

### ART-009 — Adaptive Architecture Learning

**Focus:** Learning from execution.

Investigates whether execution traces, evaluation results and failure signals can improve future architectural derivations.

Candidate loop:

`PROBLEM → DERIVE → EXECUTE → OBSERVE → EVALUATE → LEARN → DERIVE`

**Status:** Planned

---

## Research dependency map

```text
ART-001
  │
  ▼
ART-002
  │
  ├───────────────┐
  ▼               ▼
ART-003          ART-004
  │               │
  └───────┬───────┘
          ▼
       ART-005
          │
          ▼
       ART-006
          │
          ▼
       ART-007
          │
          ▼
       ART-008
          │
          ▼
       ART-009
```

The dependency map represents the current conceptual direction, not a requirement that every article must be completed before the next research question can be investigated.

## Scientific discipline

The roadmap does not imply that the hypotheses are correct.

A later article may:

- weaken an earlier hypothesis;
- establish boundary conditions;
- replace a proposed construct;
- split a research question into independent studies;
- produce a negative or inconclusive result;
- eliminate an entire branch of the roadmap.

The roadmap functions as a **research navigation artifact**, while the articles, experiments and benchmark records constitute the evidence.

## Versioning

Changes to this roadmap should be recorded in the repository changelog.

Major changes in research direction should be documented rather than silently overwritten.
