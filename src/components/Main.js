import React from "react"

function Main() {
    function handleEditProfileClick() {
        document.querySelector('.popup_profile').classList.add('popup_opened')
    }

    function handleAddPlaceClick() {
        document.querySelector('.popup_photo').classList.add('popup_opened')
    }

    function handleEditAvatarClick() {
        document.querySelector('.popup_edit-avatar').classList.add('popup_opened')
    }

    return (
        <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <button className="profile__edit-avatar" type="button" onClick={handleEditAvatarClick}></button>
            <img className="profile__picture" src="#" alt="аватарка пользователя"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__button-change" type="button" aria-label="кнопка редактирования информации в профиле" onClick={handleEditProfileClick}></button>
            <p className="profile__self-description">Исследователь океана</p>
          </div>
          <button className="profile__button-addphoto" type="button" aria-label="кнопка добавления фотографий" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="images">
          <ul className="images__list">
          </ul>
        </section>
      </main>
    )
}

export default Main