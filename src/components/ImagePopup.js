import React from "react";

function ImagePopup() {
    return (
        <div className="popup popup_fullview">
            <div className="popupfullview">
                <figure className="popupfullview__image">
                    <img className="popupfullview__picture" src="#" alt="#"/>
                    <figcaption className="popupfullview__caption"></figcaption>
                </figure>
                 <button className="button-close" type="button" aria-label="кнопка закрытия формы"></button>
            </div>
        </div>
    )
}

export default ImagePopup