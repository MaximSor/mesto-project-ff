export function openModal(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeModalWindow);
  popup.addEventListener("click", closeModalWindow);
}

export function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeModalWindow);
  popup.removeEventListener("click", closeModalWindow);
}

function closeModalWindow(evt) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup") ||
    evt.key === "Escape"
  ) {
    const openedModal = document.querySelector(".popup_is-opened");
    closeModal(openedModal);
  }
}
