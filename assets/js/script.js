const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav-ul");
const date = document.getElementById("date");
const loading = document.querySelector(".loading");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

let year = new Date().getFullYear();
date.textContent = year;

var heroType = new Typed(".home-header", {
  strings: ["Ensuring A Stable Price For Investors"],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
  backDelay: 5000,
  showCursor: false,
});

var aboutType = new Typed(".about-header", {
  strings: ["The New Blockchain Project Promised To Tevolutionize"],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
  backDelay: 5000,
  showCursor: false,
});

var featuresType = new Typed(".features-header", {
  strings: ["my features"],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
  backDelay: 5000,
  showCursor: false,
});

var planType = new Typed(".plan-header", {
  strings: ["our plan and utility"],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
  backDelay: 5000,
  showCursor: false,
});

window.addEventListener("load", () => {
  loading.style.display = "none";
});
