// Supabase Configuration
const SUPABASE_URL = 'https://cplumkztiwgxltcmvmqf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwbHVta3p0aXdneGx0Y212bXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyODkzNzMsImV4cCI6MjA3ODg2NTM3M30.VyGGDarSSXqwE4QitqZGfmD_FoMguIWSTinjKqNa70c';

// Simple Supabase client using fetch
async function fetchFromSupabase(endpoint) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${endpoint}`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching from Supabase:', error);
    return null;
  }
}

// Navigation Toggle with Three Dot Menu
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close menu when clicking on a link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// Load Projects from Supabase
async function loadProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  const projects = await fetchFromSupabase('projects?order=order.asc');

  if (projects && projects.length > 0) {
    const gradients = [
      'linear-gradient(135deg, rgba(135, 186, 195, 0.3), rgba(83, 98, 158, 0.3))',
      'linear-gradient(135deg, rgba(83, 98, 158, 0.3), rgba(71, 52, 114, 0.3))',
      'linear-gradient(135deg, rgba(71, 52, 114, 0.3), rgba(135, 186, 195, 0.3))'
    ];

    projectsGrid.innerHTML = projects.map((project, index) => {
      const gradientClass = gradients[index % gradients.length];
      const backgroundImage = project.image_url || project.thumbnail || project.cover_image
        ? `url(${project.image_url || project.thumbnail || project.cover_image})`
        : gradientClass;

      return `
      <div class="project-card">
        <a href="project-detail.html?id=${project.id}" class="project-link">
          <div class="project-image" style="background-image: ${backgroundImage}">
            <div class="project-overlay">
              <div class="project-actions">
                <button class="project-action-btn" aria-label="View code">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 22v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v4"/><path d="m6 9 6 6 6-6"/><path d="M18 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"/>
                  </svg>
                </button>
                <button class="project-action-btn" aria-label="View live">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </a>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${(project.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
    }).join('');
  }
}

// Load Testimonials from Supabase
async function loadTestimonials() {
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  if (!testimonialsGrid) return;

  const testimonials = await fetchFromSupabase('testimonials?order=order.asc');
  
  if (testimonials && testimonials.length > 0) {
    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
      <div class="testimonial-card">
        <div class="testimonial-stars">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
        <p class="testimonial-text">"${testimonial.content}"</p>
        <div class="testimonial-author">
          <div class="author-avatar">${testimonial.author.split(' ').map(n => n[0]).join('').toUpperCase()}</div>
          <div class="author-info">
            <p class="author-name">${testimonial.author}</p>
            <p class="author-role">${testimonial.role}</p>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Load Blog Posts from Supabase
async function loadBlogPosts() {
  const blogGrid = document.getElementById('blogGrid');
  if (!blogGrid) return;

  const articles = await fetchFromSupabase('articles?published=eq.true&order=published_at.desc');

  if (articles && articles.length > 0) {
    blogGrid.innerHTML = articles.map(article => {
      const date = article.published_at ? new Date(article.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : 'Recent';

      const articleUrl = `article-detail.html?slug=${article.slug}`;
      
      // Use article image or gradient fallback
      const backgroundImage = article.cover_image || article.thumbnail || article.image_url
        ? `url(${article.cover_image || article.thumbnail || article.image_url})`
        : 'linear-gradient(135deg, rgba(135, 186, 195, 0.2), rgba(83, 98, 158, 0.2))';

      return `
        <div class="blog-card">
          <a href="${articleUrl}" class="blog-link">
            <div class="blog-image" style="background-image: ${backgroundImage}"></div>
            <div class="blog-content">
              <h3 class="blog-title">${article.title}</h3>
              <p class="blog-excerpt">${article.excerpt}</p>
              <div class="blog-meta">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                ${date}
              </div>
              <a href="${articleUrl}" class="read-more">Read Article →</a>
            </div>
          </a>
        </div>
      `;
    }).join('');
  }
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    console.log('Contact form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Initialize - Load data from Supabase
document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  loadTestimonials();
  loadBlogPosts();
});
