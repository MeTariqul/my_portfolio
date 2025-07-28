// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    hamburger.classList.toggle('active');
    if (hamburger.classList.contains('active')) {
      hamburger.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      hamburger.children[1].style.opacity = '0';
      hamburger.children[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      hamburger.children[0].style.transform = 'none';
      hamburger.children[1].style.opacity = '1';
      hamburger.children[2].style.transform = 'none';
    }
  });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (navMenu && navMenu.classList.contains('active') && !e.target.closest('nav') && !e.target.closest('.hamburger')) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.children[0].style.transform = 'none';
    hamburger.children[1].style.opacity = '1';
    hamburger.children[2].style.transform = 'none';
  }
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

// Check for saved theme preference or use system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
let currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
  document.body.classList.add('dark-mode');
  if (darkModeIcon) darkModeIcon.className = 'fas fa-sun';
} else {
  document.body.classList.remove('dark-mode');
  if (darkModeIcon) darkModeIcon.className = 'fas fa-moon';
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      if (darkModeIcon) darkModeIcon.className = 'fas fa-sun';
    } else {
      localStorage.setItem('theme', 'light');
      if (darkModeIcon) darkModeIcon.className = 'fas fa-moon';
    }
    
    // Add animation to the toggle button
    darkModeToggle.classList.add('rotate-animation');
    setTimeout(() => {
      darkModeToggle.classList.remove('rotate-animation');
    }, 500);
  });
}

// Typewriter effect
const typewriterElement = document.querySelector('.typewriter');
if (typewriterElement) {
  const text = typewriterElement.textContent;
  typewriterElement.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      typewriterElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  // Start the typewriter effect after a short delay
  setTimeout(typeWriter, 1000);
}

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
};

// Initial check on page load
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Close mobile menu if open
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.children[0].style.transform = 'none';
      hamburger.children[1].style.opacity = '1';
      hamburger.children[2].style.transform = 'none';
    }
    
    // Only prevent default if not the toggle button
    if (!this.classList.contains('toggle-btn')) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    }
  });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  
  // Get all sections
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to current section link
      const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Add CSS class for rotate animation
const style = document.createElement('style');
style.textContent = `
  .rotate-animation {
    animation: rotate 0.5s ease-in-out;
  }
  @keyframes rotate {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
  nav a.active {
    color: #facc15 !important;
  }
  nav a.active::after {
    width: 100% !important;
    background: #facc15 !important;
  }
`;
document.head.appendChild(style);
