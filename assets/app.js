(() => {
  const body = document.body;
  const openButton = document.getElementById('navOpenButton');
  const closeButton = document.getElementById('navCloseButton');
  const overlay = document.getElementById('navOverlay');
  const header = document.querySelector('.site-header');
  const navItems = overlay?.querySelectorAll('.nav-close-link') || [];
  let lastFocused = null;
  function closeMenu(){
    overlay?.classList.remove('is-open');
    overlay?.classList.add('hidden');
    overlay?.setAttribute('aria-hidden','true');
    openButton?.setAttribute('aria-expanded','false');
    body.classList.remove('menu-open');
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
  }
  function openMenu(){
    lastFocused=document.activeElement;
    overlay?.classList.remove('hidden');
    overlay?.classList.add('is-open');
    overlay?.setAttribute('aria-hidden','false');
    openButton?.setAttribute('aria-expanded','true');
    body.classList.add('menu-open');
    closeButton?.focus();
  }
  openButton?.addEventListener('click', openMenu);
  closeButton?.addEventListener('click', closeMenu);
  navItems.forEach(item=>item.addEventListener('click',closeMenu));
  window.addEventListener('keydown',e=>{
    if(e.key==='Escape') closeMenu();
    if(e.key==='Tab' && overlay?.classList.contains('is-open')) {
      const interactive=Array.from(overlay.querySelectorAll('a,button')).filter(x=>x.offsetParent!==null);
      const first=interactive[0],last=interactive[interactive.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
  });
  function updateHeader(){header?.classList.toggle('is-scrolled',window.scrollY>16)}
  window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
  const revealed=document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
    },{threshold:.08,rootMargin:'0px 0px 55px 0px'});
    revealed.forEach(el=>observer.observe(el));
  } else {revealed.forEach(el=>el.classList.add('is-visible'));}
  document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear();});
  // SITE123 source includes a fictitious telephone number. To avoid accidentally
  // contacting an unrelated person, demo links do not open WhatsApp until configured.
  const DEMO_WHATSAPP='5511987654321';
  const toast=document.createElement('div'); toast.className='demo-toast'; toast.setAttribute('role','status');
  toast.textContent='Agendamento e canais de contato indisponíveis no momento.';
  body.append(toast);
  let hideToast;
  document.querySelectorAll('a[href*="wa.me/"], a[href^="tel:+5511987654321"], a[href^="mailto:contato@blackcrownbarberstudio.com"]').forEach(a=>{
    try{
      const url=new URL(a.href);const phone=url.pathname.replace(/\D/g,'');
      if(phone===DEMO_WHATSAPP || url.protocol==='tel:' || url.protocol==='mailto:') a.addEventListener('click',event=>{
        event.preventDefault();toast.classList.add('show');
        clearTimeout(hideToast);hideToast=setTimeout(()=>toast.classList.remove('show'),4500);
      });
    }catch{}
  });
})();
