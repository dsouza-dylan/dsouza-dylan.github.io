// const searchBtn = document.querySelector('.search-btn');
// const overlay = document.getElementById('search-overlay');
// const closeBtn = document.getElementById('close-btn');
// const searchInput = document.getElementById('searchInput');
// const searchIconBtn = document.getElementById('search-icon');

// searchBtn.addEventListener('click', () => {
//   overlay.classList.add('active');
//   searchInput.focus();
// });

// closeBtn.addEventListener('click', () => {
//   overlay.classList.remove('active');
// });

// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     overlay.classList.remove('active');
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
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
});


