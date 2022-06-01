import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Card({name, link, owner, likes, onCardClick}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = owner._id === currentUser._id;
  const isLiked = likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = `cards__delete-button ${isOwn && 'cards__delete-button_show'}`;
  const cardLikeButtonClassName = `cards__button ${isLiked && 'cards__button_like'}`;

  function handleClick() {
    onCardClick({name, link})
  }
  return (
    <li className="cards">
      <img className="cards__picture" src={link} alt={name} onClick={handleClick}/>
      <div className="cards__description">
        <h2 className="cards__title">{name}</h2>
        <button className={cardLikeButtonClassName} type="button" aria-label="кнопка like"></button>
        <span className="cards__count-likes"></span>
      </div>
      <button className={cardDeleteButtonClassName} type="button" aria-label="кнопка удалить"></button>
    </li>
  )
}

export default Card
