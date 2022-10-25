export default function addCart() {
  const plus = document.querySelector(".icon-plus");
  const minus = document.querySelector(".icon-minus");
  const iconDelete = document.querySelector(".icon-delete");

  const count = document.querySelector(".count");
  const buttonCart = document.querySelector(".buttonCart");
  const cartIcon = document.querySelector(".cart-icon");

  const containerCart = document.querySelector(".cart-bg ");
  const cartItens = document.querySelector(".cart-items");
  const cartEmpty = document.querySelector(".cart-empty");
  const cartCount = document.querySelector(".cart-count");

  const totalCount = document.querySelector(".total-count");
  const totalValue = document.querySelector(".total-value");

  let counter = 0;
  function countPlus() {
    if (counter < 9) {
      counter++;
      count.innerText = counter;
    }
  }
  function countMinus() {
    if (counter > 0) {
      counter--;
      count.innerText = counter;
    }
  }

  function createCart() {
    if (counter === 0) {
      cartItens.classList.add("cart-disabled");
      cartEmpty.classList.remove("cart-disabled");
      cartCount.classList.add("cart-disabled");
    } else if (counter > 0) {
      totalCount.innerText = counter;
      totalValue.innerText = `$${counter * 125}.00`;
      cartCount.innerText = counter;
      cartItens.classList.remove("cart-disabled");
      cartCount.classList.remove("cart-disabled");
      cartEmpty.classList.add("cart-disabled");
    }
  }

  function openCart() {
    containerCart.classList.toggle("cart-disabled");
  }

  function closeCart({ target }) {
    if (target === containerCart) {
      containerCart.classList.add("cart-disabled");
    }
  }

  function deleteCart() {
    cartItens.classList.add("cart-disabled");
    cartEmpty.classList.remove("cart-disabled");
    cartCount.classList.add("cart-disabled");
  }

  return {
    countPlus: plus.addEventListener("click", countPlus),
    countMinus: minus.addEventListener("click", countMinus),
    createCart: buttonCart.addEventListener("click", createCart),
    openCart: cartIcon.addEventListener("click", openCart),
    deleteCart: iconDelete.addEventListener("click", deleteCart),
    closeCart: window.addEventListener("click", closeCart),
  };
}
