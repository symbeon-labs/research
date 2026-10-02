# CASE-001 — Execution Results v0.1

**Execution date:** 2026-10-02  
**Evidence class:** Synthetic  
**Status:** Pilot execution complete  
**Scope:** S01–S08, baseline proxy vs current ORC reference semantics

## Execution qualification

This is an executable pilot, not validation of the full external standards named in the baseline specification.

The baseline condition is a **capability-equivalent conventional composition proxy**. It is not a complete implementation of W3C PROV, NGSI-LD, EPCIS or RATS.

The ORC condition mirrors the current reference implementation semantics for identity resolution and quantity resolution.

Therefore the observations below support claims about these two executable conditions only.

## Results

| Scenario | Baseline identity | Baseline state | ORC identity | ORC quantity | ORC state | Key observed difference |
|---|---|---|---|---|---|---|
| S01 | MATCH | CONFIRMED | RESOLVED | RESOLVED | RESOLVED | Equivalent outcome |
| S02 | MATCH_VIA_CROSSWALK | CONFIRMED | UNCERTAIN | RESOLVED | UNCERTAIN | Baseline proxy uses explicit identifier crosswalk; ORC reference does not |
| S03 | MATCH | HOLD_CONFLICT | RESOLVED | REQUIRES_VERIFICATION | REQUIRES_VERIFICATION | Both preserve conflict; terminal labels differ |
| S04 | MATCH | CONFIRMED_WITH_MISSING_SOURCE | RESOLVED | RESOLVED | RESOLVED | ORC reference does not apply completeness policy |
| S05 | MATCH | CONFIRMED_WITH_TEMPORAL_CONTEXT | RESOLVED | RESOLVED | RESOLVED | ORC reference does not apply temporal-state semantics |
| S06 | AMBIGUOUS | HOLD | CONFLICT | RESOLVED | CONFLICT | Both prevent silent selection |
| S07 | MATCH | CONFIRMED_MANUAL | RESOLVED | REQUIRES_VERIFICATION | REQUIRES_VERIFICATION | Baseline proxy applies explicit authorized override; ORC reference does not |
| S08 | AMBIGUOUS | HOLD | CONFLICT | RESOLVED | CONFLICT | Both preserve unresolved identity conflict |

## Direct observations

1. **S01:** Both conditions produce an automatically confirmable/resolved result.
2. **S02:** An explicit identifier crosswalk changes the baseline result from no direct match to a match. The current ORC reference implementation has no equivalent crosswalk mechanism.
3. **S03:** Both conditions detect quantity disagreement without silently selecting one quantity. Their terminal representations differ.
4. **S04:** The current ORC reference implementation can resolve despite the missing camera/OCR source. The implementation therefore does not itself establish completeness requirements.
5. **S05:** The current ORC reference implementation can resolve without applying temporal-state semantics. Temporal handling is therefore not demonstrated by this execution.
6. **S06:** Both conditions avoid silent entity selection when an identifier maps to multiple candidates.
7. **S07:** The baseline proxy applies an explicit authorized-operator rule; the current ORC quantity resolver still returns REQUIRES_VERIFICATION for conflicting quantities.
8. **S08:** Both conditions retain unresolved identity disagreement, but express it differently.

## What this does NOT establish

- that ORC is necessary;
- that ORC is superior to existing standards;
- that the baseline proxy represents the full capabilities of W3C PROV, NGSI-LD, EPCIS or RATS;
- that the six ORC primitives are validated;
- real-world operational validity;
- novelty or patentability.

## Most important limitation discovered

The current ORC reference implementation does not yet operationalize several semantic requirements stated in the ORC research documents:

- completeness/missing-source handling;
- temporal-state reasoning;
- explicit authority/override semantics;
- identifier crosswalks.

This is not a failure of the research program. It is an implementation-boundary observation that should drive the next test.

## Interpretation

The pilot does not isolate a unique ORC necessity boundary.

It does, however, identify concrete gaps between the conceptual ORC semantics and its current reference implementation, and identifies specific baseline capabilities that must be controlled in the next experiment.

## Next test

Build a second execution condition with:

1. explicit provenance/evidence preservation;
2. explicit completeness policy;
3. explicit temporal semantics;
4. explicit authority/override policy;
5. identifier crosswalk representation;

then rerun S01–S08 and add at least one real-world workflow trace.

