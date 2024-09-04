import { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../context/CurrentUserContext";

export default function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();

      setCards(response);
    }
    getCards();
  }, []);

  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCard) => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatarClick}>
          <img
            className="profile__avatar-image"
            src={currentUser.avatar}
            alt="Profile picture"
          />
          <button
            title="editar-foto-perfil"
            className="profile__avatar-button-edit"
            type="button"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-container">
            <p className="profile__name">{currentUser.name}</p>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfileClick}
            ></button>
          </div>

          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="elements" id="elements">
        {cards.map((card) => (
          <Card
            onCardClick={props.onCardClick}
            card={card}
            key={card._id}
            name={card.name}
            likes={card.likes}
            link={card.link}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>

      <div className="popup" id="popup-delete-confirmation">
        <div className="popup__overlay" id="popup-overlay-confirmation"></div>
        <div className="popup__container popup__container_type_delete-confirmation">
          <h2 className="popup__title">¿Estás seguro?</h2>
          <form
            name="delete-confirmation-form"
            className="popup__edit popup__edit-form popup__form popup__form_delete-confirmation"
          >
            <button
              type="submit"
              value="submit"
              className="popup__form-button popup__save-button"
            >
              Sí
            </button>
            <button
              className="popup__close-button popup__close-confirmation popup__close-form"
              id="popup__close-confirmation"
              type="button"
            ></button>
          </form>
        </div>
      </div>
    </main>
  );
}
