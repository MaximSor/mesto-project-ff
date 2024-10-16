import "./pages/index.css";
import { initialCards } from "./scripts/cards";
import { creatingCard, deleteCard, likeCard } from "./scripts/card";
import { openModal, closeModal } from "./scripts/modal";

const cardsContainer = document.querySelector(".places__list");
const popupTypeImage = document.querySelector(".popup_type_image");
const imagePopup = popupTypeImage.querySelector(".popup__image");
const titlePopup = popupTypeImage.querySelector(".popup__caption");
const editPopup = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const profilTitle = document.querySelector(".profile__title");
const profilDiscription = document.querySelector(".profile__description");
const addProfilButton = document.querySelector(".profile__add-button");
const editProfilButton = document.querySelector(".profile__edit-button");
const formElementProfil = document.forms["edit-profile"];
const formElementCard = document.forms["new-place"];
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_url");

initialCards.forEach((card) => {
  cardsContainer.append(creatingCard(card, deleteCard, openImage, likeCard));
});

function openImage(card) {
  imagePopup.src = card.link;
  titlePopup.textContent = card.name;
  imagePopup.alt = card.name;
  openModal(popupTypeImage);
}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  profilTitle.textContent = nameInput.value;
  profilDiscription.textContent = jobInput.value;
  closeModal(editPopup);
}

function handlerNewProfil() {
  formElementProfil.name.value = profilTitle.textContent;
  formElementProfil.description.value = profilDiscription.textContent;
  openModal(editPopup);
}

function handlerNewCard() {
  openModal(popupNewCard);
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const newCardElement = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  const cardElement = creatingCard(
    newCardElement,
    deleteCard,
    openImage,
    likeCard
  );
  cardsContainer.prepend(cardElement);
  closeModal(popupNewCard);
  formElementCard.reset();
}

editProfilButton.addEventListener("click", handlerNewProfil);
addProfilButton.addEventListener("click", handlerNewCard);
formElementProfil.addEventListener("submit", handleProfileSubmit);
formElementCard.addEventListener("submit", handleCardSubmit);
