# PDI — Bibliographic Review v0.1

**Scope:** scientific positioning of Problem-Derived Intelligence (PDI)  
**Date:** 2026-10-02  
**Status:** preliminary targeted literature review

## Executive finding

The review does **not** support treating “problem-first architecture” as a novel idea.

Three established bodies of work overlap directly:

1. AI problem representation and representation transformation;
2. requirements engineering and requirements-to-architecture derivation;
3. requirements traceability and design rationale.

A fourth body, AI governance/lifecycle frameworks, already formalizes context, objectives, requirements, capabilities, human oversight and evaluation.

A contemporary 2026 methodology called **Problem-Driven AI** also uses the problem-before-build principle.

The defensible PDI research question is therefore narrower:

> Can a computational representation of a problem serve as an explicit, reproducible intermediate basis for deriving capability requirements and architectural composition, with measurable traceability and evaluation, beyond established requirements-engineering and architecture-design methods?

## Literature map

| Area | Established result | Relation to PDI | Implication |
|---|---|---|---|
| AI problem representation | Representation affects problem-solving/search space | Strong conceptual precedent | PDI cannot claim representation→capability as entirely new |
| Requirements → architecture | Explicit research field with many derivation methods | Direct overlap | PDI must compare against these methods |
| Requirements traceability | Trace links connect requirements to rationale/design/code | Direct overlap with PDI traceability | Traceability itself is not a novel contribution |
| Design Science | Problem/design/artifact/evaluation is established methodology | Methodological foundation | PDI should be evaluated as a design-research contribution |
| AI RMF | Context, objectives, requirements, capabilities, oversight and governance are already lifecycle concerns | Strong overlap | Governance should not be claimed as PDI novelty |
| Problem-Driven AI (2026) | Problem-before-build methodology for AI product development | Terminological/conceptual overlap | PDI needs explicit differentiation and should avoid exclusive “problem-driven” novelty claims |

## Most important prior work

### 1. Problem representation

Research on automatic representation changes treats the representation of a problem as computationally consequential. The problem description can alter the search space and the effectiveness of problem-solving methods.

**Consequence for PDI:** the claim that representation matters is established. The open question is whether the same principle can be extended from solver selection/problem solving to explicit derivation of system-level capability requirements and architecture.

### 2. Requirements-to-architecture

Falessi, Cantone and Kazman (2006) reviewed the transition from requirements to architecture and identified the lack of systematic process models and guidelines as an important research problem.

A 2019 systematic mapping study identified 39 primary studies on deriving architectural models from requirements. It found substantial reliance on architect experience and intuition and insufficient explicit evaluation mechanisms.

**Consequence for PDI:** this is the most important adjacent literature. PDI should position itself as a possible computational formalization/extension of this transition, not as its invention.

### 3. Traceability

Requirements traceability has long been used to connect requirements to stakeholders, rationale, architecture, source code and tests.

Recent systematic work also examines traceability before formal requirements specifications, connecting requirements to their origins and contextual sources.

**Consequence for PDI:** “traceability” is an established property. PDI must define a more specific trace relation if it is to contribute anything new:

PROBLEM DISTINCTION → CAPABILITY REQUIREMENT → ARCHITECTURAL REQUIREMENT → COMPONENT/RESOURCE.

### 4. Design Science

Hevner et al. establish design science as a research paradigm centered on building and evaluating artifacts to generate knowledge about problem domains and solutions.

**Consequence for PDI:** PDI can be framed as a design-science research program, but the scientific contribution must be an evaluated derivation method, formalism, artifact or empirical finding.

### 5. AI governance

NIST AI RMF 1.0 already requires documenting intended purposes, context, assumptions, system requirements, capabilities, human oversight and risks, while organizing lifecycle activities through Govern, Map, Measure and Manage.

**Consequence for PDI:** PDI should not claim that it introduces problem context, requirements or governance into AI architecture. Its potential contribution lies in connecting represented problem structure to capability and architecture derivation.

### 6. Problem-Driven AI

A contemporary 2026 methodology named Problem-Driven AI advocates “problem before build” and structures AI product development around Problem, Solution, Context, AI Build and Market phases.

**Consequence for PDI:** the terminology is no longer safe as an exclusive novelty claim. PDI must distinguish itself by its research hypothesis and computational derivation mechanism.

## Revised PDI contribution

The broad statement is weak:

> “AI architecture should be derived from the problem.”

A stronger and testable statement is:

> **PDI investigates whether a computational representation of a problem can provide a reproducible intermediate basis for deriving capability requirements and architectural composition, with explicit traceability and measurable evaluation, beyond established requirements-engineering and architecture-design methods.**

This is the proposition that the experiments should attempt to falsify.

## Required future comparisons

Before claiming novelty, the research program should compare PDI against:

1. conventional requirements engineering;
2. established requirements-to-architecture methods;
3. architecture decision/traceability approaches;
4. design-science methods;
5. contemporary AI system design methodologies;
6. Problem-Driven AI and related problem-first AI-development methods.

## Current conclusion

**Novelty status:** not established.

**Strong overlap:** requirements-to-architecture derivation and traceability.

**Conceptual precedent:** problem representation as a determinant of computational problem solving.

**Methodological precedent:** Design Science.

**AI governance precedent:** NIST AI RMF.

**Contemporary terminology overlap:** Problem-Driven AI.

**Potential research gap:** an explicit computational derivation chain:

PROBLEM REPRESENTATION → CAPABILITIES → ARCHITECTURE → RESOURCES

with experimentally testable traceability, representation-loss analysis, reproducibility, and comparison against established engineering baselines.

That gap remains a hypothesis, not an established fact.
