// import closeIcon from "../images/vector/close-icon.svg";

export default function ImagePopup() {
  return (
    <div className="popup" id="image-popup">
      <div className="popup__overlay" id="popup-overlay-image"></div>
      <div className="popup__content-image">
        <button
          className="popup__close-button popup__close-image"
          onClick={props.onClose}
        ></button>
        <img className="popup__element-image" src=" " alt=" " />
        <p className="popup__element-title"></p>
      </div>
    </div>
  );
}
