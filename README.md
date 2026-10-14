# Study room

Web Development and AI & Machine Learning practice with the DBA-inspired palette, theme-aware SVG artwork, and untimed immediate feedback.

Live site: https://webdev-elect-midterm-exam.vercel.app/

The flow is **Subject → All sections / BSIT 3-4 only → Practice**. Each scope opens its combined collection immediately. Topics organize the questions; there are no compilation-selection screens. The hamburger drawer includes navigation and PPT terms, marked Coming soon until presentations are supplied.

Practice retains drafts, locks checked first attempts, and supports a fresh attempt for the selected topic or collection. Questions & answers shows the complete unique collection, answers, explanations, code images/transcripts, source attribution, primary references, topic filters, and search. Reading answers never submits a response. Each topic retains its practice cursor and walkthrough reading anchor.

## Answer audit

All **201 original prompts** were reviewed separately from application testing. [The full report](audit/ANSWER_AUDIT.md) lists every original answer, decision, explanation, reference, ambiguity, and confirmed equivalent question. Twenty repeated equivalents were merged, retaining all 201 source IDs as aliases and all source references.

| Collection | Unique | Scored | Written self-review | Needs clarification |
|---|---:|---:|---:|---:|
| WebDev, all sections | 113 | 104 | 1 | 8 |
| WebDev, BSIT 3-4 | 26 | 24 | 1 | 1 |
| Elective, all sections | 68 | 61 | 0 | 7 |
| Elective, BSIT 3-4 | 29 | 26 | 0 | 3 |

Across both subjects: **181 unique prompts**, **165 objectively scored**, **1 written self-review**, **15 unresolved**. Ambiguous, malformed, and presentation-dependent questions remain readable with original keys explicitly labeled unverified, and are excluded from practice. The supplied hyperlink screenshot incorrectly highlights B (`src`); C (`href`) is correct and was already the previous website key.

Original wording and choices are retained. Explanations qualify simplified wording such as POST confidentiality, cascade precedence, and typographic quotation marks. Different code examples, scenarios, question types, or skills remain distinct. Unknown-section standalone quizzes appear only under All sections. A merged item belongs to BSIT 3-4 only when at least one source belongs to that section.

## Data and rebuilds

- `data/quizzes.js`: imported bank of 201 prompts. `scripts/import_quizzes.py` rebuilds it from the original supplied Downloads files using Python and pdfplumber, without modifying those documents.
- `data/audit-decisions.json`: curated decisions, references, and manual duplicate mappings, separate from the importer. Edit this file for future audit revisions.
- `scripts/author_audit.cjs`: initial curated audit authoring record. It rewrites decisions when explicitly run; it is not part of the normal build or importer.
- `scripts/build_bank.cjs`: validates coverage and generates `data/review-bank.js`, the full audit report, and `audit/summary.json` from imports plus decisions.
- `audit/source-checks.json`: dated HTTP/term evidence. Availability checks do not establish semantic correctness; the manual judgments are in the report.

Rebuild with `npm run build`. Review changed source material before updating decisions; the builder fails when a new question lacks a decision. No presentation-derived questions have been added.

## Saved-progress compatibility

The existing `study-room-progress-v1` storage key now contains version 2 data, storing answer text and question signatures. Migration translates old option indices through each source's choices to the representative answer meaning. Compatible checked responses remain locked; corrected keys, incompatible mappings, changed questions, and conflicting merged responses reopen only affected items. Unrelated responses and `study-room-theme` are preserved. The update banner explains migration. An unmappable answer is retained as `previousValue` for recovery.

Legacy scope, compilation-list, and source-specific quiz URLs redirect to combined practice. Old topic links resolve to the corresponding subject topic. Progress shared across scopes uses the same canonical question; resetting a question resets it everywhere it appears. Storage failures leave the current in-memory practice usable and show a save warning.

## Run and validate

Serve the folder with `python -m http.server 4173 --bind 127.0.0.1`, then open http://127.0.0.1:4173/. The runtime needs no build tooling, external fonts, API, account, or database. HTML/PHP snippets remain inert text.

Run `npm install` and `npm test` for the JSDOM application suites. An existing JSDOM install can be supplied through `STUDY_TEST_JSDOM`. Tests cover all 166 practice prompts, routes, aliases/provenance, counts, unresolved exclusion, marking, locking, reset scope, migration, draft preservation, review/search, inert rendering, menu keyboard logic, and storage failures. They remain separate from the answer audit.

`npm run check:sources` checks reference URLs with Node's built-in fetch. Optional source IDs after the script name limit a recheck. Browser verification is recorded in [audit/VALIDATION.md](audit/VALIDATION.md).

The fluid layout uses topic navigation and progress side panels with readable question widths, stacking panels on small screens. Theme preferences and original artwork are preserved. Original Downloads documents and the DBA MIDTERM project were left untouched.
