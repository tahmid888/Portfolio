// const cards = document.querySelectorAll(".portfolio-card");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//       }
//     });
//   },
//   { threshold: 0.1 }
// );

// cards.forEach((card) => observer.observe(card));
// Reveal cards on scroll using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".portfolio-card");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target); // stop observing after animation
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => observer.observe(card));
});
