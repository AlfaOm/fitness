import "../vendor/swiper";

const noJs = document.querySelector(".coaches__wrapper-swiper");

noJs.classList.remove("coaches__wrapper-swiper--nojs");

export const switchSwiper = () => {
  const mySwiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    slidersPerGroup: 1,

    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  });
};
