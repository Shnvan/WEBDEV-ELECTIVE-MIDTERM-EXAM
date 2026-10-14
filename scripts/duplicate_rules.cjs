// Formatting whitespace may vary. Never merge paraphrases or shared concepts.
const normalize=s=>String(s??'').normalize('NFKC').replace(/\s+/g,' ').trim();
const answer=(q,decisions)=>q.type==='choice'?q.options[decisions[q.id].correct]:q.answer;
function duplicateKey(q,decisions){
 return JSON.stringify([q.subject,q.type,normalize(q.prompt),normalize(answer(q,decisions)),q.options.map(normalize).sort(),normalize(q.code),q.images]);
}
module.exports={duplicateKey};
