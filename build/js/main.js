// import {findVideo} from "./modules/video";

window.addEventListener("DOMContentLoaded", () => {
  function findVideos() {
    let video = document.querySelector(".video");
    setupVideo(video);
  }

  function setupVideo(video) {
    let link = video.querySelector(".video__link");
    // let media = video.querySelector(".video__media");
    // let button = video.querySelector(".video__button");
    // let id = parseMediaURL(media);

    video.addEventListener("click", (evt) => {
      evt.preventDefault();
      let iframe = createIframe();

      link.remove();
      // button.remove();
      video.appendChild(iframe);
    });

    link.removeAttribute("href");

    video.addEventListener("keydown", function (evt) {
      if (evt.key === "Enter") {
        evt.preventDefault();
        let iframe = createIframe();

        link.remove();
        video.appendChild(iframe);
      }
    });
  }

  // function parseMediaURL(media) {
  //   let url = media.src;

  //   return url;
  // }

  function createIframe(id) {
    let iframe = document.createElement("iframe");

    iframe.setAttribute("allowfullscreen", "");
    // iframe.setAttribute("allow", "autoplay");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("src", generateURL(id));
    iframe.classList.add("video__media--show");

    return iframe;
  }

  function generateURL() {
    let query = "https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1";

    return query;
  }

  findVideos();

  // Переключение табов

  let tab = document.querySelectorAll(".subscriptions__item");
  let content = document.querySelectorAll(".subscriptions__cards");

  const toggleTab = () => {
    tab.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        hideTab();

        this.classList.add("subscriptions__item--current");
        content[i].classList.add("subscriptions__cards--show");
      });
    });
  };
  toggleTab();

  function hideTab() {
    tab.forEach((item) => {
      item.classList.remove("subscriptions__item--current");
    });
    content.forEach((item) => {
      item.classList.remove("subscriptions__cards--show");
    });
  }

  const toggleKeyTab = () => {
  tab.forEach(function (tab, i) {
    tab.addEventListener("keydown", function (evt) {
      if (evt.key === "Enter") {
        // evt.preventDefault();
        hideTab();
        tab.classList.add("subscriptions__item--current");
        content[i].classList.add("subscriptions__cards--show");
      }
    });
  });
}
toggleKeyTab();



  window.addEventListener("load", () => {
    // findVideo();
  });
});
