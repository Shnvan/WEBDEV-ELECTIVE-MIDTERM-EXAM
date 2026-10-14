# Study room

A local Web Development and Elective quiz reviewer, with the visual palette and abstract line illustrations inspired by the DBA MIDTERM website.

The navigation is **Subject → All sections / BSIT 3-4 only → Quiz compilations / PPT terms → Compilation → Practice**. The PPT collection is explicitly marked coming soon until presentations are supplied.

Open `index.html` directly, or serve this folder with `python -m http.server 4173 --bind 127.0.0.1` and visit `http://127.0.0.1:4173`. No build, external fonts, network API, login, or database is required.

The initial bank has 201 source questions across eight compilations. Subject questions retain their source wording and choices, including repeated concepts across sections. The three standalone topic quizzes have no confirmed section attribution and appear only under All sections. The written accessibility prompt numbered 6–10 remains one five-point source prompt; its website response is self-reviewed and excluded from objective scoring.

Correct answers appear after checking, with first attempts locked until a fresh attempt. Answers, drafts and positions save locally. The same source question shares its saved response wherever it appears, including aggregate practice and topic views. Resetting a practice set clears its questions in every view while retaining other questions.

`scripts/import_quizzes.py` rebuilds `data/quizzes.js` from the supplied files in Downloads, preserving hashes and source identities. It needs Python and pdfplumber. The two latest BSIT 3-4 DOCX files are used in place of the earlier copies. Existing keys are preserved; missing WebDev 3-4 selections use the proposed answers discussed with the user. All 3-4 Elective keys match the supplied highlighted PDF.

Source code images are kept under `assets/questions`. HTML/PHP snippets are displayed as inert text, never executed. New artwork is authored in SVG to match the reference's native vector style and adapt to both themes.

The site is local only. No files were changed in the DBA MIDTERM project or the original Downloads documents.
