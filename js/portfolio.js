const cards = document.querySelectorAll(".portfolio-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);

cards.forEach((card) => observer.observe(card));
