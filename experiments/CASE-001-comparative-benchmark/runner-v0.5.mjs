// CASE-001 composition/reuse experiment v0.5
// Measures structural cost of reusing the same evidence across workflows.
// This is a synthetic architectural-cost experiment, not a performance benchmark.

import crypto from "node:crypto";

const evidence = [
  {source:"nfe",claim:"quantity",value:100,time:"T0"},
  {source:"scanner",claim:"quantity",value:98,time:"T1"},
  {source:"operator",claim:"quantity",value:100,time:"T2"},
  {source:"erp",claim:"state_quantity",value:95,time:"T2"}
];

const workflows = [
  "receiving_confirmation",
  "inventory_reconciliation",
  "audit_explanation",
  "return_authorization",
  "supplier_dispute"
];

// Ad-hoc condition: each workflow owns its own interpretation of the same
// source material. Rules and transformations are intentionally duplicated.
const adHoc = workflows.map((workflow) => ({
  workflow,
  source_references: evidence.length,
  transformation_steps: 4,
  duplicated_rules: 3,
  explicit_assertion_reuse: false,
  provenance_reuse: false,
  question_specific_resolution: true
}));

// Preserving conventional composition: shared assertion/evidence structures,
// but each workflow derives its own operational state and rules.
const preserving = workflows.map((workflow) => ({
  workflow,
  source_references: evidence.length,
  transformation_steps: 3,
  duplicated_rules: 1,
  explicit_assertion_reuse: true,
  provenance_reuse: true,
  question_specific_resolution: true
}));

// ORC condition: shared resolution boundary and reusable semantic objects.
// The experiment does not assume this is cheaper; it measures the declared
// representation/derivation structure.
const orc = workflows.map((workflow) => ({
  workflow,
  source_references: evidence.length,
  transformation_steps: 2,
  duplicated_rules: 0,
  explicit_assertion_reuse: true,
  provenance_reuse: true,
  question_specific_resolution: true,
  shared_resolution_boundary: true
}));

function aggregate(rows){
  return {
    workflows: rows.length,
    total_transformation_steps: rows.reduce((n,r)=>n+r.transformation_steps,0),
    total_duplicated_rules: rows.reduce((n,r)=>n+r.duplicated_rules,0),
    workflows_with_assertion_reuse: rows.filter(r=>r.explicit_assertion_reuse).length,
    workflows_with_provenance_reuse: rows.filter(r=>r.provenance_reuse).length
  };
}

const results={ad_hoc:aggregate(adHoc),preserving_conventional:aggregate(preserving),orc:aggregate(orc)};

// Structural delta only; no quality/superiority inference.
const canonical=JSON.stringify({evidence,workflows,results});
console.log(JSON.stringify({
  sha256:crypto.createHash("sha256").update(canonical).digest("hex"),
  results,
  raw:{adHoc,preserving,orc}
},null,2));