(() => {
  'use strict';
  const DATA = window.QUIZ_DATA;
  const main = document.querySelector('#main');
  const status = document.querySelector('#save-status');
  const STORE = 'study-room-progress-v1';
  const subjects = {
    webdev: {name: 'Web Development', short: 'WebDev', tag: 'THE WEB, FROM THE GROUND UP', description: 'HTML, CSS, JavaScript, and PHP. Revisit the ideas behind the pages you build.', topics: 'HTML · CSS · JavaScript · PHP', accent: '#d97757'},
    elective: {name: 'Elective', short: 'Elective', tag: 'AI & MACHINE LEARNING', description: 'From a dataset to a prediction. Practice the foundations of artificial intelligence and machine learning.', topics: 'Datasets · Models · Images · Audio', accent: '#788c5d'}
  };
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon = name => {
    const drawings = {
      all: '<rect x="3" y="4" width="25" height="24" rx="5"/><rect x="35" y="4" width="25" height="24" rx="5"/><rect x="3" y="35" width="25" height="24" rx="5"/><path d="M36 47h23m-11-11v23"/>',
      section: '<rect x="5" y="7" width="52" height="48" rx="9"/><path d="M5 20h52M21 7v13"/><path d="M20 37l7 7 14-14"/>',
      quiz: '<rect x="12" y="4" width="40" height="55" rx="7"/><path d="M21 18h23M21 30l3 3 5-6m6 3h9M21 44l3 3 5-6m6 3h9"/>',
      terms: '<path d="M32 13C22 4 10 6 3 10v43c9-4 18-3 29 4 11-7 20-8 29-4V10c-7-4-19-6-29 3Zm0 0v44M11 20h12m-12 9h12m18-9h12m-12 9h12"/>',
      lock: '<rect x="4" y="9" width="12" height="10" rx="2"/><path d="M7 9V6a3 3 0 0 1 6 0v3"/>',
      arrow: '<path d="M4 10h12m-5-5 5 5-5 5"/>'
    };
    return `<svg viewBox="0 0 ${['lock','arrow'].includes(name)?'20 20':'64 64'}" aria-hidden="true">${drawings[name]||drawings.quiz}</svg>`;
  };
  // New subject illustrations share the reference site's shapes, palette, and line work.
  function art(subject = 'both') {
    const web = `<g fill="none" stroke="var(--ink)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="61" y="86" width="210" height="144" rx="12" fill="var(--bg)"/><path d="M61 117h210"/><circle cx="78" cy="102" r="2.3" fill="var(--ink)"/><circle cx="88" cy="102" r="2.3" fill="var(--ink)"/><circle cx="98" cy="102" r="2.3" fill="var(--ink)"/><path d="m131 149-25 23 25 23m71-46 25 23-25 23m-28-57-15 68"/><path d="M118 250h101m-51-20v20"/></g>`;
    const neural = `<g fill="none" stroke="var(--ink)" stroke-width="1.8" stroke-linecap="round"><path d="m91 108 88 41m-88-41 88 95m-88-41 88-13m-88 13 88 41m0-54 85-28m-85 28 85 73m-85 22 85-82m-85 82 85 19"/>${[[91,108],[91,162],[179,149],[179,203],[264,121],[264,222]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="13" fill="var(--bg)"/>`).join('')}<path d="M67 219q22 42 79 42m58-177q27-25 67-14" stroke-dasharray="2 7"/></g>`;
    return `<svg class="art" viewBox="0 0 360 300" role="img" aria-label="${subject==='webdev'?'Abstract browser window with code symbols':subject==='elective'?'Abstract connected machine learning nodes':'Abstract illustration of web development and machine learning'}"><circle cx="126" cy="150" r="101" fill="#d97757"/><path d="M214 48c61-12 116 43 104 94s-66 78-109 32-62-105 5-126Z" fill="#788c5d"/><circle cx="288" cy="242" r="37" fill="#6a9bcc"/>${subject==='elective'?neural:web}${subject==='both'?'<g fill="var(--bg)" stroke="var(--ink)" stroke-width="1.7"><circle cx="280" cy="195" r="10"/><circle cx="319" cy="169" r="8"/><circle cx="317" cy="221" r="8"/><path d="m289 189 23-15m-24 27 21 15" fill="none"/></g>':''}<g fill="none" stroke="var(--ink)" stroke-width="1.6" stroke-linecap="round"><path d="m306 48 0 19m-9-10h18M40 65l6 10m-8 1 10-8"/><path d="M44 239c-3 16 12 35 33 38" stroke-dasharray="2 7"/></g><circle cx="174" cy="38" r="3" fill="var(--ink)"/></svg>`;
  }
  const eligible = (subject, scope) => DATA.compilations.filter(c => c.subject === subject && (scope === 'all' || c.section === '3-4'));
  const everyQuestion = new Map(DATA.compilations.flatMap(c => c.questions.map(q => [q.id,q])));
  let saved = {version:1, answers:{}, positions:{}};
  let storageProblem = false;
  try {
    const raw = localStorage.getItem(STORE);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.version !== 1 || !parsed.answers || !parsed.positions) throw Error('Unsupported save');
      for (const [id, entry] of Object.entries(parsed.answers)) {
        const q = everyQuestion.get(id);
        if (!q || !entry || typeof entry.checked !== 'boolean') continue;
        if (q.type === 'choice' ? Number.isInteger(entry.value) && entry.value >= 0 && entry.value < q.options.length : typeof entry.value === 'string' && entry.value.length < 15000) saved.answers[id] = {value:entry.value, checked:entry.checked};
      }
      for (const [key, value] of Object.entries(parsed.positions)) if (Number.isInteger(value) && value >= 0) saved.positions[key] = value;
    }
  } catch (e) {storageProblem=true; status.textContent='Saved progress is unavailable. You can still practice.';status.classList.add('error-status');}
  function persist() {
    try {localStorage.setItem(STORE, JSON.stringify(saved));status.textContent='Progress saved in this browser.';status.classList.remove('error-status');storageProblem=false;}
    catch (e) {storageProblem=true;status.textContent='Progress could not be saved. Keep this page open to retain this attempt.';status.classList.add('error-status');}
  }
  const route = (...parts) => '#/' + parts.map(encodeURIComponent).join('/');
  const scopeName = scope => scope === 'all' ? 'All sections' : 'BSIT 3-4 only';
  function crumbs(subject,scope,stage) {
    let links = '<a href="#/">Home</a>';
    if(subject) links += `<span class="sep">/</span><a href="${route(subject)}">${subjects[subject].name}</a>`;
    if(scope) links += `<span class="sep">/</span><a href="${route(subject,scope)}">${scopeName(scope)}</a>`;
    if(stage) links += `<span class="sep">/</span><span aria-current="page">${escape(stage)}</span>`;
    return `<nav class="breadcrumbs" aria-label="Breadcrumb">${links}</nav>`;
  }
  function hero(eyebrow,title,copy,subject,flow=false) {
    return `<section class="hero ${flow?'flow-hero':''}"><div class="hero-copy"><div class="eyebrow"><span class="dot"></span>${escape(eyebrow)}</div><h1 id="page-title">${title}</h1><p>${copy}</p></div><div class="hero-art">${art(subject)}</div></section>`;
  }
  function selectionTop(step,hint) {return `<div class="selection-top"><span class="step-label">${step}</span><span>${hint}</span></div>`;}
  function note(copy) {return `<p class="small-note">${icon('lock')}<span>${copy}</span></p>`;}
  function home() {
    document.title='Study room · WebDev & Elective';
    main.innerHTML=hero('A PLACE TO PRACTICE','Your next study<br>session starts here.','Two subjects, a collection of class quizzes, and a little space to figure things out. Pick a subject to begin.','both') + selectionTop('01 / CHOOSE A SUBJECT','One question at a time. Your own pace.') + `<div class="cards">${Object.entries(subjects).map(([id,s],i)=>{
      const sources=eligible(id,'all'),count=sources.reduce((sum,c)=>sum+c.questions.length,0);
      return `<a class="choice-card subject-card ${id}" href="${route(id)}"><div class="card-top"><span class="card-index">0${i+1}</span><span class="tag">${id==='webdev'?'BUILD & CREATE':'LEARN & PREDICT'}</span></div><h2>${s.name}</h2><p>${s.description}</p><div class="card-bottom"><span>${count} questions · ${sources.length} compilations</span><span class="arrow" aria-hidden="true">↗</span></div></a>`;
    }).join('')}</div>` + note('Your answers and quiz progress stay in this browser. No account needed.');
  }
  function scopeScreen(subject) {
    const s=subjects[subject];document.title=`${s.name} · Choose sections`;
    const count=scope=>eligible(subject,scope).reduce((n,c)=>n+c.questions.length,0);
    main.innerHTML=crumbs(subject)+hero(s.tag,'Which sections<br>are you studying?','Keep it close to your own section, or bring every available section into your review.',subject,true)+selectionTop('02 / CHOOSE YOUR SECTIONS',s.name)+`<div class="cards"><a class="choice-card option-card" href="${route(subject,'all')}"><div class="option-icon">${icon('all')}</div><h2>All sections</h2><p>Explore every available section compilation${subject==='webdev'?' and the additional topic quizzes':''}.</p><div class="card-bottom"><span>${count('all')} questions available</span><span class="arrow" aria-hidden="true">↗</span></div></a><a class="choice-card option-card" href="${route(subject,'34')}"><div class="option-icon">${icon('section')}</div><h2>BSIT 3-4 only</h2><p>Focus on your section’s reported topics and its quiz compilation.</p><div class="card-bottom"><span>${count('34')} questions available</span><span class="arrow" aria-hidden="true">↗</span></div></a></div><a class="back-link" href="#/">← Back to subjects</a>`;
  }
  function modeScreen(subject,scope) {
    const sources=eligible(subject,scope);document.title=`${subjects[subject].name} · Choose review material`;
    main.innerHTML=crumbs(subject,scope)+hero(scopeName(scope),'How would you<br>like to review?','Practice the questions your classmates compiled, or revisit the terms from the presentations.',subject,true)+selectionTop('03 / CHOOSE YOUR MATERIAL',subjects[subject].name)+`<div class="cards"><a class="choice-card option-card" href="${route(subject,scope,'quizzes')}"><div class="card-top"><div class="option-icon">${icon('quiz')}</div><span class="tag green">READY TO PRACTICE</span></div><h2>Quiz compilations</h2><p>Questions from the groups that have reported. Check each answer and learn as you go.</p><div class="card-bottom"><span>${sources.length} ${sources.length===1?'compilation':'compilations'} · Answers included</span><span class="arrow" aria-hidden="true">↗</span></div></a><a class="choice-card option-card" href="${route(subject,scope,'terms')}"><div class="card-top"><div class="option-icon">${icon('terms')}</div><span class="tag">COMING SOON</span></div><h2>Terms from the PPTs</h2><p>A review of all the terms from the presentations. This collection will open when the materials are added.</p><div class="card-bottom"><span>Presentations haven’t been added yet</span><span class="arrow" aria-hidden="true">↗</span></div></a></div><a class="back-link" href="${route(subject)}">← Change sections</a>`;
  }
  function compilationsScreen(subject,scope) {
    const sources=eligible(subject,scope);document.title=`${subjects[subject].name} · Quiz compilations`;
    const topicDescription=scope==='34'?sources[0].description:subjects[subject].topics;
    main.innerHTML=crumbs(subject,scope,'Quiz compilations')+`<section class="compilation-heading"><div class="eyebrow"><span class="dot"></span>04 / CHOOSE A COMPILATION</div><h1 id="page-title">A good place<br>to start practicing.</h1><p>${scopeName(scope)} · ${escape(topicDescription)}. Choose a compilation and work through its reported topics.</p></section>`+(sources.length>1?`<div class="aggregate"><div><h3>A little of everything</h3><p>Practice all ${sources.reduce((n,c)=>n+c.questions.length,0)} questions available for this selection.</p></div><a class="button" href="${route(subject,scope,'quiz','all')}">Practice all quizzes <span aria-hidden="true">↗</span></a></div>`:'')+`<div class="cards compilation-grid">${sources.map((c,i)=>`<a class="choice-card compilation-card" href="${route(subject,scope,'quiz',c.id)}"><div class="card-top"><span class="card-index">${String(i+1).padStart(2,'0')}</span><span class="tag">${c.section?'SECTION '+c.section:'TOPIC QUIZ'}</span></div><h3>${escape(c.label)}</h3><p>${escape(c.description)}</p><div class="card-bottom"><span>${c.questions.length} questions</span><span class="arrow" aria-hidden="true">↗</span></div></a>`).join('')}</div><a class="back-link" href="${route(subject,scope)}">← Change review material</a>`;
  }
  function termsScreen(subject,scope) {
    document.title=`${subjects[subject].name} · PPT terms coming soon`;
    main.innerHTML=crumbs(subject,scope,'PPT terms')+`<section class="coming-panel"><div class="option-icon">${icon('terms')}</div><span class="tag">COMING SOON</span><h1 id="page-title">A new chapter,<br>soon.</h1><p>The ${subjects[subject].name} presentations haven’t been added yet. Their terms and review questions will appear here once the materials are ready.</p><a class="button" href="${route(subject,scope,'quizzes')}">Practice the available quizzes <span aria-hidden="true">↗</span></a></section><a class="back-link" href="${route(subject,scope)}">← Back to review options</a>`;
  }
  const isCorrect = (q,a) => q.type==='choice' ? a?.value===q.correct : String(a?.value||'').trim().toLowerCase()===q.answer.trim().toLowerCase();
  let activeQuiz = null;
  function quizScreen(subject,scope,sourceId,group='all',focus=null) {
    const sources=eligible(subject,scope).filter(c=>sourceId==='all'||c.id===sourceId);
    if(!sources.length){location.replace(route(subject,scope,'quizzes'));return;}
    const all=sources.flatMap(c=>c.questions);
    const groups=[...new Map(all.map(q=>[q.sourceId+':'+q.groupId,{key:q.sourceId+':'+q.groupId,title:q.group,source:q.sourceId}])).values()];
    if(group!=='all'&&!groups.some(g=>g.key===group)){location.replace(route(subject,scope,'quiz',sourceId));return;}
    const questions=all.filter(q=>group==='all'||q.sourceId+':'+q.groupId===group);
    const key=[subject,scope,sourceId,group].join(':');
    const index=Math.min(saved.positions[key]||0,questions.length-1);
    const q=questions[index],answer=saved.answers[q.id],checked=!!answer?.checked;
    activeQuiz={subject,scope,sourceId,group,questions,key,index,q};
    const reviewed=questions.filter(q=>saved.answers[q.id]?.checked).length;
    const correct=questions.filter(q=>q.type!=='written'&&saved.answers[q.id]?.checked&&isCorrect(q,saved.answers[q.id])).length;
    const selfReviewed=questions.filter(q=>q.type==='written'&&saved.answers[q.id]?.checked).length;
    const wrong=reviewed-correct-selfReviewed;
    const title=sourceId==='all'?'All quiz compilations':sources[0].label;
    document.title=`${title} · ${subjects[subject].name} practice`;
    let input;
    if(q.type==='choice') input=`<fieldset class="answer-options" style="border:0;padding:0;margin:0"><legend class="input-label">Choose your answer</legend>${q.options.map((opt,i)=>`<label class="answer-option ${checked?'locked':''} ${checked&&i===q.correct?'correct':''} ${checked&&answer.value===i&&i!==q.correct?'wrong':''}"><input type="radio" name="answer" value="${i}" ${answer?.value===i?'checked':''} ${checked?'disabled':''}><span class="option-letter">${String.fromCharCode(65+i)}</span><span class="option-text">${escape(opt)}</span>${checked&&i===q.correct?'<span class="sr-label"> — Correct answer</span>':''}</label>`).join('')}</fieldset>`;
    else input=`<label class="input-label" for="text-answer">${q.type==='written'?'Write your one-sentence response':'Write the output'}</label>${q.type==='written'?`<textarea class="text-answer" id="text-answer" ${checked?'disabled':''}>${escape(answer?.value||'')}</textarea>`:`<input class="text-answer" id="text-answer" autocomplete="off" value="${escape(answer?.value||'')}" ${checked?'disabled':''}>`}`;
    let feedback='';
    if(checked){
      const ok=q.type==='written'||isCorrect(q,answer);
      feedback=`<div id="answer-feedback" class="feedback ${ok?'':'wrong'}" tabindex="-1" role="status"><strong>${q.type==='written'?'Compare your response':ok?'Correct. Nicely done.':'Not quite. Here’s the correct answer.'}</strong><p>${q.type==='written'?'<b>One possible answer:</b> ':q.type==='text'?'<b>Correct output:</b> ':'<b>Correct answer:</b> '}${escape(q.type==='choice'?String.fromCharCode(65+q.correct)+'. '+q.options[q.correct]:q.answer)}</p>${q.type==='written'?`<p>${escape(q.rubric)}</p><p class="muted">This written response is for self-review and does not count as a correct or incorrect answer.</p>`:''}</div>`;
    }
    main.innerHTML=crumbs(subject,scope,'Practice')+`<div class="quiz-header"><div><div class="eyebrow"><span class="dot"></span>QUIZ PRACTICE</div><h1 id="page-title">${escape(title)}</h1><p>${subjects[subject].name} · ${scopeName(scope)}</p></div><button class="button secondary" data-action="retry">Start a fresh attempt ↻</button></div><nav class="group-nav" aria-label="Quiz topics"><a class="group-chip" href="${route(subject,scope,'quiz',sourceId)}" ${group==='all'?'aria-current="page"':''}>All topics <span>${all.length}</span></a>${groups.length>1?groups.map(g=>`<a class="group-chip" href="${route(subject,scope,'quiz',sourceId,g.key)}" ${group===g.key?'aria-current="page"':''}>${escape(g.title)}${sourceId==='all'?` · ${escape(DATA.compilations.find(c=>c.id===g.source).label)}`:''}</a>`).join(''):''}</nav><div class="quiz-workspace"><section class="question-panel" aria-labelledby="question-title"><div class="question-meta"><span>${q.type==='choice'?'MULTIPLE CHOICE':q.type==='text'?'CODE OUTPUT':'WRITTEN RESPONSE'}</span><span>QUESTION ${index+1} / ${questions.length}</span></div><h2 class="question-title" id="question-title" tabindex="-1">${escape(q.prompt)}</h2><p class="source-note">${escape(DATA.compilations.find(c=>c.id===q.sourceId).label)} · ${escape(q.group)} · Original question ${escape(q.number)}${q.page?' · Page '+q.page:''}</p>${q.images.map(src=>`<img class="question-image" src="${escape(src)}" alt="${escape(q.imageAlt)}">`).join('')}${q.code?`<pre class="code-example">${escape(q.code)}</pre>`:''}${input}<div class="question-actions"><button class="button accent" id="check-answer" data-action="check" ${checked||answer?.value===undefined||String(answer?.value).trim()===''?'disabled':''}>${checked?'Answer checked ✓':q.type==='written'?'Show self-review guide':'Check answer'}</button><span>${checked?'Your first response is saved.':'Check when you’re ready.'}</span></div>${feedback}<div class="quiz-navigation"><button class="button secondary" data-action="previous" ${index===0?'disabled':''}>← Previous</button><span>${index+1} of ${questions.length}</span><button class="button secondary" data-action="next" ${index===questions.length-1?'disabled':''}>Next →</button></div></section><aside class="progress-panel" aria-label="Your practice progress"><div class="eyebrow">THIS PRACTICE SET</div><div class="progress-count">${reviewed}<small> / ${questions.length}</small></div><p>questions reviewed</p><div class="progress-track" role="progressbar" aria-label="Questions reviewed" aria-valuenow="${reviewed}" aria-valuemin="0" aria-valuemax="${questions.length}"><span style="width:${reviewed/questions.length*100}%"></span></div><hr><div class="stat"><span>Correct</span><b>${correct}</b></div><div class="stat"><span>To revisit</span><b>${wrong}</b></div>${selfReviewed?`<div class="stat"><span>Self-reviewed</span><b>${selfReviewed}</b></div>`:''}<p class="lock-note">First responses stay locked after checking. Start a fresh attempt whenever you’d like another go.</p>${reviewed===questions.length?`<div class="completion"><b>Set complete.</b><p>${correct} correct out of ${questions.length-questions.filter(q=>q.type==='written').length} scored questions.</p><p>Revisit your answers or begin a fresh attempt.</p></div>`:''}</aside></div><a class="back-link" href="${route(subject,scope,'quizzes')}">← Back to compilations</a>`;
    if(focus)document.querySelector(focus)?.focus({preventScroll:true});
  }
  function readRoute() {
    activeQuiz=null;
    if(location.hash==='#main'){home();return;}
    let parts;try{parts=location.hash.replace(/^#\/?/,'').split('/').filter(Boolean).map(decodeURIComponent)}catch(e){location.replace('#/');return;}
    const [subject,scope,stage,source,group]=parts;
    if(!subject){home();return;}
    if(!subjects[subject]){location.replace('#/');return;}
    if(!scope){scopeScreen(subject);return;}
    if(!['all','34'].includes(scope)){location.replace(route(subject));return;}
    if(!stage){modeScreen(subject,scope);return;}
    if(stage==='quizzes'){compilationsScreen(subject,scope);return;}
    if(stage==='terms'){termsScreen(subject,scope);return;}
    if(stage==='quiz'&&source){quizScreen(subject,scope,source,group||'all');return;}
    location.replace(route(subject,scope));
  }
  function updateInput() {
    if(!activeQuiz)return;
    const q=activeQuiz.q;if(saved.answers[q.id]?.checked)return;
    const value=q.type==='choice'?document.querySelector('input[name=answer]:checked')?.value:document.querySelector('#text-answer')?.value;
    if(value===undefined)return;
    saved.answers[q.id]={value:q.type==='choice'?Number(value):value,checked:false};
    document.querySelector('#check-answer').disabled=String(value).trim()==='';persist();
  }
  main.addEventListener('input',updateInput);
  main.addEventListener('click',event=>{
    const button=event.target.closest('[data-action]');if(!button||!activeQuiz)return;
    const a=activeQuiz;
    if(button.dataset.action==='check'){
      updateInput();const answer=saved.answers[a.q.id];if(!answer||answer.checked||String(answer.value).trim()==='')return;
      answer.checked=true;persist();quizScreen(a.subject,a.scope,a.sourceId,a.group,'#answer-feedback');
    }else if(['next','previous'].includes(button.dataset.action)){
      const index=a.index+(button.dataset.action==='next'?1:-1);if(index<0||index>=a.questions.length)return;
      saved.positions[a.key]=index;persist();quizScreen(a.subject,a.scope,a.sourceId,a.group,'#question-title');
      document.querySelector('.question-panel').scrollIntoView({block:'start',behavior:'auto'});
    }else if(button.dataset.action==='retry'){
      if(a.questions.some(q=>saved.answers[q.id])&&!confirm('Start a fresh attempt? These questions will be reset everywhere they appear. Responses to other questions will be kept.'))return;
      a.questions.forEach(q=>delete saved.answers[q.id]);saved.positions[a.key]=0;persist();quizScreen(a.subject,a.scope,a.sourceId,a.group);
    }
  });
  const themeButton=document.querySelector('#theme-toggle');
  function renderTheme(){const dark=document.documentElement.dataset.theme==='dark';themeButton.setAttribute('aria-label','Switch to '+(dark?'light':'dark')+' mode');themeButton.innerHTML=dark?'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z"/></svg>';document.querySelector('meta[name=theme-color]').content=dark?'#191816':'#faf9f5';}
  themeButton.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('study-room-theme',theme)}catch(e){}renderTheme();});
  document.querySelector('.skip-link').addEventListener('click',event=>{event.preventDefault();main.focus();main.scrollIntoView({block:'start'});});
  window.addEventListener('hashchange',()=>{readRoute();window.scrollTo(0,0);main.focus({preventScroll:true});});
  renderTheme();readRoute();
})();
