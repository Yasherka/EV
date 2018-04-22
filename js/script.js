'use strict';

(function () {

  //открытие меню
  let burger = document.querySelector('.main-nav__burger');
  let mainNav = document.querySelector('.main-nav');
  burger.addEventListener('click', (evt) => {
    evt.preventDefault();
    mainNav.classList.toggle('main-nav--opened');
  });

  //открытие блока поиска
  let searchButton = document.querySelector('.btn--search');
  let search = document.querySelector('.search--page');

  searchButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    search.classList.add('search--active');
  });
  
})();
