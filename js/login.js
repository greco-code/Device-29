const contactLink = document.querySelector(".contacts-button");
const writePopup = document.querySelector(".modal-write");
const writeClose = writePopup.querySelector(".modal-close");
const writeName = writePopup.querySelector(".write-name-input");
const writeEmail = writePopup.querySelector(".write-email-input");
const writeLetter = writePopup.querySelector(".write-letter-textarea");
const writeForm = writePopup.querySelector(".write-form");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");

  if (storage) {
    writePopup.value = storage;
    writeEmail.focus();
  } else {
    writeLetter.focus();
  }
  if (storage) {
    writePopup.value = storage;
  }
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
  writePopup.classList.remove("modal-error");
});

writeForm.addEventListener("submit", function (evt) {
  if (!writeName.value || !writeEmail.value || !writeLetter.value) {
    evt.preventDefault();
    writePopup.classList.add("modal-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", writeName.value);
      localStorage.setItem("email", writeEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writePopup.classList.remove("modal-show");
      writePopup.classList.remove("modal-error");
    }
  }
});
