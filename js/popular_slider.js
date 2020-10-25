const monopodButton = document.querySelector(".crumbs-button-monopod");
const fitnessButton = document.querySelector(".crumbs-button-fitness");
const quadcopterButton = document.querySelector(".crumbs-button-quadcopter");

const monopodSlide = document.querySelector(".monopod-popular-product");
const fitnessSlide = document.querySelector(".fitness-popular-product");
const quadcopterSlide = document.querySelector(".quadcopter-popular-product");

monopodButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  fitnessSlide.classList.remove("slide-current");
  fitnessButton.classList.remove("crumb-current");
  quadcopterSlide.classList.remove("slide-current");
  quadcopterButton.classList.remove("crumb-current");
  monopodSlide.classList.add("slide-current");
  monopodButton.classList.add("crumb-current");
});

fitnessButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  quadcopterSlide.classList.remove("slide-current");
  quadcopterButton.classList.remove("crumb-current");
  monopodSlide.classList.remove("slide-current");
  monopodButton.classList.remove("crumb-current");
  fitnessSlide.classList.add("slide-current");
  fitnessButton.classList.add("crumb-current");
});

quadcopterButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  monopodSlide.classList.remove("slide-current");
  monopodButton.classList.remove("crumb-current");
  fitnessSlide.classList.remove("slide-current");
  fitnessButton.classList.remove("crumb-current");
  quadcopterSlide.classList.add("slide-current");
  quadcopterButton.classList.add("crumb-current");
});
