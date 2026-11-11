const URL='https://orhbhziivlnvhlnuriyc.supabase.co';
const KEY='sb_publishable_ofXSZGI_9J3Lkbnhw15X-g_6YWFp6sI';
const fallbackNotes=[
{section:'핵심 개념',title:'인권이란?',body:'인간이라면 누구나 태어날 때부터 가지는 기본적인 권리예요. 사람답게 살기 위해 필요한 권리이며, 성별·장애·출신·종교 등에 따라 차별받지 않고 누려야 해요.',example:'모든 학생은 안전하게 배우고, 자신의 의견을 존중받을 권리가 있어요.'},
{section:'핵심 개념',title:'인권의 특징',body:'인권은 보편성(모든 사람이 누림), 천부성(태어날 때부터 가짐), 불가침성(함부로 침해할 수 없음), 항구성(시대와 장소를 넘어 지켜야 함)의 성격을 가져요.',example:'누군가의 인권을 다수의 편의만으로 함부로 빼앗을 수 없어요.'},
{section:'헌법과 기본권',title:'기본권이란?',body:'기본권은 인권을 헌법에 담아 국가가 보장하도록 한 권리예요. 대한민국 헌법은 인간의 존엄과 가치, 행복 추구권을 바탕으로 여러 기본권을 보장해요.',example:'헌법 제10조는 인간의 존엄과 가치, 행복 추구권을 밝히고 있어요.'},
{section:'헌법과 기본권',title:'평등권',body:'합리적인 이유 없이 차별받지 않고 법 앞에 평등하게 대우받을 권리예요. 모든 사람을 언제나 똑같이 대하는 것과는 달라요.',example:'장애 학생에게 필요한 편의 시설을 마련하면 실질적인 평등을 도울 수 있어요.'},
{section:'헌법과 기본권',title:'자유권',body:'국가의 부당한 간섭을 받지 않고 자유롭게 생활할 권리예요. 신체·사생활·종교·표현의 자유 등이 있어요.',example:'헌법 제21조는 언론·출판·집회·결사의 자유를 보장해요.'},
{section:'헌법과 기본권',title:'사회권',body:'인간다운 생활을 위해 국가에 필요한 제도와 지원을 요구할 수 있는 권리예요. 교육·근로·사회 보장 등이 있어요.',example:'헌법 제31조는 능력에 따라 균등하게 교육받을 권리를 보장해요.'},
{section:'헌법과 기본권',title:'참정권',body:'국가의 의사 결정에 참여할 수 있는 권리예요. 선거권, 공무 담임권, 국민 투표권 등이 포함돼요.',example:'선거에서 대표자를 뽑는 것은 참정권을 행사하는 일이에요.'},
{section:'헌법과 기본권',title:'청구권',body:'기본권이 침해되었을 때 국가에 그 구제를 요구할 수 있는 권리예요. 청원권, 재판 청구권, 국가 배상 청구권 등이 있어요.',example:'부당한 처분을 받았을 때 법원에 재판을 청구할 수 있어요.'},
{section:'권리와 책임',title:'기본권의 제한과 책임',body:'기본권도 무제한으로 행사할 수는 없어요. 헌법 제37조 제2항에 따라 필요한 경우 법률로 제한할 수 있지만, 본질적인 내용은 침해할 수 없어요. 다른 사람의 권리와 공동체의 안전도 존중해야 해요.',example:'표현의 자유를 주장하더라도 다른 사람을 괴롭히거나 명예를 훼손할 수는 없어요.'}
];
const fallbackGame=[
['권리 찾기','학교가 종교를 이유로 학생을 차별하지 않도록 요구할 때 가장 관련 있는 기본권은?',['평등권','사회권','참정권','청구권'],0,'종교를 이유로 부당하게 차별받지 않을 권리이므로 평등권과 관련 있어요.'],
['권리 찾기','학생이 학교 신문에 자신의 의견을 표현하려고 해요. 어떤 기본권과 관련 있을까요?',['사회권','자유권','참정권','청구권'],1,'자신의 생각을 말과 글로 표현하는 표현의 자유는 자유권에 해당해요.'],
['권리 찾기','모든 학생이 교육받도록 국가에 제도와 지원을 요구해요. 어떤 기본권일까요?',['참정권','평등권','사회권','자유권'],2,'교육을 받을 권리는 국가의 제도적 보장을 요구하는 사회권이에요.'],
['권리 찾기','성인이 되어 투표에 참여해 대표자를 뽑아요. 어떤 기본권을 행사한 것일까요?',['청구권','자유권','사회권','참정권'],3,'선거에 참여해 국가의 의사 결정에 참여하는 권리는 참정권이에요.'],
['권리 찾기','공공기관의 위법한 처분으로 피해를 입어 법원에 재판을 요청해요. 관련 기본권은?',['평등권','청구권','참정권','사회권'],1,'침해된 권리를 구제받기 위해 재판을 청구하는 것은 청구권의 한 종류예요.'],
['상황 판단','표현의 자유가 있으니 온라인에서 친구를 괴롭히는 글도 언제나 허용해야 한다.',['맞아요. 표현의 자유는 제한이 없어요','아니에요. 타인의 권리도 존중해야 해요','온라인에는 기본권이 적용되지 않아요','학생에게는 표현의 자유가 없어요'],1,'표현의 자유는 중요하지만 다른 사람의 인격과 권리를 침해할 수는 없어요.'],
['상황 판단','공공의 이익을 위해서라면 국가는 기본권을 어떤 경우에도 제한할 수 있다.',['맞아요. 공익이면 언제나 가능해요','법률에 따르고 본질적 내용은 침해할 수 없어요','다수의 의견이 항상 우선해요','기본권은 어떤 경우에도 제한할 수 없어요'],1,'헌법 제37조 제2항은 필요한 경우 법률로 제한할 수 있다고 하면서도 기본권의 본질적인 내용은 침해할 수 없다고 정해요.'],
['상황 판단','장애 학생을 위한 이동 편의 시설은 평등을 위한 지원이 될 수 있다.',['맞아요. 필요한 지원은 실질적 평등을 도와요','모두에게 똑같은 조건만 평등해요','편의 시설은 기본권과 관계없어요','시험 점수를 높여야 평등해요'],0,'필요한 지원을 통해 동등하게 참여하도록 하는 것도 실질적 평등을 위한 방법이에요.'],
['권리 찾기','인간의 권리를 헌법에 담아 국가가 보장하도록 한 권리를 무엇이라 할까요?',['관습','기본권','의무','법률'],1,'기본권은 인간의 권리를 헌법에 담아 국가가 보장하도록 한 권리예요.'],
['상황 판단','인권은 누구나 누리는 권리이므로 출신이나 성별에 따라 차별해서는 안 된다.',['맞아요. 인권은 모든 사람에게 보장돼요','인권은 성인에게만 있어요','법을 잘 지킨 사람만 인권을 가져요','같은 지역 사람에게만 해당해요'],0,'인권의 보편성은 모든 사람이 인권의 주체라는 뜻이에요.']
];
let notes=[],questions=[],group='핵심 개념',mode='solo',round=0,order=[],score=0,teamScore=[0,0],answered=false,timer=null,time=60,useTimer=false,toastTimer;
const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
async function get(table,select){const res=await fetch(`${URL}/rest/v1/${table}?select=${select}&order=sort_order.asc`,{headers:{apikey:KEY,Authorization:`Bearer ${KEY}`}});if(!res.ok)throw Error();return res.json()}
async function init(){try{[notes,questions]=await Promise.all([get('human_rights_notes','section,title,body,example'),get('human_rights_game','game_type,prompt,choices,answer_index,explanation')]);if(!notes.length)notes=fallbackNotes;if(!questions.length)questions=fromFallback()}catch{notes=fallbackNotes;questions=fromFallback();notify('Supabase 연결을 확인할 수 없어 예비 학습 자료를 표시합니다.')}renderNotes();welcome()}
function fromFallback(){return fallbackGame.map(([game_type,prompt,choices,answer_index,explanation])=>({game_type,prompt,choices,answer_index,explanation}))}
const icons=['✦','◎','▤','＝','↗','⌂','◉','§','☝'];
function renderNotes(){let list=notes.filter(n=>n.section===group);$('#concept-cards').innerHTML=list.map(n=>`<article class="concept-card"><div class="concept-head"><span class="concept-icon">${icons[notes.indexOf(n)%icons.length]}</span><h3>${esc(n.title)}</h3><span class="plus">＋</span></div><p>${esc(n.body)}</p><div class="example"><b>생활 속 예시</b> · ${esc(n.example)}</div></article>`).join('');document.querySelectorAll('.concept-card').forEach(c=>c.addEventListener('click',()=>{c.classList.toggle('open');c.querySelector('.plus').textContent=c.classList.contains('open')?'−':'＋'}))}
function setGroup(value){group=value;document.querySelectorAll('[data-group]').forEach(b=>b.classList.toggle('active',b.dataset.group===group));renderNotes()}
document.querySelectorAll('[data-group]').forEach(b=>b.addEventListener('click',()=>setGroup(b.dataset.group)));
document.querySelectorAll('.mode').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;document.querySelectorAll('.mode').forEach(x=>x.classList.toggle('selected',x===b));$('#team-settings').classList.toggle('hidden',mode!=='teams')}));
function welcome(){$('#board').innerHTML='<div class="welcome-game"><div class="detective">?<b>권리<br>탐정</b></div><div><span class="eyebrow">READY, DETECTIVE?</span><h3>상황 속 권리를<br>찾아볼까요?</h3><p>게임 설정을 고르고 시작 버튼을 눌러주세요.<br>정답과 해설을 함께 확인할 수 있어요.</p></div></div>'}
$('#start-game').addEventListener('click',startGame);$('#timer-check').addEventListener('change',e=>useTimer=e.target.checked);
function startGame(){clearInterval(timer);time=60;round=0;score=0;teamScore=[0,0];order=questions.map((_,i)=>i).sort(()=>Math.random()-.5);if(useTimer)timer=setInterval(tick,1000);showQuestion()}
function tick(){time--;let el=$('#timer');if(el)el.textContent=`⏱ ${time}초`;if(time<=0){clearInterval(timer);showResult(true)}}
function showQuestion(){if(round>=order.length){clearInterval(timer);showResult(false);return}answered=false;let q=questions[order[round]],a=esc($('#team-a').value||'1모둠'),b=esc($('#team-b').value||'2모둠'),team=round%2;$('#board').innerHTML=`<div class="q-top"><div class="q-progress"><i style="width:${round/order.length*100}%"></i></div><span>${round+1} / ${order.length}</span>${useTimer?`<span id="timer">⏱ ${time}초</span>`:''}</div>${mode==='teams'?`<div class="turn">♟ 이번 차례: <b>${team===0?a:b}</b> · 모둠끼리 상의해 답을 골라요</div>`:''}<div class="q-type">${esc(q.game_type)} · 권리 탐정 미션</div><h3 class="question">${esc(q.prompt)}</h3><div class="answers">${q.choices.map((c,i)=>`<button class="answer" data-answer="${i}"><span class="letter">${['ㄱ','ㄴ','ㄷ','ㄹ'][i]}</span>${esc(c)}</button>`).join('')}</div><div id="feedback"></div><div class="q-bottom"><span class="score" id="score">${scoreLabel()}</span><button class="next" id="next" disabled>${round===order.length-1?'결과 보기':'다음 문제'} →</button></div>`;$('#board .answers').addEventListener('click',choose);$('#next').addEventListener('click',()=>{round++;showQuestion()})}
function scoreLabel(){return mode==='teams'?`${esc($('#team-a').value||'1모둠')} ${teamScore[0]}점　·　${esc($('#team-b').value||'2모둠')} ${teamScore[1]}점`:`내 점수 ${score}점`}
function choose(e){let btn=e.target.closest('[data-answer]');if(!btn||answered)return;answered=true;let q=questions[order[round]],choice=Number(btn.dataset.answer),ok=choice===Number(q.answer_index),team=round%2;if(ok){if(mode==='teams')teamScore[team]+=10;else score+=10}document.querySelectorAll('.answer').forEach((x,i)=>{x.disabled=true;if(i===Number(q.answer_index))x.classList.add('correct');else if(i===choice)x.classList.add('wrong')});$('#feedback').innerHTML=`<div class="feedback"><b>${ok?'정답이에요! ✦':'해설을 확인해 봐요.'}</b><br>${esc(q.explanation)}</div>`;$('#score').textContent=scoreLabel();$('#next').disabled=false}
function showResult(timeout){clearInterval(timer);let a=esc($('#team-a').value||'1모둠'),b=esc($('#team-b').value||'2모둠'),title=mode==='teams'?(teamScore[0]===teamScore[1]?'비겼어요!':`${teamScore[0]>teamScore[1]?a:b} 승리!`):'도전 완료!';$('#board').innerHTML=`<div class="result"><div class="eyebrow">MISSION COMPLETE</div><h3>${timeout?'시간 종료!':title}</h3>${mode==='teams'?`<p>${a}　<b>${teamScore[0]}점</b>　 ·　${b}　<b>${teamScore[1]}점</b></p>`:`<p>획득 점수</p><div class="result-score">${score}점</div>`}<p>정답 하나당 10점이에요.</p><button class="again" id="again">한 번 더 하기 ↻</button></div>`;$('#again').addEventListener('click',startGame)}
function notify(message){let el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2800)}
init();
