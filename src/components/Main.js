import React from "react"

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
   
    return (
        <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <button className="profile__edit-avatar" type="button" onClick={onEditAvatar}></button>
            <img className="profile__picture" src="#" alt="аватарка пользователя"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__button-change" type="button" aria-label="кнопка редактирования информации в профиле" onClick={onEditProfile}></button>
            <p className="profile__self-description">Исследователь океана</p>
          </div>
          <button className="profile__button-addphoto" type="button" aria-label="кнопка добавления фотографий" onClick={onAddPlace}></button>
        </section>
        <section className="images">
          <ul className="images__list">
          </ul>
        </section>
      </main>
    )
}

export default Main