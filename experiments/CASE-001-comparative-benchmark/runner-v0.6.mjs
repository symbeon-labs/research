// CASE-001 question-conditioned resolution experiment v0.6
// Synthetic semantic-boundary test.
// Question: does one global operational state suffice when the same evidence
// must answer materially different operational questions?

import crypto from "node:crypto";

const evidence = [
  {id:"A1", source:"nfe", claim:"expected_quantity", value:100, time:"T0", authority:"document"},
  {id:"A2", source:"scanner", claim:"observed_quantity", value:98, time:"T1", authority:"machine"},
  {id:"A3", source:"operator", claim:"verified_quantity", value:100, time:"T2", authority:"authorized_operator", verified:true},
  {id:"A4", source:"erp", claim:"current_inventory_quantity", value:95, time:"T2", authority:"system_state"}
];

const questions = [
  {id:"Q1", name:"receiving_confirmation"},
  {id:"Q2", name:"physical_observation"},
  {id:"Q3", name:"inventory_entry"},
  {id:"Q4", name:"intervention_required"},
  {id:"Q5", name:"audit_explanation"}
];

const policy = {
  receiving_confirmation:"authorized_operator_verification_can_confirm_receiving",
  physical_observation:"machine_observation_represents_physical_count",
  inventory_entry:"verified_receiving_quantity_enters_inventory",
  intervention_required:"intervention_is_required_only_when_no_authorized_resolution_exists",
  audit_explanation:"return_all_material_assertions_and_current_state_with_provenance"
};

// Condition A: state-first. A single operational state is produced before the
// operational question is known. This intentionally tests whether one global
// quantity can represent all meanings present in the evidence.
function stateFirst() {
  const state = {quantity: evidence.find(x=>x.claim==="current_inventory_quantity")?.value ?? null};
  return questions.map(q => ({
    question:q.id,
    answer:state.quantity,
    resolution:"GLOBAL_STATE",
    basis:["A4"],
    semantic_distinction_loss:true
  }));
}

// Condition B: preserving conventional composition. Assertions remain explicit,
// but there is no ORC-named service/object/boundary.
function resolveQuestion(q) {
  switch(q.name) {
    case "receiving_confirmation":
      return {resolution:"RESOLVED", operational_state:"RECEIVING_CONFIRMED", value:100, basis:["A1","A2","A3"], uncertainty:false};
    case "physical_observation":
      return {resolution:"RESOLVED", operational_state:"PHYSICAL_COUNT", value:98, basis:["A2"], uncertainty:false};
    case "inventory_entry":
      return {resolution:"RESOLVED", operational_state:"INVENTORY_QUANTITY", value:100, basis:["A1","A3"], uncertainty:false};
    case "intervention_required":
      return {resolution:"RESOLVED", operational_state:"NO_INTERVENTION_REQUIRED", value:false, basis:["A2","A3"], uncertainty:false};
    case "audit_explanation":
      return {resolution:"RESOLVED", operational_state:"AUDIT_TRACE", value:{expected:100, observed:98, verified:100, current_inventory:95}, basis:["A1","A2","A3","A4"], uncertainty:false};
  }
}

function preservingConventional() {
  return questions.map(q => ({question:q.id, ...resolveQuestion(q), architecture_boundary:"conventional_rules"}));
}

// Condition C: explicit ORC representation. It uses the same question-specific
// semantics as Condition B. Identical outcomes are intentional: this controls
// against attributing question-conditioned behavior to the ORC label itself.
function orc() {
  return questions.map(q => ({question:q.id, ...resolveQuestion(q), architecture_boundary:"explicit_resolution"}));
}

const results = {
  state_first:stateFirst(),
  preserving_conventional:preservingConventional(),
  orc:orc()
};

const stripBoundary = rows => rows.map(({architecture_boundary,...x})=>x);
const pc = stripBoundary(results.preserving_conventional);
const oc = stripBoundary(results.orc);

const summary = {
  same_evidence:true,
  questions:questions.length,
  state_first_preserves_question_semantics:false,
  distinct_question_conditioned_resolutions:new Set(pc.map(x=>JSON.stringify({
    resolution:x.resolution, operational_state:x.operational_state, value:x.value
  }))).size,
  preserving_conventional_and_orc_same_resolution:JSON.stringify(pc)===JSON.stringify(oc),
  conclusion:"QUESTION_CONDITIONED_RESOLUTION_REQUIRED_FOR_THIS_CASE; ORC_NECESSITY_NOT_ESTABLISHED"
};

const canonical = JSON.stringify({evidence,questions,policy,results,summary});
console.log(JSON.stringify({
  sha256:crypto.createHash("sha256").update(canonical).digest("hex"),
  summary,
  results
},null,2));
