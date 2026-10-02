const scenarios = [
 {id:"S01", distinctions:["objective","temporal_scope","source_identity","authority","conflict","entity_identity","relation","constraint","uncertainty","consequence"], reqs:["acceptance_decision","physical_quantity","evidence_basis","authority_check","manual_review","temporal_validity"]},
 {id:"S02", distinctions:["objective","temporal_scope","source_identity","entity_identity","relation","constraint","authority","uncertainty","conflict","consequence"], reqs:["identity_determination","evidence_basis","uncertainty_handling","conflict_handling","downstream_action_constraint"]},
 {id:"S03", distinctions:["objective","temporal_scope","source_identity","entity_identity","relation","constraint","authority","uncertainty","conflict","consequence"], reqs:["intervention_permission","applicable_policy","authorized_actor","review_condition","action_constraint"]},
 {id:"S04", distinctions:["objective","temporal_scope","source_identity","entity_identity","relation","constraint","authority","uncertainty","conflict","consequence"], reqs:["causal_explanation","evidence_basis","transformation_trace","policy_authority_basis","reproducibility"]}
];

const pdiMap = {
 objective:["acceptance_decision","intervention_permission"],
 temporal_scope:["temporal_validity","applicable_policy","reproducibility"],
 source_identity:["evidence_basis","causal_explanation","physical_quantity","transformation_trace"],
 entity_identity:["identity_determination"],
 relation:["identity_determination"],
 constraint:["applicable_policy","action_constraint","downstream_action_constraint"],
 authority:["authority_check","authorized_actor","policy_authority_basis"],
 uncertainty:["uncertainty_handling","review_condition"],
 conflict:["conflict_handling","manual_review"],
 consequence:["action_constraint"]
};

const baselineMap = {
 objective:["acceptance_decision","intervention_permission"],
 temporal_scope:["temporal_validity","applicable_policy","reproducibility"],
 source_identity:["evidence_basis","causal_explanation"],
 entity_identity:["identity_determination"],
 relation:["identity_determination"],
 constraint:["applicable_policy","action_constraint","downstream_action_constraint"],
 authority:["authority_check","authorized_actor","policy_authority_basis"],
 uncertainty:["uncertainty_handling","review_condition"],
 conflict:["conflict_handling","manual_review"],
 consequence:["action_constraint"]
};

function derive(map,s){
 const reqs=[...new Set(s.distinctions.flatMap(d=>map[d]||[]))].filter(x=>s.reqs.includes(x));
 return reqs;
}
function components(reqs){return [...new Set(reqs.map(r=>"component:"+r))];}
function score(s,kind,map){
 const derived=derive(map,s);
 const missing=s.reqs.filter(r=>!derived.includes(r));
 const covered=s.reqs.length-missing.length;
 const comps=components(derived);
 const traces=derived.length;
 const effort=kind==="PDI" ? s.distinctions.length+derived.length+comps.length : s.distinctions.length+derived.length;
 return {scenario:s.id,kind,required:s.reqs.length,covered,coverage:covered/s.reqs.length,missing,components:comps.length,trace_links:traces,effort};
}
const rows=scenarios.flatMap(s=>[score(s,"Baseline",baselineMap),score(s,"PDI",pdiMap)]);
const summary=["Baseline","PDI"].map(kind=>{
 const x=rows.filter(r=>r.kind===kind);
 return {kind,scenarios:x.length,mean_coverage:x.reduce((a,r)=>a+r.coverage,0)/x.length,total_missing:x.reduce((a,r)=>a+r.missing.length,0),total_components:x.reduce((a,r)=>a+r.components,0),total_trace_links:x.reduce((a,r)=>a+r.trace_links,0),total_effort:x.reduce((a,r)=>a+r.effort,0)};
});
console.log(JSON.stringify({rows,summary},null,2));
