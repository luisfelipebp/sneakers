export default function slide() {
  const next = document.querySelector(".slide-next");
  const previous = document.querySelector(".slide-previous");

  const image = document.querySelector(".image-slide img");
  const imageContainer = document.querySelector(".image-slide");
  const imagesThumbnail = document.querySelectorAll(
    ".list-images-slide li img"
  );

  function nextSlide() {
    const index = +image.getAttribute("data-index");
    image.setAttribute("data-index", index + 1);
    const indexAtual = image.getAttribute("data-index");
    imagesThumbnail.forEach((imageThumbnail) => {
      const indexThumbnail = imageThumbnail.getAttribute("data-index");
      if (indexThumbnail === indexAtual) {
        imagesThumbnail.forEach((imageThumbnail) => {
          imageThumbnail.classList.remove("active");
        });
        imageThumbnail.classList.add("active");
      }
    });
    if (indexAtual <= 4) {
      imageContainer.innerHTML = `<img class="image-full" src="./images/image-product-${indexAtual}.jpg" alt="Imagem thumbnail 1 do produto "></img>`;
    } else {
      image.setAttribute("data-index", 1);
      imageContainer.innerHTML = `<img class="image-full" src="./images/image-product-1.jpg" alt="Imagem thumbnail 1 do produto "></img>`;
      imagesThumbnail.forEach((imageThumbnail) => {
        imageThumbnail.classList.remove("active");
      });
      imagesThumbnail[0].classList.add("active");
    }
  }
  function previousSlide() {
    const index = +image.getAttribute("data-index");
    image.setAttribute("data-index", index - 1);
    const indexAtual = image.getAttribute("data-index");
    imagesThumbnail.forEach((imageThumbnail) => {
      const indexThumbnail = imageThumbnail.getAttribute("data-index");
      if (indexThumbnail === indexAtual) {
        imagesThumbnail.forEach((imageThumbnail) => {
          imageThumbnail.classList.remove("active");
        });
        imageThumbnail.classList.add("active");
      }
    });
    if (indexAtual >= 1) {
      imageContainer.innerHTML = `<img class="image-full" src="./images/image-product-${indexAtual}.jpg" alt="Imagem thumbnail 1 do produto "></img>`;
    } else {
      image.setAttribute("data-index", 4);
      imageContainer.innerHTML = `<img class="image-full" src="./images/image-product-4.jpg" alt="Imagem thumbnail 1 do produto "></img>`;
      imagesThumbnail.forEach((imageThumbnail) => {
        imageThumbnail.classList.remove("active");
      });
      imagesThumbnail[3].classList.add("active");
    }
  }

  return {
    next: next.addEventListener("click", nextSlide),
    previous: previous.addEventListener("click", previousSlide),
  };
}
