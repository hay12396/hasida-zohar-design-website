document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const demoButton = document.getElementById('demo-action');
  if (demoButton) {
    demoButton.addEventListener('click', function () {
      console.log('Demo button clicked. Add your JavaScript logic in script.js.');
      alert('script.js is connected and ready!');
    });
  }

  const header = document.querySelector('.top-header');
  const updateHeaderBorder = function () {
    if (!header) return;
    if (window.scrollY > 0) {
      header.classList.add('top-header--scrolled');
    } else {
      header.classList.remove('top-header--scrolled');
    }
  };

  updateHeaderBorder();
  window.addEventListener('scroll', updateHeaderBorder);
  
  // Smooth scroll for header links with data-scroll-target
  const headerHeight = header ? header.offsetHeight : 56;
  const scrollLinks = document.querySelectorAll('[data-scroll-target]');
  scrollLinks.forEach(function (el) {
    el.addEventListener('click', function (ev) {
      ev.preventDefault();
      const targetId = el.getAttribute('data-scroll-target');
      if (!targetId) return;
      let targetEl = document.getElementById(targetId);
      if (!targetEl) targetEl = document.querySelector('.' + targetId);
      if (!targetEl) return;
      const rect = targetEl.getBoundingClientRect();
      // default small offset
      let extraOffset = 8;
      // for the 'about' link, scroll a bit higher so the section appears slightly lower in view
      if (targetId === 'about-section__text') extraOffset = 48;
      const top = rect.top + window.scrollY - headerHeight - extraOffset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // Click handler for header button (visual CTA) to view projects
  const viewProjectsButton = document.querySelector('.header-asset--button');
  if (viewProjectsButton) {
    viewProjectsButton.style.cursor = 'pointer';
    viewProjectsButton.addEventListener('click', function (ev) {
      ev.preventDefault();
      const targetEl = document.querySelector('.feature-row__text');
      if (!targetEl) return;
      const rect = targetEl.getBoundingClientRect();
      const top = rect.top + window.scrollY - headerHeight - 8;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  }
});
