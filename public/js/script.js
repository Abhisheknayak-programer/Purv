//NAV BAR FUNCTIONALITY
const Burger = document.querySelector(".burger");
const Nav = document.querySelector(".nav");

Burger.addEventListener("click", function () {
  Nav.classList.toggle("navBarActive");
  Burger.classList.toggle("toggle");
});
