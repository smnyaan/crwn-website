// Reveal-on-scroll sections stay visible unless this class confirms JS is running
document.documentElement.classList.add('js-reveal');

// Mobile nav toggle
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', () => {
  const open = header.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Close menu after tapping a link
header.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Feature tabs: clicking a pill swaps the matching phone mockup panel
// beside it, scoped to its own section so Clients and Providers tab
// independently.
document.querySelectorAll('[data-tab-group]').forEach((group) => {
  const tabs = group.querySelectorAll('.tab-pill');
  const panels = group.querySelectorAll('.tab-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => {
        t.classList.toggle('is-active', t === tab);
        t.setAttribute('aria-selected', String(t === tab));
      });
      panels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.dataset.panel === target);
      });
    });
  });
});

// Reveal sections as they enter the viewport
const revealTargets = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}
