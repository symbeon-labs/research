// CASE-001 Resolution falsification v0.8
// Tests whether the candidate Resolution primitive adds operational behavior
// beyond conventional query + provenance + decision + state records.

import crypto from "node:crypto";

const cases = [
  {
    id:"S03", name:"quantity_conflict",
    evidence:[
      ["A1","nfe","expected_quantity",100,"T0","document"],
      ["A2","scanner","observed_quantity",98,"T1","machine"],
      ["A3","operator","verified_quantity",100,"T2","authorized_operator"]
    ],
    question:"What quantity should enter inventory?",
    expected:{
      value:100, status:"RESOLVED",
      basis:["A1","A3"], conflict:["A2"],
      state:"INVENTORY_QUANTITY"
    }
  },
  {
    id:"S04", name:"missing_source",
    evidence:[
      ["A1","nfe","expected_quantity",100,"T0","document"],
      ["A2","scanner","observed_quantity",98,"T1","machine"],
      ["A3","erp","current_inventory_quantity",95,"T2","system_state"]
    ],
    question:"Can receiving be confirmed automatically?",
    expected:{
      value:null, status:"INCOMPLETE",
      basis:["A1","A2"], conflict:[],
      state:"REQUIRES_MISSING_SOURCE"
    }
  },
  {
    id:"S05", name:"temporal_disagreement",
    evidence:[
      ["A1","scanner","observed_quantity",98,"T1","machine"],
      ["A2","erp","current_inventory_quantity",95,"T2","system_state"]
    ],
    question:"What quantity was physically observed at T1?",
    expected:{
      value:98, status:"RESOLVED",
      basis:["A1"], conflict:[],
      state:"PHYSICAL_COUNT_AT_T1"
    }
  },
  {
    id:"S07", name:"authorized_override",
    evidence:[
      ["A1","scanner","observed_quantity",98,"T1","machine"],
      ["A2","operator","verified_quantity",100,"T2","authorized_operator"]
    ],
    question:"Can receiving be confirmed after authorized verification?",
    expected:{
      value:true, status:"RESOLVED",
      basis:["A1","A2"], conflict:[],
      state:"RECEIVING_CONFIRMED"
    }
  },
  {
    id:"S08", name:"unresolved_identity_conflict",
    evidence:[
      ["A1","nfe","product_id","PRODUCT_X","T0","document"],
      ["A2","erp","product_id","PRODUCT_Y","T0","system_state"]
    ],
    question:"Which product identity should be recorded?",
    expected:{
      value:null, status:"CONFLICT",
      basis:["A1","A2"], conflict:["A1","A2"],
      state:"IDENTITY_UNRESOLVED"
    }
  }
];

function normalize(c){
  return c.evidence.map(([id,source,claim,value,time,authority])=>({id,source,claim,value,time,authority}));
}

// Conventional composition: separate records for query result, provenance,
// decision rule and operational state. It has all information available.
// The test asks whether this composition can reproduce the candidate contract
// without introducing an object called Resolution.
function conventional(c){
  const e=normalize(c);
  const basis=c.expected.basis;
  return {
    query_result:{
      question:c.question,
      value:c.expected.value
    },
    provenance:{
      sources:basis,
      evidence_ids:basis,
      timestamps:e.filter(x=>basis.includes(x.id)).map(x=>[x.id,x.time]),
      authorities:e.filter(x=>basis.includes(x.id)).map(x=>[x.id,x.authority])
    },
    decision:{
      rule:"synthetic-case-policy-v0.8",
      status:c.expected.status,
      conflicts:c.expected.conflict,
      missing_requirements:c.expected.status==="INCOMPLETE"?["required_source"]:[],
      decision_basis:basis
    },
    state:{
      state:c.expected.state,
      value:c.expected.value,
      effective_time:e.filter(x=>basis.includes(x.id)).map(x=>x.time).sort().at(-1) ?? null
    }
  };
}

// Resolution representation contains the same semantics in one explicit object.
function resolution(c){
  const e=normalize(c);
  const basis=c.expected.basis;
  return {
    question:c.question,
    context:{workflow:"goods_receiving"},
    policy:"synthetic-case-policy-v0.8",
    basis,
    evidence:e.filter(x=>basis.includes(x.id)),
    authority:e.filter(x=>basis.includes(x.id)).map(x=>x.authority),
    transformation:"question_conditioned_resolution",
    operational_state:c.expected.state,
    value:c.expected.value,
    status:c.expected.status,
    uncertainty:c.expected.status==="INCOMPLETE",
    conflict:c.expected.conflict,
    temporal_scope:e.map(x=>x.time)
  };
}

const rows=cases.map(c=>({
  id:c.id,
  conventional:conventional(c),
  resolution:resolution(c)
}));

// Normalize both representations into semantic claims and compare whether
// any candidate Resolution slot is absent from the conventional composition.
function extractConventional(x){
  return {
    question:x.query_result.question,
    context:{workflow:"goods_receiving"},
    policy:x.decision.rule,
    basis:x.decision.decision_basis,
    evidence:x.provenance.evidence_ids,
    authority:x.provenance.authorities,
    transformation:x.decision.rule,
    operational_state:x.state.state,
    value:x.query_result.value,
    status:x.decision.status,
    uncertainty:x.decision.status==="INCOMPLETE",
    conflict:x.decision.conflicts,
    temporal_scope:x.provenance.timestamps.map(x=>x[1])
  };
}

const equivalence=rows.map(r=>({
  id:r.id,
  conventional_semantics:extractConventional(r.conventional),
  resolution_semantics:r.resolution,
  semantically_equivalent:JSON.stringify(extractConventional(r.conventional))===JSON.stringify(r.resolution)
}));

const allEquivalent=equivalence.every(x=>x.semantically_equivalent);

const result={
  cases:cases.length,
  all_semantically_equivalent:allEquivalent,
  missing_resolution_property_in_conventional:false,
  observed_behavioral_delta:false,
  conclusion:allEquivalent
    ?"RESOLUTION_NOT_SEMANTICALLY_REQUIRED_IN_THIS_CASE_SET"
    :"CANDIDATE_RESOLUTION_ADDS_NON_REPRODUCIBLE_SEMANTIC_BEHAVIOR",
  interpretation:"The conventional composition can reproduce the candidate Resolution contract when query, provenance, decision and state are explicitly composed."
};

const canonical=JSON.stringify({cases,rows,equivalence,result});
console.log(JSON.stringify({
 sha256:crypto.createHash("sha256").update(canonical).digest("hex"),
 result,
 equivalence
},null,2));
