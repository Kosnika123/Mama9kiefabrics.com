const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const closeSidebar = document.querySelector('.close-sidebar');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

document.addEventListener('click', (e) => {
  if (navToggle && navLinks) {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('show');
    }
  }
});

if (closeSidebar && navLinks) {
  closeSidebar.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
}

const header = document.querySelector('.header');
const videoSection = document.querySelector('.video-container')

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const videoSectionTop = videoSection.offsetTop + videoSection.offsetHeight;

    if (scrollPosition > videoSectionTop){
        header.classList.add('scrolled');
    }

    else {
        header.classList.remove('scrolled');
    }
});
