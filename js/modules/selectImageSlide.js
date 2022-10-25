export default function selectImageSlide() {
  const images = document.querySelectorAll(".list-images-slide li img");
  const image = document.querySelector(".image-slide img");
  function activeImage() {
    images.forEach((image) => {
      image.classList.remove("active");
    });
    this.classList.add("active");
  }

  const mainImage = document.querySelector(".image-slide");
  function imageFull(event) {
    const index = event.target.getAttribute("data-index");
    image.setAttribute("data-index", index);
    mainImage.innerHTML = `<img class="image-full" src="./images/image-product-${index}.jpg" alt="Imagem thumbnail 1 do produto "></img>`;
  }

  return images.forEach((image) => {
    image.addEventListener("click", activeImage);
    image.addEventListener("click", imageFull);
  });
}
