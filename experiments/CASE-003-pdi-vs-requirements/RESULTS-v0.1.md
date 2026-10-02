# CASE-003 — Results v0.1

**Status:** Executed — preliminary synthetic result  
**Evidence class:** Synthetic / Controlled

## Execution

Runner:

`experiments/CASE-003-pdi-vs-requirements/runner-v0.1.mjs`

The corrected runner was executed after fixing two incomplete requirement mappings. The corrected output was re-run from scratch.

**Raw output SHA-256:**

`935f6e0cb7602d3fa00993889cdc17c37c532e26182d3c757ad787b88ad46198`

## Result

| Measure | Conventional baseline | PDI |
|---|---:|---:|
| Scenarios | 4 | 4 |
| Mean requirement coverage | 100% | 100% |
| Missing requirements | 0 | 0 |
| Components | 21 | 21 |
| Trace links | 21 | 21 |
| Modeled derivation effort | 61 | 82 |

Across all four synthetic scenarios, the competent requirements-to-architecture baseline reproduced the same requirement coverage, component count and trace-link count as the PDI condition.

The PDI condition required additional modeled steps because it explicitly represented the intermediate problem-to-capability transformation.

## Preliminary interpretation

Under this deterministic benchmark, **no incremental value of the PDI intermediate representation was detected** on the measured outcome variables.

The result is therefore negative for the stronger proposition:

> Adding an explicit problem-representation → capability layer automatically improves requirement coverage or traceability.

It did not.

The baseline achieved the same coverage and traceability without adopting the PDI terminology or intermediate layer.

## Important methodological limitation

This is not yet a full empirical falsification of PDI.

The runner gives both conditions the same deterministic mapping from problem distinctions to requirements. Therefore the experiment demonstrates that an explicit PDI layer is **not sufficient by itself** to produce better outputs, but it does not test whether PDI can provide advantages under ambiguity, independent human derivation, complex capability composition, or problems where requirements are incomplete or conflicting.

The effort measure is also procedural rather than human time.

## Research consequence

The burden of proof has increased.

A future PDI experiment must test a property that a competent requirements-to-architecture process does not trivially reproduce.

The most promising candidates are:

1. **representation loss detection** — whether PDI identifies capability-relevant distinctions that conventional requirements artifacts omit;
2. **independent derivation reproducibility** — whether different analysts derive more consistent architectures from the same PDI representation;
3. **change propagation** — whether changes in problem structure propagate systematically to affected capabilities and architecture components;
4. **cross-domain transfer** — whether the derivation mechanism remains stable across different problem classes;
5. **ambiguity/conflict handling** — whether PDI preserves distinctions that conventional requirements documents collapse.

## Current classification

**Observed:** equivalent coverage and traceability under the controlled deterministic baseline.

**Interpretation:** no incremental benefit detected from the explicit PDI intermediate layer in this test.

**Not established:** general PDI falsification, superiority of the baseline, real-world performance, human-effort advantage, novelty.

**Next hypothesis:** PDI must demonstrate value through properties that emerge specifically from computational problem representation and cannot be reproduced merely by restating the same problem information as conventional requirements.
