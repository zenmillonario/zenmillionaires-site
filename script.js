document.documentElement.classList.add('has-script');

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  const setMenuOpen = (isOpen) => {
    mainNav.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  };

  navToggle.addEventListener('click', () => {
    setMenuOpen(!mainNav.classList.contains('open'));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mainNav.classList.contains('open')) {
      setMenuOpen(false);
      navToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!mainNav.contains(event.target) && !navToggle.contains(event.target)) {
      setMenuOpen(false);
    }
  });
}

const revealItems = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => {
    item.classList.add('reveal-pending');
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}
