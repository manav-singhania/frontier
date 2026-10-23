# Frontier

A daily wall of high-school science for Aryav. Static site; nothing here links out of the page.

- `index.html` — the wall. Loads `wall.json` (or `wall-draft.json` with `?draft=1`).
- `wall.json` — today's edition: tiles, deep-dive layers, related hops, week ticker. Written by Claude each morning after a source check.
- `monitor.html` — parent view (parent key). Minutes per day, tiles opened, chains, his comments, interests, flags.
- `config.js` — `FR_SYNC_URL`, the shared family Apps Script endpoint. Frontier writes only under `fr/…` paths.

Sources allowed: NASA, NOAA, Nobel Foundation, HHMI BioInteractive, PhET, Science News Explores / Science News, Quanta; Singapore: NEA, NUS, NTU, A*STAR.
