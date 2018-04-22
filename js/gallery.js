'use strict';

(function () {
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;

  let overlay = document.querySelector(".page-overlay");
  let gallery = document.querySelector(".ability__list");
  let popup = document.querySelector(".modal");
  let photo = document.querySelector(".modal__img")
  let close = popup.querySelector(".modal-close");

  let isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  let isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  let onPopupEscPress = function (evt) {
    isEscEvent(evt, closePopup);
  };

  let openPopup = function () {
    popup.classList.add('modal-animation');
    overlay.classList.add('modal-show');
    document.addEventListener('keydown', onPopupEscPress);
  };

  let closePopup = function () {
    popup.classList.remove('modal-animation');
    overlay.classList.remove('modal-show');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  gallery.addEventListener('click', function (evt) {
    let target = evt.target;

    if (target && target.matches('div.ability__overlay')) {
      let sourse = target.getElementsByTagName('img')[0].src;
      photo.setAttribute('src', sourse);
      openPopup();
    }
  });

  close.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePopup();
  });

  close.addEventListener('keydown', (evt) => {
    isEnterEvent(evt, closePopup);
  });

})();
