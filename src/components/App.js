import React from 'react';
import {api} from "../utils/api.js"
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import FormWithProfile from './FormWithProfile.js';
import EditProfilePopup from './EditProfilePopup.js';
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
  const [cardDelete, setCardDelete] = React.useState({});

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

  function handleUpdateUser(updateUser) {
    api.editProfile(updateUser.name, updateUser.about)
      .then((res) =>{
        setCurrentUser(res)
        setIsPopupProfileOpen(false)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        updateUser.onRenderLoading(false)
      })
  }

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if(!isLiked) {
      api.addLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(console.log)
    } else {
      api.deleteLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(console.log)
    }
  }

  function handleCardDelete(cardDelete) {
    api.deleteCard(cardDelete._id)
      .then((res) => {})
      .catch(console.log)
      setCards((cards) => cards.filter((c) => c._id !== cardDelete._id));
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
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup isOpen={isPopupProfileOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
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
