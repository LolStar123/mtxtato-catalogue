# mtxtato: working example

Choose a skill and catalogue entry; inspect validated swap pairs or an incompatibility result.

**[Open the demo](https://lolstar123.github.io/mtxtato-catalogue/)** · [Calculation / workflow code](model.mjs) · [Checks](model.test.mjs)

![Example output](preview.png)

## Run it

From the repository root, with Python 3 and Node.js 22:

```sh
python -m http.server 8000 --directory examples/portfolio
```

Open http://localhost:8000. Change an input, or edit the JSON fixture, then export the computed result as JSON or CSV.

```sh
node --test examples/portfolio/model.test.mjs
```

## What it does

Browse the effect catalogue, match an effect to its base skill and build the asset replacement plan. Compatibility checks keep a cosmetic selection tied to the skill it belongs to.

## Scope and source

Catalogue metadata and a dry-run planner. No game bundles or paid cosmetic assets are distributed.

smoothtato-dev/assets/skin_catalog.json. The included catalogue is a small metadata excerpt.

`model.mjs` is the small public implementation. `app.mjs` connects its inputs and outputs to the browser. No package install or network key is needed to run the example. GitHub Pages runs the same files after the checks pass.
