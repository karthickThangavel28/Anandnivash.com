// nav menu appear
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});

// side container
document.getElementById('contact-icon').addEventListener('click', function() {
  var contactContainer = document.getElementById('contact-container');
  contactContainer.classList.toggle('show');
});
document.getElementById('close-button').addEventListener('click', function() {
  var contactContainer = document.getElementById('contact-container');
  contactContainer.classList.remove('show');
});



// dark and light mood 
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const themeIcon = document.getElementById('theme-icon');

  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      themeIcon.classList.remove('bx-sun');
      themeIcon.classList.add('bx-moon');
    } else {
      themeIcon.classList.remove('bx-moon');
      themeIcon.classList.add('bx-sun');
    }
  });
})

// aos scorll animation
AOS.init();


// image slider in team members  a


var swiper2 = new Swiper('.main-swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
});


// scroll the last menu
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}
// Function to handle adding/removing active class based on scroll position
function onScroll() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
          link.classList.add('active');
      }
  });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
// typing text

const type=["Designing", "Consultation","Construction","Home styling","Turnkey projects"];
const typed = new Typed('#typed-element', {
  strings: type,
  typeSpeed: 150, 
  loop: true,
  backspeed:170,
  cursorBlinkSpeed: 700,
  cursorChar: '__',
});
