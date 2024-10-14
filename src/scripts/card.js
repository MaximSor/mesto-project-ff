const cardTemplate = document.querySelector("#card-template").content;

export function creatingCard(card, deleteCard, openImage, likeCard) {
  const newCard = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  const cardTitle = newCard.querySelector(".card__title");
  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  const cardDeleteButton = newCard.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => deleteCard(newCard));
  cardImage.addEventListener("click", () => openImage(card));
  newCard.addEventListener("click", likeCard);

  return newCard;
}

export function deleteCard(newCard) {
  newCard.remove();
}

export function likeCard(evt) {
  if (evt.target.classList.contains("card__like-button")) {
    evt.target.classList.toggle("card__like-button_is-active");
  }
}
