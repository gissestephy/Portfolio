// --- DARK/LIGHT MODE ---
let darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
const darkModeButton = document.getElementById('darkModeButton');

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkModeEnabled', 'true');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkModeEnabled', 'false');
};

// --- HAMBURGER MENU ---
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.list-darkmode-menu ul');

document.addEventListener('DOMContentLoaded', () => {
  // Configuración del modo oscuro
  if (darkModeEnabled) {
    enableDarkMode();
    darkModeButton.checked = true;
  }

  darkModeButton.addEventListener('change', () => {
    if (darkModeButton.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  // Configuración del menú hamburguesa
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  } else {
    console.error('No se encontraron los elementos .hamburger o .list-darkmode-menu ul');
  }
});