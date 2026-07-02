// ===========================
// Smooth Scrolling for Navigation Links
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
// Contact Form Handling
// ===========================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Prepare the email content
        const emailContent = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `;

        // Create mailto link
        const mailtoLink = `mailto:jubilantcity.acc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;

        // Open the default email client
        window.location.href = mailtoLink;

        // Show confirmation message
        alert('Thank you for your message! Your email client will open to send your inquiry.');

        // Reset form
        contactForm.reset();
    });
}

// ===========================
// Add Animation on Scroll
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===========================
// Mobile Menu Toggle (if needed in future)
// ===========================

// This can be expanded for mobile navigation if needed

// ===========================
// Lazy Loading for Images
// ===========================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Header Scroll Effect
// ===========================

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===========================
// Initialize on Page Load
// ===========================

document.addEventListener('DOMContentLoaded', function () {
    console.log('Jubilant City website loaded successfully');

    // Add any initialization code here
    // For example, you could load additional content or initialize plugins
});
