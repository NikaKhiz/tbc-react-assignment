import "./style.scss";

const hamburgerButton = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile__menu");
const mobileNavigation = document.querySelector(".mobile__menu__navigation");
const body = document.querySelector("body");
const header = document.querySelector(".header");

// open mobile menu
hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("open");
  mobileMenu.classList.toggle("is__menu__open");
  mobileNavigation.classList.toggle("is__menu__open");
  body.classList.toggle("noscroll");
});

// sticky header on scroll
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
