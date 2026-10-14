# Validation record — 2026-10-14

## Full practice inclusion

The user requested all 30 BSIT 3-4 Elective questions in Practice and the complete WebDev collections too. All 201 source prompts now appear in Practice: 200 questions scored against their keys and one written self-review. This supersedes the earlier exclusion policy below. Counts are Elective BSIT 3-4: 30; Elective all sections: 70; WebDev BSIT 3-4: 26; WebDev all sections: 131. The WebDev written prompt numbered 6–10 is still one original prompt.

The 15 unresolved audit decisions are unchanged. Those questions use their supplied keys, with “Matches the supplied key” / “Different from the supplied key” feedback and visible clarification notes. They are included in progress and scoring. Application tests check every prompt, full counts for all four routes, key marking, notes, and locked source-key attempts. Compatible saved responses remain unchanged because question wording, choices, answers and signatures are unchanged.

## Duplicate-rule correction

The user clarified that duplicates mean the same question and answer, preferably the same choices. All 201 source questions and every previously merged group were rechecked using exact wording, answer text, choice sets and code/image context. No exact duplicates were found. All 20 formerly merged prompts are restored separately; `duplicate-review.json` records the comparisons. The builder now rejects merges with different wording, answers, choices or code/image context.

Current totals: 201 distinct prompts, 185 objectively scored, one written self-review, 15 unresolved, and 186 practice prompts. BSIT 3-4 Elective has 30 total, 27 practice and three unresolved. The existing unresolved-answer decisions are unchanged.

Ten application suites pass, including completion of all 186 practice prompts, exact duplicate checks, preservation of every original prompt/choice array, and saved-progress regression checks. Previously checked representative questions retain compatible responses; restored questions start independently unanswered. Version 1 responses tied to their original IDs also remain independent.

The entries below record the initial implementation's verification before this duplicate-rule correction.

Answer review and application validation are separate. [ANSWER_AUDIT.md](ANSWER_AUDIT.md) records the individual semantic judgments for all 201 original prompts. `source-checks.json` records successful HTTP/term checks for 86 primary references, with timestamps, excerpts and content hashes. These availability checks do not prove a question's answer.

## Application tests

`npm test` passed nine suites using the repository's JSDOM dependency:

- All 201 audit decisions, references, aliases and source provenance; 181 unique questions, 165 scored, one written self-review, 15 unresolved; BSIT 3-4 representative preference and scope membership.
- Direct combined practice for both subjects and both scopes; legacy scope/list/source URLs and PPT terms.
- Correct marking for every one of the 166 practice prompts; no ambiguous item enters practice; written self-review never counts as correct/incorrect.
- Wrong first-attempt locking, save/restore, reset cancellation and reset isolation.
- Complete review collection, search, topic filtering, inert HTML/PHP rendering, and preservation of drafts/current question without scoring through the review tab.
- Semantic option migration, compatible merged responses, conflicting responses, unmappable choices, simulated corrected keys, version 2 signature changes, and legacy cursors.
- Menu expanded state, keyboard focus wrapping, Escape, navigation dismissal and focus restoration.
- Malformed, blocked and quota-limited storage.
- Reading-anchor restoration, arrow-key tab focus, theme preservation, semantic drafts and recovery of unmappable prior answers across reloads.

`node --check` passed for application/helper scripts, and `git diff --check` passed. The source-imported `data/quizzes.js` remained unchanged. The build derives all counts from curated decisions and preserves corrections outside the importer.

## Browser verification

Checked in the Codex in-app browser against the retained local HTTP server:

- Both themes, at 320, 360, 720, 768, 1440 and 1920 CSS-pixel widths, on Home, WebDev BSIT 3-4 practice and Elective all-section answers: **36 viewport checks, no page-level horizontal overflow**. The 720 CSS-pixel layout models 200% reflow of a 1440-pixel window. This is a viewport/reflow check, not an operating-system magnification test.
- Visually inspected mobile home/art, stacked tablet practice, wide desktop practice, both themes, desktop answers and mobile code-image/transcript presentation.
- Native menu: Shift+Tab/Tab wrapping, Escape dismissal, backdrop dismissal, focus restoration, and menu navigation into the subject/scope direct-start flow.
- Arrow-key tabs retain focus on the selected tab. A focus issue found during verification was repaired and rechecked.
- Walkthrough reading location before/after Practice → Answers: the hyperlink article remained at exactly 367.484375px from the viewport top, with the same scroll position of 1584px.
- Search exposes the corrected hyperlink answer C and its explanation. Mobile PHP code image loads, transcript expands and remains inert/readable with no horizontal page overflow.
- No browser console errors or warnings in the final check.

Evidence screenshots:

- [Desktop practice, dark](screenshots/practice-desktop-dark.png)
- [Desktop answer walkthrough, dark](screenshots/answers-desktop-dark.png)
- [720px reflow practice, light](screenshots/practice-reflow-light.png)
- [Mobile home, light](screenshots/home-mobile-light.png)

Original documents and the DBA project were not modified. PPT-derived questions remain unavailable until presentations are supplied.

## Deployment packaging

The first GitHub-triggered Vercel deployment reported failure. Authenticated build logs were unavailable in this session. Explicit static build/output settings were added to remove framework/output-directory inference. `npm run build` now generates `public/`, verifies byte equality for all six application files, and includes the source code images. The output directory is ignored by Git; original bank and audit records remain in the repository. This packaging check is separate from production verification.
