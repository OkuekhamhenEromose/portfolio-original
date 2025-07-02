
// Theme Toggle Functionality
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
  // Theme toggle elements
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  
  // Apply saved theme or default to light
  if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    htmlElement.removeAttribute('data-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
  
  // Theme toggle click handler
  themeToggle.addEventListener('click', function() {
    if (htmlElement.getAttribute('data-theme') === 'dark') {
      // Switch to light theme
      htmlElement.removeAttribute('data-theme');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark theme
      htmlElement.setAttribute('data-theme', 'dark');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
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
        body.style.maxHeight = body.scrollHeight + 'px';
        body.style.padding = '1.5rem 1rem';
      } else {
        body.style.maxHeight = '0';
        body.style.padding = '0';
      }
      
      // Close other accordion items in the same column
      const parentColumn = item.closest('.col');
      parentColumn.querySelectorAll('.accordian-item-inner').forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordian-item-body').style.maxHeight = '0';
          otherItem.querySelector('.accordian-item-body').style.padding = '0';
        }
      });
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
      tags: ["backend"],
      image: ""
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
          <img src="${project.image}" alt="${project.title}">
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
  }
  // <div class="project-tags">
  //           ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
  //         </div> === NOT NEEDED AFTER project.description
  
  // Initial render
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