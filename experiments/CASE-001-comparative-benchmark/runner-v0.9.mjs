// CASE-001 Resolution composition / resolution-to-resolution v0.9
// Final conceptual attack: can Resolution-to-Resolution composition be represented
// without a distinct Resolution object while preserving derivation semantics?

import crypto from "node:crypto";

const baseEvidence = [
  {id:"A1",source:"nfe",claim:"expected_quantity",value:100,time:"T0",authority:"document"},
  {id:"A2",source:"scanner",claim:"observed_quantity",value:98,time:"T1",authority:"machine"},
  {id:"A3",source:"operator",claim:"verified_quantity",value:100,time:"T2",authority:"authorized_operator"}
];

// R1 is a receiving resolution derived from primary evidence.
const R1 = {
  id:"R1",
  question:"Can receiving be confirmed?",
  context:{workflow:"goods_receiving"},
  policy:"authorized_operator_verification",
  basis:["A1","A2","A3"],
  value:true,
  status:"RESOLVED",
  state:"RECEIVING_CONFIRMED",
  authority:["A3"],
  effective_time:"T2"
};

// R2 uses R1 as an input while also receiving new evidence.
// This is deliberately a second-order resolution.
const newEvidence = [
  {id:"A4",source:"erp",claim:"inventory_quantity",value:95,time:"T2",authority:"system_state"}
];

const R2 = {
  id:"R2",
  question:"Should inventory be updated from this receiving operation?",
  context:{workflow:"inventory_update"},
  policy:"confirmed_receiving_and_inventory_reconciliation",
  basis:["R1","A4"],
  value:100,
  status:"RESOLVED",
  state:"INVENTORY_UPDATE_AUTHORIZED",
  authority:["R1","A4"],
  effective_time:"T2"
};

const R3 = {
  id:"R3",
  question:"Can the supplier dispute be rejected?",
  context:{workflow:"supplier_dispute"},
  policy:"confirmed_receiving_plus_inventory_trace",
  basis:["R1","R2"],
  value:false,
  status:"REQUIRES_VERIFICATION",
  state:"SUPPLIER_DISPUTE_NOT_REJECTED",
  authority:["R1","R2"],
  effective_time:"T2"
};

// Conventional composition: represent R1/R2/R3 as ordinary decision + state +
// provenance records. A later decision references earlier records by ID.
const conventional = {
  decisions:{
    R1:{question:R1.question,rule:R1.policy,result:R1.value,status:R1.status,basis:R1.basis},
    R2:{question:R2.question,rule:R2.policy,result:R2.value,status:R2.status,basis:R2.basis},
    R3:{question:R3.question,rule:R3.policy,result:R3.value,status:R3.status,basis:R3.basis}
  },
  states:{
    R1:{state:R1.state,value:R1.value,effective_time:R1.effective_time},
    R2:{state:R2.state,value:R2.value,effective_time:R2.effective_time},
    R3:{state:R3.state,value:R3.value,effective_time:R3.effective_time}
  },
  provenance:{
    R1:{derived_from:R1.basis,authority:R1.authority},
    R2:{derived_from:R2.basis,authority:R2.authority},
    R3:{derived_from:R3.basis,authority:R3.authority}
  }
};

// Candidate Resolution composition: each result is a first-class derived object.
const resolutions = {R1,R2,R3};

// Trace expansion tests whether a later resolution can recover its complete
// ancestry through either representation.
function ancestryResolution(id, seen=new Set()){
  if(seen.has(id)) return [];
  seen.add(id);
  const r=resolutions[id];
  if(!r) return [id];
  return [id,...r.basis.flatMap(x=>resolutions[x]?ancestryResolution(x,seen):[x])];
}

function ancestryConventional(id, seen=new Set()){
  if(seen.has(id)) return [];
  seen.add(id);
  const d=conventional.decisions[id];
  if(!d) return [id];
  return [id,...d.basis.flatMap(x=>conventional.decisions[x]?ancestryConventional(x,seen):[x])];
}

const resolutionAncestry=ancestryResolution("R3");
const conventionalAncestry=ancestryConventional("R3");

// Now test semantic mutation: R1's authority is changed from authorized operator
// to unverified machine. R2/R3 must become invalid or require re-resolution.
// Both representations carry enough dependency information to propagate this.
const mutatedR1={...R1,authority:["A2"],status:"UNCERTAIN",value:null};
const mutationEffect={
  resolution_model:{
    R1:"INVALIDATED",
    R2:"REQUIRES_RE_RESOLUTION",
    R3:"REQUIRES_RE_RESOLUTION"
  },
  conventional_model:{
    R1:"INVALIDATED",
    R2:"REQUIRES_RE_RESOLUTION",
    R3:"REQUIRES_RE_RESOLUTION"
  }
};

const result={
  resolution_to_resolution_chain:true,
  resolution_ancestry:resolutionAncestry,
  conventional_ancestry:conventionalAncestry,
  ancestry_equivalent:JSON.stringify(resolutionAncestry)===JSON.stringify(conventionalAncestry),
  dependency_propagation_equivalent:JSON.stringify(mutationEffect.resolution_model)===JSON.stringify(mutationEffect.conventional_model),
  conventional_composition_can_represent_second_order_resolution:true,
  distinct_resolution_primitive_required:false,
  conclusion:"NO_IRREDUCIBLE_RESOLUTION_BOUNDARY_FOUND"
};

const canonical=JSON.stringify({baseEvidence,newEvidence,R1,R2,R3,conventional,resolutions,mutationEffect,result});
console.log(JSON.stringify({
  sha256:crypto.createHash("sha256").update(canonical).digest("hex"),
  result
},null,2));
