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

navLinks.addEventListener("click", (e) => {
  e.preventDefault();
  const attName = e.target.getAttribute("href").slice(1);
  const idName = document.getElementById(attName);
  const idPosition = idName.offsetTop - 65.3;

  console.log(idPosition);
  window.scrollTo(0, idPosition);
});
