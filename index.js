let header = document.querySelector(".header");
let burgerBtn = document.querySelector(".header__burger__btn");
burgerBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});
