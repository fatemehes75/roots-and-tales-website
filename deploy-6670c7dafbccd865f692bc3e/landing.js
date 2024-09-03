document.addEventListener("DOMContentLoaded", function () {
  const serviceCtaButtons = document.querySelectorAll(".service-cta");
  const servicesSection = document.getElementById("services");
  const childCarouselContainer = document.getElementById(
    "child-carousel-container"
  );
  const adultCarouselContainer = document.getElementById(
    "adult-carousel-container"
  );

  // Add click event listener to each button
  serviceCtaButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Toggle class for all buttons with the same class name
      serviceCtaButtons.forEach(function (btn) {
        if (button.id === btn.id) {
          btn.classList.toggle("green-bg");
        } else {
          btn.classList.remove("green-bg");
        }
        if (button.id === "adult-cta") {
          adultCarouselContainer.classList.remove("hide");
          childCarouselContainer.classList.add("hide");
        }
        if (button.id === "child-cta") {
          childCarouselContainer.classList.remove("hide");
          adultCarouselContainer.classList.add("hide");
        }
        btn.classList.add("half-height");
        servicesSection.classList.add("half-padding");
        // carouselContainer.classList.remove('hide');
      });
    });
  });

  const childImages = document.querySelectorAll(
    "#child-carousel-container .carousel .service-info-container"
  );
  const childPaginationDots = document.querySelectorAll(
    "#child-pagination .pagination-dot"
  );

  childImages.forEach((img) => {
    img.addEventListener("click", () => {
      childImages.forEach((img) =>
        img.classList.remove("center", "left", "right")
      );
      img.classList.add("center");

      let index = Array.from(childImages).indexOf(img);
      let prevIndex = index === 0 ? childImages.length - 1 : index - 1;
      let nextIndex = index === childImages.length - 1 ? 0 : index + 1;

      childImages[prevIndex].classList.add("left");
      childImages[nextIndex].classList.add("right");
    });
  });

  childPaginationDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      images.forEach((img) => img.classList.remove("center", "left", "right"));
      images[index].classList.add("center");

      let prevIndex = index === 0 ? images.length - 1 : index - 1;
      let nextIndex = index === images.length - 1 ? 0 : index + 1;

      images[prevIndex].classList.add("left");
      images[nextIndex].classList.add("right");

      childPaginationDots.forEach((dot) => dot.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  const adultImages = document.querySelectorAll(
    "#adult-carousel-container .carousel .service-info-container"
  );
  const adultPaginationDots = document.querySelectorAll(
    "#adult-pagination .pagination-dot"
  );

  adultImages.forEach((img) => {
    img.addEventListener("click", () => {
      adultImages.forEach((img) =>
        img.classList.remove("center", "left", "right")
      );
      img.classList.add("center");

      let index = Array.from(adultImages).indexOf(img);
      let prevIndex = index === 0 ? adultImages.length - 1 : index - 1;
      let nextIndex = index === adultImages.length - 1 ? 0 : index + 1;

      adultImages[prevIndex].classList.add("left");
      adultImages[nextIndex].classList.add("right");
    });
  });

  adultPaginationDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      images.forEach((img) => img.classList.remove("center", "left", "right"));
      images[index].classList.add("center");

      let prevIndex = index === 0 ? images.length - 1 : index - 1;
      let nextIndex = index === images.length - 1 ? 0 : index + 1;

      images[prevIndex].classList.add("left");
      images[nextIndex].classList.add("right");

      adultPaginationDots.forEach((dot) => dot.classList.remove("active"));
      dot.classList.add("active");
    });
  });
});
