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

// tab foto video
function openTab(tabName) {
  // Sembunyikan semua tab
  document
    .querySelectorAll(".row")
    .forEach((tab) => tab.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn button")
    .forEach((btn) => btn.classList.remove("active"));

  // Tampilkan tab yang dipilih
  document.getElementById(tabName).classList.add("active");

  // Tandai tombol tab aktif
  event.currentTarget.classList.add("active");
}

// Pemutar Video lokal
// const mainVideo = document.querySelector(".main-video video");
// const videoCards = document.querySelectorAll(".video-card video");

// videoCards.forEach((card) => {
//   card.addEventListener("click", () => {
//     // Simpan src dari main video & video yang diklik
//     const mainSrc = mainVideo.querySelector("source").src;
//     const clickedSrc = card.querySelector("source").src;

//     // Tukar src
//     mainVideo.querySelector("source").src = clickedSrc;
//     card.querySelector("source").src = mainSrc;

//     // Reload video supaya src baru dimainkan
//     mainVideo.load();
//     card.load();

//     // Auto play video utama setelah pindah
//     mainVideo.play();
//   });
// });

// Pemutar Video Youtube
const mainVideo = document.querySelector(".main-video iframe");
const videoCards = document.querySelectorAll(".video-card img");

videoCards.forEach((card) => {
  card.addEventListener("click", () => {
    const newId = card.getAttribute("data-id");
    const currentMainId = mainVideo.src.split("/embed/")[1].split("?")[0];

    // Swap main video dengan thumbnail
    mainVideo.src = `https://www.youtube.com/embed/${newId}?autoplay=1`;
    card.src = `https://img.youtube.com/vi/${currentMainId}/mqdefault.jpg`;
    card.setAttribute("data-id", currentMainId);
  });
});

// Simulasi sementara dari database
document.addEventListener("DOMContentLoaded", function () {
  // Simulasi HTML dari database
  const htmlFromDatabase = `
        <h2>Selamat Datang!</h2>
        <p>Ini adalah konten <b>HTML</b> yang seolah-olah diambil dari database.</p>
        <ul>
          <li>Item Pertama</li>
          <li>Item Kedua</li>
        </ul>
        <p style="color:blue;">Teks ini berwarna biru.</p>
      `;

  // Pastikan elemen sudah ada
  const contentDiv = document.getElementById("content-isi-html");
  if (contentDiv) {
    contentDiv.innerHTML = htmlFromDatabase;
  }
});
