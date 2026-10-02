# SYMBEON — Intelligence Systems Research

Public, versioned research program by SYMBEON focused on the computational structure, derivation, governance, evidence and evaluation of intelligence systems.

## Research direction

This repository records hypotheses, research articles, methodological notes, experiments, benchmarks and reproducibility artifacts as a cumulative research program.

The current line begins with **Problem-Derived Intelligence (PDI)** and evolves toward evidence-governed resolution, transformation boundaries, capability derivation and empirically testable intelligence architectures.

## Research series

The current research sequence is maintained in the [Research Roadmap](ROADMAP.md).

| ID | Title | Status |
|---|---|---|
| ART-001 | Problem-Derived Intelligence | Final v1.0 |
| ART-002 | From Problem-Derived Intelligence to Evidence-Governed Resolution | Final v1.0 |
| ART-003+ | See roadmap | Planned |

## Research principle

The program follows a versioned loop:

`PROBLEM → HYPOTHESIS → DERIVATION → EXPERIMENT → EVIDENCE → RESULT → LIMITATION → NEXT HYPOTHESIS`

Negative or inconclusive results are valid research outputs and remain part of the record.

## Current experimental record

### CASE-001 — Comparative Resolution Investigation

**Status:** Stage finalized — 2026-10-02

CASE-001 is the first controlled synthetic benchmark in this repository. Its v0.1–v0.9 sequence progressively tested preservation, composition, question-conditioned resolution and the necessity of an explicit `Resolution` primitive.

The final result did **not** establish `Resolution` as an irreducible semantic primitive. The surviving research question is narrower: whether an explicit Operational Resolution boundary provides measurable architectural, governance, interoperability or operational value in real systems.

The complete experimental record, including negative results and finalization, is preserved under [`experiments/CASE-001-comparative-benchmark/`](experiments/CASE-001-comparative-benchmark/).

### ART-003 — Computational Problem Representation

**Status:** Draft v0.1

ART-003 investigates what information a computational representation of a problem must preserve before capability and architecture derivation. Its first controlled experiment, CASE-002, tests deliberate representation loss.

## Repository structure

```text
articles/
├── ART-001-problem-derived-intelligence/
│   └── README.md
├── ART-002-evidence-governed-resolution/
│   └── README.md
└── ART-003-computational-problem-representation/
    └── README.md

methodology/
└── RESEARCH_PROTOCOL.md

experiments/
├── CASE-001-comparative-benchmark/
│   └── finalized v0.1 → v0.9
└── CASE-002-representation-loss/
    ├── protocol + scenarios
    ├── baseline
    ├── v0.1 → v0.9 experiments
    ├── reproducibility runners
    └── FINALIZATION-v1.0.md

README.md
CITATION.cff
CHANGELOG.md
ROADMAP.md
LICENSE
```

Future experiments, benchmarks, models and research notes will be added only when they have a defined protocol and reproducible record.

## Scope

This repository is the research layer.

Implementations and applications may provide experimental instruments or evidence for this research, but they remain external to the research record unless explicitly incorporated into a research artifact.

## Status discipline

Unless explicitly supported by recorded evidence, this repository does not claim:
- empirical validation;
- superiority over competing approaches;
- novelty or patentability;
- production readiness;
- universal applicability.

## Author

**JX-SH1W4**  
Independent Researcher  
SYMBEON — Intelligence Systems Lab

