import "../vendor/swiper";

// const noJs = document.querySelector(".reviews__wrapper-swiper");

// noJs.classList.remove("reviews__wrapper-swiper--nojs");

export const switchSwiperReviews = () => {
  const mySwiper = new Swiper(".swiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidersPerGroup: 1,

    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });
};
