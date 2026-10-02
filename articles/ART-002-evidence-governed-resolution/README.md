# ART-002 — From Problem-Derived Intelligence to Evidence-Governed Resolution

**Version:** v1.0 FINAL  
**Status:** Research Framework + Controlled Synthetic Investigation  
**Author:** JX-SH1W4  
**Organization:** SYMBEON — Intelligence Systems Lab

## Abstract

ART-002 records the evolution of Problem-Derived Intelligence (PDI) from architectural derivation toward evidence-governed operational transformation.

ART-001 asks whether the structure of a problem can guide the derivation of an intelligence architecture. ART-002 extends that question by asking what must be preserved and governed when an intelligence system transforms heterogeneous observations and assertions into operational representations, decisions, state or action.

The investigation focused on evidence, context, authority, uncertainty, provenance and question-conditioned operational representation.

A controlled synthetic benchmark, CASE-001, was executed through nine experimental versions (v0.1–v0.9). The experiments established that a single global operational state can lose distinctions required by different operational questions, and that question-conditioned operational representations can preserve those distinctions.

The investigation also tested a stronger hypothesis: that `Resolution` constitutes an irreducible semantic primitive requiring an explicit ORC boundary. That hypothesis was not established. Conventional compositions of assertions, evidence, provenance, context, policy, authority, state and decision records reproduced the tested behavior, including Resolution-to-Resolution chains.

The surviving ART-002 position is therefore narrower: **evidence-governed resolution is a useful research and architectural pattern for specifying how evidence, context, authority, uncertainty and operational questions participate in transformations toward operational representations. Its semantic necessity as an irreducible primitive remains unsupported by the present evidence.**

---

## 1. Research question

ART-002 asks:

> What semantic transformations and governance boundaries must a problem-derived intelligence architecture specify in order to transform heterogeneous information into operationally usable representations without silently collapsing evidence, authority, uncertainty or context?

This question follows ART-001's architectural perspective.

The concern is not merely which models or tools exist. It is how information participates in a governed computational transformation.

---

## 2. Evolution from ART-001

ART-001 proposes:

`PROBLEM → FORMALIZATION → CAPABILITIES → ARCHITECTURE → RESOURCES → SOLUTION`

ART-002 adds an intermediate concern:

`OBSERVATION → EVIDENCE → INTERPRETATION → OPERATIONAL REPRESENTATION → STATE / ACTION`

The purpose is not to assert that these are universally distinct computational primitives.

Rather, the sequence identifies semantic boundaries that an architecture may need to preserve or make explicit depending on the problem.

---

## 3. Governance dimensions

ART-002 identifies five dimensions that may need to remain explicit in operational transformations:

- **Evidence** — what information participates.
- **Context** — under which operational situation, temporal scope and question.
- **Authority** — which source, actor or rule is authorized to contribute, verify, override or authorize.
- **Uncertainty and conflict** — what disagreement, incompleteness or uncertainty remains.
- **Provenance** — which sources, transformations and intermediate representations support the result.

These dimensions are not asserted to be universally sufficient. They form the current research representation for subsequent experimentation.

---

## 4. Question-conditioned operational representation

One of the strongest observations from CASE-001 is that the same heterogeneous evidence set need not correspond to one globally correct operational state.

The same evidence was evaluated against different questions:

- receiving confirmation;
- physical observation;
- inventory entry;
- intervention requirement;
- audit explanation.

The operational representation changed with the question and policy.

This supports the narrower statement:

> **Operational representation may be question-conditioned rather than reducible to a single global state.**

The benchmark did not establish that this property is unique to ORC.

---

## 5. Resolution

Resolution is retained in ART-002 as a useful name for the governed transformation from participating evidence and context toward an operational representation.

However, CASE-001 did **not** establish Resolution as an irreducible semantic primitive.

It is therefore treated as a **semantic/architectural pattern**, not as a proven fundamental computational primitive.

---

## 6. CASE-001 investigation

CASE-001 progressed through increasingly strong falsification tests:

| Version | Investigation | Main result |
|---|---|---|
| v0.1 | Initial comparative pilot | Insufficiently controlled |
| v0.2 | Capability-equivalent comparison | No unique operational outcome |
| v0.3 | Semantic-boundary preservation | Preservation benefit observed, but not ORC-specific |
| v0.4 | Preserving conventional baseline | Conventional composition reproduced required distinctions |
| v0.5 | Composition and reuse | Explicit ORC boundary reduced modeled duplication, but conventional composition could reproduce reuse |
| v0.6 | Question-conditioned resolution | Different questions produced different operational representations |
| v0.7 | Resolution primitive test | Common Resolution structure observed across outputs |
| v0.8 | Primitive falsification | Conventional composition reproduced the Resolution contract |
| v0.9 | Resolution-to-Resolution composition | No irreducible Resolution property identified |

The full experimental record is preserved in `experiments/CASE-001-comparative-benchmark/`.

The stage was formally finalized in `FINALIZATION-v1.0.md`.

---

## 7. Main result

The strongest surviving statement is:

> **When heterogeneous evidence is used to answer materially different operational questions, the resulting operational representation can be conditioned by the question, context and policy rather than being represented adequately by a single global state.**

The stronger claim that an irreducible semantic primitive called Resolution is required was not established.

In the tested synthetic cases, conventional compositions containing assertions, evidence, provenance, context, policy, authority, decisions, operational state and uncertainty/conflict reproduced the relevant behavior.

The final Resolution-to-Resolution test also reproduced chained derivations:

`EVIDENCE → R1 → R2 → R3`

using conventional dependency and provenance structures.

---

## 8. What the research does not establish

The current evidence does not establish:

- empirical validation across real operational environments;
- superiority of ORC over existing architectures;
- novelty or patentability;
- universal necessity of an explicit Resolution layer;
- production readiness;
- generalization beyond the tested synthetic cases.

CASE-001 is controlled synthetic evidence, not validation of a universal architecture.

---

## 9. Revised hypothesis

The original stronger hypothesis is replaced by:

> **Problem-derived intelligence architectures may benefit from an explicit representation of evidence-governed operational transformations in which question, context, policy, authority, uncertainty and provenance remain traceable as information is transformed into operational representations.**

This hypothesis is deliberately weaker than the original primitive-necessity claim and remains empirically testable.

---

## 10. Architectural implication

ART-002 does not require ORC to be accepted as a fundamental semantic layer.

ORC can instead be treated as an architectural candidate for packaging the evidence-governed operational-resolution pattern.

`RESEARCH → ARCHITECTURAL HYPOTHESIS → ORC → 3L0 → REAL-WORLD EVIDENCE → RESEARCH`

The implementation must not be treated as automatic validation of the research hypothesis.

---

## 11. Limitations

The current investigation is limited by:

1. synthetic benchmark scenarios;
2. a single primary operational case;
3. controlled representations rather than independent production systems;
4. absence of large-scale operational datasets;
5. absence of independent implementations;
6. absence of measured integration, governance or interoperability costs.

These limitations define the next evidence requirements.

---

## 12. Research status

**ART-002 is complete as a first research article and framework stage.**

Its contribution is not the claim that Resolution is a new primitive.

It is the formulation and controlled examination of how problem-derived intelligence architectures should represent and govern transformations toward operational representations while preserving distinctions required by evidence, context, authority, uncertainty and provenance.

The stronger primitive claim was subjected to falsification and not supported by the present synthetic evidence.

That negative result is part of ART-002's conclusion.

---

## 13. Next research question

ART-003 should investigate **Computational Problem Representation**.

The next question is:

> **What information must a computational representation of a problem preserve so that capability requirements, transformations and governance constraints can be derived without losing the distinctions that matter operationally?**

This moves the program back toward its foundational PDI question while incorporating the evidence learned during ART-002.

---

## 14. Final statement

ART-002 does not claim to have discovered a universally necessary semantic primitive.

It establishes a research boundary:

`PROBLEM → REPRESENTATION → CAPABILITIES → TRANSFORMATIONS → EVIDENCE-GOVERNED OPERATIONAL REPRESENTATION → STATE / ACTION`

and identifies the preservation of **evidence, context, authority, uncertainty and provenance** as explicit research concerns.

The next stage is to determine what a computational problem representation must preserve for such architectural derivation to remain valid.

