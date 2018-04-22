'use strict';

(function () {

  //открытие меню
  let burger = document.querySelector('.main-nav__burger');
  let mainNav = document.querySelector('.main-nav');
  burger.addEventListener('click', (evt) => {
    evt.preventDefault();
    mainNav.classList.toggle('main-nav--opened');
  });

  //открытие подменю
  const WIDTH = 1420;
  let navLinks = document.querySelectorAll('.site-nav__link');

  navLinks.forEach(link => {
    link.addEventListener('click', (evt) => {

      let screenWidth = document.body.clientWidth;

      if (link.nextElementSibling && screenWidth < WIDTH) {
        evt.preventDefault();

        let navItem = link.parentNode;
        navItem.classList.toggle('site-nav__item--opened');
      } else return;
    });
  });

  //открытие блока поиска
  let searchButton = document.querySelector('.btn--search');
  let search = document.querySelector('.search--page');

  searchButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    search.classList.add('search--active');
  });

  //открытие панели языков
  let langRu = document.querySelector('.page-header__lang--ru');
  let langWrapper = document.querySelector('.page-header__lang-wrap');
  langRu.addEventListener('click', (evt) => {
    evt.preventDefault();
    langWrapper.classList.toggle('page-header__lang--show');
  });
})();
