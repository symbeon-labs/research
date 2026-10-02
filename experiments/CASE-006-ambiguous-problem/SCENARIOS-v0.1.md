# CASE-006 Scenarios v0.1

Six ambiguous operational problems are used. Each text intentionally omits explicit field labels while containing clues from which operational distinctions can be recovered.

S01 — Delivery exception:
"Some orders are appearing as delivered before the customer confirms receipt. The ERP is usually right, but drivers sometimes report returns later. The supervisor wants exceptions reviewed without stopping normal deliveries."

Hidden distinctions: objective, temporal_scope, source_identity, entity_identity, conflict, authority, uncertainty, constraint, consequence.

S02 — Inventory reconciliation:
"The warehouse count and the system count disagree on some items. Scans can arrive after the system update. The inventory manager needs a reliable way to decide when a recount is necessary."

Hidden distinctions: objective, temporal_scope, source_identity, conflict, authority, uncertainty, consequence.

S03 — Payment verification:
"Occasionally a payment gateway reports success while the ERP still shows pending. Finance wants duplicate charges avoided and every decision auditable."

Hidden distinctions: objective, source_identity, conflict, authority, constraint, consequence.

S04 — Service health:
"Telemetry looks healthy while support tickets report outages. The service owner needs to decide whether to schedule intervention without violating the maintenance window."

Hidden distinctions: objective, source_identity, conflict, authority, constraint, consequence.

S05 — Identity verification:
"A login looks legitimate from the identity provider, but the device signal sometimes disagrees. Security wants suspicious sessions handled without granting more access than necessary."

Hidden distinctions: objective, source_identity, conflict, authority, uncertainty, constraint, consequence.

S06 — Quality monitoring:
"The defect sensor reports an increase during one shift, although the sampling record is incomplete. QA needs to decide whether inspection is warranted and retain enough evidence to justify the decision."

Hidden distinctions: objective, temporal_scope, source_identity, uncertainty, authority, constraint, consequence.
