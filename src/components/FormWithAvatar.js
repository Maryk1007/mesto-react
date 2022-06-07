import React from "react";

function FormWithAvatar({imageRef, contentSubmitButton, onHandleFormValues}) {

  return (
    <>
      <div className="form__field">
        <input
          ref={imageRef}
          onChange={onHandleFormValues}
          className="form__input form__input_field_link-avatar"
          type="url"
          id="avatar"
          name="avatar"
          required
          placeholder="Ссылка на ваше новое фото"/>
        <span className="form__field-error" id="error-avatar"></span>
      </div>
      <button className="button-save" type="submit">{contentSubmitButton}</button>
    </>
  )
}

export default FormWithAvatar
