const deliveryButton = document.querySelector(".features-list-item-delivery");
const guarantyButton = document.querySelector(".features-list-item-guaranty");
const creditButton = document.querySelector(".features-list-item-credit");

const deliverySlide = document.querySelector(".delivery-content");
const guarantySlide = document.querySelector(".guaranty-content");
const creditSlide = document.querySelector(".credit-content");

deliveryButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  guarantySlide.classList.remove("features-slide-current");
  guarantyButton.classList.remove("features-list-current");
  creditSlide.classList.remove("features-slide-current");
  creditButton.classList.remove("features-list-current");
  deliverySlide.classList.add("features-slide-current");
  deliveryButton.classList.add("features-list-current");
});

guarantyButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  creditSlide.classList.remove("features-slide-current");
  creditButton.classList.remove("features-list-current");
  deliverySlide.classList.remove("features-slide-current");
  deliveryButton.classList.remove("features-list-current");
  guarantySlide.classList.add("features-slide-current");
  guarantyButton.classList.add("features-list-current");
});

creditButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  deliverySlide.classList.remove("features-slide-current");
  deliveryButton.classList.remove("features-list-current");
  guarantySlide.classList.remove("features-slide-current");
  guarantyButton.classList.remove("features-list-current");
  creditSlide.classList.add("features-slide-current");
  creditButton.classList.add("features-list-current");
});
