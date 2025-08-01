// toogle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelectorAll(".navbar-nav button").forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.classList.remove("active");
  });
});
// saat menu ditekan
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// saat klik di luar
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
