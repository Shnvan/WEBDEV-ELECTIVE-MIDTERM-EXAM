(function (target) {
  'use strict';
  const normalize = value => String(value ?? '').normalize('NFKC').toLowerCase().replace(/[\u2018\u2019]/g,"'").replace(/\s+/g,' ').trim();
  const fresh = bank => ({version:2,bankVersion:bank.version,answers:{},positions:{},reading:{}});
  const validText = value => typeof value==='string' && value.length <= 15000;
  function restore(raw, bank) {
    const state=fresh(bank),questions=new Map(bank.questions.map(q=>[q.id,q]));
    const summary={kept:0,reopened:0,conflicts:0,ignored:0};
    if(!raw)return {state,migrated:false,summary,notice:''};
    let before;
    try {before=JSON.parse(raw);if(!before||![1,2].includes(before.version)||!before.answers||typeof before.answers!=='object'||Array.isArray(before.answers))throw Error();}
    catch(e){return {state,migrated:false,summary,notice:'Saved progress could not be read. You can still practice.',invalid:true};}
    const groups=new Map();
    for(const [id,entry] of Object.entries(before.answers)) {
      const alias=bank.aliases[id],q=questions.get(alias?.canonical||id);
      if(!q||!entry||typeof entry.checked!=='boolean'){summary.ignored++;continue;}
      let value,bad=false,previousValue;
      if(before.version===1 && q.type==='choice') {
        if(!alias||!Number.isInteger(entry.value)||entry.value<0||entry.value>=alias.options.length){summary.ignored++;continue;}
        previousValue=alias.options[entry.value];
        const mapped=alias.optionMap[entry.value];
        value=mapped===null?'':q.options[mapped];
        bad=mapped===null||alias.keyChanged;
      } else {
        if(!validText(entry.value)){summary.ignored++;continue;}
        value=entry.value;
        // Only explicitly reviewed PPT versions with the same expected answer
        // may keep a checked response across wording/distractor changes.
        const history=q.material==='terms'?(q.previousVersions||[]).filter(v=>normalize(v.answer)===normalize(q.answer)):[];
        const compatible=history.find(v=>v.signature===entry.signature);
        if(q.type==='choice'){
          const matched=q.options.find(option=>normalize(option)===normalize(value));
          const historic=entry.checked&&(compatible||entry.signature===q.signature)&&history.some(v=>v.options.some(option=>normalize(option)===normalize(value)));
          previousValue=value||(validText(entry.previousValue)?entry.previousValue:'');value=matched||(historic?value:'');bad=!matched&&!historic;
        }
        if(before.version===2 && entry.signature!==q.signature&&!compatible)bad=true;
      }
      if(!q.practice&&entry.checked)bad=true;
      const candidate={id,value,checked:entry.checked,bad,previousValue,signature:q.signature};
      if(!groups.has(q.id))groups.set(q.id,[]);groups.get(q.id).push(candidate);
    }
    for(const [id,list] of groups) {
      const chosen=list.find(x=>x.id===id)||list[0];
      const conflict=new Set(list.filter(x=>x.value!=='').map(x=>normalize(x.value))).size>1;
      const bad=conflict||list.some(x=>x.bad);
      const checked=!bad&&list.some(x=>x.checked);
      state.answers[id]={value:chosen.value,checked,signature:chosen.signature};
      if(bad&&chosen.previousValue)state.answers[id].previousValue=chosen.previousValue;
      if(list.some(x=>x.checked)&&!checked)summary.reopened++;else summary.kept++;
      if(conflict)summary.conflicts++;
    }
    const canonical=id=>bank.aliases[id]?.canonical||id;
    const allowed=(q,key)=>{
      const [subject,scope,topic]=key.split(':');
      return q&&q.subject===subject&&['all','34'].includes(scope)&&(scope==='all'||q.sections.includes('3-4'))&&(topic==='all'||q.topic===topic);
    };
    if(before.version===2){
      for(const [key,id] of Object.entries(before.positions||{})){
        const mapped=canonical(id),q=questions.get(mapped);if(q?.practice&&allowed(q,key))state.positions[key]=mapped;
      }
      for(const [key,position] of Object.entries(before.reading||{})){
        if(!position||typeof position.id!=='string'||!Number.isFinite(position.offset)||position.offset<0||position.offset>100000)continue;
        const mapped=canonical(position.id);if(allowed(questions.get(mapped),key))state.reading[key]={id:mapped,offset:position.offset};
      }
    }else{
      const positions=Object.entries(before.positions||{}).filter(([,n])=>Number.isInteger(n)&&n>=0);
      positions.sort(([a,x],[b,y])=>Number(b.split(':')[2]==='all')-Number(a.split(':')[2]==='all')||y-x);
      for(const [oldKey,index] of positions){
        const [subject,scope,source,...groupParts]=oldKey.split(':'),group=groupParts.join(':')||'all';
        if(!['webdev','elective'].includes(subject)||!['all','34'].includes(scope))continue;
        const sets=bank.legacySets.filter(s=>s.subject===subject&&(scope==='all'||s.section==='3-4')&&(source==='all'||s.id===source));
        let ids=sets.flatMap(s=>s.ids);
        if(group!=='all'){const [groupSource,groupNumber]=group.split(':');ids=sets.filter(s=>s.id===groupSource).flatMap(s=>s.groups[groupNumber]||[]);}
        if(!ids.length)continue;
        const mapped=canonical(ids[Math.min(index,ids.length-1)]),q=questions.get(mapped);
        if(!q?.practice)continue;
        const key=[subject,scope,'all'].join(':');if(!state.positions[key])state.positions[key]=mapped;
        const topicKey=[subject,scope,q.topic].join(':');if(!state.positions[topicKey])state.positions[topicKey]=mapped;
      }
    }
    const migrated=before.version!==2||before.bankVersion!==bank.version;
    const notice=migrated?`Study progress updated. ${summary.kept} compatible response${summary.kept===1?'':'s'} kept.${summary.reopened?' '+summary.reopened+' response'+(summary.reopened===1?'':'s')+' reopened after answer review or merging.':''}`:'';
    return {state,migrated,summary,notice};
  }
  target.StudyProgress={restore,fresh,normalize};
})(typeof window==='undefined'?globalThis:window);
