const categoriesNavbarSwiper = new Swiper(".categories-navbar-swiper", {
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
    nextEl: ".gastronomy-arrow-button-right",
    prevEl: ".gastronomy-arrow-button-left",
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

const aestheticsWellbeing = new Swiper(".aesthetics-wellbeing-swiper", {
  slidesPerView: 4,
  spaceBetween: 50,
  centeredSlides: false,

  navigation: {
    nextEl: ".aesthetics-wellbeing-arrow-button-right",
    prevEl: ".aesthetics-wellbeing-arrow-button-left",
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

const aboutAesthetics = new Swiper(".about-aesthetics-swiper", {
  slidesPerView: 4,
  spaceBetween: 50,
  centeredSlides: false,

  navigation: {
    nextEl: ".about-aesthetics-arrow-button-right",
    prevEl: ".about-aesthetics-arrow-button-left",
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

const partnersCarrousel = new Swiper(".partners-carrousel", {
  slidesPerView: 4,
  spaceBetween: 185,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    220: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    775: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    823: {
      slidesPerView: 4,
      spaceBetween: 66,
    },
    841: {
      slidesPerView: 4,
      spaceBetween: 70,
    },
    887: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    911: {
      slidesPerView: 4,
      spaceBetween: 90,
    },
    953: {
      slidesPerView: 4,
      spaceBetween: 110,
    },
    1013: {
      slidesPerView: 4,
      spaceBetween: 130,
    },
    1069: {
      slidesPerView: 4,
      spaceBetween: 144,
    },
    1125: {
      slidesPerView: 4,
      spaceBetween: 166,
    },
    1215: {
      slidesPerView: 4,
      spaceBetween: 180,
    },
    1285: {
      slidesPerView: 4,
      spaceBetween: 185,
    },
    1375: {
      slidesPerView: 4,
      spaceBetween: 186,
    }
  },
});

const benefitsSlider = new Swiper(".benefits-slider", {
  pagination: {
    el: ".indicators",
    clickable: true,
  },
});

const productSubcategories = new Swiper(".subcategory-carousel", {
  slidesPerView: 4,
  spaceBetween: 20, // Optional: Adjust as needed
  loop: true, // Optional: Enable looping
  navigation: {
    nextEl: '.subcategory-carousel-next',
    prevEl: '.subcategory-carousel-prev',
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
    }
  }
});




const productImageSwiper = new Swiper(".main-product-slider", {
  slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
});

const thumbnailProductSlider = new Swiper(".thumbnail-product-slider", {
  spaceBetween: 5,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 6, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slideToClickedSlide: true,
});

productImageSwiper.controller.control = thumbnailProductSlider;
thumbnailProductSlider.controller.control = productImageSwiper;
