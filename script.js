const styles = [
  ['bollywood','⭐','Bollywood'], ['hiphop','🧢','Hip Hop'], ['freestyle','⚡','Freestyle'], ['bharatanatyam','🏛️','Bharatanatyam'], ['kathak','💫','Kathak'], ['jazz','🎷','Jazz'], ['contemporary','🌙','Contemporary'], ['salsa','🌶️','Salsa'], ['folk','🥁','Folk Dance'], ['ballet','🩰','Ballet']
];
const ageText = {
  kids:{label:'Kids', years:'4–12', goal:'fun, coordination, confidence, rhythm memory and safe movement', tone:'playful and energetic', img:'kids'},
  teens:{label:'Teens', years:'13–18', goal:'style, stage presence, body language, creativity and fitness', tone:'expressive and performance-focused', img:'teens'},
  adults:{label:'Adults', years:'19+', goal:'stress relief, fitness, flexibility, culture and graceful confidence', tone:'balanced, powerful and elegant', img:'adults'}
};
const content = {
  bollywood:{origin:'Indian cinema and stage performance', loved:'It mixes music, facial expression, drama, and easy high-energy steps.', learn:['Hand gestures','Expressions','Footwork','Stage presence'], lesson:'Start with an 8-count step-touch, add shoulder bounce, then use expressive hands on counts 5–8.', benefit:'Great for confidence, memory, stamina and joyful performance.'},
  hiphop:{origin:'Street dance culture', loved:'It feels cool, modern, athletic and personal.', learn:['Groove','Bounce','Isolation','Musicality'], lesson:'Practice bounce in place, two-step right and left, then add arm hits on the beat.', benefit:'Builds rhythm, strength, coordination and personality.'},
  freestyle:{origin:'Improvised social and stage dancing', loved:'There are no strict rules, so learners can create their own movement.', learn:['Creativity','Flow','Confidence','Transitions'], lesson:'Pick one song, move only with feet for 30 seconds, then add arms and direction changes.', benefit:'Improves creativity, confidence and natural expression.'},
  bharatanatyam:{origin:'Classical dance from Tamil Nadu, India', loved:'It teaches discipline, storytelling, posture and cultural beauty.', learn:['Mudras','Aramandi','Expressions','Storytelling'], lesson:'Begin with namaskaram, basic half-sitting posture, and simple hand mudras.', benefit:'Develops discipline, balance, posture and cultural appreciation.'},
  kathak:{origin:'North Indian classical storytelling dance', loved:'Fast spins, graceful hands and rhythmic footwork make it exciting.', learn:['Tatkar','Chakkars','Grace','Rhythm'], lesson:'Practice slow tatkar: right-left-right-left with clear heel sounds, then clap the rhythm.', benefit:'Sharpens rhythm, grace, balance and focus.'},
  jazz:{origin:'African-American performance and theatre dance', loved:'It is stylish, bright, sharp and stage-friendly.', learn:['Kicks','Turns','Lines','Energy'], lesson:'Practice jazz walks, step-ball-change, and a clean final pose.', benefit:'Builds performance energy, flexibility and clean body lines.'},
  contemporary:{origin:'Modern expressive concert dance', loved:'It lets dancers show emotions through soft, flowing, grounded movement.', learn:['Flow','Floor work','Control','Emotion'], lesson:'Try a reach, contract, release, turn and soft fall sequence slowly with breathing.', benefit:'Improves emotional expression, flexibility and body control.'},
  salsa:{origin:'Latin social dance traditions', loved:'It is social, rhythmic, joyful and great for coordination.', learn:['Timing','Partnering','Hips','Turns'], lesson:'Start with basic forward-and-back salsa step: quick-quick-slow timing.', benefit:'Improves social confidence, rhythm, cardio and coordination.'},
  folk:{origin:'Traditional community dances around the world', loved:'It connects people to festivals, culture, stories and group celebration.', learn:['Group rhythm','Patterns','Culture','Energy'], lesson:'Practice simple circle steps, claps, turns and call-response movements.', benefit:'Builds cultural knowledge, teamwork and joyful stamina.'},
  ballet:{origin:'European classical theatre dance', loved:'It feels graceful, disciplined and elegant.', learn:['Posture','Positions','Balance','Lines'], lesson:'Start with first position, plié, tendu and arm port de bras.', benefit:'Builds posture, flexibility, discipline and elegant control.'}
};
let currentAge='kids', currentStyle='bollywood';
function styleName(key){return styles.find(s=>s[0]===key)?.[2]||key}
function renderMiniTabs(){
  miniTabs.innerHTML = styles.map(([key,icon,name])=>`<button class="mini-tab ${key===currentStyle?'active':''}" data-style="${key}">${icon} ${name}</button>`).join('') + `<div class="mini-tab" style="margin-top:22px;background:rgba(214,169,74,.12);color:#ffd166">📚 Full ${ageText[currentAge].label} Curriculum</div>`;
  document.querySelectorAll('.mini-tab[data-style]').forEach(b=>b.onclick=()=>{currentStyle=b.dataset.style;renderMiniTabs();renderDetail();});
}
function renderDetail(){
  const a=ageText[currentAge], c=content[currentStyle], name=styleName(currentStyle);
  ageDetail.innerHTML = `
  <div class="detail-top">
    <div class="detail-copy">
      <h3>${name} for ${a.label}</h3>
      <div class="badges"><span class="badge">Most loved for ${a.years}</span><span class="badge">${a.tone}</span><span class="badge">Beginner friendly</span></div>
      <p>${name} is one of the popular choices for ${a.label.toLowerCase()} because ${c.loved} For ${a.label.toLowerCase()}, the learning focus is ${a.goal}.</p>
      <p><b>Origin:</b> ${c.origin}. <b>Why it works:</b> ${c.benefit}</p>
    </div>
    <img class="age-image" src="assets/images/${a.img}/${currentStyle}.svg" alt="${name} dance image for ${a.label}">
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
  styleGrid.innerHTML = styles.map(([key,icon,name])=>{const c=content[key];return `<div class="style-card reveal"><img src="assets/images/styles/${key}.svg" alt="${name} dance style image"><h3>${icon} ${name}</h3><p>${c.origin}. ${c.loved}</p><div class="meta"><span>${c.learn[0]}</span><span>${c.learn[1]}</span><span>Beginner path</span></div></div>`}).join('');
}
document.querySelectorAll('.age-tab').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.age-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');currentAge=btn.dataset.age;currentStyle='bollywood';renderMiniTabs();renderDetail();});
renderMiniTabs();renderDetail();renderStyles();
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
