import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import FormConfirmDelete from "./FormConfirmDelete.js";

function ConfirmDeletePopup({isOpen, onClose, onCardDelete}) {
  const [isContentSubmitButton, setContentSubmitButton] = React.useState('Да')

  function handleSubmit(evt) {
    evt.preventDefault();
    renderLoading(true);
    onCardDelete(
      {
      onRenderLoading: ()=>{
        renderLoading(false)
      }
    })
  }

  function renderLoading(isLoading){
    isLoading ? setContentSubmitButton('Удаление...') : setContentSubmitButton('Да')
  }

  return (
    <PopupWithForm
      name="confirm-delete"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <FormConfirmDelete
      contentSubmitButton={isContentSubmitButton}/>
    </PopupWithForm>
  )
}

export default ConfirmDeletePopup;
