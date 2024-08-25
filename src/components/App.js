import Header from "./Header";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#000",
      }}
    >
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
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
        <ImagePopup
          isOpen={isImagePopupOpen}
          link={selectedCard.link}
          title={selectedCard.title}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
