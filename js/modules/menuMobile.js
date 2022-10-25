export default function menuMobile() {
  const buttonMenu = document.querySelector(".menu-mobile");
  const closeMobile = document.querySelector(".icon-close-mobile img");
  const menuMobile = document.querySelector(".menuMobile-bg");

  function openMenu() {
    menuMobile.classList.toggle("disabled");
  }

  function closeMenu({ target }) {
    if (target === menuMobile || target === closeMobile) {
      menuMobile.classList.add("disabled");
    }
  }
  function removeMenu({ target }) {
    if (target.innerWidth > 860) {
      menuMobile.classList.add("disabled");
    }
  }

  return {
    openMenu: buttonMenu.addEventListener("click", openMenu),
    closeMenu: window.addEventListener("click", closeMenu),
    removeMenu: window.addEventListener("resize", removeMenu),
  };
}
