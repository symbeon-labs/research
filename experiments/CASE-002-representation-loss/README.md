# CASE-002 — Representation Loss Benchmark

**Status:** Protocol draft v0.1  
**Evidence class:** Synthetic / Controlled

## Purpose

CASE-002 is the first experiment under ART-003.

It tests whether deliberate loss of specific distinctions from a computational problem representation changes the ability to derive the capabilities, transformations and governance constraints required by the original problem.

## Research question

> Which distinctions, when removed from a computational problem representation, cause a measurable failure in deriving the requirements of the original problem?

## Experimental principle

Start with a full reference representation:

`P_full`

Create reduced variants:

`P_minus_d`

where one identifiable distinction `d` is removed or collapsed.

Compare the derived requirement set against the reference.

## Initial distinction matrix

| Distinction | Full representation | Reduced representation |
|---|---|---|
| Operational objective | explicit | removed |
| Temporal scope | explicit | removed |
| Source identity | explicit | collapsed |
| Entity identity | explicit | collapsed |
| Relationship | explicit | removed |
| Constraint | explicit | removed |
| Authority | explicit | removed |
| Uncertainty | explicit | collapsed |
| Conflict | explicit | collapsed |
| Consequence/action | explicit | removed |

This matrix is a starting instrument, not a conclusion about what is fundamental.

## Controlled variables

The first experiment should hold constant:

- problem scenario;
- available source information;
- derivation procedure;
- evaluation criteria;
- target requirements.

Only the representation supplied to the derivation procedure should change.

## Reference output

For each problem, establish an explicit reference set containing:

1. required capabilities;
2. required transformations;
3. governance constraints;
4. critical distinctions;
5. expected operational consequences.

The reference set must be defined independently from each reduced representation.

## Evaluation

For each reduced representation, record:

- preserved requirements;
- lost requirements;
- newly ambiguous requirements;
- unsupported assumptions;
- governance constraints no longer derivable;
- distinctions recoverable from remaining information.

The benchmark should use explicit requirement matching rather than a single aggregate quality score.

## Result classes

Each removed distinction is classified provisionally as:

- **Required** — removal causes reproducible derivation failure.
- **Useful but recoverable** — removal causes loss, but remaining information can reconstruct it.
- **Redundant** — removal does not change the tested derivation.
- **Context-dependent** — effect varies by problem class.

## Falsification discipline

A failed distinction test does not establish that the distinction is universally necessary.

A successful preservation test does not establish that the distinction is universally redundant.

Each result is local to the tested problem class and representation.

## First benchmark scope

The initial benchmark should use a small number of materially different synthetic operational problems.

The first implementation should remain deterministic and inspectable.

No model benchmark is required for v0.1.

## Next artifact

Create:

- `SCENARIOS-v0.1.md`
- `BASELINE-v0.1.md`
- `runner-v0.1.mjs`
- `RESULTS-v0.0.md`

before running the first derivation-loss experiment.
