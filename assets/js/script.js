'use strict';

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
    if (navbar) {
          navbar.classList.toggle("active");
          document.body.classList.toggle("active");
    }
}

if (navOpenBtn) navOpenBtn.addEventListener("click", toggleNavbar);
if (navCloseBtn) navCloseBtn.addEventListener("click", toggleNavbar);

if (navLinks) {
    for (let i = 0; i < navLinks.length; i++) {
          navLinks[i].addEventListener("click", function () {
                  navbar.classList.remove("active");
                  document.body.classList.remove("active");
          });
    }
}

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (header) {
          if (window.scrollY >= 100) {
                  header.classList.add("active");
                  if (backTopBtn) backTopBtn.classList.add("active");
          } else {
                  header.classList.remove("active");
                  if (backTopBtn) backTopBtn.classList.remove("active");
          }
    }
});

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
    if (preloader) {
          preloader.classList.add("loaded");
          document.body.classList.add("loaded");
    }
});
