export default function ImagePopup({ link, title, onClose, isOpen }) {
  return (
    <div
      className={`popup popup_type_${title} ${isOpen ? "popup__opened" : ""}`}
      id="image-popup"
    >
      <div
        className={`popup__overlay ${isOpen ? "popup__overlay-opened" : ""}`}
        id="popup-overlay-image"
      ></div>
      <div className="popup__content-image">
        <button
          className="popup__close-button popup__close-image"
          onClick={onClose}
        ></button>
        <img className="popup__element-image" src={link} alt=" " />
        <p className="popup__element-title"></p>
      </div>
    </div>
  );
}
