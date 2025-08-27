function bookNow() {
    alert("Thanks for your interest! Please contact us through the form below.");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Your message has been sent!");
      form.reset();
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Elemen yang ingin diberikan animasi sentuh
    const touchableElements = document.querySelectorAll(
      ".card, .about-image img, .contact-image img, section"
    );
  
    touchableElements.forEach(el => {
      el.addEventListener("touchstart", () => {
        el.classList.add("touch-active");
      });
  
      el.addEventListener("touchend", () => {
        el.classList.remove("touch-active");
      });
  
      el.addEventListener("touchcancel", () => {
        el.classList.remove("touch-active");
      });
    });
  });
  

document.addEventListener('DOMContentLoaded', function () {
  const hamIcon = document.getElementById('ham-icon');
  const nav = document.getElementById('nav-links');

  // Toggle menu saat klik hamburger icon
  hamIcon.addEventListener('click', function (e) {
    nav.classList.toggle('hidden');
    e.stopPropagation(); // Mencegah penutupan langsung
  });

  // Tutup menu jika klik di luar nav dan hamburger
  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('hidden') && !nav.contains(e.target) && !hamIcon.contains(e.target)) {
      nav.classList.add('hidden');
    }
  });
});

