const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {JSDOM}=require(process.env.STUDY_TEST_JSDOM || 'jsdom');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const data=fs.readFileSync(path.join(root,'data/quizzes.js'),'utf8');
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
let passed=0;
function open(hash='#/',saved=null,blocked=false){
  const d=new JSDOM(html,{url:'http://localhost:4173/'+hash,runScripts:'outside-only'}),w=d.window;
  w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=function(){};w.confirm=()=>true;
  if(saved)w.localStorage.setItem('study-room-progress-v1',saved);
  if(blocked)Object.defineProperty(w,'localStorage',{get(){throw Error('Storage blocked')}});
  w.eval(data);w.eval(app);return d;
}
function change(w,hash){w.location.hash=hash;return new Promise(resolve=>w.addEventListener('hashchange',resolve,{once:true}));}
async function check(name,run){await run();passed++;console.log('PASS '+name);}
(async()=>{
  await check('Bank identities, source attribution, images and answer indices',()=>{
    const d=open(),bank=d.window.QUIZ_DATA.compilations,ids=new Set();
    assert.equal(bank.reduce((n,c)=>n+c.questions.length,0),201);
    for(const c of bank)for(const q of c.questions){assert(!ids.has(q.id));ids.add(q.id);assert.equal(q.section,c.section);assert.equal(q.sourceId,c.id);if(q.type==='choice'){assert(q.options.length>=2);assert(q.correct>=0&&q.correct<q.options.length)}else assert(q.answer);for(const image of q.images){assert(fs.existsSync(path.join(root,image)));assert(q.code)}}
    assert.equal(bank.filter(c=>c.section===null).length,3);d.window.close();
  });
  for(const subject of ['webdev','elective']){
    await check(subject+' shows section choice before review-material choice',async()=>{
      const d=open('#/'+subject),w=d.window;assert(w.document.querySelector('h1').textContent.includes('Which sections'));
      assert.equal(w.document.querySelectorAll('.option-card').length,2);
      assert(!w.document.querySelector('a[href="#/'+subject+'/all/quizzes"]'));
      for(const scope of ['all','34']){await change(w,'#/'+subject+'/'+scope);assert(w.document.querySelector('h1').textContent.includes('How would you'));assert(w.document.querySelector('a[href="#/'+subject+'/'+scope+'/quizzes"]'));assert(w.document.querySelector('a[href="#/'+subject+'/'+scope+'/terms"]'))}
      d.window.close();
    });
    await check(subject+' all-section and 3-4 catalogs stay separate',async()=>{
      const d=open('#/'+subject+'/34/quizzes'),w=d.window;
      assert.equal(w.document.querySelectorAll('.compilation-card').length,1);
      assert(w.document.querySelector('.compilation-card').getAttribute('href').endsWith(subject+'-34'));
      await change(w,'#/'+subject+'/all/quizzes');assert.equal(w.document.querySelectorAll('.compilation-card').length,subject==='webdev'?6:2);
      await change(w,'#/'+subject+'/34/quiz/'+subject+'-33');await new Promise(r=>setTimeout(r,20));assert.equal(w.location.hash,'#/'+subject+'/34/quizzes');
      await change(w,'#/'+subject+'/all/terms');assert(w.document.querySelector('h1').textContent.includes('soon'));assert(!w.document.querySelector('.question-panel'));d.window.close();
    });
  }
  await check('Every compilation and canonical answer can be completed, with text kept inert',async()=>{
    const catalog=open().window.QUIZ_DATA.compilations;
    for(const c of catalog){
      const d=open('#/'+c.subject+'/all/quiz/'+c.id),w=d.window;
      for(let i=0;i<c.questions.length;i++){
        const q=c.questions[i];assert.equal(w.document.querySelector('#question-title').textContent,q.prompt);assert(w.document.querySelector('#check-answer').disabled);
        if(q.type==='choice'){const radio=w.document.querySelectorAll('input[name=answer]')[q.correct];assert.equal(w.document.querySelectorAll('.option-text')[q.correct].textContent,q.options[q.correct]);radio.checked=true;radio.dispatchEvent(new w.Event('input',{bubbles:true}))}
        else{const input=w.document.querySelector('#text-answer');input.value=q.type==='written'?'<img src=x onerror=alert(1)>':q.answer;input.dispatchEvent(new w.Event('input',{bubbles:true}))}
        w.document.querySelector('#check-answer').click();assert(w.document.querySelector('#check-answer').disabled);assert(w.document.querySelector('.feedback:not(.wrong)'));assert.equal(w.document.querySelectorAll('.feedback img').length,0);
        if(i<c.questions.length-1)w.document.querySelector('[data-action=next]').click();
      }
      assert(w.document.querySelector('.completion'));d.window.close();
    }
  });
  await check('Incorrect first answer locks, correct answer is marked, and refresh preserves it',()=>{
    const d=open('#/webdev/34/quiz/webdev-34'),w=d.window,q=w.QUIZ_DATA.compilations[0].questions[0];
    const radio=w.document.querySelectorAll('input[name=answer]')[(q.correct+1)%q.options.length];radio.checked=true;radio.dispatchEvent(new w.Event('input',{bubbles:true}));w.document.querySelector('#check-answer').click();
    assert(w.document.querySelector('.feedback.wrong'));assert.equal(w.document.querySelectorAll('.answer-option.correct').length,1);assert([...w.document.querySelectorAll('input[name=answer]')].every(x=>x.disabled));
    const snapshot=w.localStorage.getItem('study-room-progress-v1'),r=open('#/webdev/34/quiz/webdev-34',snapshot);assert(r.window.document.querySelector('.feedback.wrong'));r.window.close();w.close();
  });
  await check('Drafts, topic navigation, reset cancellation and scoped reset',async()=>{
    const d=open('#/webdev/34/quiz/webdev-34'),w=d.window;
    w.document.querySelector('input[name=answer]').checked=true;w.document.querySelector('input[name=answer]').dispatchEvent(new w.Event('input',{bubbles:true}));
    w.document.querySelector('[data-action=next]').click();w.document.querySelector('[data-action=previous]').click();assert(w.document.querySelector('input[name=answer]').checked);
    w.document.querySelector('#check-answer').click();w.confirm=()=>false;w.document.querySelector('[data-action=retry]').click();assert(w.document.querySelector('.feedback'));
    w.confirm=()=>true;w.document.querySelector('[data-action=retry]').click();assert(!w.document.querySelector('.feedback'));assert(w.document.querySelector('#check-answer').disabled);
    await change(w,'#/webdev/34/quiz/webdev-34/webdev-34%3A5');assert(w.document.querySelector('#question-title').textContent.includes('symbol'));d.window.close();
  });
  await check('Malformed and blocked storage keep the site usable',()=>{
    for(const d of [open('#/','{bad'),open('#/',null,true)]){assert.equal(d.window.document.querySelectorAll('.subject-card').length,2);assert(d.window.document.querySelector('#save-status').textContent.includes('unavailable'));d.window.close()}
  });
  console.log(JSON.stringify({passed,sourceQuestions:201}));
})().catch(e=>{console.error(e);process.exitCode=1});
