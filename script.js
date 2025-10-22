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

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth animation loop
    const animateCursor = () => {
        // Smooth interpolation for main cursor
        posX += (mouseX - posX) / 4;
        posY += (mouseY - posY) / 4;
        
        // Apply positions
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        
        cursorFollower.style.left = `${posX}px`;
        cursorFollower.style.top = `${posY}px`;
        
        requestAnimationFrame(animateCursor);
    };
    
    animateCursor();
    
    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-icon');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });
}

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

// Enhanced mouse tracking for hero section
const heroSection = document.querySelector('.hero');
if (heroSection) {
    // Create floating particles
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    heroSection.appendChild(particlesContainer);
    
    // Create floating particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 8 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.opacity = Math.random() * 0.7 + 0.3;
        particlesContainer.appendChild(particle);
    }
    
    // Enhanced mouse move tracking for 3D effect
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    heroSection.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 50;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 50;
    });
    
    // Smooth animation loop
    const animateHero = () => {
        // Smooth interpolation for mouse movement
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;
        
        // Apply 3D transformation to hero content
        const heroContent = document.querySelector('.hero-content');
        heroContent.style.transform = `translateZ(50px) rotateY(${currentX/10}deg) rotateX(${-currentY/10}deg)`;
        
        // Move cube with mouse but with a parallax effect
        const cubeContainer = document.querySelector('.cube-container');
        cubeContainer.style.transform = `rotateX(${-25 + currentY/2}deg) rotateY(${currentX}deg)`;
        
        requestAnimationFrame(animateHero);
    };
    
    animateHero();
    
    // Reset on mouse leave
    heroSection.addEventListener('mouseleave', () => {
        mouseX = 0;
        mouseY = 0;
    });
}

// Add keyframes for floating animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float {
        0% { transform: translateZ(100px); }
        50% { transform: translateZ(120px); }
        100% { transform: translateZ(100px); }
    }
    
    @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0) translateZ(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 0.7; }
        100% { transform: translateY(-100px) translateX(20px) translateZ(20px); opacity: 0; }
    }
    
    .face.front { animation-name: float; }
    .face.back { animation-name: float; animation-delay: 0.2s; }
    .face.right { animation-name: float; animation-delay: 0.4s; }
    .face.left { animation-name: float; animation-delay: 0.6s; }
    .face.top { animation-name: float; animation-delay: 0.8s; }
    .face.bottom { animation-name: float; animation-delay: 1s; }
    
    .particles-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    }
    
    .particle {
        position: absolute;
        background: rgba(108, 99, 255, 0.7);
        border-radius: 50%;
        pointer-events: none;
        animation: floatParticle linear infinite;
        box-shadow: 0 0 10px rgba(108, 99, 255, 0.5);
    }
`;
document.head.appendChild(style);