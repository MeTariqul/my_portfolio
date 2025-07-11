# MD Tariqul Islam | Portfolio Webpage

A modern, responsive personal portfolio website to showcase the work, skills, and projects of MD Tariqul Islam, a Computer Science & Engineering student passionate about technology and creative problem-solving.

---

## 🌟 Features

- **Responsive Design:** Adapts to all devices (desktop, tablet, mobile)
- **Animated Navigation:** Sticky header with animated gradient, accessible hamburger menu for mobile
- **Hero Section:** Profile image, animated typewriter effect, and quick contact links
- **Dark/Light Mode Toggle:** Instantly switch between dark and light themes with a mode-changing button
- **About Me:** Brief introduction and background
- **Projects Showcase:** Highlights key projects with links and descriptions
- **Contact Section:** Email, LinkedIn, GitHub, and phone number
- **Smooth Animations:** Scroll reveal effects for engaging user experience
- **Accessibility:** Keyboard navigation, ARIA labels, and focus styles

---

## 📂 Project Structure & File Details

```
My portfolio webpage/
├── index.html      # Main HTML file (site structure & content)
├── style.css       # Stylesheet for layout, design, dark mode, and responsiveness
├── script.js       # JavaScript for interactivity (menu, dark mode, typewriter, animations)
└── README.md       # Project documentation (this file)
```

### index.html
- **Header:**
  - Logo and navigation bar with links to Home, About, Projects, and Contact sections
  - Hamburger menu for mobile navigation
  - Dark mode toggle button (moon/sun icon)
- **Main:**
  - **Hero Section:**
    - Profile image, animated typewriter effect, welcome message, and quick contact icons (email, LinkedIn, GitHub, phone)
  - **Cards Section:**
    - About Me: Personal introduction
    - Projects: List of featured projects with descriptions and links
    - Contact: List of contact methods with icons and links
- **Footer:**
  - Contact email and copyright

### style.css
- **Base Styles:** Font, color, background gradient, box-sizing, and smooth scrolling
- **Header & Navigation:**
  - Animated gradient background, sticky positioning, and shadow
  - Flexbox layout for logo and navigation
  - Navigation links styled for clarity and accessibility
  - Hamburger menu hidden on desktop, shown on mobile
  - Dark mode and hover/focus styles for all elements
- **Hero Section:**
  - Centered layout, profile image with border and shadow, animated background overlay
  - Typewriter effect styling, welcome message, and contact links
- **Cards Section:**
  - Glassmorphism effect, responsive flex layout, card icons, and hover effects
- **Footer:**
  - Gradient background, responsive text, and accessible links
- **Media Queries:** Responsive adjustments for tablets and mobile devices
- **Accessibility:** Focus styles, color contrast, and ARIA support

### script.js
- **Navigation:**
  - Hamburger menu toggles navigation on mobile
  - Closes menu when a link is clicked (on mobile)
- **Dark/Light Mode:**
  - Toggle button switches between dark and light themes
  - Remembers user preference in localStorage
  - Syncs with system theme changes
  - Updates icon (moon/sun) to reflect current mode
- **Typewriter Effect:**
  - Animates the subtitle in the hero section
- **Scroll Reveal Animation:**
  - Uses IntersectionObserver for smooth section reveal on scroll
- **Accessibility:**
  - Keyboard navigation for hamburger menu
  - ARIA attributes for navigation and toggle buttons

### README.md
- This documentation file, describing the project, structure, features, and usage

---

## ⚡ Setup & Usage

1. **Clone or Download** this repository.
2. Open `index.html` in your web browser.
3. (Optional) Deploy to GitHub Pages or any static hosting for public access.

No build tools or dependencies required—just open and go!

---

## 📝 Customization

- Update your name, profile image, and contact info in `index.html`.
- Add or edit projects in the Projects section.
- Adjust styles in `style.css` as desired (colors, fonts, layout, etc).
- Modify or extend JavaScript in `script.js` for new features.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3** (gradients, glassmorphism, responsive layouts, dark mode)
- **JavaScript** (interactivity, dark mode, typewriter, scroll animations)
- **Font Awesome** (icons)
- **Google Fonts** (Roboto, Montserrat)

---

## 📧 Contact

- **Email:** tarif_me@outlook.com
- **LinkedIn:** metariqul
- **GitHub:** MeTariqul
- **Phone:** +8801629866954

---

© 2024 MD Tariqul Islam. All rights reserved.