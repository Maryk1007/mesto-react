import React from "react";

function FormWithPhoto() {
  return (
    <form className="popup__form form" name="photo-form" noValidate autoComplete="off">
      <div className="form__field">
        <input className="form__input form__input_field_title" type="text" id="photoName" name="name" required minLength="2" maxLength="30" placeholder="Название"/>
        <span className="form__field-error" id ="error-photoName"></span>
      </div>
      <div className="form__field">
        <input className="form__input form__input_field_link" type="url" id="photoLink" name="link" required placeholder="Ссылка на картинку"/>
        <span className="form__field-error" id="error-photoLink"></span>
      </div>
      <button className="button-save" type="submit">Создать</button>
    </form>
  )
}

export default FormWithPhoto
