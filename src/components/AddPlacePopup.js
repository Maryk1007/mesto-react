import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import FormWithPhoto from "./FormWithPhoto.js";

function AddPlacePopup({isOpen, onClose, onUpdatePhoto}) {

  const [isContentSubmitButton, setContentSubmitButton] = React.useState('Создать');

  const [formValues, setFormValues] = React.useState({
    name: '',
    link: ''
  })
  const {name, link} = formValues;

  const handleFormValues = React.useCallback((evt)=>{
    const { name, value } = evt.target
    setFormValues(prevState=>({...prevState, [name]: value}))
  }, [setFormValues])

  function handleSubmit(evt) {
    evt.preventDefault();
    renderLoading(true);
    onUpdatePhoto(
      {name,
      link,
      onRenderLoading: ()=>{
        renderLoading(false)
      }
    })
  }

  function renderLoading(isLoading){
    isLoading ? setContentSubmitButton('Сохранение...') : setContentSubmitButton('Создать')
  }

  return(
    <PopupWithForm
      name="photo"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <FormWithPhoto
      name={name}
      link={link}
      contentSubmitButton={isContentSubmitButton}
      onHandleFormValues={handleFormValues}/>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
