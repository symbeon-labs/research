# CASE-002 — Synthetic Scenarios v0.1

## Scenario S01 — Receiving with temporal and authority conflict

A receiving workflow must determine whether a shipment can be accepted.

Available information:

- purchase order expected quantity;
- carrier document;
- scanner observation;
- operator declaration;
- timestamp for each observation;
- source identity;
- authorized receiver identity;
- current inventory state;
- policy requiring authorized confirmation for acceptance.

Target questions:

1. Can the shipment be accepted?
2. What quantity was physically observed?
3. Which evidence supports the decision?
4. Is manual review required?

Critical candidate distinctions:

- operational objective;
- temporal scope;
- source identity;
- authority;
- conflict;
- consequence/action.

---

## Scenario S02 — Identity with conflicting records

A system must determine whether two records refer to the same entity.

Available information:

- identifiers;
- names;
- timestamps;
- source systems;
- relation to an operation;
- conflicting identifiers;
- confidence/uncertainty.

Target questions:

1. Are the records the same entity?
2. What evidence supports the identity decision?
3. Is the result sufficiently certain for downstream action?
4. What information must be preserved for review?

Critical candidate distinctions:

- entity identity;
- source identity;
- relationship;
- uncertainty;
- conflict;
- provenance.

---

## Scenario S03 — Intervention under policy constraint

A system must determine whether an operational intervention is permitted.

Available information:

- observed condition;
- current state;
- applicable policy;
- actor identity;
- actor authority;
- temporal validity of the policy;
- expected consequence;
- required review threshold.

Target questions:

1. Is intervention permitted?
2. Which policy applies?
3. Who is authorized to act?
4. What uncertainty or review requirement remains?

Critical candidate distinctions:

- authority;
- temporal scope;
- constraint;
- consequence;
- uncertainty;
- operational objective.

---

## Scenario S04 — Audit explanation

A system must explain why a previous operational state was produced.

Available information:

- source assertions;
- evidence;
- transformations;
- timestamps;
- policies;
- authority;
- intermediate states;
- final state.

Target questions:

1. What caused the state?
2. Which evidence participated?
3. Which transformation produced it?
4. Which authority or policy applied?
5. Can the result be reproduced?

Critical candidate distinctions:

- provenance;
- temporal scope;
- authority;
- transformation;
- state;
- evidence.

---

## Scenario design rule

Each scenario must include at least one distinction whose removal is expected to create a derivation ambiguity or failure.

That expectation is a hypothesis and must not be treated as a result.
