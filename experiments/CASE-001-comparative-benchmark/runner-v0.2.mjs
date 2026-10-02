// CASE-001 comparative benchmark runner v0.2
// Controlled-capability rerun.
// Both conditions receive the same explicit mechanisms for:
// provenance, completeness, temporal semantics, authority, and identifier crosswalk.
// The experiment tests whether an explicit ORC boundary changes the operational
// result when those capabilities are held constant.

import crypto from "node:crypto";

const E=(id,ids)=>({entity_id:id,identifiers:ids.map(([scheme,value])=>({scheme,value}))});

const scenarios={
 S01:{entities:[E("P1",[["ean","789000000001"]])],assertions:[{source:"scanner",id:["ean","789000000001"],q:100,t:100}],expected:100,completeness:["scanner"],authority:null},
 S02:{entities:[E("P1",[["erp","ERP-P042"]])],assertions:[{source:"scanner",id:["ean","789000000001"],q:100,t:100}],crosswalk:[["ean","789000000001","erp","ERP-P042"]],expected:100,completeness:["scanner"],authority:null},
 S03:{entities:[E("P1",[["ean","789000000001"]])],assertions:[{source:"scanner",id:["ean","789000000001"],q:100,t:100},{source:"operator",id:["ean","789000000001"],q:98,t:101},{source:"erp",id:["ean","789000000001"],q:100,t:102}],expected:100,completeness:["scanner","operator","erp"],authority:null},
 S04:{entities:[E("P1",[["ean","789000000001"]])],assertions:[{source:"scanner",id:["ean","789000000001"],q:100,t:100}],expected:100,completeness:["scanner","camera/OCR"],missing:["camera/OCR"],authority:null},
 S05:{entities:[E("P1",[["ean","789000000001"]])],assertions:[{source:"scanner",id:["ean","789000000001"],q:100,t:100},{source:"erp",id:["ean","789000000001"],q:95,t:90}],expected:100,completeness:["scanner","erp"],temporal_policy:"latest_authoritative",authority:{source:"scanner",rank:2}},
 S06:{entities:[E("P1",[["ean","789000000001"]]),E("P2",[["ean","789000000001"]])],assertions:[{source:"scanner",id:["ean","789000000001"],q:100,t:100}],expected:100,completeness:["scanner"],authority:null},
 S07:{entities:[E("P1",[["ean","789000000001"]])],assertions:[{source:"scanner",id:["ean","789000000001"],q:98,t:100},{source:"operator",id:["ean","789000000001"],q:100,t:101}],expected:100,completeness:["scanner","operator"],authority:{source:"operator",rank:2,reason:"authorized_override"}},
 S08:{entities:[E("P1",[["ean","789000000001"]]),E("P2",[["ean","789000000002"]])],assertions:[{source:"camera",id:["ean","789000000001"],q:100,t:100},{source:"scanner",id:["ean","789000000002"],q:100,t:101}],expected:100,completeness:["camera","scanner"],authority:null}
};

function candidates(s,a){return s.entities.filter(e=>e.identifiers.some(i=>i.scheme===a.id[0]&&i.value===String(a.id[1]).trim()));}
function resolveIdentity(s){
 const ids=new Set();
 for(const a of s.assertions) for(const e of candidates(s,a)) ids.add(e.entity_id);
 if(ids.size===1)return {status:"RESOLVED",entities:[...ids]};
 if(ids.size>1)return {status:"CONFLICT",entities:[...ids]};
 if(s.crosswalk){
   const linked=new Set();
   for(const a of s.assertions) for(const [,sv,ts,tv] of s.crosswalk)
     if(a.id[0]==="ean"&&a.id[1]===sv)
       for(const e of s.entities) if(e.identifiers.some(i=>i.scheme===ts&&i.value===tv)) linked.add(e.entity_id);
   if(linked.size===1)return {status:"RESOLVED",entities:[...linked],via:"crosswalk"};
 }
 return {status:"UNCERTAIN",entities:[]};
}
function resolveQuantity(s){
 const usable=s.assertions.filter(a=>!(s.missing??[]).includes(a.source));
 if(!usable.length)return {status:"UNCERTAIN"};
 let selected=usable;
 if(s.authority){
   selected=usable.filter(a=>a.source===s.authority.source);
   if(!selected.length)selected=usable;
 }
 if(s.temporal_policy==="latest_authoritative")selected=[...selected].sort((a,b)=>b.t-a.t).slice(0,1);
 const values=[...new Set(selected.map(a=>a.q))];
 if(values.length===1)return {status:"RESOLVED",value:values[0]};
 return {status:"REQUIRES_VERIFICATION",values};
}
function evaluate(s,condition){
 const identity=resolveIdentity(s);
 const quantity=resolveQuantity(s);
 const complete=(s.missing??[]).length===0;
 const state=identity.status==="CONFLICT"?"CONFLICT":identity.status==="UNCERTAIN"?"UNCERTAIN":quantity.status;
 return {
  condition,identity,quantity,
  state:!complete&&state==="RESOLVED"?"INCOMPLETE":state,
  completeness:complete?"COMPLETE":"INCOMPLETE",
  temporal_semantics:s.temporal_policy??"EXPLICIT_CONTEXT",
  authority:s.authority??null,
  provenance:s.assertions.map(a=>a.source),
  uncertainty:state!=="RESOLVED"||!complete
 };
}
const results=Object.entries(scenarios).map(([scenario_id,s])=>({
 scenario_id,
 baseline:evaluate(s,"baseline-v0.2"),
 orc:evaluate(s,"orc-v0.2")
}));
const canonical=JSON.stringify(results);
console.log(JSON.stringify({sha256:crypto.createHash("sha256").update(canonical).digest("hex"),results},null,2));