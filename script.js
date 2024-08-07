const anchorsDisplay = document.querySelector(".anchors-display .open");
const anchorsClose = document.querySelector(".anchors-display .close");
const anchors = document.querySelector(".anchors");
anchorsDisplay.addEventListener("click", () => {
  anchorsDisplay.classList.add("none");
  anchorsClose.classList.remove("none");
  anchors.classList.remove("none");
  anchors.classList.add("initial");
});
anchorsClose.addEventListener("click", () => {
  anchorsDisplay.classList.remove("none");
  anchorsClose.classList.add("none");
  anchors.classList.add("none");
  anchors.classList.remove("initial");
});

const toTop = document.querySelector(".toTop");
const toTopIcon = document.querySelector(".toTop .icon");
document.body.onscroll = () => {
  window.scrollY > 500
    ? toTop.classList.remove("none")
    : toTop.classList.add("none");
};
toTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
toTopIcon.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const searchView = document.querySelector(".search");
const searchNavbarBtn = document.querySelector(".links .icon.f-main");
const searchViewBtn = document.querySelector(".search .input .icon");
searchViewBtn.addEventListener("click", () => {
  searchView.classList.add("none");
});
searchNavbarBtn.addEventListener("click", () => {
  searchView.classList.remove("none");
});
