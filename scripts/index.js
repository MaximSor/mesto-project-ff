// @todo: Темплейт карточки+

// @todo: DOM узлы+

// @todo: Функция создания карточки+

// @todo: Функция удаления карточки+

// @todo: Вывести карточки на страницу+

const cardTemplate = document.querySelector("#card-template").content;

const cardList = document.querySelector(".places__list");

function creatingCard(card, deleteCard) {
  const newCard = cardTemplate.cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  const cardTitle = newCard.querySelector(".card__title");
  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  const cardDeleteButton = newCard.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", deleteCard);

  return newCard;
}

function deleteCard(card) {
  const listItem = card.target.closest(".card");
  listItem.remove();
}

initialCards.forEach((card) => {
  cardList.append(creatingCard(card, deleteCard));
});
