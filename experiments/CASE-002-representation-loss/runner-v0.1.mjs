const scenarios = [
  {
    id: "S01",
    fields: ["objective","expected_quantity","observed_quantity","source_identity","timestamps","authority","conflict","consequence"],
    rules: [
      ["capability","answer_acceptance_question",["objective","authority","observed_quantity"]],
      ["capability","compute_physical_quantity",["observed_quantity"]],
      ["capability","trace_supporting_evidence",["source_identity","timestamps"]],
      ["capability","determine_manual_review",["conflict","authority"]],
      ["transformation","observation_to_operational_representation",["observed_quantity","objective"]],
      ["transformation","evidence_to_decision",["source_identity","authority","conflict"]],
      ["governance","authority_check",["authority"]],
      ["governance","temporal_scope_check",["timestamps"]],
      ["governance","conflict_handling",["conflict"]]
    ]
  },
  {
    id: "S02",
    fields: ["entity_identity","source_identity","relation","timestamps","uncertainty","conflict","provenance"],
    rules: [
      ["capability","identify_entity",["entity_identity","relation"]],
      ["capability","trace_identity_evidence",["source_identity","provenance"]],
      ["capability","assess_identity_certainty",["uncertainty","conflict"]],
      ["capability","support_downstream_action",["entity_identity","uncertainty"]],
      ["transformation","records_to_identity_representation",["entity_identity","relation"]],
      ["transformation","evidence_to_identity_decision",["source_identity","uncertainty","conflict"]],
      ["governance","uncertainty_handling",["uncertainty"]],
      ["governance","conflict_handling",["conflict"]],
      ["governance","provenance_preservation",["provenance"]]
    ]
  },
  {
    id: "S03",
    fields: ["objective","observed_condition","current_state","constraint","actor_identity","authority","policy_time","consequence","uncertainty"],
    rules: [
      ["capability","determine_intervention_permission",["objective","constraint","authority"]],
      ["capability","identify_applicable_policy",["constraint","policy_time"]],
      ["capability","identify_authorized_actor",["actor_identity","authority"]],
      ["capability","determine_review_requirement",["uncertainty","constraint"]],
      ["transformation","observation_to_permission_decision",["observed_condition","constraint","authority"]],
      ["transformation","policy_to_action_constraint",["constraint","policy_time"]],
      ["governance","authority_check",["authority"]],
      ["governance","temporal_validity_check",["policy_time"]],
      ["governance","uncertainty_handling",["uncertainty"]]
    ]
  },
  {
    id: "S04",
    fields: ["source_assertions","evidence","transformations","timestamps","policies","authority","intermediate_states","final_state","provenance"],
    rules: [
      ["capability","explain_state_causation",["source_assertions","transformations","intermediate_states","final_state"]],
      ["capability","trace_participating_evidence",["evidence","provenance"]],
      ["capability","identify_applicable_policy",["policies","timestamps"]],
      ["capability","identify_authority",["authority"]],
      ["capability","reproduce_result",["transformations","evidence","policies"]],
      ["transformation","evidence_to_state",["evidence","transformations","final_state"]],
      ["governance","provenance_preservation",["provenance"]],
      ["governance","authority_check",["authority"]],
      ["governance","temporal_scope_check",["timestamps"]]
    ]
  }
];

const removals = ["objective","temporal_scope","source_identity","entity_identity","relation","constraint","authority","uncertainty","conflict","consequence"];

function derive(s, available) {
  return s.rules
    .filter(([, , req]) => req.every(x => available.has(x)))
    .map(([type,id]) => type + ":" + id)
    .sort();
}

function removeDimension(fields, d) {
  const aliases = {
    temporal_scope: ["timestamps","policy_time"],
    source_identity: ["source_identity","source_assertions"],
    entity_identity: ["entity_identity"],
    relation: ["relation"],
    constraint: ["constraint","policies"],
    authority: ["authority","actor_identity"],
    uncertainty: ["uncertainty"],
    conflict: ["conflict"],
    consequence: ["consequence"],
    objective: ["objective"]
  };
  const removed = new Set(aliases[d] || [d]);
  return new Set(fields.filter(x => !removed.has(x)));
}

for (const s of scenarios) {
  const full = new Set(s.fields);
  const reference = derive(s, full);
  console.log(JSON.stringify({scenario:s.id,reference}));
  for (const d of removals) {
    const reduced = removeDimension(s.fields,d);
    const derived = derive(s,reduced);
    const missing = reference.filter(x => !derived.includes(x));
    console.log(JSON.stringify({scenario:s.id,removed:d,missing}));
  }
}
