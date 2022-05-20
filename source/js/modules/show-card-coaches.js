const coachesSlide = document.querySelectorAll(".coaches__slide");
const coachesCardInfo = document.querySelectorAll(".coaches__card-info");
const headingAll = document.querySelectorAll(".coaches__slide h3");

const headingSlide = Array.from(headingAll);

const TAB_WIDTH = 1199;
const MOB_WIDTH = 767;
const DESKTOP_WIDTH = 1200;

function myCoolFunction() {
  const windowInnerWidth = document.documentElement.clientWidth;
  const i = Array.prototype.indexOf.call(coachesSlide, this);
  if (windowInnerWidth < DESKTOP_WIDTH) {
    if (
      windowInnerWidth <= TAB_WIDTH &&
      !coachesCardInfo[i].classList.contains("coaches__card-info--tab-show")
    ) {
      coachesCardInfo[i].classList.add("coaches__card-info--tab-show");

      headingSlide[i].style.bottom = "";
      headingSlide[i].style.top = "52px";
      headingSlide[i].style.zIndex = 2;
      headingSlide[i].style.left = "48%";

      if (windowInnerWidth <= MOB_WIDTH) {
        headingSlide[i].style.top = "42px";
        headingSlide[i].style.zIndex = 2;
        headingSlide[i].style.left = "50%";
      }
    } else if (
      windowInnerWidth < DESKTOP_WIDTH &&
      coachesCardInfo[i].classList.contains("coaches__card-info--tab-show")
    ) {
      coachesCardInfo[i].classList.remove("coaches__card-info--tab-show");

      headingSlide[i].style.top = "";
      headingSlide[i].style.bottom = "22px";
      headingSlide[i].style.left = "50%";
    }
  }
}

export const showCardCoaches = () => {
  coachesSlide.forEach(function (tab) {
    tab.removeEventListener("click", myCoolFunction);
    tab.addEventListener("click", myCoolFunction);
  });
};
