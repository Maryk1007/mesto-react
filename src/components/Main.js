import React from "react"
// import {api} from "../utils/api.js"
import Card from "./Card.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const currentUser = React.useContext(CurrentUserContext);
  // // const [userName, setUserName] = useState('');
  // // const [userDescription, setUserDescription] = useState('');
  // // const [userAvatar, setUserAvatar] = useState('');
  // const [cards, setCards] = useState([]);

  // useEffect(() =>{
  //   Promise.all([api.getProfile(), api.getCardItems()])
  //     .then(([res, cards]) => {
  //       // setUserName(res.name);
  //       // setUserDescription(res.about);
  //       // setUserAvatar(res.avatar);
  //       setCards(cards);
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     });
  // }, [])

    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <button className="profile__edit-avatar" type="button" onClick={onEditAvatar}></button>
            <img className="profile__picture" src={currentUser.avatar} alt="аватарка пользователя"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__button-change" type="button" aria-label="кнопка редактирования информации в профиле" onClick={onEditProfile}></button>
            <p className="profile__self-description">{currentUser.about}</p>
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
