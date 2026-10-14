// Reviewed PDF wording + supplied outline -> a separate presentation review bank.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const electiveOutline=JSON.parse(read('data/terms-outline.json')),webdevOutline=JSON.parse(read('data/webdev-terms-outline.json'));
const electiveContent=JSON.parse(read('data/terms-slide-content.json')),webdevContent=JSON.parse(read('data/webdev-terms-slide-content.json'));
const outline={topics:[...electiveOutline.topics,...webdevOutline.topics],terms:[...electiveOutline.terms,...webdevOutline.terms]};
const metadata=[...JSON.parse(read('data/terms-sources.json')),...JSON.parse(read('data/webdev-terms-sources.json'))],content={reviewedOn:webdevContent.reviewedOn,entries:{...electiveContent.entries,...webdevContent.entries}};
const labels={audio:'Group 3 · Audio Classification',images:'Group 5 · Image Classification',datasets:'Group 1 · Datasets & ML Workflow'};
const sources=metadata.map(s=>({...s,subject:s.subject||'elective',label:s.label||labels[s.id],section:'3-4',sectionBasis:s.sectionBasis||'Matches the reported BSIT 3-4 groups supplied for this reviewer.'}));
assert.equal(electiveOutline.terms.length,230);assert.equal(webdevOutline.terms.length,259);assert.equal(Object.keys(content.entries).length,outline.terms.length);
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const escapeRegex=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function questionExcerpt(entry){let text=entry.practiceWording||entry.pdfWording;if(entry.practiceWording)assert(entry.pdfWording.includes(entry.practiceWording),'Practice passage must be from PDF wording');if(entry.questionStyle==='fill-blank'){assert(entry.blankText);for(const phrase of entry.blankText.split(';').sort((a,b)=>b.length-a.length)){const re=new RegExp(escapeRegex(phrase),'gi');assert(re.test(text),'Missing blank: '+phrase);text=text.replace(re,'_______');}assert(text.includes('_______'));}return text;}
const topics=outline.topics.map(t=>({...t,title:t.title,group:sources.find(s=>s.id===t.sourceId).label}));
const refs={
 relu:{label:'Keras: ReLU',url:'https://keras.io/api/layers/activation_layers/relu/'},
 mfcc:{label:'librosa: MFCCs',url:'https://librosa.org/doc/0.11.0/generated/librosa.feature.mfcc.html'},
 scaling:{label:'scikit-learn: preprocessing',url:'https://scikit-learn.org/stable/modules/preprocessing.html'},
 metrics:{label:'scikit-learn: model evaluation',url:'https://scikit-learn.org/stable/modules/model_evaluation.html'},
 box:{label:'Matplotlib: box plots',url:'https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.boxplot.html'},
 correlation:{label:'SciPy: Pearson correlation',url:'https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.pearsonr.html'}
};
const extraRefs={'ppt-audio-008':['relu'],'ppt-audio-030':['mfcc'],'ppt-datasets-051':['scaling'],'ppt-datasets-052':['scaling'],'ppt-datasets-054':['scaling'],'ppt-datasets-055':['scaling'],'ppt-datasets-067':['box'],'ppt-datasets-069':['correlation'],'ppt-datasets-093':['metrics'],'ppt-images-072':['metrics'],'ppt-images-073':['metrics'],'ppt-images-074':['metrics'],'ppt-images-075':['metrics']};
const numbers={elective:0,webdev:0};
const questions=outline.terms.map(term=>{
 const d=content.entries[term.id],source=sources.find(s=>s.id===term.sourceId),topic=topics.find(t=>t.id===term.topicId);assert(d&&source&&topic&&d.reviewed&&d.distractorsReviewed,term.id);
 assert(d.pages.length&&d.pages.every(p=>Number.isInteger(p)&&p>=1&&p<=source.pages),term.id);
 assert(['identify','heading','fill-blank'].includes(d.questionStyle));assert(d.pdfWording&&['definition','slide-excerpt'].includes(d.contentKind));
 assert.equal(d.distractors.length,3,term.id);assert(d.distractors.every(label=>outline.terms.some(t=>t.term===label)),term.id);
 const correct=parseInt(crypto.createHash('sha256').update(term.id).digest('hex').slice(0,2),16)%4,options=[...d.distractors];options.splice(correct,0,term.term);assert.equal(new Set(options.map(norm)).size,4);
 const excerpt=questionExcerpt(d);assert(!new RegExp('(^| )'+escapeRegex(norm(term.term))+'( |$)').test(norm(excerpt)),'Answer leak: '+term.id);
 const opening=d.questionLead||(d.questionStyle==='fill-blank'?'Choose the term that fills the blank.':d.questionStyle==='heading'?'Which slide topic lists these items?':'What term is described?');
 const history=d.compatibility&&norm(d.compatibility.answer)===norm(term.term)?[d.compatibility]:[];
 const subject=term.subject||source.subject,number=String(++numbers[subject]);
 const q={id:term.id,subject,material:'terms',term:term.term,definition:d.pdfWording,pdfWording:d.pdfWording,contentKind:d.contentKind,questionStyle:d.questionStyle,questionExcerpt:excerpt,detail:d.clarification,previousVersions:history,topic:topic.id,section:'3-4',sections:['3-4'],type:'choice',prompt:`${opening}\n\n${excerpt}`,options,correct,answer:term.term,images:[],code:'',imageAlt:'',number,practice:true,scored:true,scoringBasis:'presentation',aliases:[term.id],sources:[{id:term.id,sourceId:source.id,section:'3-4',label:source.label,filename:source.filename,group:topic.title,number,page:d.pages[0],pages:d.pages}],outlinePages:term.pages,audit:{status:'presentation-based',note:'Expected term from the supplied presentation: '+term.term+'.',references:d.references||(extraRefs[term.id]||[]).map(r=>refs[r])}};
 q.signature=crypto.createHash('sha256').update(JSON.stringify([q.prompt,q.options,q.correct,q.answer,q.type,q.audit.status])).digest('hex').slice(0,16);return q;
});
const aliases=Object.fromEntries(questions.map(q=>[q.id,{canonical:q.id,subject:q.subject,section:q.section,topic:q.topic,type:q.type,keyChanged:false,options:q.options,optionMap:q.options.map((_,i)=>i)}]));
const bank={version:'terms-v3-'+crypto.createHash('sha256').update(JSON.stringify(questions)).digest('hex').slice(0,12),reviewedOn:content.reviewedOn,rawCount:questions.length,sources,topics:Object.fromEntries(['elective','webdev'].map(subject=>[subject,topics.filter(t=>(t.subject||'elective')===subject)])),questions,aliases,legacySets:[],coverageNote:'Each subject has three supplied presentations matching the BSIT 3-4 reported groups. All sections currently uses the same available decks for that subject; other sections’ presentations have not been supplied.'};
fs.writeFileSync(path.join(root,'data/terms-bank.js'),'window.TERMS_BANK = '+JSON.stringify(bank,null,2)+';\n');
function coverageReport(subject,title,file){
 const items=questions.filter(q=>q.subject===subject),decks=sources.filter(s=>s.subject===subject),groups=bank.topics[subject];
 let report=`# ${title} PPT term coverage\n\n${items.length} supplied-list entries · ${groups.length} topics · ${decks.length} PDFs. All entries were manually compared with the source text; ${subject==='webdev'?67:58} rendered pages were inspected for columns, tables, diagrams, formulas or annotated code. Original spelling and statements are preserved. Line wrapping, letter spacing, table separators and diagram/code layout are transcribed into readable text. Clarifications are separate from quotations. Repeated terms retain their original contexts.\n\nAll questions are four-choice multiple choice: ${items.filter(q=>q.questionStyle==='identify').length} identification, ${items.filter(q=>q.questionStyle==='fill-blank').length} fill-in-the-blank and ${items.filter(q=>q.questionStyle==='heading').length} slide-heading identification. Manually selected choices avoid competing synonyms or broad/specific versions of the same concept. Source review is separate from application tests.\n\n${bank.coverageNote}\n\nExisting Elective IDs, question signatures and compatibility mappings are retained. New WebDev entries have independent IDs and subject-specific progress positions. Quiz-compilation progress remains separate.\n\n`;
 for(const source of decks){report+=`## ${source.label}\n\n${source.filename} · ${source.pages} pages · SHA-256 ${source.sha256}\n\n`;
  for(const topic of groups.filter(t=>t.sourceId===source.id)){report+=`### ${topic.title}\n\n`;for(const q of items.filter(q=>q.topic===topic.id))report+=`#### ${q.number}. ${q.term} (${q.id})\n\nPDF pages: ${q.sources[0].pages.join(', ')} · ${q.contentKind} · ${q.questionStyle}\n\nPDF wording:\n\n${q.pdfWording.split('\n').map(line=>'> '+line).join('\n')}\n\nPractice:\n\n${q.prompt}\n\nChoices: ${q.options.map((label,i)=>String.fromCharCode(65+i)+'. '+label+(i===q.correct?' [answer]':'')).join(' · ')}\n\n${q.detail?'Correction / clarification: '+q.detail+'\n\n':''}${q.audit.references.map(ref=>'Reference: ['+ref.label+']('+ref.url+')\n\n').join('')}`;}
 }
 fs.writeFileSync(path.join(root,file),report);
}
coverageReport('elective','Elective','audit/TERMS_COVERAGE.md');coverageReport('webdev','WebDev','audit/WEBDEV_TERMS_COVERAGE.md');
console.log(`Built ${questions.length} presentation term questions, ${topics.length} topics, ${sources.length} decks.`);
