# Frontier curator — daily procedure

Frontier is a daily wall of high-school science for Aryav (13, Singapore). Montessori stance: he browses by appetite; nothing is assigned. The page never links out, so everything he reads is written here, from the sources below, and must be checked.

## Source list (closed)
NASA (nasa.gov, science.nasa.gov, APOD, Earth Observatory, JPL), NOAA / NHC, NobelPrize.org, HHMI BioInteractive, PhET, Science News Explores and Science News (Society for Science), Quanta Magazine. Singapore: NEA (nea.gov.sg, haze.gov.sg), NUS News, NTU News, A*STAR. For the Using AI lane only: PNAS, MIT (aiandeducation.mit.edu), University of Minnesota CEHD consensus report, and research reported by Science News Explores. Nothing else. No Wikipedia, no YouTube, no news aggregators.

## Vocabulary
Never use: lesson, text, textbook, practice, exercise, homework, worksheet, quiz, study, classroom, assignment, grade (as school level). Say "high school", not a grade number.

## Edition shape (`wall-draft.json`)
- `edition`, `level` ("High school"), `date` (YYYY-MM-DD), `dateLabel` ("Sun 25 Oct 2026").
- `week`: 5–6 dated items from the last 7–10 days, each pointing at a tile id.
- `tiles`: 12–16. Roughly 60% new since the last edition, 40% strong anchors carried over (keep `hot:0`, `big:0` on carry-overs). One `big:1` lead, 2–4 `hot:1`.
- Lanes (`dom`): space, earth, life, matter, mind, numbers, try, sg, usingai, gadgets.
- `gadgets` lane: new, tech-heavy consumer products he could see or use, one tile a day, two at most, only the best. Each tile explains the engineering inside (sensor sizes, data rates, materials, rules it was designed around), never a sales pitch; include what reviewers found wrong. Sources for this lane only: TIME Best Inventions (current year), IEEE Spectrum, MIT Technology Review, and the maker's official spec page for numbers; a reputable review (TechRadar, The Verge, Tom's Guide) may be cited for hands-on findings. Nothing else.
- Retire what he has opened: any tile he opened (per the monitor or Manav's report) is dropped from the next edition; the page also hides opened tiles itself once a new edition loads. Carry-overs are only tiles he has not opened.
- `usingai` lane: evidence on how a high-school student should and should not use AI, framed as findings he can test on himself, never as rules. Carry one or two of the five standing tiles (ai17, ai30, aicraft, aimit, aitry) each day, rotating; replace the lead when new peer-reviewed research lands. Always at least one `sg` tile and one `try` tile (something he can do with his eyes or hands on the page itself; no external sims).
- Each tile: `cap` (one line, a hook, under 90 chars), optional `num` + `nums` (one striking figure), `p1` (two or three sentences), `p2` (one line: why now / why here / connects to), `deep` (3–4 titled paragraphs, each 2–3 sentences), `rel` (2–3 other tile ids on this wall), `src` (credit text), `art` (an id from the ART map in index.html; reuse the closest existing one or add a new canvas function).
- Read the interests and comments log before choosing tiles (see Signals). Lean ~70% toward what he has shown appetite for, ~30% deliberately elsewhere.

## Fact check (mandatory, separate pass)
After drafting, re-open every source and confirm every number, date, name and claim in cap/num/p1/p2/deep. Any claim the source does not state is cut, not softened. Record the check in the commit message. If a source cannot be reached, the tile is dropped.

## Signals (what he likes)
The parent monitor (`monitor.html`, parent key) and the Apps Script backend hold: `frev/*` events (open, deeper, hop, clip, comment, flag, interests, lane) and `frses/*` seconds-on-page per day per device. Patterns worth reading: which lanes he opens, which tiles get "deeper", chains he follows, anything he clips or comments on, and what he types in the interests box. The report pasted by Manav supersedes guesses.

## Publish
1. Write `wall-draft.json`; bump `version.json`; commit; push. Preview: `https://manav-singhania.github.io/frontier/?draft=1`.
2. Send Manav the preview link and a 5-line summary (lead, new tiles, sg tile, what the signals said, what was cut in the check).
3. On approval (or at the agreed fallback time), copy `wall-draft.json` to `wall.json`, bump `version.json`, commit, push. Aryav's page picks it up on next open.
