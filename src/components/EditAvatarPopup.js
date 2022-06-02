import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import FormWithAvatar from "./FormWithAvatar.js";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const imageRef = React.useRef('');
  const [isContentSubmitButton, setContentSubmitButton] = React.useState('Сохранить')
  const [formValues, setFormValues] = React.useState('')

  const handleFormValues = React.useCallback((evt)=>{
    const { name, value } = evt.target
    setFormValues(prevState=>({...prevState, [name]: value}))
  }, [setFormValues])

  function handleSubmit(evt) {
    evt.preventDefault();
    renderLoading(true);
    onUpdateAvatar(
      {avatar: imageRef.current.value,
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
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <FormWithAvatar
      imageRef={imageRef}
      contentSubmitButton={isContentSubmitButton}
      onHandleFormValues={handleFormValues}/>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
