export const findVideo = () => {
  let video = document.querySelector(".video");
  setupVideo(video);
}

const setupVideo = (video) => {
  let link = video.querySelector(".video__link");
  let button = video.querySelector(".video__button");

  video.addEventListener("click", (evt) => {
    evt.preventDefault();
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute("href");
  // video.classList.add('video--enabled');
}

function createIframe() {
  let iframe = document.createElement("iframe");

  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", "https://www.youtube.com/watch?v=9TZXsZItgdw");
  // iframe.classList.add("video__media");

  return iframe;
}


// export { findVideo };
