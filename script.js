document.addEventListener("DOMContentLoaded", () => {

  // --- Mobile menu ---
  const hamburger = document.getElementById("hamburger");
  const overlay = document.getElementById("mobile-menu-overlay");

  hamburger.addEventListener("click", () => {
    overlay.classList.toggle("active");
  });

  document.querySelectorAll(".overlay-menu a").forEach(link => {
    link.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
  });

  // --- Sticky header shrink on scroll ---
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  });

  // --- Active nav link ---
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#nav-list a, .overlay-menu a").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active-nav");
    }
  });

  // --- Scroll-triggered reveal ---
  const revealEls = document.querySelectorAll(
    ".project-card, .project-card-idx, .blog-card, .photo-card, .gallery-item, .about-text, .about-image"
  );

  revealEls.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));

  // --- Back to top button ---
  const backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.innerHTML = "↑";
  backToTop.setAttribute("aria-label", "Back to top");
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 400);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});
