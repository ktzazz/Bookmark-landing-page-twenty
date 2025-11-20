document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.querySelector(".nav__mobile");
  const mobileOpen = document.querySelector(".mobile__open");
  const mobileClose = document.querySelector(".mobile__close");
  const mobileMenu = document.querySelector(".header__nav");

  navBtn.addEventListener("click", function () {
    mobileOpen.classList.toggle("inactive");
    mobileClose.classList.toggle("inactive");
    mobileMenu.classList.toggle("open");
  });
});
