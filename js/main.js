(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  if (stored) root.setAttribute('data-theme', stored);

  function currentTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function setIcon() {
    if (!toggle) return;
    toggle.textContent = currentTheme() === 'light' ? '\u{1F319}' : '\u{2600}️';
  }
  setIcon();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      setIcon();
    });
  }

  var menuBtn = document.querySelector('.menu-btn');
  var navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.proj-card');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      cards.forEach(function (card) {
        var tags = (card.getAttribute('data-tags') || '');
        card.style.display = (f === 'all' || tags.indexOf(f) !== -1) ? '' : 'none';
      });
    });
  });
})();
