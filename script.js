const watchNowButton = document.getElementById("watchNow-btn");
const closeButton = document.getElementById("close-btn");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");

watchNowButton.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
});

closeButton.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
