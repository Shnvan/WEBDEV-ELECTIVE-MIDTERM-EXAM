// Deterministic compilation of immutable source imports + separately curated audit decisions.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),ctx={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'data/quizzes.js'),'utf8'),ctx);
const raw=ctx.window.QUIZ_DATA.compilations,audit=JSON.parse(fs.readFileSync(path.join(root,'data/audit-decisions.json'),'utf8'));
const all=raw.flatMap(c=>c.questions),byId=new Map(all.map(q=>[q.id,q]));
const {duplicateKey}=require('./duplicate_rules.cjs');
assert.equal(all.length,Object.keys(audit.decisions).length,'Every source question needs a decision');
const topics={webdev:[{id:'html',title:'HTML & accessibility'},{id:'css',title:'CSS & responsive design'},{id:'javascript',title:'JavaScript & the DOM'},{id:'php',title:'PHP fundamentals'}],elective:[{id:'datasets',title:'Datasets & ML workflow'},{id:'training',title:'Training & evaluation'},{id:'images',title:'Image classification'},{id:'audio',title:'Audio classification'}]};
function topic(q){
 if(q.subject==='webdev'){
  if(q.sourceId==='webdev-34')return {'2':'html','9':'css','5':'php'}[q.groupId];
  if(q.sourceId==='webdev-33')return {'1':'html','2':'css','3':'javascript','4':'php'}[q.groupId];
  if(q.sourceId==='webdev-32')return {'1':'html','8':'javascript','10':'css'}[q.groupId];
  return q.sourceId.split('-').at(-1);
 }
 if(q.sourceId==='elective-34'){
  if(q.groupId==='5'&&['1','2','9','10'].includes(q.number)||q.groupId==='3'&&q.number==='3')return 'training';
  return {'1':'datasets','5':'images','3':'audio'}[q.groupId];
 }
 if(q.groupId==='3'&&['25','26','27','28'].includes(q.number)||q.number==='38')return 'training';
 return {'1':'datasets','2':'training','3':'images','4':'audio'}[q.groupId];
}
const membership=new Map(),merged=new Map();
for(const group of audit.duplicateGroups){
 const questions=group.ids.map(id=>{assert(byId.has(id),id);return byId.get(id)});
 assert(questions.every(q=>q.subject===questions[0].subject&&q.type===questions[0].type),'Do not merge subjects or question types');
 assert(questions.every(q=>audit.decisions[q.id].status!=='unresolved'),'Unresolved questions cannot establish equivalence');
 assert(questions.every(q=>duplicateKey(q,audit.decisions)===duplicateKey(questions[0],audit.decisions)),'Duplicates must have the same question wording, answer, choices and code/image context');
 const representative=questions.find(q=>q.section==='3-4')||questions[0];
 for(const q of questions){assert(!membership.has(q.id));membership.set(q.id,representative.id)}
 merged.set(representative.id,group);
}
const norm=s=>String(s).normalize('NFKC').toLowerCase().replace(/[\u2018\u2019]/g,"'").replace(/\s+/g,' ').trim();
const questions=[],aliases={};
for(const q of all){
 const canonical=membership.get(q.id)||q.id;
 if(canonical!==q.id)continue;
 const ids=merged.get(canonical)?.ids||[q.id],d=audit.decisions[q.id];assert(d&&d.references.length&&d.note,q.id);
 const answer=q.type==='choice'?q.options[d.correct]:q.answer;
 const sources=ids.map(id=>{
  const source=byId.get(id),comp=raw.find(c=>c.id===source.sourceId);
  return {id,sourceId:source.sourceId,section:source.section,label:comp.label,group:source.group,number:source.number,page:source.page||null};
 });
 const item={...JSON.parse(JSON.stringify(q)),correct:d.correct,answer,topic:topic(q),aliases:ids,sources,
  sections:[...new Set(sources.map(s=>s.section).filter(Boolean))],
  audit:{status:d.status,note:d.note,originalAnswer:d.originalSourceAnswer||(q.type==='choice'?String.fromCharCode(65+q.correct)+'. '+q.options[q.correct]:q.answer),verifiedAnswer:d.verifiedAnswer,references:d.references.map(id=>audit.sources[id])},
  scored:!['unresolved','written-self-review'].includes(d.status),practice:d.status!=='unresolved'};
 item.signature=crypto.createHash('sha256').update(JSON.stringify([item.prompt,item.options,item.correct,item.answer,item.type,item.audit.status])).digest('hex').slice(0,16);
 questions.push(item);
 for(const id of ids){
  const original=byId.get(id),originalDecision=audit.decisions[id];
  aliases[id]={canonical,subject:original.subject,section:original.section,topic:item.topic,type:original.type,
   keyChanged:originalDecision.correct!==original.correct,
   options:original.options,
   optionMap:original.options.map((text,i)=>{
    if(i===originalDecision.correct&&item.scored)return item.correct;
    const at=item.options.findIndex(t=>norm(t)===norm(text));return at<0?null:at;
   })};
 }
}
assert.equal(Object.keys(aliases).length,201);
for(const q of questions)assert(topics[q.subject].some(t=>t.id===q.topic),q.id);
const version='audited-v2-'+crypto.createHash('sha256').update(JSON.stringify([questions,audit.duplicateGroups])).digest('hex').slice(0,12);
const bank={version,reviewedOn:audit.reviewedOn,duplicatePolicy:audit.duplicatePolicy,rawCount:all.length,topics,questions,aliases,
 legacySets:raw.map(c=>({id:c.id,subject:c.subject,section:c.section,ids:c.questions.map(q=>q.id),groups:Object.fromEntries([...new Set(c.questions.map(q=>q.groupId))].map(g=>[g,c.questions.filter(q=>q.groupId===g).map(q=>q.id)]))}))};
fs.writeFileSync(path.join(root,'data/review-bank.js'),'window.REVIEW_BANK = '+JSON.stringify(bank,null,2)+';\n');
const count=(items)=>({unique:items.length,scored:items.filter(q=>q.scored).length,written:items.filter(q=>q.audit.status==='written-self-review').length,unresolved:items.filter(q=>q.audit.status==='unresolved').length,practice:items.filter(q=>q.practice).length});
const summary={version,raw:all.length,duplicateGroups:audit.duplicateGroups.length,duplicatesRemoved:all.length-questions.length,...count(questions),scopes:{}};
for(const subject of ['webdev','elective'])for(const scope of ['all','34'])summary.scopes[subject+'-'+scope]=count(questions.filter(q=>q.subject===subject&&(scope==='all'||q.sections.includes('3-4'))));
fs.mkdirSync(path.join(root,'audit'),{recursive:true});
fs.writeFileSync(path.join(root,'audit/summary.json'),JSON.stringify(summary,null,2)+'\n');
const md=s=>String(s??'').replace(/\|/g,'\\|').replace(/\n/g,' ').replace(/</g,'&lt;').replace(/>/g,'&gt;');
let report=`# Quiz answer audit\n\nReviewed on ${audit.reviewedOn}. ${all.length} original source questions were individually reviewed. ${all.length-questions.length} exact duplicate repetitions were merged into ${questions.length} unique questions: ${summary.scored} objective scored questions, ${summary.written} written self-review prompt, and ${summary.unresolved} unresolved questions retained in Questions & answers only.\n\nThe review compares the claims and available choices with primary references. It does not certify the contents of presentations that have not been supplied. HTTP availability checks and application tests are separate evidence.\n\nOne confirmed wrong highlighted key is recorded from the user-provided hyperlink screenshot: B uses src, whereas C uses href. The old website already used C; that correct existing attempt does not need reopening. Other original keys below are the imported keys or the explicitly inferred keys documented in the prior README.\n\n## Items requiring clarification\n\n`;
for(const q of all)if(audit.decisions[q.id].status==='unresolved')report+=`- **${q.id}** — ${md(audit.decisions[q.id].note)}\n`;
report+='\n## Exact duplicate review\n\n'+audit.duplicatePolicy+'\n\n';
if(!audit.duplicateGroups.length)report+='No exact duplicates were found. All 201 source questions are retained separately. Twenty previously merged questions were restored after the user clarified the rule; audit/duplicate-review.json records every reviewed former group.\n';
for(const g of audit.duplicateGroups)report+=`- ${g.ids.map(id=>'`'+id+'`').join(', ')} — ${g.reason}\n`;
report+='\nQuestions with different wording, answers, choices, code or images are retained, even when they test the same concept. For example, What is an epoch? asks for its definition; the Audio Classification question describes a training setting and asks for Epochs. Both remain separately available.\n';
for(const c of raw){
 report+=`\n## ${c.label} — ${c.subject}\n\n| Original ID and question | Original answer | Decision / verified answer | Reason and supporting references |\n|---|---|---|---|\n`;
 for(const q of c.questions){const d=audit.decisions[q.id],original=d.originalSourceAnswer||(q.type==='choice'?String.fromCharCode(65+q.correct)+'. '+q.options[q.correct]:q.answer),verified=d.status==='unresolved'?'No single confirmed answer':d.verifiedAnswer;
  report+=`| **${q.id}** ${md(q.prompt)} | ${md(original)} | ${d.status}: ${md(verified)} | ${md(d.note)} ${d.references.map(id=>`[${md(audit.sources[id].label)}](${audit.sources[id].url})`).join(', ')} |\n`;
 }
}
fs.writeFileSync(path.join(root,'audit/ANSWER_AUDIT.md'),report);
console.log(JSON.stringify(summary,null,2));
