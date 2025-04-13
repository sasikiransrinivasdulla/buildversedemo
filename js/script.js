document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // GSAP Animations
    gsap.from('.navbar-brand', { duration: 1, y: -50, opacity: 0, ease: 'bounce' });
    gsap.from('.tagline', { duration: 1, x: -50, opacity: 0, delay: 0.5 });
    gsap.from('.login-btn', { duration: 1, x: 50, opacity: 0, delay: 0.5 });
    
    // Hero section animations
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.from('.text-section h1', { duration: 1, y: 50, opacity: 0 })
      .from('.text-section h3', { duration: 0.8, y: 30, opacity: 0 }, '-=0.5')
      .from('.text-section p', { duration: 0.8, y: 30, opacity: 0 }, '-=0.4')
      .from('.signup-btn', { duration: 0.6, y: 30, opacity: 0 }, '-=0.3')
      .from('.learn-more-btn', { duration: 0.6, y: 30, opacity: 0 }, '-=0.3')
      .from('.hero-img', { duration: 1, scale: 0.8, opacity: 0, ease: 'back.out(1.7)' }, '-=0.8');
  
    // Scroll indicator click event
    document.querySelector('.scroll-indicator').addEventListener('click', function() {
      window.scrollTo({
        top: document.querySelector('.hero-section').offsetHeight,
        behavior: 'smooth'
      });
    });
  
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        gsap.to(this, { scale: 1.05, duration: 0.3 });
      });
      button.addEventListener('mouseleave', function() {
        gsap.to(this, { scale: 1, duration: 0.3 });
      });
    });
  });