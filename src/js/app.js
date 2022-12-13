import $ from "jquery";

import Swiper from 'swiper/bundle';


import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

const swiper = new Swiper('.top-slider__swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  // footer-top__nav
  $('.footer-top__title').on('click', function () {
    $(this).siblings('.footer-top__list--hidden').slideToggle();
    $(this).toggleClass('title-show--active');
  });
})
