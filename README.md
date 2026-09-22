# mtxtato

Matches skills with compatible cosmetic effects and keeps the swaps organised.

<!-- working-example:start -->
## Try it in a minute

**[Live example](https://lolstar123.github.io/mtxtato-catalogue/)** · [Example code](examples/portfolio/model.mjs) · [Run locally](examples/portfolio/README.md) · [Atul's website](https://atul-kanodia-fieldnotes.atulswaggalicious.chatgpt.site)

Choose a skill and catalogue entry; inspect validated swap pairs or an incompatibility result.

<img src="examples/portfolio/preview.png" alt="mtxtato example inputs and calculated output" width="760">

<!-- working-example:end -->

## The project

Browse the effect catalogue, match an effect to its base skill and build the asset replacement plan. Compatibility checks keep a cosmetic selection tied to the skill it belongs to.

Same skill. A completely different wardrobe.

## Find your way around

| Path | What is here |
| --- | --- |
| [examples/portfolio](examples/portfolio) | Runnable browser example and fixtures |
| [model.mjs](examples/portfolio/model.mjs) | Actual calculation or workflow |
| [model.test.mjs](examples/portfolio/model.test.mjs) | Reproducible checks and edge cases |
| [PROVENANCE.md](PROVENANCE.md) | How this example relates to the full project |
| [AGENTS.md](AGENTS.md) | Instructions for extending the example |

## Quick start

```sh
python -m http.server 8000 --directory examples/portfolio
node --test examples/portfolio/model.test.mjs
```

Open http://localhost:8000. No dependencies, accounts or API keys needed.

## What is included

Catalogue metadata and a dry-run planner. No game bundles or paid cosmetic assets are distributed.
