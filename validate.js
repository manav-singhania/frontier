// node validate.js [wall-draft.json]  — checks art ids, rel/week ids, banned vocabulary, hot count, photo count
const fs=require('fs');
const file=process.argv[2]||'wall-draft.json';
const w=JSON.parse(fs.readFileSync(file,'utf8'));
const s=fs.readFileSync('index.html','utf8');
const i=s.indexOf('var ART={');const j=s.indexOf('\n};',i);
function rnd(s){return function(){s=(s*9301+49297)%233280;return s/233280}}
function grad(){}
eval(s.slice(i,j+3));
const ids=new Set(w.tiles.map(t=>t.id));
const banned=/\b(lessons?|texts?|textbooks?|practi[cs]e[sd]?|practising|practicing|exercises?|homework|worksheets?|quiz(zes)?|stud(y|ies|ied|ying)|classrooms?|courses?|assignments?|grade)\b/i;
let bad=0, hot=0, big=0, img=0;
for(const t of w.tiles){
  if(!ART[t.art||t.id]){console.log('ART MISSING',t.id,t.art);bad++}
  for(const r of (t.rel||[])) if(!ids.has(r)){console.log('REL MISSING',t.id,r);bad++}
  if(!t.rel||t.rel.length<2||t.rel.length>3){console.log('REL COUNT',t.id);bad++}
  if(t.rel&&t.rel.includes(t.id)){console.log('SELF REL',t.id);bad++}
  const text=[t.lab,t.cap,t.num,t.nums,t.p1,t.p2,t.src,...(t.deep||[]).flat()].join(' ');
  const m=text.match(banned); if(m){console.log('BANNED',t.id,m[0]);bad++}
  if(t.cap.length>90){console.log('CAP LONG',t.id,t.cap.length)}
  if(t.hot)hot++; if(t.big)big++; if(t.img)img++;
  for(const k of ['id','dom','lab','cap','p1','p2','deep','rel','src','art'])if(!(k in t)){console.log('FIELD MISSING',t.id,k);bad++}
}
for(const k of w.week) if(!ids.has(k.id)){console.log('WEEK MISSING',k.id);bad++}
if(hot>4){console.log('TOO MANY HOT',hot);bad++}
if(big!==1){console.log('BIG COUNT',big);bad++}
const lanes={}; for(const t of w.tiles) lanes[t.dom]=(lanes[t.dom]||0)+1;
const india=w.tiles.filter(t=>/^India ·/.test(t.lab)).length;
const phys=w.tiles.filter(t=>/^Physics ·/.test(t.lab)).length;
console.log('tiles',w.tiles.length,'hot',hot,'big',big,'img',img,'india',india,'physics',phys,'lanes',JSON.stringify(lanes));
const spaceish=w.tiles.filter(t=>['space','earth','sg'].includes(t.dom)||/^India/.test(t.lab));
console.log('photo on space/earth/sg/india:',spaceish.filter(t=>t.img).length,'of',spaceish.length);
console.log(bad?('PROBLEMS: '+bad):'OK');
process.exit(bad?1:0);
