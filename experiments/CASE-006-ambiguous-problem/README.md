# CASE-006 — Ambiguous Problem Representation

## Status
Frozen protocol; deterministic pilot execution.

## Research question
When analysts receive the same ambiguous natural-language problem, does requiring an explicit PDI problem representation improve preservation of operationally relevant distinctions before requirements and architecture are derived?

## Conditions
A — Conventional: problem text -> requirements -> architecture.
B — PDI: problem text -> explicit computational representation -> capabilities -> architecture.

Both receive identical text. Neither receives the hidden ground truth.

## Evaluation
A hidden ground-truth model defines operational distinctions required for a correct solution. We measure distinction recall, distinction precision, capability coverage, architecture coverage, unsupported assumptions, unresolved ambiguities, and traceability from extracted distinction to downstream artifact.

No overall winner is predefined.

## Limitation
The pilot uses synthetic problem text and deterministic extraction rules. It tests whether the explicit representation boundary makes distinctions inspectable, not whether human analysts universally perform better.
