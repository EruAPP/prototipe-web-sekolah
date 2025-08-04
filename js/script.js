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

// slider otomatis
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const totalImages = images.length;

let index = 0;

function slideToIndex(i) {
  const imageWidth = images[0].clientWidth;
  slider.scrollTo({
    left: i * imageWidth,
    behavior: "smooth",
  });
}

setInterval(() => {
  index = (index + 1) % totalImages; // loop kembali ke gambar pertama
  slideToIndex(index);
}, 5000); // 5 detik
