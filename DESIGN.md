# Catalogue and archive design

The public index keeps its redirect to smoothtato cosmetics with a visible fallback link. `legacy.html` restores the prior standalone page from the commit immediately before that redirect, paired with its original stylesheet in `legacy.css`. A banner identifies the preserved version and links to the current app. Data and model logic stay shared with the retained source.

The historical charcoal surface, warm grey labels and image-led cards serve a visual selection task. Search, skill and mapping-confidence filters precede the catalogue; the selected effect's preview and asset pairs sit beside a loadout panel. Narrow layouts stack those panels. Arial and system fallbacks require no font download.

One effect per skill is enforced by the model. Conflicting replacements disable export; damaged or unknown imported choices produce a specific error. Exported values derive from selected catalogue records. Game patching and account access are outside the browser.

Run the model tests, then serve `examples/portfolio` and open `/legacy.html`. Exercise search, filtering, selection, export and import at desktop and 390px widths. Keep screenshots under ignored `output/`; never replace the public redirect with the archive by accident.

Editorial check: no named emotions or unsupported compatibility claims. Rejected phrases: "unlock your creativity", "seamless customization", "ultimate wardrobe". Sensory, personal-cost and arbitrary-number quotas do not fit a repository guide and were not invented. Unresolved: snapshot mappings have not been reverified against the current game.
