document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(
    "#child-carousel-container .carousel-container-mobile .carousel"
  );
  const items = carousel.querySelectorAll(".item");
  const nextBtn = carousel.querySelector(".next-slide");
  const prevBtn = carousel.querySelector(".prev-slide");

  let currentIndex = 1; // Index of the center item

  // Function to update visibility and class names of items
  function updateVisibility() {
    items.forEach((item, index) => {
      const offset = index - currentIndex;
      if (offset === 0) {
        item.classList.add("center");
        item.classList.remove("left", "right");
      } else if (offset === -1 || offset === items.length - 1) {
        item.classList.add("left");
        item.classList.remove("center", "right");
      } else if (offset === 1 || offset === -items.length + 1) {
        item.classList.add("right");
        item.classList.remove("center", "left");
      } else {
        item.classList.remove("center", "left", "right");
      }
    });
  }

  // Function to handle next button click
  function nextSlide() {
    currentIndex = (currentIndex - 1) % items.length;
    updateVisibility();
  }

  // Function to handle previous button click
  function prevSlide() {
    currentIndex = (currentIndex + 1 + items.length) % items.length;
    updateVisibility();
  }

  // Event listeners for next and previous buttons
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Initially update visibility
  updateVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(
    "#adult-carousel-container .carousel-container-mobile .carousel"
  );
  const items = carousel.querySelectorAll(".item");
  const nextBtn = carousel.querySelector(".next-slide");
  const prevBtn = carousel.querySelector(".prev-slide");

  let currentIndex = 1; // Index of the center item

  // Function to update visibility and class names of items
  function updateVisibility() {
    items.forEach((item, index) => {
      const offset = index - currentIndex;
      if (offset === 0) {
        item.classList.add("center");
        item.classList.remove("left", "right");
      } else if (offset === -1 || offset === items.length - 1) {
        item.classList.add("left");
        item.classList.remove("center", "right");
      } else if (offset === 1 || offset === -items.length + 1) {
        item.classList.add("right");
        item.classList.remove("center", "left");
      } else {
        item.classList.remove("center", "left", "right");
      }
    });
  }

  // Function to handle next button click
  function nextSlide() {
    currentIndex = (currentIndex - 1) % items.length;
    updateVisibility();
  }

  // Function to handle previous button click
  function prevSlide() {
    currentIndex = (currentIndex + 1 + items.length) % items.length;
    updateVisibility();
  }

  // Event listeners for next and previous buttons
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Initially update visibility
  updateVisibility();
});
