import $ from "jquery";

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(function () {
  $('.menu__btn').on('click', function() {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  // footer-top__nav
  $('.footer-top__title').on('click', function () {
    $(this).siblings('.footer-top__list--hidden').slideToggle();
    $(this).toggleClass('title-show--active');
  });
})
