# CASE-005 — Results v0.1

## Execution

The frozen protocol was executed across 14 predefined change events.

Raw output SHA-256:

`f87b180dc49c8566b47b77c55cec05f577e948452e66230f6852717943594297`

## Aggregate

| Measure | Conventional | PDI |
|---|---:|---:|
| Changes | 14 | 14 |
| Impact recall | 100% | 100% |
| Impact precision | 100% | 100% |
| Stale-artifact rate | 0% | 0% |
| Unnecessary-change rate | 0% | 0% |
| Trace completeness | 100% | 100% |
| Invalidated-decision detection | 100% | 100% |
| Modeled re-derivation effort | 108 | 162 |
| Unchanged-artifact preservation | 100% | 100% |

## Observation

The two conditions produced equivalent impact identification and preservation results for all 14 tested changes.

The PDI condition used 162 modeled effort units versus 108 for the conventional condition, an additional 54 units (+50%).

## Interpretation

No incremental PDI advantage was detected for change propagation in this deterministic benchmark.

This is a stronger negative result than CASE-003/004 for one specific property: explicit problem representation did not improve change-impact detection when the conventional baseline was allowed to maintain explicit traceability and dependency information.

The result also shows why the experiment must not compare PDI against a deliberately weak baseline. A competent conventional process can represent the same dependencies explicitly.

## Limitation

The benchmark is deterministic and synthetic. Both conditions have access to the same structured semantic fields, and the conventional condition is explicitly allowed to model dependencies. It therefore does not test whether humans independently construct equivalent dependency models from ambiguous natural-language problems.

It also does not test cross-domain transfer, organizational change, large-scale architecture, or longitudinal maintenance.

## Current implication

CASE-005 does not identify a change-propagation property that requires PDI.

The next discriminating experiment should therefore move upstream: give independent analysts the same **ambiguous natural-language problem**, with hidden ground-truth distinctions, and test whether an explicit PDI representation improves preservation of operationally relevant distinctions before requirements and architecture are derived.

This should become CASE-006.
