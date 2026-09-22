# Working on mtxtato

Read PROVENANCE.md and examples/portfolio/README.md first.
Keep calculation and decision logic in model.mjs, independently runnable in Node.
Run `node --test examples/portfolio/model.test.mjs` after changes.
Keep generated fixtures labelled; never present sample outcomes as measured production results.
Preserve the project's workflow: Browse the effect catalogue, match an effect to its base skill and build the asset replacement plan. Compatibility checks keep a cosmetic selection tied to the skill it belongs to.
Add regression checks for changed decisions, including missing or invalid inputs.
Do not add credentials, user records or runtime account integrations to the demo.
