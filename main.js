// --- DARK/LIGHT MODE ---
let darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
const darkModeButton = document.getElementById('darkModeButton');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkModeEnabled', 'true');
    darkModeButton.checked = true;
};

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkModeEnabled', 'false');
    darkModeButton.checked = false;
};

if (darkModeEnabled) {
    enableDarkMode();
} else {
    disableDarkMode();
}

darkModeButton.addEventListener('change', () => {
    if (darkModeButton.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// --- HAMBURGER MENU ---
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.list-darkmode-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- TYPED.JS ANIMATION ---
const typed = new Typed('.multiple', {
    strings: ['Full Stack Developer', 'QA Tester', 'UX/UI Designer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// --- FORMULARIO DE CONTACTO ---
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita el envío por defecto

    const formData = new FormData(contactForm);

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        });

        if (response.ok) {
            alert('¡Mensaje enviado con éxito! Te contactaré pronto.');
            contactForm.reset(); // Limpia el formulario
        } else {
            alert('Error al enviar el mensaje. Inténtalo de nuevo.');
        }
    } catch (error) {
        alert('Error de conexión. Verifica tu internet e inténtalo de nuevo.');
    }
});