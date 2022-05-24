import logo from './images/logo.svg'

function App() {
  return (
    <div class="page">
    <header class="header">
      <img class="header__logo" src={logo} alt="логотип сайта"/>
    </header>
    <main class="content">
      <section class="profile">
        <div class="profile__avatar">
          <button class="profile__edit-avatar" type="button"></button>
          <img class="profile__picture" src="#" alt="аватарка пользователя"/>
        </div>
        <div class="profile__info">
          <h1 class="profile__name">Жак-Ив Кусто</h1>
          <button class="profile__button-change" type="button" aria-label="кнопка редактирования информации в профиле"></button>
          <p class="profile__self-description">Исследователь океана</p>
        </div>
        <button class="profile__button-addphoto" type="button" aria-label="кнопка добавления фотографий"></button>
      </section>
      <section class="images">
        <ul class="images__list">
        </ul>
      </section>
    </main>
    <footer class="footer">
      <p class="footer__copyright">&copy; 2022 Mesto Russia</p>
    </footer>
    <div class="popup popup_profile">
      <div class="popup__container">
        <button class="button-close" type="button" aria-label="кнопка закрытия формы"></button>
        <form class="popup__form form" name="formPopupProfile" novalidate autocomplete="off">
          <h2 class="form__text">Редактировать профиль</h2>
          <div class="form__field">
            <input class="form__input form__input_field_name" type="text" id="userName" name="name" required minlength="2" maxlength="40" placeholder="Напишите ваше имя"/>
            <span class="form__field-error" id="error-userName"></span>
          </div>
          <div class="form__field">
            <input class="form__input form__input_field_description" type="text" id="userJob" name="about" required minlength="2" maxlength="200" placeholder="Напишите чем вы занимаетесь"/>
            <span class="form__field-error" id="error-userJob"></span>
          </div>
          <button class="button-save" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div class="popup popup_edit-avatar">
      <div class="popup__container">
        <button class="button-close" type="button" aria-label="кнопка закрытия формы"></button>
        <form class="popup__form form" name="formEditAvatar" novalidate autocomplete="off">
          <h2 class="form__text">Обновить аватар</h2>
          <div class="form__field">
            <input class="form__input form__input_field_link-avatar" type="url" id="avatar" name="avatar" required placeholder="Ссылка на ваше новое фото"/>
            <span class="form__field-error" id="error-avatar"></span>
          </div>
          <button class="button-save" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div class="popup popup_photo">
      <div class="popup__container">
        <button class="button-close" type="button" aria-label="кнопка закрытия формы"></button>
        <form class="popup__form form" name="formPopupPhoto" novalidate autocomplete="off">
          <h2 class="form__text">Новое место</h2>
          <div class="form__field">
            <input class="form__input form__input_field_title" type="text" id="photoName" name="name" required minlength="2" maxlength="30" placeholder="Название"/>
            <span class="form__field-error" id ="error-photoName"></span>
          </div>
          <div class="form__field">
            <input class="form__input form__input_field_link" type="url" id="photoLink" name="link" required placeholder="Ссылка на картинку"/>
          <span class="form__field-error" id="error-photoLink"></span>
          </div>
          <button class="button-save" type="submit">Создать</button>
        </form>
      </div>
    </div>
    <div class="popup popup_confirm-delete">
      <div class="popup__container">
        <button class="button-close" type="button" aria-label="кнопка закрытия формы"></button>
        <form class="popup__form form" name="formDeletePhoto">
          <h2 class="form__text">Вы уверены?</h2>
          <button class="button-save" type="submit">Да</button>
        </form>
      </div>
    </div>
    <div class="popup popup_fullview">
      <div class="popupfullview">
        <figure class="popupfullview__image">
          <img class="popupfullview__picture" src="#" alt="#"/>
          <figcaption class="popupfullview__caption"></figcaption>
        </figure>
        <button type="button" class="button-close" aria-label="кнопка закрытия формы"></button>
      </div>
    </div>
    <template class="item__template">
      <li class="cards">
        <img class="cards__picture" src="#" alt="#"/>
        <div class="cards__description">
          <h2 class="cards__title"></h2>
          <button type="button" class="cards__button" aria-label="кнопка like"></button>
          <span class="cards__count-likes"></span>
        </div>
        <button class="cards__delete-button cards__delete-button_show" type="button" aria-label="кнопка удалить"></button>
      </li>
    </template>
</div>
  );
}

export default App;
