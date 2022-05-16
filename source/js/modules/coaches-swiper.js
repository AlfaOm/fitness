import "../vendor/swiper";

const noJs = document.querySelector(".coaches__wrapper-swiper");

noJs.classList.remove("coaches__wrapper-swiper--nojs");

export const switchSwiper = () => {
  const mySwiper = new Swiper(".swiper1", {
    slidesPerView: 4,
    spaceBetween: 40,
    slidersPerGroup: 1,

    loop: true,

    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
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
