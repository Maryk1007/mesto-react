import React from 'react';
import {api} from "../utils/api.js"
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import FormWithProfile from './FormWithProfile.js';
import FormWithAvatar from './FormWithAvatar.js';
import FormWithPhoto from './FormWithPhoto.js';
import FormConfirmDelete from './FormConfirmDelete.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isPopupProfileOpen, setIsPopupProfileOpen] = React.useState(false);
  const [isPopupPhotoOpen, setIsPopupPhotoOpen] = React.useState(false);
  const [isPopupAvatarOpen, setIsPopupAvatarOpen] = React.useState(false);
  const [selectCard, setSelectCard] = React.useState({});

  React.useEffect(() =>{
    Promise.all([api.getProfile(), api.getCardItems()])
      .then(([res, cards]) => {
        setCurrentUser(res);
        setCards(cards);
      })
      .catch(err => {
        console.log(err)
      });
  }, [])

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
    setSelectCard({});
  }

  function handleCardClick(card) {
    setSelectCard(card)
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
        cards={cards}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />
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
        <ImagePopup card={selectCard} onClose={closeAllPopups}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
