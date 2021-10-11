const hamburgerOpenButton = document.querySelector(".header-right > a");
const hamburgerInternalLinkList = document.querySelectorAll(
  ".hamburger-menu > ul > li> a"
);
const hamburgerCloseButton = document.querySelector(".close");
const menuView = document.querySelector(".hamburger-menu");

function toggleHamburger() {
  menuView.classList.toggle("active");
}

hamburgerOpenButton.addEventListener("click", toggleHamburger);
hamburgerCloseButton.addEventListener("click", toggleHamburger);
hamburgerInternalLinkList.forEach((element) => {
  element.addEventListener("click", toggleHamburger);
});
