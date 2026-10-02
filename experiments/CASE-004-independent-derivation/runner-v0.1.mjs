import crypto from "node:crypto";

const base = [
 {id:"S01",objective:"detect anomaly",temporal_scope:"current",source_identity:"sensor-A",entity_identity:"machine-7",relation:"temperature>threshold",constraint:"latency<5m",authority:"operator",uncertainty:"medium",conflict:"none",consequence:"alert"},
 {id:"S02",objective:"verify delivery",temporal_scope:"daily",source_identity:"erp",entity_identity:"order-19",relation:"status=delivered",constraint:"preserve_audit",authority:"supervisor",uncertainty:"low",conflict:"none",consequence:"close_order"},
 {id:"S03",objective:"reconcile inventory",temporal_scope:"hourly",source_identity:"erp+scanner",entity_identity:"sku-44",relation:"count_mismatch",constraint:"trace_source",authority:"inventory_mgr",uncertainty:"medium",conflict:"scanner_vs_erp",consequence:"review"},
 {id:"S04",objective:"assess compliance",temporal_scope:"monthly",source_identity:"documents",entity_identity:"facility-2",relation:"requirement_status",constraint:"evidence_retention",authority:"compliance",uncertainty:"high",conflict:"document_gap",consequence:"escalate"},
 {id:"S05",objective:"forecast demand",temporal_scope:"next_7d",source_identity:"sales+calendar",entity_identity:"product-8",relation:"demand_signal",constraint:"explain_prediction",authority:"planner",uncertainty:"high",conflict:"signals_disagree",consequence:"plan"},
 {id:"S06",objective:"validate payment",temporal_scope:"transaction",source_identity:"gateway+erp",entity_identity:"payment-3",relation:"amount_match",constraint:"no_duplicate_charge",authority:"finance",uncertainty:"low",conflict:"gateway_vs_erp",consequence:"hold"},
 {id:"S07",objective:"monitor quality",temporal_scope:"shift",source_identity:"qa_sensor",entity_identity:"batch-12",relation:"defect_rate",constraint:"sample_traceability",authority:"qa_lead",uncertainty:"medium",conflict:"sampling_gap",consequence:"inspect"},
 {id:"S08",objective:"prioritize incidents",temporal_scope:"real_time",source_identity:"logs+operator",entity_identity:"incident-5",relation:"severity",constraint:"response<10m",authority:"on_call",uncertainty:"medium",conflict:"operator_vs_log",consequence:"dispatch"},
 {id:"S09",objective:"verify identity",temporal_scope:"session",source_identity:"idp+device",entity_identity:"user-21",relation:"identity_match",constraint:"least_privilege",authority:"security",uncertainty:"high",conflict:"signals_disagree",consequence:"deny_or_allow"},
 {id:"S10",objective:"detect fraud",temporal_scope:"transaction",source_identity:"payments+history",entity_identity:"account-9",relation:"risk_pattern",constraint:"audit_decision",authority:"risk",uncertainty:"high",conflict:"model_vs_rule",consequence:"review"},
 {id:"S11",objective:"maintain service",temporal_scope:"weekly",source_identity:"telemetry+tickets",entity_identity:"service-4",relation:"health_state",constraint:"change_window",authority:"service_owner",uncertainty:"medium",conflict:"telemetry_vs_ticket",consequence:"schedule"},
 {id:"S12",objective:"validate shipment",temporal_scope:"per_shipment",source_identity:"wms+carrier",entity_identity:"shipment-6",relation:"manifest_match",constraint:"chain_of_custody",authority:"logistics",uncertainty:"low",conflict:"carrier_vs_wms",consequence:"release"}
];

const caps = p => [
 "observe_" + p.entity_identity,
 "evaluate_" + p.relation,
 "decide_" + p.consequence,
 ...(p.conflict !== "none" ? ["reconcile_" + p.conflict] : []),
 ...(p.uncertainty !== "low" ? ["represent_" + p.uncertainty + "_uncertainty"] : [])
];

function conventionalA(p){
  const r = caps(p);
  return {requirements:r, components:r.map(x=>"component:"+x), trace:r.map(x=>[x,"component:"+x]), effort: 3+r.length};
}
function conventionalB(p){
  const requirements = [];
  requirements.push("observe_"+p.entity_identity);
  requirements.push("evaluate_"+p.relation);
  requirements.push("decide_"+p.consequence);
  if(p.conflict !== "none") requirements.push("reconcile_"+p.conflict);
  if(p.uncertainty !== "low") requirements.push("represent_"+p.uncertainty+"_uncertainty");
  const components = [];
  for (const x of requirements) components.push("component:"+x);
  return {requirements,components,trace:requirements.map(x=>[x,"component:"+x]),effort:4+requirements.length};
}

function pdiA(p){
  const representation = {
    objective:p.objective, temporal_scope:p.temporal_scope, source_identity:p.source_identity,
    entity_identity:p.entity_identity, relation:p.relation, constraint:p.constraint,
    authority:p.authority, uncertainty:p.uncertainty, conflict:p.conflict, consequence:p.consequence
  };
  const capabilities = [
    "observe_"+representation.entity_identity,
    "evaluate_"+representation.relation,
    "decide_"+representation.consequence,
    ...(representation.conflict !== "none" ? ["reconcile_"+representation.conflict] : []),
    ...(representation.uncertainty !== "low" ? ["represent_"+representation.uncertainty+"_uncertainty"] : [])
  ];
  const transformations = capabilities.map(c=>({capability:c,component:"component:"+c}));
  return {requirements:capabilities,components:transformations.map(x=>x.component),trace:transformations.map(x=>[x.capability,x.component]),effort:5+capabilities.length};
}

function pdiB(p){
  const rep = Object.fromEntries(Object.entries(p).sort(([a],[b])=>a.localeCompare(b)));
  const capabilities = [];
  capabilities.push("observe_"+rep.entity_identity);
  capabilities.push("evaluate_"+rep.relation);
  capabilities.push("decide_"+rep.consequence);
  if(rep.conflict !== "none") capabilities.push("reconcile_"+rep.conflict);
  if(rep.uncertainty !== "low") capabilities.push("represent_"+rep.uncertainty+"_uncertainty");
  const transformations = [];
  for (const capability of capabilities) transformations.push({capability,component:"component:"+capability});
  return {requirements:capabilities,components:transformations.map(x=>x.component),trace:transformations.map(x=>[x.capability,x.component]),effort:6+capabilities.length};
}

function setEq(a,b){return JSON.stringify([...a].sort())===JSON.stringify([...b].sort());}
function traceEq(a,b){return JSON.stringify(a.map(x=>x.join("->")).sort())===JSON.stringify(b.map(x=>x.join("->")).sort());}

const rows = [];
for (const p of base) {
  const a=conventionalA(p), b=conventionalB({...p});
  const c=pdiA(p), d=pdiB(JSON.parse(JSON.stringify(p)));
  rows.push({
    id:p.id,
    conventional_capability_agreement:setEq(a.requirements,b.requirements),
    conventional_architecture_agreement:setEq(a.components,b.components),
    conventional_trace_agreement:traceEq(a.trace,b.trace),
    pdi_capability_agreement:setEq(c.requirements,d.requirements),
    pdi_architecture_agreement:setEq(c.components,d.components),
    pdi_trace_agreement:traceEq(c.trace,d.trace),
    conventional_coverage:a.requirements.length,
    pdi_coverage:c.requirements.length,
    conventional_effort:a.effort+b.effort,
    pdi_effort:c.effort+d.effort
  });
}

const aggregate = {
  scenarios:rows.length,
  conventional_capability_agreement:rows.filter(r=>r.conventional_capability_agreement).length,
  pdi_capability_agreement:rows.filter(r=>r.pdi_capability_agreement).length,
  conventional_architecture_agreement:rows.filter(r=>r.conventional_architecture_agreement).length,
  pdi_architecture_agreement:rows.filter(r=>r.pdi_architecture_agreement).length,
  conventional_trace_agreement:rows.filter(r=>r.conventional_trace_agreement).length,
  pdi_trace_agreement:rows.filter(r=>r.pdi_trace_agreement).length,
  conventional_mean_coverage:rows.reduce((s,r)=>s+r.conventional_coverage,0)/rows.length,
  pdi_mean_coverage:rows.reduce((s,r)=>s+r.pdi_coverage,0)/rows.length,
  conventional_total_effort:rows.reduce((s,r)=>s+r.conventional_effort,0),
  pdi_total_effort:rows.reduce((s,r)=>s+r.pdi_effort,0)
};

const output={protocol:"CASE-004-v0.1",rows,aggregate};
const raw=JSON.stringify(output,null,2);
console.log(raw);
console.log("\nSHA256="+crypto.createHash("sha256").update(raw).digest("hex"));
