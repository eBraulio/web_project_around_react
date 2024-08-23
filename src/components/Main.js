import profileAvatar from "../images/profile_avatar-foto.png";
import trashIcon from "../images/vector/Trash-icon.svg";
import { useState, useEffect } from "react";
import api from "../utils/api";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  useEffect(() => {
    async function getValues() {
      const response = await api.getUserInfo();
      console.log(response);
    }
    getValues();
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatarClick}>
          <img
            className="profile__avatar-image"
            id="profile__avatar-image"
            alt="Profile picture"
            src={profileAvatar}
          />
          <button
            title="editar-foto-perfil"
            className="profile__avatar-button-edit"
            type="button"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-container">
            <p className="profile__name"></p>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <p className="profile__description"></p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="elements" id="elements"></section>

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

      <template id="template__elements">
        <div className="template__element">
          <img
            src={trashIcon}
            alt="Icono de Eliminar foto"
            className="element__trash-icon"
          />
          <div className="element__image-container">
            <img src=" " alt=" " className="element__image" />
          </div>
          <div className="element__button">
            <h2 className="element__text"></h2>
            <div className="element__container">
              <div className="element__like-button"></div>
              <span className="element__like-number"></span>
            </div>
          </div>
        </div>
      </template>
    </main>
  );
}
