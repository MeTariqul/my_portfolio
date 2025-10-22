// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);
});

// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}));

// Sticky Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 100);
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Project Card 3D Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;
        
        const rotateY = mouseX / 20;
        const rotateX = -mouseY / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Skill Icon 3D Effect
const skillIcons = document.querySelectorAll('.skill-icon');

skillIcons.forEach(icon => {
    icon.addEventListener('mousemove', (e) => {
        const iconRect = icon.getBoundingClientRect();
        const iconCenterX = iconRect.left + iconRect.width / 2;
        const iconCenterY = iconRect.top + iconRect.height / 2;
        
        const mouseX = e.clientX - iconCenterX;
        const mouseY = e.clientY - iconCenterY;
        
        const rotateY = mouseX / 10;
        const rotateX = -mouseY / 10;
        
        icon.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'perspective(500px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Glitch Effect for Name
const glitchText = document.querySelector('.glitch-effect');
if (glitchText) {
    glitchText.setAttribute('data-text', glitchText.textContent);
}

// Form Submission
const contactForm = document.getElementById('messageForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // In a real application, you would send this data to a server
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
        // Reset form
        this.reset();
    });
}

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.stat-box, .skill-icon, .project-card, .btn');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) translateZ(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.stat-box, .skill-icon, .project-card, .btn').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px) translateZ(0)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Trigger animations on scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Cube Rotation Speed Control
const cube = document.querySelector('.cube');
if (cube) {
    let rotationSpeed = 15; // seconds for full rotation
    let isPaused = false;
    
    // Pause rotation on hover
    cube.addEventListener('mouseenter', () => {
        isPaused = true;
        cube.parentElement.style.animationPlayState = 'paused';
    });
    
    cube.addEventListener('mouseleave', () => {
        isPaused = false;
        cube.parentElement.style.animationPlayState = 'running';
    });
    
    // Speed control with mouse wheel
    cube.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            // Scroll up - increase speed
            rotationSpeed = Math.max(2, rotationSpeed - 2);
        } else {
            // Scroll down - decrease speed
            rotationSpeed = Math.min(30, rotationSpeed + 2);
        }
        
        cube.parentElement.style.animationDuration = `${rotationSpeed}s`;
    });
}

// Add 3D tilt effect to hero section
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        heroSection.style.background = `radial-gradient(circle at center, #1a1a2e 0%, #0f0f1b 100%)`;
        heroSection.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    heroSection.addEventListener('mouseleave', () => {
        heroSection.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });
}

// Add floating animation to cube faces
const cubeFaces = document.querySelectorAll('.face');
cubeFaces.forEach((face, index) => {
    // Add unique animation delay to each face
    face.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
});

// Add keyframes for floating animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float {
        0% { transform: translateZ(100px); }
        50% { transform: translateZ(120px); }
        100% { transform: translateZ(100px); }
    }
    
    .face.front { animation-name: float; }
    .face.back { animation-name: float; animation-delay: 0.2s; }
    .face.right { animation-name: float; animation-delay: 0.4s; }
    .face.left { animation-name: float; animation-delay: 0.6s; }
    .face.top { animation-name: float; animation-delay: 0.8s; }
    .face.bottom { animation-name: float; animation-delay: 1s; }
`;
document.head.appendChild(style);