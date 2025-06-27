
document.addEventListener('DOMContentLoaded', () => {
  // Theme Initialization
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

  // Header Scroll Behavior
  const header = document.querySelector('.header');
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.home');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header.classList.add('scrolled');
          navbar.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
          navbar.classList.remove('scrolled');
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '-80px 0px 0px 0px'
    }
  );

  if (heroSection) {
    observer.observe(heroSection);
  }

  // Typing Effect Initialization
  if (typeof Typed !== 'undefined') {
    new Typed('.typing', {
      strings: ['FullStack Developer', 'Web Designer', 'Problem Solver'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      cursorChar: '|',
      smartBackspace: true
    });
  } else {
    console.warn('Typed.js library is not loaded. Please include it via CDN or local file.');
    // Fallback: Display static text if Typed.js is not available
    document.querySelector('.typing').textContent = 'FullStack Developer';
  }

  // Project Data and Rendering
  const projectsData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with cart and payment processing.',
      category: 'webapps',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'images/33246-JavaScript-minified-computer-code-CSS-syntax_highlighting-HTML-minimalism-748x455.jpg'
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'Mobile application for managing daily tasks with notifications.',
      category: 'mobile',
      tags: ['Flutter', 'Firebase'],
      image: 'images/images.jpg'
    },
    {
      id: 3,
      title: 'API Service',
      description: 'RESTful API backend for data processing.',
      category: 'backend',
      tags: ['Express', 'PostgreSQL'],
      image: 'images/images.jpg'
    },
    {
      id: 4,
      title: 'Space Adventure Game',
      description: '2D browser-based game with physics engine.',
      category: 'games',
      tags: ['JavaScript', 'Canvas'],
      image: 'images/IMG_9910.JPG'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive personal portfolio website.',
      category: 'webapps',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'images/linkedIn profile img.jpg'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts and nutrition.',
      category: 'mobile',
      tags: ['React Native', 'GraphQL'],
      image: 'images/linkedIn profile img.jpg'
    }
  ];

  const projectsGrid = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  let activeFilter = 'all';

  renderProjects(projectsData);

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const filteredProjects = filterProjects(projectsData, activeFilter);
      renderProjects(filteredProjects);
    });
  });

  function filterProjects(projects, filter) {
    if (filter === 'all') return projects;
    return projects.filter((project) => project.category === filter);
  }

  function renderProjects(projects) {
    const currentProjects = projectsGrid.querySelectorAll('.project-card');
    currentProjects.forEach((project) => {
      project.classList.add('hidden');
    });

    setTimeout(() => {
      projectsGrid.innerHTML = '';
      projects.forEach((project) => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
        setTimeout(() => {
          projectCard.classList.remove('hidden');
        }, 50 * project.id);
      });
    }, 300);
  }

  function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card hidden';
    card.dataset.category = project.category;

    const imageHTML = project.image
      ? `<img src="${project.image}" alt="${project.title}" class="project-image">`
      : '<div class="no-image">No Image Available</div>';

    card.innerHTML = `
      <div class="image-container">${imageHTML}</div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="#" class="project-link primary">View Demo</a>
          <a href="#" class="project-link secondary">Source Code</a>
        </div>
      </div>
    `;

    return card;
  }

  const accordianItems = document.querySelectorAll(".accordian-item-inner")

accordianItems.forEach(element =>{
    element.addEventListener("click", ()=>{
        element.classList.toggle("active")
        if (element.classList.contains("active")) {
            element.lastElementChild.style.maxHeight = element.lastElementChild.scrollHeight + "px"
        }else{
            element.lastElementChild.style.maxHeight = "0px"
        }
    })
})
});