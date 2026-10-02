# CASE-002 — Results v0.1

**Status:** Executed — preliminary synthetic result  
**Evidence class:** Synthetic / Controlled  
**Runner:** `runner-v0.1.mjs`  
**Execution hash (raw JSON output):** `48bb4009e7764fdba88c556799bdc66d26c5cb899f88f7739b6ea3eb8a34c671`

## 1. Execution

The deterministic runner was executed against S01–S04 and the ten candidate representation-loss operations defined by the protocol.

For each scenario, the runner compared the full-reference requirement set with the requirements derivable after one distinction was removed or collapsed.

## 2. Aggregate observation

| Removed distinction | Scenarios tested | Scenarios with derivation loss | Missing requirements |
|---|---:|---:|---:|
| objective | 4 | 2 | 3 |
| temporal_scope | 4 | 3 | 7 |
| source_identity | 4 | 3 | 5 |
| entity_identity | 4 | 1 | 3 |
| relation | 4 | 1 | 2 |
| constraint | 4 | 2 | 7 |
| authority | 4 | 3 | 10 |
| uncertainty | 4 | 2 | 6 |
| conflict | 4 | 2 | 6 |
| consequence | 4 | 0 | 0 |

These are benchmark-local observations, not universal necessity claims.

## 3. Scenario observations

### S01 — Receiving

Removal of:
- objective caused loss of acceptance-question and operational-representation derivation;
- temporal scope caused loss of evidence tracing and temporal governance;
- source identity caused loss of evidence tracing and evidence-to-decision derivation;
- authority caused loss of acceptance, review, authority-check and evidence-to-decision requirements;
- conflict caused loss of manual-review, conflict-handling and evidence-to-decision requirements.

Removing entity identity, relation, constraint, uncertainty or consequence produced no loss under the current rules.

### S02 — Identity

Removal of:
- source identity caused loss of evidence tracing and evidence-to-identity derivation;
- entity identity caused loss of entity identification, downstream-action support and identity representation;
- relation caused loss of entity identification and identity representation;
- uncertainty caused loss of certainty assessment, downstream-action support and uncertainty governance;
- conflict caused loss of certainty assessment, conflict governance and evidence-to-identity derivation.

Objective, temporal scope, constraint, authority and consequence produced no loss under the current rules.

### S03 — Intervention

Removal of:
- objective caused loss of intervention-permission derivation;
- temporal scope caused loss of policy applicability, temporal-validity governance and policy-to-action constraint;
- constraint caused loss of five requirements;
- authority caused loss of permission, authorized-actor, authority governance and observation-to-permission derivation;
- uncertainty caused loss of review requirement and uncertainty governance.

Source identity, entity identity, relation, conflict and consequence produced no loss under the current rules.

### S04 — Audit explanation

Removal of:
- temporal scope caused loss of policy applicability and temporal governance;
- source identity caused loss of state-causation explanation;
- constraint caused loss of policy applicability and reproducibility;
- authority caused loss of authority identification and authority governance.

Objective, entity identity, relation, uncertainty, conflict and consequence produced no loss under the current rules.

## 4. Immediate result

The first run shows that deliberate removal of some distinctions can cause deterministic loss of derivable capabilities, transformations or governance constraints.

The strongest recurring effects in this small benchmark were associated with:

- temporal scope;
- source identity;
- authority;
- constraint;
- uncertainty/conflict in scenarios where they participate in the derivation.

This provides preliminary support for the narrower H1 hypothesis **within the tested synthetic scenarios**.

## 5. Critical limitation

The current runner is itself rule-based and explicitly declares which fields each requirement depends on.

Therefore the experiment currently demonstrates:

> **Given the declared derivation rules, removing a referenced distinction prevents the corresponding requirement from being derived.**

It does **not yet demonstrate** that the distinction is semantically necessary in a broader sense.

In particular:

1. some distinctions are not represented in every scenario;
2. the rules may encode the dependency by construction;
3. an equivalent representation could potentially reconstruct the removed information;
4. no learned or independent derivation process has been tested;
5. the benchmark contains only four synthetic scenarios.

## 6. Important methodological consequence

The result is therefore a **protocol validation / preliminary synthetic observation**, not a final ART-003 conclusion.

The next version should test whether the observed losses survive:

- semantically equivalent alternative representations;
- independent derivation rules;
- recoverability from remaining information;
- controlled transformations that encode the same meaning under different field structures.

## 7. Current classification

No distinction is classified as universally required.

The provisional status is:

**Observed dependency:** yes, for several distinctions in the tested scenarios.

**Semantic necessity:** not established.

**Generalization:** not established.

**ART-003 hypothesis:** provisionally supported within the benchmark, pending stronger controls.

## 8. Raw execution record

The runner output was generated deterministically and hashed as:

`48bb4009e7764fdba88c556799bdc66d26c5cb899f88f7739b6ea3eb8a34c671`

The complete raw output is represented by this execution hash; no result was manually altered after execution.
