/* =========================================
   HAKODA MANBOK MULTIPAGE
   Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================
     MOBILE MENU
  ======================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

      mainNav.classList.toggle("open");

      const isOpen = mainNav.classList.contains("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

  }


  /* =======================================
     CLOSE MOBILE MENU AFTER CLICK
  ======================================= */

  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach(link => {

    link.addEventListener("click", () => {

      if (mainNav) {
        mainNav.classList.remove("open");
      }

      if (menuToggle) {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    });

  });


  /* =======================================
     CURRENT YEAR
  ======================================= */

  const yearElements =
    document.querySelectorAll(".current-year");

  yearElements.forEach(element => {
    element.textContent =
      new Date().getFullYear();
  });


  /* =======================================
     ESC KEY CLOSE MENU
  ======================================= */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      if (mainNav) {
        mainNav.classList.remove("open");
      }

      if (menuToggle) {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    }

  });


  /* =======================================
     SIMPLE SCROLL REVEAL
  ======================================= */

  const revealElements = document.querySelectorAll(
    ".card, .gallery-item, .timeline-item, .family-person"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.08
      }
    );

    revealElements.forEach(element => {

      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition =
        "opacity .6s ease, transform .6s ease";

      observer.observe(element);

    });

  }

});