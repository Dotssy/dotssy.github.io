document.addEventListener('DOMContentLoaded', function () {
 
  // search-box open close js code
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .search");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");

  searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
      searchBox.classList.replace("fa-magnifying-glass", "fa-xmark");
    } else {
      searchBox.classList.replace("fa-xmark", "fa-magnifying-glass");
    }
  });

  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .fa-bars");
  let menuCloseBtn = document.querySelector(".nav-links .fa-xmark");

  menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
  }

  menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
  }


  // Swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 800,

    navigation: {
      nextEl: '.next-slide',
      prevEl: '.prev-slide',
    },

    autoplay: {
      delay: 5000,
    },

    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
      depth: 150,
      rotate: 100
    },

  });

  AOS.init({
    disable: "phone",
    once: true,
  });

});