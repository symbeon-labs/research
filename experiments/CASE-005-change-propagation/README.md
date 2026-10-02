# CASE-005 — Change Propagation

## Status
Protocol frozen before execution.

## Research question
When a problem changes after an initial derivation, does an explicit PDI representation provide measurable advantages in identifying and propagating the affected capabilities, architectural components, resources, and invalidated decisions compared with a competent conventional requirements-to-architecture process?

## Hypothesis under test
PDI may provide a benefit if explicit problem distinctions allow changes to be localized and propagated through the derivation chain with fewer missed impacts, stale artifacts, or unnecessary redesigns.

This is not assumed to be true.

## Conditions

### A — Conventional
`PROBLEM → REQUIREMENTS → ARCHITECTURE → RESOURCES`

The baseline may use standard requirements traceability, provenance, dependency links, impact analysis, and change records. It must not be deliberately weakened.

### B — PDI
`PROBLEM → REPRESENTATION → CAPABILITIES → TRANSFORMATIONS → ARCHITECTURE → RESOURCES`

The PDI condition explicitly records the distinction(s) represented by each capability and transformation.

## Protocol

1. Establish a baseline problem and derive a complete solution under both conditions.
2. Freeze the baseline artifacts.
3. Apply predefined problem changes one at a time.
4. Require each condition to identify affected requirements/capabilities, transformations, architecture components, resources, invalidated decisions, and unaffected artifacts that should remain stable.
5. Re-derive only the affected portion.
6. Compare against a hidden ground-truth impact set.

## Change classes

objective, temporal scope, source, entity, relation, constraint, authority, uncertainty, conflict, consequence, source addition/removal, constraint tightening/relaxation, conflict resolution.

## Primary measures

impact recall, impact precision, stale-artifact rate, unnecessary-change rate, trace completeness, invalidated-decision detection, re-derivation effort, unchanged-artifact preservation.

## Success criterion

No overall winner is predefined. A result is potentially supportive of incremental PDI value only if PDI shows a reproducible improvement on one or more predefined measures while preserving information and without an unacceptable increase in effort.

Equivalent performance is evidence against incremental value for that property.

## Anti-bias controls

Freeze this protocol before implementation. Do not modify change cases after inspecting results. Use the same semantic ground truth for both conditions. Permit the conventional baseline to use explicit traceability and impact-analysis mechanisms. Do not count architectural divergence as failure unless the hidden ground truth specifies that a component must or must not be affected. Report all measures, including negative ones.

## Limitations

Synthetic formal change propagation only; not human organizational change management.
