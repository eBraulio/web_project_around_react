import profileAvatar from "../images/profile_avatar-foto.png";

export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
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
            <button className="profile__edit-button" type="button"></button>
          </div>
          <p className="profile__description"></p>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>
      <section className="elements" id="elements"></section>

      <div className="popup" id="popup-profile">
        <div className="popup__overlay" id="popup-overlay-edit"></div>
        <div className="popup__container" id="edit-popup__container">
          <h2 className="popup__title">Editar Perfil</h2>
          <form
            className="popup__edit popup__edit-form"
            id="popup__edit-form"
            noValidate
          >
            <input
              className="popup__input popup__input-name"
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
            <button
              className="popup__save-button popup__button"
              id="btn-submit-profile"
              type="submit"
            >
              Guardar
            </button>
            <button
              className="popup__close-button popup__close-form"
              id="btn-close-profile"
              type="button"
            ></button>
          </form>
        </div>
      </div>
      <div className="popup" id="place-popup">
        <div className="popup__overlay" id="popup-overlay-add"></div>
        <div className="popup__container" id="add-popup__container">
          <h2 className="popup__title">Nuevo Lugar</h2>
          <form
            className="popup__edit popup__edit-form"
            id="popup__add-form"
            noValidate
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
            <button
              className="popup__save-button popup__button"
              type="submit"
              id="btn-submit-place"
            >
              Crear
            </button>
            <button
              className="popup__close-button popup__close-form"
              id="btn-close-place"
              type="button"
            ></button>
          </form>
        </div>
      </div>
      <div className="popup" id="image-popup">
        <div className="popup__overlay" id="popup-overlay-image"></div>
        <div className="popup__content-image">
          <button className="popup__close-button popup__close-image"></button>
          <img className="popup__element-image" src=" " alt=" " />
          <p className="popup__element-title"></p>
        </div>
      </div>
      <div className="popup" id="popup-avatar-profile">
        <div className="popup__overlay" id="popup-overlay-avatar"></div>
        <div className="popup__container popup__container-avatar">
          <h2 className="popup__title">Cambiar foto de perfil</h2>
          <form
            name="profile-avatar-form"
            className="popup__edit popup__edit-form popup__form popup__form_avatar-profile"
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
            <button
              type="submit"
              value="submit"
              className="popup__form-button popup__save-button popup__button"
            >
              Guardar
            </button>
            <button
              className="popup__close-button popup__close-form"
              type="button"
            ></button>
          </form>
        </div>
      </div>
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
