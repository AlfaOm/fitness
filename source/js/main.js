import {findVideos} from "./modules/video";
import {toggleTab} from "./modules/toggle-tab";
import {switchSwiper} from "./modules/coaches-swiper";
import {switchSwiperReviews} from "./modules/switch-reviews";
import {validateInput} from "./modules/form";

window.addEventListener("DOMContentLoaded", () => {


  window.addEventListener("load", () => {
    findVideos();
    toggleTab();
    switchSwiper();
    switchSwiperReviews();
    validateInput();
  });
});
