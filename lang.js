
(function() {
  function updateNavbarText(lang) {
    const navLinks = {
      zh: ['首页', '试音', '关于', '日程', '社交'],
      en: ['Home', 'Auditions', 'About', 'Dates', 'Social']
    };
    
    const navItems = document.querySelectorAll('.nav-menu a');
    if (navItems.length === 6) {
      navItems.forEach((item, index) => {
        item.textContent = navLinks[lang][index];
      });
    }
  }

  function setActiveLang(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll('.lang-content').forEach(content => {
      if (content.classList.contains(lang)) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });

    updateNavbarText(lang);

    localStorage.setItem('bca-lang', lang);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        setActiveLang(this.dataset.lang);
      });
    });

    const savedLang = localStorage.getItem('bca-lang');
    setActiveLang(savedLang === 'en' ? 'en' : 'zh');
  }
})();