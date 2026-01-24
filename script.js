// ===========================
// SCROLL ANIMATIONS
// ===========================

// Intersection Observer für Scroll-Animationen
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Alle Elemente mit data-scroll Attribut beobachten
document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('[data-scroll]');
    scrollElements.forEach(el => observer.observe(el));
    
    // Hero-Elemente sofort anzeigen
    setTimeout(() => {
        document.querySelector('.hero-title')?.classList.add('visible');
        setTimeout(() => {
            document.querySelector('.hero-subtitle')?.classList.add('visible');
            setTimeout(() => {
                document.querySelector('.scroll-indicator')?.classList.add('visible');
            }, 300);
        }, 300);
    }, 100);
});

// ===========================
// SMOOTH SCROLL
// ===========================

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

// ===========================
// PARALLAX EFFECT
// ===========================

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.shape');
            
            shapes.forEach((shape, index) => {
                const speed = 0.1 + (index * 0.05);
                const yPos = -(scrolled * speed);
                shape.style.transform = `translateY(${yPos}px)`;
            });
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// ===========================
// SCROLL PROGRESS INDICATOR
// ===========================

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // Optional: Progress Bar hinzufügen
    // document.getElementById('progressBar').style.width = scrolled + '%';
});

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================
// TOUCH GESTURES (Mobile)
// ===========================

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - scroll to next section
            scrollToNextSection();
        } else {
            // Swipe right - scroll to previous section
            scrollToPreviousSection();
        }
    }
}

function scrollToNextSection() {
    const sections = document.querySelectorAll('section');
    const currentScroll = window.pageYOffset;
    
    for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop;
        if (sectionTop > currentScroll + 100) {
            sections[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

function scrollToPreviousSection() {
    const sections = document.querySelectorAll('section');
    const currentScroll = window.pageYOffset;
    
    for (let i = sections.length - 1; i >= 0; i--) {
        const sectionTop = sections[i].offsetTop;
        if (sectionTop < currentScroll - 100) {
            sections[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

// ===========================
// KEYBOARD NAVIGATION
// ===========================

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToNextSection();
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToPreviousSection();
    }
});

// ===========================
// LOADING ANIMATION
// ===========================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log('%c🖤 MISE:REBEL', 'font-size: 24px; font-weight: bold; color: #8B2635;');
console.log('%cDie rebellische Art, Ausbildung zu führen', 'font-size: 14px; color: #666;');
console.log('%cBuilt with ❤️ by RE:BELLE™ Media', 'font-size: 12px; color: #999;');
console.log('%cScroll für ein immersives Erlebnis', 'font-size: 12px; color: #D9663A; font-style: italic;');
