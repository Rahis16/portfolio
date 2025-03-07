// Select all the links
const navLinks = document.querySelectorAll('.nav a');

// Add click event to each link for smooth scrolling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        // Get the target section
        const target = document.querySelector(link.getAttribute('href'));

        // Smooth scroll to the section
        window.scrollTo({
            top: target.offsetTop - 100, // Adjust offset for fixed nav
            behavior: 'smooth'
        });
    });
});
