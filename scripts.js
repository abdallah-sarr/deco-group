// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');

  function openMobileMenu() {
    mobileMenuOverlay.classList.add('active');
    mobileMenuDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('active');
    mobileMenuDrawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
});

// Header Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on load
});

// Hero Carousel
document.addEventListener('DOMContentLoaded', function() {
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroPrevBtn = document.querySelector('.hero-nav.prev');
  const heroNextBtn = document.querySelector('.hero-nav.next');
  let currentSlide = 0;
  let autoSlideInterval;

  const heroContent = [
    {
      title: "Nous transformons vos déchets en design",
      subtitle: "Mobilier, mode et œuvres d'art nées de l'upcycling",
      cta1: { text: "Découvrir la collection", href: "#produits" },
      cta2: { text: "Organiser une collecte", href: "contact.html?type=collecte" }
    },
    {
      title: "Mode responsable, made in Sénégal",
      subtitle: "Chaque pièce raconte une histoire unique",
      cta1: { text: "Voir la boutique", href: "boutique.html" },
      cta2: { text: "Devenir vendeur / partenaire", href: "contact.html?type=partenariat" }
    },
    {
      title: "Matières valorisées pour l'industrie",
      subtitle: "Approvisionnement durable pour plasturgie & sidérurgie",
      cta1: { text: "Offres B2B", href: "b2b.html" },
      cta2: { text: "Demandez un devis", href: "contact.html?type=devis" }
    }
  ];

  function updateHeroContent(index) {
    const content = heroContent[index];
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');
    
    if (heroTitle) heroTitle.textContent = content.title;
    if (heroSubtitle) heroSubtitle.textContent = content.subtitle;
    if (heroCta) {
      heroCta.innerHTML = `
        <a href="${content.cta1.href}" class="btn-primary">${content.cta1.text}</a>
        <a href="${content.cta2.href}" class="btn-ghost">${content.cta2.text}</a>
      `;
    }
  }

  function showSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
    updateHeroContent(index);
  }

  function nextSlide() {
    const next = (currentSlide + 1) % heroSlides.length;
    showSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
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

  if (heroNextBtn) {
    heroNextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (heroPrevBtn) {
    heroPrevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });

  // Initialize
  if (heroSlides.length > 0) {
    showSlide(0);
    startAutoSlide();
  }
});

// Counter Animation
function animateCounter(element, end, duration = 2000, suffix = '', prefix = '') {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(easeOutQuart * end);
    element.textContent = prefix + current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = prefix + end.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(update);
}

// Intersection Observer for Counters and Animations
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Handle counters
        if (element.classList.contains('counter')) {
          const end = parseInt(element.dataset.end || 0);
          const suffix = element.dataset.suffix || '';
          const prefix = element.dataset.prefix || '';
          if (!element.dataset.animated) {
            element.dataset.animated = 'true';
            animateCounter(element, end, 2000, suffix, prefix);
          }
        }

        // Handle fade-in animations
        if (element.classList.contains('fade-in-on-scroll')) {
          element.classList.add('fade-in');
        }

        // Handle slide-up animations
        if (element.classList.contains('slide-up-on-scroll')) {
          element.classList.add('slide-up');
        }

        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Observe all elements that need animation
  document.querySelectorAll('.counter, .fade-in-on-scroll, .slide-up-on-scroll').forEach(el => {
    observer.observe(el);
  });
});

// Product Filtering
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.dataset.category || 'all';

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter products
      productCards.forEach(card => {
        const cardCategory = card.dataset.category || 'all';
        if (category === 'all' || cardCategory === category) {
          card.style.display = '';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
});

// Testimonials Carousel
document.addEventListener('DOMContentLoaded', function() {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  const testimonialPrevBtn = document.querySelector('.testimonials-nav-btn.prev');
  const testimonialNextBtn = document.querySelector('.testimonials-nav-btn.next');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
      card.style.display = i === index ? 'block' : 'none';
    });
    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentTestimonial = index;
  }

  function nextTestimonial() {
    const next = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(next);
  }

  function prevTestimonial() {
    const prev = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(prev);
  }

  if (testimonialNextBtn) {
    testimonialNextBtn.addEventListener('click', nextTestimonial);
  }

  if (testimonialPrevBtn) {
    testimonialPrevBtn.addEventListener('click', prevTestimonial);
  }

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
  });

  // Initialize
  if (testimonialCards.length > 0) {
    showTestimonial(0);
  }
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForms = document.querySelectorAll('.contact-form');

  contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';

      // Simulate API call
      setTimeout(() => {
        // Show success message
        const formContainer = form.closest('.form-container');
        if (formContainer) {
          const successHTML = `
            <div class="form-success">
              <div class="success-icon">✓</div>
              <h3>Message envoyé !</h3>
              <p>Nous vous répondrons dans les plus brefs délais.</p>
              <p style="font-size: 0.875rem; color: rgba(44, 44, 44, 0.5);">
                Numéro de suivi: #${Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
          `;
          formContainer.innerHTML = successHTML;

          // Reset form after 3 seconds
          setTimeout(() => {
            formContainer.innerHTML = form.outerHTML;
            const newForm = formContainer.querySelector('.contact-form');
            if (newForm) {
              newForm.addEventListener('submit', arguments.callee);
            }
          }, 3000);
        }

        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 1500);
    });
  });
});

// Newsletter Form
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      
      // Simulate subscription
      alert(`Merci pour votre inscription ! Vous recevrez nos actualités à ${email}`);
      form.reset();
    });
  });
});

// Smooth Scroll for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Add any additional initialization code here
  console.log('DECO GROUP website initialized');
});

