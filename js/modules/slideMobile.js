export default function slideMobile() {
  const previous = document.querySelector(".icon-previous");
  const next = document.querySelector(".icon-next");

  const image = document.querySelector(".image-full");
  const imageContainer = document.querySelector(".image-fullContainer img");

  function previousMobile() {
    const index = +image.getAttribute("data-index");
    image.setAttribute("data-index", index - 1);
    const indexAtual = image.getAttribute("data-index");
    if (indexAtual >= 1) {
      // imageContainer.innerHTML = `<img class="image-full" src="./images/image-product-${indexAtual}.jpg" alt="Imagem thumbnail 1 do produto "></img>`;
      imageContainer.setAttribute(
        "src",
        `./images/image-product-${indexAtual}.jpg`
      );
    } else {
      image.setAttribute("data-index", 4);
      // imageContainer.innerHTML = `<img class="image-full" src="./images/image-product-4.jpg" alt="Imagem thumbnail 1 do produto "></img>`;
      imageContainer.setAttribute("src", `./images/image-product-4.jpg`);
    }
  }

  function nextMobile() {
    const index = +image.getAttribute("data-index");
    image.setAttribute("data-index", index + 1);
    const indexAtual = image.getAttribute("data-index");
    if (indexAtual <= 4) {
      // imageContainer.innerHTML = `<img class="image-full" src="./images/image-product-${indexAtual}.jpg" alt="Imagem thumbnail 1 do produto "></img>`;
      imageContainer.setAttribute(
        "src",
        `./images/image-product-${indexAtual}.jpg`
      );
    } else {
      image.setAttribute("data-index", 1);
      imageContainer.setAttribute("src", `./images/image-product-1.jpg`);
    }
  }

  return {
    previousMobile: previous.addEventListener("click", previousMobile),
    nextMobile: next.addEventListener("click", nextMobile),
  };
}
