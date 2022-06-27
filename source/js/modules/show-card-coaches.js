const coachesSlide = document.querySelectorAll(".coaches__slide");
const coachesCardInfo = document.querySelectorAll(".coaches__card-info");
const headingAll = document.querySelectorAll(".coaches__slide h3");

const headingSlide = Array.from(headingAll);

const TAB_WIDTH = 1199;
const MOB_WIDTH = 767;
const DESKTOP_WIDTH = 1200;

function toggleCardCoaches() {
  const windowInnerWidth = document.documentElement.clientWidth;
  const i = Array.prototype.indexOf.call(coachesSlide, this);
  if (windowInnerWidth < DESKTOP_WIDTH) {
    if (
      windowInnerWidth <= TAB_WIDTH &&
      !coachesCardInfo[i].classList.contains("coaches__card-info--tab-show")
    ) {
      coachesCardInfo[i].classList.add("coaches__card-info--tab-show");

      headingSlide[i].style.display = "none";
    } else if (
      windowInnerWidth < DESKTOP_WIDTH &&
      coachesCardInfo[i].classList.contains("coaches__card-info--tab-show")
    ) {
      coachesCardInfo[i].classList.remove("coaches__card-info--tab-show");

      headingSlide[i].style.display = "block";
    }
  }
}

export const showCardCoaches = () => {
  coachesSlide.forEach(function (tab) {
    tab.removeEventListener("click", toggleCardCoaches);
    tab.addEventListener("click", toggleCardCoaches);
  });
};
