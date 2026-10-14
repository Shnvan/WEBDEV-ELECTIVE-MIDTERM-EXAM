// Explicit static output keeps hosting independent of framework auto-detection.
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),output=path.resolve(root,'public');
assert.equal(path.dirname(output),root);assert.equal(path.basename(output),'public');
cp.execFileSync(process.execPath,[path.join(__dirname,'build_bank.cjs')],{stdio:'inherit'});
fs.mkdirSync(path.join(output,'data'),{recursive:true});
for(const file of ['index.html','styles.css','app.js','art.js','progress.js','data/review-bank.js']){
 fs.copyFileSync(path.join(root,file),path.join(output,file));
 assert(fs.readFileSync(path.join(root,file)).equals(fs.readFileSync(path.join(output,file))),file);
}
fs.cpSync(path.join(root,'assets'),path.join(output,'assets'),{recursive:true});
console.log('Static site built in public/; all application files match source.');
