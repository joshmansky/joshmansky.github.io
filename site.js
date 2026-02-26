(function () {
  var root = document.documentElement;
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var storedTheme = localStorage.getItem('theme');
  var currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    var icon = document.querySelector('[data-theme-icon]');
    var label = document.querySelector('[data-theme-label]');
    if (icon) {
      icon.textContent = 'Mode';
    }
    if (label) {
      label.textContent = theme === 'dark' ? 'Dark' : 'Light';
    }
  }

  applyTheme(currentTheme);

  var themeToggle = document.querySelector('[data-theme-toggle]');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      currentTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  }

  var menuToggle = document.querySelector('[data-menu-toggle]');
  var navLinks = document.querySelector('[data-nav-links]');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
      });
    });
  }

  var page = document.body.getAttribute('data-page');
  if (page) {
    document.querySelectorAll('[data-page-link]').forEach(function (link) {
      if (link.getAttribute('data-page-link') === page) {
        link.classList.add('active');
      }
    });
  }
})();
