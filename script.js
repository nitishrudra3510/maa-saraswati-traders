const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

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
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Form Submission
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message. We will get back to you soon!');
        this.reset();
    });
}

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopButton.className = 'fixed bottom-6 left-6 bg-[#2C5530] text-white p-4 rounded-full shadow-lg hover:bg-[#1E3B21] hidden';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});