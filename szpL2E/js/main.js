// szpL2E site — small shared behaviors, no frameworks.
(function () {
  // Scroll-spy for doc sidebars
  var headers = document.querySelectorAll('.doc-main h2[id], .doc-main h3[id]');
  var links = document.querySelectorAll('.doc-sidebar a[href^="#"]');
  if (headers.length && links.length) {
    var map = {};
    links.forEach(function (l) { map[l.getAttribute('href').slice(1)] = l; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.getAttribute('id');
        var link = map[id];
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-100px 0px -70% 0px' });
    headers.forEach(function (h) { observer.observe(h); });
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.top-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Mobile dropdown toggle (e.g. 實作成果 version menu)
  var dropToggles = document.querySelectorAll('.nav-item-drop > a');
  dropToggles.forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (window.innerWidth > 880) return; // desktop uses hover
      var parent = a.closest('.nav-item-drop');
      if (!parent) return;
      e.preventDefault();
      parent.classList.toggle('open');
    });
  });
})();
