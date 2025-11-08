const canvas = document.getElementById('bg-animation');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function createStar() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        direction: Math.random() > 0.5 ? 1 : -1
    };
}

function populateStars() {
    stars = [];
    for (let i = 0; i < 200; i++) {
        stars.push(createStar());
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
    }
}

function animateStars() {
    requestAnimationFrame(animateStars);
    drawStars();

    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.opacity += star.speed * star.direction;

        if (star.opacity > 1 || star.opacity < 0) {
            star.direction *= -1;
        }
    }
}

populateStars();
animateStars();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    populateStars();
});

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    document.getElementById("navMenu").classList.remove("show");
  });
});

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { 
    if(entry.isIntersecting) entry.target.classList.add('visible'); 
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));
