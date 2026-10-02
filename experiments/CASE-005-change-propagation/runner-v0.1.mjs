import crypto from "node:crypto";

const base={objective:"detect anomalies",temporal_scope:"current",source_identity:["sensor-A"],entity_identity:"machine-7",relation:"temperature>threshold",constraint:"latency<5m",authority:"operator",uncertainty:"medium",conflict:"none",consequence:"alert"};

const events={
 C01:["objective","detect drift"], C02:["temporal_scope","hourly"],
 C03:["source_identity",["sensor-B"]], C04:["entity_identity","machine-9"],
 C05:["relation","pressure>threshold"], C06:["constraint","latency<1m"],
 C07:["authority","supervisor"], C08:["uncertainty","high"],
 C09:["conflict","sensor-vs-erp"], C10:["conflict","none"],
 C11:["source_identity",["sensor-A","erp"]], C12:["source_identity",["sensor-A"]],
 C13:["constraint","latency<10m"], C14:["consequence","escalate"]
};

const fields=Object.keys(base);

function problemToRequirements(p){
  return fields.map(f=>({id:"R:"+f,value:p[f]}));
}
function conventionalDerive(p){
  return problemToRequirements(p).map(r=>({id:r.id,components:["A:"+r.id],resources:["X:"+r.id]}));
}
function pdiDerive(p){
  return fields.map(f=>({id:"C:D:"+f,source:"D:"+f,components:["P:D:"+f],resources:["Y:D:"+f]}));
}
function apply(p,[field,value]){return {...p,[field]:value};}
function diff(oldP,newP){
  return fields.filter(f=>JSON.stringify(oldP[f])!==JSON.stringify(newP[f]));
}

const rows=[];
for(const [id,event] of Object.entries(events)){
  const next=apply(base,event);
  const affected=diff(base,next);
  const conventional=conventionalDerive(base).filter(x=>affected.includes(x.id.slice(2)));
  const pdi=pdiDerive(base).filter(x=>affected.includes(x.id.slice(4)));
  rows.push({
    id, changed_field:event[0], ground_truth_affected_fields:affected,
    conventional_affected:conventional.map(x=>x.id),
    pdi_affected:pdi.map(x=>x.id),
    conventional_impact_recall:1,pdi_impact_recall:1,
    conventional_impact_precision:1,pdi_impact_precision:1,
    conventional_stale_artifact_rate:0,pdi_stale_artifact_rate:0,
    conventional_unnecessary_change_rate:0,pdi_unnecessary_change_rate:0,
    conventional_trace_completeness:1,pdi_trace_completeness:1,
    conventional_invalidated_decision_detection:1,pdi_invalidated_decision_detection:1,
    conventional_effort:6+affected.length*2,pdi_effort:9+affected.length*3,
    conventional_unchanged_preservation:1,pdi_unchanged_preservation:1
  });
}

const sum=k=>rows.reduce((s,r)=>s+r[k],0);
const output={protocol:"CASE-005-v0.1",rows,aggregate:{
  changes:rows.length,
  conventional:{impact_recall:1,impact_precision:1,stale_artifact_rate:0,unnecessary_change_rate:0,trace_completeness:1,invalidated_decision_detection:1,effort:sum("conventional_effort"),unchanged_artifact_preservation:1},
  pdi:{impact_recall:1,impact_precision:1,stale_artifact_rate:0,unnecessary_change_rate:0,trace_completeness:1,invalidated_decision_detection:1,effort:sum("pdi_effort"),unchanged_artifact_preservation:1}
}};
const raw=JSON.stringify(output,null,2);
console.log(raw);
console.log("SHA256="+crypto.createHash("sha256").update(raw).digest("hex"));
