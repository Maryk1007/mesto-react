import React from "react";

function PopupWithForm({name, title, children}) {
    const className = `popup popup_${name}`

    return (
        <div className={className}>
            <div className="popup__container">
                <button className="button-close" type="button" aria-label="кнопка закрытия формы"></button>
                <h2 className="form__text">{title}</h2>
                {children}
            </div>
         </div>
    )
}

export default PopupWithForm;