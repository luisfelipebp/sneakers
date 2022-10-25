export default function openSlide() {
  const image = document.querySelector(".image-fullContainer");
  const slider = document.querySelector(".slide-bg");
  const iconClose = document.querySelector(".icon-close img");

  function openSlide() {
    if (window.innerWidth > 950) {
      slider.classList.toggle("active");
    }
  }

  function closeSlide({ target }) {
    if (target === slider || target === iconClose) {
      slider.classList.toggle("active");
    }
  }

  function removeSlideMobile({ target }) {
    if (target.innerWidth <= 950) {
      slider.classList.remove("active");
    }
  }

  return {
    openSlide: image.addEventListener("click", openSlide),
    closeSlide: slider.addEventListener("click", closeSlide),
    removeSlideMobile: window.addEventListener("resize", removeSlideMobile),
  };
}
