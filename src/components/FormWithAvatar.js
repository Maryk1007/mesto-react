import React from "react";

function FormWithAvatar() {
    return (
        <form className="popup__form form" name="edit-avatar-form" noValidate autoComplete="off">
          <div className="form__field">
            <input className="form__input form__input_field_link-avatar" type="url" id="avatar" name="avatar" required placeholder="Ссылка на ваше новое фото"/>
            <span className="form__field-error" id="error-avatar"></span>
          </div>
          <button className="button-save" type="submit">Сохранить</button>
        </form>
    )
}

export default FormWithAvatar