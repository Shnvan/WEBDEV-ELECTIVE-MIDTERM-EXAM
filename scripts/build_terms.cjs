// Curated definitions + supplied outline -> a separate presentation review bank.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const outline=JSON.parse(read('data/terms-outline.json')),metadata=JSON.parse(read('data/terms-sources.json'));
const labels={audio:'Group 3 · Audio Classification',images:'Group 5 · Image Classification',datasets:'Group 1 · Datasets & ML Workflow'};
const sources=metadata.map(s=>({...s,label:labels[s.id],section:'3-4',sectionBasis:'Matches the reported BSIT 3-4 groups supplied for this reviewer.'}));
const definitions=new Map();
for(const line of read('data/terms-definitions.txt').split(/\r?\n/)){
 if(!line.trim()||line.startsWith('#'))continue;
 const [id,pageText,definition,note='']=line.split('|');assert(id&&pageText&&definition&&!definitions.has(id),line);
 const pages=pageText.split(',').flatMap(part=>{const [a,b]=part.split('-').map(Number);return Array.from({length:(b||a)-a+1},(_,i)=>a+i);});
 definitions.set(id,{definition,note,pages});
}
assert.equal(outline.terms.length,230);assert.equal(definitions.size,outline.terms.length);
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
// Distractors come from unrelated topics, avoiding duplicate labels and obvious synonyms.
const tokens=s=>new Set(norm(s).split(' ').map(w=>({datasets:'data',dataset:'data',training:'train',trained:'train',classification:'classify',classifications:'classify',audio:'sound',speech:'sound',music:'sound',cnn:'neural',relu:'neural',convolutional:'neural',architectures:'architecture',layers:'layer',eda:'exploration'}[w]||w)).filter(w=>!['and','of','the','in','a','to','for','vs','types','steps','process','how','learning'].includes(w)));
const topics=outline.topics.map(t=>({...t,title:t.title,group:labels[t.sourceId]}));
const refs={
 relu:{label:'Keras: ReLU',url:'https://keras.io/api/layers/activation_layers/relu/'},
 mfcc:{label:'librosa: MFCCs',url:'https://librosa.org/doc/0.11.0/generated/librosa.feature.mfcc.html'},
 scaling:{label:'scikit-learn: preprocessing',url:'https://scikit-learn.org/stable/modules/preprocessing.html'},
 metrics:{label:'scikit-learn: model evaluation',url:'https://scikit-learn.org/stable/modules/model_evaluation.html'},
 box:{label:'Matplotlib: box plots',url:'https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.boxplot.html'},
 correlation:{label:'SciPy: Pearson correlation',url:'https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.pearsonr.html'}
};
const extraRefs={'ppt-audio-008':['relu'],'ppt-audio-030':['mfcc'],'ppt-datasets-051':['scaling'],'ppt-datasets-052':['scaling'],'ppt-datasets-054':['scaling'],'ppt-datasets-055':['scaling'],'ppt-datasets-067':['box'],'ppt-datasets-069':['correlation'],'ppt-datasets-093':['metrics'],'ppt-images-072':['metrics'],'ppt-images-073':['metrics'],'ppt-images-074':['metrics'],'ppt-images-075':['metrics']};
const questions=outline.terms.map((term,index)=>{
 const d=definitions.get(term.id),source=sources.find(s=>s.id===term.sourceId),topic=topics.find(t=>t.id===term.topicId);assert(d&&source&&topic,term.id);
 assert(d.pages.length&&d.pages.every(p=>Number.isInteger(p)&&p>=1&&p<=source.pages),term.id);
 const words=tokens(term.term),pool=outline.terms.filter(t=>t.topicId!==term.topicId&&norm(t.term)!==norm(term.term)&&![...tokens(t.term)].some(w=>words.has(w)));
 const distractors=[];for(let n=0;n<pool.length&&distractors.length<3;n++){const candidate=pool[(index*17+n*23)%pool.length];if(!distractors.includes(candidate.term))distractors.push(candidate.term);}
 assert.equal(distractors.length,3,term.id);const correct=parseInt(crypto.createHash('sha256').update(term.id).digest('hex').slice(0,2),16)%4,options=[...distractors];options.splice(correct,0,term.term);assert.equal(new Set(options.map(norm)).size,4);
 const q={id:term.id,subject:'elective',material:'terms',term:term.term,definition:d.definition,detail:d.note,topic:topic.id,section:'3-4',sections:['3-4'],type:'choice',prompt:`In ${topic.title} (${source.label.split(' · ')[0]}), which term matches this description?\n\n${d.definition}`,options,correct,answer:term.term,images:[],code:'',imageAlt:'',number:String(index+1),practice:true,scored:true,scoringBasis:'presentation',aliases:[term.id],sources:[{id:term.id,sourceId:source.id,section:'3-4',label:source.label,filename:source.filename,group:topic.title,number:String(index+1),page:d.pages[0],pages:d.pages}],outlinePages:term.pages,audit:{status:'presentation-based',note:d.definition+(d.note?' '+d.note:''),references:(extraRefs[term.id]||[]).map(r=>refs[r])}};
 q.signature=crypto.createHash('sha256').update(JSON.stringify([q.prompt,q.options,q.correct,q.answer,q.type,q.audit.status])).digest('hex').slice(0,16);return q;
});
const aliases=Object.fromEntries(questions.map(q=>[q.id,{canonical:q.id,subject:q.subject,section:q.section,topic:q.topic,type:q.type,keyChanged:false,options:q.options,optionMap:q.options.map((_,i)=>i)}]));
const bank={version:'terms-v1-'+crypto.createHash('sha256').update(JSON.stringify(questions)).digest('hex').slice(0,12),reviewedOn:'2026-10-14',rawCount:questions.length,sources,topics:{elective:topics},questions,aliases,legacySets:[],coverageNote:'The three supplied presentations match the BSIT 3-4 reported groups. All sections currently uses these available decks too; other sections’ presentations have not been supplied.'};
fs.writeFileSync(path.join(root,'data/terms-bank.js'),'window.TERMS_BANK = '+JSON.stringify(bank,null,2)+';\n');
let report=`# Elective PPT term coverage\n\n${questions.length} entries from the supplied main-term list, across ${topics.length} topics and ${sources.length} PDFs. Every entry has a curated definition and one identification question; repeated names remain in their original topic contexts. Practice progress is independent of the quiz compilations. The content paraphrases the supplied slides, with clarification notes where wording is incomplete or misleading.\n\n${bank.coverageNote}\n\n`;
for(const source of sources){report+=`## ${source.label}\n\n${source.filename} · ${source.pages} pages · SHA-256 ${source.sha256}\n\n`;
 for(const topic of topics.filter(t=>t.sourceId===source.id)){report+=`### ${topic.title}\n\n| Term | Verified PDF pages | Definition | Note |\n|---|---|---|---|\n`;for(const q of questions.filter(q=>q.topic===topic.id))report+=`| ${q.term} | ${q.sources[0].pages.join(', ')} | ${q.definition} | ${q.detail} |\n`;report+='\n';}
}
fs.writeFileSync(path.join(root,'audit/TERMS_COVERAGE.md'),report);
console.log(`Built ${questions.length} presentation term questions, ${topics.length} topics, ${sources.length} decks.`);
