export default function selectImage() {
  const images = document.querySelectorAll(".list-images li img");

  function activeImage() {
    images.forEach((image) => {
      image.classList.remove("active");
    });
    this.classList.add("active");
  }

  const mainImage = document.querySelector(".image-fullContainer img");
  function imageFull(event) {
    const index = event.target.getAttribute("data-index");
    mainImage.setAttribute("src", `./images/image-product-${index}.jpg`);
  }

  return images.forEach((image) => {
    image.addEventListener("click", activeImage);
    image.addEventListener("click", imageFull);
  });
}
