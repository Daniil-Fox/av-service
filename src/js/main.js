import "./_components.js";
import "./_functions.js";
const modal = document.querySelector(".modal");
const modalBody = modal.querySelector(".modal__body");
const modalClose = modal.querySelector(".modal__close");

const modalButtons = document.querySelectorAll(".modal-btn");

modalButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    modal.classList.add("active");
  });
});

modalBody.addEventListener("click", (e) => {
  e.stopPropagation();
});

modal.addEventListener("click", (e) => {
  e.preventDefault();

  modal.classList.remove("active");
});

modalClose.addEventListener("click", (e) => {
  modal.classList.remove("active");
});

const header = document.querySelector(".header");

const headerHeight = header.clientHeight;
const siteContainer = document.querySelector(".site-container");

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= headerHeight) {
    if (header.classList.contains("fixed")) return;
    siteContainer.style.paddingTop = headerHeight + "px";
    header.classList.add("fixed");
  } else {
    if (!header.classList.contains("fixed")) return;
    siteContainer.style.paddingTop = null;
    header.classList.remove("fixed");
  }
});

const menuBtn = document.querySelector(".header__burger");

const menu = document.querySelector(".menu");
const menuItes = menu.querySelectorAll(".nav__link");
menuBtn.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

menuItes.forEach((link) => {
  link.addEventListener("click", (e) => {
    menu.classList.remove("active");
  });
});
