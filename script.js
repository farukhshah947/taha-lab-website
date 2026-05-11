/* ==============================================
   MOBILE MENU TOGGLE
   ============================================== */
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => navMenu.classList.toggle("active"));
}

/* ==============================================
   SMOOTH SCROLL (same-page anchor links only)
   ============================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ==============================================
   HERO SLIDER (index.html only)
   ============================================== */
const slides = document.querySelectorAll(".slide");
const dots   = document.querySelectorAll(".dot");

if (slides.length > 0) {
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 6000);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });
}
