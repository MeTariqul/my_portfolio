// Utility: Detect system dark mode
function systemPrefersDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');
if (hamburger && navUl) {
  hamburger.addEventListener('click', () => {
    const expanded = navUl.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', expanded);
    navUl.setAttribute('aria-hidden', !expanded);
  });
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      hamburger.click();
    }
  });
}
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 700 && navUl) navUl.classList.remove('active');
  });
});

// Auto dark mode sync with system
function setDarkMode(enabled) {
  document.body.classList.toggle('dark-mode', enabled);
}
function applySystemTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark' || (!theme && systemPrefersDark())) {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemTheme);
window.addEventListener('DOMContentLoaded', applySystemTheme);

// --- TYPEWRITER EFFECT ---
const typewriterEl = document.getElementById('typewriter');
const typewriterText = 'CSE Student';
function typeWriter(text, el, speed = 90) {
  el.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      el.textContent = text; // Ensure full text
    }
  }
  type();
}
if (typewriterEl) {
  typeWriter(typewriterText, typewriterEl);
}

// --- SCROLL REVEAL ANIMATION (IntersectionObserver) ---
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback for old browsers
    reveals.forEach(el => el.classList.add('visible'));
  }
}
window.addEventListener('DOMContentLoaded', revealOnScroll);

// --- DARK MODE TOGGLE BUTTON ---
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  const icon = darkModeToggle.querySelector('i');
  function updateIcon() {
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
  darkModeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setDarkMode(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcon();
  });
  window.addEventListener('DOMContentLoaded', updateIcon);
  window.addEventListener('storage', updateIcon);
} 
