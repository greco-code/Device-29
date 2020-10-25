const contactLink = document.querySelector(".contacts-button");
const writePopup = document.querySelector(".modal-write");
const writeClose = document.querySelector(".modal-close");
const writeName = document.querySelector(".write-name-input");
const writeEmail = document.querySelector(".write-email-input");
const writeLetter = document.querySelector(".write-letter-textarea");
const writeForm = document.querySelector(".write-form");

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
    writeName.focus();
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
    writePopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", writeName.value);
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
