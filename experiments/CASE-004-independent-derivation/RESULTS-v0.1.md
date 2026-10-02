# CASE-004 — Results v0.1

## Execution
The deterministic runner was executed over 12 synthetic scenarios.

Raw output SHA-256:
`683379a255ff608c90c1eb1391f45dde8c97516ddec3ce14638e15fc03312e3a`

## Aggregate

| Measure | Conventional | PDI |
|---|---:|---:|
| Scenarios | 12 | 12 |
| Capability agreement | 12/12 | 12/12 |
| Architecture agreement | 12/12 | 12/12 |
| Trace agreement | 12/12 | 12/12 |
| Mean requirements/capabilities | 4.58 | 4.58 |
| Modeled derivation effort | 194 | 242 |

## Observation

Both conditions reached complete agreement between their two independent implementations on capabilities, architecture components and trace links for all 12 scenarios.

Coverage was identical.

The PDI condition required 242 modeled effort units versus 194 for the conventional condition, a difference of 48 units (+24.7%).

## Interpretation

This experiment does **not** detect an incremental reproducibility advantage for the explicit PDI intermediate representation under the tested synthetic conditions.

It therefore adds another negative result to the current PDI investigation: the explicit representation layer did not produce higher agreement than the conventional process when both processes were given the same structured problem distinctions.

## Limitation

The implementations are independent code paths, not independent human teams. Their rule systems still encode the same synthetic semantic assumptions. Therefore this result is evidence about formal derivation reproducibility, not about human analyst agreement.

The result also does not test ambiguity under natural language, evolving requirements, change propagation, cross-domain transfer, or organizational context.

## Current implication for PDI

PDI now needs to demonstrate a property that is not trivially reproduced by a competent conventional requirements process.

The most discriminating next experiment is **change propagation under representation-preserving and representation-breaking modifications**, where the same problem evolves and both methods must update requirements and architecture while preserving traceability and detecting invalidated decisions.
