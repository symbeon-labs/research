# CASE-003 — Scenarios v0.1

Four synthetic scenarios are reused from CASE-002 to make the comparison cumulative.

## S01 — Receiving discrepancy

Inputs:
- expected quantity;
- carrier document;
- scanner observation;
- operator declaration;
- timestamps;
- source identity;
- authorized receiver;
- inventory state;
- receiving policy.

Required outcome:
- acceptance decision;
- physical quantity;
- evidence basis;
- authority check;
- manual-review condition;
- temporal validity.

## S02 — Conflicting identity

Inputs:
- multiple identifiers;
- names;
- source systems;
- timestamps;
- relationships;
- conflicting identifiers;
- confidence.

Required outcome:
- identity determination;
- evidence basis;
- uncertainty;
- conflict handling;
- downstream-action constraint.

## S03 — Policy-constrained intervention

Inputs:
- observed condition;
- current state;
- applicable policy;
- actor identity and authority;
- temporal validity;
- expected consequence;
- review threshold.

Required outcome:
- intervention permission;
- applicable policy;
- authorized actor;
- uncertainty/review condition;
- action constraint.

## S04 — Audit explanation

Inputs:
- source assertions;
- evidence;
- transformations;
- timestamps;
- policies;
- authority;
- intermediate states;
- final state.

Required outcome:
- causal explanation;
- evidence basis;
- transformation trace;
- policy/authority basis;
- reproducibility.
