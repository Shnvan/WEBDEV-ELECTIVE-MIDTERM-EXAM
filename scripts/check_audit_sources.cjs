// Availability/evidence capture, distinct from the manual answer audit and application tests.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),audit=JSON.parse(fs.readFileSync(path.join(root,'data/audit-decisions.json'),'utf8'));
const out=path.join(root,'audit/source-checks.json');
fs.mkdirSync(path.dirname(out),{recursive:true});
let checks={};if(fs.existsSync(out))checks=JSON.parse(fs.readFileSync(out,'utf8')).checks;
const requested=process.argv.slice(2),entries=Object.entries(audit.sources).filter(([id,s])=>requested.length?requested.includes(id):!checks[id]?.ok||checks[id]?.url!==s.url);
let cursor=0;
async function worker(){while(cursor<entries.length){const [id,s]=entries[cursor++];try{
 const response=await fetch(s.url,{signal:AbortSignal.timeout(25000),headers:{'User-Agent':'StudyRoom-SourceVerification/1.0'}}),html=await response.text();
 const text=html.replace(/<script\b[\s\S]*?<\/script>/gi,' ').replace(/<style\b[\s\S]*?<\/style>/gi,' ').replace(/<[^>]*>/g,' ').replace(/&(nbsp|amp|lt|gt|quot|#39);/g,(_,s)=>({nbsp:' ',amp:'&',lt:'<',gt:'>',quot:'"','#39':"'"}[s])).replace(/\s+/g,' ').trim();
 const at=text.toLowerCase().indexOf(s.term.toLowerCase());
 checks[id]={url:s.url,resolvedUrl:response.url,status:response.status,ok:response.ok&&at>=0,term:s.term,excerpt:at>=0?text.slice(Math.max(0,at-85),at+330):'',sha256:crypto.createHash('sha256').update(html).digest('hex'),checkedAt:new Date().toISOString()};
 console.log(id+' '+response.status+' '+(at>=0?'MATCH ':'NO MATCH ')+(checks[id].excerpt||text.slice(0,100)).slice(0,225));
}catch(e){checks[id]={url:s.url,ok:false,error:e.message,checkedAt:new Date().toISOString()};console.log(id+' FAILED '+e.message)}
 fs.writeFileSync(out,JSON.stringify({note:'HTTP and term checks capture source evidence; manual judgments are recorded separately in audit-decisions.json.',checks},null,2)+'\n');
}}
Promise.all(Array.from({length:6},worker)).then(()=>{const failed=Object.keys(audit.sources).filter(id=>!checks[id]?.ok);console.log(JSON.stringify({checked:Object.keys(checks).length,failed}));if(failed.length)process.exitCode=1;});
