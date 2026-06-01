(function(){
  "use strict";
  const WORKS = window.WORKS, TRACKS = window.TRACKS;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s,r=document)=>r.querySelector(s);
  const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
  const IMG = s=>`assets/works/${s}.jpg`;
  const THUMB = s=>`assets/works/thumbs/${s}.jpg`;

  /* ---------- 星空 ---------- */
  (function starfield(){
    const cv = $("#starfield"), ctx = cv.getContext("2d");
    let w,h,stars=[],shooters=[],dpr=Math.min(devicePixelRatio||1,2);
    function resize(){
      w=cv.width=innerWidth*dpr; h=cv.height=innerHeight*dpr;
      cv.style.width=innerWidth+"px"; cv.style.height=innerHeight+"px";
      const count=Math.round(innerWidth*innerHeight/5200);
      stars=Array.from({length:count},()=>({
        x:Math.random()*w, y:Math.random()*h,
        r:(Math.random()*1.5+.3)*dpr,
        a:Math.random(), tw:Math.random()*.02+.004,
        d:Math.random()*.5+.15,
        c:Math.random()<.18?"hsl("+(190+Math.random()*80)+",80%,80%)":"#ffffff"
      }));
    }
    function shoot(){
      if(reduce) return;
      shooters.push({x:Math.random()*w,y:Math.random()*h*.4,len:(Math.random()*200+120)*dpr,
        vx:(Math.random()*6+5)*dpr,vy:(Math.random()*2+1.5)*dpr,life:1});
    }
    let scroll=0; addEventListener("scroll",()=>scroll=scrollY*dpr*.12,{passive:true});
    function tick(){
      ctx.clearRect(0,0,w,h);
      for(const s of stars){
        s.a+=s.tw; const al=.4+Math.abs(Math.sin(s.a))*.6;
        const y=(s.y - scroll*s.d)%h, yy=y<0?y+h:y;
        ctx.globalAlpha=al; ctx.fillStyle=s.c;
        ctx.beginPath(); ctx.arc(s.x,yy,s.r,0,7); ctx.fill();
        if(s.r>1.1){ctx.globalAlpha=al*.25;ctx.beginPath();ctx.arc(s.x,yy,s.r*3,0,7);ctx.fill();}
      }
      ctx.globalAlpha=1;
      for(let i=shooters.length-1;i>=0;i--){
        const m=shooters[i]; m.x+=m.vx;m.y+=m.vy;m.life-=.012;
        const g=ctx.createLinearGradient(m.x,m.y,m.x-m.len*(m.vx/8),m.y-m.len*(m.vy/8));
        g.addColorStop(0,"rgba(180,220,255,"+m.life+")");g.addColorStop(1,"transparent");
        ctx.strokeStyle=g;ctx.lineWidth=2*dpr;ctx.beginPath();ctx.moveTo(m.x,m.y);
        ctx.lineTo(m.x-m.len*(m.vx/8),m.y-m.len*(m.vy/8));ctx.stroke();
        if(m.life<=0||m.x>w)shooters.splice(i,1);
      }
      requestAnimationFrame(tick);
    }
    resize(); addEventListener("resize",resize); tick();
    setInterval(()=>{if(Math.random()<.7)shoot();},2600);
  })();

  /* ---------- 导航滚动态 ---------- */
  const nav=$("#nav");
  addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>40),{passive:true});

  /* ---------- Hero 数字 ---------- */
  (function counters(){
    const els=$$("#heroStats b[data-count]");
    let done=false;
    const run=()=>{els.forEach(el=>{
      const t=+el.dataset.count;let c=0;const step=Math.max(1,Math.round(t/40));
      const iv=setInterval(()=>{c+=step;if(c>=t){c=t;clearInterval(iv);}el.textContent=c;},28);
    });};
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!done){done=true;run();}}),{threshold:.5});
    io.observe($("#heroStats"));
  })();

  /* ---------- Coverflow ---------- */
  const stage=$("#cfStage"), N=WORKS.length;
  const lead=$("#galleryLead"); if(lead) lead.textContent=`滑动、拖拽，或静待星河自转——逐一点亮 ${N} 份决赛作品。`;
  let cur=0, items=[];
  WORKS.forEach((wk,i)=>{
    const el=document.createElement("div");
    el.className="cf-item"; el.dataset.i=i;
    const tr=TRACKS[wk.track];
    el.style.setProperty("--accent",tr.color);
    el.style.setProperty("--glow",tr.glow);
    el.innerHTML=`<img loading="lazy" src="${THUMB(wk.slug)}" alt="${wk.title}"><span class="cf-shine"></span>`;
    el.addEventListener("click",()=>{ if(i===cur) openLB(i); else go(i); });
    stage.appendChild(el); items.push(el);
  });

  function layout(){
    const cw=stage.clientWidth||innerWidth;
    const spacing=Math.min(cw*0.30,300);
    items.forEach((el,i)=>{
      let off=i-cur; if(off>N/2)off-=N; if(off<-N/2)off+=N;
      const a=Math.abs(off);
      if(a>3.5){ el.style.opacity=0; el.style.pointerEvents="none";
        el.style.transform=`translate(-50%,-50%) translateX(${off*spacing}px) scale(.3)`; return; }
      const x=off*spacing;
      const z=-a*160;
      const rot=off===0?0:(off>0?-42:42);
      const sc=Math.max(.55,1-a*.13);
      el.style.opacity=Math.max(0,1-a*.26);
      el.style.pointerEvents="auto";
      el.style.zIndex=String(200-a*10);
      el.style.transform=`translate(-50%,-50%) translateX(${x}px) translateZ(${z}px) rotateY(${rot}deg) scale(${sc})`;
      el.classList.toggle("active",off===0);
    });
    syncMeta(); syncDots();
  }
  function go(i){ cur=((i%N)+N)%N; layout(); }
  function next(){ go(cur+1); } function prev(){ go(cur-1); }

  /* 元信息 */
  const mTrack=$("#cfTrack"),mTitle=$("#cfTitle"),mEn=$("#cfEn"),mTag=$("#cfTagline"),mAuthor=$("#cfAuthor"),meta=$("#cfMeta");
  function syncMeta(){
    const wk=WORKS[cur],tr=TRACKS[wk.track];
    meta.style.setProperty("--accent",tr.color); meta.style.setProperty("--glow",tr.glow);
    mTrack.textContent=wk.track; mTitle.textContent=wk.title;
    mEn.textContent=wk.en; mTag.textContent="“"+wk.tagline+"”";
    mAuthor.innerHTML=wk.author?`选手 · <b>${wk.author}</b>`:`繁星之夜 · 入围作品`;
    [mTitle,mEn,mTag].forEach(e=>{e.style.animation="none";void e.offsetWidth;e.style.animation="rise .6s forwards";});
  }
  /* 圆点 */
  const dotsWrap=$("#cfDots");
  WORKS.forEach((_,i)=>{const d=document.createElement("span");d.className="cf-dot";d.addEventListener("click",()=>go(i));dotsWrap.appendChild(d);});
  const dots=$$(".cf-dot",dotsWrap);
  function syncDots(){dots.forEach((d,i)=>d.classList.toggle("active",i===cur));}

  $("#cfNext").addEventListener("click",next);
  $("#cfPrev").addEventListener("click",prev);

  /* 自动播放 */
  let auto=null; const AUTO=4200;
  function play(){ if(reduce)return; stop(); auto=setInterval(next,AUTO); }
  function stop(){ if(auto){clearInterval(auto);auto=null;} }
  const cfWrap=$("#coverflow");
  cfWrap.addEventListener("mouseenter",stop); cfWrap.addEventListener("mouseleave",play);

  /* 拖拽 / 滑动 */
  let dragX=null,moved=false;
  cfWrap.addEventListener("pointerdown",e=>{dragX=e.clientX;moved=false;stop();});
  addEventListener("pointermove",e=>{
    if(dragX===null)return;
    if(Math.abs(e.clientX-dragX)>60){ (e.clientX<dragX)?next():prev(); dragX=e.clientX; moved=true; }
  });
  addEventListener("pointerup",()=>{dragX=null;play();});
  /* 键盘 */
  addEventListener("keydown",e=>{
    if($("#lightbox").classList.contains("open"))return;
    if(e.key==="ArrowRight")next(); if(e.key==="ArrowLeft")prev();
  });

  layout(); play();
  addEventListener("resize",layout);

  /* ---------- 星座网格 + 筛选 ---------- */
  const grid=$("#starGrid"), filters=$("#filters");
  const trackNames=Object.keys(TRACKS);
  // 全部按钮
  const mkFilter=(label,val,color,glow,count)=>{
    const b=document.createElement("button");
    b.className="filter"; b.dataset.val=val;
    if(color){b.style.setProperty("--c",color);b.style.setProperty("--g",glow);}
    b.innerHTML=`${label}<b>${count}</b>`;
    b.addEventListener("click",()=>applyFilter(val,b));
    filters.appendChild(b); return b;
  };
  const allBtn=mkFilter("全部星河","all","#f5d27a","rgba(245,210,122,.45)",WORKS.length);
  allBtn.classList.add("active");
  trackNames.forEach(t=>{
    const tr=TRACKS[t]; const c=WORKS.filter(w=>w.track===t).length;
    mkFilter(t,t,tr.color,tr.glow,c);
  });

  WORKS.forEach((wk,i)=>{
    const tr=TRACKS[wk.track];
    const card=document.createElement("article");
    card.className="star-card"; card.dataset.track=wk.track; card.dataset.i=i;
    card.style.setProperty("--accent",tr.color); card.style.setProperty("--glow",tr.glow);
    card.style.transitionDelay=(i%12*0.04)+"s";
    card.innerHTML=`
      <div class="sc-img">
        <span class="sc-num">${String(i+1).padStart(2,"0")}</span>
        <span class="sc-track">${wk.track}</span>
        <span class="sc-glint"></span>
        <img loading="lazy" src="${THUMB(wk.slug)}" alt="${wk.title}">
      </div>
      <div class="sc-body">
        <h4>${wk.title}</h4>
        <p>${wk.tagline}</p>
        ${wk.author?`<div class="sc-author">✦ ${wk.author}</div>`:""}
      </div>`;
    card.addEventListener("click",()=>openLB(i));
    grid.appendChild(card);
  });
  const cards=$$(".star-card");

  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{threshold:.12});
  cards.forEach(c=>io.observe(c));

  function applyFilter(val,btn){
    $$(".filter").forEach(b=>b.classList.remove("active")); btn.classList.add("active");
    cards.forEach(c=>{
      const show=(val==="all"||c.dataset.track===val);
      c.classList.toggle("hide",!show);
    });
  }

  /* ---------- 灯箱 ---------- */
  const lb=$("#lightbox"),lbImg=$("#lbImg"),lbTrack=$("#lbTrack"),lbTitle=$("#lbTitle"),
        lbEn=$("#lbEn"),lbTag=$("#lbTagline"),lbBlurb=$("#lbBlurb"),lbTags=$("#lbTags"),
        lbAuthor=$("#lbAuthor"),lbIndex=$("#lbIndex");
  let lbI=0;
  function openLB(i){ lbI=i; renderLB(); lb.classList.add("open"); lb.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; stop(); }
  function closeLB(){ lb.classList.remove("open"); lb.setAttribute("aria-hidden","true"); document.body.style.overflow=""; play(); }
  function renderLB(){
    const wk=WORKS[lbI],tr=TRACKS[wk.track];
    lb.style.setProperty("--accent",tr.color); lb.style.setProperty("--glow",tr.glow);
    lbImg.src=IMG(wk.slug); lbImg.alt=wk.title;
    lbTrack.textContent=wk.track+" · "+tr.desc;
    lbTitle.textContent=wk.title; lbEn.textContent=wk.en;
    lbTag.textContent="“"+wk.tagline+"”"; lbBlurb.textContent=wk.blurb;
    lbTags.innerHTML=wk.tags.map(t=>`<span>#${t}</span>`).join("");
    lbAuthor.innerHTML=wk.author?`参赛选手 · <b>${wk.author}</b>`:`繁星之夜 · 决赛入围作品`;
    lbIndex.textContent=String(lbI+1).padStart(2,"0")+" / "+String(N).padStart(2,"0");
  }
  function lbNext(){lbI=(lbI+1)%N;renderLB();}
  function lbPrev(){lbI=(lbI-1+N)%N;renderLB();}
  $("#lbClose").addEventListener("click",closeLB);
  $("#lbBackdrop").addEventListener("click",closeLB);
  $("#lbNext").addEventListener("click",lbNext);
  $("#lbPrev").addEventListener("click",lbPrev);
  addEventListener("keydown",e=>{
    if(!lb.classList.contains("open"))return;
    if(e.key==="Escape")closeLB();
    if(e.key==="ArrowRight")lbNext();
    if(e.key==="ArrowLeft")lbPrev();
  });
})();
