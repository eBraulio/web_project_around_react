import Header from "./Header";
import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../context/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  //Sprint 12
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    async function getUserInfo() {
      const response = await api.getUserInfo();
      setCurrentUser(response);
    }
    getUserInfo();
  }, []);

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

  function handleUpdateUser(userData) {
    api.editProfile(userData).then((newUser) => {
      setCurrentUser(newUser);
    });
  }

  function handleUpdateAvatar(link) {
    api.editAvatarProfile(link).then((newUser) => {
      setCurrentUser(newUser);
    });
  }
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#000",
      }}
    >
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
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
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
