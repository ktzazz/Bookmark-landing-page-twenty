document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // Scroll hacia abajo: oculta el menú
      navbar.classList.add("hidden");
    } else {
      // Scroll hacia arriba: muestra el menú
      navbar.classList.remove("hidden");
    }
    lastScrollTop = currentScrollTop;
  });

  const navBtn = document.querySelector(".nav__mobile");
  const mobileOpen = document.querySelector(".mobile__open");
  const mobileClose = document.querySelector(".mobile__close");
  const mobileMenu = document.querySelector(".header__nav");

  function toggleMobileMenu() {
    mobileOpen.classList.toggle("inactive");
    mobileClose.classList.toggle("inactive");
    mobileMenu.classList.toggle("open");

    logoColor();
  }

  function logoColor() {
    const logo = document.querySelector(".bookmark");
    const circle = document.querySelector(".circle");
    const inner = document.querySelector(".innerCircle");

    const rootStyles = getComputedStyle(document.documentElement);
    const logoOg = rootStyles.getPropertyValue("--blue-950");
    const circleOg = rootStyles.getPropertyValue("--blue");
    const innerOg = rootStyles.getPropertyValue("--white");
    const lightGray = rootStyles.getPropertyValue("--grey");
    const bgMenu = rootStyles.getPropertyValue("--background-menu");

    if (mobileMenu.classList.contains("open")) {
      logo.style.fill = lightGray;
      circle.style.fill = lightGray;
      inner.style.fill = bgMenu;
      mobileMenu.classList.add("no__scroll");
    } else {
      logo.style.fill = logoOg;
      circle.style.fill = circleOg;
      inner.style.fill = innerOg;
      mobileMenu.classList.remove("no__scroll");
    }
  }

  navBtn.addEventListener("click", toggleMobileMenu);

  /* ANIMATION ON SCROLL */
  const animation = document.querySelectorAll(".on");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in the viewport, add the animation class
          entry.target.classList.add("animate-in");
          // Optionally, stop observing this element once it has animated
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  ); // Trigger when 50% of the element is visible

  animation.forEach((element) => {
    observer.observe(element);
  });
});
