/* ============================================================
   BIRTHDAY APP — app.js
   For: Ponsankari S  |  From: Prime R S  |  April 9, 2026
   ============================================================ */

/* ─── TIMELINE DATA ─── */
const timelineData = [
  {
    emoji:'🏛️', date:'September 9, 2024',
    title:'The Day Our Universe Collided',
    desc:'We both walked through the gates of GCE Erode. Neither of us knew then — but the universe had already written our names on the same page of fate. This was where our story began.'
  },
  {
    emoji:'😂', date:'May 31, 2025',
    title:'The Reel That Started Everything',
    desc:'A reel about a mom haggling for 10 sarees at ₹1000. She liked it. I had watched my own mom do the same the night before. So I replied: <span class="gold italic">"Same situation ah?"</span> — and in that one laughing moment, the rest of our lives began.'
  },
  {
    emoji:'💍', date:'November 1, 2025',
    title:'The Day I Poured My Heart Out',
    desc:'Three words. Eight letters. The bravest thing I have ever done — telling you "I love you." My heart raced like a final exam, but keeping it inside felt like holding back the ocean with bare hands.'
  },
  {
    emoji:'🎀', date:'January 13, 2026',
    title:'She Asked For It',
    desc:'You <em>wantedly</em> asked me to say it. You asked for my "I love you" — like it belonged to you all along. And it did, Thangapulla. It always did. 💕'
  },
  {
    emoji:'❣️', date:'February 12, 2026',
    title:'The First Time She Said It',
    desc:'The first time you said "Love you" to me — I replayed it a thousand times that night. I still do. Those two words from your lips are worth more than every song AR Rahman has ever written.'
  },
  {
    emoji:'🌟', date:'March 1, 2026',
    title:'"Me Too"',
    desc:'When I said "I love you" — you chose just two words: <em class="pink">"Me too."</em> And somehow, that felt more complete than any poem ever written. Me too is forever.'
  },
  {
    emoji:'🌙', date:'March 27, 2026',
    title:'The Night in the Madurai Bus',
    desc:'Near Karur bus stand. Lights went off. The world went quiet. We started talking. And then — in that perfect stillness — we found each other, like two stars pulled by gravity. Inevitable. Beautiful. Forever. 💋'
  },
  {
    emoji:'🌺', date:'April 5, 2026',
    title:'A Rose for My Rose',
    desc:'I gave you a rose. You accepted it happily. And in that moment I realised — I want to give you roses every day for the rest of my life. Starting today. Happy Birthday, my love. 🌹'
  }
];

/* ─── UNIVERSE / FAVOURITE THINGS ─── */
const universeData = [
  { icon:'😄', label:'That Smile',      val:'The one that makes me forget what I was saying.' },
  { icon:'👊', label:'She Beats Me',    val:'For everything. Every. Single. Thing. And I love it. 💕' },
  { icon:'🥰', label:'Cuddle Attacks',  val:'She wants to cuddle — and I will never say no. Ever.' },
  { icon:'😤', label:'Her Anger',       val:'Looks scary. Actually adorable. Don\'t tell her.' },
  { icon:'🍽️', label:'Favourite Food',  val:'Vada with Thenga Chutney · Ghee Roast 🤤' },
  { icon:'💋', label:'She Bites. Yes.', val:'Like I\'m vada with coconut chutney. I don\'t mind.' },
  { icon:'🌙', label:'That Mole',       val:'On her deep neck — catches the light just right and stops my heart every time.' },
  { icon:'🎬', label:'Inside Joke',     val:'"Na podren vathiyarey... daddy na podren" — Sarpatta Parambarai, always.' },
  { icon:'📸', label:'Heroine Pons',    val:'She walks, she poses, she exists — and it\'s cinematic every time.' },
];

/* ─── PHOTO GALLERY DATA ─── */
const galleryData = [
  { id:'15ChpxF9tHLb2NfDMhrM-wvRk8aEN012o', caption:'Happy Pons 😊' },
  { id:'19aoh-Cq9WSZThtYQQ8w6y4FmxLM9tL-X', caption:'Dancing Pons 💃' },
  { id:'1hxeyOIxfq7_KgCAcrKfmf_lFk5UkJ7V6', caption:'Laughing Pons 😂' },
  { id:'18v7LH2s2wxiNebY3Pa-3vrVEL_O0uwvP', caption:'Vessel Cleaning Pons 🫙' },
  { id:'1DTEoZMqTDEyWvYfdwhbpBqFlOdjqs-jR', caption:'Confused Pons 🤔' },
  { id:'1jLTBUXK_AflzMuveP-hRcs5AmUsWBj7I', caption:'Searching Pons 🔍' },
  { id:'1RaDzcGCHy3wkNK4MHaeUVGqrozvqHaHb', caption:'Mad Madam Pons 😡' },
  { id:'1KG7Nb0RfnVBhPPJcih_c8ayVePYptgsE', caption:'Hair Tying Pons 💇‍♀️' },
  { id:'1Xro9VnvS2jq5aZatYHIaXI4-gOFhPxo5', caption:'Heroine Pons 🌟' },
  { id:'1zamX90WjRkE-Reh8W63xNNdPTgWU28jC', caption:'Walking After Fight (100km/h) 💨' },
  { id:'1WkarAVGhSkahG6o1FaYb579h9cw5znQM', caption:'Angry Pons 🔥' },
  { id:'1Ux-9aJNJaEEEtuOvqowMBa69-lKSkiVS', caption:'The Madurai Night 🌙💋' },
];

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildTimeline();
  buildUniverse();
  buildGallery();
  loadReplies();
  startParticles();
  startCountdown();
  initScrollReveal();
});

/* ─── COUNTDOWN ─── */
function startCountdown() {
  const target = new Date('2026-04-09T00:00:00+05:30').getTime();

  function tick() {
    const now  = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      document.getElementById('timer').innerHTML =
        '<div class="badge-gold" style="font-size:1.3rem;animation:textGlow 2s infinite;">🎉 It\'s Her Birthday! 🎉</div>';
      fireConfetti();
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    pad('t-d', d); pad('t-h', h); pad('t-m', m); pad('t-s', s);
    setTimeout(tick, 1000);
  }
  tick();
}
function pad(id, val) {
  document.getElementById(id).textContent = String(val).padStart(2,'0');
}

/* ─── CONFETTI ─── */
const confColors = ['#D4A017','#E8A0C0','#C2568A','#9B1B30','#FFF8F0','#F5D78E','#fff'];
function fireConfetti() {
  const box = document.getElementById('confetti-box');
  if (!box) return;
  for (let i = 0; i < 120; i++) {
    const el = document.createElement('div');
    el.className = 'conf-piece';
    el.style.cssText = `
      left:${Math.random()*100}%;
      width:${6+Math.random()*10}px;
      height:${6+Math.random()*10}px;
      background:${confColors[Math.floor(Math.random()*confColors.length)]};
      border-radius:${Math.random()>.5?'50%':'2px'};
      animation-duration:${2+Math.random()*2.5}s;
      animation-delay:${Math.random()*1.5}s;
    `;
    box.appendChild(el);
  }
}

/* ─── PARTICLES ─── */
function startParticles() {
  const container = document.getElementById('particles');

  // Petals
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    Object.assign(p.style, {
      left: `${Math.random()*100}%`,
      top: `${Math.random()*-20}%`,
      width: `${12+Math.random()*14}px`,
      height: `${12+Math.random()*14}px`,
      '--drift': `${(Math.random()-0.5)*120}px`,
      animationDuration: `${6+Math.random()*8}s`,
      animationDelay: `${Math.random()*8}s`,
    });
    container.appendChild(p);
  }

  // Hearts
  const hearts = ['💗','💕','❤️','🌹','💓','💖'];
  for (let i = 0; i < 10; i++) {
    const h = document.createElement('div');
    h.className = 'hrt-p';
    h.textContent = hearts[Math.floor(Math.random()*hearts.length)];
    Object.assign(h.style, {
      left: `${Math.random()*95}%`,
      bottom: `-5%`,
      fontSize: `${14+Math.random()*16}px`,
      animationDuration: `${7+Math.random()*9}s`,
      animationDelay: `${Math.random()*10}s`,
    });
    container.appendChild(h);
  }

  // Arrows (Cupid style)
  for (let i = 0; i < 4; i++) {
    const a = document.createElement('div');
    a.className = 'arrow-p';
    a.textContent = '💘';
    Object.assign(a.style, {
      left: `${10+Math.random()*80}%`,
      top: `${10+Math.random()*70}%`,
      animationDuration: `${5+Math.random()*4}s`,
      animationDelay: `${Math.random()*6}s`,
    });
    container.appendChild(a);
  }
}

/* ─── TIMELINE BUILD ─── */
function buildTimeline() {
  const tl = document.getElementById('timeline');
  tl.innerHTML = timelineData.map(item => `
    <div class="tl-item" data-scroll>
      <div class="tl-dot"></div>
      <div class="tl-emoji">${item.emoji}</div>
      <div class="tl-date">${item.date}</div>
      <div class="tl-title">${item.title}</div>
      <div class="tl-desc">${item.desc}</div>
    </div>
  `).join('');
}

/* ─── UNIVERSE BUILD ─── */
function buildUniverse() {
  const g = document.getElementById('universe-grid');
  g.innerHTML = universeData.map(u => `
    <div class="u-card reveal">
      <div class="u-icon">${u.icon}</div>
      <div class="u-label">${u.label}</div>
      <div class="u-val">${u.val}</div>
    </div>
  `).join('');
}

/* ─── GALLERY BUILD ─── */
function buildGallery() {
  const g = document.getElementById('gallery-grid');
  g.innerHTML = galleryData.map((item, i) => {
    const thumbSrc = `https://drive.google.com/thumbnail?id=${item.id}&sz=w400`;
    const viewSrc  = `https://drive.google.com/uc?export=view&id=${item.id}`;
    return `
      <div class="g-item" onclick="openLightbox('${viewSrc}','${item.caption.replace(/'/g,"\\'")}')">
        <img src="${thumbSrc}" alt="${item.caption}" loading="lazy"
             onerror="this.parentElement.querySelector('.g-fallback').style.display='flex'; this.style.display='none';">
        <div class="g-fallback" style="display:none;width:100%;height:100%;align-items:center;justify-content:center;flex-direction:column;gap:10px;font-family:'Playfair Display',serif;font-style:italic;color:rgba(232,160,192,.8);font-size:.85rem;padding:20px;text-align:center;">
          <span style="font-size:2rem;">📸</span>
          <span>${item.caption}</span>
          <span style="font-size:.72rem;opacity:.6;">Click to open in Drive</span>
        </div>
        <div class="g-overlay"><div class="g-caption">${item.caption}</div></div>
      </div>
    `;
  }).join('');
}

/* ─── LIGHTBOX ─── */
function openLightbox(src, cap) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-cap').textContent = cap;
  lb.classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('on');
  document.getElementById('lb-img').src = '';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeLightbox(); });

/* ─── REPLY SYSTEM (localStorage) ─── */
function saveReply() {
  const input = document.getElementById('reply-input');
  const text  = input.value.trim();
  if (!text) return;

  const replies = JSON.parse(localStorage.getItem('pons-replies') || '[]');
  replies.push({ text, date: new Date().toLocaleString('en-IN') });
  localStorage.setItem('pons-replies', JSON.stringify(replies));
  input.value = '';
  renderReplies(replies);
  showSavedToast();
}

function loadReplies() {
  const replies = JSON.parse(localStorage.getItem('pons-replies') || '[]');
  if (replies.length) renderReplies(replies);
}

function renderReplies(replies) {
  const box = document.getElementById('saved-replies');
  if (!replies.length) { box.innerHTML = ''; return; }
  box.innerHTML = `
    <div style="font-family:'Playfair Display',serif;font-style:italic;color:var(--gold);margin-bottom:16px;font-size:.85rem;letter-spacing:1px;">
      🌹 Her Replies — A Memory Box
    </div>
    ${replies.map(r => `
      <div class="s-reply-item">
        <div class="s-reply-date">📅 ${r.date}</div>
        <div class="s-reply-text">${r.text}</div>
      </div>
    `).join('')}
  `;
}

function showSavedToast() {
  const t = document.createElement('div');
  t.textContent = '💕 Saved as a memory forever!';
  Object.assign(t.style, {
    position:'fixed', bottom:'30px', left:'50%', transform:'translateX(-50%)',
    background:'linear-gradient(135deg,#9B1B30,#C2568A)',
    color:'#fff', padding:'14px 28px', borderRadius:'50px',
    fontFamily:"'Playfair Display',serif", fontStyle:'italic',
    fontSize:'1rem', zIndex:'9999',
    boxShadow:'0 10px 30px rgba(155,27,48,.5)',
    animation:'fadeInUp .4s ease forwards',
    transition:'opacity .4s ease',
  });
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; setTimeout(()=>t.remove(),500); }, 2800);
}

/* ─── SCROLL REVEAL ─── */
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.tl-item, .reveal, .u-card').forEach(el => obs.observe(el));
}
