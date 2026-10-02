// CASE-001 comparative benchmark runner v0.1
// ORC condition mirrors the current reference implementation semantics for
// resolveObservation + resolveQuantity.
// Baseline is a capability-equivalent conventional composition proxy:
// identifier registry/crosswalk + provenance/context + explicit receiving rules.

const E = (entity_id, identifiers) => ({
  entity_id,
  identifiers: identifiers.map(([scheme, value]) => ({ scheme, value }))
});

const scenarios = {
  S01: {
    entities: [E("P1", [["ean", "789000000001"]])],
    observation: [["ean", "789000000001"]],
    quantities: [100, 100, 100],
    missing: [],
    temporal: false,
    override: false
  },
  S02: {
    entities: [E("P1", [["erp", "ERP-P042"]])],
    observation: [["ean", "789000000001"]],
    quantities: [100],
    crosswalk: [["789000000001", "ERP-P042"]],
    missing: [],
    temporal: false,
    override: false
  },
  S03: {
    entities: [E("P1", [["ean", "789000000001"]])],
    observation: [["ean", "789000000001"]],
    quantities: [100, 98, 100],
    missing: [],
    temporal: false,
    override: false
  },
  S04: {
    entities: [E("P1", [["ean", "789000000001"]])],
    observation: [["ean", "789000000001"]],
    quantities: [100, 100, 100],
    missing: ["camera/OCR"],
    temporal: false,
    override: false
  },
  S05: {
    entities: [E("P1", [["ean", "789000000001"]])],
    observation: [["ean", "789000000001"]],
    quantities: [100],
    missing: [],
    temporal: true,
    override: false
  },
  S06: {
    entities: [
      E("P1", [["ean", "789000000001"]]),
      E("P2", [["ean", "789000000001"]])
    ],
    observation: [["ean", "789000000001"]],
    quantities: [100],
    missing: [],
    temporal: false,
    override: false
  },
  S07: {
    entities: [E("P1", [["ean", "789000000001"]])],
    observation: [["ean", "789000000001"]],
    quantities: [98, 100],
    missing: [],
    temporal: false,
    override: true
  },
  S08: {
    entities: [
      E("P1", [["ean", "789000000001"]]),
      E("P2", [["ean", "789000000002"]])
    ],
    observation: [
      ["ean", "789000000001"],
      ["ean", "789000000002"]
    ],
    quantities: [100],
    missing: [],
    temporal: false,
    override: false
  }
};

// Exact semantic shape of ORC resolveObservation from the current reference
// implementation, expressed locally so the benchmark is executable.
function orcResolveObservation(observation, entities) {
  const candidates = [];

  for (const entity of entities) {
    for (const observedIdentifier of observation.identifiers ?? []) {
      const match = entity.identifiers.find(
        (identifier) =>
          identifier.scheme === observedIdentifier.scheme &&
          identifier.value === String(observedIdentifier.value).trim()
      );

      if (match) {
        candidates.push({
          entity,
          matched_identifier: match,
          observed_identifier: observedIdentifier
        });
      }
    }
  }

  const uniqueEntities = [
    ...new Map(
      candidates.map((candidate) => [candidate.entity.entity_id, candidate])
    ).values()
  ];

  if (uniqueEntities.length === 1) {
    return {
      status: "RESOLVED",
      entity_id: uniqueEntities[0].entity.entity_id,
      candidates: [uniqueEntities[0].entity.entity_id]
    };
  }

  if (uniqueEntities.length > 1) {
    return {
      status: "CONFLICT",
      entity_id: null,
      candidates: uniqueEntities.map((candidate) => candidate.entity.entity_id)
    };
  }

  return {
    status: "UNCERTAIN",
    entity_id: null,
    candidates: []
  };
}

// Exact semantic rule of ORC resolveQuantity from the current reference.
function orcResolveQuantity(quantities) {
  const values = [...new Set(quantities)];
  if (values.length === 0) return "UNCERTAIN";
  if (values.length === 1) return "RESOLVED";
  return "REQUIRES_VERIFICATION";
}

function runORC(s) {
  const identity = orcResolveObservation(
    { identifiers: s.observation.map(([scheme, value]) => ({ scheme, value })) },
    s.entities
  );

  const quantity = orcResolveQuantity(s.quantities);

  const status =
    identity.status === "CONFLICT"
      ? "CONFLICT"
      : identity.status === "UNCERTAIN"
        ? "UNCERTAIN"
        : quantity;

  return {
    identity: identity.status,
    quantity,
    status,
    uncertainty: status !== "RESOLVED",
    intervention: s.override,
    temporal_semantics: s.temporal ? "NOT_APPLIED" : "N/A",
    completeness: s.missing.length ? "NOT_APPLIED" : "N/A",
    traceability: true
  };
}

// This is intentionally NOT presented as a full implementation of W3C PROV,
// NGSI-LD, EPCIS or RATS. It is the executable proxy for the baseline
// composition defined in BASELINE-v0.1.
function runBaseline(s) {
  let identity = "NO_MATCH";

  if (s.crosswalk) {
    const linked = s.crosswalk.some(([sourceId, targetId]) =>
      s.observation.some(([, value]) => value === sourceId) &&
      s.entities.some((entity) =>
        entity.identifiers.some((identifier) => identifier.value === targetId)
      )
    );
    if (linked) identity = "MATCH_VIA_CROSSWALK";
  } else {
    const candidates = s.entities.filter((entity) =>
      s.observation.some(([scheme, value]) =>
        entity.identifiers.some(
          (identifier) =>
            identifier.scheme === scheme &&
            identifier.value === String(value).trim()
        )
      )
    );
    identity =
      candidates.length === 1
        ? "MATCH"
        : candidates.length > 1
          ? "AMBIGUOUS"
          : "NO_MATCH";
  }

  let status = identity.includes("MATCH") ? "CONFIRMED" : "HOLD";

  if (s.quantities.length > 1 && new Set(s.quantities).size > 1) {
    status = s.override ? "CONFIRMED_MANUAL" : "HOLD_CONFLICT";
  }

  if (s.missing.length) status = "CONFIRMED_WITH_MISSING_SOURCE";
  if (s.temporal) status = "CONFIRMED_WITH_TEMPORAL_CONTEXT";
  if (identity === "NO_MATCH" || identity === "AMBIGUOUS") status = "HOLD";

  return {
    identity,
    status,
    uncertainty: status.startsWith("HOLD"),
    intervention: s.override,
    temporal_semantics: s.temporal ? "PRESERVED" : "N/A",
    completeness: s.missing.length ? "EXPLICIT" : "N/A",
    traceability: true
  };
}

const output = Object.entries(scenarios).map(([scenario_id, scenario]) => ({
  scenario_id,
  baseline: runBaseline(scenario),
  orc: runORC(scenario)
}));

console.log(JSON.stringify(output, null, 2));
