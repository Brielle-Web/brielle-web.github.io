/* =========================================================
   BRIELLE LEGAL SOLUTIONS
   JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------
     Mobile Navigation
  --------------------------------------------- */

  const menuButton = document.getElementById("mobileMenuButton");
  const mainNav = document.getElementById("mainNav");

  if (menuButton && mainNav) {

    menuButton.addEventListener("click", () => {

      const isOpen = mainNav.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    /* Close menu after clicking a navigation link */

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* ---------------------------------------------
     Current Year
  --------------------------------------------- */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* ---------------------------------------------
     Active Navigation
  --------------------------------------------- */

  const sections = document.querySelectorAll("section[id]");
  const navigationLinks = document.querySelectorAll(".nav-link");

  const updateActiveNavigation = () => {

    let currentSection = "";

    sections.forEach((section) => {

      const sectionTop = section.offsetTop - 180;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }

    });


    navigationLinks.forEach((link) => {

      link.classList.remove("active");

      const href = link.getAttribute("href");

      if (href === `#${currentSection}`) {
        link.classList.add("active");
      }

    });

  };

  window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
  );


  /* ---------------------------------------------
     Header Background on Scroll
  --------------------------------------------- */

  const header = document.querySelector(".site-header");

  const updateHeader = () => {

    if (!header) return;

    if (window.scrollY > 50) {

      header.style.background =
        "rgba(251, 247, 244, 0.95)";

      header.style.backdropFilter =
        "blur(12px)";

      header.style.boxShadow =
        "0 5px 25px rgba(11, 30, 46, 0.06)";

    } else {

      header.style.background = "transparent";

      header.style.backdropFilter = "none";

      header.style.boxShadow = "none";

    }

  };

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();


  /* ---------------------------------------------
     Smooth Scroll
  --------------------------------------------- */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", (event) => {

      const targetId =
        anchor.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

});
