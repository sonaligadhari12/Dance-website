const styles=[
['Bollywood','India','High energy storytelling','assets/images/bollywood.svg','Expressions, footwork, hand movement and musical drama.'],
['Hip-Hop','USA','Groove and confidence','assets/images/hiphop.svg','Bounce, groove, isolation, freestyle and stage attitude.'],
['Kathak','North India','Rhythm and spins','assets/images/classical.svg','Tatkar footwork, chakkars, mudras and graceful storytelling.'],
['Bharatanatyam','South India','Discipline and expression','assets/images/classical.svg','Aramandi posture, adavus, mudras and precise expressions.'],
['Ballet','Europe','Balance and elegance','assets/images/ballet.svg','Alignment, turnout, plié, tendu and graceful control.'],
['Salsa','Caribbean/Latin','Partner rhythm','assets/images/salsa.svg','Basic steps, timing, turns, musical connection and flow.'],
['Contemporary','Global','Emotion and flow','assets/images/contemporary.svg','Floor work, release, breath, lines and expressive transitions.'],
['Jazz','USA','Performance energy','assets/images/jazz.svg','Sharp lines, kicks, turns, stage presence and musicality.'],
['Folk Dance','Global cultures','Community and tradition','assets/images/folk.svg','Regional steps, group formations, rhythm and cultural celebration.'],
['Freestyle','Global','Personal expression','assets/images/freestyle.svg','Create your own movement using rhythm, levels, shapes and emotion.'],
['Zumba / Fitness','Latin fitness','Cardio and joy','assets/images/zumba.svg','Simple repeatable steps for stamina, coordination and energy.'],
['Dance Foundations','Universal','Beginner basics','assets/images/foundations.svg','Posture, counting, warm-up, rhythm, balance and practice routine.']
];
const paths={
 kids:{img:'assets/images/kids.svg',title:'Kids Dance Path',copy:'A playful learning path focused on rhythm games, coordination, imagination and safe movement.',list:['Clap-and-step rhythm games','Animal walks and creative movement','Simple Bollywood and folk routines','Balance, jumps and turns with safety','Confidence through mini performances']},
 teens:{img:'assets/images/teens.svg',title:'Teens Dance Path',copy:'A confidence-building path for style, performance, body language and musical expression.',list:['Hip-hop groove and isolation','Bollywood performance expressions','Freestyle confidence drills','Stage presence and formations','Short choreography challenges']},
 adults:{img:'assets/images/adults.svg',title:'Adults Dance Path',copy:'A practical path for fitness, flexibility, stress relief and cultural connection.',list:['Low-impact warmups','Bollywood and salsa basics','Posture and mobility drills','Fitness dance routines','Relaxing expressive movement']}
};
const lessons=[
['Kids','Dance Foundations','Clap, Count & Step','Build rhythm using 4-count and 8-count patterns.',['Clap 1-2-3-4 slowly','Step right-left-right-left','Add a freeze on count 8','Repeat with music at low volume'],'10 min','Keep jumps small and knees soft.'],
['Kids','Bollywood','Happy Hands Bollywood','Learn simple hand shapes and facial expression.',['Stand tall with open chest','Practice wrist circles','Add side steps','Smile and show expression on every 8th count'],'12 min','Avoid forcing wrists.'],
['Kids','Folk Dance','Circle Folk Steps','Practice group-style movement alone or with family.',['Make a small circle path','Step-touch around the circle','Clap on counts 4 and 8','Change direction after four rounds'],'12 min','Keep enough space around you.'],
['Kids','Freestyle','Animal Movement Dance','Use imagination to create movement.',['Move like a peacock for 8 counts','Move like a tiger for 8 counts','Freeze like a statue','Create your own animal sequence'],'8 min','Avoid slippery floors.'],
['Kids','Ballet','Balance Like a Star','Improve posture and balance.',['Stand in first position comfortably','Lift arms gently','Rise to toes slowly','Hold for three seconds and come down'],'10 min','Use a wall for support.'],
['Kids','Zumba / Fitness','Energy Dance Warmup','A fun cardio warmup.',['March in place','Step side to side','Add shoulder rolls','Finish with deep breathing'],'9 min','Drink water after practice.'],
['Teens','Hip-Hop','Bounce & Groove Basics','Learn the foundation of hip-hop movement.',['Bend knees slightly','Bounce down on the beat','Add side steps','Add shoulder groove','Freestyle for 16 counts'],'15 min','Do not lock the knees.'],
['Teens','Bollywood','Performance Expression Drill','Add drama and confidence to movement.',['Choose happy, surprise and confidence expressions','Practice each for 8 counts','Add hand gestures','Combine with walking steps'],'14 min','Relax your face between rounds.'],
['Teens','Kathak','Tatkar Starter','Begin basic Kathak foot rhythm.',['Stand straight','Stamp right-left slowly','Count ta thei thei tat','Add hand position','Repeat in slow tempo'],'15 min','Practice on a safe floor, not concrete.'],
['Teens','Contemporary','Breath & Flow Sequence','Use breath to create smooth transitions.',['Inhale and lift arms','Exhale and roll down','Step into a side reach','Turn slowly and release','Repeat with soft music'],'16 min','Move within comfort range.'],
['Teens','Jazz','Sharp Lines Drill','Create clean performance shapes.',['Practice jazz hands','Hit a diagonal arm line','Step and point','Add a head turn','Freeze strongly on count 8'],'14 min','Warm up shoulders first.'],
['Teens','Freestyle','Confidence Freestyle Box','Learn to improvise without fear.',['Mark a small square','Use one move in each corner','Change levels: high, middle, low','Repeat with a new emotion'],'12 min','Focus on control, not speed.'],
['Adults','Dance Foundations','Posture Reset for Dance','Prepare the body for graceful movement.',['Stand tall with feet hip-width','Relax shoulders','Engage core gently','Practice slow arm circles','Walk forward with rhythm'],'12 min','Stop if you feel pain.'],
['Adults','Salsa','Salsa Basic Step','Learn the basic forward-back pattern.',['Step forward left','Replace weight right','Bring left back','Step back right','Replace and close'],'15 min','Keep steps small.'],
['Adults','Bollywood','Bollywood Fitness Combo','A simple energetic routine.',['Step-touch with arms','Add hip sway','Add hand wave','Repeat 4 rounds','Finish with pose'],'18 min','Keep intensity comfortable.'],
['Adults','Bharatanatyam','Aramandi Awareness','Understand classical posture safely.',['Open feet gently','Bend knees slightly','Keep spine tall','Practice hand mudra','Hold for short intervals'],'10 min','Do not force deep knee bends.'],
['Adults','Contemporary','Release & Relax','Use dance for stress relief.',['Roll shoulders','Sway side to side','Reach across body','Turn slowly','End with breathing'],'14 min','Move slowly and breathe.'],
['Adults','Zumba / Fitness','Low Impact Cardio Dance','Dance for stamina without heavy jumps.',['March to beat','Step side with arms','Add gentle hip circles','Repeat chorus pattern','Cool down slowly'],'20 min','Low impact only if joints are sensitive.'],
['Kids','Hip-Hop','Mini Groove Party','Simple bounce and arm groove for children.',['Bounce softly','Point right and left','Add two claps','Freeze pose','Repeat with music'],'10 min','Keep volume safe.'],
['Teens','Salsa','Solo Salsa Timing','Practice Latin timing without a partner.',['Count 1-2-3, 5-6-7','Step in place','Add side basic','Add simple turn prep'],'15 min','Turn slowly first.'],
['Adults','Folk Dance','Garba-Inspired Circle Flow','Learn simple circular folk rhythm.',['Step side','Tap behind','Clap twice','Move in a circle','Repeat both directions'],'16 min','Avoid dizziness; pause when needed.'],
['Teens','Ballet','Plié & Port de Bras','Build control and line.',['First position','Small plié','Open arms to second','Close arms softly','Repeat slowly'],'14 min','Never force turnout.'],
['Kids','Kathak','Story Hands','Introduce mudras through storytelling.',['Make flower hand','Show sun hand','Show walking fingers','Create a tiny story','Perform for family'],'9 min','Gentle fingers only.'],
['Adults','Jazz','Stage Walk Confidence','Improve presence and body language.',['Walk on 8 counts','Add shoulder angle','Stop and pose','Turn head slowly','Repeat with music'],'12 min','Wear comfortable shoes.'],
['Teens','Zumba / Fitness','Cardio Chorus Challenge','Create a repeatable chorus routine.',['Pick 4 moves','Do each for 8 counts','Repeat twice','Add energy','Cool down'],'18 min','Hydrate before and after.'],
['Adults','Freestyle','Emotion Improvisation','Express a feeling through movement.',['Choose calm or joy','Move arms only','Add walking pattern','Change levels','End in a still pose'],'12 min','No need to look perfect.'],
['Kids','Contemporary','Ribbon Flow Without Ribbon','Create soft flowing movement.',['Pretend holding ribbon','Draw circles in air','Step slowly','Turn carefully','Freeze like a sculpture'],'8 min','Turn in open space.'],
['Teens','Bharatanatyam','Mudra & Expression Intro','Learn hand gesture plus expression.',['Practice pataka hand','Practice alapadma hand','Add eye focus','Add smile or devotion expression'],'13 min','Relax fingers after practice.'],
['Adults','Hip-Hop','Beginner Isolation','Control shoulders, chest and head.',['Isolate shoulders','Move chest forward-back','Move head side-side','Combine slowly','Add beat'],'15 min','Avoid sudden neck movement.'],
['Kids','Jazz','Star Pose Routine','Build fun stage confidence.',['Walk 4 counts','Jump softly','Make star arms','Turn half circle','Final pose'],'10 min','Soft landing only.'],
['Teens','Folk Dance','Rhythm Formation Solo','Learn folk energy with formations.',['Mark four floor spots','Travel spot to spot','Clap on 4','Add spin slowly','Repeat pattern'],'15 min','Spot your turn.'],
['Adults','Ballet','Gentle Barre at Home','Use a chair for ballet basics.',['Hold chair lightly','Practice tendu front','Practice tendu side','Small plié','Stretch calves'],'15 min','Use stable chair only.'],
['Kids','Salsa','Side-to-Side Latin Fun','A kid-friendly Latin rhythm intro.',['Step right-close','Step left-close','Add claps','Add shoulder shimmy','Repeat slowly'],'9 min','No fast turns.'],
['Teens','Dance Foundations','8-Count Choreography Builder','Learn how choreography is built.',['Choose 4 simple moves','Give each 2 counts','Practice 8-count phrase','Repeat with music','Change one move'],'16 min','Start slow.'],
['Adults','Dance Foundations','Daily 10-Min Practice Plan','Create a sustainable routine.',['2 min warmup','3 min rhythm basics','3 min chosen style','1 min freestyle','1 min cool down'],'10 min','Consistency matters more than intensity.'],
['Kids','Bharatanatyam','Classical Shapes for Kids','Explore basic classical shapes playfully.',['Stand tall','Make triangle arm shape','Practice simple mudra','Step gently','Smile and freeze'],'8 min','No deep knee bend.']
];
const pathPanel=document.getElementById('pathPanel');
function renderPath(key){const p=paths[key];pathPanel.innerHTML=`<img src="${p.img}" alt="${p.title} illustration"><div><p class="eyebrow">${key}</p><h3>${p.title}</h3><p>${p.copy}</p><ul>${p.list.map(x=>`<li>${x}</li>`).join('')}</ul></div>`}
renderPath('kids');
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderPath(b.dataset.tab)}));
const styleGrid=document.getElementById('styleGrid');
styleGrid.innerHTML=styles.map(s=>`<article class="style-card reveal"><img src="${s[3]}" alt="${s[0]} dance illustration"><div><h3>${s[0]}</h3><p>${s[4]}</p><div class="meta"><span class="pill">${s[1]}</span><span class="pill">${s[2]}</span></div></div></article>`).join('');
const styleFilter=document.getElementById('styleFilter');
styles.forEach(s=>styleFilter.insertAdjacentHTML('beforeend',`<option value="${s[0]}">${s[0]}</option>`));
const lessonGrid=document.getElementById('lessonGrid'), ageFilter=document.getElementById('ageFilter'), lessonSearch=document.getElementById('lessonSearch');
function renderLessons(){const age=ageFilter.value, style=styleFilter.value, q=lessonSearch.value.toLowerCase();const filtered=lessons.filter(l=>(age==='all'||l[0]===age)&&(style==='all'||l[1]===style)&&(`${l[2]} ${l[3]} ${l[1]} ${l[0]}`.toLowerCase().includes(q)));lessonGrid.innerHTML=filtered.map(l=>`<article class="lesson-card reveal visible"><div class="meta"><span class="pill">${l[0]}</span><span class="pill">${l[1]}</span><span class="pill">${l[5]}</span></div><h3>${l[2]}</h3><p>${l[3]}</p><ol>${l[4].map(x=>`<li>${x}</li>`).join('')}</ol><small><strong>Safety:</strong> ${l[6]}</small></article>`).join('')||'<p class="hero-copy">No lessons found. Try another filter.</p>'}
[ageFilter,styleFilter,lessonSearch].forEach(el=>el.addEventListener('input',renderLessons));renderLessons();
document.querySelectorAll('#accordion button').forEach(btn=>btn.addEventListener('click',()=>btn.classList.toggle('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('mainNav').classList.toggle('open'));
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mainNav').classList.remove('open')));
