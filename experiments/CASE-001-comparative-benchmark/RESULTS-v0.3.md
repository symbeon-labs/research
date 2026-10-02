# CASE-001 — Semantic Boundary Results v0.3

**Execution date:** 2026-10-02  
**Evidence class:** Synthetic  
**Status:** Boundary experiment complete  
**Scope:** S03, S04, S05, S07, S08; multiple operational questions over the same source material

## Research question

Does collapsing source assertions into an operational state before answering multiple operational questions cause information loss, temporal ambiguity, or loss of authority/evidence distinctions?

## Conditions

**Conventional condition:** source inputs are collapsed into an operational state/context representation before the questions are answered.

**ORC condition:** source assertions remain explicit objects and resolution is performed against the operational question while preserving assertion, evidence/context and resulting state distinctions.

This experiment tests this specific semantic boundary. It does **not** compare every conventional architecture against ORC.

## Results

| Scenario | Question | Conventional output | ORC output | Observed distinction |
|---|---|---|---|---|
| S03 | Can reception be confirmed? | HOLD | REQUIRES_VERIFICATION | Different terminal representation |
| S03 | What did each source assert? | single quantity=100 | three source assertions: 100/98/100 | Source-level distinctions retained only by ORC condition |
| S04 | Can reception be confirmed? | CONFIRMED | INCOMPLETE | Missing-source condition affects resolution differently |
| S04 | Is evidence complete? | false | complete=false + missing=[camera] | ORC preserves explicit missing-source context |
| S05 | Can confirm at T1? | NOT_CONFIRMED | RESOLVED at T1 | Question-time distinction preserved by ORC condition |
| S05 | What is current ERP state? | 95 | 95 at T2 | ORC output retains state provenance/time explicitly |
| S07 | What did machine observe? | quantity=98 | scanner assertion=98 | Source assertion preserved explicitly by ORC condition |
| S07 | What is authorized state? | CONFIRMED | state=100, authority=operator, basis=authorized_override | Authority/basis preserved explicitly by ORC condition |
| S08 | What did each source assert? | identity X/Y | camera→X, scanner→Y assertions | Source-level identity assertions retained |
| S08 | Can identity be resolved? | UNRESOLVED | CONFLICT + underlying assertions | Resolution remains linked to source assertions |

## Direct observation

In the tested scenarios, the collapsed conventional representation could answer some operational questions, but it did not preserve all distinctions required to answer the full question set without reconstructing the original source assertions.

The ORC condition preserved those distinctions in the executable representation.

## Important qualification

This is **not yet evidence that ORC as an architecture is necessary**. The conventional condition intentionally tests a collapsed representation because the research question is specifically whether that semantic collapse is lossy.

A conventional system could potentially preserve source assertions elsewhere. If it does so, the experiment's observed information loss may disappear.

Therefore the next falsification test is:

> Can a conventional composition preserve the same assertion/evidence/interpretation/state distinctions, provenance and question-specific resolution without introducing an explicit ORC boundary?

If yes, the ORC boundary remains unsubstantiated. If no, the missing boundary semantics must be identified precisely.

## Result classification

**Evidence:** Synthetic semantic-boundary evidence.  
**Finding:** The tested collapsed representation is lossy for multi-question resolution.  
**ORC necessity:** Not established.  
**Novelty:** Not assessed.  
**Real-world validity:** Not established.

## Reproducibility

Runner: `runner-v0.3.mjs`  
Canonical SHA-256:

`883f01c9fce00b303a25d539856cae726c036795fc9b8d4c8b8584aab7dc7d8a`

## Next experiment

Construct a **preserving conventional baseline** that explicitly retains source assertions, evidence, temporal context and authority, but does not introduce an ORC-named boundary. Rerun the same multi-question cases.

This is the decisive falsification step for the semantic-boundary hypothesis.
