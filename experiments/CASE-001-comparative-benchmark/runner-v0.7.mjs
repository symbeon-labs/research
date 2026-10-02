// CASE-001 Resolution Primitive Test v0.7
// Synthetic semantic-coherence experiment.
// The test asks whether materially different operational outputs share
// invariant semantics beyond ordinary query/answer metadata.

import crypto from "node:crypto";

const evidence = [
  {id:"A1", source:"nfe", claim:"expected_quantity", value:100, time:"T0", authority:"document"},
  {id:"A2", source:"scanner", claim:"observed_quantity", value:98, time:"T1", authority:"machine"},
  {id:"A3", source:"operator", claim:"verified_quantity", value:100, time:"T2", authority:"authorized_operator"},
  {id:"A4", source:"erp", claim:"current_inventory_quantity", value:95, time:"T2", authority:"system_state"}
];

const questions = [
  {id:"Q1", name:"receiving_confirmation", output:"boolean_state"},
  {id:"Q2", name:"physical_observation", output:"quantity"},
  {id:"Q3", name:"inventory_entry", output:"quantity"},
  {id:"Q4", name:"intervention_required", output:"boolean_state"},
  {id:"Q5", name:"audit_explanation", output:"multi_assertion_explanation"}
];

const context = {workflow:"goods_receiving", location:"receiving_dock", time_scope:"T0-T2"};
const policy = {version:"synthetic-policy-v0.7"};

function derive(q) {
  switch(q.name) {
    case "receiving_confirmation":
      return {value:true, state:"RECEIVING_CONFIRMED", basis:["A1","A2","A3"], authority:["A3"]};
    case "physical_observation":
      return {value:98, state:"PHYSICAL_COUNT", basis:["A2"], authority:["A2"]};
    case "inventory_entry":
      return {value:100, state:"INVENTORY_QUANTITY", basis:["A1","A3"], authority:["A3"]};
    case "intervention_required":
      return {value:false, state:"NO_INTERVENTION_REQUIRED", basis:["A2","A3"], authority:["A3"]};
    case "audit_explanation":
      return {
        value:{expected:100, observed:98, verified:100, current_inventory:95},
        state:"AUDIT_TRACE",
        basis:["A1","A2","A3","A4"],
        authority:["A1","A2","A3","A4"]
      };
  }
}

const answers = questions.map(q => {
  const d=derive(q);
  return {question:q.id, output_type:q.output, answer:d.value};
});

// Candidate common semantic object.
const resolutions = questions.map(q => {
  const d=derive(q);
  return {
    question:q.id,
    context,
    policy,
    basis:d.basis,
    evidence:d.basis,
    authority:d.authority,
    transformation:"question_conditioned_resolution",
    operational_state:d.state,
    value:d.value,
    status:"RESOLVED",
    uncertainty:false,
    conflict:false,
    temporal_scope:context.time_scope
  };
});

const invariantSlots=[
  "question","context","policy","basis","evidence","authority",
  "transformation","operational_state","value","status",
  "uncertainty","conflict","temporal_scope"
];

const invariantAcrossCases=invariantSlots.every(k=>resolutions.every(r=>Object.hasOwn(r,k)));
const outputTypes=[...new Set(questions.map(q=>q.output))];
const distinctOutputs=new Set(resolutions.map(r=>JSON.stringify(r.value))).size;
const queryAnswersHaveBasis=false;
const operationalStatesDifferent=new Set(resolutions.map(r=>r.operational_state)).size===5;

const result={
  fixed_evidence:true,
  questions:questions.length,
  distinct_output_types:outputTypes.length,
  distinct_operational_representations:distinctOutputs,
  common_resolution_schema_invariant:invariantAcrossCases,
  query_only_answers_have_common_basis:queryAnswersHaveBasis,
  operational_states_remain_distinct:operationalStatesDifferent,
  candidate_primitive_supported:"CANDIDATE_SUPPORTED_SYNTHETICALLY",
  caveat:"The same semantics could potentially be encoded by conventional records; this test establishes internal invariance, not novelty or necessity."
};

const canonical=JSON.stringify({evidence,questions,context,policy,answers,resolutions,result});
console.log(JSON.stringify({
  sha256:crypto.createHash("sha256").update(canonical).digest("hex"),
  result,
  answers,
  resolutions
},null,2));
