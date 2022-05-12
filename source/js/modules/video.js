export const findVideos = () => {
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
