const coachesSlide = document.querySelectorAll(".coaches__slide");
const coachesCardInfo = document.querySelectorAll(".coaches__card-info");
const headingAll = document.querySelectorAll(".coaches__slide h3");

const windowInnerWidth = document.documentElement.clientWidth;
const headingSlide = Array.from(headingAll);

console.log(windowInnerWidth);

export const showCardCoaches = () => {
  coachesSlide.forEach(function (tab, i) {
    tab.addEventListener("click", function () {
      // if (windowInnerWidth < 1199) {
      //   coachesCardInfo[i].style.display = "block";
      //   headingSlide.forEach((el) => {
      //     el.style.top = "52px";
      //     el.style.zIndex = 2;
      //     el.style.left = "48%";
      //   });
      // }

      if (
        windowInnerWidth <= 1199 &&
        getComputedStyle(coachesCardInfo[i]).display === "none"
      ) {
        coachesCardInfo[i].style.display = "block";
        headingSlide.forEach((el) => {
          el.style.bottom = "";
          el.style.top = "52px";
          el.style.zIndex = 2;
          el.style.left = "48%";

          if (windowInnerWidth <= 767) {
            el.style.top = "42px";
            el.style.left = "50%";
          }
        });
      } else {
        coachesCardInfo[i].style.display = "none";
        headingSlide.forEach((el) => {
          el.style.top = "";
          el.style.bottom = "22px";
          el.style.left = "50%";
        });
      }
    });
  });
};
