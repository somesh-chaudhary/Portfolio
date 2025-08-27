// Toggle menu
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });

    // Close menu on mobile after clicking
    document.getElementById("navMenu").classList.remove("show");
  });
});

// Fade-in on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { 
    if(entry.isIntersecting) entry.target.classList.add('visible'); 
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));