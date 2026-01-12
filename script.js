// ============================================
// GLOBAL DATA
// ============================================
const products = [
  {
    id: '1',
    name: 'Sac "La Rénovée"',
    category: 'mode',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    materials: ['Wax récupéré', 'Denim'],
    tag: 'Upcycled',
  },
  {
    id: '2',
    name: 'Table basse "Renaissance"',
    category: 'mobilier',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    materials: ['Bois récupéré', 'Métal'],
    tag: 'Upcycled',
  },
  {
    id: '3',
    name: 'Sculpture "Métamorphose"',
    category: 'decor',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    materials: ['Métal', 'Plastique'],
    tag: 'Upcycled',
  },
  {
    id: '4',
    name: 'Veste patchwork',
    category: 'mode',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    materials: ['Tissus récupérés'],
    tag: 'Upcycled',
  },
  {
    id: '5',
    name: 'Chaise "Élégance"',
    category: 'mobilier',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
    materials: ['Bois récupéré', 'Tissu'],
    tag: 'Upcycled',
  },
  {
    id: '6',
    name: 'Luminaire "Éclat"',
    category: 'decor',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
    materials: ['Métal', 'Verre'],
    tag: 'Upcycled',
  },
];

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ============================================
// HERO CAROUSEL
// ============================================
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-nav-prev');
  const nextBtn = document.querySelector('.hero-nav-next');
  
  if (slides.length === 0) return;

  let currentSlide = 0;
  let autoSlideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function goToSlide(index) {
    showSlide(index);
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 6000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });

  startAutoSlide();
}

// ============================================
// ANIMATED COUNTERS
// ============================================
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '-100px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        animateCounter(entry.target);
        entry.target.dataset.animated = 'true';
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target) || 0;
  const suffix = element.dataset.suffix || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(easeOutQuart * target);
    
    element.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ============================================
// PRODUCTS FILTER
// ============================================
function initProductsFilter() {
  const filters = document.querySelectorAll('.category-filter');
  const grid = document.getElementById('productsGrid');
  
  if (!grid || filters.length === 0) return;

  let activeCategory = 'all';

  function renderProducts(category) {
    const filtered = category === 'all' 
      ? products 
      : products.filter(p => p.category === category);

    grid.innerHTML = filtered.map((product, index) => `
      <div class="product-card" style="animation-delay: ${index * 0.05}s">
        <a href="boutique.html#product-${product.id}">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
            <div class="product-overlay">
              <button class="product-overlay-btn" aria-label="Voir">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              <button class="product-overlay-btn" aria-label="Favoris">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="product-content">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-materials">${product.materials.join(', ')}</p>
            <div class="product-footer">
              <span class="product-price">${product.price.toLocaleString()} FCFA</span>
              <button class="product-add-btn" aria-label="Ajouter au panier">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </button>
            </div>
          </div>
        </a>
      </div>
    `).join('');

    // Add fade-in animation
    const cards = grid.querySelectorAll('.product-card');
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      }, i * 50);
    });
  }

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      activeCategory = filter.dataset.category;
      renderProducts(activeCategory);
    });
  });

  // Initial render
  renderProducts(activeCategory);
}

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
function initTestimonialsCarousel() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  
  if (slides.length === 0) return;

  let currentIndex = 0;

  function showTestimonial(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function next() {
    const next = (currentIndex + 1) % slides.length;
    showTestimonial(next);
  }

  function prev() {
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    showTestimonial(prev);
  }

  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
  });

  // Auto-advance
  setInterval(next, 5000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-100px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  const animateElements = document.querySelectorAll('.stat-card, .process-card, .about-preview-image, .about-preview-content, .b2b-content, .b2b-card, .blog-card');
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ============================================
// NEWSLETTER FORM
// ============================================
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    const email = input.value;
    
    // Simulate API call
    console.log('Newsletter subscription:', email);
    alert('Merci pour votre abonnement !');
    input.value = '';
  });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate API call
    console.log('Form submission:', data);
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'form-success';
    successMsg.innerHTML = `
      <div style="text-align: center; padding: 2rem; background: white; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--deco-charcoal); margin-bottom: 0.5rem;">Message envoyé !</h3>
        <p style="color: rgba(44,44,44,0.7);">Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    `;
    
    form.parentNode.replaceChild(successMsg, form);
    
    setTimeout(() => {
      location.reload();
    }, 3000);
  });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function setCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initHeroCarousel();
  initCounters();
  initProductsFilter();
  initTestimonialsCarousel();
  initScrollAnimations();
  initNewsletterForm();
  initContactForm();
  setCurrentYear();
});

