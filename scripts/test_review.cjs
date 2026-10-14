const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const {JSDOM}=require(process.env.STUDY_TEST_JSDOM||'jsdom');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const html=read('index.html'),scripts=['data/review-bank.js','art.js','progress.js','app.js'].map(read);
const context={window:{}};vm.runInNewContext(scripts[0],context);const bank=context.window.REVIEW_BANK;
vm.runInNewContext(scripts[2],context);const restore=context.window.StudyProgress.restore;
const pause=()=>new Promise(r=>setTimeout(r,15));let passed=0;
function open(hash='#/',saved=null,blocked=false){
 const d=new JSDOM(html,{url:'http://localhost:4173/'+hash,runScripts:'outside-only',pretendToBeVisual:true}),w=d.window;
 w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=function(){};w.confirm=()=>true;
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'));};
 if(saved)w.localStorage.setItem('study-room-progress-v1',JSON.stringify(saved));
 if(blocked)Object.defineProperty(w,'localStorage',{get(){throw Error('blocked');}});
 scripts.forEach(s=>w.eval(s));return d;
}
async function route(w,hash){w.location.hash=hash;await pause();await pause();}
function input(w,value){const e=w.document.querySelector('#text-answer');if(e){e.value=value;e.dispatchEvent(new w.Event('input',{bubbles:true}));}else{const e=w.document.querySelectorAll('input[name=answer]')[value];e.checked=true;e.dispatchEvent(new w.Event('input',{bubbles:true}));}}
const click=(w,s)=>w.document.querySelector(s).click();
async function until(fn){for(let i=0;i<50;i++){if(fn())return;await pause();}assert(fn(),'Expected UI state did not arrive');}
async function check(name,fn){await fn();console.log('PASS '+name);passed++;}
(async()=>{
 await check('Independent audit coverage, primary reference evidence, and complete alias provenance',()=>{
  const raw={window:{}};vm.runInNewContext(read('data/quizzes.js'),raw);const source=raw.window.QUIZ_DATA.compilations.flatMap(c=>c.questions),audit=JSON.parse(read('data/audit-decisions.json')),checks=JSON.parse(read('audit/source-checks.json')).checks;
  assert.equal(source.length,201);assert.equal(Object.keys(audit.decisions).length,201);assert.equal(bank.questions.length,181);assert.equal(Object.keys(bank.aliases).length,201);assert.equal(audit.duplicateGroups.length,17);
  for(const q of source){const d=audit.decisions[q.id];assert(['verified','corrected','unresolved','written-self-review'].includes(d.status));assert(d.note);assert(d.references.length);for(const ref of d.references){assert(checks[ref].ok);assert.equal(checks[ref].url,audit.sources[ref].url);}const alias=bank.aliases[q.id],representative=bank.questions.find(x=>x.id===alias.canonical);assert(representative.sources.some(s=>s.id===q.id));}
  for(const q of bank.questions){assert.equal(q.sections.includes('3-4'),q.sources.some(s=>s.section==='3-4'));if(q.sources.some(s=>s.section==='3-4'))assert(q.id.startsWith(q.subject+'-34'));assert.equal(q.practice,q.audit.status!=='unresolved');assert.equal(q.scored,q.practice&&q.type!=='written');for(const src of q.images)assert(fs.existsSync(path.join(root,src)));assert(q.audit.references.every(r=>r.url.startsWith('https://')));}
  assert.equal(bank.questions.filter(q=>q.scored).length,165);assert.equal(bank.questions.filter(q=>!q.practice).length,15);assert.equal(bank.questions.find(q=>q.id==='webdev-34-2-3').correct,2);
 });
 await check('Both subjects and scopes start combined practice directly; legacy URLs redirect',async()=>{
  for(const subject of ['webdev','elective'])for(const scope of ['all','34']){
   const d=open('#/'+subject),w=d.window;assert.equal(w.document.querySelectorAll('.option-card').length,2);click(w,`a.option-card[href="#/${subject}/${scope}/practice"]`);await pause();assert(w.document.querySelector('#question-title'));assert.equal(w.document.querySelectorAll('.compilation-card').length,0);
   for(const legacy of [`#/${subject}/${scope}`,`#/${subject}/${scope}/quizzes`,`#/${subject}/${scope}/quiz/${subject}-33`]){await route(w,legacy);assert(w.location.hash.startsWith(`#/${subject}/${scope}/practice`));assert(w.document.querySelector('#question-title'));}
   await route(w,`#/${subject}/${scope}/terms`);assert(w.document.querySelector('h1').textContent.includes('soon'));d.window.close();
  }
 });
 await check('Every practice answer marks correctly; 15 ambiguous questions never enter scoring',()=>{
  let completed=0;
  for(const subject of ['webdev','elective']){
   const d=open(`#/${subject}/all/practice`),w=d.window,items=bank.questions.filter(q=>q.subject===subject&&q.practice).sort((a,b)=>bank.topics[subject].findIndex(t=>t.id===a.topic)-bank.topics[subject].findIndex(t=>t.id===b.topic));
   for(let i=0;i<items.length;i++){const q=items[i];assert.equal(w.document.querySelector('#question-title').textContent,q.prompt);assert(w.document.querySelector('#check-answer').disabled);input(w,q.type==='choice'?q.correct:q.type==='written'?'<img src=x onerror=alert(1)>':q.answer);click(w,'#check-answer');assert(w.document.querySelector('.feedback:not(.wrong)'));assert.equal(w.document.querySelectorAll('.feedback img').length,0);assert(w.document.querySelector('#check-answer').disabled);if(q.type==='choice')assert.equal(w.document.querySelectorAll('.answer-option.correct').length,1);completed++;if(i<items.length-1)click(w,'[data-action=next]');}
   assert(w.document.querySelector('.completion'));d.window.close();
  }assert.equal(completed,166);
 });
 await check('Incorrect first attempts lock, persist, and reset only the selected topic',async()=>{
  const d=open('#/webdev/all/practice'),w=d.window,q=bank.questions.find(q=>q.subject==='webdev'&&q.practice);input(w,(q.correct+1)%q.options.length);click(w,'#check-answer');assert(w.document.querySelector('.feedback.wrong'));assert([...w.document.querySelectorAll('input[name=answer]')].every(e=>e.disabled));
  const snapshot=JSON.parse(w.localStorage.getItem('study-room-progress-v1')),second=bank.questions.find(q=>q.subject==='elective'&&q.scored);snapshot.answers[second.id]={value:second.answer,checked:true,signature:second.signature};const r=open('#/webdev/all/practice/html',snapshot),v=r.window;assert(v.document.querySelector('.feedback.wrong'));v.confirm=()=>false;click(v,'[data-action=retry]');assert(v.document.querySelector('.feedback'));v.confirm=()=>true;click(v,'[data-action=retry]');assert(!v.document.querySelector('.feedback'));assert(JSON.parse(v.localStorage.getItem('study-room-progress-v1')).answers[second.id].checked);w.close();v.close();
 });
 await check('Walkthrough is complete, searchable, topic-filtered, inert, and cannot score drafts',async()=>{
  const d=open('#/webdev/all/practice'),w=d.window;input(w,0);click(w,'[data-action=next]');input(w,1);const before=w.localStorage.getItem('study-room-progress-v1'),prompt=w.document.querySelector('#question-title').textContent;
  await route(w,'#/webdev/all/answers');assert.equal(w.document.querySelectorAll('.walkthrough-question').length,113);assert.equal(w.document.querySelectorAll('.unscored-label').length,8);assert.equal(w.document.querySelectorAll('.walkthrough-question script,.walkthrough-options img').length,0);assert(w.document.querySelector('.code-transcript'));
  const s=w.document.querySelector('#review-search');s.value='hyperlink';s.dispatchEvent(new w.Event('input',{bubbles:true}));assert(w.document.querySelectorAll('.walkthrough-question').length>0);s.value='<img onerror>';s.dispatchEvent(new w.Event('input',{bubbles:true}));assert.equal(w.document.querySelectorAll('.walkthrough-question').length,0);click(w,'#clear-search');assert.equal(w.document.querySelectorAll('.walkthrough-question').length,113);
  await route(w,'#/webdev/all/answers/php');assert([...w.document.querySelectorAll('[data-question-id]')].every(e=>bank.questions.find(q=>q.id===e.dataset.questionId).topic==='php'));
  await route(w,'#/webdev/all/practice');assert.equal(w.document.querySelector('#question-title').textContent,prompt);assert.equal(w.document.querySelector('input[name=answer]:checked').value,'1');assert(!w.document.querySelector('.feedback'));assert.equal(JSON.stringify(JSON.parse(before).answers),JSON.stringify(JSON.parse(w.localStorage.getItem('study-room-progress-v1')).answers));w.close();
 });
 await check('Migration follows answer meanings, merges compatible attempts and reopens conflicts',()=>{
  const merged=bank.questions.find(q=>q.aliases.length>1&&q.sources.some(s=>s.section==='3-4')),aliases=merged.aliases.map(id=>[id,bank.aliases[id]]),answers={};for(const [id,a] of aliases){const index=a.optionMap.findIndex(x=>x===merged.correct);answers[id]={value:index,checked:true};}
  let r=restore(JSON.stringify({version:1,answers}),bank);assert(r.state.answers[merged.id].checked);assert.equal(r.state.answers[merged.id].value,merged.answer);
  const bad=aliases.find(([,a])=>a.optionMap.some(x=>x!==null&&x!==merged.correct));answers[bad[0]]={value:bad[1].optionMap.findIndex(x=>x!==null&&x!==merged.correct),checked:true};r=restore(JSON.stringify({version:1,answers}),bank);assert(!r.state.answers[merged.id].checked);assert.equal(r.summary.conflicts,1);
  const missing=Object.entries(bank.aliases).find(([,a])=>a.optionMap.includes(null));assert(missing);r=restore(JSON.stringify({version:1,answers:{[missing[0]]:{value:missing[1].optionMap.indexOf(null),checked:true}}}),bank);assert(!r.state.answers[missing[1].canonical].checked);assert(r.state.answers[missing[1].canonical].previousValue);
  const single=bank.questions.find(q=>q.scored&&q.aliases.length===1),synthetic=JSON.parse(JSON.stringify(bank));synthetic.aliases[single.id].keyChanged=true;r=restore(JSON.stringify({version:1,answers:{[single.id]:{value:single.correct,checked:true},[merged.id]:{value:merged.correct,checked:true}}}),synthetic);assert(!r.state.answers[single.id].checked);assert(r.state.answers[merged.id].checked);
  r=restore(JSON.stringify({version:2,bankVersion:'old',answers:{[single.id]:{value:single.answer,checked:true,signature:'old'},[merged.id]:{value:merged.answer,checked:true,signature:merged.signature}},positions:{'webdev:all:all':single.id},reading:{'webdev:all:all':{id:single.id,offset:42}}}),bank);assert(!r.state.answers[single.id].checked);assert(r.state.answers[merged.id].checked);assert.equal(r.state.reading['webdev:all:all'].offset,42);
  const legacy=bank.legacySets.find(s=>s.id==='webdev-34');r=restore(JSON.stringify({version:1,answers:{},positions:{'webdev:34:webdev-34:all':2}}),bank);assert.equal(r.state.positions['webdev:34:all'],bank.aliases[legacy.ids[2]].canonical);
 });
 await check('Menu expanded state, keyboard trapping, Escape, link close, and focus restoration',async()=>{
  const d=open('#/elective/34/practice'),w=d.window;click(w,'#menu-toggle');assert.equal(w.document.querySelector('#menu-toggle').getAttribute('aria-expanded'),'true');const menu=w.document.querySelector('#navigation-menu'),last=menu.querySelector('a:last-child');last.focus();last.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Tab',bubbles:true,cancelable:true}));assert.equal(w.document.activeElement.id,'menu-close');menu.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true}));assert(!menu.open);assert.equal(w.document.activeElement.id,'menu-toggle');click(w,'#menu-toggle');click(w,'#menu-links a[href="#/elective/34/answers"]');await pause();await pause();assert(!menu.open);assert(w.document.querySelector('#review-list'));assert.equal(w.document.querySelector('#menu-toggle').getAttribute('aria-expanded'),'false');w.close();
 });
 await check('Corrupt, blocked and quota-limited storage leave practice usable',()=>{
  assert(restore('not JSON',bank).invalid);assert(restore('{"version":2,"answers":[]}',bank).invalid);
  for(const blocked of [true,false]){const d=open('#/elective/34/practice',null,blocked),w=d.window;if(!blocked)w.Storage.prototype.setItem=function(){throw Error('quota');};input(w,0);click(w,'#check-answer');assert(w.document.querySelector('.feedback'));assert(w.document.querySelector('#save-status').classList.contains('error-status'));w.close();}
 });
 await check('Reading anchors, semantic drafts and theme survive reload and keyboard tab changes',async()=>{
  const q=bank.questions.find(q=>q.id==='webdev-34-2-3'),snapshot={version:2,bankVersion:bank.version,answers:{},positions:{'webdev:all:all':q.id},reading:{'webdev:all:all':{id:q.id,offset:32}}},d=open('#/webdev/all/practice',snapshot),w=d.window;
  input(w,0);click(w,'#theme-toggle');const theme=w.localStorage.getItem('study-room-theme');const tab=w.document.querySelector('#practice-tab');tab.dispatchEvent(new w.KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true,cancelable:true}));await until(()=>w.document.querySelector('#review-list'));assert.equal(w.document.activeElement.id,'answers-tab');
  const rd=open('#/webdev/all/answers',snapshot),rw=rd.window;let scrolled=null;rw.scrollTo=options=>{scrolled=options.top;};rw.HTMLElement.prototype.getBoundingClientRect=function(){return {top:this.id==='review-'+q.id?1000:0,height:this.id.startsWith('review-')?600:0};};await new Promise(r=>setTimeout(r,45));assert.equal(scrolled,1014);rw.close();assert.equal(w.localStorage.getItem('study-room-theme'),theme);
  const state=JSON.parse(w.localStorage.getItem('study-room-progress-v1'));assert(!state.answers[q.id].checked);assert.equal(state.answers[q.id].value,q.options[0]);w.close();
  const unmapped=Object.entries(bank.aliases).find(([,a])=>a.optionMap.includes(null)),migrated=restore(JSON.stringify({version:1,answers:{[unmapped[0]]:{value:unmapped[1].optionMap.indexOf(null),checked:true}}}),bank),roundtrip=restore(JSON.stringify(migrated.state),bank);assert.equal(roundtrip.state.answers[unmapped[1].canonical].previousValue,migrated.state.answers[unmapped[1].canonical].previousValue);
 });
 console.log(`${passed} suites passed. Application validation is separate from the manual answer audit.`);
})().catch(e=>{console.error(e);process.exitCode=1;});
