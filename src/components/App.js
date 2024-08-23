import Header from "./Header";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    // const popupAvatar = document.querySelector("#popup-avatar-profile");
    // const overlayAvatar = document.querySelector("#popup-overlay-avatar");
    // popupAvatar.classList.add("popup__opened");
    // overlayAvatar.classList.add("popup__overlay-opened");
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    // const popupEdit = document.querySelector("#popup-profile");
    // const overlayEdit = document.querySelector("#popup-overlay-edit");
    // popupEdit.classList.add("popup__opened");
    // overlayEdit.classList.add("popup__overlay-opened");
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    // const popupAdd = document.querySelector("#place-popup");
    // const overlayAdd = document.querySelector("#popup-overlay-add");
    // popupAdd.classList.add("popup__opened");
    // overlayAdd.classList.add("popup__overlay-opened");
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title="Cambiar foto de perfil"
          name="avatar"
          buttonText="Guardar"
        >
          <input
            type="url"
            className="popup__input popup__form-input popup__form-input_type_link"
            id="popup__avatar-image"
            name="avatarLink"
            placeholder="Enlace a la imagen"
            required
          />
          <span
            className="popup__error popup__form-error-message avatar-link-error"
            id="popup__avatar-image-error"
          ></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          title="Editar Perfil"
          name="profile"
          buttonText="Guardar"
        >
          <input
            className="popup__input popup__input-name"
            placeholder="Nombre"
            name="name"
            type="text"
            id="popup__input-name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__error" id="popup__input-name-error"></span>
          <input
            className="popup__input popup__input-description"
            placeholder="Descripción"
            name="about"
            type="text"
            id="popup__input-description"
            minLength="2"
            maxLength="200"
            required
          />
          <span
            className="popup__error"
            id="popup__input-description-error"
          ></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title="Nuevo Lugar"
          name="place"
          buttonText="Guardar"
        >
          <input
            className="popup__input popup__add-name"
            type="text"
            name="name"
            id="popup__add-name"
            placeholder="Título"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__error" id="popup__add-name-error"></span>
          <input
            className="popup__input popup__add-adress"
            type="url"
            name="link"
            id="popup__add-adress"
            placeholder="Enlace a la imagen"
            required
          />
          <span className="popup__error" id="popup__add-adress-error"></span>
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
