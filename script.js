const styles = [
  ['bollywood','⭐','Bollywood'], ['hiphop','🧢','Hip Hop'], ['freestyle','⚡','Freestyle'], ['bharatanatyam','🏛️','Bharatanatyam'], ['kathak','💫','Kathak'], ['jazz','🎷','Jazz'], ['contemporary','🌙','Contemporary'], ['salsa','🌶️','Salsa'], ['folk','🥁','Folk Dance'], ['ballet','🩰','Ballet']
];

const ageText = {
  kids:{label:'Kids', years:'4–12', goal:'fun, coordination, confidence, rhythm memory and safe movement', tone:'playful and energetic'},
  teens:{label:'Teens', years:'13–18', goal:'style, stage presence, body language, creativity and fitness', tone:'expressive and performance-focused'},
  adults:{label:'Adults', years:'19+', goal:'stress relief, fitness, flexibility, culture and graceful confidence', tone:'balanced, powerful and elegant'}
};

const content = {
  bollywood:{origin:'Indian cinema and stage performance', liked:'It mixes joyful music, facial expressions, drama, and high-energy steps.', whyKids:'Kids love Bollywood because it feels colorful, playful, and easy to copy from songs.', whyTeens:'Teens enjoy Bollywood because it helps them perform confidently, use expressions, and create stage-ready routines.', whyAdults:'Adults like Bollywood because it is energetic, cultural, expressive, and a fun cardio workout.', learn:['Expressions','Hand gestures','Footwork','Stage presence'], lesson:'Start with step-touch for 8 counts, add shoulder bounce, then use expressive hands on counts 5–8.', benefit:'Great for confidence, memory, stamina and joyful performance.'},
  hiphop:{origin:'Street dance culture', liked:'It is modern, athletic, stylish, and full of personality.', whyKids:'Kids love hip-hop because of its cool moves, bounce, and playful energy.', whyTeens:'Teens like hip-hop because it feels current, confident, and perfect for social media or stage performance.', whyAdults:'Adults enjoy hip-hop because it improves fitness, rhythm, and body control while staying fun.', learn:['Groove','Bounce','Isolation','Musicality'], lesson:'Practice bounce in place, two-step right and left, then add arm hits on the beat.', benefit:'Builds rhythm, strength, coordination and personality.'},
  freestyle:{origin:'Improvised social and stage dancing', liked:'It allows dancers to create their own movement without strict rules.', whyKids:'Kids enjoy freestyle because they can move freely and use imagination.', whyTeens:'Teens like freestyle because it helps them build their own identity and dance style.', whyAdults:'Adults enjoy freestyle because it removes pressure and makes movement relaxing.', learn:['Creativity','Flow','Confidence','Transitions'], lesson:'Pick one song, move only with feet for 30 seconds, then add arms and direction changes.', benefit:'Improves creativity, confidence and natural expression.'},
  bharatanatyam:{origin:'Classical dance from Tamil Nadu, India', liked:'It teaches discipline, storytelling, posture, expressions, and cultural beauty.', whyKids:'Kids can learn focus, posture, and respect for culture through simple mudras and rhythm.', whyTeens:'Teens like Bharatanatyam because it builds discipline, grace, and strong stage presence.', whyAdults:'Adults enjoy Bharatanatyam for cultural connection, posture, discipline, and expressive storytelling.', learn:['Mudras','Aramandi','Expressions','Storytelling'], lesson:'Begin with namaskaram, basic half-sitting posture, and simple hand mudras.', benefit:'Develops discipline, balance, posture and cultural appreciation.'},
  kathak:{origin:'North Indian classical storytelling dance', liked:'Fast spins, graceful hands, and rhythmic footwork make it exciting.', whyKids:'Kids enjoy Kathak because the footwork and clapping rhythm feel like a musical game.', whyTeens:'Teens like Kathak because chakkars, tatkar, and expressions look elegant on stage.', whyAdults:'Adults enjoy Kathak because it improves rhythm, grace, balance, and cultural understanding.', learn:['Tatkar','Chakkars','Grace','Rhythm'], lesson:'Practice slow tatkar: right-left-right-left with clear heel sounds, then clap the rhythm.', benefit:'Sharpens rhythm, grace, balance and focus.'},
  jazz:{origin:'African-American performance and theatre dance', liked:'It is sharp, stylish, bright, and stage-friendly.', whyKids:'Kids enjoy jazz because of its energetic kicks, poses, and fun performance quality.', whyTeens:'Teens like jazz because it looks polished, stylish, and strong in stage routines.', whyAdults:'Adults enjoy jazz because it improves flexibility, coordination, and performance energy.', learn:['Kicks','Turns','Lines','Energy'], lesson:'Practice jazz walks, step-ball-change, and a clean final pose.', benefit:'Builds performance energy, flexibility and clean body lines.'},
  contemporary:{origin:'Modern expressive concert dance', liked:'It uses soft, flowing, emotional, and grounded movement.', whyKids:'Kids can use contemporary dance to express feelings through simple shapes and movement.', whyTeens:'Teens like contemporary because it feels emotional, artistic, and meaningful.', whyAdults:'Adults enjoy contemporary because it supports flexibility, emotional release, and body awareness.', learn:['Flow','Floor work','Control','Emotion'], lesson:'Try a reach, contract, release, turn and soft fall sequence slowly with breathing.', benefit:'Improves emotional expression, flexibility and body control.'},
  salsa:{origin:'Latin social dance traditions', liked:'It is joyful, rhythmic, social, and great for coordination.', whyKids:'Kids can enjoy salsa through simple rhythm games, claps, and basic steps.', whyTeens:'Teens like salsa because it improves timing, confidence, and social dance awareness.', whyAdults:'Adults enjoy salsa because it is social, fun, and excellent for cardio fitness.', learn:['Timing','Partnering','Hips','Turns'], lesson:'Start with basic forward-and-back salsa step: quick-quick-slow timing.', benefit:'Improves social confidence, rhythm, cardio and coordination.'},
  folk:{origin:'Traditional community dances around the world', liked:'It connects people to festivals, culture, stories, and group celebration.', whyKids:'Kids love folk dance because it often includes claps, circles, costumes, and group fun.', whyTeens:'Teens enjoy folk dance because it brings cultural pride and group performance energy.', whyAdults:'Adults like folk dance because it connects them with tradition, community, and celebration.', learn:['Group rhythm','Patterns','Culture','Energy'], lesson:'Practice simple circle steps, claps, turns and call-response movements.', benefit:'Builds cultural knowledge, teamwork and joyful stamina.'},
  ballet:{origin:'European classical theatre dance', liked:'It feels graceful, disciplined, elegant, and controlled.', whyKids:'Kids enjoy ballet because it teaches balance, posture, and graceful movement from the basics.', whyTeens:'Teens like ballet because it improves lines, discipline, flexibility, and stage control.', whyAdults:'Adults enjoy ballet because it improves posture, strength, flexibility, and calm focus.', learn:['Posture','Positions','Balance','Lines'], lesson:'Start with first position, plié, tendu and arm port de bras.', benefit:'Builds posture, flexibility, discipline and elegant control.'}
};

let currentAge='kids', currentStyle='bollywood';
const miniTabs = document.getElementById('miniTabs');
const ageDetail = document.getElementById('ageDetail');
const styleGrid = document.getElementById('styleGrid');

function styleName(key){return styles.find(s=>s[0]===key)?.[2]||key}
function ageReason(c,a){ return a.label === 'Kids' ? c.whyKids : a.label === 'Teens' ? c.whyTeens : c.whyAdults; }

function renderMiniTabs(){
  miniTabs.innerHTML = styles.map(([key,icon,name])=>`<button class="mini-tab ${key===currentStyle?'active':''}" data-style="${key}">${icon} ${name}</button>`).join('') + `<div class="curriculum-card"><b>📚 Full ${ageText[currentAge].label} Curriculum</b><span>Choose any dance style above to update this learning panel.</span></div>`;
  document.querySelectorAll('.mini-tab[data-style]').forEach(b=>b.onclick=()=>{currentStyle=b.dataset.style;renderMiniTabs();renderDetail();});
}

function renderDetail(){
  const a=ageText[currentAge], c=content[currentStyle], name=styleName(currentStyle);
  ageDetail.innerHTML = `
  <div class="detail-copy detail-copy-wide">
    <p class="eyebrow">${a.label} popular dance tab</p>
    <h3>${name} for ${a.label}</h3>
    <div class="badges"><span class="badge">Most loved for ${a.years}</span><span class="badge">${a.tone}</span><span class="badge">Beginner friendly</span></div>
    <p class="detail-lead">${ageReason(c,a)}</p>
    <p>${name} is popular because ${c.liked} For ${a.label.toLowerCase()}, the learning focus is ${a.goal}.</p>
    <p><b>Origin:</b> ${c.origin}. <b>Why it works:</b> ${c.benefit}</p>
  </div>
  <div class="info-grid">${c.learn.map(x=>`<div class="info-box"><b>${x}</b><br><span>Core skill for ${a.label.toLowerCase()}</span></div>`).join('')}</div>
  <div class="lesson-strip">
    <div class="mini-lesson"><b>Beginner Lesson</b><p>${c.lesson}</p></div>
    <div class="mini-lesson"><b>Practice Time</b><p>15–25 minutes, 3 times per week. Start slow, then repeat with music.</p></div>
    <div class="mini-lesson"><b>Performance Tip</b><p>Keep eyes lifted, finish every count, and hold your final pose for two beats.</p></div>
    <div class="mini-lesson"><b>Safety Tip</b><p>Warm up first, wear comfortable clothes, drink water, and avoid forcing flexibility.</p></div>
  </div>`;
}

function renderStyles(){
  styleGrid.innerHTML = styles.map(([key,icon,name])=>{const c=content[key];return `<div class="style-card reveal no-image-card"><div class="style-icon">${icon}</div><h3>${name}</h3><p>${c.origin}. ${c.liked}</p><div class="meta"><span>${c.learn[0]}</span><span>${c.learn[1]}</span><span>Beginner path</span></div></div>`}).join('');
}

document.querySelectorAll('.age-tab').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.age-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');currentAge=btn.dataset.age;currentStyle='bollywood';renderMiniTabs();renderDetail();});
renderMiniTabs();renderDetail();renderStyles();
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
