// set --header-h so hero fills exactly the remaining viewport
  function setHeaderHeight(){
    const h = document.getElementById('siteHeader').offsetHeight;
    document.documentElement.style.setProperty('--header-h', h+'px');
  }
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);
  window.addEventListener('load', setHeaderHeight);

  // mobile menu open/close
  const mobileMenu = document.getElementById('mobileMenu');
  document.getElementById('menuOpenBtn').addEventListener('click', ()=>{
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('menuCloseBtn').addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMenu));
  function closeMenu(){
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // fade-up reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});
  revealEls.forEach(el=>io.observe(el));

  // stagger the shop cards slightly
  document.querySelectorAll('.grid .card').forEach((card, i)=>{
    card.style.transitionDelay = (i*0.08)+'s';
  });
