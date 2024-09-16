// Toggle Menu and Navbar
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// Theme Toggler
let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () => {
  themeToggler.classList.toggle('active');
}

// Reset on Scroll
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

// Change Theme Colors
document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }
});

// Swiper for Home Slider with Enhanced Coverflow Animation
var homeSwiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50, // You can increase rotation for more effect
    stretch: 0,
    depth: 200, // Increase depth for a stronger 3D effect
    modifier: 1, // You can adjust modifier to control intensity
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 600, // Speed up the transition between slides
});

// Swiper for Review Slider with Fade Animation
var reviewSwiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  effect: 'fade', // Added fade effect for smooth transitions
  fadeEffect: {
    crossFade: true // Allows smooth fading transitions
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 800, // Slow down the fade animation speed for emphasis
});
