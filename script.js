// Mobile navigation toggle for Asian Manchester

const nav = document.querySelector('.nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');

if (nav && navToggle && navLinks) {
  const closeMenu = () => {
    nav.classList.remove('menu-open');
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  };

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  // Close menu when a nav link is clicked (on mobile)
  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'a') {
      closeMenu();
    }
  });

  // Reset state on resize back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}

