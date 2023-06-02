const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2500,
  reset: true,
});

sr.reveal(".home-text", { delay: 300 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".container", { delay: 400 });
sr.reveal(".about-img", {});
sr.reveal(".about-text", { delay: 300 });
sr.reveal(".contact", { delay: 300 });
