import React, { createRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = createRef();
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar(inputRef.current.value);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Cambiar foto de perfil"
      name="avatar"
      buttonText="Guardar"
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input popup__form-input popup__form-input_type_link"
        id="popup__avatar-image"
        name="avatarLink"
        placeholder="Enlace a la imagen"
        ref={inputRef}
        required
      />
      <span
        className="popup__error popup__form-error-message avatar-link-error"
        id="popup__avatar-image-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
