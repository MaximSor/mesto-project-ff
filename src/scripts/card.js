const cardTemplate = document.querySelector("#card-template").content;

export function creatingCard(
  cardData,
  deleteCardHandler,
  openImage,
  likeCardHandler,
  likeCard,
  dislikeCard,
  deleteCard,
  userId
) {
  const title = cardData.name;
  const image = cardData.link;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeCount = cardElement.querySelector(".card__like-counter");
  const cardlikeButton = cardElement.querySelector(".card__like-button");

  cardTitle.textContent = title;
  cardImage.src = image;
  cardImage.alt = title;
  cardLikeCount.textContent = cardData.likes.length;

  const checkOwner = (ownerId, userId, cardDeleteButton) => {
    if (ownerId !== userId) {
      cardDeleteButton.setAttribute("style", "display: none;");
    }
  };

  checkOwner(cardData.owner._id, userId, cardDeleteButton);

  if (cardData.likes.some((likeInfo) => userId === likeInfo._id)) {
    cardlikeButton.classList.add("card__like-button_is-active");
  }

  cardDeleteButton.addEventListener("click", () => {
    deleteCardHandler(cardElement, cardData._id, deleteCard);
  });

  cardlikeButton.addEventListener("click", () => {
    likeCardHandler(
      cardlikeButton,
      cardLikeCount,
      cardData._id,
      likeCard,
      dislikeCard
    );
  });

  cardImage.addEventListener("click", () => openImage(cardData));

  return cardElement;
}

export const deleteCardHandler = (card, cardId, deleteCard) => {
  deleteCard(cardId)
    .then(() => {
      card.remove();
    })
    .catch((err) => console.log(err));
};

export const likeCardHandler = (
  cardlikeButton,
  cardLikeCount,
  cardId,
  like,
  dislike
) => {
  const likeMethod = cardlikeButton.classList.contains(
    "card__like-button_is-active"
  )
    ? dislike
    : like;
  likeMethod(cardId)
    .then((newCardData) => {
      cardLikeCount.textContent = newCardData.likes.length;
      cardlikeButton.classList.toggle("card__like-button_is-active");
    })
    .catch((err) => console.log(err));
};
