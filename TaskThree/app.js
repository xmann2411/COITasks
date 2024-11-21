let swiper; // Referenca na Swiper instancu

// Funkcija za inicijalizaciju Swiper-a
function initializeSwiper() {
  swiper = new Swiper(".swiper", {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: () => {
        console.log("Active slide index:", swiper.activeIndex);
      },
    },
  });

  // Prikaz strelica
  document.querySelector(".swiper-button-prev").style.display = "block";
  document.querySelector(".swiper-button-next").style.display = "block";
}

// Funkcija za uništavanje Swiper-a
function destroySwiper() {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
    console.log("Swiper destroyed.");
  }

  // Sakrivanje strelica
  document.querySelector(".swiper-button-prev").style.display = "none";
  document.querySelector(".swiper-button-next").style.display = "none";
}

// Prvo inicijalizujemo Swiper
initializeSwiper();

// Dodajemo dugme za uključivanje/isključivanje
document.getElementById("toggle-swiper").addEventListener("click", () => {
  if (swiper) {
    destroySwiper(); // Uništava Swiper ako je aktivan
  } else {
    initializeSwiper(); // Ponovo inicijalizuje Swiper ako je deaktiviran
  }
});
