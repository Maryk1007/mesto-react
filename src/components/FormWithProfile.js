import React from "react";

function FormWithProfile({name, description, contentSubmitButton, onHandleFormValues}) {
  // const [contentSubmitButton, setContentSubmitButton] = React.useState('Сохранить');

  return (
    <>
      <div className="form__field">
        <input
        className="form__input form__input_field_name"
        value={name || ''}
        onChange={onHandleFormValues}
        type="text"
        id="userName"
        name="name"
        required
        minLength="2"
        maxLength="40"
        placeholder="Напишите ваше имя"/>
        <span className="form__field-error" id="error-userName"></span>
      </div>
      <div className="form__field">
        <input
        className="form__input form__input_field_description"
        value={description || ''}
        onChange={onHandleFormValues}
        type="text"
        id="userJob"
        name="description"
        required
        minLength="2"
        maxLength="200"
        placeholder="Напишите чем вы занимаетесь"/>
        <span className="form__field-error" id="error-userJob"></span>
      </div>
      <button className="button-save" type="submit">{contentSubmitButton}</button>
    </>
  )
}

export default FormWithProfile
