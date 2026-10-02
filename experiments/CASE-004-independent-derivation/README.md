# CASE-004 — Independent Derivation Reproducibility

## Status
Controlled synthetic investigation.

## Research question
Does the explicit PDI chain produce more reproducible capability and architecture derivations across independent implementations than a competent conventional requirements-to-architecture process?

## Conditions
- **A — Conventional:** problem -> requirements -> architecture.
- **B — PDI:** problem -> computational representation -> capabilities -> transformations -> architecture.

Each condition is implemented twice using deliberately separate derivation code paths. The implementations receive the same semantic problem cases but do not exchange intermediate artifacts.

## Primary measures
1. capability agreement between independent implementations;
2. architecture agreement;
3. traceability agreement;
4. requirement coverage;
5. unresolved assumptions;
6. modeled derivation effort.

## Interpretation
PDI receives support only if it improves reproducibility on predefined measures without introducing unacceptable information loss or disproportionate modeled cost.

Equivalent reproducibility is evidence against incremental derivation value, not evidence that PDI is useless in all settings.

## Limitations
This is a synthetic benchmark. Independent implementations are not independent human teams, and deterministic code can encode shared assumptions. The experiment therefore tests reproducibility of the formal derivation scheme, not organizational or cognitive reproducibility.
