import {findVideos} from "./modules/video";
import {toggleTab} from "./modules/toggle-tab";
import {switchSwiper} from "./modules/coaches-swiper";

window.addEventListener("DOMContentLoaded", () => {


  window.addEventListener("load", () => {
    findVideos();
    toggleTab();
    switchSwiper();
  });
});
