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

// The website is informational. The app's server remains the access authority.
const eventCutoff = Date.parse('2026-12-01T05:00:00Z');
const eventStart = Date.parse('2026-11-27T08:50:44Z');
function updateEventInvitation() {
  const now = Date.now();
  const open = now >= eventStart && now < eventCutoff;
  const ended = now >= eventCutoff;
  document.querySelectorAll('[data-event-title]').forEach(el => {
    el.textContent = ended ? 'CashOutAI · Practice event ended' : open ? 'Free Event Access · Cyber Monday' : 'CashOutAI · Practice event';
  });
  document.querySelectorAll('[data-event-copy]').forEach(el => {
    el.textContent = ended ? 'The free event has ended. Your account stays saved; sign in to see membership options.' : open ? 'Free through Monday, November 30, 2026 at 11:59 p.m. Eastern. No card required. Check current availability in the app.' : 'Check the app for event availability.';
  });
  document.querySelectorAll('[data-event-button]').forEach(el => {
    el.textContent = ended ? 'Open CashOutAI' : open ? 'Free Event Access' : 'Check event access';
  });
}
updateEventInvitation();
window.addEventListener('focus', updateEventInvitation);
window.setInterval(updateEventInvitation, 30000);
