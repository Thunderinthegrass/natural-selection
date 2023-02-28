function mobileMenu() {
  let menuBtn = document.querySelector(".menu-btn"),
    menuBtnElem = document.querySelector(".menu-btn__elem"),
    headerMenu = document.querySelector(".header__menu"),
    headerMenuItem = document.querySelectorAll(".header__menu-item"),
    overlay = document.querySelector('.overlay');

  function menuBtnAnim() {
      menuBtn.classList.toggle("menu-btn--active"),
      menuBtnElem.classList.toggle("menu-btn__elem--active"),
      headerMenu.classList.toggle("menu--active");
      overlay.classList.toggle('overlay--visible');
      document.body.classList.toggle('ov-hidden');
  }

  function hiddMenu() {
    "block" === window.getComputedStyle(menuBtn).display && menuBtnAnim();
  }

  menuBtn.addEventListener("click", menuBtnAnim);
  overlay.addEventListener('click', menuBtnAnim);
  headerMenuItem.addEventListener('click', menuBtnAnim);

  for (let e = 0; e < headerMenuItem.length; e++)
    headerMenuItem[e].addEventListener("click", hiddMenu);
}
mobileMenu();