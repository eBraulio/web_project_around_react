import React from "react";
import trashIcon from "../images/vector/Trash-icon.svg";

export default function Card({ _id, likes, link, name, onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="template__element" key={_id}>
      <img
        src={trashIcon}
        alt="Icono de Eliminar foto"
        className="element__trash-icon"
      />
      <div className="element__image-container">
        <img
          src={link}
          alt={name}
          className="element__image"
          onClick={handleClick}
        />
      </div>
      <div className="element__button">
        <h2 className="element__text">{name}</h2>
        <div className="element__container">
          <div className="element__like-button"></div>
          <span className="element__like-number">{likes.length}</span>
        </div>
      </div>
    </div>
  );
}
