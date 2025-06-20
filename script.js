// // Theme Management
// // const typed = new Typed('.multiple-text')
// // var typed = new Typed('.typing', {
// //   strings: ['Youtuber', 'Freelancer', 'Blogger', 'Desginer'],
// //   typeSpeed: 100,
// //   backSpeed: 60,
// //   loop: true,
// // });
// class ThemeManager {
//   constructor() {
//     this.theme = localStorage.getItem('theme') || 'light';
//     this.init();
//   }

//   init() {
//     this.setTheme(this.theme);
//     this.bindEvents();
//   }

//   setTheme(theme) {
//     this.theme = theme;
//     document.documentElement.setAttribute('data-theme', theme);
//     localStorage.setItem('theme', theme);
    
//     const themeToggle = document.getElementById('theme-toggle');
//     const icon = themeToggle.querySelector('i');
    
//     if (theme === 'dark') {
//       icon.className = 'fas fa-sun';
//     } else {
//       icon.className = 'fas fa-moon';
//     }
//   }

//   toggle() {
//     const newTheme = this.theme === 'light' ? 'dark' : 'light';
//     this.setTheme(newTheme);
//   }

//   bindEvents() {
//     const themeToggle = document.getElementById('theme-toggle');
//     themeToggle.addEventListener('click', () => this.toggle());
//   }
// }

// // Navigation Management
// class NavigationManager {
//   constructor() {
//     this.navbar = document.getElementById('navbar');
//     this.navLinks = document.querySelectorAll('.nav-link');
//     this.sections = document.querySelectorAll('section');
//     this.init();
//   }

//   init() {
//     this.bindEvents();
//     this.handleScroll();
//   }

//   bindEvents() {
//     window.addEventListener('scroll', () => this.handleScroll());
    
//     // Smooth scroll for navigation links
//     this.navLinks.forEach(link => {
//       link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href');
//         const targetSection = document.querySelector(targetId);
        
//         if (targetSection) {
//           const offsetTop = targetSection.offsetTop - 80;
//           window.scrollTo({
//             top: offsetTop,
//             behavior: 'smooth'
//           });
//         }
//       });
//     });
//   }

//   handleScroll() {
//     const scrollTop = window.pageYOffset;
    
//     // Add blur effect to navbar
//     if (scrollTop > 100) {
//       this.navbar.classList.add('scrolled');
//     } else {
//       this.navbar.classList.remove('scrolled');
//     }

//     // Update active navigation link
//     this.updateActiveLink();
//   }

//   updateActiveLink() {
//     const scrollTop = window.pageYOffset + 100;

//     this.sections.forEach(section => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       const sectionId = section.getAttribute('id');

//       if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
//         this.navLinks.forEach(link => {
//           link.classList.remove('active');
//           if (link.getAttribute('href') === `#${sectionId}`) {
//             link.classList.add('active');
//           }
//         });
//       }
//     });
//   }
// }

// // Skills Animation
// class SkillsAnimator {
//   constructor() {
//     this.skillsTrack = document.getElementById('skills-track');
//     this.init();
//   }

//   init() {
//     this.duplicateSkills();
//   }

//   duplicateSkills() {
//     const skills = this.skillsTrack.innerHTML;
//     this.skillsTrack.innerHTML = skills + skills;
//   }
// }

// // Projects Manager
// class ProjectsManager {
//   constructor() {
//     this.projectsGrid = document.getElementById('projects-grid');
//     this.filterButtons = document.querySelectorAll('.filter-btn');
//     this.projects = [
//       {
//         title: 'E-Commerce Platform',
//         description: 'Full-featured online store with payment integration and admin dashboard.',
//         category: 'webapps',
//         tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//         icon: 'fas fa-shopping-cart',
//         demoUrl: '#',
//         sourceUrl: '#'
//       },
//       {
//         title: 'Task Management App',
//         description: 'Collaborative project management tool with real-time updates.',
//         category: 'webapps',
//         tags: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
//         icon: 'fas fa-tasks',
//         demoUrl: '#',
//         sourceUrl: '#'
//       },
//       {
//         title: 'Weather Mobile App',
//         description: 'Cross-platform weather app with location services and forecasts.',
//         category: 'mobile',
//         tags: ['React Native', 'API Integration', 'Geolocation'],
//         icon: 'fas fa-cloud-sun',
//         demoUrl: '#',
//         sourceUrl: '#'
//       },
//       {
//         title: 'Fitness Tracker',
//         description: 'Mobile app for tracking workouts and health metrics.',
//         category: 'mobile',
//         tags: ['Flutter', 'Firebase', 'Health APIs'],
//         icon: 'fas fa-dumbbell',
//         demoUrl: '#',
//         sourceUrl: '#'
//       },
//       {
//         title: 'REST API Service',
//         description: 'Scalable microservices architecture with authentication and caching.',
//         category: 'backend',
//         tags: ['Node.js', 'Docker', 'Redis', 'JWT'],
//         icon: 'fas fa-server',
//         demoUrl: '#',
//         sourceUrl: '#'
//       },
//       {
//         title: 'GraphQL Gateway',
//         description: 'GraphQL API gateway aggregating multiple microservices.',
//         category: 'backend',
//         tags: ['GraphQL', 'Apollo', 'Microservices'],
//         icon: 'fas fa-sitemap',
//         demoUrl: '#',
//         sourceUrl: '#'
//       },
//       {
//         title: 'Puzzle Game',
//         description: 'HTML5 canvas-based puzzle game with progressive difficulty.',
//         category: 'games',
//         tags: ['JavaScript', 'HTML5 Canvas', 'WebGL'],
//         icon: 'fas fa-puzzle-piece',
//         demoUrl: '#',
//         sourceUrl: '#'
//       },
//       {
//         title: '2D Platformer',
//         description: 'Side-scrolling platformer game built with modern web technologies.',
//         category: 'games',
//         tags: ['Phaser.js', 'WebGL', 'Web Audio'],
//         icon: 'fas fa-gamepad',
//         demoUrl: '#',
//         sourceUrl: '#'
//       }
//     ];
//     this.init();
//   }

//   init() {
//     this.renderProjects('all');
//     this.bindEvents();
//   }

//   bindEvents() {
//     this.filterButtons.forEach(button => {
//       button.addEventListener('click', (e) => {
//         const filter = e.target.getAttribute('data-filter');
        
//         // Update active button
//         this.filterButtons.forEach(btn => btn.classList.remove('active'));
//         e.target.classList.add('active');
        
//         // Filter projects
//         this.renderProjects(filter);
//       });
//     });
//   }

//   renderProjects(filter) {
//     const filteredProjects = filter === 'all' 
//       ? this.projects 
//       : this.projects.filter(project => project.category === filter);

//     this.projectsGrid.innerHTML = filteredProjects.map(project => `
//       <div class="project-card" data-category="${project.category}">
//         <div class="project-image">
//           <i class="${project.icon}"></i>
//         </div>
//         <div class="project-content">
//           <h3 class="project-title">${project.title}</h3>
//           <p class="project-description">${project.description}</p>
//           <div class="project-tags">
//             ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
//           </div>
//           <div class="project-links">
//             <a href="${project.demoUrl}" class="project-link primary" target="_blank">
//               <i class="fas fa-external-link-alt"></i> Demo
//             </a>
//             <a href="${project.sourceUrl}" class="project-link secondary" target="_blank">
//               <i class="fab fa-github"></i> Code
//             </a>
//           </div>
//         </div>
//       </div>
//     `).join('');

//     // Animate cards
//     this.animateCards();
//   }

//   animateCards() {
//     const cards = this.projectsGrid.querySelectorAll('.project-card');
//     cards.forEach((card, index) => {
//       card.style.opacity = '0';
//       card.style.transform = 'translateY(30px)';
      
//       setTimeout(() => {
//         card.style.transition = 'all 0.6s ease';
//         card.style.opacity = '1';
//         card.style.transform = 'translateY(0)';
//       }, index * 100);
//     });
//   }
// }

// // Contact Form Manager
// class ContactFormManager {
//   constructor() {
//     this.form = document.getElementById('contact-form');
//     this.init();
//   }

//   init() {
//     this.bindEvents();
//   }

//   bindEvents() {
//     this.form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       this.handleSubmit(e);
//     });
//   }

//   async handleSubmit(e) {
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData);
    
//     // Show loading state
//     const submitBtn = this.form.querySelector('button[type="submit"]');
//     const originalText = submitBtn.textContent;
//     submitBtn.textContent = 'Sending...';
//     submitBtn.disabled = true;

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       // Show success message
//       this.showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
//       this.form.reset();
//     } catch (error) {
//       this.showMessage('Failed to send message. Please try again.', 'error');
//     } finally {
//       submitBtn.textContent = originalText;
//       submitBtn.disabled = false;
//     }
//   }

//   showMessage(message, type) {
//     // Create and show toast message
//     const toast = document.createElement('div');
//     toast.className = `toast toast-${type}`;
//     toast.textContent = message;
//     toast.style.cssText = `
//       position: fixed;
//       top: 20px;
//       right: 20px;
//       padding: 1rem 2rem;
//       border-radius: 0.5rem;
//       color: white;
//       font-weight: 500;
//       z-index: 10000;
//       transform: translateX(100%);
//       transition: transform 0.3s ease;
//       ${type === 'success' ? 'background: var(--color-success);' : 'background: var(--color-error);'}
//     `;

//     document.body.appendChild(toast);

//     // Animate in
//     setTimeout(() => {
//       toast.style.transform = 'translateX(0)';
//     }, 100);

//     // Remove after delay
//     setTimeout(() => {
//       toast.style.transform = 'translateX(100%)';
//       setTimeout(() => {
//         document.body.removeChild(toast);
//       }, 300);
//     }, 3000);
//   }
// }

// // Scroll Animations
// class ScrollAnimator {
//   constructor() {
//     this.observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50px 0px'
//     };
//     this.init();
//   }

//   init() {
//     this.setupObserver();
//     this.addAnimationClasses();
//   }

//   setupObserver() {
//     this.observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         }
//       });
//     }, this.observerOptions);
//   }

//   addAnimationClasses() {
//     // Add animation classes to elements
//     const animatedElements = [
//       { selector: '.info-card', animation: 'fade-in' },
//       { selector: '.about-content', animation: 'slide-in-right' },
//       { selector: '.about-image', animation: 'slide-in-left' },
//       { selector: '.timeline-item', animation: 'fade-in' },
//       { selector: '.learning-item', animation: 'slide-in-left' },
//       { selector: '.contact-form', animation: 'slide-in-right' }
//     ];

//     animatedElements.forEach(({ selector, animation }) => {
//       const elements = document.querySelectorAll(selector);
//       elements.forEach((element, index) => {
//         element.classList.add(animation);
//         element.style.transitionDelay = `${index * 0.1}s`;
//         this.observer.observe(element);
//       });
//     });
//   }
// }

// // App Initialization
// class App {
//   constructor() {
//     this.init();
//   }

//   init() {
//     // Initialize all managers
//     this.themeManager = new ThemeManager();
//     this.navigationManager = new NavigationManager();
//     this.skillsAnimator = new SkillsAnimator();
//     this.projectsManager = new ProjectsManager();
//     this.contactFormManager = new ContactFormManager();
//     this.scrollAnimator = new ScrollAnimator();

//     // Add smooth scrolling to all internal links
//     this.setupSmoothScrolling();
    
//     console.log('Portfolio loaded successfully! 🚀');
//   }

//   setupSmoothScrolling() {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);
        
//         if (targetElement) {
//           const offsetTop = targetElement.offsetTop - 80;
//           window.scrollTo({
//             top: offsetTop,
//             behavior: 'smooth'
//           });
//         }
//       });
//     });
//   }
// }

// // Initialize app when DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//   new App();
// });
// var typed = new Typed('.typing', {
//   strings: ['Youtuber', 'Freelancer', 'Blogger', 'Designer'],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true,
// });

// // Add some easter eggs for fun
// console.log(`
//   ╔══════════════════════════════════════╗
//   ║                                      ║
//   ║        Welcome to my Portfolio!      ║
//   ║                                      ║
//   ║     Built with ❤️ using Vanilla JS    ║
//   ║                                      ║
//   ╚══════════════════════════════════════╝
// `);

function initializeTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const sunIcon = 'fa-sun';
  const moonIcon = 'fa-moon';

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme, body, themeToggle, sunIcon, moonIcon);

  // Add event listener for theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', () =>
      toggleTheme(body, themeToggle, sunIcon, moonIcon)
    );
  }
}

function setTheme(theme, body, themeToggle, sunIcon, moonIcon) {
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateIcon(theme, themeToggle, sunIcon, moonIcon);
}

function toggleTheme(body, themeToggle, sunIcon, moonIcon) {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme, body, themeToggle, sunIcon, moonIcon);
}

function updateIcon(theme, themeToggle, sunIcon, moonIcon) {
  const icon = theme === 'dark' ? sunIcon : moonIcon;
  themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
  themeToggle.style.color = theme === 'dark' ? '#ff9900' : '';
}

function initializeHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
}

function initializeTyped() {
  if (typeof Typed !== 'undefined') {
    new Typed('.typing', {
      strings: ['FullStack Developer', 'Web Designer', 'Problem Solver'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }
}

function initializeApp() {
  document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeHamburgerMenu();
    initializeTyped();
  });
}

// Start the application
initializeApp();