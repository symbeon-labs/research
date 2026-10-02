# CASE-005 Scenarios v0.1

## Baseline problem model

The benchmark uses problem descriptions containing distinctions that may affect downstream derivation:

- objective
- temporal_scope
- source_identity
- entity_identity
- relation
- constraint
- authority
- uncertainty
- conflict
- consequence

Each scenario is paired with multiple change events.

## Change matrix

| ID | Change |
|---|---|
| C01 | objective changes |
| C02 | temporal scope changes |
| C03 | source changes |
| C04 | entity changes |
| C05 | relation changes |
| C06 | constraint tightens |
| C07 | authority changes |
| C08 | uncertainty changes |
| C09 | conflict introduced |
| C10 | conflict resolved |
| C11 | source added |
| C12 | source removed |
| C13 | constraint relaxed |
| C14 | consequence changes |

The implementation must define the hidden impact set before evaluating either condition.
