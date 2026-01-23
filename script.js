// Smooth Scrolling for Navigation Links
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

// Fade-in Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.comparison-item, .showcase-item, .package-card, .process-step, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Header scroll behavior
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll Down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll Up
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    }
    lastScroll = currentScroll;
});

// Add transition to header
header.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

// Log page load
console.log('🖤 RE:BELLE™ Media - Digitales Berichtsheft-System Seminar');
console.log('The Art of Feeling. Amplified.');
console.log('Kontakt: rebelle.media.creator@gmail.com | WhatsApp: 0162 9471865');
