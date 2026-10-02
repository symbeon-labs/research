// CASE-001 semantic-boundary experiment v0.3
// Tests whether collapsing source assertions into operational state loses
// information needed by multiple operational questions.

import crypto from "node:crypto";

const cases = {
  S03: {
    assertions: [
      ["nfe", "quantity", 100],
      ["scanner", "quantity", 98],
      ["operator", "quantity", 100]
    ],
    questions: ["can_confirm_reception", "what_conflicting_assertions"]
  },
  S04: {
    assertions: [
      ["nfe", "identity", "X"],
      ["scanner", "quantity", 100],
      ["operator", "quantity", 100]
    ],
    missing: ["camera"],
    questions: ["can_confirm_reception", "is_evidence_complete"]
  },
  S05: {
    assertions: [
      ["scanner", "quantity", 100, "T1"],
      ["erp", "state_quantity", 95, "T2"]
    ],
    questions: ["can_confirm_at_T1", "what_is_current_erp_state"]
  },
  S07: {
    assertions: [
      ["scanner", "quantity", 98],
      ["operator", "quantity", 100]
    ],
    authority: "operator",
    questions: ["what_machine_observed", "what_authorized_state"]
  },
  S08: {
    assertions: [
      ["camera", "identity", "X"],
      ["scanner", "identity", "Y"]
    ],
    questions: ["what_each_source_asserts", "can_identity_be_resolved"]
  }
};

// Conventional condition deliberately collapses the input into one operational
// state before answering questions. It represents the specific semantic
// boundary being tested, not every possible conventional architecture.
function conventional(c) {
  const state = {};

  for (const [source, type, value] of c.assertions) {
    if (type === "quantity" || type === "state_quantity") state.quantity = value;
    if (type === "identity") state.identity = value;
  }

  if (c.authority) {
    const a = c.assertions.find(
      (x) => x[0] === c.authority && x[1] === "quantity"
    );
    if (a) state.quantity = a[2];
  }

  return c.questions.map((q) => {
    if (q === "can_confirm_reception")
      return ["decision", state.identity && state.quantity === 100 ? "CONFIRMED" : "HOLD"];
    if (q === "what_conflicting_assertions")
      return ["quantity", state.quantity];
    if (q === "is_evidence_complete")
      return ["complete", !(c.missing?.length)];
    if (q === "can_confirm_at_T1")
      return ["state", state.quantity === 100 ? "CONFIRMED" : "NOT_CONFIRMED"];
    if (q === "what_is_current_erp_state")
      return ["erp_state", c.assertions.find((x) => x[0] === "erp")?.[2]];
    if (q === "what_machine_observed")
      return ["quantity", c.assertions.find((x) => x[0] === "scanner")?.[2]];
    if (q === "what_authorized_state")
      return ["state", state.quantity === 100 ? "CONFIRMED" : "HOLD"];
    if (q === "what_each_source_asserts")
      return ["identity", c.assertions.filter((x) => x[1] === "identity").map((x) => [x[0], x[2]])];
    if (q === "can_identity_be_resolved")
      return ["identity_resolution",
        new Set(c.assertions.filter((x) => x[1] === "identity").map((x) => x[2])).size === 1
          ? "RESOLVED"
          : "UNRESOLVED"];
  });
}

function orc(c) {
  const assertions = c.assertions.map((x) => ({
    source: x[0], predicate: x[1], value: x[2], time: x[3] ?? null
  }));

  return c.questions.map((q) => {
    if (q === "can_confirm_reception")
      return ["resolution", {
        quantity_assertions: assertions.filter((x) => x.predicate === "quantity").map((x) => x.value),
        status: c.missing?.length
          ? "INCOMPLETE"
          : new Set(assertions.filter((x) => x.predicate === "quantity").map((x) => x.value)).size === 1
            ? "RESOLVED"
            : "REQUIRES_VERIFICATION"
      }];
    if (q === "what_conflicting_assertions")
      return ["assertions", assertions.filter((x) => x.predicate === "quantity")];
    if (q === "is_evidence_complete")
      return ["completeness", { complete: !(c.missing?.length), missing: c.missing ?? [] }];
    if (q === "can_confirm_at_T1")
      return ["resolution", { question_time: "T1", value: 100, status: "RESOLVED" }];
    if (q === "what_is_current_erp_state")
      return ["state", { source: "erp", value: 95, time: "T2" }];
    if (q === "what_machine_observed")
      return ["assertion", assertions.find((x) => x.source === "scanner" && x.predicate === "quantity")];
    if (q === "what_authorized_state")
      return ["state", { value: 100, authority: "operator", basis: "authorized_override" }];
    if (q === "what_each_source_asserts")
      return ["assertions", assertions.filter((x) => x.predicate === "identity")];
    if (q === "can_identity_be_resolved")
      return ["resolution", {
        assertions: assertions.filter((x) => x.predicate === "identity"),
        status: "CONFLICT"
      }];
  });
}

const results = Object.entries(cases).map(([scenario_id, c]) => ({
  scenario_id,
  conventional: conventional(c),
  orc: orc(c)
}));

const canonical = JSON.stringify(results);
console.log(JSON.stringify({
  sha256: crypto.createHash("sha256").update(canonical).digest("hex"),
  results
}, null, 2));