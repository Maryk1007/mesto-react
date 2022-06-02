import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import FormWithProfile from "./FormWithProfile.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isContentSubmitButton, setContentSubmitButton] = React.useState('Сохранить')

  const [formValues, setFormValues] = React.useState({
    name: '',
    description: ''
  })
  const {name, description} = formValues;

  const handleFormValues = React.useCallback((evt)=>{
    const { name, value } = evt.target
    setFormValues(prevState=>({...prevState, [name]: value}))
  }, [setFormValues])

  React.useEffect(() => {
    setFormValues({
      name: currentUser.name,
      description: currentUser.about})
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    renderLoading(true);
    onUpdateUser(
      {name,
      about: description,
      onRenderLoading: ()=>{
        renderLoading(false)
      }
    })
  }

  function renderLoading(isLoading){
    isLoading ? setContentSubmitButton('Сохранение...') : setContentSubmitButton('Сохранить')
  }

  return(
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <FormWithProfile
      name={name}
      description={description}
      contentSubmitButton={isContentSubmitButton}
      onHandleFormValues={handleFormValues}/>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
