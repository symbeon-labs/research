# CASE-001 — Resolution Falsification Results v0.8

**Execution date:** 2026-10-02  
**Evidence class:** Synthetic + Comparative  
**Status:** Executed

## Research question

Does an explicit `Resolution` primitive add operational behavior that cannot be reproduced by a conventional composition of:

- query result;
- provenance;
- decision/rule record;
- operational state?

## Cases

The experiment used five previously problematic semantic cases:

- S03 — quantity conflict;
- S04 — missing source;
- S05 — temporal disagreement;
- S07 — authorized override;
- S08 — unresolved identity conflict.

The same evidence, question and expected operational semantics were represented in both conditions.

## Result

**All five cases were semantically equivalent.**

The conventional composition reproduced every candidate Resolution field:

- question;
- context;
- policy;
- evidence/basis;
- authority;
- transformation/rule;
- operational state;
- value;
- status;
- uncertainty;
- conflict;
- temporal scope.

No operational behavior observed in the Resolution representation was absent from the conventional composition.

## Direct observation

This is a **negative result for the current primitive-necessity hypothesis**.

The experiment did not find a semantic property that requires a primitive named `Resolution`.

This does not mean the concept is useless. It means the current evidence supports treating Resolution as a **semantic composition/pattern**, not yet as an irreducible primitive.

## Consequence for ORC

The evidence now weakens the claim:

> "ORC is necessary because Resolution is an irreducible primitive."

That claim is not supported by CASE-001.

The more defensible position is:

> ORC may be an architectural packaging of a recurring composition — question + context + policy + evidence + authority + derivation + operational state — but the current experiments do not establish that this packaging is semantically necessary.

## What remains open

A stronger ORC case would require a property that conventional composition cannot reproduce without effectively introducing the same semantic boundary under another name.

Candidate future tests, only if justified:

1. cross-workflow identity of resolutions;
2. compositional reuse of resolution records as evidence for later resolutions;
3. resolution-to-resolution derivation chains;
4. governance/audit semantics where the resolution itself becomes an input;
5. independent implementations that must interoperate on a canonical resolution object.

These are engineering/semantic hypotheses, not presumed wins.

## Classification

**Finding:** Resolution primitive necessity falsified for the tested synthetic cases.

**Candidate semantic pattern:** remains useful.

**ORC necessity:** not established.

**ORC superiority:** not established.

**Novelty:** not established.

**Real-world validity:** not established.

## Reproducibility

Canonical SHA-256:

`NOT_RECORDED — semantic equivalence was evaluated by the runner; canonical hash requires local execution of runner-v0.8.mjs.`
