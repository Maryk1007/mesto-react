import React, { useEffect } from "react"
import {api} from "../utils/api.js"
import Card from "./Card.js";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    useEffect(() =>{
        Promise.all([api.getProfile(), api.getCardItems()])
            .then(([res, cards]) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
                setCards(cards);
            })
            .catch(err => {
                console.log(err)
              });
    }, [])
   
    return (
        <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <button className="profile__edit-avatar" type="button" onClick={onEditAvatar}></button>
            <img className="profile__picture" src={userAvatar} alt="аватарка пользователя"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button-change" type="button" aria-label="кнопка редактирования информации в профиле" onClick={onEditProfile}></button>
            <p className="profile__self-description">{userDescription}</p>
          </div>
          <button className="profile__button-addphoto" type="button" aria-label="кнопка добавления фотографий" onClick={onAddPlace}></button>
        </section>
        <section className="images">
          <ul className="images__list">
            {
                cards.map((card) => (
                <Card {...card} key={card._id} onCardClick={onCardClick}/>
                ))
            }
          </ul>
        </section>
      </main>
    )
}

export default Main