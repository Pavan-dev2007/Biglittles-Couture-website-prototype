// Biglittles Couture Interactive Logic
document.addEventListener('DOMContentLoaded', () => {

    // Custom Cursor Logic
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor hidden md:block';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const addCursorHover = () => {
        const hoverables = document.querySelectorAll('a, button, input, select, textarea, .cursor-pointer, .nav-button, .whatsapp-btn');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });
    };
    addCursorHover();

    // Preloader Dismissal
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1200); // 1.2s minimum display time for cinematic effect
    }

    // Navbar Scroll Effect (Glassmorphism & Color shift)
    const navbar = document.getElementById('navbar');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-nav-light');
            navbar.classList.remove('bg-transparent', 'py-8');
            navbar.classList.add('py-4');
            if(scrollIndicator) scrollIndicator.style.opacity = '0';
        } else {
            navbar.classList.remove('glass-nav-light');
            navbar.classList.add('bg-transparent', 'py-8');
            navbar.classList.remove('py-4');
            if(scrollIndicator) scrollIndicator.style.opacity = '1';
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));

    // Smooth Scroll wrapper for hash links
    document.querySelectorAll('.scroll-indicator').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        });
    });

});
