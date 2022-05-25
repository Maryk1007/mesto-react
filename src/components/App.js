import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import FormWithProfile from './FormWithProfile.js';
import FormWithAvatar from './FormWithAvatar.js';
import FormWithPhoto from './FormWithPhoto.js';
import FormConfirmDelete from './FormConfirmDelete.js';
import ImagePopup from './ImagePopup.js';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль">
        <FormWithProfile/>
      </PopupWithForm>
    {/* <div className="popup popup_profile">
      <div className="popup__container">
        <button className="button-close" type="button" aria-label="кнопка закрытия формы"></button>
        <h2 className="form__text">Редактировать профиль</h2>
        <form className="popup__form form" name="formPopupProfile" noValidate autoComplete="off">
          <div className="form__field">
            <input className="form__input form__input_field_name" type="text" id="userName" name="name" required minLength="2" maxLength="40" placeholder="Напишите ваше имя"/>
            <span className="form__field-error" id="error-userName"></span>
          </div>
          <div className="form__field">
            <input className="form__input form__input_field_description" type="text" id="userJob" name="about" required minLength="2" maxLength="200" placeholder="Напишите чем вы занимаетесь"/>
            <span className="form__field-error" id="error-userJob"></span>
          </div>
          <button className="button-save" type="submit">Сохранить</button>
        </form>
      </div>
    </div> */}
    <PopupWithForm name="edit-avatar" title="Обновить аватар">
        <FormWithAvatar/>
      </PopupWithForm>
    {/* <div className="popup popup_edit-avatar">
      <div className="popup__container">
        <button className="button-close" type="button" aria-label="кнопка закрытия формы"></button>
        <h2 className="form__text">Обновить аватар</h2>
        <form className="popup__form form" name="formEditAvatar" noValidate autoComplete="off">
          <div className="form__field">
            <input className="form__input form__input_field_link-avatar" type="url" id="avatar" name="avatar" required placeholder="Ссылка на ваше новое фото"/>
            <span className="form__field-error" id="error-avatar"></span>
          </div>
          <button className="button-save" type="submit">Сохранить</button>
        </form>
      </div>
    </div> */}
    <PopupWithForm name="photo" title="Новое место">
        <FormWithPhoto/>
      </PopupWithForm>
    {/* <div className="popup popup_photo">
      <div className="popup__container">
        <button className="button-close" type="button" aria-label="кнопка закрытия формы"></button>
        <h2 className="form__text">Новое место</h2>
        <form className="popup__form form" name="formPopupPhoto" noValidate autoComplete="off">
          <div className="form__field">
            <input className="form__input form__input_field_title" type="text" id="photoName" name="name" required minLength="2" maxLength="30" placeholder="Название"/>
            <span className="form__field-error" id ="error-photoName"></span>
          </div>
          <div className="form__field">
            <input className="form__input form__input_field_link" type="url" id="photoLink" name="link" required placeholder="Ссылка на картинку"/>
          <span className="form__field-error" id="error-photoLink"></span>
          </div>
          <button className="button-save" type="submit">Создать</button>
        </form>
      </div>
    </div> */}
    <PopupWithForm name="confirm-delete" title="Вы уверены?">
        <FormConfirmDelete/>
      </PopupWithForm>
    {/* <div className="popup popup_confirm-delete">
      <div className="popup__container">
        <button className="button-close" type="button" aria-label="кнопка закрытия формы"></button>
        <h2 className="form__text">Вы уверены?</h2>
        <form className="popup__form form" name="formDeletePhoto">
          <button className="button-save" type="submit">Да</button>
        </form>
      </div>
    </div> */}
    <ImagePopup/>
    {/* <div className="popup popup_fullview">
      <div className="popupfullview">
        <figure className="popupfullview__image">
          <img className="popupfullview__picture" src="#" alt="#"/>
          <figcaption className="popupfullview__caption"></figcaption>
        </figure>
        <button className="button-close" type="button" aria-label="кнопка закрытия формы"></button>
      </div>
    </div> */}
    <template className="item__template">
      <li className="cards">
        <img className="cards__picture" src="#" alt="#"/>
        <div className="cards__description">
          <h2 className="cards__title"></h2>
          <button className="cards__button" type="button" aria-label="кнопка like"></button>
          <span className="cards__count-likes"></span>
        </div>
        <button className="cards__delete-button cards__delete-button_show" type="button" aria-label="кнопка удалить"></button>
      </li>
    </template>
</div>
  );
}

export default App;
