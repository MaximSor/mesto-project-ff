import "./pages/index.css";
import {
  creatingCard,
  deleteCardHandler,
  likeCardHandler,
} from "./scripts/card";
import { openModal, closeModal } from "./scripts/modal";
import {
  getUser,
  getInitialCard,
  changeUserData,
  addNewCard,
  deleteCard,
  likeCard,
  dislikeCard,
  editAvatar,
} from "./scripts/api";
import { enableValidation, clearValidation } from "./scripts/validation";

const cardsContainer = document.querySelector(".places__list");
const popupTypeImage = document.querySelector(".popup_type_image");
const imagePopup = popupTypeImage.querySelector(".popup__image");
const titlePopup = popupTypeImage.querySelector(".popup__caption");
const editPopup = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const profilTitle = document.querySelector(".profile__title");
const profilDiscription = document.querySelector(".profile__description");
const profilImage = document.querySelector(".profile__image");
const addProfilButton = document.querySelector(".profile__add-button");
const editProfilButton = document.querySelector(".profile__edit-button");
const formElementProfil = document.forms["edit-profile"];
const formElementCard = document.forms["new-place"];
const formElementAvatar = document.forms["edit-avatar"];
const avatarButton = document.querySelector(".profile__image_change");
const popupAvatar = document.querySelector(".popup_type_edit-avatar");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
let userId;

enableValidation(validationConfig);

function renderCard(cardData) {
  const card = creatingCard(
    cardData,
    deleteCardHandler,
    openImage,
    likeCardHandler,
    likeCard,
    dislikeCard,
    deleteCard,
    userId
  );
  cardsContainer.prepend(card);
}

function openImage(evt) {
  imagePopup.src = evt.target.src;
  titlePopup.textContent = evt.target.alt;
  openModal(popupTypeImage);
}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  const popupName = formElementProfil.elements.name.value;
  const popupDescription = formElementProfil.elements.description.value;
  changeUserData(popupName, popupDescription)
    .then((userData) => {
      profilTitle.textContent = userData.name;
      profilDiscription.textContent = userData.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((formElementProfil.elements.submit.textContent = "Сохранить"));
  closeModal(editPopup);
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const popupPlaceName = formElementCard.elements["place-name"];
  const popupLink = formElementCard.elements.link;
  addNewCard(popupPlaceName.value, popupLink.value)
    .then((newCard) => {
      renderCard(newCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((formElementCard.elements.submit.textContent = "Сохранить"));
}

function handleAvatarSubmit(evt) {
  evt.preventDefault();
  const popupLink = formElementAvatar.elements.link;
  editAvatar(popupLink.value)
    .then((res) => {
      profilImage.setAttribute(
        "style",
        `background-image: url(${res.avatar});`
      );
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((formElementAvatar.elements.submit.textContent = "Сохранить"));
  closeModal(popupAvatar);
}

formElementProfil.addEventListener("submit", (evt) => {
  formElementProfil.elements.submit.textContent = "Сохранение...";
  handleProfileSubmit(evt);
});

formElementCard.addEventListener("submit", (evt) => {
  formElementCard.elements.submit.textContent = "Сохранение...";
  handleCardSubmit(evt);
});

formElementAvatar.addEventListener("submit", (evt) => {
  formElementAvatar.elements.submit.textContent = "Сохранение...";
  handleAvatarSubmit(evt);
});

editProfilButton.addEventListener("click", () => {
  formElementProfil.reset();
  const popupName = formElementProfil.elements.name;
  const popupDescription = formElementProfil.elements.description;
  popupName.value = profilTitle.textContent;
  popupDescription.value = profilDiscription.textContent;
  clearValidation(formElementProfil, validationConfig);
  openModal(editPopup);
});

addProfilButton.addEventListener("click", () => {
  formElementCard.reset();
  clearValidation(formElementCard, validationConfig);
  openModal(popupNewCard);
});

avatarButton.addEventListener("click", () => {
  formElementAvatar.reset();
  const avatarLink = formElementAvatar.elements.link;
  getUser()
    .then((userData) => {
      avatarLink.value = userData.avatar;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(clearValidation(formElementAvatar, validationConfig));
  openModal(popupAvatar);
});

function setInitialData() {
  Promise.all([getUser(), getInitialCard()])
    .then(([userData, cards]) => {
      userId = userData._id;
      profilTitle.textContent = userData.name;
      profilDiscription.textContent = userData.about;
      profilImage.setAttribute(
        "style",
        `background-image: url(${userData.avatar});`
      );
      cards.forEach(renderCard);
    })
    .catch((err) => {
      console.log(err);
    });
}

setInitialData();
