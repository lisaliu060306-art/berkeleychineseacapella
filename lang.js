// lang.js - Complete with navigation bar translation
(function() {
  // Function to update navigation bar text
  function updateNavbarText(lang) {
    const navLinks = {
      zh: ['首页', '试音', '关于', '日程', '社交'],
      en: ['Home', 'Auditions', 'About', 'Dates', 'Social']
    };
    
    const navItems = document.querySelectorAll('.nav-menu a');
    if (navItems.length === 5) {
      navItems.forEach((item, index) => {
        item.textContent = navLinks[lang][index];
      });
    }
  }

  // Main function to set active language
  function setActiveLang(lang) {
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update content sections
    document.querySelectorAll('.lang-content').forEach(content => {
      if (content.classList.contains(lang)) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });

    // UPDATE NAVIGATION BAR TEXT
    updateNavbarText(lang);

    // Save preference
    localStorage.setItem('bca-lang', lang);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Attach click events to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        setActiveLang(this.dataset.lang);
      });
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('bca-lang');
    setActiveLang(savedLang === 'en' ? 'en' : 'zh');
  }
})();