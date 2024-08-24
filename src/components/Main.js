import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";
export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function getUserInfo() {
      const response = await api.getUserInfo();
      //   console.log(response);
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
    }
    getUserInfo();
  }, []);

  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      //   console.log(response);
      setCards(response);
    }
    getCards();
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatarClick}>
          <img
            className="profile__avatar-image"
            style={{
              backgroundImage: `url(${userAvatar})`,
            }}
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
            <p className="profile__name">{userName}</p>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
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
