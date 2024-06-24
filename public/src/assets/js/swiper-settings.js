let categoriesNavbarSwiper = new Swiper(".categories-navbar-swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 220px
    220: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});


const homeSlider = new Swiper(".home-slider", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".home-slider-bullets",
    clickable: true,
  },
  on: {
    slideChange: function () {
      const activeSlide = this.slides[this.activeIndex];
      const newColor = activeSlide.getAttribute("data-color");
      document.querySelector(".exclamation").style.setProperty("--bg", newColor);
    },
  },
});


const gastronomySwiper = new Swiper(".gastronomy-swiper", {
  slidesPerView: 4,
  spaceBetween: 50,
  centeredSlides: false,

  navigation: {
    nextEl: ".swiper-arrow-button-right",
    prevEl: ".swiper-arrow-button-left",
  },

  breakpoints: {
    280: {
      slidesPerView: 1,
    },

    302: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    340: {
      slidesPerView: 1,
      spaceBetween: 1,
    },

    340: {
      slidesPerView: 1,
      spaceBetween: -5,
    },

    376: {
      slidesPerView: 1,
      spaceBetween: -60,
    },

    417: {
      slidesPerView: 1,
      spaceBetween: -100,
    },

    461: {
      slidesPerView: 1,
      spaceBetween: -140,
    },

    500: {
      slidesPerView: 1,
      spaceBetween: -180,
    },

    541: {
      slidesPerView: 1,
      spaceBetween: -220,
    },

    563: {
      slidesPerView: 1,
      spaceBetween: -250,
    },

    593: {
      slidesPerView: 2,
      spaceBetween: -10,
    },

    665: {
      slidesPerView: 2,
      spaceBetween: -80,
    },

    727: {
      slidesPerView: 2,
      spaceBetween: -130,
    },

    775: {
      slidesPerView: 2,
      spaceBetween: -160,
    },

    775: {
      slidesPerView: 2,
      spaceBetween: -180,
    },

    815: {
      slidesPerView: 2,
      spaceBetween: -220,
    },

    861: {
      slidesPerView: 2,
      spaceBetween: -250,
    },

    887: {
      slidesPerView: 3,
      spaceBetween: -10,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: -150,
    },

    1095: {
      slidesPerView: 3,
      spaceBetween: -220,
    },

    1141: {
      slidesPerView: 3,
      spaceBetween: -250,
    },

    1169: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});