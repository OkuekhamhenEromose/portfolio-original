
document.addEventListener('DOMContentLoaded', function() {

  ScrollReveal({ 
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400
      });
      ScrollReveal().reveal('header', { delay: 500, origin: 'top' });
      ScrollReveal().reveal('.home-content', { delay: 500, origin: 'left', });
      ScrollReveal().reveal('.home-content .hero-buttons', { delay: 700, origin: 'left', });
      ScrollReveal().reveal('.home_description', { delay: 900, origin: 'left' });
      ScrollReveal().reveal('.home-img', { delay: 500, origin: 'right' });
      ScrollReveal().reveal('.home_form', { delay: 1200, origin: 'left' });
      ScrollReveal().reveal('.section-title', { delay: 500, origin: 'top' });
      ScrollReveal().reveal('.about-image', { delay: 500, origin: 'left' });
      ScrollReveal().reveal('.about-content h3, .about-content p', { delay: 500, origin: 'right' });
      ScrollReveal().reveal('.highlight-item', { delay: 500, origin: 'bottom', interval: 200 });
      ScrollReveal().reveal('.info-cards .info-card', { delay: 500, origin: 'bottom', interval: 300 });
      ScrollReveal().reveal('.filter-btn', { delay: 500, origin: 'right', interval: 300 });
      
      ScrollReveal().reveal('.col1', { delay: 500, origin: 'left', interval: 300 });
      ScrollReveal().reveal('.col2', { delay: 500, origin: 'right',});
      ScrollReveal().reveal('.learning-section h3, .contact-form-section h3', { delay: 500, origin: 'top',});
      ScrollReveal().reveal('.learning-item', { delay: 500, origin: 'left', interval: 300 });
      ScrollReveal().reveal('.form-group', { delay: 500, origin: 'right',});
      ScrollReveal().reveal('.btn-contact-info button', { delay: 500, origin: 'bottom', interval: 200 });
      ScrollReveal().reveal('.contact-item', { delay: 500, origin: 'bottom', interval: 200 });

  const navToggleBtn = document.querySelector('.nav-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  const themeToggle = document.getElementById('theme-toggle');
  
  // Toggle mobile menu
  navToggleBtn.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
    
    // Toggle body overflow when menu is open
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close menu when a nav link is clicked (for mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 992) { // Only for mobile view
        navMenu.classList.remove('active');
        navToggleBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Theme toggle functionality
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      const icon = themeToggle.querySelector('i');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (window.innerWidth <= 992) { // Only for mobile view
      const isClickInsideNav = navMenu.contains(event.target) || navToggleBtn.contains(event.target);
      if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggleBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  
  
  // Typing animation
  const typed = new Typed('.typing', {
    strings: ['Full Stack Developer', 'UI/UX Designer', 'Tech Enthusiast'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Accordion functionality for education/experience section
  
  const accordionItems = document.querySelectorAll('.accordian-item-inner');

accordionItems.forEach(item => {
  const button = item.querySelector('.accordian-item-button');
  const body = item.querySelector('.accordian-item-body');

  button.addEventListener('click', () => {
    // Toggle active class on the item
    item.classList.toggle('active');

    // Toggle the body visibility
    if (item.classList.contains('active')) {
      body.style.maxHeight = `${body.scrollHeight}px`; // Set to content's full height
      body.style.padding = '1rem'; // Match CSS open state padding
    } else {
      body.style.maxHeight = '0'; // Collapse the body
      body.style.padding = '0 1rem'; // Match CSS closed state padding
    }
  });
});
  
  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.getElementById('projects-grid');
  
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A full-featured online store with payment integration",
      tags: ["frontend"],
      image: "images/portfolio-img.png"
    },
    {
      id: 2,
      title: "Listings App",
      description: "A full-featured online store with payment integration",
      tags: ["backend"],
      image: "images/insomnia1.png"
    },
    {
      id: 3,
      title: "Real Estate Website",
      description: "A responsive portfolio site with animations",
      tags: ["frontend"],
      image: "images/realestate-img.png"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A productivity app with real-time updates",
      tags: ["frontend"],
      image: "images/frontendportfolio.png"
    },
    {
      id: 5,
      title: "Resume Builder",
      description: "A 2D browser-based game with JavaScript",
      tags: ["backend"],
      image: "images/insomnia2.png"
    },
    {
      id: 6,
      title: "Bricddle Gameks & Pa",
      description: "A 2D browser-based game with JavaScript",
      tags: ["games"],
      image: "images/breakout-img.png"
    }
  ];
  
  // Render projects
  // Update your renderProjects function to this:
function renderProjects(filter = 'all') {
  projectsGrid.innerHTML = '';
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
  filteredProjects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-links">
          <a href="#" class="btn">View Demo</a>
          <a href="#" class="btn">GitHub Repo</a>
        </div>
      </div>
    `;
    projectsGrid.appendChild(projectCard);
  });
  
  // Add ScrollReveal animation for projects
  ScrollReveal().reveal('.project-card', { 
    delay: 300,
    origin: 'bottom',
    interval: 200,
    distance: '20px'
  });
}

  renderProjects();
  
  // Filter button event listeners
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get filter value and render projects
      const filter = button.dataset.filter;
      renderProjects(filter);
    });
  });
  
  // Form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = this.elements['name'].value;
      const email = this.elements['email'].value;
      const message = this.elements['message'].value;
      
      // Here you would typically send the form data to a server
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset form
      this.reset();
    });
  }
});

