document.addEventListener("DOMContentLoaded", function () {
  /* const navBtn = document.querySelector(".nav__mobile");
  const mobileOpen = document.querySelector(".mobile__open");
  const mobileClose = document.querySelector(".mobile__close");
  const mobileMenu = document.querySelector(".header__nav");

  function toggleMobileMenu() {
    mobileOpen.classList.toggle("inactive");
    mobileClose.classList.toggle("inactive");
    mobileMenu.classList.toggle("open");

    mobileClose.addEventListener("click", function (event) {
      event.preventDefault();
    });

    document.body.classList.toggle("no-scroll");
    logoColor();
  } */

  const navBtn = document.querySelector(".nav__mobile");
  const mobileOpen = document.querySelector(".mobile__open");
  const mobileClose = document.querySelector(".mobile__close");
  const mobileMenu = document.querySelector(".header__nav");

  let scrollPosition = 0; // Variable global para la posición

  // --- FUNCIÓN DE APERTURA ---
  function openMobileMenu() {
    // 1. Guarda la posición actual
    scrollPosition = window.scrollY;

    // 2. Aplica la lógica de scroll fijo y compensa visualmente
    document.body.style.top = `-${scrollPosition}px`;
    document.body.classList.add("no-scroll");

    // 3. Aplica los toggles visuales
    mobileOpen.classList.add("inactive");
    mobileClose.classList.remove("inactive"); // Muestra el botón de cerrar
    mobileMenu.classList.add("open");

    logoColor(true); // Indica que se abre
  }

  // --- FUNCIÓN DE CIERRE ---
  function closeMobileMenu() {
    // 1. Restaura la posición de scroll guardada
    document.body.style.top = "";
    document.body.classList.remove("no-scroll");
    window.scrollTo(0, scrollPosition); // Vuelve a la posición guardada

    // 2. Aplica los toggles visuales
    mobileOpen.classList.remove("inactive"); // Muestra el botón de abrir
    mobileClose.classList.add("inactive");
    mobileMenu.classList.remove("open");

    logoColor(false); // Indica que se cierra
  }

  function logoColor(isOpen) {
    const logo = document.querySelector(".bookmark");
    const circle = document.querySelector(".circle");
    const inner = document.querySelector(".innerCircle");

    const rootStyles = getComputedStyle(document.documentElement);
    const logoOg = rootStyles.getPropertyValue("--blue-950");
    const circleOg = rootStyles.getPropertyValue("--blue");
    const innerOg = rootStyles.getPropertyValue("--white");
    const lightGray = rootStyles.getPropertyValue("--grey");
    const bgMenu = rootStyles.getPropertyValue("--background-menu");

    if (isOpen) {
      logo.style.fill = lightGray;
      circle.style.fill = lightGray;
      inner.style.fill = bgMenu;
    } else {
      logo.style.fill = logoOg;
      circle.style.fill = circleOg;
      inner.style.fill = innerOg;
    }
  }

  /*   navBtn.addEventListener("click", toggleMobileMenu);*/
  mobileOpen.addEventListener("click", openMobileMenu); // Click en hamburguesa -> Abrir
  mobileClose.addEventListener("click", closeMobileMenu);
});
