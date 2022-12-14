document.getElementById("date").innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".icon-icon");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show-links");
  });
});
