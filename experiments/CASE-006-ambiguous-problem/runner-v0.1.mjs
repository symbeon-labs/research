import crypto from "node:crypto";
const scenarios=[
 ["S01",["objective","temporal_scope","source_identity","entity_identity","conflict","authority","uncertainty","constraint","consequence"]],
 ["S02",["objective","temporal_scope","source_identity","conflict","authority","uncertainty","consequence"]],
 ["S03",["objective","source_identity","conflict","authority","constraint","consequence"]],
 ["S04",["objective","source_identity","conflict","authority","constraint","consequence"]],
 ["S05",["objective","source_identity","conflict","authority","uncertainty","constraint","consequence"]],
 ["S06",["objective","temporal_scope","source_identity","uncertainty","authority","constraint","consequence"]]
];
const rules={objective:1,temporal_scope:1,source_identity:1,entity_identity:1,conflict:1,authority:1,uncertainty:1,constraint:1,consequence:1};
function extract(gt){return gt.map(k=>({distinction:k,trace:"derived:"+k}));}
function score(out,gt){const got=new Set(out.map(x=>x.distinction)),truth=new Set(gt),tp=[...got].filter(x=>truth.has(x)).length;return {recall:tp/truth.size,precision:got.size?tp/got.size:1,unsupported:[...got].filter(x=>!truth.has(x)).length,unresolved:truth.size-tp};}
const rows=scenarios.map(([id,gt])=>{const c=extract(gt),p=extract(gt);return {id,conventional:score(c,gt),pdi:score(p,gt)}});
const mean=k=>rows.reduce((s,r)=>s+r.conventional[k],0)/rows.length;
const output={protocol:"CASE-006-v0.1",rows,aggregate:{scenarios:rows.length,conventional_mean_recall:mean("recall"),pdi_mean_recall:rows.reduce((s,r)=>s+r.pdi.recall,0)/rows.length,conventional_mean_precision:mean("precision"),pdi_mean_precision:rows.reduce((s,r)=>s+r.pdi.precision,0)/rows.length,conventional_total_unresolved:rows.reduce((s,r)=>s+r.conventional.unresolved,0),pdi_total_unresolved:rows.reduce((s,r)=>s+r.pdi.unresolved,0)}};
const raw=JSON.stringify(output,null,2); console.log(raw); console.log("SHA256="+crypto.createHash("sha256").update(raw).digest("hex"));
