// catalogue.json is extracted from the existing application at release time.
export const defaults = {
  skill: "ancestral_call",
  effect: "celestial_ancestral_call_effect",
  catalogue: [],
};
export const controls = [
  { key: "skill", label: "Base skill ID", type: "text" },
  { key: "effect", label: "Effect catalogue key", type: "text" },
];
export function plan(catalogue, skill, effect) {
  const entry = catalogue.find((r) => r.Key === effect);
  if (!entry)
    return {
      valid: false,
      reason: "Effect not in this catalogue excerpt.",
      pairs: [],
    };
  if (entry.Skill !== skill)
    return {
      valid: false,
      reason: `This effect belongs to ${entry.SkillDisplay}, not ${skill}.`,
      pairs: [],
    };
  if (!entry.Pairs.length || entry.Pairs.some((p) => !p.Base || !p.Mtx))
    return { valid: false, reason: "Incomplete asset mapping.", pairs: [] };
  return {
    valid: true,
    reason: "Skill matches; every asset pair is complete.",
    pairs: entry.Pairs,
    name: entry.SkinName,
  };
}
export function run(i) {
  const r = plan(i.catalogue, i.skill, i.effect);
  return {
    summary: r.valid ? r.name : "Selection needs changing",
    metrics: {
      compatible: r.valid ? "yes" : "no",
      "mapped assets": r.pairs.length,
      "catalogue entries": i.catalogue.length,
    },
    columns: ["base asset", "replacement asset"],
    rows: r.pairs.map((p) => [p.Base, p.Mtx]),
    steps: [
      "Choose a base skill",
      "Look up its cosmetic catalogue entry",
      r.reason,
      "Export the validated replacement plan",
    ],
    artifact: r,
    extra: i.catalogue.map((r) => ({
      skill: r.Skill,
      effect: r.Key,
      name: r.SkinName,
    })),
  };
}
