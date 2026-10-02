# CASE-001 — Scenario Set v0.1

**Evidence class:** Synthetic  
**Status:** Initial benchmark fixtures  
**Purpose:** Exercise the semantic boundaries identified in the CASE-001 protocol.

## Common baseline

Expected entity:

- Product: Product X
- EAN: 789000...
- SKU: P-042
- Expected quantity: 100

Source classes:

- NF-e/XML
- scanner
- camera/OCR
- operator
- ERP

## Scenario S01 — Consistent reception

All sources identify Product X and quantity 100.

Expected question:

> Can the receiving operation be confirmed automatically?

Primary test: ordinary resolution without conflict.

## Scenario S02 — Identifier disagreement

NF-e identifies EAN 789000..., while ERP contains a different identifier mapping for the candidate product.

Primary test: identity resolution and provenance preservation.

## Scenario S03 — Quantity conflict

NF-e declares 100 units, scanner counts 98, and operator declares 100.

Primary test: conflicting assertions must remain distinguishable.

## Scenario S04 — Missing source

Camera/OCR is unavailable while document, scanner, operator and ERP data remain available.

Primary test: incomplete evidence must not silently become certainty.

## Scenario S05 — Temporal disagreement

The scanner observation occurs at T1 while ERP state reflects a later update at T2.

Primary test: observation time must remain distinguishable from operational state time.

## Scenario S06 — Ambiguous identity

The observed identifier matches more than one candidate entity.

Primary test: ambiguity must produce an explicit uncertain/conflict outcome rather than silent selection.

## Scenario S07 — Operator override

Machine observations indicate 98 units, while an authorized operator records 100 after manual verification.

Primary test: authority and intervention must be explicit.

## Scenario S08 — Unresolved conflict

Two trusted sources provide incompatible product identity assertions and no additional evidence resolves the disagreement.

Primary test: the system must be able to retain an unresolved state.

## Output schema

Each execution should produce at least:

- scenario_id;
- source_assertions;
- evidence;
- context;
- candidate_entities;
- resolution;
- operational_state;
- uncertainty;
- conflicts;
- provenance;
- human_intervention;
- reproducibility_record;
- limitations.

## Important constraint

The expected outcomes above are test intentions, not predeclared experimental results. The actual result must be recorded after both conditions are executed.
