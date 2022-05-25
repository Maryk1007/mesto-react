import React from "react";

function PopupWithForm({name, title, isOpen, onClose, children}) {
    const className = `popup popup_${name} ${isOpen ? 'popup_opened' : ''}`

    return (
        <div className={className}>
            <div className="popup__container">
                <button className="button-close" type="button" aria-label="кнопка закрытия формы" onClick={onClose}></button>
                <h2 className="form__text">{title}</h2>
                {children}
            </div>
         </div>
    )
}

export default PopupWithForm;