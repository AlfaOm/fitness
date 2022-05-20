import "../vendor/swiper";

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
