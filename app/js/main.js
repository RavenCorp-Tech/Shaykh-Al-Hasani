/* ============================================
   MAIN.JS - SHAYKH AL-HASANI WEBSITE
   ============================================ */

class ShaykhAlHasaniApp {
  constructor() {
    this.init();
  }

  init() {
    this.runSafely(() => this.setupThemeToggle(), 'theme toggle');
    this.runSafely(() => this.setupMobileMenu(), 'mobile menu');
    this.runSafely(() => this.setupScrollReveal(), 'scroll reveal');
    this.runSafely(() => this.setupSmoothScroll(), 'smooth scroll');
    this.runSafely(() => this.checkSystemTheme(), 'system theme');
  }

  /* ============================================
     THEME MANAGEMENT
     ============================================ */

  setupThemeToggle() {
    const themeBtn = document.querySelector('.theme-toggle');
    const html = document.documentElement;

    if (!themeBtn) return;

    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    this.updateThemeButton(themeBtn, savedTheme);
    this.updateLogoByTheme(savedTheme);

    // Theme toggle click handler
    themeBtn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      this.updateThemeButton(themeBtn, newTheme);
      this.updateLogoByTheme(newTheme);

      // Add animation
      themeBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        themeBtn.style.transform = 'scale(1)';
      }, 200);
    });
  }

  updateThemeButton(btn, theme) {
    const icon = theme === 'light' ? '🌙' : '☀️';
    const text = theme === 'light' ? 'Dark Mode' : 'Light Mode';
    btn.innerHTML = `${icon} ${text}`;
  }

  checkSystemTheme() {
    // Only apply system theme if no saved preference
    if (localStorage.getItem('theme')) return;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const html = document.documentElement;
    const theme = prefersDark ? 'dark' : 'light';

    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateLogoByTheme(theme);
  }

  updateLogoByTheme(theme) {
    const logoImg = document.querySelector('.logo-container img');
    if (!logoImg) return;

    logoImg.src = theme === 'dark' ? '../assets/light-logo.png' : '../assets/al-hasani.png';
  }

  /* ============================================
     MOBILE MENU
     ============================================ */

  setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.textContent = '☰';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav')) {
        navLinks.classList.remove('active');
        menuBtn.textContent = '☰';
      }
    });
  }

  /* ============================================
     SCROLL REVEAL ANIMATION
     ============================================ */

  setupScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    // Opt-in only: never hide core layout containers by default.
    const revealElements = document.querySelectorAll('[data-reveal], .page-card');
    if (!revealElements.length) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => {
      el.classList.add('reveal', 'reveal-pending');
      observer.observe(el);
    });
  }

  /* ============================================
     SMOOTH SCROLL
     ============================================ */

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Highlight the target
          target.style.outline = '2px solid var(--accent-color)';
          setTimeout(() => {
            target.style.outline = 'none';
          }, 2000);
        }
      });
    });
  }

  /* ============================================
     UTILITY METHODS
     ============================================ */

  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  calculateReadTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  }

  runSafely(fn, featureName) {
    try {
      fn();
    } catch (error) {
      console.error(`Failed to initialize ${featureName}:`, error);
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new ShaykhAlHasaniApp();
});

/* ============================================
   LAZY LOADING IMAGES
   ============================================ */

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

/* ============================================
   SMOOTH PAGE TRANSITIONS
   ============================================ */

function navigateTo(url) {
  const currentPage = document.body;
  currentPage.style.opacity = '0.7';
  currentPage.style.transform = 'translateY(-10px)';

  setTimeout(() => {
    window.location.href = url;
  }, 300);
}

window.addEventListener('pageshow', () => {
  document.body.style.opacity = '1';
  document.body.style.transform = 'translateY(0)';
});

/* ============================================
   PERFORMANCE OPTIMIZATIONS
   ============================================ */

// Debounce function for scroll/resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for frequent events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/* ============================================
   ACCESSIBILITY ENHANCEMENTS
   ============================================ */

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  // Skip to main content with keyboard shortcut
  if (e.altKey && e.key === 'm') {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Close mobile menu with Escape
  if (e.key === 'Escape') {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      if (menuBtn) menuBtn.textContent = '☰';
    }
  }
});

/* ============================================
   SCROLL TO TOP BUTTON
   ============================================ */

window.addEventListener('scroll', throttle(() => {
  const scrollBtn = document.querySelector('.scroll-to-top');
  if (scrollBtn) {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'flex';
    } else {
      scrollBtn.style.display = 'none';
    }
  }
}, 100));
