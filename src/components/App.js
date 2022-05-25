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
const [isPopupProfileOpen, setIsPopupProfileOpen] = React.useState(false);
const [isPopupPhotoOpen, setIsPopupPhotoOpen] = React.useState(false);
const [isPopupAvatarOpen, setIsPopupAvatarOpen] = React.useState(false);


function handleEditProfileClick() {
  setIsPopupProfileOpen(true);
    }

    function handleAddPlaceClick() {
      setIsPopupPhotoOpen(true);
    }

    function handleEditAvatarClick() {
      setIsPopupAvatarOpen(true);
    }

    function closeAllPopups() {
      setIsPopupProfileOpen(false);
      setIsPopupPhotoOpen(false);
      setIsPopupAvatarOpen(false);
    }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isPopupProfileOpen} onClose={closeAllPopups}>
        <FormWithProfile/>
      </PopupWithForm>
    <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isPopupAvatarOpen} onClose={closeAllPopups}>
        <FormWithAvatar/>
      </PopupWithForm>
    <PopupWithForm name="photo" title="Новое место" isOpen={isPopupPhotoOpen} onClose={closeAllPopups}>
        <FormWithPhoto/>
      </PopupWithForm>
    <PopupWithForm name="confirm-delete" title="Вы уверены?">
        <FormConfirmDelete/>
      </PopupWithForm>
    <ImagePopup/>
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
