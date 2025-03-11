document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners, handle interactivity here
    
    // Example: Scroll to section smoothly
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Lazy load images
const images = document.querySelectorAll('img');
const options = {
    rootMargin: '0px 0px 100px 0px',
    threshold: 0.1
};

const loadImage = (image) => {
    const src = image.getAttribute('data-src');
    if (src) {
        image.setAttribute('src', src);
        image.onload = () => image.classList.add('loaded');
    }
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, options);

images.forEach(image => observer.observe(image));
