# CASE-001 — Comparative Benchmark Protocol

**Status:** Protocol draft  
**Research series:** ART-002  
**Case:** Goods Receiving  
**Purpose:** Empirical test of the Evidence-Governed Resolution hypothesis using a controlled operational case.

## 1. Research question

Can an existing composition of established mechanisms preserve source-level assertions and evidence, contextualize heterogeneous inputs, represent conflict and uncertainty, and produce a traceable operational resolution without requiring the explicit ORC semantic boundary?

## 2. Hypotheses

### H1 — Baseline sufficiency

An existing composition of entity-resolution, provenance/context and domain-event mechanisms can produce the required operational resolution while preserving source-level evidence and uncertainty.

### H2 — Explicit-boundary value

The explicit ORC composition provides at least one materially necessary semantic property that the baseline composition cannot preserve or reproduce under the same evidence and operational constraints.

H1 and H2 are competing research hypotheses. The experiment is not designed to confirm ORC by default.

## 3. Experimental units

The benchmark uses receiving scenarios derived from CASE-001:

1. consistent identifiers and quantities;
2. identifier mismatch;
3. conflicting quantity assertions;
4. missing source;
5. temporal disagreement;
6. ambiguous entity match;
7. explicit operator override;
8. unresolved conflict.

Additional cases may be added only with versioned justification.

## 4. Source classes

Each scenario may contain:

- fiscal/document record;
- scanner/barcode observation;
- camera/OCR observation;
- operator declaration;
- ERP record.

Each input must retain its original representation, source identity, timestamp and relevant contextual metadata.

## 5. Conditions

### Condition A — Baseline composition

Use established mechanisms available to the implementation under test, without introducing the ORC semantic kernel as an explicit architectural boundary.

The exact mechanisms and versions must be recorded before execution.

### Condition B — ORC composition

Use the candidate semantic sequence:

```
SOURCE
  ↓
ASSERTION / OBSERVATION / EVIDENCE
  ↓
ENTITY + RELATION + CONTEXT
  ↓
RESOLUTION
  ↓
OPERATIONAL REPRESENTATION
```

The implementation must preserve source assertions rather than replacing them with the resolved value.

## 6. Controlled variables

Both conditions must use:

- identical input evidence;
- identical scenario definitions;
- identical operational question;
- identical success criteria;
- identical output target;
- equivalent available domain knowledge;
- versioned implementations.

The benchmark must not give Condition B information unavailable to Condition A.

## 7. Evaluation criteria

Record at minimum:

| Criterion | Question |
|---|---|
| Identity accuracy | Was the intended entity resolved correctly? |
| Evidence preservation | Can original source assertions be recovered? |
| Conflict detection | Are incompatible assertions surfaced? |
| Uncertainty preservation | Can unresolved/ambiguous states remain explicit? |
| Traceability | Can the resolution be traced to inputs and rules? |
| Reproducibility | Can the same inputs reproduce the same result? |
| State justification | Can the resulting operational state be explained from evidence/context? |
| Human intervention | Was intervention required, and where? |
| Boundary integrity | Are observation, interpretation, resolution and state kept distinguishable? |
| Failure mode | What information or guarantee was lost? |

No single metric is designated as a winner criterion before the benchmark is run.

## 8. Required record

Every executed scenario must preserve:

- benchmark version;
- scenario version;
- input fixture;
- condition;
- implementation/version;
- configuration;
- evaluation result;
- observed failures;
- human interventions;
- limitation;
- reproducibility information.

## 9. Evidence classes

Results must be labelled as:

- **Synthetic** — constructed benchmark scenario;
- **Comparative** — difference between experimental conditions;
- **Empirical** — observation from a real receiving workflow.

Synthetic benchmark results must not be presented as real-world validation.

## 10. Falsification rules

The experiment supports narrowing or rejecting the ORC hypothesis if:

- the baseline preserves the required semantics without an explicit ORC boundary;
- ORC adds no reproducible operational capability;
- apparent differences result only from implementation choices;
- the proposed primitives cannot be consistently applied across scenarios.

The experiment supports continued investigation of the ORC boundary only if a reproducible failure or capability difference is observed and attributable to the semantic composition rather than an implementation defect.

## 11. Current limitations

This protocol does not yet establish:

- real-world validity;
- superiority of ORC;
- novelty;
- patentability;
- completeness of the candidate ontology;
- production readiness.

The current benchmark begins as synthetic evidence.

## 12. Next execution step

Create versioned scenario fixtures and execute Conditions A and B against the same cases.

The first run should prioritize semantic observability over scale.

## 13. Relation to ART-002

This experiment operationalizes the ART-002 question around the transformations:

```
OBSERVATION → EVIDENCE → INTERPRETATION → RESOLUTION → STATE → ACTION
```

It does not create a new research track or modify the Research Roadmap.
