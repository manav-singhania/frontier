# Frontier signals sync — procedure (runs with Manav's Mac)

Goal: write `signals/latest.md` from the live backend so the 06:10 curator knows what Aryav opened, clipped, commented and asked for.

1. git pull.
2. In the Claude desktop app's built-in browser, open https://manav-singhania.github.io/frontier/monitor.html (the parent key is already saved on this Mac; if the key gate shows, stop and write "monitor locked" in the signals file instead of guessing).
3. Run, in that page: list all `frev/*` events and `frses/*` sessions from the backend (same call the page makes: `fetch(FR_SYNC_URL,{method:'POST',body:JSON.stringify({key,op:'list',since:0})})` with the parent key from localStorage `fr:parentKey` or `g5:parentKey`). Events of type `open`, `deeper`, `hop`, `clip`, `comment`, `flag`, `interests`, `lane`.
4. Device `duimvgh` is Manav's Mac (Claude's test device) and is excluded from "what he likes"; every other device counts as Aryav's.
5. Rewrite `signals/latest.md` fully:
   - `## Opened (retire from next edition)`: every tile id with an `open` event (any device except duimvgh), one line, comma-separated.
   - `## Dug deeper / clipped / hopped`: ids and chains.
   - `## His words`: every `comment` and `interests` text with date, verbatim.
   - `## Flags`: ids.
   - `## Time`: minutes per day for the last 7 days, by device.
   - `## Lean`: three lines of plain reading (which lanes and kinds of tile he goes to; what he ignores; one thing to try tomorrow).
   - Keep the `## Edition NN live` lines the curator appends; append, never delete them.
6. Commit "signals: synced from backend <date>" and push.
7. Reply in one line: counts of opens / clips / comments and the top three tiles he opened.
