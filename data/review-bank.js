window.REVIEW_BANK = {
  "version": "audited-v2-cab32e1458a8",
  "reviewedOn": "2026-10-14",
  "rawCount": 201,
  "topics": {
    "webdev": [
      {
        "id": "html",
        "title": "HTML & accessibility"
      },
      {
        "id": "css",
        "title": "CSS & responsive design"
      },
      {
        "id": "javascript",
        "title": "JavaScript & the DOM"
      },
      {
        "id": "php",
        "title": "PHP fundamentals"
      }
    ],
    "elective": [
      {
        "id": "datasets",
        "title": "Datasets & ML workflow"
      },
      {
        "id": "training",
        "title": "Training & evaluation"
      },
      {
        "id": "images",
        "title": "Image classification"
      },
      {
        "id": "audio",
        "title": "Audio classification"
      }
    ]
  },
  "questions": [
    {
      "id": "webdev-34-2-1",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "2",
      "group": "HTML5: Semantic Web Structure",
      "number": "1",
      "prompt": "What is the primary tool used by websites to collect data and input from visitors?",
      "options": [
        "HTML Lists",
        "HTML Tables",
        "HTML Forms",
        "HTML Input"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "HTML Forms",
      "topic": "html",
      "aliases": [
        "webdev-34-2-1"
      ],
      "sources": [
        {
          "id": "webdev-34-2-1",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "HTML5: Semantic Web Structure",
          "number": "1",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "A form groups controls that collect and submit visitor input; an individual input is one control within the form.",
        "originalAnswer": "C. HTML Forms",
        "verifiedAnswer": "HTML Forms",
        "references": [
          {
            "label": "WHATWG: HTML forms",
            "url": "https://html.spec.whatwg.org/multipage/forms.html",
            "term": "form controls"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "3fc6a7eb20e52d6d"
    },
    {
      "id": "webdev-34-2-2",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "2",
      "group": "HTML5: Semantic Web Structure",
      "number": "2",
      "prompt": "Which HTML element is used to define the dominant content of a webpage?",
      "options": [
        "<article>",
        "<section>",
        "<main>",
        "<aside>"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "<main>",
      "topic": "html",
      "aliases": [
        "webdev-34-2-2"
      ],
      "sources": [
        {
          "id": "webdev-34-2-2",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "HTML5: Semantic Web Structure",
          "number": "2",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "The main element represents the body’s dominant content.",
        "originalAnswer": "C. <main>",
        "verifiedAnswer": "<main>",
        "references": [
          {
            "label": "WHATWG: grouping content",
            "url": "https://html.spec.whatwg.org/multipage/grouping-content.html",
            "term": "dominant"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "6ca3ce3da068ab20"
    },
    {
      "id": "webdev-34-2-3",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "2",
      "group": "HTML5: Semantic Web Structure",
      "number": "3",
      "prompt": "Which is the correct basic syntax for creating a hyperlink in HTML?",
      "options": [
        "<link href=\"url\">link text</link>",
        "<a src=\"url\">link text</a>",
        "<a href=\"url\">link text</a>",
        "<href=\"url\">link text</href>"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "<a href=\"url\">link text</a>",
      "topic": "html",
      "aliases": [
        "webdev-34-2-3"
      ],
      "sources": [
        {
          "id": "webdev-34-2-3",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "HTML5: Semantic Web Structure",
          "number": "3",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "corrected",
        "note": "An anchor creates a hyperlink using href. The user-supplied screenshot highlights B with src, which is incorrect; C was already the website answer.",
        "originalAnswer": "B. <a src=\"url\">link text</a> (user-provided highlighted screenshot)",
        "verifiedAnswer": "<a href=\"url\">link text</a>",
        "references": [
          {
            "label": "WHATWG: hyperlinks",
            "url": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element",
            "term": "href"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "45636178ccb372c4"
    },
    {
      "id": "webdev-34-2-4",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "2",
      "group": "HTML5: Semantic Web Structure",
      "number": "4",
      "prompt": "Which is the correct basic syntax for inserting an image in HTML?",
      "options": [
        "<img href=\"url\" alt=\"text\"></img>",
        "<img src=\"url\" alt=\"text\">",
        "<picture src=\"url\">text</picture>",
        "<image src=\"url\" alt=\"text\">"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "<img src=\"url\" alt=\"text\">",
      "topic": "html",
      "aliases": [
        "webdev-34-2-4"
      ],
      "sources": [
        {
          "id": "webdev-34-2-4",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "HTML5: Semantic Web Structure",
          "number": "4",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Use img with src and alt. img is a void element with no closing tag; image is not conforming authoring syntax.",
        "originalAnswer": "B. <img src=\"url\" alt=\"text\">",
        "verifiedAnswer": "<img src=\"url\" alt=\"text\">",
        "references": [
          {
            "label": "WHATWG: images",
            "url": "https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element",
            "term": "alt"
          },
          {
            "label": "WHATWG: HTML syntax",
            "url": "https://html.spec.whatwg.org/multipage/syntax.html",
            "term": "DOCTYPE"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "cee7311df34fe7d5"
    },
    {
      "id": "webdev-34-2-5",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "2",
      "group": "HTML5: Semantic Web Structure",
      "number": "5",
      "prompt": "Which is the correct basic syntax for creating a text input field in an HTML form?",
      "options": [
        "<form type=\"text\">name</form>",
        "<input type=\"text\" name=\"name\">",
        "<input text=\"name\">",
        "<text input=\"name\">"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "<input type=\"text\" name=\"name\">",
      "topic": "html",
      "aliases": [
        "webdev-34-2-5"
      ],
      "sources": [
        {
          "id": "webdev-34-2-5",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "HTML5: Semantic Web Structure",
          "number": "5",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "The text input state uses input type=\"text\"; name identifies the submitted field.",
        "originalAnswer": "B. <input type=\"text\" name=\"name\">",
        "verifiedAnswer": "<input type=\"text\" name=\"name\">",
        "references": [
          {
            "label": "WHATWG: input element",
            "url": "https://html.spec.whatwg.org/multipage/input.html",
            "term": "required"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "c15f0e2cab074ac2"
    },
    {
      "id": "webdev-34-2-6",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "2",
      "group": "HTML5: Semantic Web Structure",
      "number": "6-10",
      "prompt": "Give one example of Basic Accessibility Principle. Explain in one sentence (Strictly 1 sentence).",
      "options": [],
      "correct": null,
      "type": "written",
      "images": [],
      "page": null,
      "answer": "Provide alternative text for meaningful images so people using screen readers can understand their purpose.",
      "rubric": "Name a valid accessibility principle and explain how it helps someone, using one sentence. Other valid examples include keyboard navigation, readable contrast, and clear form labels.",
      "topic": "html",
      "aliases": [
        "webdev-34-2-6"
      ],
      "sources": [
        {
          "id": "webdev-34-2-6",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "HTML5: Semantic Web Structure",
          "number": "6-10",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "written-self-review",
        "note": "A valid accessibility principle plus its benefit in one sentence is a self-reviewed written response, not an automatically scored answer.",
        "originalAnswer": "Provide alternative text for meaningful images so people using screen readers can understand their purpose.",
        "verifiedAnswer": "Provide alternative text for meaningful images so people using screen readers can understand their purpose.",
        "references": [
          {
            "label": "W3C: accessibility principles",
            "url": "https://www.w3.org/WAI/fundamentals/accessibility-principles/",
            "term": "keyboard"
          }
        ]
      },
      "scored": false,
      "practice": true,
      "signature": "e1d122cb7a14f2af"
    },
    {
      "id": "webdev-34-9-1",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "9",
      "group": "CSS3 and Responsive Design",
      "number": "1",
      "prompt": "In CSS specificity, which order correctly ranks from HIGHEST to LOWEST priority?",
      "options": [
        "Inline style > ID selector > Class selector > Element selector",
        "Element selector > Class selector > ID selector > Inline style",
        "ID selector > Inline style > Element selector > Class selector",
        "Class selector > ID selector > Inline style > Element selector"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Inline style > ID selector > Class selector > Element selector",
      "topic": "css",
      "aliases": [
        "webdev-34-9-1",
        "webdev-33-2-11"
      ],
      "sources": [
        {
          "id": "webdev-34-9-1",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "CSS3 and Responsive Design",
          "number": "1",
          "page": null
        },
        {
          "id": "webdev-33-2-11",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "CSS & responsive design",
          "number": "11",
          "page": null
        }
      ],
      "sections": [
        "3-4",
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "For the listed normal author declarations in the same cascade context, style attributes outrank selector rules, then ID, class and type specificity. Origins, importance and layers are separate earlier cascade criteria.",
        "originalAnswer": "A. Inline style > ID selector > Class selector > Element selector",
        "verifiedAnswer": "Inline style > ID selector > Class selector > Element selector",
        "references": [
          {
            "label": "W3C: CSS cascade",
            "url": "https://www.w3.org/TR/css-cascade-5/",
            "term": "specificity"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "c60ee6fef0f009b0"
    },
    {
      "id": "webdev-34-9-2",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "9",
      "group": "CSS3 and Responsive Design",
      "number": "2",
      "prompt": "Given: p{color:blue;} .highlight{color:green;} #note{color:orange;} and <p id=\"note\" class=\"highlight\">Hello!</p> — what color does the text show?",
      "options": [
        "Blue, because it's the element selector",
        "Green, because .highlight is more specific than p",
        "Orange, because an ID selector is more specific than a class or element selector",
        "It alternates between all three colors"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Orange, because an ID selector is more specific than a class or element selector",
      "topic": "css",
      "aliases": [
        "webdev-34-9-2"
      ],
      "sources": [
        {
          "id": "webdev-34-9-2",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "CSS3 and Responsive Design",
          "number": "2",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "The ID selector wins over the class and type selectors in the given normal declarations, producing orange.",
        "originalAnswer": "C. Orange, because an ID selector is more specific than a class or element selector",
        "verifiedAnswer": "Orange, because an ID selector is more specific than a class or element selector",
        "references": [
          {
            "label": "W3C: CSS cascade",
            "url": "https://www.w3.org/TR/css-cascade-5/",
            "term": "specificity"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "447e5eb9890abc40"
    },
    {
      "id": "webdev-34-9-3",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "9",
      "group": "CSS3 and Responsive Design",
      "number": "3",
      "prompt": "What is the correct order of layers in the CSS Box Model, from innermost to outermost?",
      "options": [
        "Margin → Border → Padding → Content",
        "Content → Padding → Border → Margin",
        "Padding → Content → Margin → Border",
        "Border → Content → Padding → Margin"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Content → Padding → Border → Margin",
      "topic": "css",
      "aliases": [
        "webdev-34-9-3",
        "webdev-css-topic-7"
      ],
      "sources": [
        {
          "id": "webdev-34-9-3",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "CSS3 and Responsive Design",
          "number": "3",
          "page": null
        },
        {
          "id": "webdev-css-topic-7",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "7",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "The nested box areas run content, padding, border and margin, from inside outward.",
        "originalAnswer": "B. Content → Padding → Border → Margin",
        "verifiedAnswer": "Content → Padding → Border → Margin",
        "references": [
          {
            "label": "W3C: CSS box model",
            "url": "https://www.w3.org/TR/css-box-3/",
            "term": "padding"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "ca58a40a2c572cbb"
    },
    {
      "id": "webdev-34-9-4",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "9",
      "group": "CSS3 and Responsive Design",
      "number": "4",
      "prompt": "Why do most developers set box-sizing: border-box globally?",
      "options": [
        "It removes the need for margins entirely",
        "It makes padding and border count inside the declared width, keeping layouts predictable",
        "It automatically makes a layout responsive",
        "It disables the cascade for that element"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "It makes padding and border count inside the declared width, keeping layouts predictable",
      "topic": "css",
      "aliases": [
        "webdev-34-9-4"
      ],
      "sources": [
        {
          "id": "webdev-34-9-4",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "CSS3 and Responsive Design",
          "number": "4",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "border-box includes padding and border in the specified size; margin remains outside it.",
        "originalAnswer": "B. It makes padding and border count inside the declared width, keeping layouts predictable",
        "verifiedAnswer": "It makes padding and border count inside the declared width, keeping layouts predictable",
        "references": [
          {
            "label": "W3C: box sizing",
            "url": "https://www.w3.org/TR/css-sizing-3/",
            "term": "border-box"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "83c21e74831520cb"
    },
    {
      "id": "webdev-34-9-5",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "9",
      "group": "CSS3 and Responsive Design",
      "number": "5",
      "prompt": "Flexbox is best described as:",
      "options": [
        "A two-dimensional layout system for rows and columns together",
        "A one-dimensional layout system for a single row or column",
        "A CSS framework like Bootstrap",
        "A way to write media queries"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "A one-dimensional layout system for a single row or column",
      "topic": "css",
      "aliases": [
        "webdev-34-9-5",
        "webdev-33-2-15",
        "webdev-css-topic-8"
      ],
      "sources": [
        {
          "id": "webdev-34-9-5",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "CSS3 and Responsive Design",
          "number": "5",
          "page": null
        },
        {
          "id": "webdev-33-2-15",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "CSS & responsive design",
          "number": "15",
          "page": null
        },
        {
          "id": "webdev-css-topic-8",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "8",
          "page": null
        }
      ],
      "sections": [
        "3-4",
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Flexbox lays out items along a main axis, one row or column at a time; wrapping does not make it a two-axis grid system.",
        "originalAnswer": "B. A one-dimensional layout system for a single row or column",
        "verifiedAnswer": "A one-dimensional layout system for a single row or column",
        "references": [
          {
            "label": "W3C: Flexbox",
            "url": "https://www.w3.org/TR/css-flexbox-1/",
            "term": "column"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "1fe27a6f6c9c2118"
    },
    {
      "id": "webdev-34-9-6",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "9",
      "group": "CSS3 and Responsive Design",
      "number": "6",
      "prompt": "Which flex-direction value stacks flex items vertically?",
      "options": [
        "row",
        "column",
        "wrap",
        "stretch",
        "space-between"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "column",
      "topic": "css",
      "aliases": [
        "webdev-34-9-6"
      ],
      "sources": [
        {
          "id": "webdev-34-9-6",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "CSS3 and Responsive Design",
          "number": "6",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "column selects a vertical main axis in the ordinary horizontal writing mode assumed by this quiz.",
        "originalAnswer": "B. column",
        "verifiedAnswer": "column",
        "references": [
          {
            "label": "W3C: Flexbox",
            "url": "https://www.w3.org/TR/css-flexbox-1/",
            "term": "column"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "f63fcf25a2968e43"
    },
    {
      "id": "webdev-34-9-7",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "9",
      "group": "CSS3 and Responsive Design",
      "number": "7",
      "prompt": "Compared to Flexbox, CSS Grid is best suited for:",
      "options": [
        "Centering a single button",
        "Whole page layouts and two-dimensional designs like photo galleries or dashboards",
        "Writing media queries",
        "Setting box-sizing rules"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Whole page layouts and two-dimensional designs like photo galleries or dashboards",
      "topic": "css",
      "aliases": [
        "webdev-34-9-7",
        "webdev-css-topic-11"
      ],
      "sources": [
        {
          "id": "webdev-34-9-7",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "CSS3 and Responsive Design",
          "number": "7",
          "page": null
        },
        {
          "id": "webdev-css-topic-11",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "11",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Grid supplies rows and columns for two-dimensional layout.",
        "originalAnswer": "B. Whole page layouts and two-dimensional designs like photo galleries or dashboards",
        "verifiedAnswer": "Whole page layouts and two-dimensional designs like photo galleries or dashboards",
        "references": [
          {
            "label": "W3C: Grid",
            "url": "https://www.w3.org/TR/css-grid-2/",
            "term": "two-dimensional"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "34e95d2cab7baae5"
    },
    {
      "id": "webdev-34-9-8",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "9",
      "group": "CSS3 and Responsive Design",
      "number": "8",
      "prompt": "What does \"mobile-first\" design mean in the context of media queries?",
      "options": [
        "Writing styles for desktop first, then overriding them for smaller screens",
        "Writing base styles for small screens first, then adding rules for bigger screens using min-width",
        "Only designing for phones and ignoring tablets/desktops",
        "Using max-width queries exclusively"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Writing base styles for small screens first, then adding rules for bigger screens using min-width",
      "topic": "css",
      "aliases": [
        "webdev-34-9-8"
      ],
      "sources": [
        {
          "id": "webdev-34-9-8",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "CSS3 and Responsive Design",
          "number": "8",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Mobile-first base styles cover smaller viewports; min-width queries progressively add larger-viewport styles.",
        "originalAnswer": "B. Writing base styles for small screens first, then adding rules for bigger screens using min-width",
        "verifiedAnswer": "Writing base styles for small screens first, then adding rules for bigger screens using min-width",
        "references": [
          {
            "label": "W3C: media queries",
            "url": "https://www.w3.org/TR/mediaqueries-4/",
            "term": "touchpads"
          },
          {
            "label": "Bootstrap: introduction",
            "url": "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
            "term": "mobile"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "d424da52af06f6ca"
    },
    {
      "id": "webdev-34-9-9",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "9",
      "group": "CSS3 and Responsive Design",
      "number": "9",
      "prompt": "How does Tailwind CSS differ from Bootstrap 5 according to the comparison slide?",
      "options": [
        "Tailwind provides ready-made components like navbars and modals, while Bootstrap uses utility classes",
        "Tailwind is utility-first (classes like flex, p-4, bg-blue-500) you combine yourself, while Bootstrap gives ready-made components",
        "They are functionally identical frameworks",
        "Bootstrap is only for React/Vue/Laravel projects",
        "Tailwind requires no CSS classes at all"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Tailwind is utility-first (classes like flex, p-4, bg-blue-500) you combine yourself, while Bootstrap gives ready-made components",
      "topic": "css",
      "aliases": [
        "webdev-34-9-9",
        "webdev-css-topic-14"
      ],
      "sources": [
        {
          "id": "webdev-34-9-9",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "CSS3 and Responsive Design",
          "number": "9",
          "page": null
        },
        {
          "id": "webdev-css-topic-14",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "14",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Tailwind composes utility classes; Bootstrap supplies reusable components as well as utilities. The technical comparison is valid without the missing comparison slide.",
        "originalAnswer": "B. Tailwind is utility-first (classes like flex, p-4, bg-blue-500) you combine yourself, while Bootstrap gives ready-made components",
        "verifiedAnswer": "Tailwind is utility-first (classes like flex, p-4, bg-blue-500) you combine yourself, while Bootstrap gives ready-made components",
        "references": [
          {
            "label": "Tailwind: utility classes",
            "url": "https://tailwindcss.com/docs/styling-with-utility-classes",
            "term": "utility"
          },
          {
            "label": "Bootstrap: introduction",
            "url": "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
            "term": "mobile"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "3a3779f69c1c3008"
    },
    {
      "id": "webdev-34-9-10",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "9",
      "group": "CSS3 and Responsive Design",
      "number": "10",
      "prompt": "According to the slides, can Flexbox and CSS Grid be used together?",
      "options": [
        "No, a page must use only one or the other",
        "Yes — use Grid for the overall page layout, and Flexbox inside individual grid cells",
        "Yes, but only inside media queries",
        "No, Flexbox is deprecated in favor of Grid"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Yes — use Grid for the overall page layout, and Flexbox inside individual grid cells",
      "topic": "css",
      "aliases": [
        "webdev-34-9-10"
      ],
      "sources": [
        {
          "id": "webdev-34-9-10",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "CSS3 and Responsive Design",
          "number": "10",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Grid and Flexbox can be nested and used together; neither forbids the other.",
        "originalAnswer": "B. Yes — use Grid for the overall page layout, and Flexbox inside individual grid cells",
        "verifiedAnswer": "Yes — use Grid for the overall page layout, and Flexbox inside individual grid cells",
        "references": [
          {
            "label": "W3C: Grid",
            "url": "https://www.w3.org/TR/css-grid-2/",
            "term": "two-dimensional"
          },
          {
            "label": "W3C: Flexbox",
            "url": "https://www.w3.org/TR/css-flexbox-1/",
            "term": "column"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "b3f15ef393d84829"
    },
    {
      "id": "webdev-34-5-1",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "5",
      "group": "PHP Fundamentals for Laravel",
      "number": "1",
      "prompt": "Which symbol must be placed at the beginning of every variable name in PHP?",
      "options": [
        "@",
        "#",
        "$",
        "&"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "$",
      "topic": "php",
      "aliases": [
        "webdev-34-5-1",
        "webdev-php-topic-2"
      ],
      "sources": [
        {
          "id": "webdev-34-5-1",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "PHP Fundamentals for Laravel",
          "number": "1",
          "page": null
        },
        {
          "id": "webdev-php-topic-2",
          "sourceId": "webdev-php",
          "section": null,
          "label": "PHP topic quiz",
          "group": "PHP fundamentals",
          "number": "2",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "PHP variable names begin with a dollar sign.",
        "originalAnswer": "C. $",
        "verifiedAnswer": "$",
        "references": [
          {
            "label": "PHP: variables",
            "url": "https://www.php.net/manual/en/language.variables.basics.php",
            "term": "dollar"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "9fa3b81c4448afcb"
    },
    {
      "id": "webdev-34-5-2",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "5",
      "group": "PHP Fundamentals for Laravel",
      "number": "2",
      "prompt": "Which PHP variable is used to retrieve data sent using the GET method?",
      "options": [
        "$_FORM",
        "$_SESSION",
        "$_GET -",
        "$_POST"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "$_GET -",
      "topic": "php",
      "aliases": [
        "webdev-34-5-2"
      ],
      "sources": [
        {
          "id": "webdev-34-5-2",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "PHP Fundamentals for Laravel",
          "number": "2",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "The variable is $_GET. The source choice’s trailing dash is a formatting artifact, not part of the variable name; retain choice C and explain it.",
        "originalAnswer": "C. $_GET -",
        "verifiedAnswer": "$_GET -",
        "references": [
          {
            "label": "PHP: GET data",
            "url": "https://www.php.net/manual/en/reserved.variables.get.php",
            "term": "query"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "706ecf7d85cd94ce"
    },
    {
      "id": "webdev-34-5-3",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "5",
      "group": "PHP Fundamentals for Laravel",
      "number": "3",
      "prompt": "A form uses method=\"GET\" and has an input with name=\"search\". If the user enters laptop, which URL most likely represents the submitted data?",
      "options": [
        "website.com/search.php#search=laptop",
        "website.com/search.php/laptop?method=GET",
        "website.com/search.php/laptop",
        "website.com/search.php?search=laptop"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "website.com/search.php?search=laptop",
      "topic": "php",
      "aliases": [
        "webdev-34-5-3"
      ],
      "sources": [
        {
          "id": "webdev-34-5-3",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "PHP Fundamentals for Laravel",
          "number": "3",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "A GET form serializes a named search field into the URL query string, yielding ?search=laptop.",
        "originalAnswer": "D. website.com/search.php?search=laptop",
        "verifiedAnswer": "website.com/search.php?search=laptop",
        "references": [
          {
            "label": "WHATWG: HTML forms",
            "url": "https://html.spec.whatwg.org/multipage/forms.html",
            "term": "form controls"
          },
          {
            "label": "PHP: GET data",
            "url": "https://www.php.net/manual/en/reserved.variables.get.php",
            "term": "query"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "6bf1feb4feee6d40"
    },
    {
      "id": "webdev-34-5-4",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "5",
      "group": "PHP Fundamentals for Laravel",
      "number": "4",
      "prompt": "It is an unexpected problem that occurs while a PHP script is running.",
      "options": [
        "Exception",
        "Input handling",
        "Classes",
        "Syntax Error"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Exception",
      "topic": "php",
      "aliases": [
        "webdev-34-5-4"
      ],
      "sources": [
        {
          "id": "webdev-34-5-4",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "PHP Fundamentals for Laravel",
          "number": "4",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Exception is the intended runtime-problem term among these choices. PHP also has other runtime errors; not every failure is an exception.",
        "originalAnswer": "A. Exception",
        "verifiedAnswer": "Exception",
        "references": [
          {
            "label": "PHP: try/catch",
            "url": "https://www.php.net/manual/en/control-structures.try-catch.php",
            "term": "catch"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "571aba6619c7c920"
    },
    {
      "id": "webdev-34-5-5",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "5",
      "group": "PHP Fundamentals for Laravel",
      "number": "5",
      "prompt": "It is used to access a data submitted through a form.",
      "options": [
        "$_GET",
        "$_POST",
        "$_SESSION",
        "$_FORM"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "$_POST",
      "topic": "php",
      "aliases": [
        "webdev-34-5-5"
      ],
      "sources": [
        {
          "id": "webdev-34-5-5",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "PHP Fundamentals for Laravel",
          "number": "5",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "unresolved",
        "note": "Both $_GET and $_POST access submitted form data, depending on method. The stem supplies no method, so B cannot be the sole graded answer.",
        "originalAnswer": "B. $_POST",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "WHATWG: HTML forms",
            "url": "https://html.spec.whatwg.org/multipage/forms.html",
            "term": "form controls"
          },
          {
            "label": "PHP: GET data",
            "url": "https://www.php.net/manual/en/reserved.variables.get.php",
            "term": "query"
          },
          {
            "label": "PHP: POST data",
            "url": "https://www.php.net/manual/en/reserved.variables.post.php",
            "term": "Form data"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "121f98e0feaeb474"
    },
    {
      "id": "webdev-34-5-6",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "5",
      "group": "PHP Fundamentals for Laravel",
      "number": "6",
      "prompt": "This is a blueprint of code designed to define properties and methods",
      "options": [
        "PHP Class",
        "PHP Room",
        "PHP Objects",
        "PHP Functions"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "PHP Class",
      "topic": "php",
      "aliases": [
        "webdev-34-5-6",
        "webdev-33-4-32"
      ],
      "sources": [
        {
          "id": "webdev-34-5-6",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "PHP Fundamentals for Laravel",
          "number": "6",
          "page": null
        },
        {
          "id": "webdev-33-4-32",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "PHP fundamentals",
          "number": "32",
          "page": null
        }
      ],
      "sections": [
        "3-4",
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "A class defines the properties and methods used by its objects.",
        "originalAnswer": "A. PHP Class",
        "verifiedAnswer": "PHP Class",
        "references": [
          {
            "label": "PHP: classes and objects",
            "url": "https://www.php.net/manual/en/language.oop5.basic.php",
            "term": "class"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "91b92a3002c8b79d"
    },
    {
      "id": "webdev-34-5-7",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "5",
      "group": "PHP Fundamentals for Laravel",
      "number": "7",
      "prompt": "This help make code structured, organized, and easier to autoload",
      "options": [
        "Namespaces",
        "Library",
        "Connection",
        "Storage"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Namespaces",
      "topic": "php",
      "aliases": [
        "webdev-34-5-7"
      ],
      "sources": [
        {
          "id": "webdev-34-5-7",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "PHP Fundamentals for Laravel",
          "number": "7",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Namespaces organize and disambiguate names and support namespace-based autoloading conventions; they do not autoload code by themselves.",
        "originalAnswer": "A. Namespaces",
        "verifiedAnswer": "Namespaces",
        "references": [
          {
            "label": "PHP: namespaces",
            "url": "https://www.php.net/manual/en/language.namespaces.rationale.php",
            "term": "namespaces"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "c5d514968cb27096"
    },
    {
      "id": "webdev-34-5-8",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "5",
      "group": "PHP Fundamentals for Laravel",
      "number": "8",
      "prompt": "Determine the output.",
      "options": [],
      "correct": null,
      "type": "text",
      "images": [
        "assets/questions/webdev-34-image1.png"
      ],
      "page": null,
      "answer": "Very Good",
      "imageAlt": "Original code example for question 8. A readable code transcript is available below.",
      "code": "<?php\n$grade = 85;\n\nif ($grade >= 90) {\n    echo \"Excellent\";\n} elseif ($grade >= 80) {\n    echo \"Very Good\";\n} else {\n    echo \"Needs Improvement\";\n}",
      "topic": "php",
      "aliases": [
        "webdev-34-5-8"
      ],
      "sources": [
        {
          "id": "webdev-34-5-8",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "PHP Fundamentals for Laravel",
          "number": "8",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "85 is below 90 but at least 80, so the elseif branch echoes Very Good.",
        "originalAnswer": "Very Good",
        "verifiedAnswer": "Very Good",
        "references": [
          {
            "label": "PHP: conditional execution",
            "url": "https://www.php.net/manual/en/control-structures.elseif.php",
            "term": "elseif"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "44f65a7be7098d70"
    },
    {
      "id": "webdev-34-5-9",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "5",
      "group": "PHP Fundamentals for Laravel",
      "number": "9",
      "prompt": "Output ulit",
      "options": [],
      "correct": null,
      "type": "text",
      "images": [
        "assets/questions/webdev-34-image2.png"
      ],
      "page": null,
      "answer": "16",
      "imageAlt": "Original code example for question 9. A readable code transcript is available below.",
      "code": "<?php\nfunction calculate($a, $b) {\n    return ($a + $b) * 2;\n}\n$result = calculate(5, 3);\necho $result;\n?>",
      "topic": "php",
      "aliases": [
        "webdev-34-5-9"
      ],
      "sources": [
        {
          "id": "webdev-34-5-9",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "PHP Fundamentals for Laravel",
          "number": "9",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "The function returns (5 + 3) * 2 = 16, which echo prints.",
        "originalAnswer": "16",
        "verifiedAnswer": "16",
        "references": [
          {
            "label": "PHP: functions",
            "url": "https://www.php.net/manual/en/functions.user-defined.php",
            "term": "function"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "204418fb8f93ba9b"
    },
    {
      "id": "webdev-34-5-10",
      "sourceId": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "groupId": "5",
      "group": "PHP Fundamentals for Laravel",
      "number": "10",
      "prompt": "Last na output",
      "options": [],
      "correct": null,
      "type": "text",
      "images": [
        "assets/questions/webdev-34-image3.png"
      ],
      "page": null,
      "answer": "88",
      "imageAlt": "Original code example for question 10. A readable code transcript is available below.",
      "code": "<?php\n$student = [\n    \"name\" => \"Joben\",\n    \"grades\" => [85, 90, 88]\n];\necho $student[\"grades\"][2];\n?>",
      "topic": "php",
      "aliases": [
        "webdev-34-5-10"
      ],
      "sources": [
        {
          "id": "webdev-34-5-10",
          "sourceId": "webdev-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "PHP Fundamentals for Laravel",
          "number": "10",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "The zero-based grades index 2 selects the third element, 88.",
        "originalAnswer": "88",
        "verifiedAnswer": "88",
        "references": [
          {
            "label": "PHP: arrays",
            "url": "https://www.php.net/manual/en/language.types.array.php",
            "term": "map"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "780b9e3886e4ea12"
    },
    {
      "id": "webdev-33-1-1",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "1",
      "group": "HTML & semantic structure",
      "number": "1",
      "prompt": "Who invented HTML?",
      "options": [
        "Tim Berners-Lee",
        "Team Burners-Li",
        "Tim Lee-Berners",
        "Regine Velasquez"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Tim Berners-Lee",
      "topic": "html",
      "aliases": [
        "webdev-33-1-1"
      ],
      "sources": [
        {
          "id": "webdev-33-1-1",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "HTML & semantic structure",
          "number": "1",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "CERN identifies Tim Berners-Lee as the inventor of the Web and its initial HTML technology.",
        "originalAnswer": "A. Tim Berners-Lee",
        "verifiedAnswer": "Tim Berners-Lee",
        "references": [
          {
            "label": "CERN: the birth of the web",
            "url": "https://home.cern/science/computing/the-birth-of-the-web/where-web-was-born/",
            "term": "Berners"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "3c405060eef7f300"
    },
    {
      "id": "webdev-33-1-2",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "1",
      "group": "HTML & semantic structure",
      "number": "2",
      "prompt": "What is the meaning of HTML?",
      "options": [
        "HyperText Makeup Language",
        "HyperText Markup Language",
        "HiperTexting MissU Language",
        "HyperTraining Machine Learning"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "HyperText Markup Language",
      "topic": "html",
      "aliases": [
        "webdev-33-1-2",
        "webdev-32-1-1"
      ],
      "sources": [
        {
          "id": "webdev-33-1-2",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "HTML & semantic structure",
          "number": "2",
          "page": null
        },
        {
          "id": "webdev-32-1-1",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "HTML5 & semantic structure",
          "number": "1",
          "page": 1
        }
      ],
      "sections": [
        "3-3",
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "HTML expands to HyperText Markup Language.",
        "originalAnswer": "B. HyperText Markup Language",
        "verifiedAnswer": "HyperText Markup Language",
        "references": [
          {
            "label": "W3C: HTML introduction",
            "url": "https://www.w3.org/TR/html401/intro/intro.html",
            "term": "HyperText Markup"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "4f37a983acdcc322"
    },
    {
      "id": "webdev-33-1-3",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "1",
      "group": "HTML & semantic structure",
      "number": "3",
      "prompt": "What is the primary purpose of the declaration at the very top of an HTML file?",
      "options": [
        "To tell the browser to render the page using modern HTML5 standards",
        "To create the root container for all visible text content",
        "To link an external CSS stylesheet to the document",
        "To set the character encoding to standard UTF-8"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "To tell the browser to render the page using modern HTML5 standards",
      "topic": "html",
      "aliases": [
        "webdev-33-1-3"
      ],
      "sources": [
        {
          "id": "webdev-33-1-3",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "HTML & semantic structure",
          "number": "3",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "The HTML doctype is the required preamble that selects standards/no-quirks behavior for the basic HTML document example.",
        "originalAnswer": "A. To tell the browser to render the page using modern HTML5 standards",
        "verifiedAnswer": "To tell the browser to render the page using modern HTML5 standards",
        "references": [
          {
            "label": "WHATWG: HTML syntax",
            "url": "https://html.spec.whatwg.org/multipage/syntax.html",
            "term": "DOCTYPE"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "b369b97d9ea04489"
    },
    {
      "id": "webdev-33-1-4",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "1",
      "group": "HTML & semantic structure",
      "number": "4",
      "prompt": "Which part of an HTML document contains the visible content that users actually see on the screen?",
      "options": [
        "<head>",
        "<body>",
        "<!DOCTYPE>",
        "<meta>"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "<body>",
      "topic": "html",
      "aliases": [
        "webdev-33-1-4"
      ],
      "sources": [
        {
          "id": "webdev-33-1-4",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "HTML & semantic structure",
          "number": "4",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "The body represents the content of the document; head contains document metadata.",
        "originalAnswer": "B. <body>",
        "verifiedAnswer": "<body>",
        "references": [
          {
            "label": "WHATWG: document sections",
            "url": "https://html.spec.whatwg.org/multipage/sections.html#the-body-element",
            "term": "body"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "cb3df62db4bec46a"
    },
    {
      "id": "webdev-33-1-5",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "1",
      "group": "HTML & semantic structure",
      "number": "5",
      "prompt": "Which HTML tag is used to create a form?",
      "options": [
        "<label>",
        "<head>",
        "<button>",
        "<form>"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "<form>",
      "topic": "html",
      "aliases": [
        "webdev-33-1-5"
      ],
      "sources": [
        {
          "id": "webdev-33-1-5",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "HTML & semantic structure",
          "number": "5",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "The form element is the HTML form container.",
        "originalAnswer": "D. <form>",
        "verifiedAnswer": "<form>",
        "references": [
          {
            "label": "WHATWG: HTML forms",
            "url": "https://html.spec.whatwg.org/multipage/forms.html",
            "term": "form controls"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "d67af89f5de7ba32"
    },
    {
      "id": "webdev-33-1-6",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "1",
      "group": "HTML & semantic structure",
      "number": "6",
      "prompt": "What is the purpose of the required attribute?",
      "options": [
        "limits character count",
        "makes field mandatory",
        "sets maximum value",
        "hides entered characters"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "makes field mandatory",
      "topic": "html",
      "aliases": [
        "webdev-33-1-6",
        "webdev-32-1-4",
        "webdev-html-topic-6"
      ],
      "sources": [
        {
          "id": "webdev-33-1-6",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "HTML & semantic structure",
          "number": "6",
          "page": null
        },
        {
          "id": "webdev-32-1-4",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "HTML5 & semantic structure",
          "number": "4",
          "page": 1
        },
        {
          "id": "webdev-html-topic-6",
          "sourceId": "webdev-html",
          "section": null,
          "label": "HTML topic quiz",
          "group": "HTML5 & accessibility",
          "number": "6",
          "page": null
        }
      ],
      "sections": [
        "3-3",
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "required makes the applicable control subject to value-missing validation.",
        "originalAnswer": "B. makes field mandatory",
        "verifiedAnswer": "makes field mandatory",
        "references": [
          {
            "label": "WHATWG: input element",
            "url": "https://html.spec.whatwg.org/multipage/input.html",
            "term": "required"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "dfe98bd7c417a30b"
    },
    {
      "id": "webdev-33-1-7",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "1",
      "group": "HTML & semantic structure",
      "number": "7",
      "prompt": "In modern web design (HTML5), what is the <table> tag strictly used for?",
      "options": [
        "To arrange the layout or design of an entire website.",
        "To embed pictures and videos directly into the page.",
        "Only for Tabular Data (information that naturally requires grids of rows and columns).",
        "To create a clickable hyperlink."
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Only for Tabular Data (information that naturally requires grids of rows and columns).",
      "topic": "html",
      "aliases": [
        "webdev-33-1-7",
        "webdev-html-topic-7"
      ],
      "sources": [
        {
          "id": "webdev-33-1-7",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "HTML & semantic structure",
          "number": "7",
          "page": null
        },
        {
          "id": "webdev-html-topic-7",
          "sourceId": "webdev-html",
          "section": null,
          "label": "HTML topic quiz",
          "group": "HTML5 & accessibility",
          "number": "7",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Tables represent tabular data, not page layout.",
        "originalAnswer": "C. Only for Tabular Data (information that naturally requires grids of rows and columns).",
        "verifiedAnswer": "Only for Tabular Data (information that naturally requires grids of rows and columns).",
        "references": [
          {
            "label": "WHATWG: tabular data",
            "url": "https://html.spec.whatwg.org/multipage/tables.html",
            "term": "tabular"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "690b0c4e401df40a"
    },
    {
      "id": "webdev-33-1-8",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "1",
      "group": "HTML & semantic structure",
      "number": "8",
      "prompt": "Which HTML tag is used when you want to create a hyperlink to another website or webpage?",
      "options": [
        "<link>",
        "<a>",
        "<hyper>",
        "<href>"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "<a>",
      "topic": "html",
      "aliases": [
        "webdev-33-1-8",
        "webdev-html-topic-8"
      ],
      "sources": [
        {
          "id": "webdev-33-1-8",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "HTML & semantic structure",
          "number": "8",
          "page": null
        },
        {
          "id": "webdev-html-topic-8",
          "sourceId": "webdev-html",
          "section": null,
          "label": "HTML topic quiz",
          "group": "HTML5 & accessibility",
          "number": "8",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "The a element creates a hyperlink when it has an href attribute.",
        "originalAnswer": "B. <a>",
        "verifiedAnswer": "<a>",
        "references": [
          {
            "label": "WHATWG: hyperlinks",
            "url": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element",
            "term": "href"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "0cc1d51df2fba924"
    },
    {
      "id": "webdev-33-1-9",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "1",
      "group": "HTML & semantic structure",
      "number": "9",
      "prompt": "How do screen readers primarily use heading tags (h1 to h6) during user navigation?",
      "options": [
        "To change the font color of the text",
        "As a navigational outline to jump between sections",
        "To speed up page loading times",
        "To trigger background animations"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "As a navigational outline to jump between sections",
      "topic": "html",
      "aliases": [
        "webdev-33-1-9"
      ],
      "sources": [
        {
          "id": "webdev-33-1-9",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "HTML & semantic structure",
          "number": "9",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Heading structure supports assistive-technology navigation between sections.",
        "originalAnswer": "B. As a navigational outline to jump between sections",
        "verifiedAnswer": "As a navigational outline to jump between sections",
        "references": [
          {
            "label": "W3C: heading structure",
            "url": "https://www.w3.org/WAI/tutorials/page-structure/headings/",
            "term": "navigation"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "b30c3290d79cb8e5"
    },
    {
      "id": "webdev-33-1-10",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "1",
      "group": "HTML & semantic structure",
      "number": "10",
      "prompt": "Which tag prevents duplicate content issues by pointing to a preferred URL?",
      "options": [
        "Canonical Tag",
        "Open Graph Tag",
        "Meta Viewport Tag",
        "Title Tag"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Canonical Tag",
      "topic": "html",
      "aliases": [
        "webdev-33-1-10"
      ],
      "sources": [
        {
          "id": "webdev-33-1-10",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "HTML & semantic structure",
          "number": "10",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "A canonical link signals the preferred representative URL. It is a signal, not a guarantee that all duplication is prevented.",
        "originalAnswer": "A. Canonical Tag",
        "verifiedAnswer": "Canonical Tag",
        "references": [
          {
            "label": "Google: canonical URLs",
            "url": "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=en",
            "term": "canonical"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "c58b01269f89cdfc"
    },
    {
      "id": "webdev-33-2-12",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "2",
      "group": "CSS & responsive design",
      "number": "12",
      "prompt": "What is the color of \"Sample Text\" based on the code below?",
      "options": [
        "Yellow",
        "Red",
        "Orange",
        "Black"
      ],
      "correct": 2,
      "type": "choice",
      "images": [
        "assets/questions/webdev-33-image1.png"
      ],
      "page": null,
      "imageAlt": "Original code example for question 12. A readable code transcript is available below.",
      "code": "HTML:\n<p class=\"text-style text-highlight\">Sample Text</p>\n\nCSS:\n.text-highlight { color: red; }\n.text-style { color: orange; }",
      "answer": "Orange",
      "topic": "css",
      "aliases": [
        "webdev-33-2-12"
      ],
      "sources": [
        {
          "id": "webdev-33-2-12",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "CSS & responsive design",
          "number": "12",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Both rules use one class selector. Equal specificity is resolved by source order, so the later text-style rule makes the text orange.",
        "originalAnswer": "C. Orange",
        "verifiedAnswer": "Orange",
        "references": [
          {
            "label": "W3C: CSS cascade",
            "url": "https://www.w3.org/TR/css-cascade-5/",
            "term": "specificity"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "4c092918477a16c8"
    },
    {
      "id": "webdev-33-2-13",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "2",
      "group": "CSS & responsive design",
      "number": "13",
      "prompt": "Which four parts make up the CSS Box Model?",
      "options": [
        "Header, Body, Footer, Border",
        "Content, Paddling, Border, Margarine",
        "Text, Image, Button, Link",
        "Padding, Border, Margin, Content"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Padding, Border, Margin, Content",
      "topic": "css",
      "aliases": [
        "webdev-33-2-13"
      ],
      "sources": [
        {
          "id": "webdev-33-2-13",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "CSS & responsive design",
          "number": "13",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "The four named areas are content, padding, border and margin. The question asks for membership, not their inside-to-outside order, so D is valid.",
        "originalAnswer": "D. Padding, Border, Margin, Content",
        "verifiedAnswer": "Padding, Border, Margin, Content",
        "references": [
          {
            "label": "W3C: CSS box model",
            "url": "https://www.w3.org/TR/css-box-3/",
            "term": "padding"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "390446c2d0bf9fef"
    },
    {
      "id": "webdev-33-2-14",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "2",
      "group": "CSS & responsive design",
      "number": "14",
      "prompt": "What is the amount of pixels on the left side of the padding?",
      "options": [
        "40",
        "0",
        "10",
        "30"
      ],
      "correct": 1,
      "type": "choice",
      "images": [
        "assets/questions/webdev-33-image2.jpg"
      ],
      "page": null,
      "imageAlt": "Original code example for question 14. A readable code transcript is available below.",
      "code": ".box {\n    width: 100px;\n    height: 50px;\n    padding: 40px 50px 30px 0px;\n    margin: 10px 30px 30px 60px;\n    border: 5px solid red;\n    background: lightblue;\n}\n\n<div class=\"box\">Hello World!</div>",
      "answer": "0",
      "topic": "css",
      "aliases": [
        "webdev-33-2-14"
      ],
      "sources": [
        {
          "id": "webdev-33-2-14",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "CSS & responsive design",
          "number": "14",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "The four-value padding shorthand is top, right, bottom, left. The last value is 0px.",
        "originalAnswer": "B. 0",
        "verifiedAnswer": "0",
        "references": [
          {
            "label": "W3C: CSS box model",
            "url": "https://www.w3.org/TR/css-box-3/",
            "term": "padding"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "a331c46a90d5e3dc"
    },
    {
      "id": "webdev-33-2-16",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "2",
      "group": "CSS & responsive design",
      "number": "16",
      "prompt": "What is the write syntax to use a grid box?",
      "options": [
        "display: (GRID)",
        "display: GRID;",
        "display: GRID",
        "display: grid"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "display: grid",
      "topic": "css",
      "aliases": [
        "webdev-33-2-16"
      ],
      "sources": [
        {
          "id": "webdev-33-2-16",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "CSS & responsive design",
          "number": "16",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "unresolved",
        "note": "CSS keywords are case-insensitive: B (display: GRID;), C (display: GRID) and D (display: grid) are valid declarations in a declaration block. A terminal semicolon can be omitted. There is no unique correct choice.",
        "originalAnswer": "D. display: grid",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "W3C: Grid",
            "url": "https://www.w3.org/TR/css-grid-2/",
            "term": "two-dimensional"
          },
          {
            "label": "W3C: CSS values and units",
            "url": "https://www.w3.org/TR/css-values-4/",
            "term": "case-insensitive"
          },
          {
            "label": "W3C: CSS syntax",
            "url": "https://www.w3.org/TR/css-syntax-3/",
            "term": "declaration"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "63e2da24bf0f91eb"
    },
    {
      "id": "webdev-33-2-17",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "2",
      "group": "CSS & responsive design",
      "number": "17",
      "prompt": "Media Queries enable webpages to adapt to different layouts and styling based on which device the user is using. It can detect different things such as if the user is using __ or __.",
      "options": [
        "mouse or keyboard",
        "keyboard or touchpad",
        "keypad or mouse",
        "mouse or touchpad"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "mouse or touchpad",
      "topic": "css",
      "aliases": [
        "webdev-33-2-17"
      ],
      "sources": [
        {
          "id": "webdev-33-2-17",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "CSS & responsive design",
          "number": "17",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "unresolved",
        "note": "Media queries detect pointer accuracy and hover capabilities, not reliably mouse versus touchpad identity. Both can be fine pointers; none of these pairs is a uniquely supported detection claim.",
        "originalAnswer": "D. mouse or touchpad",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "W3C: media queries",
            "url": "https://www.w3.org/TR/mediaqueries-4/",
            "term": "touchpads"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "662448f49754ba41"
    },
    {
      "id": "webdev-33-2-18",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "2",
      "group": "CSS & responsive design",
      "number": "18",
      "prompt": "What is the break point of larger desktops and monitors?",
      "options": [
        "769-1279",
        "0-480",
        "481-768",
        "1280+"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "1280+",
      "topic": "css",
      "aliases": [
        "webdev-33-2-18"
      ],
      "sources": [
        {
          "id": "webdev-33-2-18",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "CSS & responsive design",
          "number": "18",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "unresolved",
        "note": "1280+ is a possible course convention, not a universal CSS desktop breakpoint. The missing presentation is needed to verify the intended convention.",
        "originalAnswer": "D. 1280+",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "W3C: media queries",
            "url": "https://www.w3.org/TR/mediaqueries-4/",
            "term": "touchpads"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "4f14b2ac26b456d5"
    },
    {
      "id": "webdev-33-2-19",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "2",
      "group": "CSS & responsive design",
      "number": "19",
      "prompt": "What does the border property do in the CSS Box Model?",
      "options": [
        "Creates space outside the element separating it from other elements",
        "Creates space inside the element between content and border",
        "Serves as a visible line surrounding the content and padding",
        "D) Defines the inner text dimensions"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Serves as a visible line surrounding the content and padding",
      "topic": "css",
      "aliases": [
        "webdev-33-2-19"
      ],
      "sources": [
        {
          "id": "webdev-33-2-19",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "CSS & responsive design",
          "number": "19",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "A border surrounds the content and padding areas, with margin outside it.",
        "originalAnswer": "C. Serves as a visible line surrounding the content and padding",
        "verifiedAnswer": "Serves as a visible line surrounding the content and padding",
        "references": [
          {
            "label": "W3C: CSS box model",
            "url": "https://www.w3.org/TR/css-box-3/",
            "term": "padding"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "f2bdd37a53154fcb"
    },
    {
      "id": "webdev-33-2-20",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "2",
      "group": "CSS & responsive design",
      "number": "20",
      "prompt": "Which framework is defined as a set of low-level utility classes applied directly in HTML to build custom designs?",
      "options": [
        "Bootstrap 5",
        "Tailwind CSS",
        "Materialize CSS",
        "Foundation"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Tailwind CSS",
      "topic": "css",
      "aliases": [
        "webdev-33-2-20"
      ],
      "sources": [
        {
          "id": "webdev-33-2-20",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "CSS & responsive design",
          "number": "20",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Tailwind’s utility classes are composed in markup to build custom designs.",
        "originalAnswer": "B. Tailwind CSS",
        "verifiedAnswer": "Tailwind CSS",
        "references": [
          {
            "label": "Tailwind: utility classes",
            "url": "https://tailwindcss.com/docs/styling-with-utility-classes",
            "term": "utility"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "457d881468d145ef"
    },
    {
      "id": "webdev-33-3-21",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "3",
      "group": "JavaScript & the DOM",
      "number": "21",
      "prompt": "Which statement describes ES6 according to the module?",
      "options": [
        "ES6 = ECMAScript 2020",
        "ES6 = ECMAScript 2009",
        "ES6 = JavaScript Object Notation",
        "ES6 = ECMAScript 2015"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "ES6 = ECMAScript 2015",
      "topic": "javascript",
      "aliases": [
        "webdev-33-3-21"
      ],
      "sources": [
        {
          "id": "webdev-33-3-21",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "JavaScript & the DOM",
          "number": "21",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "The sixth edition of ECMAScript is ECMAScript 2015, commonly called ES6.",
        "originalAnswer": "D. ES6 = ECMAScript 2015",
        "verifiedAnswer": "ES6 = ECMAScript 2015",
        "references": [
          {
            "label": "Ecma: ECMAScript 2015",
            "url": "https://262.ecma-international.org/6.0/",
            "term": "ECMAScript 2015"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "f136c6d298be1ff5"
    },
    {
      "id": "webdev-33-3-22",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "3",
      "group": "JavaScript & the DOM",
      "number": "22",
      "prompt": "Which ES6+ feature uses backticks and allows text and variables to be combined with ${}?",
      "options": [
        "Destructuring",
        "Template literals",
        "Default parameters",
        "Spread operator"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Template literals",
      "topic": "javascript",
      "aliases": [
        "webdev-33-3-22"
      ],
      "sources": [
        {
          "id": "webdev-33-3-22",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "JavaScript & the DOM",
          "number": "22",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Template literals use backticks and dollar-brace substitutions.",
        "originalAnswer": "B. Template literals",
        "verifiedAnswer": "Template literals",
        "references": [
          {
            "label": "Ecma: ECMAScript 2015",
            "url": "https://262.ecma-international.org/6.0/",
            "term": "ECMAScript 2015"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "75cd54611bdbf206"
    },
    {
      "id": "webdev-33-3-23",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "3",
      "group": "JavaScript & the DOM",
      "number": "23",
      "prompt": "In the DOM, which method selects an HTML element by its ID?",
      "options": [
        "innerHTML",
        "querySelector()",
        "textContent",
        "getElementById()"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "getElementById()",
      "topic": "javascript",
      "aliases": [
        "webdev-33-3-23"
      ],
      "sources": [
        {
          "id": "webdev-33-3-23",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "JavaScript & the DOM",
          "number": "23",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "getElementById selects an element using its ID; querySelector requires a selector string instead.",
        "originalAnswer": "D. getElementById()",
        "verifiedAnswer": "getElementById()",
        "references": [
          {
            "label": "WHATWG: DOM",
            "url": "https://dom.spec.whatwg.org/",
            "term": "getElementById"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "5618786c3197cf80"
    },
    {
      "id": "webdev-33-3-24",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "3",
      "group": "JavaScript & the DOM",
      "number": "24",
      "prompt": "What does the input event occur when the user does according to the module?",
      "options": [
        "Clicks or activates an element",
        "Edits the value of an input field",
        "Submits an HTML form",
        "Presses a keyboard key"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Edits the value of an input field",
      "topic": "javascript",
      "aliases": [
        "webdev-33-3-24"
      ],
      "sources": [
        {
          "id": "webdev-33-3-24",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "JavaScript & the DOM",
          "number": "24",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "The input event accompanies user editing of applicable input content, rather than only form submission or a click.",
        "originalAnswer": "B. Edits the value of an input field",
        "verifiedAnswer": "Edits the value of an input field",
        "references": [
          {
            "label": "W3C: input events",
            "url": "https://www.w3.org/TR/input-events-2/",
            "term": "input"
          },
          {
            "label": "WHATWG: input element",
            "url": "https://html.spec.whatwg.org/multipage/input.html",
            "term": "required"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "6a8c0deb34722f59"
    },
    {
      "id": "webdev-33-3-25",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "3",
      "group": "JavaScript & the DOM",
      "number": "25",
      "prompt": "What does the fetch() function return?",
      "options": [
        "A JSON object immediately",
        "An HTML element object",
        "A CSS selector",
        "A Promise which is fulfilled with a Response object"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "A Promise which is fulfilled with a Response object",
      "topic": "javascript",
      "aliases": [
        "webdev-33-3-25"
      ],
      "sources": [
        {
          "id": "webdev-33-3-25",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "JavaScript & the DOM",
          "number": "25",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "fetch returns a Promise whose fulfillment value is a Response; decoding JSON is a later operation.",
        "originalAnswer": "D. A Promise which is fulfilled with a Response object",
        "verifiedAnswer": "A Promise which is fulfilled with a Response object",
        "references": [
          {
            "label": "WHATWG: Fetch",
            "url": "https://fetch.spec.whatwg.org/",
            "term": "Promise"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "bb3b31594df9b9fa"
    },
    {
      "id": "webdev-33-3-26",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "3",
      "group": "JavaScript & the DOM",
      "number": "26",
      "prompt": "Which HTTP request method is used to update existing data on the server?",
      "options": [
        "POST",
        "PUT",
        "GET",
        "DELETE"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "PUT",
      "topic": "javascript",
      "aliases": [
        "webdev-33-3-26"
      ],
      "sources": [
        {
          "id": "webdev-33-3-26",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "JavaScript & the DOM",
          "number": "26",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "PUT requests creation or replacement of the target resource representation and is the conventional full-update method here. PATCH would be partial update but is not offered.",
        "originalAnswer": "B. PUT",
        "verifiedAnswer": "PUT",
        "references": [
          {
            "label": "IETF: HTTP semantics",
            "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
            "term": "PUT"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "56db4b3769c35b46"
    },
    {
      "id": "webdev-33-3-27",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "3",
      "group": "JavaScript & the DOM",
      "number": "27",
      "prompt": "Which three states can a Promise be in?",
      "options": [
        "Created, Updated, Deleted",
        "Pending, Fulfilled, Rejected",
        "Started, Running, Finished",
        "Open, Closed, Failed"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Pending, Fulfilled, Rejected",
      "topic": "javascript",
      "aliases": [
        "webdev-33-3-27"
      ],
      "sources": [
        {
          "id": "webdev-33-3-27",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "JavaScript & the DOM",
          "number": "27",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "A Promise’s states are pending, fulfilled and rejected.",
        "originalAnswer": "B. Pending, Fulfilled, Rejected",
        "verifiedAnswer": "Pending, Fulfilled, Rejected",
        "references": [
          {
            "label": "Ecma: ECMAScript 2015",
            "url": "https://262.ecma-international.org/6.0/",
            "term": "ECMAScript 2015"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "960a45c503d1df14"
    },
    {
      "id": "webdev-33-3-28",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "3",
      "group": "JavaScript & the DOM",
      "number": "28",
      "prompt": "What does the await keyword do in an async function according to the module?",
      "options": [
        "It selects an HTML element by ID",
        "It converts a JavaScript object into JSON text",
        "It registers an event listener",
        "It pauses the execution of the async function until the Promise is resolved or rejected"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "It pauses the execution of the async function until the Promise is resolved or rejected",
      "topic": "javascript",
      "aliases": [
        "webdev-33-3-28"
      ],
      "sources": [
        {
          "id": "webdev-33-3-28",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "JavaScript & the DOM",
          "number": "28",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "await suspends the enclosing async function until the awaited value settles; it does not block the entire JavaScript thread.",
        "originalAnswer": "D. It pauses the execution of the async function until the Promise is resolved or rejected",
        "verifiedAnswer": "It pauses the execution of the async function until the Promise is resolved or rejected",
        "references": [
          {
            "label": "Ecma: ECMAScript 2017 async functions",
            "url": "https://262.ecma-international.org/8.0/#sec-async-function-definitions",
            "term": "AsyncFunction"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "dadcbd4bc0bab7a2"
    },
    {
      "id": "webdev-33-3-29",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "3",
      "group": "JavaScript & the DOM",
      "number": "29",
      "prompt": "Which statement correctly describes JSON.parse() and JSON.stringify()?",
      "options": [
        "JSON.parse() sends data to a server; JSON.stringify() receives data from a server",
        "JSON.parse() creates a Promise; JSON.stringify() resolves a Promise",
        "JSON.parse() converts JSON text to a JavaScript object; JSON.stringify() converts a JavaScript object to JSON text",
        "JSON.parse() selects HTML elements; JSON.stringify() changes CSS styles"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "JSON.parse() converts JSON text to a JavaScript object; JSON.stringify() converts a JavaScript object to JSON text",
      "topic": "javascript",
      "aliases": [
        "webdev-33-3-29"
      ],
      "sources": [
        {
          "id": "webdev-33-3-29",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "JavaScript & the DOM",
          "number": "29",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "JSON.parse reads JSON text into a JavaScript value; JSON.stringify serializes a value to JSON text, subject to JSON’s supported types.",
        "originalAnswer": "C. JSON.parse() converts JSON text to a JavaScript object; JSON.stringify() converts a JavaScript object to JSON text",
        "verifiedAnswer": "JSON.parse() converts JSON text to a JavaScript object; JSON.stringify() converts a JavaScript object to JSON text",
        "references": [
          {
            "label": "Ecma: ECMAScript 2015",
            "url": "https://262.ecma-international.org/6.0/",
            "term": "ECMAScript 2015"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "114a9407d8bd9b9b"
    },
    {
      "id": "webdev-33-3-30",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "3",
      "group": "JavaScript & the DOM",
      "number": "30",
      "prompt": "According to the module, why does async/await make asynchronous code easier to work with?",
      "options": [
        "It converts every asynchronous operation into a synchronous operation",
        "It removes the need for all Promises",
        "It makes asynchronous code read more like synchronous code",
        "It prevents all errors from occurring during asynchronous operations"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "It makes asynchronous code read more like synchronous code",
      "topic": "javascript",
      "aliases": [
        "webdev-33-3-30"
      ],
      "sources": [
        {
          "id": "webdev-33-3-30",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "JavaScript & the DOM",
          "number": "30",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "async/await permits sequential-looking asynchronous code while retaining Promise semantics.",
        "originalAnswer": "C. It makes asynchronous code read more like synchronous code",
        "verifiedAnswer": "It makes asynchronous code read more like synchronous code",
        "references": [
          {
            "label": "Ecma: ECMAScript 2017 async functions",
            "url": "https://262.ecma-international.org/8.0/#sec-async-function-definitions",
            "term": "AsyncFunction"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "18f250d0e7dd83ab"
    },
    {
      "id": "webdev-33-4-31",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "4",
      "group": "PHP fundamentals",
      "number": "31",
      "prompt": "What is the main use of PHP?",
      "options": [
        "To develop more codes",
        "To build a computer system",
        "Used for web development",
        "To night will be the night that I will fall for you over again. Don't make me change my mind"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Used for web development",
      "topic": "php",
      "aliases": [
        "webdev-33-4-31",
        "webdev-php-topic-1"
      ],
      "sources": [
        {
          "id": "webdev-33-4-31",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "PHP fundamentals",
          "number": "31",
          "page": null
        },
        {
          "id": "webdev-php-topic-1",
          "sourceId": "webdev-php",
          "section": null,
          "label": "PHP topic quiz",
          "group": "PHP fundamentals",
          "number": "1",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "PHP is commonly used for server-side web development.",
        "originalAnswer": "C. Used for web development",
        "verifiedAnswer": "Used for web development",
        "references": [
          {
            "label": "PHP: purpose",
            "url": "https://www.php.net/intro",
            "term": "server"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "ef08f852e7e8c287"
    },
    {
      "id": "webdev-33-4-33",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "4",
      "group": "PHP fundamentals",
      "number": "33",
      "prompt": "Which situation best demonstrates using a function instead of not using one?",
      "options": [
        "When the same task is needed in several parts of the program, possibly with different input each time",
        "When the program needs to store many related values together",
        "When the program needs to make decisions based on conditions, such as using if-else statements.",
        "When you try your best but you don't succeed…"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "When the same task is needed in several parts of the program, possibly with different input each time",
      "topic": "php",
      "aliases": [
        "webdev-33-4-33"
      ],
      "sources": [
        {
          "id": "webdev-33-4-33",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "PHP fundamentals",
          "number": "33",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "A reusable function avoids duplicating a task and can accept different arguments on each call.",
        "originalAnswer": "A. When the same task is needed in several parts of the program, possibly with different input each time",
        "verifiedAnswer": "When the same task is needed in several parts of the program, possibly with different input each time",
        "references": [
          {
            "label": "PHP: functions",
            "url": "https://www.php.net/manual/en/functions.user-defined.php",
            "term": "function"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "c6c509b81f3a939b"
    },
    {
      "id": "webdev-33-4-34",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "4",
      "group": "PHP fundamentals",
      "number": "34",
      "prompt": "Which statement about arrays in PHP is correct?",
      "options": [
        "Each value needs its own separate variable",
        "Values can be accessed by a numeric indent or a named podlock, and can be added, updated, or removed",
        "Values can be accessed by a numeric index or a named key, and can be added, updated, or removed",
        "Values can only be accessed by a numeric index"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Values can be accessed by a numeric index or a named key, and can be added, updated, or removed",
      "topic": "php",
      "aliases": [
        "webdev-33-4-34"
      ],
      "sources": [
        {
          "id": "webdev-33-4-34",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "PHP fundamentals",
          "number": "34",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "PHP arrays are ordered maps with integer or string keys whose elements can be accessed and modified.",
        "originalAnswer": "C. Values can be accessed by a numeric index or a named key, and can be added, updated, or removed",
        "verifiedAnswer": "Values can be accessed by a numeric index or a named key, and can be added, updated, or removed",
        "references": [
          {
            "label": "PHP: arrays",
            "url": "https://www.php.net/manual/en/language.types.array.php",
            "term": "map"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "d3fec5ddd5237926"
    },
    {
      "id": "webdev-33-4-35",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "4",
      "group": "PHP fundamentals",
      "number": "35",
      "prompt": "PHP script starts and end with this and are also called \"Canonical PHP tags\" or \"Delimiters.\"",
      "options": [
        "<#php... #>",
        "<%php... %>",
        "<\\php... \\>",
        "<?php... ?>"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "<?php... ?>",
      "topic": "php",
      "aliases": [
        "webdev-33-4-35"
      ],
      "sources": [
        {
          "id": "webdev-33-4-35",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "PHP fundamentals",
          "number": "35",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "The standard opening tag is <?php and the closing tag is ?>. Closing tags may be omitted in PHP-only files.",
        "originalAnswer": "D. <?php... ?>",
        "verifiedAnswer": "<?php... ?>",
        "references": [
          {
            "label": "PHP: opening and closing tags",
            "url": "https://www.php.net/manual/en/language.basic-syntax.phpmode.php",
            "term": "<?php"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "43faba09abca90b4"
    },
    {
      "id": "webdev-33-4-36",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "4",
      "group": "PHP fundamentals",
      "number": "36",
      "prompt": "What does a session do on a website?",
      "options": [
        "A mechanism that assigns a unique id to a user so their data can be accessed across multiple pages until the session ends",
        "A mechanic that assigns a unique id to a user so their data can be accessed across multiple pages until the session ends",
        "A permanent record of the user that stays even after the browser is closed",
        "A request method that shows data in the URL and can be bookmarked"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "A mechanism that assigns a unique id to a user so their data can be accessed across multiple pages until the session ends",
      "topic": "php",
      "aliases": [
        "webdev-33-4-36",
        "webdev-php-topic-9"
      ],
      "sources": [
        {
          "id": "webdev-33-4-36",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "PHP fundamentals",
          "number": "36",
          "page": null
        },
        {
          "id": "webdev-php-topic-9",
          "sourceId": "webdev-php",
          "section": null,
          "label": "PHP topic quiz",
          "group": "PHP fundamentals",
          "number": "9",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Sessions preserve data between requests using a session identifier. Their lifetime depends on configuration, rather than being inherently permanent.",
        "originalAnswer": "A. A mechanism that assigns a unique id to a user so their data can be accessed across multiple pages until the session ends",
        "verifiedAnswer": "A mechanism that assigns a unique id to a user so their data can be accessed across multiple pages until the session ends",
        "references": [
          {
            "label": "PHP: sessions",
            "url": "https://www.php.net/manual/en/book.session.php",
            "term": "session"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "d81ac1f7b1eb4768"
    },
    {
      "id": "webdev-33-4-37",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "4",
      "group": "PHP fundamentals",
      "number": "37",
      "prompt": "It refers to capturing, sanitizing, and validating data sent by users through HTTP requests.",
      "options": [
        "Exception Handling",
        "Input Handling",
        "Output Handling",
        "Exempted Handling"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Input Handling",
      "topic": "php",
      "aliases": [
        "webdev-33-4-37"
      ],
      "sources": [
        {
          "id": "webdev-33-4-37",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "PHP fundamentals",
          "number": "37",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Capturing, validating and sanitizing request input is input handling; sanitization and validation are distinct operations.",
        "originalAnswer": "B. Input Handling",
        "verifiedAnswer": "Input Handling",
        "references": [
          {
            "label": "PHP: filtering external data",
            "url": "https://www.php.net/manual/en/book.filter.php",
            "term": "validation"
          },
          {
            "label": "WHATWG: HTML forms",
            "url": "https://html.spec.whatwg.org/multipage/forms.html",
            "term": "form controls"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "509d039e125ef4d8"
    },
    {
      "id": "webdev-33-4-38",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "4",
      "group": "PHP fundamentals",
      "number": "38",
      "prompt": "PHP keywords (e.g. if, else, echo, etc.), classes, functions, and user-defined functions ARE CASE-SENSITIVE.",
      "options": [
        "True Positive",
        "False",
        "True",
        "False Negative"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "False",
      "topic": "php",
      "aliases": [
        "webdev-33-4-38"
      ],
      "sources": [
        {
          "id": "webdev-33-4-38",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "PHP fundamentals",
          "number": "38",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "The assertion is false: function and class names are case-insensitive. Variable names are case-sensitive, so casing rules must not be generalized to every identifier.",
        "originalAnswer": "B. False",
        "verifiedAnswer": "False",
        "references": [
          {
            "label": "PHP: functions",
            "url": "https://www.php.net/manual/en/functions.user-defined.php",
            "term": "function"
          },
          {
            "label": "PHP: classes and objects",
            "url": "https://www.php.net/manual/en/language.oop5.basic.php",
            "term": "class"
          },
          {
            "label": "PHP: variables",
            "url": "https://www.php.net/manual/en/language.variables.basics.php",
            "term": "dollar"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "ea016dfaccdffbff"
    },
    {
      "id": "webdev-33-4-39",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "4",
      "group": "PHP fundamentals",
      "number": "39",
      "prompt": "PHP is a Hypertext Preprocessor, originally abbreviated as _____",
      "options": [
        "Personal Home Page",
        "Person House Page",
        "Personal House Page",
        "Personal His/Her/They/Them Page"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Personal Home Page",
      "topic": "php",
      "aliases": [
        "webdev-33-4-39"
      ],
      "sources": [
        {
          "id": "webdev-33-4-39",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "PHP fundamentals",
          "number": "39",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "PHP originated as Personal Home Page tools before the recursive Hypertext Preprocessor name.",
        "originalAnswer": "A. Personal Home Page",
        "verifiedAnswer": "Personal Home Page",
        "references": [
          {
            "label": "PHP: history",
            "url": "https://www.php.net/manual/en/history.php.php",
            "term": "Personal Home Page"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "f7ff7d090ce2517a"
    },
    {
      "id": "webdev-33-4-40",
      "sourceId": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "groupId": "4",
      "group": "PHP fundamentals",
      "number": "40",
      "prompt": "Scenario: A login form sends a username and password to the server. Which request method should be used, and why?",
      "options": [
        "POST, because it hides the password from the URL",
        "GET, because it can only be used for requesting",
        "POST, because it can be bookmarked",
        "GET GET AW"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "POST, because it hides the password from the URL",
      "topic": "php",
      "aliases": [
        "webdev-33-4-40",
        "webdev-php-topic-8"
      ],
      "sources": [
        {
          "id": "webdev-33-4-40",
          "sourceId": "webdev-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "PHP fundamentals",
          "number": "40",
          "page": null
        },
        {
          "id": "webdev-php-topic-8",
          "sourceId": "webdev-php",
          "section": null,
          "label": "PHP topic quiz",
          "group": "PHP fundamentals",
          "number": "8",
          "page": null
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "POST places ordinary form data in the request body instead of the URL query. HTTPS is still required for confidentiality in transit; POST alone does not encrypt a password.",
        "originalAnswer": "A. POST, because it hides the password from the URL",
        "verifiedAnswer": "POST, because it hides the password from the URL",
        "references": [
          {
            "label": "WHATWG: HTML forms",
            "url": "https://html.spec.whatwg.org/multipage/forms.html",
            "term": "form controls"
          },
          {
            "label": "PHP: POST data",
            "url": "https://www.php.net/manual/en/reserved.variables.post.php",
            "term": "Form data"
          },
          {
            "label": "IETF: HTTP semantics",
            "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
            "term": "PUT"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "e26ba86a444c4e83"
    },
    {
      "id": "webdev-32-1-2",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "1",
      "group": "HTML5 & semantic structure",
      "number": "2",
      "prompt": "Why is it better to use Semantic HTML tags instead of plain tags?",
      "options": [
        "Because it is faster to type.",
        "Because it provides clear meaning and structure for browsers and assistive tools.",
        "Because it automatically makes the page look good.",
        "Because it is required for JavaScript to work."
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 1,
      "answer": "Because it provides clear meaning and structure for browsers and assistive tools.",
      "topic": "html",
      "aliases": [
        "webdev-32-1-2"
      ],
      "sources": [
        {
          "id": "webdev-32-1-2",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "HTML5 & semantic structure",
          "number": "2",
          "page": 1
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "Semantic elements convey the role and meaning of content to browsers and assistive technologies.",
        "originalAnswer": "B. Because it provides clear meaning and structure for browsers and assistive tools.",
        "verifiedAnswer": "Because it provides clear meaning and structure for browsers and assistive tools.",
        "references": [
          {
            "label": "WHATWG: sections",
            "url": "https://html.spec.whatwg.org/multipage/sections.html",
            "term": "article"
          },
          {
            "label": "W3C: accessibility principles",
            "url": "https://www.w3.org/WAI/fundamentals/accessibility-principles/",
            "term": "keyboard"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "62feec82272f0f17"
    },
    {
      "id": "webdev-32-1-3",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "1",
      "group": "HTML5 & semantic structure",
      "number": "3",
      "prompt": "If you are creating an independent and self-contained blog post on a website, which semantic tag is the most appropriate to use?",
      "options": [
        "<section>",
        "<main>",
        "<aside>",
        "<article>"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": 1,
      "answer": "<article>",
      "topic": "html",
      "aliases": [
        "webdev-32-1-3"
      ],
      "sources": [
        {
          "id": "webdev-32-1-3",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "HTML5 & semantic structure",
          "number": "3",
          "page": 1
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "article represents a self-contained composition such as an independent blog post.",
        "originalAnswer": "D. <article>",
        "verifiedAnswer": "<article>",
        "references": [
          {
            "label": "WHATWG: sections",
            "url": "https://html.spec.whatwg.org/multipage/sections.html",
            "term": "article"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "02691a6e80e1a7ae"
    },
    {
      "id": "webdev-32-1-5",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "1",
      "group": "HTML5 & semantic structure",
      "number": "5",
      "prompt": "How do you open a hyperlink in a new browser tab?",
      "options": [
        "<a href=”link.html” open=”new”>",
        "<a href=”link.html” target=”_blank”>",
        "<a href=”link.html” window=”new”>",
        "<a href=”link.html” target=”_newtab”>"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 1,
      "answer": "<a href=”link.html” target=”_blank”>",
      "topic": "html",
      "aliases": [
        "webdev-32-1-5"
      ],
      "sources": [
        {
          "id": "webdev-32-1-5",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "HTML5 & semantic structure",
          "number": "5",
          "page": 1
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "target=\"_blank\" requests a new browsing context, commonly a tab; the browser/user may choose a window. The printed curly quotation marks are typographic, not copyable HTML delimiters.",
        "originalAnswer": "B. <a href=”link.html” target=”_blank”>",
        "verifiedAnswer": "<a href=”link.html” target=”_blank”>",
        "references": [
          {
            "label": "WHATWG: hyperlinks",
            "url": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element",
            "term": "href"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "49a84ca889cb6567"
    },
    {
      "id": "webdev-32-1-6",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "1",
      "group": "HTML5 & semantic structure",
      "number": "6",
      "prompt": "For Web Accessibility (A11y), which attribute MUST always be included in an <img> tag so that Screen Readers can read it?",
      "options": [
        "src",
        "title",
        "alt",
        "description"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 1,
      "answer": "alt",
      "topic": "html",
      "aliases": [
        "webdev-32-1-6",
        "webdev-html-topic-5"
      ],
      "sources": [
        {
          "id": "webdev-32-1-6",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "HTML5 & semantic structure",
          "number": "6",
          "page": 1
        },
        {
          "id": "webdev-html-topic-5",
          "sourceId": "webdev-html",
          "section": null,
          "label": "HTML topic quiz",
          "group": "HTML5 & accessibility",
          "number": "5",
          "page": null
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "alt supplies an image’s text alternative. Decorative images ordinarily use alt=\"\"; it need not always be descriptive text, and the specification has narrow exceptions to mandatory author-provided alt.",
        "originalAnswer": "C. alt",
        "verifiedAnswer": "alt",
        "references": [
          {
            "label": "WHATWG: images",
            "url": "https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element",
            "term": "alt"
          },
          {
            "label": "W3C: accessibility principles",
            "url": "https://www.w3.org/WAI/fundamentals/accessibility-principles/",
            "term": "keyboard"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "cbdd17eed300daba"
    },
    {
      "id": "webdev-32-1-7",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "1",
      "group": "HTML5 & semantic structure",
      "number": "7",
      "prompt": "When creating an HTML table, which tag is used to define a “header cell”?",
      "options": [
        "<th>",
        "<tr>",
        "<td>",
        "<thead>"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 1,
      "answer": "<th>",
      "topic": "html",
      "aliases": [
        "webdev-32-1-7"
      ],
      "sources": [
        {
          "id": "webdev-32-1-7",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "HTML5 & semantic structure",
          "number": "7",
          "page": 1
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "th represents a header cell; tr is a row and td is a data cell.",
        "originalAnswer": "A. <th>",
        "verifiedAnswer": "<th>",
        "references": [
          {
            "label": "WHATWG: tabular data",
            "url": "https://html.spec.whatwg.org/multipage/tables.html",
            "term": "tabular"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "130961bf43aafa2f"
    },
    {
      "id": "webdev-32-1-8",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "1",
      "group": "HTML5 & semantic structure",
      "number": "8",
      "prompt": "What is the primary purpose of the <meta name=”description” content=”...”> tag in a webpage?",
      "options": [
        "To create a popup message on the screen.",
        "To provide a short summary of the page that appears in search engine results.",
        "To describe images for visually impaired users.",
        "To link a CSS file to the HTML document."
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 2,
      "answer": "To provide a short summary of the page that appears in search engine results.",
      "topic": "html",
      "aliases": [
        "webdev-32-1-8"
      ],
      "sources": [
        {
          "id": "webdev-32-1-8",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "HTML5 & semantic structure",
          "number": "8",
          "page": 2
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "A meta description supplies a page summary that search engines may use for snippets; they can also generate a different snippet.",
        "originalAnswer": "B. To provide a short summary of the page that appears in search engine results.",
        "verifiedAnswer": "To provide a short summary of the page that appears in search engine results.",
        "references": [
          {
            "label": "Google: search snippets",
            "url": "https://developers.google.com/search/docs/appearance/snippet?hl=en",
            "term": "description"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "5c7274282de9b49a"
    },
    {
      "id": "webdev-32-1-9",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "1",
      "group": "HTML5 & semantic structure",
      "number": "9",
      "prompt": "Which of the railings/tags is the most critical element for Search Engine Optimization (SEO) rankings?",
      "options": [
        "<header>",
        "<h1>",
        "<title>",
        "<footer>"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 2,
      "answer": "<title>",
      "topic": "html",
      "aliases": [
        "webdev-32-1-9"
      ],
      "sources": [
        {
          "id": "webdev-32-1-9",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "HTML5 & semantic structure",
          "number": "9",
          "page": 2
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "unresolved",
        "note": "title is important for title links, but no official rule makes one offered tag universally the most critical SEO ranking element. The superlative needs course context or a more precise question.",
        "originalAnswer": "C. <title>",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "Google: title links",
            "url": "https://developers.google.com/search/docs/appearance/title-link?hl=en",
            "term": "title"
          },
          {
            "label": "Google: SEO starter guide",
            "url": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=en",
            "term": "Search Engine Optimization"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "f6d6f6fa6501598b"
    },
    {
      "id": "webdev-32-1-10",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "1",
      "group": "HTML5 & semantic structure",
      "number": "10",
      "prompt": "If you want to add a sidebar containing “Related Topics” or “Important Links” that are not directly part of the main content, which semantic tag should you use?",
      "options": [
        "<nav>",
        "<aside>",
        "<section>",
        "<div>"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 2,
      "answer": "<aside>",
      "topic": "html",
      "aliases": [
        "webdev-32-1-10"
      ],
      "sources": [
        {
          "id": "webdev-32-1-10",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "HTML5 & semantic structure",
          "number": "10",
          "page": 2
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "aside represents tangential content such as related links or a sidebar.",
        "originalAnswer": "B. <aside>",
        "verifiedAnswer": "<aside>",
        "references": [
          {
            "label": "WHATWG: sections",
            "url": "https://html.spec.whatwg.org/multipage/sections.html",
            "term": "article"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "91b95d56ce132a58"
    },
    {
      "id": "webdev-32-8-1",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "8",
      "group": "JavaScript & the DOM",
      "number": "1",
      "prompt": "Which statement best describes the DOM?",
      "options": [
        "programming language used to build websites",
        "-like representation of a web page that JavaScript can access and modify",
        "database that stores HTML files",
        "CSS framework for styling pages"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 3,
      "answer": "-like representation of a web page that JavaScript can access and modify",
      "topic": "javascript",
      "aliases": [
        "webdev-32-8-1"
      ],
      "sources": [
        {
          "id": "webdev-32-8-1",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "JavaScript & the DOM",
          "number": "1",
          "page": 3
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "unresolved",
        "note": "Choice B visibly omits the word tree before -like in the source. The DOM is a node tree, but no complete correct definition is offered as printed.",
        "originalAnswer": "B. -like representation of a web page that JavaScript can access and modify",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "WHATWG: DOM",
            "url": "https://dom.spec.whatwg.org/",
            "term": "getElementById"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "401098f731f8a7a2"
    },
    {
      "id": "webdev-32-8-2",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "8",
      "group": "JavaScript & the DOM",
      "number": "2",
      "prompt": "Given the object const product = { name: \"Keyboard\", price: 50 };, which syntax correctly extracts the price property using ES6 destructuring?",
      "options": [
        "const [ price ] = product;",
        "const product.price = price;",
        "const { product: price };",
        "const { price } = product;"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": 3,
      "answer": "const { price } = product;",
      "topic": "javascript",
      "aliases": [
        "webdev-32-8-2"
      ],
      "sources": [
        {
          "id": "webdev-32-8-2",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "JavaScript & the DOM",
          "number": "2",
          "page": 3
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "Object destructuring uses const { price } = product; array destructuring is a different pattern.",
        "originalAnswer": "D. const { price } = product;",
        "verifiedAnswer": "const { price } = product;",
        "references": [
          {
            "label": "Ecma: ECMAScript 2015",
            "url": "https://262.ecma-international.org/6.0/",
            "term": "ECMAScript 2015"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "668c2815d4258dca"
    },
    {
      "id": "webdev-32-8-3",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "8",
      "group": "JavaScript & the DOM",
      "number": "3",
      "prompt": "Which method returns ALL elements that match a CSS selector?",
      "options": [
        "document.getElementById()",
        "document.querySelector()",
        "document.querySelectorAll()",
        "document.createElement()"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 3,
      "answer": "document.querySelectorAll()",
      "topic": "javascript",
      "aliases": [
        "webdev-32-8-3"
      ],
      "sources": [
        {
          "id": "webdev-32-8-3",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "JavaScript & the DOM",
          "number": "3",
          "page": 3
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "querySelectorAll returns a static NodeList of all matching elements; querySelector returns only the first match.",
        "originalAnswer": "C. document.querySelectorAll()",
        "verifiedAnswer": "document.querySelectorAll()",
        "references": [
          {
            "label": "WHATWG: DOM",
            "url": "https://dom.spec.whatwg.org/",
            "term": "getElementById"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "b579b9ec2b99f0b6"
    },
    {
      "id": "webdev-32-8-4",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "8",
      "group": "JavaScript & the DOM",
      "number": "4",
      "prompt": "When defining an arrow function like const calculateTotal = (...prices) => {}, what exactly does the \"...\" syntax accomplish in this specific context?",
      "options": [
        "It creates a shallow copy of the provided arguments in memory.",
        "It spreads an existing array into individual standalone arguments.",
        "It gathers multiple individual arguments into a single array.",
        "It pauses the function execution until all arguments are provided."
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 3,
      "answer": "It gathers multiple individual arguments into a single array.",
      "topic": "javascript",
      "aliases": [
        "webdev-32-8-4"
      ],
      "sources": [
        {
          "id": "webdev-32-8-4",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "JavaScript & the DOM",
          "number": "4",
          "page": 3
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "In a formal parameter list, ...prices is a rest parameter collecting arguments into an array, not an array-spread expression.",
        "originalAnswer": "C. It gathers multiple individual arguments into a single array.",
        "verifiedAnswer": "It gathers multiple individual arguments into a single array.",
        "references": [
          {
            "label": "Ecma: ECMAScript 2015",
            "url": "https://262.ecma-international.org/6.0/",
            "term": "ECMAScript 2015"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "1c5779fdc5368f02"
    },
    {
      "id": "webdev-32-8-5",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "8",
      "group": "JavaScript & the DOM",
      "number": "5",
      "prompt": "Which of the following is a major advantage of using addEventListener() over inline event attributes (like onclick=\" \")?",
      "options": [
        "Inline attributes are significantly faster to execute by the browser.",
        "addEventListener() is the absolute only way to handle mouse clicks.",
        "It separates JavaScript logic from HTML markup and allows attaching multiple functions to the same event.",
        "It automatically prevents all default browser behaviors for every event type."
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 3,
      "answer": "It separates JavaScript logic from HTML markup and allows attaching multiple functions to the same event.",
      "topic": "javascript",
      "aliases": [
        "webdev-32-8-5"
      ],
      "sources": [
        {
          "id": "webdev-32-8-5",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "JavaScript & the DOM",
          "number": "5",
          "page": 3
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "addEventListener attaches listeners independently of inline HTML handlers and permits multiple distinct listeners for an event type.",
        "originalAnswer": "C. It separates JavaScript logic from HTML markup and allows attaching multiple functions to the same event.",
        "verifiedAnswer": "It separates JavaScript logic from HTML markup and allows attaching multiple functions to the same event.",
        "references": [
          {
            "label": "WHATWG: DOM",
            "url": "https://dom.spec.whatwg.org/",
            "term": "getElementById"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "017458289694a53c"
    },
    {
      "id": "webdev-32-8-6",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "8",
      "group": "JavaScript & the DOM",
      "number": "6",
      "prompt": "How do you typically access the event object (containing target and key) inside an event handler function?",
      "options": [
        "As the first automatic parameter passed into the function by the browser (e.g., function(event)).",
        "By calling a global function named document.getEvent().",
        "By referencing a global property named document.event.",
        "By importing the external Event module at the very top of your script file."
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 3,
      "answer": "As the first automatic parameter passed into the function by the browser (e.g., function(event)).",
      "topic": "javascript",
      "aliases": [
        "webdev-32-8-6"
      ],
      "sources": [
        {
          "id": "webdev-32-8-6",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "JavaScript & the DOM",
          "number": "6",
          "page": 3
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "The event listener callback receives the Event object as its first argument.",
        "originalAnswer": "A. As the first automatic parameter passed into the function by the browser (e.g., function(event)).",
        "verifiedAnswer": "As the first automatic parameter passed into the function by the browser (e.g., function(event)).",
        "references": [
          {
            "label": "WHATWG: DOM",
            "url": "https://dom.spec.whatwg.org/",
            "term": "getElementById"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "0be5aab881d687de"
    },
    {
      "id": "webdev-32-8-7",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "8",
      "group": "JavaScript & the DOM",
      "number": "7",
      "prompt": "What is the default behavior of event propagation (bubbling) when a user clicks an element nested deep inside a parent container?",
      "options": [
        "The event fires strictly on the clicked element and terminates immediately",
        "The event flows strictly from the outermost window root down to the clicked element and stops.",
        "The event spreads horizontally to neighbor (sibling) elements on the same level.",
        "The event triggers on the clicked element first, and then travels upward through its parent elements"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": 3,
      "answer": "The event triggers on the clicked element first, and then travels upward through its parent elements",
      "topic": "javascript",
      "aliases": [
        "webdev-32-8-7"
      ],
      "sources": [
        {
          "id": "webdev-32-8-7",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "JavaScript & the DOM",
          "number": "7",
          "page": 3
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "For a bubbling click event, the target phase precedes bubbling through ancestors. A capture phase can run before the target, and stopPropagation can alter travel.",
        "originalAnswer": "D. The event triggers on the clicked element first, and then travels upward through its parent elements",
        "verifiedAnswer": "The event triggers on the clicked element first, and then travels upward through its parent elements",
        "references": [
          {
            "label": "WHATWG: DOM",
            "url": "https://dom.spec.whatwg.org/",
            "term": "getElementById"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "5c15d39f86f6efe6"
    },
    {
      "id": "webdev-32-8-8",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "8",
      "group": "JavaScript & the DOM",
      "number": "8",
      "prompt": "A programming technique that enables your program to start a task and still be responsive to other events while that task runs",
      "options": [
        "Asynchronous programming",
        "Synchronous programming",
        "Object-oriented programming",
        "Procedural programming"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 4,
      "answer": "Asynchronous programming",
      "topic": "javascript",
      "aliases": [
        "webdev-32-8-8"
      ],
      "sources": [
        {
          "id": "webdev-32-8-8",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "JavaScript & the DOM",
          "number": "8",
          "page": 4
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "Asynchronous work allows the program to remain responsive while pending operations complete.",
        "originalAnswer": "A. Asynchronous programming",
        "verifiedAnswer": "Asynchronous programming",
        "references": [
          {
            "label": "Ecma: ECMAScript 2015",
            "url": "https://262.ecma-international.org/6.0/",
            "term": "ECMAScript 2015"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "356ea5235c4d3f4b"
    },
    {
      "id": "webdev-32-8-9",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "8",
      "group": "JavaScript & the DOM",
      "number": "9",
      "prompt": "Represents the eventual completion (or failure) of an asynchronous operation",
      "options": [
        "Events",
        "Functions",
        "Arrays",
        "Promises"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": 4,
      "answer": "Promises",
      "topic": "javascript",
      "aliases": [
        "webdev-32-8-9"
      ],
      "sources": [
        {
          "id": "webdev-32-8-9",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "JavaScript & the DOM",
          "number": "9",
          "page": 4
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "A Promise represents a future result or failure of an asynchronous computation.",
        "originalAnswer": "D. Promises",
        "verifiedAnswer": "Promises",
        "references": [
          {
            "label": "Ecma: ECMAScript 2015",
            "url": "https://262.ecma-international.org/6.0/",
            "term": "ECMAScript 2015"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "7578fd02cd4d91c2"
    },
    {
      "id": "webdev-32-8-10",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "8",
      "group": "JavaScript & the DOM",
      "number": "10",
      "prompt": "In JSON syntax, what must all property keys and string values be enclosed in?",
      "options": [
        "Single quotes",
        "Parentheses",
        "Double quotes",
        "Square brackets"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 4,
      "answer": "Double quotes",
      "topic": "javascript",
      "aliases": [
        "webdev-32-8-10"
      ],
      "sources": [
        {
          "id": "webdev-32-8-10",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "JavaScript & the DOM",
          "number": "10",
          "page": 4
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "JSON object keys and string values use double quotation marks.",
        "originalAnswer": "C. Double quotes",
        "verifiedAnswer": "Double quotes",
        "references": [
          {
            "label": "Ecma: ECMAScript 2015",
            "url": "https://262.ecma-international.org/6.0/",
            "term": "ECMAScript 2015"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "41813e93f36d3a68"
    },
    {
      "id": "webdev-32-10-1",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "10",
      "group": "CSS & responsive design",
      "number": "1",
      "prompt": "The process of positioning elements on a webpage.",
      "options": [
        "Cascade/Specify",
        "Box Model",
        "CSS Layout",
        "Sharon Cuneta"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 5,
      "answer": "CSS Layout",
      "topic": "css",
      "aliases": [
        "webdev-32-10-1"
      ],
      "sources": [
        {
          "id": "webdev-32-10-1",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "CSS & responsive design",
          "number": "1",
          "page": 5
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "CSS layout determines how boxes are positioned and arranged on a page.",
        "originalAnswer": "C. CSS Layout",
        "verifiedAnswer": "CSS Layout",
        "references": [
          {
            "label": "W3C: Grid",
            "url": "https://www.w3.org/TR/css-grid-2/",
            "term": "two-dimensional"
          },
          {
            "label": "W3C: Flexbox",
            "url": "https://www.w3.org/TR/css-flexbox-1/",
            "term": "column"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "179e0ccbd0030354"
    },
    {
      "id": "webdev-32-10-2",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "10",
      "group": "CSS & responsive design",
      "number": "2",
      "prompt": "An approach in web design that allows the website to adapt to different device screen sizes.",
      "options": [
        "Responsiveness",
        "Flex",
        "Grid",
        "Pepito Manaloto"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 5,
      "answer": "Responsiveness",
      "topic": "css",
      "aliases": [
        "webdev-32-10-2"
      ],
      "sources": [
        {
          "id": "webdev-32-10-2",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "CSS & responsive design",
          "number": "2",
          "page": 5
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "Responsive design adapts layout to viewport and device capabilities.",
        "originalAnswer": "A. Responsiveness",
        "verifiedAnswer": "Responsiveness",
        "references": [
          {
            "label": "W3C: media queries",
            "url": "https://www.w3.org/TR/mediaqueries-4/",
            "term": "touchpads"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "a8b69e766b771010"
    },
    {
      "id": "webdev-32-10-3",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "10",
      "group": "CSS & responsive design",
      "number": "3",
      "prompt": "The object or the item of the element in a box model.",
      "options": [
        "Data",
        "Content",
        "Text",
        "Regine Velasquez"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 5,
      "answer": "Content",
      "topic": "css",
      "aliases": [
        "webdev-32-10-3"
      ],
      "sources": [
        {
          "id": "webdev-32-10-3",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "CSS & responsive design",
          "number": "3",
          "page": 5
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "The content area contains the element’s content; it is distinct from padding, border and margin.",
        "originalAnswer": "B. Content",
        "verifiedAnswer": "Content",
        "references": [
          {
            "label": "W3C: CSS box model",
            "url": "https://www.w3.org/TR/css-box-3/",
            "term": "padding"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "2082a4a3cb7dd9c1"
    },
    {
      "id": "webdev-32-10-4",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "10",
      "group": "CSS & responsive design",
      "number": "4",
      "prompt": "This part of the CSS layout can be used to put additional links, widgets, or other information.",
      "options": [
        "Sidebar",
        "Footer",
        "Header",
        "Wally Bayola"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 5,
      "answer": "Sidebar",
      "topic": "css",
      "aliases": [
        "webdev-32-10-4"
      ],
      "sources": [
        {
          "id": "webdev-32-10-4",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "CSS & responsive design",
          "number": "4",
          "page": 5
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "unresolved",
        "note": "Sidebar is the likely intended answer, but the unrestricted wording also permits links and information in a header or footer. No unique placement is specified.",
        "originalAnswer": "A. Sidebar",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "WHATWG: sections",
            "url": "https://html.spec.whatwg.org/multipage/sections.html",
            "term": "article"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "7713f59378520c4d"
    },
    {
      "id": "webdev-32-10-5",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "10",
      "group": "CSS & responsive design",
      "number": "5",
      "prompt": "What does px stand for?",
      "options": [
        "Pax Silica",
        "Pixel",
        "Percent Ratio",
        "Pei Xing"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 5,
      "answer": "Pixel",
      "topic": "css",
      "aliases": [
        "webdev-32-10-5"
      ],
      "sources": [
        {
          "id": "webdev-32-10-5",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "CSS & responsive design",
          "number": "5",
          "page": 5
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "px denotes a CSS pixel, a reference unit that need not equal a physical device pixel.",
        "originalAnswer": "B. Pixel",
        "verifiedAnswer": "Pixel",
        "references": [
          {
            "label": "W3C: CSS values and units",
            "url": "https://www.w3.org/TR/css-values-4/",
            "term": "case-insensitive"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "dbabe5351ed7f171"
    },
    {
      "id": "webdev-32-10-6",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "10",
      "group": "CSS & responsive design",
      "number": "6",
      "prompt": "It determines which CSS rule is applied when multiple rules target the same element.",
      "options": [
        "Cascading",
        "Bahala na si Batman",
        "Specifying",
        "CSS Layout"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 5,
      "answer": "Cascading",
      "topic": "css",
      "aliases": [
        "webdev-32-10-6",
        "webdev-css-topic-2"
      ],
      "sources": [
        {
          "id": "webdev-32-10-6",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "CSS & responsive design",
          "number": "6",
          "page": 5
        },
        {
          "id": "webdev-css-topic-2",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "2",
          "page": null
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "The cascade chooses the winning declarations when multiple rules apply.",
        "originalAnswer": "A. Cascading",
        "verifiedAnswer": "Cascading",
        "references": [
          {
            "label": "W3C: CSS cascade",
            "url": "https://www.w3.org/TR/css-cascade-5/",
            "term": "specificity"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "368b1a127d94906d"
    },
    {
      "id": "webdev-32-10-7",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "10",
      "group": "CSS & responsive design",
      "number": "7",
      "prompt": "It is a specific screen size where a media query tells the website to change its layout or styling.",
      "options": [
        "Breakthrough",
        "Breakpoint",
        "Breakup",
        "Kathniel"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 5,
      "answer": "Breakpoint",
      "topic": "css",
      "aliases": [
        "webdev-32-10-7"
      ],
      "sources": [
        {
          "id": "webdev-32-10-7",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "CSS & responsive design",
          "number": "7",
          "page": 5
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "A breakpoint is an author-chosen threshold at which responsive conditions change the applied styling.",
        "originalAnswer": "B. Breakpoint",
        "verifiedAnswer": "Breakpoint",
        "references": [
          {
            "label": "W3C: media queries",
            "url": "https://www.w3.org/TR/mediaqueries-4/",
            "term": "touchpads"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "706990cfbfea78b4"
    },
    {
      "id": "webdev-32-10-8",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "10",
      "group": "CSS & responsive design",
      "number": "8",
      "prompt": "It allows an element to move within its container while allowing other content to flow around it",
      "options": [
        "Flexbox",
        "Float",
        "Grid",
        "Barney"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 6,
      "answer": "Float",
      "topic": "css",
      "aliases": [
        "webdev-32-10-8"
      ],
      "sources": [
        {
          "id": "webdev-32-10-8",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "CSS & responsive design",
          "number": "8",
          "page": 6
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "Floats permit surrounding inline content to flow around the floated box.",
        "originalAnswer": "B. Float",
        "verifiedAnswer": "Float",
        "references": [
          {
            "label": "W3C: floats",
            "url": "https://www.w3.org/TR/CSS22/visuren.html#floats",
            "term": "float"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "83ce369efbeded0c"
    },
    {
      "id": "webdev-32-10-9",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "10",
      "group": "CSS & responsive design",
      "number": "9",
      "prompt": "It determines which selector has more priority.",
      "options": [
        "Specialty",
        "Specification",
        "Specificity",
        "Rebisco (Dahil Special ka)"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 6,
      "answer": "Specificity",
      "topic": "css",
      "aliases": [
        "webdev-32-10-9"
      ],
      "sources": [
        {
          "id": "webdev-32-10-9",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "CSS & responsive design",
          "number": "9",
          "page": 6
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "Specificity compares selector weights within the applicable cascade context.",
        "originalAnswer": "C. Specificity",
        "verifiedAnswer": "Specificity",
        "references": [
          {
            "label": "W3C: CSS cascade",
            "url": "https://www.w3.org/TR/css-cascade-5/",
            "term": "specificity"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "02ef572acfe83b01"
    },
    {
      "id": "webdev-32-10-10",
      "sourceId": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "groupId": "10",
      "group": "CSS & responsive design",
      "number": "10",
      "prompt": "An RWD Framework that has mobile-first design, ready CSS styles, and reusable components.",
      "options": [
        "Bootstrap",
        "Tailwind",
        "W3",
        "Jb Suarez (Eh pano kung 3 yan)"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 6,
      "answer": "Bootstrap",
      "topic": "css",
      "aliases": [
        "webdev-32-10-10"
      ],
      "sources": [
        {
          "id": "webdev-32-10-10",
          "sourceId": "webdev-32",
          "section": "3-2",
          "label": "BSIT 3-2",
          "group": "CSS & responsive design",
          "number": "10",
          "page": 6
        }
      ],
      "sections": [
        "3-2"
      ],
      "audit": {
        "status": "verified",
        "note": "Bootstrap is a mobile-first toolkit with reusable components and ready styles. W3 is not the full name of a specified alternative framework in these choices.",
        "originalAnswer": "A. Bootstrap",
        "verifiedAnswer": "Bootstrap",
        "references": [
          {
            "label": "Bootstrap: introduction",
            "url": "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
            "term": "mobile"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "ebb2654e0d4eaf91"
    },
    {
      "id": "webdev-html-topic-1",
      "sourceId": "webdev-html",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "HTML5 & accessibility",
      "number": "1",
      "prompt": "What is the main purpose of HTML5?",
      "options": [
        "To create databases",
        "To structure and organize content on webpages",
        "To edit photos",
        "To create computer hardware"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "To structure and organize content on webpages",
      "topic": "html",
      "aliases": [
        "webdev-html-topic-1"
      ],
      "sources": [
        {
          "id": "webdev-html-topic-1",
          "sourceId": "webdev-html",
          "section": null,
          "label": "HTML topic quiz",
          "group": "HTML5 & accessibility",
          "number": "1",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "HTML describes the structure and semantics of document content.",
        "originalAnswer": "B. To structure and organize content on webpages",
        "verifiedAnswer": "To structure and organize content on webpages",
        "references": [
          {
            "label": "W3C: HTML introduction",
            "url": "https://www.w3.org/TR/html401/intro/intro.html",
            "term": "HyperText Markup"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "b9c8a46d9dbaf2c5"
    },
    {
      "id": "webdev-html-topic-2",
      "sourceId": "webdev-html",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "HTML5 & accessibility",
      "number": "2",
      "prompt": "Which declaration identifies a document as HTML5?",
      "options": [
        "<html5>",
        "<doctype>",
        "<!DOCTYPE html>",
        "<HTML>"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "<!DOCTYPE html>",
      "topic": "html",
      "aliases": [
        "webdev-html-topic-2"
      ],
      "sources": [
        {
          "id": "webdev-html-topic-2",
          "sourceId": "webdev-html",
          "section": null,
          "label": "HTML topic quiz",
          "group": "HTML5 & accessibility",
          "number": "2",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "<!DOCTYPE html> is the standard HTML doctype declaration.",
        "originalAnswer": "C. <!DOCTYPE html>",
        "verifiedAnswer": "<!DOCTYPE html>",
        "references": [
          {
            "label": "WHATWG: HTML syntax",
            "url": "https://html.spec.whatwg.org/multipage/syntax.html",
            "term": "DOCTYPE"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "dfe604931b01167d"
    },
    {
      "id": "webdev-html-topic-3",
      "sourceId": "webdev-html",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "HTML5 & accessibility",
      "number": "3",
      "prompt": "What is semantic HTML?",
      "options": [
        "HTML that only changes the appearance of a webpage",
        "HTML elements that describe the meaning and role of content",
        "HTML used only for images",
        "HTML used to create animations"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "HTML elements that describe the meaning and role of content",
      "topic": "html",
      "aliases": [
        "webdev-html-topic-3"
      ],
      "sources": [
        {
          "id": "webdev-html-topic-3",
          "sourceId": "webdev-html",
          "section": null,
          "label": "HTML topic quiz",
          "group": "HTML5 & accessibility",
          "number": "3",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "Semantic elements describe content roles and meaning rather than only its appearance.",
        "originalAnswer": "B. HTML elements that describe the meaning and role of content",
        "verifiedAnswer": "HTML elements that describe the meaning and role of content",
        "references": [
          {
            "label": "WHATWG: sections",
            "url": "https://html.spec.whatwg.org/multipage/sections.html",
            "term": "article"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "dbdb9fe8a4a21719"
    },
    {
      "id": "webdev-html-topic-4",
      "sourceId": "webdev-html",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "HTML5 & accessibility",
      "number": "4",
      "prompt": "Which HTML element is used for website navigation?",
      "options": [
        "<navigate>",
        "<links>",
        "<nav>",
        "<menu>"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "<nav>",
      "topic": "html",
      "aliases": [
        "webdev-html-topic-4"
      ],
      "sources": [
        {
          "id": "webdev-html-topic-4",
          "sourceId": "webdev-html",
          "section": null,
          "label": "HTML topic quiz",
          "group": "HTML5 & accessibility",
          "number": "4",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "nav represents a section of navigation links; menu represents a list of commands/items rather than the principal navigation landmark.",
        "originalAnswer": "C. <nav>",
        "verifiedAnswer": "<nav>",
        "references": [
          {
            "label": "WHATWG: sections",
            "url": "https://html.spec.whatwg.org/multipage/sections.html",
            "term": "article"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "f8acf43cc2c18afd"
    },
    {
      "id": "webdev-html-topic-9",
      "sourceId": "webdev-html",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "HTML5 & accessibility",
      "number": "9",
      "prompt": "What is the main purpose of web accessibility?",
      "options": [
        "To make websites available only on computers",
        "To make websites usable by people with different abilities",
        "To make websites more colorful",
        "To make websites load more advertisements"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "To make websites usable by people with different abilities",
      "topic": "html",
      "aliases": [
        "webdev-html-topic-9"
      ],
      "sources": [
        {
          "id": "webdev-html-topic-9",
          "sourceId": "webdev-html",
          "section": null,
          "label": "HTML topic quiz",
          "group": "HTML5 & accessibility",
          "number": "9",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "Accessibility makes websites usable by people with different abilities and assistive-technology needs.",
        "originalAnswer": "B. To make websites usable by people with different abilities",
        "verifiedAnswer": "To make websites usable by people with different abilities",
        "references": [
          {
            "label": "W3C: accessibility principles",
            "url": "https://www.w3.org/WAI/fundamentals/accessibility-principles/",
            "term": "keyboard"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "b65275f45ebcf7db"
    },
    {
      "id": "webdev-html-topic-10",
      "sourceId": "webdev-html",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "HTML5 & accessibility",
      "number": "10",
      "prompt": "What does SEO stand for?",
      "options": [
        "Search Engine Optimization",
        "Search Element Organization",
        "Site Engine Operation",
        "Search Entry Optimization"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Search Engine Optimization",
      "topic": "html",
      "aliases": [
        "webdev-html-topic-10"
      ],
      "sources": [
        {
          "id": "webdev-html-topic-10",
          "sourceId": "webdev-html",
          "section": null,
          "label": "HTML topic quiz",
          "group": "HTML5 & accessibility",
          "number": "10",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "SEO expands to Search Engine Optimization.",
        "originalAnswer": "A. Search Engine Optimization",
        "verifiedAnswer": "Search Engine Optimization",
        "references": [
          {
            "label": "Google: SEO starter guide",
            "url": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=en",
            "term": "Search Engine Optimization"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "dc21fbbd437c63b3"
    },
    {
      "id": "webdev-css-topic-1",
      "sourceId": "webdev-css",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "Styling & responsive design",
      "number": "1",
      "prompt": "What does CSS stand for?",
      "options": [
        "Computer Style Sheets",
        "Casckading Style Sheets",
        "Creative Style System",
        "Cascading Style Sheets"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Cascading Style Sheets",
      "topic": "css",
      "aliases": [
        "webdev-css-topic-1"
      ],
      "sources": [
        {
          "id": "webdev-css-topic-1",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "1",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "CSS expands to Cascading Style Sheets.",
        "originalAnswer": "D. Cascading Style Sheets",
        "verifiedAnswer": "Cascading Style Sheets",
        "references": [
          {
            "label": "W3C: what CSS is",
            "url": "https://www.w3.org/Style/CSS/Overview.en.html",
            "term": "Cascading Style Sheets"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "092cc6d91c522784"
    },
    {
      "id": "webdev-css-topic-3",
      "sourceId": "webdev-css",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "Styling & responsive design",
      "number": "3",
      "prompt": "Which selector has the highest specificity?",
      "options": [
        "Universal selector",
        "Type selector",
        "Class selector",
        "ID selector"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "ID selector",
      "topic": "css",
      "aliases": [
        "webdev-css-topic-3"
      ],
      "sources": [
        {
          "id": "webdev-css-topic-3",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "3",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "Among the listed selector types, an ID has greater specificity than a class, type or universal selector.",
        "originalAnswer": "D. ID selector",
        "verifiedAnswer": "ID selector",
        "references": [
          {
            "label": "W3C: CSS cascade",
            "url": "https://www.w3.org/TR/css-cascade-5/",
            "term": "specificity"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "e5c2f975ec4d3ef9"
    },
    {
      "id": "webdev-css-topic-4",
      "sourceId": "webdev-css",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "Styling & responsive design",
      "number": "4",
      "prompt": "What symbol is used for a class selector?",
      "options": [
        "#",
        "*",
        ".",
        "@"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": ".",
      "topic": "css",
      "aliases": [
        "webdev-css-topic-4"
      ],
      "sources": [
        {
          "id": "webdev-css-topic-4",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "4",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "A class selector uses a dot prefix; an ID selector uses a hash prefix.",
        "originalAnswer": "C. .",
        "verifiedAnswer": ".",
        "references": [
          {
            "label": "W3C: CSS cascade",
            "url": "https://www.w3.org/TR/css-cascade-5/",
            "term": "specificity"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "5bc6a56667036160"
    },
    {
      "id": "webdev-css-topic-5",
      "sourceId": "webdev-css",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "Styling & responsive design",
      "number": "5",
      "prompt": "If two CSS rules have the same specificity, which one usually wins?",
      "options": [
        "The rule written first",
        "The rule written later",
        "The rule with fewer properties",
        "The rule with more spaces"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "The rule written later",
      "topic": "css",
      "aliases": [
        "webdev-css-topic-5"
      ],
      "sources": [
        {
          "id": "webdev-css-topic-5",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "5",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "Equal specificity and otherwise equal cascade precedence are resolved by later source order.",
        "originalAnswer": "B. The rule written later",
        "verifiedAnswer": "The rule written later",
        "references": [
          {
            "label": "W3C: CSS cascade",
            "url": "https://www.w3.org/TR/css-cascade-5/",
            "term": "specificity"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "8d060d7769421905"
    },
    {
      "id": "webdev-css-topic-6",
      "sourceId": "webdev-css",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "Styling & responsive design",
      "number": "6",
      "prompt": "Which part of the Box Model creates space between the content and the border?",
      "options": [
        "Margin",
        "Border",
        "Padding",
        "Content"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Padding",
      "topic": "css",
      "aliases": [
        "webdev-css-topic-6"
      ],
      "sources": [
        {
          "id": "webdev-css-topic-6",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "6",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "Padding separates the content area from its border.",
        "originalAnswer": "C. Padding",
        "verifiedAnswer": "Padding",
        "references": [
          {
            "label": "W3C: CSS box model",
            "url": "https://www.w3.org/TR/css-box-3/",
            "term": "padding"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "5e00844291821825"
    },
    {
      "id": "webdev-css-topic-9",
      "sourceId": "webdev-css",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "Styling & responsive design",
      "number": "9",
      "prompt": "Which property controls the direction of flex items?",
      "options": [
        "flex-direction",
        "justify-content",
        "align-items",
        "flex-wrap"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "flex-direction",
      "topic": "css",
      "aliases": [
        "webdev-css-topic-9"
      ],
      "sources": [
        {
          "id": "webdev-css-topic-9",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "9",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "flex-direction chooses the direction of the flex container’s main axis.",
        "originalAnswer": "A. flex-direction",
        "verifiedAnswer": "flex-direction",
        "references": [
          {
            "label": "W3C: Flexbox",
            "url": "https://www.w3.org/TR/css-flexbox-1/",
            "term": "column"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "a02c51ed79b7ab93"
    },
    {
      "id": "webdev-css-topic-10",
      "sourceId": "webdev-css",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "Styling & responsive design",
      "number": "10",
      "prompt": "Which two properties can be used together to perfectly center an item horizontally and vertically?",
      "options": [
        "flex-wrap and flex-flow",
        "order and flex-grow",
        "justify-content and align-items",
        "align-content and flex-basis"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "justify-content and align-items",
      "topic": "css",
      "aliases": [
        "webdev-css-topic-10"
      ],
      "sources": [
        {
          "id": "webdev-css-topic-10",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "10",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "In a flex container, justify-content aligns along the main axis and align-items along the cross axis. Both must be set to suitable values such as center; their names alone do not guarantee centering.",
        "originalAnswer": "C. justify-content and align-items",
        "verifiedAnswer": "justify-content and align-items",
        "references": [
          {
            "label": "W3C: Flexbox",
            "url": "https://www.w3.org/TR/css-flexbox-1/",
            "term": "column"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "eebacf19f612f8a2"
    },
    {
      "id": "webdev-css-topic-12",
      "sourceId": "webdev-css",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "Styling & responsive design",
      "number": "12",
      "prompt": "What is the main purpose of CSS Media Queries?",
      "options": [
        "To make websites responsive to different screen sizes",
        "To create HTML elements",
        "To store website data",
        "To increase internet speed"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "To make websites responsive to different screen sizes",
      "topic": "css",
      "aliases": [
        "webdev-css-topic-12"
      ],
      "sources": [
        {
          "id": "webdev-css-topic-12",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "12",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "Media queries conditionally apply styles based on viewport or other media features.",
        "originalAnswer": "A. To make websites responsive to different screen sizes",
        "verifiedAnswer": "To make websites responsive to different screen sizes",
        "references": [
          {
            "label": "W3C: media queries",
            "url": "https://www.w3.org/TR/mediaqueries-4/",
            "term": "touchpads"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "5221564c7216498a"
    },
    {
      "id": "webdev-css-topic-13",
      "sourceId": "webdev-css",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "Styling & responsive design",
      "number": "13",
      "prompt": "Which rule is used to create a media query in CSS?",
      "options": [
        "@screen",
        "@responsive",
        "@device",
        "@media"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "@media",
      "topic": "css",
      "aliases": [
        "webdev-css-topic-13"
      ],
      "sources": [
        {
          "id": "webdev-css-topic-13",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "13",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "The CSS rule introducing a media query is @media.",
        "originalAnswer": "D. @media",
        "verifiedAnswer": "@media",
        "references": [
          {
            "label": "W3C: media queries",
            "url": "https://www.w3.org/TR/mediaqueries-4/",
            "term": "touchpads"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "488946324e513def"
    },
    {
      "id": "webdev-css-topic-15",
      "sourceId": "webdev-css",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "Styling & responsive design",
      "number": "15",
      "prompt": "Which of the following is a feature of Bootstrap?",
      "options": [
        "Ready-made CSS classes and components",
        "It replaces HTML completely",
        "It can only be used for mobile apps",
        "It does not use CSS"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Ready-made CSS classes and components",
      "topic": "css",
      "aliases": [
        "webdev-css-topic-15"
      ],
      "sources": [
        {
          "id": "webdev-css-topic-15",
          "sourceId": "webdev-css",
          "section": null,
          "label": "CSS topic quiz",
          "group": "Styling & responsive design",
          "number": "15",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "Bootstrap includes ready-made CSS classes and components.",
        "originalAnswer": "A. Ready-made CSS classes and components",
        "verifiedAnswer": "Ready-made CSS classes and components",
        "references": [
          {
            "label": "Bootstrap: introduction",
            "url": "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
            "term": "mobile"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "670a65fe366fcaa8"
    },
    {
      "id": "webdev-php-topic-3",
      "sourceId": "webdev-php",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "PHP fundamentals",
      "number": "3",
      "prompt": "Which of the following is a scalar type that stores only two possible values?",
      "options": [
        "string",
        "integer",
        "boolean",
        "float"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "boolean",
      "topic": "php",
      "aliases": [
        "webdev-php-topic-3"
      ],
      "sources": [
        {
          "id": "webdev-php-topic-3",
          "sourceId": "webdev-php",
          "section": null,
          "label": "PHP topic quiz",
          "group": "PHP fundamentals",
          "number": "3",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "The bool scalar type has the two Boolean values true and false.",
        "originalAnswer": "C. boolean",
        "verifiedAnswer": "boolean",
        "references": [
          {
            "label": "PHP: booleans",
            "url": "https://www.php.net/manual/en/language.types.boolean.php",
            "term": "true"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "c0b3cfdd59b8513d"
    },
    {
      "id": "webdev-php-topic-4",
      "sourceId": "webdev-php",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "PHP fundamentals",
      "number": "4",
      "prompt": "What declaration should be placed at the very top of a file to enforce strict type safety across function calls?",
      "options": [
        "<?php ... ?>",
        "declare(strict_types=1);",
        "session_start();",
        "use School\\Student;"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "declare(strict_types=1);",
      "topic": "php",
      "aliases": [
        "webdev-php-topic-4"
      ],
      "sources": [
        {
          "id": "webdev-php-topic-4",
          "sourceId": "webdev-php",
          "section": null,
          "label": "PHP topic quiz",
          "group": "PHP fundamentals",
          "number": "4",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "declare(strict_types=1) must be the first statement in the PHP file and controls strict scalar typing for relevant calls/returns. It is not a replacement for all validation.",
        "originalAnswer": "B. declare(strict_types=1);",
        "verifiedAnswer": "declare(strict_types=1);",
        "references": [
          {
            "label": "PHP: type declarations",
            "url": "https://www.php.net/manual/en/language.types.declarations.php",
            "term": "strict_types"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "26697e74b1183e05"
    },
    {
      "id": "webdev-php-topic-5",
      "sourceId": "webdev-php",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "PHP fundamentals",
      "number": "5",
      "prompt": "Which modern PHP operator is used for three-way comparisons, commonly in custom array sorting?",
      "options": [
        "Spaceship Operator (<=>)",
        "Null Coalescing Operator (??)",
        "Ternary Operator (?:)",
        "Modern match"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Spaceship Operator (<=>)",
      "topic": "php",
      "aliases": [
        "webdev-php-topic-5"
      ],
      "sources": [
        {
          "id": "webdev-php-topic-5",
          "sourceId": "webdev-php",
          "section": null,
          "label": "PHP topic quiz",
          "group": "PHP fundamentals",
          "number": "5",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "The spaceship operator <=> returns a three-way comparison result, conventionally -1, 0 or 1.",
        "originalAnswer": "A. Spaceship Operator (<=>)",
        "verifiedAnswer": "Spaceship Operator (<=>)",
        "references": [
          {
            "label": "PHP: comparison operators",
            "url": "https://www.php.net/manual/en/language.operators.comparison.php",
            "term": "spaceship"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "d7c8fb224525ed20"
    },
    {
      "id": "webdev-php-topic-6",
      "sourceId": "webdev-php",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "PHP fundamentals",
      "number": "6",
      "prompt": "Which looping and iteration structure is used when continuing iteration depends on dynamic runtime conditions?",
      "options": [
        "foreach",
        "for loop",
        "break",
        "while and do-while"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "while and do-while",
      "topic": "php",
      "aliases": [
        "webdev-php-topic-6"
      ],
      "sources": [
        {
          "id": "webdev-php-topic-6",
          "sourceId": "webdev-php",
          "section": null,
          "label": "PHP topic quiz",
          "group": "PHP fundamentals",
          "number": "6",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "unresolved",
        "note": "while/do-while are typical condition-driven loops, but a for loop also evaluates a runtime continuation expression. The wording does not uniquely distinguish B from D.",
        "originalAnswer": "D. while and do-while",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "PHP: for loops",
            "url": "https://www.php.net/manual/en/control-structures.for.php",
            "term": "expr2"
          },
          {
            "label": "PHP: while loops",
            "url": "https://www.php.net/manual/en/control-structures.while.php",
            "term": "expression"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "573dde4ef0b32fc9"
    },
    {
      "id": "webdev-php-topic-7",
      "sourceId": "webdev-php",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "PHP fundamentals",
      "number": "7",
      "prompt": "What type of array stores values using key-value pairs where meaningful names are used as keys?",
      "options": [
        "Associative Arrays",
        "Standard Arrays",
        "Scalar types",
        "Objects"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Associative Arrays",
      "topic": "php",
      "aliases": [
        "webdev-php-topic-7"
      ],
      "sources": [
        {
          "id": "webdev-php-topic-7",
          "sourceId": "webdev-php",
          "section": null,
          "label": "PHP topic quiz",
          "group": "PHP fundamentals",
          "number": "7",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "An associative array uses meaningful string keys for its values.",
        "originalAnswer": "A. Associative Arrays",
        "verifiedAnswer": "Associative Arrays",
        "references": [
          {
            "label": "PHP: arrays",
            "url": "https://www.php.net/manual/en/language.types.array.php",
            "term": "map"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "756630987a01c9ff"
    },
    {
      "id": "webdev-php-topic-10",
      "sourceId": "webdev-php",
      "subject": "webdev",
      "section": null,
      "groupId": "topic",
      "group": "PHP fundamentals",
      "number": "10",
      "prompt": "Which statement is used to handle an exception if one occurs?",
      "options": [
        "throw",
        "try",
        "Input validation",
        "catch"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "catch",
      "topic": "php",
      "aliases": [
        "webdev-php-topic-10"
      ],
      "sources": [
        {
          "id": "webdev-php-topic-10",
          "sourceId": "webdev-php",
          "section": null,
          "label": "PHP topic quiz",
          "group": "PHP fundamentals",
          "number": "10",
          "page": null
        }
      ],
      "sections": [],
      "audit": {
        "status": "verified",
        "note": "catch handles an exception matched by a preceding try block; throw raises an exception.",
        "originalAnswer": "D. catch",
        "verifiedAnswer": "catch",
        "references": [
          {
            "label": "PHP: try/catch",
            "url": "https://www.php.net/manual/en/control-structures.try-catch.php",
            "term": "catch"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "2d8ca6efb17e4ba0"
    },
    {
      "id": "elective-34-1-1",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "1",
      "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
      "number": "1",
      "prompt": "It is a large group of files or information that does not follow a predefined data model, schema, or organized table format.",
      "options": [
        "Unstructured data",
        "Semi-struchtured data",
        "Unstructured deta",
        "Semi-structured data"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Unstructured data",
      "topic": "datasets",
      "aliases": [
        "elective-34-1-1"
      ],
      "sources": [
        {
          "id": "elective-34-1-1",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
          "number": "1",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Unstructured data lacks a predefined rigid tabular schema, unlike structured tables.",
        "originalAnswer": "A. Unstructured data",
        "verifiedAnswer": "Unstructured data",
        "references": [
          {
            "label": "IBM: unstructured data",
            "url": "https://www.ibm.com/think/topics/unstructured-data",
            "term": "predefined"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "0f51132a432a919b"
    },
    {
      "id": "elective-34-1-2",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "1",
      "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
      "number": "2",
      "prompt": "What does \"API\" stand for?",
      "options": [
        "Ang Pasko I...sumapit",
        "Application Porgramming Interface",
        "Application Programming Interface",
        "Application Progranning Interface"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Application Programming Interface",
      "topic": "datasets",
      "aliases": [
        "elective-34-1-2"
      ],
      "sources": [
        {
          "id": "elective-34-1-2",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
          "number": "2",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "API expands to Application Programming Interface.",
        "originalAnswer": "C. Application Programming Interface",
        "verifiedAnswer": "Application Programming Interface",
        "references": [
          {
            "label": "IBM: application programming interfaces",
            "url": "https://www.ibm.com/think/topics/api",
            "term": "application programming interface"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "19d1ac183e8df57b"
    },
    {
      "id": "elective-34-1-3",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "1",
      "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
      "number": "3",
      "prompt": "Extreme data points that deviate significantly from the rest of the distribution and distort a model's loss function or training weights.",
      "options": [
        "Outliers",
        "Typographical errors",
        "Inconsistent formats",
        "Incorrect values"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Outliers",
      "topic": "datasets",
      "aliases": [
        "elective-34-1-3"
      ],
      "sources": [
        {
          "id": "elective-34-1-3",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
          "number": "3",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Outliers are extreme/unusual observations and can disproportionately affect training and loss.",
        "originalAnswer": "A. Outliers",
        "verifiedAnswer": "Outliers",
        "references": [
          {
            "label": "Google ML: data quality",
            "url": "https://developers.google.com/machine-learning/guides/data-traps/quality?hl=en",
            "term": "outliers"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "14145f030b469c45"
    },
    {
      "id": "elective-34-1-4",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "1",
      "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
      "number": "4",
      "prompt": "In \"Remove Records\", delete rows/columns with null values is best when missing data is minimal or how much?",
      "options": [
        "<.3%",
        "<.5%",
        "<3%",
        "<5%"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "<5%",
      "topic": "datasets",
      "aliases": [
        "elective-34-1-4"
      ],
      "sources": [
        {
          "id": "elective-34-1-4",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
          "number": "4",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "unresolved",
        "note": "No universal percentage makes deleting missing records best. The 5% threshold is a course heuristic that needs the presentation; missingness mechanisms and information loss also matter.",
        "originalAnswer": "D. <5%",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "scikit-learn: missing data",
            "url": "https://scikit-learn.org/stable/modules/impute.html",
            "term": "missing"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "2eb91ce45ad806ec"
    },
    {
      "id": "elective-34-1-5",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "1",
      "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
      "number": "5",
      "prompt": "What is the best example of Categorical Data?",
      "options": [
        "Stock prices",
        "Gender",
        "Daily sales",
        "Age"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Gender",
      "topic": "datasets",
      "aliases": [
        "elective-34-1-5"
      ],
      "sources": [
        {
          "id": "elective-34-1-5",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
          "number": "5",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Gender is categorical in this example; the other listed measurements are numeric quantities.",
        "originalAnswer": "B. Gender",
        "verifiedAnswer": "Gender",
        "references": [
          {
            "label": "Google ML: categorical data",
            "url": "https://developers.google.com/machine-learning/crash-course/categorical-data?hl=en",
            "term": "categorical"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "6d0561d2b404847d"
    },
    {
      "id": "elective-34-1-6",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "1",
      "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
      "number": "6",
      "prompt": "Collections of information grouped by a topic that are freely available for anyone to use, analyze, and share",
      "options": [
        "Primary Data",
        "Secondary Data",
        "Public datasets",
        "Databases"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Public datasets",
      "topic": "datasets",
      "aliases": [
        "elective-34-1-6"
      ],
      "sources": [
        {
          "id": "elective-34-1-6",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
          "number": "6",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Public datasets are the closest offered collection. Public availability does not itself guarantee unrestricted reuse; check the dataset’s license.",
        "originalAnswer": "C. Public datasets",
        "verifiedAnswer": "Public datasets",
        "references": [
          {
            "label": "Data.gov: open government data",
            "url": "https://data.gov/",
            "term": "data"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "34021db9521cfa89"
    },
    {
      "id": "elective-34-1-7",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "1",
      "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
      "number": "7",
      "prompt": "It is the initial step in data analysis where we examine the data to understand what it contains, discover patterns, and identify possible problems.",
      "options": [
        "Data Explanation",
        "Data Gathering",
        "Data Exploration",
        "Data Analysis"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Data Exploration",
      "topic": "datasets",
      "aliases": [
        "elective-34-1-7"
      ],
      "sources": [
        {
          "id": "elective-34-1-7",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
          "number": "7",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Data exploration examines distributions, patterns and potential issues before modeling.",
        "originalAnswer": "C. Data Exploration",
        "verifiedAnswer": "Data Exploration",
        "references": [
          {
            "label": "NIST: exploratory data analysis",
            "url": "https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm",
            "term": "Exploratory"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "15b207979ebf0f6e"
    },
    {
      "id": "elective-34-1-8",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "1",
      "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
      "number": "8",
      "prompt": "What does \"EDA\" stand for?",
      "options": [
        "Exam Daw AAAAAAAAAAAAA",
        "Electronic Design Automation",
        "Event-Driven Architecture",
        "Exploratory Data Analysis"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Exploratory Data Analysis",
      "topic": "datasets",
      "aliases": [
        "elective-34-1-8"
      ],
      "sources": [
        {
          "id": "elective-34-1-8",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
          "number": "8",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "EDA expands to Exploratory Data Analysis.",
        "originalAnswer": "D. Exploratory Data Analysis",
        "verifiedAnswer": "Exploratory Data Analysis",
        "references": [
          {
            "label": "NIST: exploratory data analysis",
            "url": "https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm",
            "term": "Exploratory"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "846023003d51563a"
    },
    {
      "id": "elective-34-1-9",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "1",
      "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
      "number": "9",
      "prompt": "Learns or uses a model of the environment’s dynamics to plan actions ahead of time.",
      "options": [
        "Model-Based RL",
        "One-Hot Encoding",
        "Label Encoding",
        "Model-Free RL"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Model-Based RL",
      "topic": "datasets",
      "aliases": [
        "elective-34-1-9"
      ],
      "sources": [
        {
          "id": "elective-34-1-9",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
          "number": "9",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Model-based RL uses an environment dynamics model for planning, unlike model-free methods.",
        "originalAnswer": "A. Model-Based RL",
        "verifiedAnswer": "Model-Based RL",
        "references": [
          {
            "label": "OpenAI Spinning Up: model-based RL",
            "url": "https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html",
            "term": "model-based"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "b10f0d922e93dc74"
    },
    {
      "id": "elective-34-1-10",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "1",
      "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
      "number": "10",
      "prompt": "Groups similar data points together based on their relationships.",
      "options": [
        "Examples",
        "Targets",
        "Features",
        "Clustering"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Clustering",
      "topic": "datasets",
      "aliases": [
        "elective-34-1-10"
      ],
      "sources": [
        {
          "id": "elective-34-1-10",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "DATASETS AND MACHINE LEARNING WORKFLOW",
          "number": "10",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Clustering groups similar observations according to a similarity or relationship criterion.",
        "originalAnswer": "D. Clustering",
        "verifiedAnswer": "Clustering",
        "references": [
          {
            "label": "scikit-learn: clustering",
            "url": "https://scikit-learn.org/stable/modules/clustering.html",
            "term": "clusters"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "1af6e948052aeec5"
    },
    {
      "id": "elective-34-5-1",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "5",
      "group": "IMAGE CLASSIFICATION",
      "number": "1",
      "prompt": "What is an epoch?",
      "options": [
        "A sample of data to be fed to a model",
        "A framework",
        "One complete pass through the training dataset",
        "One weight update after processing one batch."
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "One complete pass through the training dataset",
      "topic": "training",
      "aliases": [
        "elective-34-5-1",
        "elective-33-2-13",
        "elective-34-3-3"
      ],
      "sources": [
        {
          "id": "elective-34-5-1",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "IMAGE CLASSIFICATION",
          "number": "1",
          "page": null
        },
        {
          "id": "elective-33-2-13",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Model training & evaluation",
          "number": "13",
          "page": 3
        },
        {
          "id": "elective-34-3-3",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "AUDIO CLASSIFICATION",
          "number": "3",
          "page": null
        }
      ],
      "sections": [
        "3-4",
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "An epoch is one iteration over the full training dataset in the ordinary finite-dataset setting.",
        "originalAnswer": "C. One complete pass through the training dataset",
        "verifiedAnswer": "One complete pass through the training dataset",
        "references": [
          {
            "label": "Keras: training API",
            "url": "https://keras.io/api/models/model_training_apis/",
            "term": "epochs"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "79c419e8e9cc2aa6"
    },
    {
      "id": "elective-34-5-2",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "5",
      "group": "IMAGE CLASSIFICATION",
      "number": "2",
      "prompt": "What is validation?",
      "options": [
        "How well the model does on a separate set of images it has never seen during weight updates.",
        "How well the model does on the images it's learning from.",
        "Overfitting",
        "Underfitting"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "How well the model does on a separate set of images it has never seen during weight updates.",
      "topic": "training",
      "aliases": [
        "elective-34-5-2"
      ],
      "sources": [
        {
          "id": "elective-34-5-2",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "IMAGE CLASSIFICATION",
          "number": "2",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Validation evaluates held-out data that is not used for fitting weight updates and can guide model choices. It is not the final unbiased test set.",
        "originalAnswer": "A. How well the model does on a separate set of images it has never seen during weight updates.",
        "verifiedAnswer": "How well the model does on a separate set of images it has never seen during weight updates.",
        "references": [
          {
            "label": "Keras: training API",
            "url": "https://keras.io/api/models/model_training_apis/",
            "term": "epochs"
          },
          {
            "label": "scikit-learn: validation and test splits",
            "url": "https://scikit-learn.org/stable/modules/cross_validation.html",
            "term": "validation"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "10b6a81e46aa9c51"
    },
    {
      "id": "elective-34-5-3",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "5",
      "group": "IMAGE CLASSIFICATION",
      "number": "3",
      "prompt": "A type of image classification that can be more than 2 categories, but only ONE label per image.",
      "options": [
        "Binary",
        "Multi-class",
        "Multi-lable",
        "Multi-label"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Multi-class",
      "topic": "images",
      "aliases": [
        "elective-34-5-3"
      ],
      "sources": [
        {
          "id": "elective-34-5-3",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "IMAGE CLASSIFICATION",
          "number": "3",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Multiclass classification chooses one of more than two mutually exclusive labels per instance.",
        "originalAnswer": "B. Multi-class",
        "verifiedAnswer": "Multi-class",
        "references": [
          {
            "label": "scikit-learn: multiclass and multilabel",
            "url": "https://scikit-learn.org/stable/modules/multiclass.html",
            "term": "multilabel"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "5bda7987935b19aa"
    },
    {
      "id": "elective-34-5-4",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "5",
      "group": "IMAGE CLASSIFICATION",
      "number": "4",
      "prompt": "It is the general family of models used for images.",
      "options": [
        "CNN",
        "CBC",
        "CCC",
        "COM"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "CNN",
      "topic": "images",
      "aliases": [
        "elective-34-5-4"
      ],
      "sources": [
        {
          "id": "elective-34-5-4",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "IMAGE CLASSIFICATION",
          "number": "4",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "CNNs are a common model family for visual data among the offered alternatives; they are not the only possible image architecture.",
        "originalAnswer": "A. CNN",
        "verifiedAnswer": "CNN",
        "references": [
          {
            "label": "Keras: convolution layers",
            "url": "https://keras.io/api/layers/convolution_layers/convolution2d/",
            "term": "convolution"
          },
          {
            "label": "Keras: image classification",
            "url": "https://keras.io/examples/vision/image_classification_from_scratch/",
            "term": "augmentation"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "ecda42bd49fcd257"
    },
    {
      "id": "elective-34-5-5",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "5",
      "group": "IMAGE CLASSIFICATION",
      "number": "5",
      "prompt": "What is the main role of an API Endpoint in machine learning deployment?",
      "options": [
        "To train the model to predict faster and better using GPUs",
        "To convert images into raw CSV files",
        "To provide a specific web address that receives input and returns the model’s prediction",
        "To automatically annotate and clean image inputs from the users"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "To provide a specific web address that receives input and returns the model’s prediction",
      "topic": "images",
      "aliases": [
        "elective-34-5-5"
      ],
      "sources": [
        {
          "id": "elective-34-5-5",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "IMAGE CLASSIFICATION",
          "number": "5",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "A prediction endpoint accepts inputs and returns inference outputs at a defined HTTP route.",
        "originalAnswer": "C. To provide a specific web address that receives input and returns the model’s prediction",
        "verifiedAnswer": "To provide a specific web address that receives input and returns the model’s prediction",
        "references": [
          {
            "label": "TensorFlow: prediction REST API",
            "url": "https://www.tensorflow.org/tfx/serving/api_rest",
            "term": "predict"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "996e1630ee6e3216"
    },
    {
      "id": "elective-34-5-6",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "5",
      "group": "IMAGE CLASSIFICATION",
      "number": "6",
      "prompt": "A deployed ML application is tested with 67 users sending prediction requests all at the same time, this is an example of?",
      "options": [
        "Unit Testing",
        "Load Testing",
        "User Acceptance Testing (UAT)",
        "Model Training"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Load Testing",
      "topic": "images",
      "aliases": [
        "elective-34-5-6"
      ],
      "sources": [
        {
          "id": "elective-34-5-6",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "IMAGE CLASSIFICATION",
          "number": "6",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Concurrent requests from many users exercise application load, rather than only isolated unit behavior.",
        "originalAnswer": "B. Load Testing",
        "verifiedAnswer": "Load Testing",
        "references": [
          {
            "label": "Microsoft: load testing",
            "url": "https://learn.microsoft.com/en-us/azure/load-testing/overview-what-is-azure-load-testing",
            "term": "load"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "431373147413a8b6"
    },
    {
      "id": "elective-34-5-7",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "5",
      "group": "IMAGE CLASSIFICATION",
      "number": "7",
      "prompt": "What is the key difference between data preprocessing and data augmentation?",
      "options": [
        "Preprocessing happens after training; augmentation happens before training",
        "They are the same process — the terms are used interchangeably",
        "Preprocessing standardizes existing images; augmentation creates new variations of images to expand the training set",
        "Preprocessing is only used for object detection; augmentation is only used for classification"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Preprocessing standardizes existing images; augmentation creates new variations of images to expand the training set",
      "topic": "images",
      "aliases": [
        "elective-34-5-7"
      ],
      "sources": [
        {
          "id": "elective-34-5-7",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "IMAGE CLASSIFICATION",
          "number": "7",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Preprocessing standardizes input representation; augmentation adds transformed training examples. Both must avoid leaking information from evaluation data.",
        "originalAnswer": "C. Preprocessing standardizes existing images; augmentation creates new variations of images to expand the training set",
        "verifiedAnswer": "Preprocessing standardizes existing images; augmentation creates new variations of images to expand the training set",
        "references": [
          {
            "label": "Keras: image classification",
            "url": "https://keras.io/examples/vision/image_classification_from_scratch/",
            "term": "augmentation"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "4dd50311acf81b1b"
    },
    {
      "id": "elective-34-5-8",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "5",
      "group": "IMAGE CLASSIFICATION",
      "number": "8",
      "prompt": "How does labeling speed generally compare between manual labeling and semi-automated labeling?",
      "options": [
        "Manual labeling scales linearly with dataset size since every label is hand-drawn; semi-automated labeling is generally faster since humans only review/correct model-generated draft labels",
        "Semi-automated labeling is only faster for text data, not images",
        "Both approaches take the same amount of time, since a human must always draw the final label regardless of method",
        "Manual labeling is always faster because there's no model inference step involved"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Manual labeling scales linearly with dataset size since every label is hand-drawn; semi-automated labeling is generally faster since humans only review/correct model-generated draft labels",
      "topic": "images",
      "aliases": [
        "elective-34-5-8"
      ],
      "sources": [
        {
          "id": "elective-34-5-8",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "IMAGE CLASSIFICATION",
          "number": "8",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Model-assisted labeling produces draft labels for human review and can improve throughput. Classification labels need not be hand-drawn, and speed gains depend on prediction quality.",
        "originalAnswer": "A. Manual labeling scales linearly with dataset size since every label is hand-drawn; semi-automated labeling is generally faster since humans only review/correct model-generated draft labels",
        "verifiedAnswer": "Manual labeling scales linearly with dataset size since every label is hand-drawn; semi-automated labeling is generally faster since humans only review/correct model-generated draft labels",
        "references": [
          {
            "label": "AWS: automated data labeling",
            "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html",
            "term": "human"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "03be2e68cd7ecac7"
    },
    {
      "id": "elective-34-5-9",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "5",
      "group": "IMAGE CLASSIFICATION",
      "number": "9",
      "prompt": "When to use Recall?",
      "options": [
        "When the dataset is perfectly balanced and classes are equal",
        "When false negatives are important to avoid",
        "When false positives are more harmful than false negatives",
        "When you want to calculate the total overall accuracy of all predictions"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "When false negatives are important to avoid",
      "topic": "training",
      "aliases": [
        "elective-34-5-9"
      ],
      "sources": [
        {
          "id": "elective-34-5-9",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "IMAGE CLASSIFICATION",
          "number": "9",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Recall measures how many actual positives are found and is important when false negatives are costly.",
        "originalAnswer": "B. When false negatives are important to avoid",
        "verifiedAnswer": "When false negatives are important to avoid",
        "references": [
          {
            "label": "Google ML: classification metrics",
            "url": "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall?hl=en",
            "term": "false"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "d52e6f7010d79d69"
    },
    {
      "id": "elective-34-5-10",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "5",
      "group": "IMAGE CLASSIFICATION",
      "number": "10",
      "prompt": "You are evaluating an image classification model on an imbalanced dataset. The model gets a Precision of 0.80 and a Recall of 0.60. Which of the following is the CORRECT F1-Score of the model?",
      "options": [
        "0.68",
        "68%",
        "68.5%",
        "68.6%"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "68.6%",
      "topic": "training",
      "aliases": [
        "elective-34-5-10"
      ],
      "sources": [
        {
          "id": "elective-34-5-10",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "IMAGE CLASSIFICATION",
          "number": "10",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "F1 = 2PR/(P+R) = 2(0.80)(0.60)/1.40 = 0.685714..., or 68.6% rounded to one decimal place. D is correct.",
        "originalAnswer": "D. 68.6%",
        "verifiedAnswer": "68.6%",
        "references": [
          {
            "label": "scikit-learn: F1 score",
            "url": "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.f1_score.html",
            "term": "harmonic"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "4712129980def521"
    },
    {
      "id": "elective-34-3-1",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "3",
      "group": "AUDIO CLASSIFICATION",
      "number": "1",
      "prompt": "The __________ is first captured by the computer, either as a recording or a live stream, and then it is divided into brief segments of a few seconds each.",
      "options": [
        "Linear Classifier",
        "Audio Waves",
        "Audio Datasets"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Audio Waves",
      "topic": "audio",
      "aliases": [
        "elective-34-3-1"
      ],
      "sources": [
        {
          "id": "elective-34-3-1",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "AUDIO CLASSIFICATION",
          "number": "1",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "The input is captured audio and may be split into clips/segments; Audio Waves is the intended choice here.",
        "originalAnswer": "B. Audio Waves",
        "verifiedAnswer": "Audio Waves",
        "references": [
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "3cef011ef1cb7f7d"
    },
    {
      "id": "elective-34-3-2",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "3",
      "group": "AUDIO CLASSIFICATION",
      "number": "2",
      "prompt": "A kind of deep learning model created to automatically examine and identify patterns in visual data, like a spectrogram.",
      "options": [
        "Convolutional Neural Network Architecture",
        "Flattening & Dense Layers",
        "Annotation Paradigms"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Convolutional Neural Network Architecture",
      "topic": "audio",
      "aliases": [
        "elective-34-3-2"
      ],
      "sources": [
        {
          "id": "elective-34-3-2",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "AUDIO CLASSIFICATION",
          "number": "2",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "A convolutional neural network can learn local patterns in spectrograms, which are two-dimensional visual representations of audio.",
        "originalAnswer": "A. Convolutional Neural Network Architecture",
        "verifiedAnswer": "Convolutional Neural Network Architecture",
        "references": [
          {
            "label": "Keras: convolution layers",
            "url": "https://keras.io/api/layers/convolution_layers/convolution2d/",
            "term": "convolution"
          },
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "237d9ff300c6f687"
    },
    {
      "id": "elective-34-3-4",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "3",
      "group": "AUDIO CLASSIFICATION",
      "number": "4",
      "prompt": "In music analysis, ___________ is frequently represented.",
      "options": [
        "Tempo",
        "Voice",
        "Harmonic Content"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Harmonic Content",
      "topic": "audio",
      "aliases": [
        "elective-34-3-4"
      ],
      "sources": [
        {
          "id": "elective-34-3-4",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "AUDIO CLASSIFICATION",
          "number": "4",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "unresolved",
        "note": "Both tempo and harmonic content are routinely represented in music analysis. The incomplete stem gives no feature or representation that selects one uniquely.",
        "originalAnswer": "C. Harmonic Content",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "librosa: music features",
            "url": "https://librosa.org/doc/0.10.2/feature.html",
            "term": "tempo"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "b20f23b1310f54c3"
    },
    {
      "id": "elective-34-3-5",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "3",
      "group": "AUDIO CLASSIFICATION",
      "number": "5",
      "prompt": "Refers to a compilation of audio recordings featuring spoken words and phrases.",
      "options": [
        "Speech Datasets",
        "Music Datasets",
        "Sound Isolation"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Speech Datasets",
      "topic": "audio",
      "aliases": [
        "elective-34-3-5"
      ],
      "sources": [
        {
          "id": "elective-34-3-5",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "AUDIO CLASSIFICATION",
          "number": "5",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "A speech dataset contains recordings of spoken language, unlike music-only datasets.",
        "originalAnswer": "A. Speech Datasets",
        "verifiedAnswer": "Speech Datasets",
        "references": [
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          },
          {
            "label": "Google AudioSet: speech ontology",
            "url": "https://research.google.com/audioset/ontology/speech_1.html",
            "term": "Speech"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "fbeabe46ed7243f6"
    },
    {
      "id": "elective-34-3-6",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "3",
      "group": "AUDIO CLASSIFICATION",
      "number": "6",
      "prompt": "Which is NOT a Python Library that can be used for audio classification?",
      "options": [
        "TensorFlow",
        "Keras",
        "Pandas"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Pandas",
      "topic": "audio",
      "aliases": [
        "elective-34-3-6"
      ],
      "sources": [
        {
          "id": "elective-34-3-6",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "AUDIO CLASSIFICATION",
          "number": "6",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "unresolved",
        "note": "Pandas is not a neural-network framework, but it can support data preparation in an audio-classification pipeline. The broad phrase can be used makes C an invalid universal exclusion.",
        "originalAnswer": "C. Pandas",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "pandas: package overview",
            "url": "https://pandas.pydata.org/docs/getting_started/overview.html",
            "term": "manipulation"
          },
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "e9500a8bd2c91617"
    },
    {
      "id": "elective-34-3-7",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "3",
      "group": "AUDIO CLASSIFICATION",
      "number": "7",
      "prompt": "The first thing they do is turn the sound into a picture called a __________, which looks like a colorful heatmap showing which frequencies are loud or quiet at each moment.",
      "options": [
        "Spectre",
        "Feature Maps",
        "Spectrogram"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Spectrogram",
      "topic": "audio",
      "aliases": [
        "elective-34-3-7"
      ],
      "sources": [
        {
          "id": "elective-34-3-7",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "AUDIO CLASSIFICATION",
          "number": "7",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "A spectrogram represents frequency content and magnitude over time, often visualized as a heat map.",
        "originalAnswer": "C. Spectrogram",
        "verifiedAnswer": "Spectrogram",
        "references": [
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "554ade5ec40af13d"
    },
    {
      "id": "elective-34-3-8",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "3",
      "group": "AUDIO CLASSIFICATION",
      "number": "8",
      "prompt": "The speed at which the signal changes sign; helpful for differentiating between different kinds of sounds, such as music and speech.",
      "options": [
        "Audio datasets",
        "Zero-Crossing Rate",
        "MFCCS"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Zero-Crossing Rate",
      "topic": "audio",
      "aliases": [
        "elective-34-3-8"
      ],
      "sources": [
        {
          "id": "elective-34-3-8",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "AUDIO CLASSIFICATION",
          "number": "8",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Zero-crossing rate measures sign changes in a time-domain signal.",
        "originalAnswer": "B. Zero-Crossing Rate",
        "verifiedAnswer": "Zero-Crossing Rate",
        "references": [
          {
            "label": "librosa: zero-crossing rate",
            "url": "https://librosa.org/doc/0.11.0/generated/librosa.feature.zero_crossing_rate.html",
            "term": "zero"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "b00ef8833d307e4b"
    },
    {
      "id": "elective-34-3-9",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "3",
      "group": "AUDIO CLASSIFICATION",
      "number": "9",
      "prompt": "Which step in the CNN Architecture finds local patterns in the input data?",
      "options": [
        "Flattening & Dense Layers",
        "Relu function",
        "Convolutional Layer"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Convolutional Layer",
      "topic": "audio",
      "aliases": [
        "elective-34-3-9"
      ],
      "sources": [
        {
          "id": "elective-34-3-9",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "AUDIO CLASSIFICATION",
          "number": "9",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Convolution layers learn filters for local receptive fields; dense layers and ReLU have different roles.",
        "originalAnswer": "C. Convolutional Layer",
        "verifiedAnswer": "Convolutional Layer",
        "references": [
          {
            "label": "Keras: convolution layers",
            "url": "https://keras.io/api/layers/convolution_layers/convolution2d/",
            "term": "convolution"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "8d420d7c291b4032"
    },
    {
      "id": "elective-34-3-10",
      "sourceId": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "groupId": "3",
      "group": "AUDIO CLASSIFICATION",
      "number": "10",
      "prompt": "Is the process of teaching an artificial intelligence (AI) or machine learning system to understand, classify, or generate audio data.",
      "options": [
        "Model training",
        "Feature Extraction",
        "Valence"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": null,
      "answer": "Model training",
      "topic": "audio",
      "aliases": [
        "elective-34-3-10"
      ],
      "sources": [
        {
          "id": "elective-34-3-10",
          "sourceId": "elective-34",
          "section": "3-4",
          "label": "BSIT 3-4",
          "group": "AUDIO CLASSIFICATION",
          "number": "10",
          "page": null
        }
      ],
      "sections": [
        "3-4"
      ],
      "audit": {
        "status": "verified",
        "note": "Model training fits model parameters from examples so a model can learn patterns in audio.",
        "originalAnswer": "A. Model training",
        "verifiedAnswer": "Model training",
        "references": [
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          },
          {
            "label": "Keras: training API",
            "url": "https://keras.io/api/models/model_training_apis/",
            "term": "epochs"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "9676d4c7a9c88ff5"
    },
    {
      "id": "elective-33-1-1",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "1",
      "group": "Datasets & ML workflow",
      "number": "1",
      "prompt": "During the machine learning workflow, which dataset split is primarily used to test the model and tweak its settings to improve accuracy?",
      "options": [
        "Deployment set",
        "Testing set",
        "Validation set",
        "Training set"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 1,
      "answer": "Validation set",
      "topic": "datasets",
      "aliases": [
        "elective-33-1-1"
      ],
      "sources": [
        {
          "id": "elective-33-1-1",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Datasets & ML workflow",
          "number": "1",
          "page": 1
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Validation data guides choices and hyperparameter tuning; test data should remain held out for final evaluation.",
        "originalAnswer": "C. Validation set",
        "verifiedAnswer": "Validation set",
        "references": [
          {
            "label": "scikit-learn: validation and test splits",
            "url": "https://scikit-learn.org/stable/modules/cross_validation.html",
            "term": "validation"
          },
          {
            "label": "Keras: training API",
            "url": "https://keras.io/api/models/model_training_apis/",
            "term": "epochs"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "cf28e2547671032d"
    },
    {
      "id": "elective-33-1-2",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "1",
      "group": "Datasets & ML workflow",
      "number": "2",
      "prompt": "What is the final step in the machine learning workflow sequence presented in the materials?",
      "options": [
        "Monitoring and Maintenance",
        "Model Training and Selection",
        "Model Deployment",
        "Data Collection and Preparation"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 1,
      "answer": "Monitoring and Maintenance",
      "topic": "datasets",
      "aliases": [
        "elective-33-1-2"
      ],
      "sources": [
        {
          "id": "elective-33-1-2",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Datasets & ML workflow",
          "number": "2",
          "page": 1
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "unresolved",
        "note": "Monitoring and maintenance is a normal post-deployment activity, but the exact final step presented in the missing materials cannot be confirmed from a general lifecycle reference.",
        "originalAnswer": "A. Monitoring and Maintenance",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "Google Cloud: ML production lifecycle",
            "url": "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning?hl=en",
            "term": "monitor"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "0b58fc2603fdc29f"
    },
    {
      "id": "elective-33-1-3",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "1",
      "group": "Datasets & ML workflow",
      "number": "3",
      "prompt": "What is one importance of Data Gathering and Preparation?",
      "options": [
        "Increase errors",
        "Reduce data accuracy",
        "Create biased data",
        "Improve model accuracy and reliability"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": 1,
      "answer": "Improve model accuracy and reliability",
      "topic": "datasets",
      "aliases": [
        "elective-33-1-3"
      ],
      "sources": [
        {
          "id": "elective-33-1-3",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Datasets & ML workflow",
          "number": "3",
          "page": 1
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Relevant, reliable data preparation supports model reliability and accuracy; the alternatives describe harmful goals.",
        "originalAnswer": "D. Improve model accuracy and reliability",
        "verifiedAnswer": "Improve model accuracy and reliability",
        "references": [
          {
            "label": "Google ML: data quality",
            "url": "https://developers.google.com/machine-learning/guides/data-traps/quality?hl=en",
            "term": "outliers"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "f6495f2a1633634f"
    },
    {
      "id": "elective-33-1-4",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "1",
      "group": "Datasets & ML workflow",
      "number": "4",
      "prompt": "In the predictive modeling development pipeline, which step immediately follows 'Evaluate performance'?",
      "options": [
        "Tune hyperparameters",
        "Understand the data",
        "Split the data",
        "Define the problem"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 1,
      "answer": "Tune hyperparameters",
      "topic": "datasets",
      "aliases": [
        "elective-33-1-4"
      ],
      "sources": [
        {
          "id": "elective-33-1-4",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Datasets & ML workflow",
          "number": "4",
          "page": 1
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "unresolved",
        "note": "Evaluation and tuning are iterative. The exact immediately-next pipeline step depends on the missing diagram/material, so the keyed order cannot be independently established.",
        "originalAnswer": "A. Tune hyperparameters",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "scikit-learn: validation and test splits",
            "url": "https://scikit-learn.org/stable/modules/cross_validation.html",
            "term": "validation"
          },
          {
            "label": "Google Cloud: ML production lifecycle",
            "url": "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning?hl=en",
            "term": "monitor"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "a592cdf4a6af3892"
    },
    {
      "id": "elective-33-1-5",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "1",
      "group": "Datasets & ML workflow",
      "number": "5",
      "prompt": "How do the core concepts of data exploration and data visualization differ in the context of data preparation?",
      "options": [
        "Exploration evaluates statistics, while visualization translates data into graphics.",
        "Exploration removes duplicates, while visualization scales numerical features.",
        "Exploration cleans raw data, while visualization splits dataset for testing.",
        "Exploration trains the models, while visualization debugs final deployments."
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 1,
      "answer": "Exploration evaluates statistics, while visualization translates data into graphics.",
      "topic": "datasets",
      "aliases": [
        "elective-33-1-5"
      ],
      "sources": [
        {
          "id": "elective-33-1-5",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Datasets & ML workflow",
          "number": "5",
          "page": 1
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Exploration examines data statistically and qualitatively, while visualization presents information graphically; the two activities overlap and are complementary.",
        "originalAnswer": "A. Exploration evaluates statistics, while visualization translates data into graphics.",
        "verifiedAnswer": "Exploration evaluates statistics, while visualization translates data into graphics.",
        "references": [
          {
            "label": "NIST: exploratory data analysis",
            "url": "https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm",
            "term": "Exploratory"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "fc24908bcce16245"
    },
    {
      "id": "elective-33-1-6",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "1",
      "group": "Datasets & ML workflow",
      "number": "6",
      "prompt": "What should be removed during Data Cleaning?",
      "options": [
        "Relevant data",
        "Training Data",
        "Useful Features",
        "Duplicates and errors"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": 2,
      "answer": "Duplicates and errors",
      "topic": "datasets",
      "aliases": [
        "elective-33-1-6"
      ],
      "sources": [
        {
          "id": "elective-33-1-6",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Datasets & ML workflow",
          "number": "6",
          "page": 2
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Data cleaning addresses erroneous observations and unintended duplicates; legitimate repeated observations should not be discarded indiscriminately.",
        "originalAnswer": "D. Duplicates and errors",
        "verifiedAnswer": "Duplicates and errors",
        "references": [
          {
            "label": "Google ML: data quality",
            "url": "https://developers.google.com/machine-learning/guides/data-traps/quality?hl=en",
            "term": "outliers"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "1df5ea23149f6a1c"
    },
    {
      "id": "elective-33-1-7",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "1",
      "group": "Datasets & ML workflow",
      "number": "7",
      "prompt": "According to the dataset splits, which three sets are commonly used in machine learning?",
      "options": [
        "Training, validation, and test sets",
        "Independent, dependent, and continuous sets",
        "Supervised, unsupervised, and reward set",
        "Gathering, cleaning, and deployment"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 2,
      "answer": "Training, validation, and test sets",
      "topic": "datasets",
      "aliases": [
        "elective-33-1-7"
      ],
      "sources": [
        {
          "id": "elective-33-1-7",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Datasets & ML workflow",
          "number": "7",
          "page": 2
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Training, validation and test are the commonly separated dataset roles.",
        "originalAnswer": "A. Training, validation, and test sets",
        "verifiedAnswer": "Training, validation, and test sets",
        "references": [
          {
            "label": "scikit-learn: validation and test splits",
            "url": "https://scikit-learn.org/stable/modules/cross_validation.html",
            "term": "validation"
          },
          {
            "label": "Keras: training API",
            "url": "https://keras.io/api/models/model_training_apis/",
            "term": "epochs"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "6769d165cb8029f3"
    },
    {
      "id": "elective-33-1-8",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "1",
      "group": "Datasets & ML workflow",
      "number": "8",
      "prompt": "Which data preparation phase involves identifying and managing outliers?",
      "options": [
        "Data Exploration",
        "Data Cleaning",
        "Data Gathering",
        "Data Transformation"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 2,
      "answer": "Data Cleaning",
      "topic": "datasets",
      "aliases": [
        "elective-33-1-8"
      ],
      "sources": [
        {
          "id": "elective-33-1-8",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Datasets & ML workflow",
          "number": "8",
          "page": 2
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Managing problematic outliers is part of data cleaning, while exploration can first reveal them. Outliers should be investigated rather than automatically removed.",
        "originalAnswer": "B. Data Cleaning",
        "verifiedAnswer": "Data Cleaning",
        "references": [
          {
            "label": "Google ML: data quality",
            "url": "https://developers.google.com/machine-learning/guides/data-traps/quality?hl=en",
            "term": "outliers"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "f0b1207693af36b8"
    },
    {
      "id": "elective-33-1-9",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "1",
      "group": "Datasets & ML workflow",
      "number": "9",
      "prompt": "Which of the following is explicitly listed as a common problem to look out for during data preparation?",
      "options": [
        "Data leakage",
        "Data encoding",
        "Feature selection",
        "Model deployment"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 2,
      "answer": "Data leakage",
      "topic": "datasets",
      "aliases": [
        "elective-33-1-9"
      ],
      "sources": [
        {
          "id": "elective-33-1-9",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Datasets & ML workflow",
          "number": "9",
          "page": 2
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Data leakage is a documented data-preparation pitfall; encoding and feature selection are procedures, not inherently problems.",
        "originalAnswer": "A. Data leakage",
        "verifiedAnswer": "Data leakage",
        "references": [
          {
            "label": "scikit-learn: data leakage",
            "url": "https://scikit-learn.org/stable/common_pitfalls.html",
            "term": "leakage"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "bc32140fff986a5a"
    },
    {
      "id": "elective-33-1-10",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "1",
      "group": "Datasets & ML workflow",
      "number": "10",
      "prompt": "Why does data exploration and visualization matter in machine learning?",
      "options": [
        "It automatically writes the model algorithm",
        "It bypasses the need for data collection",
        "It saves time and aids in model debugging",
        "It deploys the model into a live system"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 3,
      "answer": "It saves time and aids in model debugging",
      "topic": "datasets",
      "aliases": [
        "elective-33-1-10"
      ],
      "sources": [
        {
          "id": "elective-33-1-10",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Datasets & ML workflow",
          "number": "10",
          "page": 3
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Exploration and visualization expose patterns and issues, supporting debugging and saving wasted modeling effort.",
        "originalAnswer": "C. It saves time and aids in model debugging",
        "verifiedAnswer": "It saves time and aids in model debugging",
        "references": [
          {
            "label": "NIST: exploratory data analysis",
            "url": "https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm",
            "term": "Exploratory"
          },
          {
            "label": "Google ML: data quality",
            "url": "https://developers.google.com/machine-learning/guides/data-traps/quality?hl=en",
            "term": "outliers"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "1f3b62fd38b592f9"
    },
    {
      "id": "elective-33-2-11",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "2",
      "group": "Model training & evaluation",
      "number": "11",
      "prompt": "a regularization technique that halts training automatically once the model's validation performance stops improving",
      "options": [
        "learning rate schedule",
        "prediction testing",
        "error prediction",
        "early stopping"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": 3,
      "answer": "early stopping",
      "topic": "training",
      "aliases": [
        "elective-33-2-11"
      ],
      "sources": [
        {
          "id": "elective-33-2-11",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Model training & evaluation",
          "number": "11",
          "page": 3
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "EarlyStopping stops training when the monitored quantity fails to improve, with configurable patience and thresholds.",
        "originalAnswer": "D. early stopping",
        "verifiedAnswer": "early stopping",
        "references": [
          {
            "label": "Keras: early stopping",
            "url": "https://keras.io/api/callbacks/early_stopping/",
            "term": "Stop training"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "731c2924dfa87cc1"
    },
    {
      "id": "elective-33-2-12",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "2",
      "group": "Model training & evaluation",
      "number": "12",
      "prompt": "it controls how much the model's weights are updated at each iteration.",
      "options": [
        "learning rate schedule",
        "prediction testing",
        "error prediction",
        "early stopping"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 3,
      "answer": "learning rate schedule",
      "topic": "training",
      "aliases": [
        "elective-33-2-12"
      ],
      "sources": [
        {
          "id": "elective-33-2-12",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Model training & evaluation",
          "number": "12",
          "page": 3
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "unresolved",
        "note": "The stem defines learning rate. A learning-rate schedule changes that rate over time; learning rate itself is absent from the choices. No exact correct option is supplied.",
        "originalAnswer": "A. learning rate schedule",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "Keras: optimizers",
            "url": "https://keras.io/api/optimizers/",
            "term": "learning rate"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "0d36843765f37459"
    },
    {
      "id": "elective-33-2-14",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "2",
      "group": "Model training & evaluation",
      "number": "14",
      "prompt": "What happens after each batch is processed?",
      "options": [
        "The dataset is deleted",
        "The model stops training",
        "The model updates its weights",
        "A new dataset is created"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 4,
      "answer": "The model updates its weights",
      "topic": "training",
      "aliases": [
        "elective-33-2-14"
      ],
      "sources": [
        {
          "id": "elective-33-2-14",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Model training & evaluation",
          "number": "14",
          "page": 4
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "In ordinary mini-batch training, a gradient update follows a processed batch. Gradient accumulation and other configurations can change update frequency.",
        "originalAnswer": "C. The model updates its weights",
        "verifiedAnswer": "The model updates its weights",
        "references": [
          {
            "label": "Keras: optimizers",
            "url": "https://keras.io/api/optimizers/",
            "term": "learning rate"
          },
          {
            "label": "Keras: training API",
            "url": "https://keras.io/api/models/model_training_apis/",
            "term": "epochs"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "ba43cab417a0082a"
    },
    {
      "id": "elective-33-2-15",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "2",
      "group": "Model training & evaluation",
      "number": "15",
      "prompt": "The model is designed to detect spam mail in a set of samples. It wrongly identified a non-spam as spam mail. Therefore, it is example of",
      "options": [
        "True negative",
        "True positive",
        "False negative",
        "False positive"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": 4,
      "answer": "False positive",
      "topic": "training",
      "aliases": [
        "elective-33-2-15"
      ],
      "sources": [
        {
          "id": "elective-33-2-15",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Model training & evaluation",
          "number": "15",
          "page": 4
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Spam is the positive class. Predicting spam for non-spam is a false positive.",
        "originalAnswer": "D. False positive",
        "verifiedAnswer": "False positive",
        "references": [
          {
            "label": "Google ML: classification metrics",
            "url": "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall?hl=en",
            "term": "false"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "b876221274658d6c"
    },
    {
      "id": "elective-33-2-16",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "2",
      "group": "Model training & evaluation",
      "number": "16",
      "prompt": "If a machine learning model is trained for too few epochs and gets bad results on both the training and test data, what is it experiencing?",
      "options": [
        "overfitting",
        "underfitting",
        "data leakage",
        "high variance"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 4,
      "answer": "underfitting",
      "topic": "training",
      "aliases": [
        "elective-33-2-16"
      ],
      "sources": [
        {
          "id": "elective-33-2-16",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Model training & evaluation",
          "number": "16",
          "page": 4
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "High error on both training and evaluation data is characteristic of underfitting, potentially due to insufficient training or capacity.",
        "originalAnswer": "B. underfitting",
        "verifiedAnswer": "underfitting",
        "references": [
          {
            "label": "Google ML: generalization and overfitting",
            "url": "https://developers.google.com/machine-learning/crash-course/overfitting/overfitting?hl=en",
            "term": "overfitting"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "db0454cb842a4768"
    },
    {
      "id": "elective-33-2-17",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "2",
      "group": "Model training & evaluation",
      "number": "17",
      "prompt": "What main risk occurs when setting an excessively high epoch count?",
      "options": [
        "The model underfits and has higher error rates on training data",
        "Training time and computational load are reduced",
        "The model begins to memorize the training data instead of learning general patterns",
        "The model loses its parameter weights completely"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 4,
      "answer": "The model begins to memorize the training data instead of learning general patterns",
      "topic": "training",
      "aliases": [
        "elective-33-2-17"
      ],
      "sources": [
        {
          "id": "elective-33-2-17",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Model training & evaluation",
          "number": "17",
          "page": 4
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Excessive training can fit noise or memorize the training set and impair generalization; it is a risk rather than a guaranteed outcome.",
        "originalAnswer": "C. The model begins to memorize the training data instead of learning general patterns",
        "verifiedAnswer": "The model begins to memorize the training data instead of learning general patterns",
        "references": [
          {
            "label": "Google ML: generalization and overfitting",
            "url": "https://developers.google.com/machine-learning/crash-course/overfitting/overfitting?hl=en",
            "term": "overfitting"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "68c06205ac135edd"
    },
    {
      "id": "elective-33-2-18",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "2",
      "group": "Model training & evaluation",
      "number": "18",
      "prompt": "It is how well a model carries out its intended task, measured by various metrics",
      "options": [
        "machine learning",
        "loss",
        "accuracy",
        "model performance"
      ],
      "correct": 3,
      "type": "choice",
      "images": [],
      "page": 5,
      "answer": "model performance",
      "topic": "training",
      "aliases": [
        "elective-33-2-18"
      ],
      "sources": [
        {
          "id": "elective-33-2-18",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Model training & evaluation",
          "number": "18",
          "page": 5
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Model performance is evaluated with task-appropriate metrics; accuracy is only one possible metric.",
        "originalAnswer": "D. model performance",
        "verifiedAnswer": "model performance",
        "references": [
          {
            "label": "Keras: training API",
            "url": "https://keras.io/api/models/model_training_apis/",
            "term": "epochs"
          },
          {
            "label": "Google ML: classification metrics",
            "url": "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall?hl=en",
            "term": "false"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "e512509daf625a70"
    },
    {
      "id": "elective-33-2-19",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "2",
      "group": "Model training & evaluation",
      "number": "19",
      "prompt": "A model can have correct predictions most of the time but still show a higher loss because of outliers or noisy data",
      "options": [
        "True",
        "false"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 5,
      "answer": "True",
      "topic": "training",
      "aliases": [
        "elective-33-2-19"
      ],
      "sources": [
        {
          "id": "elective-33-2-19",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Model training & evaluation",
          "number": "19",
          "page": 5
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Accuracy counts thresholded correct predictions, while loss can strongly penalize a few confident errors. Thus high accuracy and relatively high loss can coexist.",
        "originalAnswer": "A. True",
        "verifiedAnswer": "True",
        "references": [
          {
            "label": "Keras: losses",
            "url": "https://keras.io/api/losses/probabilistic_losses/",
            "term": "crossentropy"
          },
          {
            "label": "Google ML: classification metrics",
            "url": "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall?hl=en",
            "term": "false"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "9e5fb061b1d1f9df"
    },
    {
      "id": "elective-33-2-20",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "2",
      "group": "Model training & evaluation",
      "number": "20",
      "prompt": "What do we call it when a model performs very well on training data (low loss) but poorly on new, unseen data?",
      "options": [
        "Overfitting",
        "cross entropy loss",
        "noise/outliers",
        "epoch"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 5,
      "answer": "Overfitting",
      "topic": "training",
      "aliases": [
        "elective-33-2-20"
      ],
      "sources": [
        {
          "id": "elective-33-2-20",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Model training & evaluation",
          "number": "20",
          "page": 5
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Good training fit with poor unseen-data performance is overfitting.",
        "originalAnswer": "A. Overfitting",
        "verifiedAnswer": "Overfitting",
        "references": [
          {
            "label": "Google ML: generalization and overfitting",
            "url": "https://developers.google.com/machine-learning/crash-course/overfitting/overfitting?hl=en",
            "term": "overfitting"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "88cf170ea3b52782"
    },
    {
      "id": "elective-33-3-21",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "3",
      "group": "Image classification",
      "number": "21",
      "prompt": "You are designing the perception software for a delivery robot. When the robot captures a single camera frame, the system outputs an array such as [Pedestrian: 1, Traffic_Cone: 0, Bicycle: 1, Dog: 0] where '1' indicates detection and '0' indicates no detection. Based on what you remembered, which characteristic of Multilabel Classification directly explains this output structure?",
      "options": [
        "The data instance is restricted to only one dominant class",
        "Each label is represented as present or absent for an instance",
        "The categories evaluated by the system are mutually exclusive",
        "Hindi ito ang sagot."
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 5,
      "answer": "Each label is represented as present or absent for an instance",
      "topic": "images",
      "aliases": [
        "elective-33-3-21"
      ],
      "sources": [
        {
          "id": "elective-33-3-21",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Image classification",
          "number": "21",
          "page": 5
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Multilabel classification represents each potentially co-occurring label as present or absent for an instance.",
        "originalAnswer": "B. Each label is represented as present or absent for an instance",
        "verifiedAnswer": "Each label is represented as present or absent for an instance",
        "references": [
          {
            "label": "scikit-learn: multiclass and multilabel",
            "url": "https://scikit-learn.org/stable/modules/multiclass.html",
            "term": "multilabel"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "7fa315894c883774"
    },
    {
      "id": "elective-33-3-22",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "3",
      "group": "Image classification",
      "number": "22",
      "prompt": "A medical research facility is overwhelmed by the sheer volume of microscopic cell images they need to sort. They decide to implement an image classification system to assign predefined labels (like \"Healthy\" or \"Infected\") to these images based on their visual content. Why is implementing this image classification process critically important for the facility's goal of automating the categorization?",
      "options": [
        "It eliminates the need for feature extraction by directly converting raw pixel data into a single predefined l...",
        "It enables the model to automatically recognize distinct patterns—such as the shapes and textures of the cells—and map those extracted features to the most probable learned class.",
        "It allows the system to assign multiple, non-mutually exclusive labels to a single cell image simultaneously to handle overlapping categories.",
        "Regine Velasquez-Alcasid"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 6,
      "answer": "It enables the model to automatically recognize distinct patterns—such as the shapes and textures of the cells—and map those extracted features to the most probable learned class.",
      "topic": "images",
      "aliases": [
        "elective-33-3-22"
      ],
      "sources": [
        {
          "id": "elective-33-3-22",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Image classification",
          "number": "22",
          "page": 6
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Image classification learns visual features and maps them to target classes. B describes that process; A is truncated in the source and wrongly claims feature extraction is eliminated.",
        "originalAnswer": "B. It enables the model to automatically recognize distinct patterns—such as the shapes and textures of the cells—and map those extracted features to the most probable learned class.",
        "verifiedAnswer": "It enables the model to automatically recognize distinct patterns—such as the shapes and textures of the cells—and map those extracted features to the most probable learned class.",
        "references": [
          {
            "label": "Keras: convolution layers",
            "url": "https://keras.io/api/layers/convolution_layers/convolution2d/",
            "term": "convolution"
          },
          {
            "label": "Keras: image classification",
            "url": "https://keras.io/examples/vision/image_classification_from_scratch/",
            "term": "augmentation"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "fad24d929acfbfb4"
    },
    {
      "id": "elective-33-3-23",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "3",
      "group": "Image classification",
      "number": "23",
      "prompt": "Which technique increases the variety of images in a dataset by modifying existing images?",
      "options": [
        "Data Gathering",
        "Image Preprocessing",
        "Data Augmentation",
        "Model Evaluation"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 6,
      "answer": "Data Augmentation",
      "topic": "images",
      "aliases": [
        "elective-33-3-23"
      ],
      "sources": [
        {
          "id": "elective-33-3-23",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Image classification",
          "number": "23",
          "page": 6
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Data augmentation adds variations by transforming existing training images.",
        "originalAnswer": "C. Data Augmentation",
        "verifiedAnswer": "Data Augmentation",
        "references": [
          {
            "label": "Keras: image classification",
            "url": "https://keras.io/examples/vision/image_classification_from_scratch/",
            "term": "augmentation"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "62d46acde7c5e960"
    },
    {
      "id": "elective-33-3-24",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "3",
      "group": "Image classification",
      "number": "24",
      "prompt": "Why are images labeled and organized into categories?",
      "options": [
        "To help the model understand what each image represents.",
        "To make the images larger.",
        "To create variations of existing images and increase dataset diversity.",
        "To day is gonna be the day that they're gonna throw it back to you."
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 7,
      "answer": "To help the model understand what each image represents.",
      "topic": "images",
      "aliases": [
        "elective-33-3-24"
      ],
      "sources": [
        {
          "id": "elective-33-3-24",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Image classification",
          "number": "24",
          "page": 7
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Labels supply target categories for supervised training; they do not themselves enlarge images or augment the dataset.",
        "originalAnswer": "A. To help the model understand what each image represents.",
        "verifiedAnswer": "To help the model understand what each image represents.",
        "references": [
          {
            "label": "Keras: image classification",
            "url": "https://keras.io/examples/vision/image_classification_from_scratch/",
            "term": "augmentation"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "7ebdc2212645adc4"
    },
    {
      "id": "elective-33-3-25",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "3",
      "group": "Image classification",
      "number": "25",
      "prompt": "What does FN mean?",
      "options": [
        "Predicted Yes, actually No",
        "Predicted No, actually No",
        "Predicted No, actually Yes",
        "Predicted Yes, actually Yes"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 7,
      "answer": "Predicted No, actually Yes",
      "topic": "training",
      "aliases": [
        "elective-33-3-25"
      ],
      "sources": [
        {
          "id": "elective-33-3-25",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Image classification",
          "number": "25",
          "page": 7
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "A false negative predicts negative for an actually positive case.",
        "originalAnswer": "C. Predicted No, actually Yes",
        "verifiedAnswer": "Predicted No, actually Yes",
        "references": [
          {
            "label": "Google ML: classification metrics",
            "url": "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall?hl=en",
            "term": "false"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "52b960786a0cd042"
    },
    {
      "id": "elective-33-3-26",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "3",
      "group": "Image classification",
      "number": "26",
      "prompt": "Why is Underfitting bad?",
      "options": [
        "Because of its low error on training data but high error on new data.",
        "Because of it's high errors on training and new data.",
        "Because it's trained too long.",
        "Kase sabe ko."
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 7,
      "answer": "Because of it's high errors on training and new data.",
      "topic": "training",
      "aliases": [
        "elective-33-3-26"
      ],
      "sources": [
        {
          "id": "elective-33-3-26",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Image classification",
          "number": "26",
          "page": 7
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Underfitting fails to model useful patterns and typically yields high training and evaluation error.",
        "originalAnswer": "B. Because of it's high errors on training and new data.",
        "verifiedAnswer": "Because of it's high errors on training and new data.",
        "references": [
          {
            "label": "Google ML: generalization and overfitting",
            "url": "https://developers.google.com/machine-learning/crash-course/overfitting/overfitting?hl=en",
            "term": "overfitting"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "16b9fe1e9461bf5d"
    },
    {
      "id": "elective-33-3-27",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "3",
      "group": "Image classification",
      "number": "27",
      "prompt": "Why is a machine learning model's effectiveness evaluated on unseen (test/validation) data after training?",
      "options": [
        "To make the training process run faster and use less computing power.",
        "To ensure the model generalizes well to new data rather than just memorizing the training set.",
        "To eliminate the need for common evaluation metrics like Accuracy and Loss curves.",
        "To retrain the model continuously during the evaluation phase."
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 7,
      "answer": "To ensure the model generalizes well to new data rather than just memorizing the training set.",
      "topic": "training",
      "aliases": [
        "elective-33-3-27"
      ],
      "sources": [
        {
          "id": "elective-33-3-27",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Image classification",
          "number": "27",
          "page": 7
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Held-out evaluation estimates generalization rather than training-set memorization; validation may also be used during model selection.",
        "originalAnswer": "B. To ensure the model generalizes well to new data rather than just memorizing the training set.",
        "verifiedAnswer": "To ensure the model generalizes well to new data rather than just memorizing the training set.",
        "references": [
          {
            "label": "Google ML: generalization and overfitting",
            "url": "https://developers.google.com/machine-learning/crash-course/overfitting/overfitting?hl=en",
            "term": "overfitting"
          },
          {
            "label": "scikit-learn: validation and test splits",
            "url": "https://scikit-learn.org/stable/modules/cross_validation.html",
            "term": "validation"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "c94fd8ed1cce9225"
    },
    {
      "id": "elective-33-3-28",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "3",
      "group": "Image classification",
      "number": "28",
      "prompt": "Which evaluation metric mentioned in the slide is used to plot the model's performance over training epochs to assess learning progress and overfitting?",
      "options": [
        "Accuracy",
        "Confusion Matrix",
        "Loss curves",
        "Precision, Recall, F1-score"
      ],
      "correct": 2,
      "type": "choice",
      "images": [],
      "page": 8,
      "answer": "Loss curves",
      "topic": "training",
      "aliases": [
        "elective-33-3-28"
      ],
      "sources": [
        {
          "id": "elective-33-3-28",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Image classification",
          "number": "28",
          "page": 8
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "unresolved",
        "note": "Both accuracy and loss can be plotted over epochs to assess learning and overfitting. The stem calls loss curves a metric and refers to an unavailable slide, so A and C cannot be uniquely distinguished as written.",
        "originalAnswer": "C. Loss curves",
        "verifiedAnswer": null,
        "references": [
          {
            "label": "Keras: training API",
            "url": "https://keras.io/api/models/model_training_apis/",
            "term": "epochs"
          }
        ]
      },
      "scored": false,
      "practice": false,
      "signature": "849e5afe28327824"
    },
    {
      "id": "elective-33-3-29",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "3",
      "group": "Image classification",
      "number": "29",
      "prompt": "This is a stage where you ___ an AI model in an application",
      "options": [
        "Testing",
        "Integrate",
        "Trainig",
        "Data Gathering"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 8,
      "answer": "Integrate",
      "topic": "images",
      "aliases": [
        "elective-33-3-29"
      ],
      "sources": [
        {
          "id": "elective-33-3-29",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Image classification",
          "number": "29",
          "page": 8
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Integrating the trained model into an application is a deployment/integration activity.",
        "originalAnswer": "B. Integrate",
        "verifiedAnswer": "Integrate",
        "references": [
          {
            "label": "TensorFlow: prediction REST API",
            "url": "https://www.tensorflow.org/tfx/serving/api_rest",
            "term": "predict"
          },
          {
            "label": "Google Cloud: ML production lifecycle",
            "url": "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning?hl=en",
            "term": "monitor"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "66d8b2c78c5e7afc"
    },
    {
      "id": "elective-33-3-30",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "3",
      "group": "Image classification",
      "number": "30",
      "prompt": "Which type of testing specifically checks the application performance against blurry, dark, corrupted, or wrong-format images",
      "options": [
        "Functional",
        "Edge Cases",
        "Usability",
        "Accuracy"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 8,
      "answer": "Edge Cases",
      "topic": "images",
      "aliases": [
        "elective-33-3-30"
      ],
      "sources": [
        {
          "id": "elective-33-3-30",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Image classification",
          "number": "30",
          "page": 8
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Blurred, dark, corrupted and wrong-format inputs are edge/robustness cases that require application testing, not just a single aggregate accuracy metric.",
        "originalAnswer": "B. Edge Cases",
        "verifiedAnswer": "Edge Cases",
        "references": [
          {
            "label": "Google: ML test score research",
            "url": "https://research.google/pubs/the-ml-test-score-a-rubric-for-ml-production-readiness-and-technical-debt-reduction/",
            "term": "test"
          },
          {
            "label": "Keras: image classification",
            "url": "https://keras.io/examples/vision/image_classification_from_scratch/",
            "term": "augmentation"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "1c3fbe5c3b6f6cbc"
    },
    {
      "id": "elective-33-4-31",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "4",
      "group": "Audio classification",
      "number": "31",
      "prompt": "What is sound classification?",
      "options": [
        "Identifying the type of sound",
        "Creating a new computer",
        "Editing pictures",
        "Storing documents"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 8,
      "answer": "Identifying the type of sound",
      "topic": "audio",
      "aliases": [
        "elective-33-4-31"
      ],
      "sources": [
        {
          "id": "elective-33-4-31",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Audio classification",
          "number": "31",
          "page": 8
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Sound classification assigns a sound recording to a sound category.",
        "originalAnswer": "A. Identifying the type of sound",
        "verifiedAnswer": "Identifying the type of sound",
        "references": [
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "c9ffbf53d9775fb3"
    },
    {
      "id": "elective-33-4-32",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "4",
      "group": "Audio classification",
      "number": "32",
      "prompt": "Which of the following is a natural sound?",
      "options": [
        "Car horn",
        "Bird sound",
        "Factory machine",
        "Loudspeaker"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 9,
      "answer": "Bird sound",
      "topic": "audio",
      "aliases": [
        "elective-33-4-32"
      ],
      "sources": [
        {
          "id": "elective-33-4-32",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Audio classification",
          "number": "32",
          "page": 9
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "A bird vocalization is an animal/natural sound in the stated classification, unlike the listed human-made devices.",
        "originalAnswer": "B. Bird sound",
        "verifiedAnswer": "Bird sound",
        "references": [
          {
            "label": "Google AudioSet: bird sounds",
            "url": "https://research.google.com/audioset/ontology/bird_1.html",
            "term": "Bird"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "46ed861ea057964e"
    },
    {
      "id": "elective-33-4-33",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "4",
      "group": "Audio classification",
      "number": "33",
      "prompt": "What is an audio dataset?",
      "options": [
        "A collection of audio recordings",
        "A collection of pictures",
        "A computer program",
        "A microphone"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 9,
      "answer": "A collection of audio recordings",
      "topic": "audio",
      "aliases": [
        "elective-33-4-33"
      ],
      "sources": [
        {
          "id": "elective-33-4-33",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Audio classification",
          "number": "33",
          "page": 9
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "An audio dataset is a collection of audio examples/recordings, usually accompanied by labels or metadata.",
        "originalAnswer": "A. A collection of audio recordings",
        "verifiedAnswer": "A collection of audio recordings",
        "references": [
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "24003ca8a6cfd6d4"
    },
    {
      "id": "elective-33-4-34",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "4",
      "group": "Audio classification",
      "number": "34",
      "prompt": "Why is audio preprocessing important?",
      "options": [
        "To make audio data more consistent",
        "To delete the entire dataset",
        "To create a new computer",
        "To turn audio into pictures"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 9,
      "answer": "To make audio data more consistent",
      "topic": "audio",
      "aliases": [
        "elective-33-4-34"
      ],
      "sources": [
        {
          "id": "elective-33-4-34",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Audio classification",
          "number": "34",
          "page": 9
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Preprocessing brings waveforms/features into consistent formats, lengths and representations as needed by the model.",
        "originalAnswer": "A. To make audio data more consistent",
        "verifiedAnswer": "To make audio data more consistent",
        "references": [
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "effda2d0bfa442ed"
    },
    {
      "id": "elective-33-4-35",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "4",
      "group": "Audio classification",
      "number": "35",
      "prompt": "What does a spectrogram show?",
      "options": [
        "How frequencies change over time",
        "The number of computers used",
        "The size of a dataset",
        "The name of the speaker"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 9,
      "answer": "How frequencies change over time",
      "topic": "audio",
      "aliases": [
        "elective-33-4-35"
      ],
      "sources": [
        {
          "id": "elective-33-4-35",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Audio classification",
          "number": "35",
          "page": 9
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "A spectrogram depicts frequency components over time, with magnitudes represented visually.",
        "originalAnswer": "A. How frequencies change over time",
        "verifiedAnswer": "How frequencies change over time",
        "references": [
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "53dad8540dd5c1e8"
    },
    {
      "id": "elective-33-4-36",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "4",
      "group": "Audio classification",
      "number": "36",
      "prompt": "What happens during model training?",
      "options": [
        "The model learns patterns from audio examples",
        "The computer is turned off",
        "The audio files are deleted",
        "The dataset becomes a video"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 10,
      "answer": "The model learns patterns from audio examples",
      "topic": "audio",
      "aliases": [
        "elective-33-4-36"
      ],
      "sources": [
        {
          "id": "elective-33-4-36",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Audio classification",
          "number": "36",
          "page": 10
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Training adjusts model parameters to learn patterns from audio examples.",
        "originalAnswer": "A. The model learns patterns from audio examples",
        "verifiedAnswer": "The model learns patterns from audio examples",
        "references": [
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          },
          {
            "label": "Keras: training API",
            "url": "https://keras.io/api/models/model_training_apis/",
            "term": "epochs"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "428a7ce33f3d3654"
    },
    {
      "id": "elective-33-4-37",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "4",
      "group": "Audio classification",
      "number": "37",
      "prompt": "Which audio model converts speech into written text?",
      "options": [
        "Sound classification",
        "Speech recognition",
        "Text-to-speech",
        "Audio generation"
      ],
      "correct": 1,
      "type": "choice",
      "images": [],
      "page": 10,
      "answer": "Speech recognition",
      "topic": "audio",
      "aliases": [
        "elective-33-4-37"
      ],
      "sources": [
        {
          "id": "elective-33-4-37",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Audio classification",
          "number": "37",
          "page": 10
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Speech recognition converts spoken audio to text; classification and speech synthesis are different tasks.",
        "originalAnswer": "B. Speech recognition",
        "verifiedAnswer": "Speech recognition",
        "references": [
          {
            "label": "Google AudioSet: speech ontology",
            "url": "https://research.google.com/audioset/ontology/speech_1.html",
            "term": "Speech"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "3cb31149bdb9dd10"
    },
    {
      "id": "elective-33-4-38",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "4",
      "group": "Audio classification",
      "number": "38",
      "prompt": "What does accuracy measure?",
      "options": [
        "Percentage of correct predictions",
        "Number of audio files",
        "Length of the recording",
        "Sampling rate"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 10,
      "answer": "Percentage of correct predictions",
      "topic": "training",
      "aliases": [
        "elective-33-4-38"
      ],
      "sources": [
        {
          "id": "elective-33-4-38",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Audio classification",
          "number": "38",
          "page": 10
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Classification accuracy is the fraction of correct predictions, commonly expressed as a percentage.",
        "originalAnswer": "A. Percentage of correct predictions",
        "verifiedAnswer": "Percentage of correct predictions",
        "references": [
          {
            "label": "Google ML: classification metrics",
            "url": "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall?hl=en",
            "term": "false"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "3f2a5707125b631f"
    },
    {
      "id": "elective-33-4-39",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "4",
      "group": "Audio classification",
      "number": "39",
      "prompt": "Why is application testing performed?",
      "options": [
        "To test the model using new audio",
        "To delete incorrect recordings",
        "To create the dataset",
        "To change the presentation design"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 10,
      "answer": "To test the model using new audio",
      "topic": "audio",
      "aliases": [
        "elective-33-4-39"
      ],
      "sources": [
        {
          "id": "elective-33-4-39",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Audio classification",
          "number": "39",
          "page": 10
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Testing checks the application/model with new audio rather than modifying presentation design or deleting recordings.",
        "originalAnswer": "A. To test the model using new audio",
        "verifiedAnswer": "To test the model using new audio",
        "references": [
          {
            "label": "Google: ML test score research",
            "url": "https://research.google/pubs/the-ml-test-score-a-rubric-for-ml-production-readiness-and-technical-debt-reduction/",
            "term": "test"
          },
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "cfb9c76c21c358a5"
    },
    {
      "id": "elective-33-4-40",
      "sourceId": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "groupId": "4",
      "group": "Audio classification",
      "number": "40",
      "prompt": "Which shows the correct general process of sound classification using AI?",
      "options": [
        "Audio → Dataset → Training → Evaluation → Testing",
        "Testing → Audio → Dataset → Training",
        "Dataset → Testing → Audio → Evaluation",
        "Training → Audio → Testing → Dataset"
      ],
      "correct": 0,
      "type": "choice",
      "images": [],
      "page": 10,
      "answer": "Audio → Dataset → Training → Evaluation → Testing",
      "topic": "audio",
      "aliases": [
        "elective-33-4-40"
      ],
      "sources": [
        {
          "id": "elective-33-4-40",
          "sourceId": "elective-33",
          "section": "3-3",
          "label": "BSIT 3-3",
          "group": "Audio classification",
          "number": "40",
          "page": 10
        }
      ],
      "sections": [
        "3-3"
      ],
      "audit": {
        "status": "verified",
        "note": "Among the supplied choices, collecting audio/data before training and then evaluation/testing is the coherent general order; real pipelines can iterate and must reserve evaluation data before training.",
        "originalAnswer": "A. Audio → Dataset → Training → Evaluation → Testing",
        "verifiedAnswer": "Audio → Dataset → Training → Evaluation → Testing",
        "references": [
          {
            "label": "TensorFlow: audio recognition",
            "url": "https://www.tensorflow.org/tutorials/audio/simple_audio",
            "term": "spectrogram"
          },
          {
            "label": "Keras: training API",
            "url": "https://keras.io/api/models/model_training_apis/",
            "term": "epochs"
          },
          {
            "label": "Google: ML test score research",
            "url": "https://research.google/pubs/the-ml-test-score-a-rubric-for-ml-production-readiness-and-technical-debt-reduction/",
            "term": "test"
          }
        ]
      },
      "scored": true,
      "practice": true,
      "signature": "03f2962243a25245"
    }
  ],
  "aliases": {
    "webdev-34-2-1": {
      "canonical": "webdev-34-2-1",
      "subject": "webdev",
      "section": "3-4",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "HTML Lists",
        "HTML Tables",
        "HTML Forms",
        "HTML Input"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-2-2": {
      "canonical": "webdev-34-2-2",
      "subject": "webdev",
      "section": "3-4",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<article>",
        "<section>",
        "<main>",
        "<aside>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-2-3": {
      "canonical": "webdev-34-2-3",
      "subject": "webdev",
      "section": "3-4",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<link href=\"url\">link text</link>",
        "<a src=\"url\">link text</a>",
        "<a href=\"url\">link text</a>",
        "<href=\"url\">link text</href>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-2-4": {
      "canonical": "webdev-34-2-4",
      "subject": "webdev",
      "section": "3-4",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<img href=\"url\" alt=\"text\"></img>",
        "<img src=\"url\" alt=\"text\">",
        "<picture src=\"url\">text</picture>",
        "<image src=\"url\" alt=\"text\">"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-2-5": {
      "canonical": "webdev-34-2-5",
      "subject": "webdev",
      "section": "3-4",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<form type=\"text\">name</form>",
        "<input type=\"text\" name=\"name\">",
        "<input text=\"name\">",
        "<text input=\"name\">"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-2-6": {
      "canonical": "webdev-34-2-6",
      "subject": "webdev",
      "section": "3-4",
      "topic": "html",
      "type": "written",
      "keyChanged": false,
      "options": [],
      "optionMap": []
    },
    "webdev-34-9-1": {
      "canonical": "webdev-34-9-1",
      "subject": "webdev",
      "section": "3-4",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Inline style > ID selector > Class selector > Element selector",
        "Element selector > Class selector > ID selector > Inline style",
        "ID selector > Inline style > Element selector > Class selector",
        "Class selector > ID selector > Inline style > Element selector"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-2-11": {
      "canonical": "webdev-34-9-1",
      "subject": "webdev",
      "section": "3-3",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "IDs -> Classes -> Elements -> Inline Styles",
        "Inline Styles -> IDs -> Classes -> Elements",
        "Classes -> IDs -> Inline Styles -> Elements",
        "Elements -> Classes -> IDs -> Inline Styles"
      ],
      "optionMap": [
        null,
        0,
        null,
        null
      ]
    },
    "webdev-34-9-2": {
      "canonical": "webdev-34-9-2",
      "subject": "webdev",
      "section": "3-4",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Blue, because it's the element selector",
        "Green, because .highlight is more specific than p",
        "Orange, because an ID selector is more specific than a class or element selector",
        "It alternates between all three colors"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-9-3": {
      "canonical": "webdev-34-9-3",
      "subject": "webdev",
      "section": "3-4",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Margin → Border → Padding → Content",
        "Content → Padding → Border → Margin",
        "Padding → Content → Margin → Border",
        "Border → Content → Padding → Margin"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-7": {
      "canonical": "webdev-34-9-3",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Content → Padding → Border → Margin",
        "Content → Border → Padding → Margin",
        "Margin → Border → Padding → Content",
        "Padding → Content → Border → Margin"
      ],
      "optionMap": [
        1,
        null,
        0,
        null
      ]
    },
    "webdev-34-9-4": {
      "canonical": "webdev-34-9-4",
      "subject": "webdev",
      "section": "3-4",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "It removes the need for margins entirely",
        "It makes padding and border count inside the declared width, keeping layouts predictable",
        "It automatically makes a layout responsive",
        "It disables the cascade for that element"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-9-5": {
      "canonical": "webdev-34-9-5",
      "subject": "webdev",
      "section": "3-4",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "A two-dimensional layout system for rows and columns together",
        "A one-dimensional layout system for a single row or column",
        "A CSS framework like Bootstrap",
        "A way to write media queries"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-2-15": {
      "canonical": "webdev-34-9-5",
      "subject": "webdev",
      "section": "3-3",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "GRID BOX",
        "BORBER BOX",
        "FLEX BOX",
        "CONTENT BOX"
      ],
      "optionMap": [
        null,
        null,
        1,
        null
      ]
    },
    "webdev-css-topic-8": {
      "canonical": "webdev-34-9-5",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Creating databases",
        "Arranging elements in one dimension",
        "Adding images",
        "Writing HTML"
      ],
      "optionMap": [
        null,
        1,
        null,
        null
      ]
    },
    "webdev-34-9-6": {
      "canonical": "webdev-34-9-6",
      "subject": "webdev",
      "section": "3-4",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "row",
        "column",
        "wrap",
        "stretch",
        "space-between"
      ],
      "optionMap": [
        0,
        1,
        2,
        3,
        4
      ]
    },
    "webdev-34-9-7": {
      "canonical": "webdev-34-9-7",
      "subject": "webdev",
      "section": "3-4",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Centering a single button",
        "Whole page layouts and two-dimensional designs like photo galleries or dashboards",
        "Writing media queries",
        "Setting box-sizing rules"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-11": {
      "canonical": "webdev-34-9-7",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "One-dimensional layouts",
        "Two-dimensional layouts using rows and columns",
        "Changing text color only",
        "Adding animations only"
      ],
      "optionMap": [
        null,
        1,
        null,
        null
      ]
    },
    "webdev-34-9-8": {
      "canonical": "webdev-34-9-8",
      "subject": "webdev",
      "section": "3-4",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Writing styles for desktop first, then overriding them for smaller screens",
        "Writing base styles for small screens first, then adding rules for bigger screens using min-width",
        "Only designing for phones and ignoring tablets/desktops",
        "Using max-width queries exclusively"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-9-9": {
      "canonical": "webdev-34-9-9",
      "subject": "webdev",
      "section": "3-4",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Tailwind provides ready-made components like navbars and modals, while Bootstrap uses utility classes",
        "Tailwind is utility-first (classes like flex, p-4, bg-blue-500) you combine yourself, while Bootstrap gives ready-made components",
        "They are functionally identical frameworks",
        "Bootstrap is only for React/Vue/Laravel projects",
        "Tailwind requires no CSS classes at all"
      ],
      "optionMap": [
        0,
        1,
        2,
        3,
        4
      ]
    },
    "webdev-css-topic-14": {
      "canonical": "webdev-34-9-9",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Bootstrap is only for JavaScript, while Tailwind is only for HTML",
        "Bootstrap mainly provides ready-made components, while Tailwind provides utility classes for building custom designs",
        "Bootstrap requires no CSS, while Tailwind requires writing all CSS manually",
        "Bootstrap is only for desktop websites, while Tailwind is only for mobile websites"
      ],
      "optionMap": [
        null,
        1,
        null,
        null
      ]
    },
    "webdev-34-9-10": {
      "canonical": "webdev-34-9-10",
      "subject": "webdev",
      "section": "3-4",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "No, a page must use only one or the other",
        "Yes — use Grid for the overall page layout, and Flexbox inside individual grid cells",
        "Yes, but only inside media queries",
        "No, Flexbox is deprecated in favor of Grid"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-5-1": {
      "canonical": "webdev-34-5-1",
      "subject": "webdev",
      "section": "3-4",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "@",
        "#",
        "$",
        "&"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-php-topic-2": {
      "canonical": "webdev-34-5-1",
      "subject": "webdev",
      "section": null,
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "//",
        "$",
        "#",
        "/*"
      ],
      "optionMap": [
        null,
        2,
        1,
        null
      ]
    },
    "webdev-34-5-2": {
      "canonical": "webdev-34-5-2",
      "subject": "webdev",
      "section": "3-4",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "$_FORM",
        "$_SESSION",
        "$_GET -",
        "$_POST"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-5-3": {
      "canonical": "webdev-34-5-3",
      "subject": "webdev",
      "section": "3-4",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "website.com/search.php#search=laptop",
        "website.com/search.php/laptop?method=GET",
        "website.com/search.php/laptop",
        "website.com/search.php?search=laptop"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-5-4": {
      "canonical": "webdev-34-5-4",
      "subject": "webdev",
      "section": "3-4",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Exception",
        "Input handling",
        "Classes",
        "Syntax Error"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-5-5": {
      "canonical": "webdev-34-5-5",
      "subject": "webdev",
      "section": "3-4",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "$_GET",
        "$_POST",
        "$_SESSION",
        "$_FORM"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-5-6": {
      "canonical": "webdev-34-5-6",
      "subject": "webdev",
      "section": "3-4",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "PHP Class",
        "PHP Room",
        "PHP Objects",
        "PHP Functions"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-4-32": {
      "canonical": "webdev-34-5-6",
      "subject": "webdev",
      "section": "3-3",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Class",
        "Method",
        "Object",
        "Tupperware"
      ],
      "optionMap": [
        0,
        null,
        null,
        null
      ]
    },
    "webdev-34-5-7": {
      "canonical": "webdev-34-5-7",
      "subject": "webdev",
      "section": "3-4",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Namespaces",
        "Library",
        "Connection",
        "Storage"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-34-5-8": {
      "canonical": "webdev-34-5-8",
      "subject": "webdev",
      "section": "3-4",
      "topic": "php",
      "type": "text",
      "keyChanged": false,
      "options": [],
      "optionMap": []
    },
    "webdev-34-5-9": {
      "canonical": "webdev-34-5-9",
      "subject": "webdev",
      "section": "3-4",
      "topic": "php",
      "type": "text",
      "keyChanged": false,
      "options": [],
      "optionMap": []
    },
    "webdev-34-5-10": {
      "canonical": "webdev-34-5-10",
      "subject": "webdev",
      "section": "3-4",
      "topic": "php",
      "type": "text",
      "keyChanged": false,
      "options": [],
      "optionMap": []
    },
    "webdev-33-1-1": {
      "canonical": "webdev-33-1-1",
      "subject": "webdev",
      "section": "3-3",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Tim Berners-Lee",
        "Team Burners-Li",
        "Tim Lee-Berners",
        "Regine Velasquez"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-1-2": {
      "canonical": "webdev-33-1-2",
      "subject": "webdev",
      "section": "3-3",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "HyperText Makeup Language",
        "HyperText Markup Language",
        "HiperTexting MissU Language",
        "HyperTraining Machine Learning"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-1-1": {
      "canonical": "webdev-33-1-2",
      "subject": "webdev",
      "section": "3-2",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "HyperText Machine Language",
        "Hyper Tool Markup Language",
        "HyperText Markup Language",
        "Hyperlink and Text Markup Language"
      ],
      "optionMap": [
        null,
        null,
        1,
        null
      ]
    },
    "webdev-33-1-3": {
      "canonical": "webdev-33-1-3",
      "subject": "webdev",
      "section": "3-3",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To tell the browser to render the page using modern HTML5 standards",
        "To create the root container for all visible text content",
        "To link an external CSS stylesheet to the document",
        "To set the character encoding to standard UTF-8"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-1-4": {
      "canonical": "webdev-33-1-4",
      "subject": "webdev",
      "section": "3-3",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<head>",
        "<body>",
        "<!DOCTYPE>",
        "<meta>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-1-5": {
      "canonical": "webdev-33-1-5",
      "subject": "webdev",
      "section": "3-3",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<label>",
        "<head>",
        "<button>",
        "<form>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-1-6": {
      "canonical": "webdev-33-1-6",
      "subject": "webdev",
      "section": "3-3",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "limits character count",
        "makes field mandatory",
        "sets maximum value",
        "hides entered characters"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-1-4": {
      "canonical": "webdev-33-1-6",
      "subject": "webdev",
      "section": "3-2",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "validate=”true”",
        "required",
        "placeholder",
        "autofocus"
      ],
      "optionMap": [
        null,
        1,
        null,
        null
      ]
    },
    "webdev-html-topic-6": {
      "canonical": "webdev-33-1-6",
      "subject": "webdev",
      "section": null,
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "It makes the input optional",
        "It requires the user to enter a value",
        "It deletes the input",
        "It changes the input into a button"
      ],
      "optionMap": [
        null,
        1,
        null,
        null
      ]
    },
    "webdev-33-1-7": {
      "canonical": "webdev-33-1-7",
      "subject": "webdev",
      "section": "3-3",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To arrange the layout or design of an entire website.",
        "To embed pictures and videos directly into the page.",
        "Only for Tabular Data (information that naturally requires grids of rows and columns).",
        "To create a clickable hyperlink."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-html-topic-7": {
      "canonical": "webdev-33-1-7",
      "subject": "webdev",
      "section": null,
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To create webpage layouts",
        "To present tabular data",
        "To create navigation menus",
        "To display videos"
      ],
      "optionMap": [
        null,
        2,
        null,
        null
      ]
    },
    "webdev-33-1-8": {
      "canonical": "webdev-33-1-8",
      "subject": "webdev",
      "section": "3-3",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<link>",
        "<a>",
        "<hyper>",
        "<href>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-html-topic-8": {
      "canonical": "webdev-33-1-8",
      "subject": "webdev",
      "section": null,
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<link>",
        "<a>",
        "<href>",
        "<url>"
      ],
      "optionMap": [
        0,
        1,
        3,
        null
      ]
    },
    "webdev-33-1-9": {
      "canonical": "webdev-33-1-9",
      "subject": "webdev",
      "section": "3-3",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To change the font color of the text",
        "As a navigational outline to jump between sections",
        "To speed up page loading times",
        "To trigger background animations"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-1-10": {
      "canonical": "webdev-33-1-10",
      "subject": "webdev",
      "section": "3-3",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Canonical Tag",
        "Open Graph Tag",
        "Meta Viewport Tag",
        "Title Tag"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-2-12": {
      "canonical": "webdev-33-2-12",
      "subject": "webdev",
      "section": "3-3",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Yellow",
        "Red",
        "Orange",
        "Black"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-2-13": {
      "canonical": "webdev-33-2-13",
      "subject": "webdev",
      "section": "3-3",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Header, Body, Footer, Border",
        "Content, Paddling, Border, Margarine",
        "Text, Image, Button, Link",
        "Padding, Border, Margin, Content"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-2-14": {
      "canonical": "webdev-33-2-14",
      "subject": "webdev",
      "section": "3-3",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "40",
        "0",
        "10",
        "30"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-2-16": {
      "canonical": "webdev-33-2-16",
      "subject": "webdev",
      "section": "3-3",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "display: (GRID)",
        "display: GRID;",
        "display: GRID",
        "display: grid"
      ],
      "optionMap": [
        0,
        1,
        2,
        2
      ]
    },
    "webdev-33-2-17": {
      "canonical": "webdev-33-2-17",
      "subject": "webdev",
      "section": "3-3",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "mouse or keyboard",
        "keyboard or touchpad",
        "keypad or mouse",
        "mouse or touchpad"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-2-18": {
      "canonical": "webdev-33-2-18",
      "subject": "webdev",
      "section": "3-3",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "769-1279",
        "0-480",
        "481-768",
        "1280+"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-2-19": {
      "canonical": "webdev-33-2-19",
      "subject": "webdev",
      "section": "3-3",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Creates space outside the element separating it from other elements",
        "Creates space inside the element between content and border",
        "Serves as a visible line surrounding the content and padding",
        "D) Defines the inner text dimensions"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-2-20": {
      "canonical": "webdev-33-2-20",
      "subject": "webdev",
      "section": "3-3",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Bootstrap 5",
        "Tailwind CSS",
        "Materialize CSS",
        "Foundation"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-3-21": {
      "canonical": "webdev-33-3-21",
      "subject": "webdev",
      "section": "3-3",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "ES6 = ECMAScript 2020",
        "ES6 = ECMAScript 2009",
        "ES6 = JavaScript Object Notation",
        "ES6 = ECMAScript 2015"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-3-22": {
      "canonical": "webdev-33-3-22",
      "subject": "webdev",
      "section": "3-3",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Destructuring",
        "Template literals",
        "Default parameters",
        "Spread operator"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-3-23": {
      "canonical": "webdev-33-3-23",
      "subject": "webdev",
      "section": "3-3",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "innerHTML",
        "querySelector()",
        "textContent",
        "getElementById()"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-3-24": {
      "canonical": "webdev-33-3-24",
      "subject": "webdev",
      "section": "3-3",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Clicks or activates an element",
        "Edits the value of an input field",
        "Submits an HTML form",
        "Presses a keyboard key"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-3-25": {
      "canonical": "webdev-33-3-25",
      "subject": "webdev",
      "section": "3-3",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "A JSON object immediately",
        "An HTML element object",
        "A CSS selector",
        "A Promise which is fulfilled with a Response object"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-3-26": {
      "canonical": "webdev-33-3-26",
      "subject": "webdev",
      "section": "3-3",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "POST",
        "PUT",
        "GET",
        "DELETE"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-3-27": {
      "canonical": "webdev-33-3-27",
      "subject": "webdev",
      "section": "3-3",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Created, Updated, Deleted",
        "Pending, Fulfilled, Rejected",
        "Started, Running, Finished",
        "Open, Closed, Failed"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-3-28": {
      "canonical": "webdev-33-3-28",
      "subject": "webdev",
      "section": "3-3",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "It selects an HTML element by ID",
        "It converts a JavaScript object into JSON text",
        "It registers an event listener",
        "It pauses the execution of the async function until the Promise is resolved or rejected"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-3-29": {
      "canonical": "webdev-33-3-29",
      "subject": "webdev",
      "section": "3-3",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "JSON.parse() sends data to a server; JSON.stringify() receives data from a server",
        "JSON.parse() creates a Promise; JSON.stringify() resolves a Promise",
        "JSON.parse() converts JSON text to a JavaScript object; JSON.stringify() converts a JavaScript object to JSON text",
        "JSON.parse() selects HTML elements; JSON.stringify() changes CSS styles"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-3-30": {
      "canonical": "webdev-33-3-30",
      "subject": "webdev",
      "section": "3-3",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "It converts every asynchronous operation into a synchronous operation",
        "It removes the need for all Promises",
        "It makes asynchronous code read more like synchronous code",
        "It prevents all errors from occurring during asynchronous operations"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-4-31": {
      "canonical": "webdev-33-4-31",
      "subject": "webdev",
      "section": "3-3",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To develop more codes",
        "To build a computer system",
        "Used for web development",
        "To night will be the night that I will fall for you over again. Don't make me change my mind"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-php-topic-1": {
      "canonical": "webdev-33-4-31",
      "subject": "webdev",
      "section": null,
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To execute on the browser before the result is sent to the server",
        "To store whole numbers without decimals",
        "To enforce strict type safety",
        "To create dynamic and interactive websites"
      ],
      "optionMap": [
        null,
        null,
        null,
        2
      ]
    },
    "webdev-33-4-33": {
      "canonical": "webdev-33-4-33",
      "subject": "webdev",
      "section": "3-3",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "When the same task is needed in several parts of the program, possibly with different input each time",
        "When the program needs to store many related values together",
        "When the program needs to make decisions based on conditions, such as using if-else statements.",
        "When you try your best but you don't succeed…"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-4-34": {
      "canonical": "webdev-33-4-34",
      "subject": "webdev",
      "section": "3-3",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Each value needs its own separate variable",
        "Values can be accessed by a numeric indent or a named podlock, and can be added, updated, or removed",
        "Values can be accessed by a numeric index or a named key, and can be added, updated, or removed",
        "Values can only be accessed by a numeric index"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-4-35": {
      "canonical": "webdev-33-4-35",
      "subject": "webdev",
      "section": "3-3",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<#php... #>",
        "<%php... %>",
        "<\\php... \\>",
        "<?php... ?>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-4-36": {
      "canonical": "webdev-33-4-36",
      "subject": "webdev",
      "section": "3-3",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "A mechanism that assigns a unique id to a user so their data can be accessed across multiple pages until the session ends",
        "A mechanic that assigns a unique id to a user so their data can be accessed across multiple pages until the session ends",
        "A permanent record of the user that stays even after the browser is closed",
        "A request method that shows data in the URL and can be bookmarked"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-php-topic-9": {
      "canonical": "webdev-33-4-36",
      "subject": "webdev",
      "section": null,
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Exceptions",
        "Classes",
        "Sessions",
        "Namespaces"
      ],
      "optionMap": [
        null,
        null,
        0,
        null
      ]
    },
    "webdev-33-4-37": {
      "canonical": "webdev-33-4-37",
      "subject": "webdev",
      "section": "3-3",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Exception Handling",
        "Input Handling",
        "Output Handling",
        "Exempted Handling"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-4-38": {
      "canonical": "webdev-33-4-38",
      "subject": "webdev",
      "section": "3-3",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "True Positive",
        "False",
        "True",
        "False Negative"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-4-39": {
      "canonical": "webdev-33-4-39",
      "subject": "webdev",
      "section": "3-3",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Personal Home Page",
        "Person House Page",
        "Personal House Page",
        "Personal His/Her/They/Them Page"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-33-4-40": {
      "canonical": "webdev-33-4-40",
      "subject": "webdev",
      "section": "3-3",
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "POST, because it hides the password from the URL",
        "GET, because it can only be used for requesting",
        "POST, because it can be bookmarked",
        "GET GET AW"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-php-topic-8": {
      "canonical": "webdev-33-4-40",
      "subject": "webdev",
      "section": null,
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "GET Method",
        "POST Method",
        "Sessions",
        "Namespaces"
      ],
      "optionMap": [
        null,
        0,
        null,
        null
      ]
    },
    "webdev-32-1-2": {
      "canonical": "webdev-32-1-2",
      "subject": "webdev",
      "section": "3-2",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Because it is faster to type.",
        "Because it provides clear meaning and structure for browsers and assistive tools.",
        "Because it automatically makes the page look good.",
        "Because it is required for JavaScript to work."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-1-3": {
      "canonical": "webdev-32-1-3",
      "subject": "webdev",
      "section": "3-2",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<section>",
        "<main>",
        "<aside>",
        "<article>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-1-5": {
      "canonical": "webdev-32-1-5",
      "subject": "webdev",
      "section": "3-2",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<a href=”link.html” open=”new”>",
        "<a href=”link.html” target=”_blank”>",
        "<a href=”link.html” window=”new”>",
        "<a href=”link.html” target=”_newtab”>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-1-6": {
      "canonical": "webdev-32-1-6",
      "subject": "webdev",
      "section": "3-2",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "src",
        "title",
        "alt",
        "description"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-html-topic-5": {
      "canonical": "webdev-32-1-6",
      "subject": "webdev",
      "section": null,
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "src",
        "href",
        "alt",
        "text"
      ],
      "optionMap": [
        0,
        null,
        2,
        null
      ]
    },
    "webdev-32-1-7": {
      "canonical": "webdev-32-1-7",
      "subject": "webdev",
      "section": "3-2",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<th>",
        "<tr>",
        "<td>",
        "<thead>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-1-8": {
      "canonical": "webdev-32-1-8",
      "subject": "webdev",
      "section": "3-2",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To create a popup message on the screen.",
        "To provide a short summary of the page that appears in search engine results.",
        "To describe images for visually impaired users.",
        "To link a CSS file to the HTML document."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-1-9": {
      "canonical": "webdev-32-1-9",
      "subject": "webdev",
      "section": "3-2",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<header>",
        "<h1>",
        "<title>",
        "<footer>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-1-10": {
      "canonical": "webdev-32-1-10",
      "subject": "webdev",
      "section": "3-2",
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<nav>",
        "<aside>",
        "<section>",
        "<div>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-8-1": {
      "canonical": "webdev-32-8-1",
      "subject": "webdev",
      "section": "3-2",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "programming language used to build websites",
        "-like representation of a web page that JavaScript can access and modify",
        "database that stores HTML files",
        "CSS framework for styling pages"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-8-2": {
      "canonical": "webdev-32-8-2",
      "subject": "webdev",
      "section": "3-2",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "const [ price ] = product;",
        "const product.price = price;",
        "const { product: price };",
        "const { price } = product;"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-8-3": {
      "canonical": "webdev-32-8-3",
      "subject": "webdev",
      "section": "3-2",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "document.getElementById()",
        "document.querySelector()",
        "document.querySelectorAll()",
        "document.createElement()"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-8-4": {
      "canonical": "webdev-32-8-4",
      "subject": "webdev",
      "section": "3-2",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "It creates a shallow copy of the provided arguments in memory.",
        "It spreads an existing array into individual standalone arguments.",
        "It gathers multiple individual arguments into a single array.",
        "It pauses the function execution until all arguments are provided."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-8-5": {
      "canonical": "webdev-32-8-5",
      "subject": "webdev",
      "section": "3-2",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Inline attributes are significantly faster to execute by the browser.",
        "addEventListener() is the absolute only way to handle mouse clicks.",
        "It separates JavaScript logic from HTML markup and allows attaching multiple functions to the same event.",
        "It automatically prevents all default browser behaviors for every event type."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-8-6": {
      "canonical": "webdev-32-8-6",
      "subject": "webdev",
      "section": "3-2",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "As the first automatic parameter passed into the function by the browser (e.g., function(event)).",
        "By calling a global function named document.getEvent().",
        "By referencing a global property named document.event.",
        "By importing the external Event module at the very top of your script file."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-8-7": {
      "canonical": "webdev-32-8-7",
      "subject": "webdev",
      "section": "3-2",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "The event fires strictly on the clicked element and terminates immediately",
        "The event flows strictly from the outermost window root down to the clicked element and stops.",
        "The event spreads horizontally to neighbor (sibling) elements on the same level.",
        "The event triggers on the clicked element first, and then travels upward through its parent elements"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-8-8": {
      "canonical": "webdev-32-8-8",
      "subject": "webdev",
      "section": "3-2",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Asynchronous programming",
        "Synchronous programming",
        "Object-oriented programming",
        "Procedural programming"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-8-9": {
      "canonical": "webdev-32-8-9",
      "subject": "webdev",
      "section": "3-2",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Events",
        "Functions",
        "Arrays",
        "Promises"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-8-10": {
      "canonical": "webdev-32-8-10",
      "subject": "webdev",
      "section": "3-2",
      "topic": "javascript",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Single quotes",
        "Parentheses",
        "Double quotes",
        "Square brackets"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-10-1": {
      "canonical": "webdev-32-10-1",
      "subject": "webdev",
      "section": "3-2",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Cascade/Specify",
        "Box Model",
        "CSS Layout",
        "Sharon Cuneta"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-10-2": {
      "canonical": "webdev-32-10-2",
      "subject": "webdev",
      "section": "3-2",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Responsiveness",
        "Flex",
        "Grid",
        "Pepito Manaloto"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-10-3": {
      "canonical": "webdev-32-10-3",
      "subject": "webdev",
      "section": "3-2",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Data",
        "Content",
        "Text",
        "Regine Velasquez"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-10-4": {
      "canonical": "webdev-32-10-4",
      "subject": "webdev",
      "section": "3-2",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Sidebar",
        "Footer",
        "Header",
        "Wally Bayola"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-10-5": {
      "canonical": "webdev-32-10-5",
      "subject": "webdev",
      "section": "3-2",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Pax Silica",
        "Pixel",
        "Percent Ratio",
        "Pei Xing"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-10-6": {
      "canonical": "webdev-32-10-6",
      "subject": "webdev",
      "section": "3-2",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Cascading",
        "Bahala na si Batman",
        "Specifying",
        "CSS Layout"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-2": {
      "canonical": "webdev-32-10-6",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To create HTML elements",
        "To determine which CSS rule will be applied",
        "To add images to a webpage",
        "To organize files"
      ],
      "optionMap": [
        null,
        0,
        null,
        null
      ]
    },
    "webdev-32-10-7": {
      "canonical": "webdev-32-10-7",
      "subject": "webdev",
      "section": "3-2",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Breakthrough",
        "Breakpoint",
        "Breakup",
        "Kathniel"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-10-8": {
      "canonical": "webdev-32-10-8",
      "subject": "webdev",
      "section": "3-2",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Flexbox",
        "Float",
        "Grid",
        "Barney"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-10-9": {
      "canonical": "webdev-32-10-9",
      "subject": "webdev",
      "section": "3-2",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Specialty",
        "Specification",
        "Specificity",
        "Rebisco (Dahil Special ka)"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-32-10-10": {
      "canonical": "webdev-32-10-10",
      "subject": "webdev",
      "section": "3-2",
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Bootstrap",
        "Tailwind",
        "W3",
        "Jb Suarez (Eh pano kung 3 yan)"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-html-topic-1": {
      "canonical": "webdev-html-topic-1",
      "subject": "webdev",
      "section": null,
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To create databases",
        "To structure and organize content on webpages",
        "To edit photos",
        "To create computer hardware"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-html-topic-2": {
      "canonical": "webdev-html-topic-2",
      "subject": "webdev",
      "section": null,
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<html5>",
        "<doctype>",
        "<!DOCTYPE html>",
        "<HTML>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-html-topic-3": {
      "canonical": "webdev-html-topic-3",
      "subject": "webdev",
      "section": null,
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "HTML that only changes the appearance of a webpage",
        "HTML elements that describe the meaning and role of content",
        "HTML used only for images",
        "HTML used to create animations"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-html-topic-4": {
      "canonical": "webdev-html-topic-4",
      "subject": "webdev",
      "section": null,
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<navigate>",
        "<links>",
        "<nav>",
        "<menu>"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-html-topic-9": {
      "canonical": "webdev-html-topic-9",
      "subject": "webdev",
      "section": null,
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To make websites available only on computers",
        "To make websites usable by people with different abilities",
        "To make websites more colorful",
        "To make websites load more advertisements"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-html-topic-10": {
      "canonical": "webdev-html-topic-10",
      "subject": "webdev",
      "section": null,
      "topic": "html",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Search Engine Optimization",
        "Search Element Organization",
        "Site Engine Operation",
        "Search Entry Optimization"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-1": {
      "canonical": "webdev-css-topic-1",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Computer Style Sheets",
        "Casckading Style Sheets",
        "Creative Style System",
        "Cascading Style Sheets"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-3": {
      "canonical": "webdev-css-topic-3",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Universal selector",
        "Type selector",
        "Class selector",
        "ID selector"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-4": {
      "canonical": "webdev-css-topic-4",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "#",
        "*",
        ".",
        "@"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-5": {
      "canonical": "webdev-css-topic-5",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "The rule written first",
        "The rule written later",
        "The rule with fewer properties",
        "The rule with more spaces"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-6": {
      "canonical": "webdev-css-topic-6",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Margin",
        "Border",
        "Padding",
        "Content"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-9": {
      "canonical": "webdev-css-topic-9",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "flex-direction",
        "justify-content",
        "align-items",
        "flex-wrap"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-10": {
      "canonical": "webdev-css-topic-10",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "flex-wrap and flex-flow",
        "order and flex-grow",
        "justify-content and align-items",
        "align-content and flex-basis"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-12": {
      "canonical": "webdev-css-topic-12",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To make websites responsive to different screen sizes",
        "To create HTML elements",
        "To store website data",
        "To increase internet speed"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-13": {
      "canonical": "webdev-css-topic-13",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "@screen",
        "@responsive",
        "@device",
        "@media"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-css-topic-15": {
      "canonical": "webdev-css-topic-15",
      "subject": "webdev",
      "section": null,
      "topic": "css",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Ready-made CSS classes and components",
        "It replaces HTML completely",
        "It can only be used for mobile apps",
        "It does not use CSS"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-php-topic-3": {
      "canonical": "webdev-php-topic-3",
      "subject": "webdev",
      "section": null,
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "string",
        "integer",
        "boolean",
        "float"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-php-topic-4": {
      "canonical": "webdev-php-topic-4",
      "subject": "webdev",
      "section": null,
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<?php ... ?>",
        "declare(strict_types=1);",
        "session_start();",
        "use School\\Student;"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-php-topic-5": {
      "canonical": "webdev-php-topic-5",
      "subject": "webdev",
      "section": null,
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Spaceship Operator (<=>)",
        "Null Coalescing Operator (??)",
        "Ternary Operator (?:)",
        "Modern match"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-php-topic-6": {
      "canonical": "webdev-php-topic-6",
      "subject": "webdev",
      "section": null,
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "foreach",
        "for loop",
        "break",
        "while and do-while"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-php-topic-7": {
      "canonical": "webdev-php-topic-7",
      "subject": "webdev",
      "section": null,
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Associative Arrays",
        "Standard Arrays",
        "Scalar types",
        "Objects"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "webdev-php-topic-10": {
      "canonical": "webdev-php-topic-10",
      "subject": "webdev",
      "section": null,
      "topic": "php",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "throw",
        "try",
        "Input validation",
        "catch"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-1-1": {
      "canonical": "elective-34-1-1",
      "subject": "elective",
      "section": "3-4",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Unstructured data",
        "Semi-struchtured data",
        "Unstructured deta",
        "Semi-structured data"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-1-2": {
      "canonical": "elective-34-1-2",
      "subject": "elective",
      "section": "3-4",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Ang Pasko I...sumapit",
        "Application Porgramming Interface",
        "Application Programming Interface",
        "Application Progranning Interface"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-1-3": {
      "canonical": "elective-34-1-3",
      "subject": "elective",
      "section": "3-4",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Outliers",
        "Typographical errors",
        "Inconsistent formats",
        "Incorrect values"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-1-4": {
      "canonical": "elective-34-1-4",
      "subject": "elective",
      "section": "3-4",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "<.3%",
        "<.5%",
        "<3%",
        "<5%"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-1-5": {
      "canonical": "elective-34-1-5",
      "subject": "elective",
      "section": "3-4",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Stock prices",
        "Gender",
        "Daily sales",
        "Age"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-1-6": {
      "canonical": "elective-34-1-6",
      "subject": "elective",
      "section": "3-4",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Primary Data",
        "Secondary Data",
        "Public datasets",
        "Databases"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-1-7": {
      "canonical": "elective-34-1-7",
      "subject": "elective",
      "section": "3-4",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Data Explanation",
        "Data Gathering",
        "Data Exploration",
        "Data Analysis"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-1-8": {
      "canonical": "elective-34-1-8",
      "subject": "elective",
      "section": "3-4",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Exam Daw AAAAAAAAAAAAA",
        "Electronic Design Automation",
        "Event-Driven Architecture",
        "Exploratory Data Analysis"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-1-9": {
      "canonical": "elective-34-1-9",
      "subject": "elective",
      "section": "3-4",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Model-Based RL",
        "One-Hot Encoding",
        "Label Encoding",
        "Model-Free RL"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-1-10": {
      "canonical": "elective-34-1-10",
      "subject": "elective",
      "section": "3-4",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Examples",
        "Targets",
        "Features",
        "Clustering"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-5-1": {
      "canonical": "elective-34-5-1",
      "subject": "elective",
      "section": "3-4",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "A sample of data to be fed to a model",
        "A framework",
        "One complete pass through the training dataset",
        "One weight update after processing one batch."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-2-13": {
      "canonical": "elective-34-5-1",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "One batch of data",
        "One complete pass through the training dataset",
        "One model update",
        "The amount of memory used"
      ],
      "optionMap": [
        null,
        2,
        null,
        null
      ]
    },
    "elective-34-3-3": {
      "canonical": "elective-34-5-1",
      "subject": "elective",
      "section": "3-4",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Spectograms",
        "Audio Features",
        "Epochs"
      ],
      "optionMap": [
        null,
        null,
        2
      ]
    },
    "elective-34-5-2": {
      "canonical": "elective-34-5-2",
      "subject": "elective",
      "section": "3-4",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "How well the model does on a separate set of images it has never seen during weight updates.",
        "How well the model does on the images it's learning from.",
        "Overfitting",
        "Underfitting"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-5-3": {
      "canonical": "elective-34-5-3",
      "subject": "elective",
      "section": "3-4",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Binary",
        "Multi-class",
        "Multi-lable",
        "Multi-label"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-5-4": {
      "canonical": "elective-34-5-4",
      "subject": "elective",
      "section": "3-4",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "CNN",
        "CBC",
        "CCC",
        "COM"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-5-5": {
      "canonical": "elective-34-5-5",
      "subject": "elective",
      "section": "3-4",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To train the model to predict faster and better using GPUs",
        "To convert images into raw CSV files",
        "To provide a specific web address that receives input and returns the model’s prediction",
        "To automatically annotate and clean image inputs from the users"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-5-6": {
      "canonical": "elective-34-5-6",
      "subject": "elective",
      "section": "3-4",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Unit Testing",
        "Load Testing",
        "User Acceptance Testing (UAT)",
        "Model Training"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-5-7": {
      "canonical": "elective-34-5-7",
      "subject": "elective",
      "section": "3-4",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Preprocessing happens after training; augmentation happens before training",
        "They are the same process — the terms are used interchangeably",
        "Preprocessing standardizes existing images; augmentation creates new variations of images to expand the training set",
        "Preprocessing is only used for object detection; augmentation is only used for classification"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-5-8": {
      "canonical": "elective-34-5-8",
      "subject": "elective",
      "section": "3-4",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Manual labeling scales linearly with dataset size since every label is hand-drawn; semi-automated labeling is generally faster since humans only review/correct model-generated draft labels",
        "Semi-automated labeling is only faster for text data, not images",
        "Both approaches take the same amount of time, since a human must always draw the final label regardless of method",
        "Manual labeling is always faster because there's no model inference step involved"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-5-9": {
      "canonical": "elective-34-5-9",
      "subject": "elective",
      "section": "3-4",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "When the dataset is perfectly balanced and classes are equal",
        "When false negatives are important to avoid",
        "When false positives are more harmful than false negatives",
        "When you want to calculate the total overall accuracy of all predictions"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-5-10": {
      "canonical": "elective-34-5-10",
      "subject": "elective",
      "section": "3-4",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "0.68",
        "68%",
        "68.5%",
        "68.6%"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-34-3-1": {
      "canonical": "elective-34-3-1",
      "subject": "elective",
      "section": "3-4",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Linear Classifier",
        "Audio Waves",
        "Audio Datasets"
      ],
      "optionMap": [
        0,
        1,
        2
      ]
    },
    "elective-34-3-2": {
      "canonical": "elective-34-3-2",
      "subject": "elective",
      "section": "3-4",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Convolutional Neural Network Architecture",
        "Flattening & Dense Layers",
        "Annotation Paradigms"
      ],
      "optionMap": [
        0,
        1,
        2
      ]
    },
    "elective-34-3-4": {
      "canonical": "elective-34-3-4",
      "subject": "elective",
      "section": "3-4",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Tempo",
        "Voice",
        "Harmonic Content"
      ],
      "optionMap": [
        0,
        1,
        2
      ]
    },
    "elective-34-3-5": {
      "canonical": "elective-34-3-5",
      "subject": "elective",
      "section": "3-4",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Speech Datasets",
        "Music Datasets",
        "Sound Isolation"
      ],
      "optionMap": [
        0,
        1,
        2
      ]
    },
    "elective-34-3-6": {
      "canonical": "elective-34-3-6",
      "subject": "elective",
      "section": "3-4",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "TensorFlow",
        "Keras",
        "Pandas"
      ],
      "optionMap": [
        0,
        1,
        2
      ]
    },
    "elective-34-3-7": {
      "canonical": "elective-34-3-7",
      "subject": "elective",
      "section": "3-4",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Spectre",
        "Feature Maps",
        "Spectrogram"
      ],
      "optionMap": [
        0,
        1,
        2
      ]
    },
    "elective-34-3-8": {
      "canonical": "elective-34-3-8",
      "subject": "elective",
      "section": "3-4",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Audio datasets",
        "Zero-Crossing Rate",
        "MFCCS"
      ],
      "optionMap": [
        0,
        1,
        2
      ]
    },
    "elective-34-3-9": {
      "canonical": "elective-34-3-9",
      "subject": "elective",
      "section": "3-4",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Flattening & Dense Layers",
        "Relu function",
        "Convolutional Layer"
      ],
      "optionMap": [
        0,
        1,
        2
      ]
    },
    "elective-34-3-10": {
      "canonical": "elective-34-3-10",
      "subject": "elective",
      "section": "3-4",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Model training",
        "Feature Extraction",
        "Valence"
      ],
      "optionMap": [
        0,
        1,
        2
      ]
    },
    "elective-33-1-1": {
      "canonical": "elective-33-1-1",
      "subject": "elective",
      "section": "3-3",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Deployment set",
        "Testing set",
        "Validation set",
        "Training set"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-1-2": {
      "canonical": "elective-33-1-2",
      "subject": "elective",
      "section": "3-3",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Monitoring and Maintenance",
        "Model Training and Selection",
        "Model Deployment",
        "Data Collection and Preparation"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-1-3": {
      "canonical": "elective-33-1-3",
      "subject": "elective",
      "section": "3-3",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Increase errors",
        "Reduce data accuracy",
        "Create biased data",
        "Improve model accuracy and reliability"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-1-4": {
      "canonical": "elective-33-1-4",
      "subject": "elective",
      "section": "3-3",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Tune hyperparameters",
        "Understand the data",
        "Split the data",
        "Define the problem"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-1-5": {
      "canonical": "elective-33-1-5",
      "subject": "elective",
      "section": "3-3",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Exploration evaluates statistics, while visualization translates data into graphics.",
        "Exploration removes duplicates, while visualization scales numerical features.",
        "Exploration cleans raw data, while visualization splits dataset for testing.",
        "Exploration trains the models, while visualization debugs final deployments."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-1-6": {
      "canonical": "elective-33-1-6",
      "subject": "elective",
      "section": "3-3",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Relevant data",
        "Training Data",
        "Useful Features",
        "Duplicates and errors"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-1-7": {
      "canonical": "elective-33-1-7",
      "subject": "elective",
      "section": "3-3",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Training, validation, and test sets",
        "Independent, dependent, and continuous sets",
        "Supervised, unsupervised, and reward set",
        "Gathering, cleaning, and deployment"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-1-8": {
      "canonical": "elective-33-1-8",
      "subject": "elective",
      "section": "3-3",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Data Exploration",
        "Data Cleaning",
        "Data Gathering",
        "Data Transformation"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-1-9": {
      "canonical": "elective-33-1-9",
      "subject": "elective",
      "section": "3-3",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Data leakage",
        "Data encoding",
        "Feature selection",
        "Model deployment"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-1-10": {
      "canonical": "elective-33-1-10",
      "subject": "elective",
      "section": "3-3",
      "topic": "datasets",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "It automatically writes the model algorithm",
        "It bypasses the need for data collection",
        "It saves time and aids in model debugging",
        "It deploys the model into a live system"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-2-11": {
      "canonical": "elective-33-2-11",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "learning rate schedule",
        "prediction testing",
        "error prediction",
        "early stopping"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-2-12": {
      "canonical": "elective-33-2-12",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "learning rate schedule",
        "prediction testing",
        "error prediction",
        "early stopping"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-2-14": {
      "canonical": "elective-33-2-14",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "The dataset is deleted",
        "The model stops training",
        "The model updates its weights",
        "A new dataset is created"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-2-15": {
      "canonical": "elective-33-2-15",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "True negative",
        "True positive",
        "False negative",
        "False positive"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-2-16": {
      "canonical": "elective-33-2-16",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "overfitting",
        "underfitting",
        "data leakage",
        "high variance"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-2-17": {
      "canonical": "elective-33-2-17",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "The model underfits and has higher error rates on training data",
        "Training time and computational load are reduced",
        "The model begins to memorize the training data instead of learning general patterns",
        "The model loses its parameter weights completely"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-2-18": {
      "canonical": "elective-33-2-18",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "machine learning",
        "loss",
        "accuracy",
        "model performance"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-2-19": {
      "canonical": "elective-33-2-19",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "True",
        "false"
      ],
      "optionMap": [
        0,
        1
      ]
    },
    "elective-33-2-20": {
      "canonical": "elective-33-2-20",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Overfitting",
        "cross entropy loss",
        "noise/outliers",
        "epoch"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-3-21": {
      "canonical": "elective-33-3-21",
      "subject": "elective",
      "section": "3-3",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "The data instance is restricted to only one dominant class",
        "Each label is represented as present or absent for an instance",
        "The categories evaluated by the system are mutually exclusive",
        "Hindi ito ang sagot."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-3-22": {
      "canonical": "elective-33-3-22",
      "subject": "elective",
      "section": "3-3",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "It eliminates the need for feature extraction by directly converting raw pixel data into a single predefined l...",
        "It enables the model to automatically recognize distinct patterns—such as the shapes and textures of the cells—and map those extracted features to the most probable learned class.",
        "It allows the system to assign multiple, non-mutually exclusive labels to a single cell image simultaneously to handle overlapping categories.",
        "Regine Velasquez-Alcasid"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-3-23": {
      "canonical": "elective-33-3-23",
      "subject": "elective",
      "section": "3-3",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Data Gathering",
        "Image Preprocessing",
        "Data Augmentation",
        "Model Evaluation"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-3-24": {
      "canonical": "elective-33-3-24",
      "subject": "elective",
      "section": "3-3",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To help the model understand what each image represents.",
        "To make the images larger.",
        "To create variations of existing images and increase dataset diversity.",
        "To day is gonna be the day that they're gonna throw it back to you."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-3-25": {
      "canonical": "elective-33-3-25",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Predicted Yes, actually No",
        "Predicted No, actually No",
        "Predicted No, actually Yes",
        "Predicted Yes, actually Yes"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-3-26": {
      "canonical": "elective-33-3-26",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Because of its low error on training data but high error on new data.",
        "Because of it's high errors on training and new data.",
        "Because it's trained too long.",
        "Kase sabe ko."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-3-27": {
      "canonical": "elective-33-3-27",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To make the training process run faster and use less computing power.",
        "To ensure the model generalizes well to new data rather than just memorizing the training set.",
        "To eliminate the need for common evaluation metrics like Accuracy and Loss curves.",
        "To retrain the model continuously during the evaluation phase."
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-3-28": {
      "canonical": "elective-33-3-28",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Accuracy",
        "Confusion Matrix",
        "Loss curves",
        "Precision, Recall, F1-score"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-3-29": {
      "canonical": "elective-33-3-29",
      "subject": "elective",
      "section": "3-3",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Testing",
        "Integrate",
        "Trainig",
        "Data Gathering"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-3-30": {
      "canonical": "elective-33-3-30",
      "subject": "elective",
      "section": "3-3",
      "topic": "images",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Functional",
        "Edge Cases",
        "Usability",
        "Accuracy"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-4-31": {
      "canonical": "elective-33-4-31",
      "subject": "elective",
      "section": "3-3",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Identifying the type of sound",
        "Creating a new computer",
        "Editing pictures",
        "Storing documents"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-4-32": {
      "canonical": "elective-33-4-32",
      "subject": "elective",
      "section": "3-3",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Car horn",
        "Bird sound",
        "Factory machine",
        "Loudspeaker"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-4-33": {
      "canonical": "elective-33-4-33",
      "subject": "elective",
      "section": "3-3",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "A collection of audio recordings",
        "A collection of pictures",
        "A computer program",
        "A microphone"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-4-34": {
      "canonical": "elective-33-4-34",
      "subject": "elective",
      "section": "3-3",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To make audio data more consistent",
        "To delete the entire dataset",
        "To create a new computer",
        "To turn audio into pictures"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-4-35": {
      "canonical": "elective-33-4-35",
      "subject": "elective",
      "section": "3-3",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "How frequencies change over time",
        "The number of computers used",
        "The size of a dataset",
        "The name of the speaker"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-4-36": {
      "canonical": "elective-33-4-36",
      "subject": "elective",
      "section": "3-3",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "The model learns patterns from audio examples",
        "The computer is turned off",
        "The audio files are deleted",
        "The dataset becomes a video"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-4-37": {
      "canonical": "elective-33-4-37",
      "subject": "elective",
      "section": "3-3",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Sound classification",
        "Speech recognition",
        "Text-to-speech",
        "Audio generation"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-4-38": {
      "canonical": "elective-33-4-38",
      "subject": "elective",
      "section": "3-3",
      "topic": "training",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Percentage of correct predictions",
        "Number of audio files",
        "Length of the recording",
        "Sampling rate"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-4-39": {
      "canonical": "elective-33-4-39",
      "subject": "elective",
      "section": "3-3",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "To test the model using new audio",
        "To delete incorrect recordings",
        "To create the dataset",
        "To change the presentation design"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    },
    "elective-33-4-40": {
      "canonical": "elective-33-4-40",
      "subject": "elective",
      "section": "3-3",
      "topic": "audio",
      "type": "choice",
      "keyChanged": false,
      "options": [
        "Audio → Dataset → Training → Evaluation → Testing",
        "Testing → Audio → Dataset → Training",
        "Dataset → Testing → Audio → Evaluation",
        "Training → Audio → Testing → Dataset"
      ],
      "optionMap": [
        0,
        1,
        2,
        3
      ]
    }
  },
  "legacySets": [
    {
      "id": "webdev-34",
      "subject": "webdev",
      "section": "3-4",
      "ids": [
        "webdev-34-2-1",
        "webdev-34-2-2",
        "webdev-34-2-3",
        "webdev-34-2-4",
        "webdev-34-2-5",
        "webdev-34-2-6",
        "webdev-34-9-1",
        "webdev-34-9-2",
        "webdev-34-9-3",
        "webdev-34-9-4",
        "webdev-34-9-5",
        "webdev-34-9-6",
        "webdev-34-9-7",
        "webdev-34-9-8",
        "webdev-34-9-9",
        "webdev-34-9-10",
        "webdev-34-5-1",
        "webdev-34-5-2",
        "webdev-34-5-3",
        "webdev-34-5-4",
        "webdev-34-5-5",
        "webdev-34-5-6",
        "webdev-34-5-7",
        "webdev-34-5-8",
        "webdev-34-5-9",
        "webdev-34-5-10"
      ],
      "groups": {
        "2": [
          "webdev-34-2-1",
          "webdev-34-2-2",
          "webdev-34-2-3",
          "webdev-34-2-4",
          "webdev-34-2-5",
          "webdev-34-2-6"
        ],
        "5": [
          "webdev-34-5-1",
          "webdev-34-5-2",
          "webdev-34-5-3",
          "webdev-34-5-4",
          "webdev-34-5-5",
          "webdev-34-5-6",
          "webdev-34-5-7",
          "webdev-34-5-8",
          "webdev-34-5-9",
          "webdev-34-5-10"
        ],
        "9": [
          "webdev-34-9-1",
          "webdev-34-9-2",
          "webdev-34-9-3",
          "webdev-34-9-4",
          "webdev-34-9-5",
          "webdev-34-9-6",
          "webdev-34-9-7",
          "webdev-34-9-8",
          "webdev-34-9-9",
          "webdev-34-9-10"
        ]
      }
    },
    {
      "id": "webdev-33",
      "subject": "webdev",
      "section": "3-3",
      "ids": [
        "webdev-33-1-1",
        "webdev-33-1-2",
        "webdev-33-1-3",
        "webdev-33-1-4",
        "webdev-33-1-5",
        "webdev-33-1-6",
        "webdev-33-1-7",
        "webdev-33-1-8",
        "webdev-33-1-9",
        "webdev-33-1-10",
        "webdev-33-2-11",
        "webdev-33-2-12",
        "webdev-33-2-13",
        "webdev-33-2-14",
        "webdev-33-2-15",
        "webdev-33-2-16",
        "webdev-33-2-17",
        "webdev-33-2-18",
        "webdev-33-2-19",
        "webdev-33-2-20",
        "webdev-33-3-21",
        "webdev-33-3-22",
        "webdev-33-3-23",
        "webdev-33-3-24",
        "webdev-33-3-25",
        "webdev-33-3-26",
        "webdev-33-3-27",
        "webdev-33-3-28",
        "webdev-33-3-29",
        "webdev-33-3-30",
        "webdev-33-4-31",
        "webdev-33-4-32",
        "webdev-33-4-33",
        "webdev-33-4-34",
        "webdev-33-4-35",
        "webdev-33-4-36",
        "webdev-33-4-37",
        "webdev-33-4-38",
        "webdev-33-4-39",
        "webdev-33-4-40"
      ],
      "groups": {
        "1": [
          "webdev-33-1-1",
          "webdev-33-1-2",
          "webdev-33-1-3",
          "webdev-33-1-4",
          "webdev-33-1-5",
          "webdev-33-1-6",
          "webdev-33-1-7",
          "webdev-33-1-8",
          "webdev-33-1-9",
          "webdev-33-1-10"
        ],
        "2": [
          "webdev-33-2-11",
          "webdev-33-2-12",
          "webdev-33-2-13",
          "webdev-33-2-14",
          "webdev-33-2-15",
          "webdev-33-2-16",
          "webdev-33-2-17",
          "webdev-33-2-18",
          "webdev-33-2-19",
          "webdev-33-2-20"
        ],
        "3": [
          "webdev-33-3-21",
          "webdev-33-3-22",
          "webdev-33-3-23",
          "webdev-33-3-24",
          "webdev-33-3-25",
          "webdev-33-3-26",
          "webdev-33-3-27",
          "webdev-33-3-28",
          "webdev-33-3-29",
          "webdev-33-3-30"
        ],
        "4": [
          "webdev-33-4-31",
          "webdev-33-4-32",
          "webdev-33-4-33",
          "webdev-33-4-34",
          "webdev-33-4-35",
          "webdev-33-4-36",
          "webdev-33-4-37",
          "webdev-33-4-38",
          "webdev-33-4-39",
          "webdev-33-4-40"
        ]
      }
    },
    {
      "id": "webdev-32",
      "subject": "webdev",
      "section": "3-2",
      "ids": [
        "webdev-32-1-1",
        "webdev-32-1-2",
        "webdev-32-1-3",
        "webdev-32-1-4",
        "webdev-32-1-5",
        "webdev-32-1-6",
        "webdev-32-1-7",
        "webdev-32-1-8",
        "webdev-32-1-9",
        "webdev-32-1-10",
        "webdev-32-8-1",
        "webdev-32-8-2",
        "webdev-32-8-3",
        "webdev-32-8-4",
        "webdev-32-8-5",
        "webdev-32-8-6",
        "webdev-32-8-7",
        "webdev-32-8-8",
        "webdev-32-8-9",
        "webdev-32-8-10",
        "webdev-32-10-1",
        "webdev-32-10-2",
        "webdev-32-10-3",
        "webdev-32-10-4",
        "webdev-32-10-5",
        "webdev-32-10-6",
        "webdev-32-10-7",
        "webdev-32-10-8",
        "webdev-32-10-9",
        "webdev-32-10-10"
      ],
      "groups": {
        "1": [
          "webdev-32-1-1",
          "webdev-32-1-2",
          "webdev-32-1-3",
          "webdev-32-1-4",
          "webdev-32-1-5",
          "webdev-32-1-6",
          "webdev-32-1-7",
          "webdev-32-1-8",
          "webdev-32-1-9",
          "webdev-32-1-10"
        ],
        "8": [
          "webdev-32-8-1",
          "webdev-32-8-2",
          "webdev-32-8-3",
          "webdev-32-8-4",
          "webdev-32-8-5",
          "webdev-32-8-6",
          "webdev-32-8-7",
          "webdev-32-8-8",
          "webdev-32-8-9",
          "webdev-32-8-10"
        ],
        "10": [
          "webdev-32-10-1",
          "webdev-32-10-2",
          "webdev-32-10-3",
          "webdev-32-10-4",
          "webdev-32-10-5",
          "webdev-32-10-6",
          "webdev-32-10-7",
          "webdev-32-10-8",
          "webdev-32-10-9",
          "webdev-32-10-10"
        ]
      }
    },
    {
      "id": "webdev-html",
      "subject": "webdev",
      "section": null,
      "ids": [
        "webdev-html-topic-1",
        "webdev-html-topic-2",
        "webdev-html-topic-3",
        "webdev-html-topic-4",
        "webdev-html-topic-5",
        "webdev-html-topic-6",
        "webdev-html-topic-7",
        "webdev-html-topic-8",
        "webdev-html-topic-9",
        "webdev-html-topic-10"
      ],
      "groups": {
        "topic": [
          "webdev-html-topic-1",
          "webdev-html-topic-2",
          "webdev-html-topic-3",
          "webdev-html-topic-4",
          "webdev-html-topic-5",
          "webdev-html-topic-6",
          "webdev-html-topic-7",
          "webdev-html-topic-8",
          "webdev-html-topic-9",
          "webdev-html-topic-10"
        ]
      }
    },
    {
      "id": "webdev-css",
      "subject": "webdev",
      "section": null,
      "ids": [
        "webdev-css-topic-1",
        "webdev-css-topic-2",
        "webdev-css-topic-3",
        "webdev-css-topic-4",
        "webdev-css-topic-5",
        "webdev-css-topic-6",
        "webdev-css-topic-7",
        "webdev-css-topic-8",
        "webdev-css-topic-9",
        "webdev-css-topic-10",
        "webdev-css-topic-11",
        "webdev-css-topic-12",
        "webdev-css-topic-13",
        "webdev-css-topic-14",
        "webdev-css-topic-15"
      ],
      "groups": {
        "topic": [
          "webdev-css-topic-1",
          "webdev-css-topic-2",
          "webdev-css-topic-3",
          "webdev-css-topic-4",
          "webdev-css-topic-5",
          "webdev-css-topic-6",
          "webdev-css-topic-7",
          "webdev-css-topic-8",
          "webdev-css-topic-9",
          "webdev-css-topic-10",
          "webdev-css-topic-11",
          "webdev-css-topic-12",
          "webdev-css-topic-13",
          "webdev-css-topic-14",
          "webdev-css-topic-15"
        ]
      }
    },
    {
      "id": "webdev-php",
      "subject": "webdev",
      "section": null,
      "ids": [
        "webdev-php-topic-1",
        "webdev-php-topic-2",
        "webdev-php-topic-3",
        "webdev-php-topic-4",
        "webdev-php-topic-5",
        "webdev-php-topic-6",
        "webdev-php-topic-7",
        "webdev-php-topic-8",
        "webdev-php-topic-9",
        "webdev-php-topic-10"
      ],
      "groups": {
        "topic": [
          "webdev-php-topic-1",
          "webdev-php-topic-2",
          "webdev-php-topic-3",
          "webdev-php-topic-4",
          "webdev-php-topic-5",
          "webdev-php-topic-6",
          "webdev-php-topic-7",
          "webdev-php-topic-8",
          "webdev-php-topic-9",
          "webdev-php-topic-10"
        ]
      }
    },
    {
      "id": "elective-34",
      "subject": "elective",
      "section": "3-4",
      "ids": [
        "elective-34-1-1",
        "elective-34-1-2",
        "elective-34-1-3",
        "elective-34-1-4",
        "elective-34-1-5",
        "elective-34-1-6",
        "elective-34-1-7",
        "elective-34-1-8",
        "elective-34-1-9",
        "elective-34-1-10",
        "elective-34-5-1",
        "elective-34-5-2",
        "elective-34-5-3",
        "elective-34-5-4",
        "elective-34-5-5",
        "elective-34-5-6",
        "elective-34-5-7",
        "elective-34-5-8",
        "elective-34-5-9",
        "elective-34-5-10",
        "elective-34-3-1",
        "elective-34-3-2",
        "elective-34-3-3",
        "elective-34-3-4",
        "elective-34-3-5",
        "elective-34-3-6",
        "elective-34-3-7",
        "elective-34-3-8",
        "elective-34-3-9",
        "elective-34-3-10"
      ],
      "groups": {
        "1": [
          "elective-34-1-1",
          "elective-34-1-2",
          "elective-34-1-3",
          "elective-34-1-4",
          "elective-34-1-5",
          "elective-34-1-6",
          "elective-34-1-7",
          "elective-34-1-8",
          "elective-34-1-9",
          "elective-34-1-10"
        ],
        "3": [
          "elective-34-3-1",
          "elective-34-3-2",
          "elective-34-3-3",
          "elective-34-3-4",
          "elective-34-3-5",
          "elective-34-3-6",
          "elective-34-3-7",
          "elective-34-3-8",
          "elective-34-3-9",
          "elective-34-3-10"
        ],
        "5": [
          "elective-34-5-1",
          "elective-34-5-2",
          "elective-34-5-3",
          "elective-34-5-4",
          "elective-34-5-5",
          "elective-34-5-6",
          "elective-34-5-7",
          "elective-34-5-8",
          "elective-34-5-9",
          "elective-34-5-10"
        ]
      }
    },
    {
      "id": "elective-33",
      "subject": "elective",
      "section": "3-3",
      "ids": [
        "elective-33-1-1",
        "elective-33-1-2",
        "elective-33-1-3",
        "elective-33-1-4",
        "elective-33-1-5",
        "elective-33-1-6",
        "elective-33-1-7",
        "elective-33-1-8",
        "elective-33-1-9",
        "elective-33-1-10",
        "elective-33-2-11",
        "elective-33-2-12",
        "elective-33-2-13",
        "elective-33-2-14",
        "elective-33-2-15",
        "elective-33-2-16",
        "elective-33-2-17",
        "elective-33-2-18",
        "elective-33-2-19",
        "elective-33-2-20",
        "elective-33-3-21",
        "elective-33-3-22",
        "elective-33-3-23",
        "elective-33-3-24",
        "elective-33-3-25",
        "elective-33-3-26",
        "elective-33-3-27",
        "elective-33-3-28",
        "elective-33-3-29",
        "elective-33-3-30",
        "elective-33-4-31",
        "elective-33-4-32",
        "elective-33-4-33",
        "elective-33-4-34",
        "elective-33-4-35",
        "elective-33-4-36",
        "elective-33-4-37",
        "elective-33-4-38",
        "elective-33-4-39",
        "elective-33-4-40"
      ],
      "groups": {
        "1": [
          "elective-33-1-1",
          "elective-33-1-2",
          "elective-33-1-3",
          "elective-33-1-4",
          "elective-33-1-5",
          "elective-33-1-6",
          "elective-33-1-7",
          "elective-33-1-8",
          "elective-33-1-9",
          "elective-33-1-10"
        ],
        "2": [
          "elective-33-2-11",
          "elective-33-2-12",
          "elective-33-2-13",
          "elective-33-2-14",
          "elective-33-2-15",
          "elective-33-2-16",
          "elective-33-2-17",
          "elective-33-2-18",
          "elective-33-2-19",
          "elective-33-2-20"
        ],
        "3": [
          "elective-33-3-21",
          "elective-33-3-22",
          "elective-33-3-23",
          "elective-33-3-24",
          "elective-33-3-25",
          "elective-33-3-26",
          "elective-33-3-27",
          "elective-33-3-28",
          "elective-33-3-29",
          "elective-33-3-30"
        ],
        "4": [
          "elective-33-4-31",
          "elective-33-4-32",
          "elective-33-4-33",
          "elective-33-4-34",
          "elective-33-4-35",
          "elective-33-4-36",
          "elective-33-4-37",
          "elective-33-4-38",
          "elective-33-4-39",
          "elective-33-4-40"
        ]
      }
    }
  ]
};
