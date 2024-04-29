const navLinks = document.querySelector(".navlinks");
const openNavbar = document.querySelector("#navToggleOpen");
const closeNavbar = document.querySelector("#navToggleClose");

openNavbar.addEventListener("click", () => {
  navLinks.style.display = "flex";
  openNavbar.style.display = "none";
  closeNavbar.style.display = "inline-block";
});

closeNavbar.addEventListener("click", () => {
  navLinks.style.display = "none";
  openNavbar.style.display = "inline-block";
  closeNavbar.style.display = "none";
});
