import React from 'react';
import {api} from "../utils/api.js"
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import EditProfilePopup from './EditProfilePopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import ConfirmDeletePopup from './ConfirmDeletePopup.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'


function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isPopupProfileOpen, setIsPopupProfileOpen] = React.useState(false);
  const [isPopupPhotoOpen, setIsPopupPhotoOpen] = React.useState(false);
  const [isPopupAvatarOpen, setIsPopupAvatarOpen] = React.useState(false);
  const [isPopupConfirmDelete, setIsPopupConfirmDelete] = React.useState(false);
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

  function handleAddPlaceSubmit(newCard) {
    api.addCards(newCard.name, newCard.link)
      .then((newCard) =>{
        setCards([newCard, ...cards]);
        setIsPopupPhotoOpen(false);
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        newCard.onRenderLoading(false)
      })
  }

  function handleUpdateAvatar(updateAvatar) {
    api.editAvatar(updateAvatar.avatar)
      .then((res) => {
        setCurrentUser(res)
        setIsPopupAvatarOpen(false)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        updateAvatar.onRenderLoading(false)
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
    setIsPopupConfirmDelete(false)
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

  function handleDeleteClick(card) {
    setIsPopupConfirmDelete(true);
    setCardDelete(card);
  }

  function handleCardDelete(obj) {
    api.deleteCard(cardDelete._id)
      .then((res) => {})
      .catch(console.log)
      .finally(() => {
        obj.onRenderLoading(false)
      })
    setCards((cards) => cards.filter((c) => c._id !== cardDelete._id));
    setIsPopupConfirmDelete(false);
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
        onCardDelete={handleDeleteClick}
        />
        <Footer />
        <EditProfilePopup isOpen={isPopupProfileOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isPopupAvatarOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <AddPlacePopup isOpen={isPopupPhotoOpen} onClose={closeAllPopups} onUpdatePhoto={handleAddPlaceSubmit}/>
        <ConfirmDeletePopup isOpen={isPopupConfirmDelete} onClose={closeAllPopups} onCardDelete={handleCardDelete}/>
        <ImagePopup card={selectCard} onClose={closeAllPopups}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
