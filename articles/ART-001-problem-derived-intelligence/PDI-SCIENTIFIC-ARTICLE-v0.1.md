# Problem-Derived Intelligence: A Framework for Deriving Intelligence Architectures from Computational Problem Structure

**Manuscript version:** v0.2 — Revised Scientific Draft  
**Research program:** Problem-Derived Intelligence (PDI)  
**Author:** JX-SH1W4  
**Organization:** SYMBEON — Intelligence Systems Lab  
**Status:** Conceptual framework / research hypothesis

---

## Abstract

Contemporary intelligence systems are frequently designed by selecting models, agents, tools, data sources, and orchestration patterns before the problem to be solved has been formally characterized. This can produce architectures whose components are technically capable but whose composition is weakly connected to the operational structure of the target problem.

This paper introduces **Problem-Derived Intelligence (PDI)** as a framework for investigating whether the computable structure of a problem can be used to derive the capabilities and architectural composition required to solve it. PDI reverses the conventional direction of system construction: rather than beginning with available models or preferred technologies, it begins with a formal representation of the problem, derives the capabilities required to transform relevant information into operational outcomes, and then derives candidate architectural components and resources.

The proposed research direction is expressed as:

> **PROBLEM → FORMALIZATION → CAPABILITIES → ARCHITECTURE → RESOURCES → SOLUTION**

The framework treats architecture as a consequence of problem requirements rather than as the primary design starting point. It also introduces explicit evaluation and falsification criteria: a PDI-derived architecture should be traceable to problem requirements, preserve distinctions that matter to the target task, and remain open to replacement by a simpler or conventional architecture when equivalent requirements can be satisfied without the proposed derivation process.

This paper presents PDI as a research framework and hypothesis, not as an empirically validated method. It defines the conceptual model, derivation logic, research questions, evaluation principles, limitations, and a research program for subsequent controlled experiments.

**Keywords:** problem-derived intelligence, AI architecture, computational problem representation, capability derivation, intelligent systems, system architecture, AI engineering, research methodology.

---

## 1. Introduction

Intelligent-system design is not uniformly architecture-first. Requirements engineering, systems engineering, design science, and AI risk-management practices already emphasize problem context, objectives, requirements, evaluation, and governance as inputs to system design. citeturn0search0turn0search3

PDI therefore does not claim to introduce the general principle that systems should respond to problems. Its narrower research question is whether the relationship between **problem representation, capability requirements, and architecture** can be made explicit enough to support a reproducible and inspectable derivation procedure.

Instead of treating the following as an implicit design activity:

> Which capabilities and architectural components should satisfy this problem?

PDI investigates whether that reasoning can be represented as an explicit chain:

> What computational structure does the problem contain, which capabilities follow from that structure, and which architectural compositions can satisfy those capabilities?

This distinction is important because an intelligence system is not defined only by the models it contains. Its behavior also depends on the transformations it performs, the information it must preserve, the constraints under which it operates, the evidence available to it, and the actions or states it must ultimately produce.

PDI therefore proposes a research hypothesis:

> **The computable structure of a problem can provide a basis for deriving the capability requirements and candidate architecture of an intelligence system designed to solve that problem.**

The claim is deliberately weaker than a claim of universal architectural optimality. PDI does not assume that a problem has one unique architecture, nor that a derived architecture will always outperform a manually designed system. Its purpose is to establish whether problem structure can serve as a reproducible derivation input for intelligence-system design **beyond the informal requirements-to-design reasoning already present in established engineering approaches**.

The initial framework is:

[
PROBLEM ightarrow FORMALIZATION ightarrow CAPABILITIES ightarrow ARCHITECTURE ightarrow RESOURCES ightarrow SOLUTION
]

Each transition represents a research question rather than an assumed automatic mapping.

---

## 2. Research Question

The central research question is:

> **Can the computable structure of a problem be formalized sufficiently to derive the capability requirements and candidate architecture of an intelligence system?**

This question can be decomposed into five subquestions:

1. What information must be preserved when a problem is represented computationally?
2. How can problem structure be translated into explicit capability requirements?
3. How can capability requirements be composed into architectural requirements?
4. How can models, tools, evidence sources, specialists, and governance mechanisms be selected as resources for those requirements?
5. Under what conditions does problem-derived architecture provide information that would not be obtained through conventional architecture-first design?

These questions define the initial PDI research program.

---

## 3. Hypothesis

### 3.1 Primary hypothesis

Let a problem be represented as a computational structure (P).

Let:

[
F(P) = 	ext{formalized problem representation}
]

[
C(F(P)) = 	ext{required capabilities}
]

[
A(C) = 	ext{candidate architecture}
]

[
R(A) = 	ext{required resources}
]

PDI hypothesizes that there exists a useful **explicit and inspectable** derivation chain:

[
P ightarrow F(P) ightarrow C(F(P)) ightarrow A(C) ightarrow R(A)
]

such that the resulting architecture is traceable to explicit requirements of the original problem.

The relevant criterion is not whether the mapping is mathematically unique. Instead, the criterion is whether the derivation provides **reproducible and inspectable justification** for architectural decisions.

### 3.2 Falsification condition

PDI should be considered weakened or falsified for a class of problems if controlled experiments repeatedly show that:

- problem formalization provides no additional information for architecture derivation;
- capability requirements cannot be derived consistently from problem structure;
- equivalent architectures are obtained independently of problem representation;
- architecture-first approaches achieve equivalent traceability and requirement coverage with less structure or effort;
- or the proposed derivation introduces no measurable advantage over simpler conventional methods.

A negative result remains a valid research outcome.

---

## 4. The PDI Framework

### 4.1 Problem

The problem is the operational phenomenon or task that an intelligence system is expected to address.

A problem should not be reduced immediately to a desired software feature. PDI treats the problem as a structured object containing, depending on the domain:

- objectives;
- entities;
- observations;
- relationships;
- states;
- temporal constraints;
- rules and constraints;
- uncertainty;
- conflicts;
- authorities;
- decisions;
- actions;
- consequences;
- evaluation criteria.

Not every problem contains all dimensions. The framework therefore does not assume a universal problem ontology at this stage.

### 4.2 Formalization

Formalization converts the problem into a representation that can be inspected and manipulated computationally.

The goal is not to eliminate ambiguity by assumption. The goal is to make the distinctions relevant to the problem explicit enough that their computational consequences can be investigated.

A formalized problem may therefore contain:

[
P = {O,E,S,T,R,C,U,A,D,K}
]

where the symbols represent candidate classes such as objective, entities, state, temporal scope, relationships, constraints, uncertainty, authority, decisions/actions, and evaluation criteria.

This notation is intentionally provisional. PDI does not require these categories to constitute a final ontology.

### 4.3 Capabilities

Capabilities describe what the system must be able to do in order to transform the formalized problem into an acceptable operational outcome.

Examples include:

- observation;
- extraction;
- identification;
- entity resolution;
- retrieval;
- comparison;
- inference;
- planning;
- validation;
- conflict detection;
- evidence evaluation;
- state estimation;
- decision support;
- action generation;
- monitoring;
- explanation.

A capability is not synonymous with a model.

For example:

[
CAPABILITY = 	ext{entity identification}
]

does not imply:

[
RESOURCE = 	ext{specific AI model}
]

The resource is selected only after the capability requirement has been established.

### 4.4 Architecture

Architecture is the composition of components required to provide the derived capabilities.

A candidate architecture can contain:

- models;
- deterministic functions;
- databases;
- retrieval mechanisms;
- agents;
- specialist modules;
- external tools;
- evidence systems;
- policy engines;
- human review;
- orchestration;
- monitoring;
- governance mechanisms.

The architectural question is therefore:

> Which composition of components can satisfy the derived capability requirements while preserving the constraints and distinctions of the original problem?

### 4.5 Resources

Resources are concrete implementations or dependencies used to instantiate the architecture.

They may include:

- foundation models;
- specialized models;
- software libraries;
- APIs;
- databases;
- sensors;
- external systems;
- human specialists;
- computational infrastructure;
- evidence repositories.

PDI deliberately places resource selection after capability derivation. This is intended to reduce the risk that the availability of a technology determines the architecture before the problem has been characterized.

---

## 5. Architecture as a Derived Object

The central conceptual shift of PDI is to treat architecture as a **derived object**.

A conventional architecture-first process may be represented as:

[
AVAILABLE TECHNOLOGY ightarrow ARCHITECTURE ightarrow APPLICATION
]

PDI proposes investigating:

[
PROBLEM ightarrow REQUIREMENTS ightarrow ARCHITECTURE
]

The difference is not that technology becomes irrelevant. Technology remains necessary. The difference is where technology enters the derivation process.

For example, suppose a problem requires:

1. identification of entities from heterogeneous records;
2. comparison of temporally different observations;
3. detection of contradictions;
4. preservation of provenance;
5. generation of an operational recommendation;
6. human review when uncertainty exceeds a threshold.

The architecture should contain mechanisms capable of satisfying those requirements.

The architecture is therefore justified through a chain such as:

[
Problem Requirement
ightarrow Capability
ightarrow Transformation
ightarrow Architectural Component
ightarrow Resource
]

This chain provides a potential basis for architectural traceability.

---

## 6. Capability Derivation

A central unresolved problem is how to derive capabilities systematically.

A provisional transformation is:

[
F(P) ightarrow C
]

where (F(P)) is the formalized problem and (C) is the capability set.

For each relevant problem distinction (d_i), the research process asks:

> What operation must an intelligence system perform because this distinction exists?

Examples:

| Problem distinction | Candidate capability |
|---|---|
| heterogeneous observations | information integration |
| multiple identifiers | entity identification / resolution |
| temporal differences | temporal reasoning |
| conflicting assertions | conflict detection |
| uncertain information | uncertainty handling |
| explicit policy constraints | policy evaluation |
| required human authorization | human-in-the-loop governance |
| need for reproducible explanation | provenance / traceability |
| predicted consequence | decision support |

These mappings are hypotheses to be tested rather than universal rules.

---

## 7. Architecture Derivation

Once capabilities have been identified, the next transformation is:

[
C ightarrow A
]

The architecture should provide a mechanism for each required capability while minimizing unnecessary duplication.

A candidate architecture can therefore be evaluated using a traceability relation:

[
T(c_i,a_j)
]

where (T=1) indicates that architectural component (a_j) contributes to satisfying capability (c_i).

A useful architecture should make it possible to inspect:

- which component satisfies each capability;
- which capabilities remain unsupported;
- which components are redundant;
- where governance constraints are enforced;
- where evidence enters and is transformed;
- where uncertainty is introduced or reduced;
- where human intervention remains necessary.

This does not imply that the architecture with the fewest components is always preferable. Architectural quality is domain-dependent and must be evaluated against explicit criteria.

---

## 8. Governance and Evidence

PDI does not treat intelligence as equivalent to model inference.

For operational systems, the problem may contain distinctions concerning:

- source identity;
- authority;
- evidence;
- provenance;
- uncertainty;
- conflicting observations;
- temporal validity;
- policy;
- consequences.

Therefore a derived architecture may require capabilities and components that are not themselves predictive models.

A generalized operational chain can be represented as:

[
OBSERVATION
ightarrow EVIDENCE
ightarrow INTERPRETATION
ightarrow OPERATIONAL REPRESENTATION
ightarrow STATE/ACTION
]

This layer is particularly relevant for systems in which the cost of an incorrect or untraceable decision is significant.

PDI therefore allows governance mechanisms to be derived as architectural requirements rather than appended as an afterthought.

---

## 9. Evaluation Framework

The PDI hypothesis requires empirical testing. Because existing engineering and design-science approaches already connect problems, requirements, design and evaluation, the evaluation must test whether PDI adds measurable value beyond those established practices rather than merely reproducing them. citeturn0search0turn0search12

A proposed evaluation program should compare at least two design procedures:

### Condition A — Conventional requirements/design baseline

1. characterize the problem and context using an established requirements or systems-design procedure;
2. derive requirements;
3. construct a candidate architecture;
4. evaluate requirement coverage.

### Condition B — Problem-derived

1. formalize the problem;
2. derive capability requirements;
3. derive architectural requirements;
4. select resources;
5. evaluate requirement coverage.

Potential evaluation dimensions include:

### Requirement coverage

[
Coverage = rac{	ext{requirements satisfied}}{	ext{requirements identified}}
]

### Traceability

Measure whether each architectural component can be traced to an explicit problem or capability requirement.

### Redundancy

Measure unnecessary overlap among components relative to the capability set.

### Requirement loss

Measure the number or importance of problem requirements that disappear during representation or architectural derivation.

### Governance coverage

Measure whether required evidence, authority, uncertainty, provenance, and policy constraints are represented and enforceable.

### Reproducibility

Measure whether independent practitioners applying the same derivation procedure produce compatible capability and architecture requirements.

These metrics are provisional and require further operationalization.

---

## 10. Falsification Strategy

PDI is intentionally structured so that the framework can fail.

Important falsification tests include:

### Test 1 — Architecture independence

Construct systems for the same problem using architecture-first and problem-derived procedures. If both consistently produce equivalent architectures and equivalent traceability, coverage, reproducibility and design effort, the additional value claimed for PDI is weakened.

### Test 2 — Representation loss

Remove a distinction from the computational problem representation and test whether the resulting architecture loses a capability or governance requirement.

### Test 3 — Alternative representation

Represent the same problem using semantically equivalent structures with different schemas. If derivation results depend unnecessarily on superficial representation choices, the formalization layer is inadequate.

### Test 4 — Independent derivation

Give the same formalized problem to independent derivation procedures or researchers. Measure convergence and disagreement.

### Test 5 — Simpler baseline

Compare PDI against a conventional design procedure. If PDI adds complexity without improving traceability, requirement coverage, reproducibility, or another predefined criterion, its value proposition is weakened.

These tests are more informative than demonstrating only that a PDI-derived architecture can be constructed.

---

## 11. Related Work and Positioning

PDI sits at the intersection of several established research traditions.

**Requirements engineering and systems engineering.** These traditions already begin from problem context and stakeholder/system requirements before detailed design. PDI should therefore not claim ownership of “problem-first” design. Its narrower distinction is an explicit computational derivation from represented problem structure to capability requirements and then to architecture.

**Design Science Research.** Design science treats the construction and evaluation of artifacts as a research activity and provides established guidance concerning problem relevance, artifact design, evaluation, rigor and communication. citeturn0search0turn0search12 PDI can be evaluated within this broader design-oriented research tradition rather than positioned as a replacement for it.

**AI governance and lifecycle frameworks.** NIST's AI RMF requires AI system objectives, context and requirements to be documented and treats governance as cross-cutting across design, development, deployment and evaluation. citeturn0search3turn0search6 PDI is compatible with this orientation. Its research question is whether such requirements can be represented and transformed into capability and architectural requirements through a more explicit derivation mechanism.

The resulting distinction is therefore provisional:

> **PDI is not a claim that architecture should begin with the problem. It is a hypothesis that the computational representation of a problem can support an explicit, traceable and testable derivation from problem distinctions to capabilities and architectural composition.**

This distinction must be tested against existing requirements-engineering and architecture methods before any novelty claim is made.

---

## 12. Relationship to Subsequent Research

PDI is the first article in a broader research program.

Subsequent investigations address questions that are downstream from the PDI hypothesis.

### Evidence-governed operational resolution

A later research line investigates how heterogeneous evidence can be transformed into operational representations while preserving relevant distinctions such as context, authority, uncertainty and provenance.

### Computational problem representation

A subsequent line investigates which distinctions a computational representation must preserve before capability and architecture derivation can occur.

These investigations should not be treated as empirical proof of PDI. They are independent research questions generated by the framework.

The relationship can be represented as:

[
PDI
ightarrow
Problem Representation
ightarrow
Capability Derivation
ightarrow
Architecture Derivation
ightarrow
Experimental Validation
]

The broader research program remains open to results that reject parts of this chain.

---

## 13. Limitations

This paper has several important limitations.

First, PDI is presented primarily as a conceptual framework and research hypothesis. The framework has not yet established empirical superiority over conventional architecture design.

Second, the mapping from problem structure to capabilities is not fully formalized. The proposed capability derivations are research hypotheses rather than universal transformation rules.

Third, no universal problem ontology is assumed or established.

Fourth, multiple architectures may satisfy the same capability requirements. PDI does not imply architectural uniqueness.

Fifth, the framework does not establish that problem-derived architectures are cheaper, faster, more accurate, safer, or more scalable than alternatives.

Sixth, the framework does not establish novelty relative to existing approaches in AI engineering, software architecture, requirements engineering, systems engineering, or other fields. Such comparison remains part of the research program.

Seventh, real-world validation across independent domains is still required.

---

## 14. Research Program

The initial research program follows the sequence:

[
PROBLEM
ightarrow
FORMALIZATION
ightarrow
CAPABILITIES
ightarrow
ARCHITECTURE
ightarrow
RESOURCES
ightarrow
SOLUTION
]

The current research roadmap is:

1. **PDI — Problem-Derived Intelligence**
2. **Evidence-Governed Resolution**
3. **Computational Problem Representation**
4. **Capability and Transformation Ontology**
5. **Architecture Derivation Engine**
6. **Evidence, Uncertainty and Authority**
7. **Controlled Benchmark**
8. **Cross-Domain Generalization**
9. **Adaptive Architecture Learning**

Each stage should produce independently falsifiable claims.

The program should preserve a strict distinction between:

- hypothesis;
- formal model;
- synthetic experiment;
- empirical observation;
- comparative result;
- architectural decision;
- unresolved question.

---

## 15. Discussion

The principal contribution proposed by PDI is not a new model or software component. It is a change in the direction of architectural reasoning.

Instead of beginning with:

> What intelligence technology can we deploy?

PDI begins with:

> What structure does the problem impose on an intelligence system?

This reframing may be useful because intelligent systems increasingly combine heterogeneous capabilities rather than relying on a single model. A system may require retrieval, deterministic computation, specialized models, human review, external tools, evidence management, and policy enforcement simultaneously.

In such systems, selecting components independently can obscure why each component exists and what requirement it satisfies.

PDI proposes that the problem itself should provide the initial constraints from which these decisions are derived.

Whether this produces measurable benefits remains an empirical question.

The strongest form of the claim is therefore intentionally avoided. PDI does not claim:

> Every intelligence architecture can be automatically generated from a problem.

Instead, it investigates the narrower proposition:

> **Problem structure may contain sufficient computable information to derive useful capability and architectural requirements.**

That proposition is testable.

---

## 16. Conclusion

This paper introduced Problem-Derived Intelligence as a research framework for investigating the derivation of intelligence architectures from computational problem structure.

The proposed direction is:

[
oxed{
PROBLEM
ightarrow
FORMALIZATION
ightarrow
CAPABILITIES
ightarrow
ARCHITECTURE
ightarrow
RESOURCES
ightarrow
SOLUTION
}
]

The central hypothesis is that explicit problem representation can provide a principled input to capability and architecture derivation.

The framework does not claim empirical validation, architectural optimality, universal applicability, or novelty. Instead, it defines a falsifiable research program in which these claims can be investigated through controlled experiments, comparative baselines, representation-loss tests, independent derivations, and real-world validation.

The most important requirement for the research program is therefore methodological:

> **If the architecture cannot be justified by the structure of the problem, the derivation has failed. If a simpler conventional approach provides the same result with equivalent traceability, PDI must accept that result.**

PDI is consequently proposed not as a final architecture, but as a method for investigating whether intelligence architecture can itself become a derived consequence of problem structure.

---

## References

1. Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). *Design Science in Information Systems Research*. MIS Quarterly, 28(1), 75–105. urlSourcehttps://aisel.aisnet.org/misq/vol28/iss1/6/
2. Gregor, S., & Hevner, A. R. (2013). *Positioning and Presenting Design Science Research for Maximum Impact*. MIS Quarterly, 37(2), 337–355. urlSourcehttps://aisel.aisnet.org/misq/vol37/iss2/3/
3. NIST. (2023). *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*. National Institute of Standards and Technology. urlSourcehttps://www.nist.gov/itl/ai-risk-management-framework
4. NIST. (2023). *AI RMF Core*. National Institute of Standards and Technology. urlSourcehttps://airc.nist.gov/airmf-resources/airmf/5-sec-core/

A subsequent literature review should expand coverage to requirements engineering, systems engineering, architecture derivation, AI engineering, knowledge representation, program synthesis and related problem-framing approaches.

The current references establish positioning only. They are not presented as evidence that PDI itself is novel or empirically superior.

Additional literature should be incorporated only after direct comparison with the specific PDI claims, rather than by accumulating adjacent citations.

- requirements engineering and problem framing;
- software and systems architecture;
- AI engineering and AI system design;
- agent architectures;
- knowledge representation;
- provenance and evidence systems;
- design science and empirical software engineering;
- automated architecture synthesis and program synthesis.

No external work is presented here as equivalent to, or as evidence for, the PDI hypothesis without a dedicated comparative review.

---

## Research status

**PDI status:** Research hypothesis / conceptual framework
**Manuscript status:** Scientific draft — literature-positioned, not yet submission-ready  
**Empirical validation:** Not established  
**Architectural superiority:** Not established  
**Universal applicability:** Not established  
**Novelty/patentability:** Not established  
**Production readiness:** Not established

The purpose of this manuscript is to define a testable research direction, not to close the question.
