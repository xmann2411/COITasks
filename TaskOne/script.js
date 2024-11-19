document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".image-text-section, .section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section--visible"); // add when visible
        } else {
          entry.target.classList.remove("section--visible"); // remove when visible
        }
      });
    },
    { threshold: 0.5 } // 50% u viewport-u
  );

  sections.forEach((section) => observer.observe(section));

  const buttons = document.querySelectorAll(
    ".image-text-section__button, .section__toggle-btn"
  );

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Button clicked!");
    });
  });
});
