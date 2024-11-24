"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttons = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", openModal);
}

document.querySelector(".close-modal").addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
