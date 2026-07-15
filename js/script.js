document.addEventListener('DOMContentLoaded', () => {
  
  // Set accurate header height variable
  function setHeaderHeight() {
    const header = document.getElementById('siteHeader');
    if (header) {
      const h = header.offsetHeight;
      document.documentElement.style.setProperty('--header-h', h + 'px');
    }
  }
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);
  window.addEventListener('load', setHeaderHeight);

  // Mobile drawer panel navigation
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const menuOpenBtn = document.getElementById('menuOpenBtn');
  const menuCloseBtn = document.getElementById('menuCloseBtn');

  if (menuOpenBtn && mobileMenu && mobileMenuOverlay) {
    menuOpenBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      mobileMenuOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeMenu() {
    if (mobileMenu && mobileMenuOverlay) {
      mobileMenu.classList.remove('open');
      mobileMenuOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);
  if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMenu);
  
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Fade-up intersection observer scroll trigger
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });
  
  revealEls.forEach(el => io.observe(el));

  // Stagger loading delays on grids of cards
  document.querySelectorAll('.products-grid').forEach(grid => {
    const cards = grid.querySelectorAll('.product-card');
    cards.forEach((card, i) => {
      card.style.transitionDelay = (i * 0.08) + 's';
    });
  });

  // Wishlist toggle interaction
  document.addEventListener('click', (e) => {
    const wishlistBtn = e.target.closest('.wishlist-btn');
    if (wishlistBtn) {
      e.preventDefault();
      wishlistBtn.classList.toggle('active');
    }
  });

});
