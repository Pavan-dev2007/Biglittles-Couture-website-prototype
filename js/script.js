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

    // Global WhatsApp Floating Button Injection
    if (!document.querySelector('.whatsapp-btn')) {
        const waBtn = document.createElement('a');
        waBtn.href = "#";
        waBtn.className = "fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 z-50 flex items-center justify-center whatsapp-btn pulse-glow";
        waBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
        document.body.appendChild(waBtn);
    }
});
