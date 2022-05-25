import React from "react";

function FormWithProfile() {
    return (
        <form className="popup__form form" name="profile-form" noValidate autoComplete="off">
          <div className="form__field">
            <input className="form__input form__input_field_name" type="text" id="userName" name="name" required minLength="2" maxLength="40" placeholder="Напишите ваше имя"/>
            <span className="form__field-error" id="error-userName"></span>
          </div>
          <div className="form__field">
            <input className="form__input form__input_field_description" type="text" id="userJob" name="about" required minLength="2" maxLength="200" placeholder="Напишите чем вы занимаетесь"/>
            <span className="form__field-error" id="error-userJob"></span>
          </div>
          <button className="button-save" type="submit">Сохранить</button>
        </form>
    )
}

export default FormWithProfile