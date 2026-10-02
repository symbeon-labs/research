// CASE-001 preserving conventional baseline v0.4
// Falsification test for the semantic-boundary hypothesis.
// The baseline preserves assertions, evidence/provenance, context, time and
// authority explicitly, but does not introduce an ORC boundary.

import crypto from "node:crypto";

const cases = {
  S03: {
    assertions:[
      {source:"nfe",predicate:"quantity",value:100,time:"T0"},
      {source:"scanner",predicate:"quantity",value:98,time:"T1"},
      {source:"operator",predicate:"quantity",value:100,time:"T2"}
    ],
    questions:["can_confirm_reception","what_conflicting_assertions"]
  },
  S04: {
    assertions:[
      {source:"nfe",predicate:"identity",value:"X",time:"T0"},
      {source:"scanner",predicate:"quantity",value:100,time:"T1"},
      {source:"operator",predicate:"quantity",value:100,time:"T2"}
    ],
    missing:["camera"],
    questions:["can_confirm_reception","is_evidence_complete"]
  },
  S05: {
    assertions:[
      {source:"scanner",predicate:"quantity",value:100,time:"T1"},
      {source:"erp",predicate:"state_quantity",value:95,time:"T2"}
    ],
    questions:["can_confirm_at_T1","what_is_current_erp_state"]
  },
  S07: {
    assertions:[
      {source:"scanner",predicate:"quantity",value:98,time:"T1"},
      {source:"operator",predicate:"quantity",value:100,time:"T2"}
    ],
    authority:{source:"operator",reason:"authorized_override"},
    questions:["what_machine_observed","what_authorized_state"]
  },
  S08: {
    assertions:[
      {source:"camera",predicate:"identity",value:"X",time:"T1"},
      {source:"scanner",predicate:"identity",value:"Y",time:"T2"}
    ],
    questions:["what_each_source_asserts","can_identity_be_resolved"]
  }
};

function answer(c,q){
  if(q==="can_confirm_reception"){
    const qs=c.assertions.filter(a=>a.predicate==="quantity").map(a=>a.value);
    return ["decision", c.missing?.length ? "INCOMPLETE" :
      new Set(qs).size===1 ? "CONFIRMED" : "HOLD_CONFLICT"];
  }
  if(q==="what_conflicting_assertions")
    return ["assertions",c.assertions.filter(a=>a.predicate==="quantity")];
  if(q==="is_evidence_complete")
    return ["completeness",{complete:!(c.missing?.length),missing:c.missing??[]}];
  if(q==="can_confirm_at_T1"){
    const a=c.assertions.find(a=>a.source==="scanner"&&a.time==="T1");
    return ["decision",{value:a?.value,status:a?.value===100?"CONFIRMED":"NOT_CONFIRMED",question_time:"T1"}];
  }
  if(q==="what_is_current_erp_state"){
    const a=c.assertions.find(a=>a.source==="erp");
    return ["state",{value:a?.value,time:a?.time,source:a?.source}];
  }
  if(q==="what_machine_observed"){
    const a=c.assertions.find(a=>a.source==="scanner"&&a.predicate==="quantity");
    return ["assertion",a];
  }
  if(q==="what_authorized_state"){
    const a=c.assertions.find(a=>a.source===c.authority?.source);
    return ["state",{value:a?.value,authority:c.authority?.source,basis:c.authority?.reason}];
  }
  if(q==="what_each_source_asserts")
    return ["assertions",c.assertions.filter(a=>a.predicate==="identity")];
  if(q==="can_identity_be_resolved"){
    const vals=c.assertions.filter(a=>a.predicate==="identity").map(a=>a.value);
    return ["identity_resolution",{status:new Set(vals).size===1?"RESOLVED":"CONFLICT",assertions:c.assertions.filter(a=>a.predicate==="identity")}];
  }
}

const results=Object.entries(cases).map(([scenario_id,c])=>({
 scenario_id,
 baseline:{
   representation:"ASSERTION+EVIDENCE/PROVENANCE+CONTEXT+STATE",
   assertions:c.assertions,
   evidence:{sources:[...new Set(c.assertions.map(a=>a.source))],missing:c.missing??[]},
   context:{authority:c.authority??null},
   answers:c.questions.map(q=>[q,answer(c,q)])
 }
}));

const canonical=JSON.stringify(results);
console.log(JSON.stringify({
 sha256:crypto.createHash("sha256").update(canonical).digest("hex"),
 results
},null,2));