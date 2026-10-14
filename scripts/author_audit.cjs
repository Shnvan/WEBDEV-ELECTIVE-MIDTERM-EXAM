// Curated, item-by-item review. Run explicitly to author decisions; the importer never runs this.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),ctx={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'data/quizzes.js'),'utf8'),ctx);
const raw=ctx.window.QUIZ_DATA.compilations.flatMap(c=>c.questions),byId=new Map(raw.map(q=>[q.id,q]));
const sources={};
function ref(id,label,url,term){sources[id]={label,url,term};}
ref('forms','WHATWG: HTML forms','https://html.spec.whatwg.org/multipage/forms.html','form controls');
ref('input','WHATWG: input element','https://html.spec.whatwg.org/multipage/input.html','required');
ref('anchor','WHATWG: hyperlinks','https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element','href');
ref('images','WHATWG: images','https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element','alt');
ref('structure','WHATWG: sections','https://html.spec.whatwg.org/multipage/sections.html','article');
ref('grouping','WHATWG: grouping content','https://html.spec.whatwg.org/multipage/grouping-content.html','dominant');
ref('tables','WHATWG: tabular data','https://html.spec.whatwg.org/multipage/tables.html','tabular');
ref('syntax','WHATWG: HTML syntax','https://html.spec.whatwg.org/multipage/syntax.html','DOCTYPE');
ref('body','WHATWG: document sections','https://html.spec.whatwg.org/multipage/sections.html#the-body-element','body');
ref('a11y','W3C: accessibility principles','https://www.w3.org/WAI/fundamentals/accessibility-principles/','keyboard');
ref('headings','W3C: heading structure','https://www.w3.org/WAI/tutorials/page-structure/headings/','navigation');
ref('html-history','CERN: the birth of the web','https://home.cern/science/computing/the-birth-of-the-web/where-web-was-born/','Berners');
ref('html','W3C: HTML introduction','https://www.w3.org/TR/html401/intro/intro.html','HyperText Markup');
ref('canonical','Google: canonical URLs','https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls','canonical');
ref('seo','Google: SEO starter guide','https://developers.google.com/search/docs/fundamentals/seo-starter-guide','Search Engine Optimization');
ref('snippets','Google: search snippets','https://developers.google.com/search/docs/appearance/snippet','description');
ref('titles','Google: title links','https://developers.google.com/search/docs/appearance/title-link','title');
ref('cascade','W3C: CSS cascade','https://www.w3.org/TR/css-cascade-5/','specificity');
ref('box','W3C: CSS box model','https://www.w3.org/TR/css-box-3/','padding');
ref('sizing','W3C: box sizing','https://www.w3.org/TR/css-sizing-3/','border-box');
ref('flex','W3C: Flexbox','https://www.w3.org/TR/css-flexbox-1/','column');
ref('grid','W3C: Grid','https://www.w3.org/TR/css-grid-2/','two-dimensional');
ref('media','W3C: media queries','https://www.w3.org/TR/mediaqueries-4/','touchpads');
ref('css-values','W3C: CSS values and units','https://www.w3.org/TR/css-values-4/','case-insensitive');
ref('css-syntax','W3C: CSS syntax','https://www.w3.org/TR/css-syntax-3/','declaration');
ref('css','W3C: what CSS is','https://www.w3.org/Style/CSS/Overview.en.html','Cascading Style Sheets');
ref('float','W3C: floats','https://www.w3.org/TR/CSS22/visuren.html#floats','float');
ref('tailwind','Tailwind: utility classes','https://tailwindcss.com/docs/styling-with-utility-classes','utility');
ref('bootstrap','Bootstrap: introduction','https://getbootstrap.com/docs/5.3/getting-started/introduction/','mobile');
ref('dom','WHATWG: DOM','https://dom.spec.whatwg.org/','getElementById');
ref('input-events','W3C: input events','https://www.w3.org/TR/input-events-2/','input');
ref('async','Ecma: ECMAScript 2017 async functions','https://262.ecma-international.org/8.0/#sec-async-function-definitions','AsyncFunction');
ref('es6','Ecma: ECMAScript 2015','https://262.ecma-international.org/6.0/','ECMAScript 2015');
ref('fetch','WHATWG: Fetch','https://fetch.spec.whatwg.org/','Promise');
ref('http','IETF: HTTP semantics','https://www.rfc-editor.org/rfc/rfc9110.html','PUT');
ref('php-vars','PHP: variables','https://www.php.net/manual/en/language.variables.basics.php','dollar');
ref('php-get','PHP: GET data','https://www.php.net/manual/en/reserved.variables.get.php','query');
ref('php-post','PHP: POST data','https://www.php.net/manual/en/reserved.variables.post.php','Form data');
ref('php-exceptions','PHP: try/catch','https://www.php.net/manual/en/control-structures.try-catch.php','catch');
ref('php-classes','PHP: classes and objects','https://www.php.net/manual/en/language.oop5.basic.php','class');
ref('php-namespaces','PHP: namespaces','https://www.php.net/manual/en/language.namespaces.rationale.php','namespaces');
ref('php-if','PHP: conditional execution','https://www.php.net/manual/en/control-structures.elseif.php','elseif');
ref('php-arrays','PHP: arrays','https://www.php.net/manual/en/language.types.array.php','map');
ref('php-functions','PHP: functions','https://www.php.net/manual/en/functions.user-defined.php','function');
ref('php','PHP: purpose','https://www.php.net/intro','server');
ref('php-tags','PHP: opening and closing tags','https://www.php.net/manual/en/language.basic-syntax.phpmode.php','<?php');
ref('php-sessions','PHP: sessions','https://www.php.net/manual/en/book.session.php','session');
ref('php-history','PHP: history','https://www.php.net/manual/en/history.php.php','Personal Home Page');
ref('php-types','PHP: type declarations','https://www.php.net/manual/en/language.types.declarations.php','strict_types');
ref('php-bool','PHP: booleans','https://www.php.net/manual/en/language.types.boolean.php','true');
ref('php-comparison','PHP: comparison operators','https://www.php.net/manual/en/language.operators.comparison.php','spaceship');
ref('php-for','PHP: for loops','https://www.php.net/manual/en/control-structures.for.php','expr2');
ref('php-while','PHP: while loops','https://www.php.net/manual/en/control-structures.while.php','expression');
ref('php-filter','PHP: filtering external data','https://www.php.net/manual/en/book.filter.php','validation');
ref('unstructured','IBM: unstructured data','https://www.ibm.com/think/topics/unstructured-data','predefined');
ref('api','IBM: application programming interfaces','https://www.ibm.com/think/topics/api','application programming interface');
ref('data-quality','Google ML: data quality','https://developers.google.com/machine-learning/guides/data-traps/quality','outliers');
ref('categorical','Google ML: categorical data','https://developers.google.com/machine-learning/crash-course/categorical-data','categorical');
ref('public-data','Data.gov: open government data','https://data.gov/','data');
ref('eda','NIST: exploratory data analysis','https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm','Exploratory');
ref('rl','OpenAI Spinning Up: model-based RL','https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html','model-based');
ref('clustering','scikit-learn: clustering','https://scikit-learn.org/stable/modules/clustering.html','clusters');
ref('fit','Keras: training API','https://keras.io/api/models/model_training_apis/','epochs');
ref('optimizer','Keras: optimizers','https://keras.io/api/optimizers/','learning rate');
ref('early','Keras: early stopping','https://keras.io/api/callbacks/early_stopping/','Stop training');
ref('classification','scikit-learn: multiclass and multilabel','https://scikit-learn.org/stable/modules/multiclass.html','multilabel');
ref('cnn','Keras: convolution layers','https://keras.io/api/layers/convolution_layers/convolution2d/','convolution');
ref('image-training','Keras: image classification','https://keras.io/examples/vision/image_classification_from_scratch/','augmentation');
ref('serving','TensorFlow: prediction REST API','https://www.tensorflow.org/tfx/serving/api_rest','predict');
ref('load','Microsoft: load testing','https://learn.microsoft.com/en-us/azure/load-testing/overview-what-is-azure-load-testing','load');
ref('labeling','AWS: automated data labeling','https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html','human');
ref('metrics','Google ML: classification metrics','https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall','false');
ref('f1','scikit-learn: F1 score','https://scikit-learn.org/stable/modules/generated/sklearn.metrics.f1_score.html','harmonic');
ref('audio','TensorFlow: audio recognition','https://www.tensorflow.org/tutorials/audio/simple_audio','spectrogram');
ref('zcr','librosa: zero-crossing rate','https://librosa.org/doc/0.11.0/generated/librosa.feature.zero_crossing_rate.html','zero');
ref('music','librosa: music features','https://librosa.org/doc/0.10.2/feature.html','tempo');
ref('pandas','pandas: package overview','https://pandas.pydata.org/docs/getting_started/overview.html','manipulation');
ref('generalization','Google ML: generalization and overfitting','https://developers.google.com/machine-learning/crash-course/overfitting/overfitting','overfitting');
ref('cross-validation','scikit-learn: validation and test splits','https://scikit-learn.org/stable/modules/cross_validation.html','validation');
ref('missing','scikit-learn: missing data','https://scikit-learn.org/stable/modules/impute.html','missing');
ref('leakage','scikit-learn: data leakage','https://scikit-learn.org/stable/common_pitfalls.html','leakage');
ref('loss','Keras: losses','https://keras.io/api/losses/probabilistic_losses/','crossentropy');
ref('mlops','Google Cloud: ML production lifecycle','https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning','monitor');
ref('testing','Google: ML test score research','https://research.google/pubs/the-ml-test-score-a-rubric-for-ml-production-readiness-and-technical-debt-reduction/','test');
ref('speech','Google AudioSet: speech ontology','https://research.google.com/audioset/ontology/speech_1.html','Speech');
ref('birds','Google AudioSet: bird sounds','https://research.google.com/audioset/ontology/bird_1.html','Bird');

const decisions={};
function add(prefix,rows){
  for(const line of rows.trim().split('\n')){
    let [n,refs,note]=line.split('|');let status='verified';
    if(n.startsWith('u')){status='unresolved';n=n.slice(1)}
    if(n.startsWith('s')){status='written-self-review';n=n.slice(1)}
    const id=prefix+'-'+n;assert(byId.has(id),id);assert(!decisions[id],id);
    const q=byId.get(id);
    decisions[id]={status,correct:q.correct,verifiedAnswer:status==='unresolved'?null:(q.type==='choice'?q.options[q.correct]:q.answer),references:refs.split(','),note};
  }
}
add('webdev-34-2',`
1|forms|A form groups controls that collect and submit visitor input; an individual input is one control within the form.
2|grouping|The main element represents the body’s dominant content.
3|anchor|An anchor creates a hyperlink using href. The user-supplied screenshot highlights B with src, which is incorrect; C was already the website answer.
4|images,syntax|Use img with src and alt. img is a void element with no closing tag; image is not conforming authoring syntax.
5|input|The text input state uses input type="text"; name identifies the submitted field.
s6|a11y|A valid accessibility principle plus its benefit in one sentence is a self-reviewed written response, not an automatically scored answer.
`);
decisions['webdev-34-2-3'].status='corrected';
decisions['webdev-34-2-3'].originalSourceAnswer='B. <a src="url">link text</a> (user-provided highlighted screenshot)';
add('webdev-34-9',`
1|cascade|For the listed normal author declarations in the same cascade context, style attributes outrank selector rules, then ID, class and type specificity. Origins, importance and layers are separate earlier cascade criteria.
2|cascade|The ID selector wins over the class and type selectors in the given normal declarations, producing orange.
3|box|The nested box areas run content, padding, border and margin, from inside outward.
4|sizing|border-box includes padding and border in the specified size; margin remains outside it.
5|flex|Flexbox lays out items along a main axis, one row or column at a time; wrapping does not make it a two-axis grid system.
6|flex|column selects a vertical main axis in the ordinary horizontal writing mode assumed by this quiz.
7|grid|Grid supplies rows and columns for two-dimensional layout.
8|media,bootstrap|Mobile-first base styles cover smaller viewports; min-width queries progressively add larger-viewport styles.
9|tailwind,bootstrap|Tailwind composes utility classes; Bootstrap supplies reusable components as well as utilities. The technical comparison is valid without the missing comparison slide.
10|grid,flex|Grid and Flexbox can be nested and used together; neither forbids the other.
`);
add('webdev-34-5',`
1|php-vars|PHP variable names begin with a dollar sign.
2|php-get|The variable is $_GET. The source choice’s trailing dash is a formatting artifact, not part of the variable name; retain choice C and explain it.
3|forms,php-get|A GET form serializes a named search field into the URL query string, yielding ?search=laptop.
4|php-exceptions|Exception is the intended runtime-problem term among these choices. PHP also has other runtime errors; not every failure is an exception.
u5|forms,php-get,php-post|Both $_GET and $_POST access submitted form data, depending on method. The stem supplies no method, so B cannot be the sole graded answer.
6|php-classes|A class defines the properties and methods used by its objects.
7|php-namespaces|Namespaces organize and disambiguate names and support namespace-based autoloading conventions; they do not autoload code by themselves.
8|php-if|85 is below 90 but at least 80, so the elseif branch echoes Very Good.
9|php-functions|The function returns (5 + 3) * 2 = 16, which echo prints.
10|php-arrays|The zero-based grades index 2 selects the third element, 88.
`);
add('webdev-33-1',`
1|html-history|CERN identifies Tim Berners-Lee as the inventor of the Web and its initial HTML technology.
2|html|HTML expands to HyperText Markup Language.
3|syntax|The HTML doctype is the required preamble that selects standards/no-quirks behavior for the basic HTML document example.
4|body|The body represents the content of the document; head contains document metadata.
5|forms|The form element is the HTML form container.
6|input|required makes the applicable control subject to value-missing validation.
7|tables|Tables represent tabular data, not page layout.
8|anchor|The a element creates a hyperlink when it has an href attribute.
9|headings|Heading structure supports assistive-technology navigation between sections.
10|canonical|A canonical link signals the preferred representative URL. It is a signal, not a guarantee that all duplication is prevented.
`);
add('webdev-33-2',`
11|cascade|In the stated normal author context the order is inline style, IDs, classes, then elements; cascade layers and importance are separate criteria.
12|cascade|Both rules use one class selector. Equal specificity is resolved by source order, so the later text-style rule makes the text orange.
13|box|The four named areas are content, padding, border and margin. The question asks for membership, not their inside-to-outside order, so D is valid.
14|box|The four-value padding shorthand is top, right, bottom, left. The last value is 0px.
15|flex|A row-or-column main-axis layout is Flexbox.
u16|grid,css-values,css-syntax|CSS keywords are case-insensitive: B (display: GRID;), C (display: GRID) and D (display: grid) are valid declarations in a declaration block. A terminal semicolon can be omitted. There is no unique correct choice.
u17|media|Media queries detect pointer accuracy and hover capabilities, not reliably mouse versus touchpad identity. Both can be fine pointers; none of these pairs is a uniquely supported detection claim.
u18|media|1280+ is a possible course convention, not a universal CSS desktop breakpoint. The missing presentation is needed to verify the intended convention.
19|box|A border surrounds the content and padding areas, with margin outside it.
20|tailwind|Tailwind’s utility classes are composed in markup to build custom designs.
`);
add('webdev-33-3',`
21|es6|The sixth edition of ECMAScript is ECMAScript 2015, commonly called ES6.
22|es6|Template literals use backticks and dollar-brace substitutions.
23|dom|getElementById selects an element using its ID; querySelector requires a selector string instead.
24|input-events,input|The input event accompanies user editing of applicable input content, rather than only form submission or a click.
25|fetch|fetch returns a Promise whose fulfillment value is a Response; decoding JSON is a later operation.
26|http|PUT requests creation or replacement of the target resource representation and is the conventional full-update method here. PATCH would be partial update but is not offered.
27|es6|A Promise’s states are pending, fulfilled and rejected.
28|async|await suspends the enclosing async function until the awaited value settles; it does not block the entire JavaScript thread.
29|es6|JSON.parse reads JSON text into a JavaScript value; JSON.stringify serializes a value to JSON text, subject to JSON’s supported types.
30|async|async/await permits sequential-looking asynchronous code while retaining Promise semantics.
`);
add('webdev-33-4',`
31|php|PHP is commonly used for server-side web development.
32|php-classes|A class defines properties and methods for instances created from it.
33|php-functions|A reusable function avoids duplicating a task and can accept different arguments on each call.
34|php-arrays|PHP arrays are ordered maps with integer or string keys whose elements can be accessed and modified.
35|php-tags|The standard opening tag is <?php and the closing tag is ?>. Closing tags may be omitted in PHP-only files.
36|php-sessions|Sessions preserve data between requests using a session identifier. Their lifetime depends on configuration, rather than being inherently permanent.
37|php-filter,forms|Capturing, validating and sanitizing request input is input handling; sanitization and validation are distinct operations.
38|php-functions,php-classes,php-vars|The assertion is false: function and class names are case-insensitive. Variable names are case-sensitive, so casing rules must not be generalized to every identifier.
39|php-history|PHP originated as Personal Home Page tools before the recursive Hypertext Preprocessor name.
40|forms,php-post,http|POST places ordinary form data in the request body instead of the URL query. HTTPS is still required for confidentiality in transit; POST alone does not encrypt a password.
`);
add('webdev-32-1',`
1|html|HTML expands to HyperText Markup Language.
2|structure,a11y|Semantic elements convey the role and meaning of content to browsers and assistive technologies.
3|structure|article represents a self-contained composition such as an independent blog post.
4|input|required triggers built-in missing-value validation for applicable controls.
5|anchor|target="_blank" requests a new browsing context, commonly a tab; the browser/user may choose a window. The printed curly quotation marks are typographic, not copyable HTML delimiters.
6|images,a11y|alt supplies an image’s text alternative. Decorative images ordinarily use alt=""; it need not always be descriptive text, and the specification has narrow exceptions to mandatory author-provided alt.
7|tables|th represents a header cell; tr is a row and td is a data cell.
8|snippets|A meta description supplies a page summary that search engines may use for snippets; they can also generate a different snippet.
u9|titles,seo|title is important for title links, but no official rule makes one offered tag universally the most critical SEO ranking element. The superlative needs course context or a more precise question.
10|structure|aside represents tangential content such as related links or a sidebar.
`);
add('webdev-32-8',`
u1|dom|Choice B visibly omits the word tree before -like in the source. The DOM is a node tree, but no complete correct definition is offered as printed.
2|es6|Object destructuring uses const { price } = product; array destructuring is a different pattern.
3|dom|querySelectorAll returns a static NodeList of all matching elements; querySelector returns only the first match.
4|es6|In a formal parameter list, ...prices is a rest parameter collecting arguments into an array, not an array-spread expression.
5|dom|addEventListener attaches listeners independently of inline HTML handlers and permits multiple distinct listeners for an event type.
6|dom|The event listener callback receives the Event object as its first argument.
7|dom|For a bubbling click event, the target phase precedes bubbling through ancestors. A capture phase can run before the target, and stopPropagation can alter travel.
8|es6|Asynchronous work allows the program to remain responsive while pending operations complete.
9|es6|A Promise represents a future result or failure of an asynchronous computation.
10|es6|JSON object keys and string values use double quotation marks.
`);
add('webdev-32-10',`
1|grid,flex|CSS layout determines how boxes are positioned and arranged on a page.
2|media|Responsive design adapts layout to viewport and device capabilities.
3|box|The content area contains the element’s content; it is distinct from padding, border and margin.
u4|structure|Sidebar is the likely intended answer, but the unrestricted wording also permits links and information in a header or footer. No unique placement is specified.
5|css-values|px denotes a CSS pixel, a reference unit that need not equal a physical device pixel.
6|cascade|The cascade chooses the winning declarations when multiple rules apply.
7|media|A breakpoint is an author-chosen threshold at which responsive conditions change the applied styling.
8|float|Floats permit surrounding inline content to flow around the floated box.
9|cascade|Specificity compares selector weights within the applicable cascade context.
10|bootstrap|Bootstrap is a mobile-first toolkit with reusable components and ready styles. W3 is not the full name of a specified alternative framework in these choices.
`);
add('webdev-html-topic',`
1|html|HTML describes the structure and semantics of document content.
2|syntax|<!DOCTYPE html> is the standard HTML doctype declaration.
3|structure|Semantic elements describe content roles and meaning rather than only its appearance.
4|structure|nav represents a section of navigation links; menu represents a list of commands/items rather than the principal navigation landmark.
5|images|alt is the attribute for alternative text.
6|input|required marks applicable controls as requiring a non-missing value.
7|tables|HTML tables represent tabular data rather than general page layout.
8|anchor|The a element is the hyperlink element when supplied with href.
9|a11y|Accessibility makes websites usable by people with different abilities and assistive-technology needs.
10|seo|SEO expands to Search Engine Optimization.
`);
add('webdev-css-topic',`
1|css|CSS expands to Cascading Style Sheets.
2|cascade|The cascade determines the winning declaration among applicable styles.
3|cascade|Among the listed selector types, an ID has greater specificity than a class, type or universal selector.
4|cascade|A class selector uses a dot prefix; an ID selector uses a hash prefix.
5|cascade|Equal specificity and otherwise equal cascade precedence are resolved by later source order.
6|box|Padding separates the content area from its border.
7|box|The inside-to-outside sequence is content, padding, border, margin.
8|flex|Flexbox arranges items primarily along one main axis.
9|flex|flex-direction chooses the direction of the flex container’s main axis.
10|flex|In a flex container, justify-content aligns along the main axis and align-items along the cross axis. Both must be set to suitable values such as center; their names alone do not guarantee centering.
11|grid|Grid supports layout in two dimensions, rows and columns.
12|media|Media queries conditionally apply styles based on viewport or other media features.
13|media|The CSS rule introducing a media query is @media.
14|bootstrap,tailwind|Bootstrap provides reusable components; Tailwind focuses on composing utility classes. Both also have additional capabilities.
15|bootstrap|Bootstrap includes ready-made CSS classes and components.
`);
add('webdev-php-topic',`
1|php|PHP is used to generate dynamic server-side web content.
2|php-vars|PHP variables are prefixed by $.
3|php-bool|The bool scalar type has the two Boolean values true and false.
4|php-types|declare(strict_types=1) must be the first statement in the PHP file and controls strict scalar typing for relevant calls/returns. It is not a replacement for all validation.
5|php-comparison|The spaceship operator <=> returns a three-way comparison result, conventionally -1, 0 or 1.
u6|php-for,php-while|while/do-while are typical condition-driven loops, but a for loop also evaluates a runtime continuation expression. The wording does not uniquely distinguish B from D.
7|php-arrays|An associative array uses meaningful string keys for its values.
8|forms,php-post,http|POST commonly sends login form data in the request body rather than URL query parameters. HTTPS, not POST alone, protects transmission.
9|php-sessions|Sessions retain user data across requests/pages using an associated session identifier.
10|php-exceptions|catch handles an exception matched by a preceding try block; throw raises an exception.
`);
add('elective-34-1',`
1|unstructured|Unstructured data lacks a predefined rigid tabular schema, unlike structured tables.
2|api|API expands to Application Programming Interface.
3|data-quality|Outliers are extreme/unusual observations and can disproportionately affect training and loss.
u4|missing|No universal percentage makes deleting missing records best. The 5% threshold is a course heuristic that needs the presentation; missingness mechanisms and information loss also matter.
5|categorical|Gender is categorical in this example; the other listed measurements are numeric quantities.
6|public-data|Public datasets are the closest offered collection. Public availability does not itself guarantee unrestricted reuse; check the dataset’s license.
7|eda|Data exploration examines distributions, patterns and potential issues before modeling.
8|eda|EDA expands to Exploratory Data Analysis.
9|rl|Model-based RL uses an environment dynamics model for planning, unlike model-free methods.
10|clustering|Clustering groups similar observations according to a similarity or relationship criterion.
`);
add('elective-34-5',`
1|fit|An epoch is one iteration over the full training dataset in the ordinary finite-dataset setting.
2|fit,cross-validation|Validation evaluates held-out data that is not used for fitting weight updates and can guide model choices. It is not the final unbiased test set.
3|classification|Multiclass classification chooses one of more than two mutually exclusive labels per instance.
4|cnn,image-training|CNNs are a common model family for visual data among the offered alternatives; they are not the only possible image architecture.
5|serving|A prediction endpoint accepts inputs and returns inference outputs at a defined HTTP route.
6|load|Concurrent requests from many users exercise application load, rather than only isolated unit behavior.
7|image-training|Preprocessing standardizes input representation; augmentation adds transformed training examples. Both must avoid leaking information from evaluation data.
8|labeling|Model-assisted labeling produces draft labels for human review and can improve throughput. Classification labels need not be hand-drawn, and speed gains depend on prediction quality.
9|metrics|Recall measures how many actual positives are found and is important when false negatives are costly.
10|f1|F1 = 2PR/(P+R) = 2(0.80)(0.60)/1.40 = 0.685714..., or 68.6% rounded to one decimal place. D is correct.
`);
add('elective-34-3',`
1|audio|The input is captured audio and may be split into clips/segments; Audio Waves is the intended choice here.
2|cnn,audio|A convolutional neural network can learn local patterns in spectrograms, which are two-dimensional visual representations of audio.
3|fit,generalization|The intended quantity is epochs. Raising it is not a universal remedy: inspect validation behavior to avoid overfitting.
u4|music|Both tempo and harmonic content are routinely represented in music analysis. The incomplete stem gives no feature or representation that selects one uniquely.
5|audio,speech|A speech dataset contains recordings of spoken language, unlike music-only datasets.
u6|pandas,audio|Pandas is not a neural-network framework, but it can support data preparation in an audio-classification pipeline. The broad phrase can be used makes C an invalid universal exclusion.
7|audio|A spectrogram represents frequency content and magnitude over time, often visualized as a heat map.
8|zcr|Zero-crossing rate measures sign changes in a time-domain signal.
9|cnn|Convolution layers learn filters for local receptive fields; dense layers and ReLU have different roles.
10|audio,fit|Model training fits model parameters from examples so a model can learn patterns in audio.
`);
add('elective-33-1',`
1|cross-validation,fit|Validation data guides choices and hyperparameter tuning; test data should remain held out for final evaluation.
u2|mlops|Monitoring and maintenance is a normal post-deployment activity, but the exact final step presented in the missing materials cannot be confirmed from a general lifecycle reference.
3|data-quality|Relevant, reliable data preparation supports model reliability and accuracy; the alternatives describe harmful goals.
u4|cross-validation,mlops|Evaluation and tuning are iterative. The exact immediately-next pipeline step depends on the missing diagram/material, so the keyed order cannot be independently established.
5|eda|Exploration examines data statistically and qualitatively, while visualization presents information graphically; the two activities overlap and are complementary.
6|data-quality|Data cleaning addresses erroneous observations and unintended duplicates; legitimate repeated observations should not be discarded indiscriminately.
7|cross-validation,fit|Training, validation and test are the commonly separated dataset roles.
8|data-quality|Managing problematic outliers is part of data cleaning, while exploration can first reveal them. Outliers should be investigated rather than automatically removed.
9|leakage|Data leakage is a documented data-preparation pitfall; encoding and feature selection are procedures, not inherently problems.
10|eda,data-quality|Exploration and visualization expose patterns and issues, supporting debugging and saving wasted modeling effort.
`);
add('elective-33-2',`
11|early|EarlyStopping stops training when the monitored quantity fails to improve, with configurable patience and thresholds.
u12|optimizer|The stem defines learning rate. A learning-rate schedule changes that rate over time; learning rate itself is absent from the choices. No exact correct option is supplied.
13|fit|An epoch is a pass over the full training data in the standard finite-dataset setup.
14|optimizer,fit|In ordinary mini-batch training, a gradient update follows a processed batch. Gradient accumulation and other configurations can change update frequency.
15|metrics|Spam is the positive class. Predicting spam for non-spam is a false positive.
16|generalization|High error on both training and evaluation data is characteristic of underfitting, potentially due to insufficient training or capacity.
17|generalization|Excessive training can fit noise or memorize the training set and impair generalization; it is a risk rather than a guaranteed outcome.
18|fit,metrics|Model performance is evaluated with task-appropriate metrics; accuracy is only one possible metric.
19|loss,metrics|Accuracy counts thresholded correct predictions, while loss can strongly penalize a few confident errors. Thus high accuracy and relatively high loss can coexist.
20|generalization|Good training fit with poor unseen-data performance is overfitting.
`);
add('elective-33-3',`
21|classification|Multilabel classification represents each potentially co-occurring label as present or absent for an instance.
22|cnn,image-training|Image classification learns visual features and maps them to target classes. B describes that process; A is truncated in the source and wrongly claims feature extraction is eliminated.
23|image-training|Data augmentation adds variations by transforming existing training images.
24|image-training|Labels supply target categories for supervised training; they do not themselves enlarge images or augment the dataset.
25|metrics|A false negative predicts negative for an actually positive case.
26|generalization|Underfitting fails to model useful patterns and typically yields high training and evaluation error.
27|generalization,cross-validation|Held-out evaluation estimates generalization rather than training-set memorization; validation may also be used during model selection.
u28|fit|Both accuracy and loss can be plotted over epochs to assess learning and overfitting. The stem calls loss curves a metric and refers to an unavailable slide, so A and C cannot be uniquely distinguished as written.
29|serving,mlops|Integrating the trained model into an application is a deployment/integration activity.
30|testing,image-training|Blurred, dark, corrupted and wrong-format inputs are edge/robustness cases that require application testing, not just a single aggregate accuracy metric.
`);
add('elective-33-4',`
31|audio|Sound classification assigns a sound recording to a sound category.
32|birds|A bird vocalization is an animal/natural sound in the stated classification, unlike the listed human-made devices.
33|audio|An audio dataset is a collection of audio examples/recordings, usually accompanied by labels or metadata.
34|audio|Preprocessing brings waveforms/features into consistent formats, lengths and representations as needed by the model.
35|audio|A spectrogram depicts frequency components over time, with magnitudes represented visually.
36|audio,fit|Training adjusts model parameters to learn patterns from audio examples.
37|speech|Speech recognition converts spoken audio to text; classification and speech synthesis are different tasks.
38|metrics|Classification accuracy is the fraction of correct predictions, commonly expressed as a percentage.
39|testing,audio|Testing checks the application/model with new audio rather than modifying presentation design or deleting recordings.
40|audio,fit,testing|Among the supplied choices, collecting audio/data before training and then evaluation/testing is the coherent general order; real pipelines can iterate and must reserve evaluation data before training.
`);

assert.equal(Object.keys(decisions).length,201);
for(const d of Object.values(decisions))for(const id of d.references)assert(sources[id],id);
// Rechecked all 201 prompts under the user's exact-question/answer rule.
// No matching question/answer/choice sets were found; related concepts remain separate.
const duplicateGroups=[];
const duplicatePolicy='Same question wording and answer, with matching choices and code/image context. Related concepts or paraphrases are separate questions.';
const used=new Set();
for(const g of duplicateGroups)for(const id of g.ids){assert(byId.has(id),id);assert(!used.has(id),id);used.add(id)}
for(const source of Object.values(sources))if(source.url.startsWith('https://developers.google.com/')||source.url.startsWith('https://cloud.google.com/'))source.url+='?hl=en';
const decisionFile={version:3,duplicatePolicy,reviewedOn:'2026-10-14',method:'Manual review of every source question against the linked primary references; lecture-dependent, malformed and non-unique items are not scored. A URL availability check and application tests are separate from this semantic review.',sources,decisions,duplicateGroups};
fs.writeFileSync(path.join(root,'data/audit-decisions.json'),JSON.stringify(decisionFile,null,2)+'\n');
console.log(JSON.stringify({reviewed:Object.keys(decisions).length,statuses:Object.fromEntries(['verified','corrected','unresolved','written-self-review'].map(s=>[s,Object.values(decisions).filter(d=>d.status===s).length])),duplicateGroups:duplicateGroups.length,removed:duplicateGroups.reduce((n,g)=>n+g.ids.length-1,0),references:Object.keys(sources).length},null,2));
