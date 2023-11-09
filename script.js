const btn = document.querySelector("[data-carousel-button]");

btn.addEventListener("click", () => {
  const slides = btn.closest("[data-carousel]").querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  let index =
    ([...slides.children].indexOf(activeSlide) + 1) % slides.children.length;

  slides.children[index].dataset.active = true;
  delete activeSlide.dataset.active;
});
