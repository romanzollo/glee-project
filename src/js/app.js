import $ from "jquery";
import Swiper from 'swiper/bundle';
import mixitup from 'mixitup';
import { Fancybox } from "@fancyapps/ui";


import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

// swiper
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

// mixitup 
var containerEl1 = document.querySelector('[data-ref="container-1"]');
var containerEl2 = document.querySelector('[data-ref="container-2"]');

var config = {
  controls: {
    scope: 'local'
  }
};

if (containerEl1) {
  var mixer1 = mixitup(containerEl1, config);
}

if (containerEl2) {
  var mixer2 = mixitup(containerEl2, config);
}




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

// счетчик цифр


let $element = $('.about-num__number');
let counter = 0;

$(window).on('scroll', (function () {
  var scroll = $(window).scrollTop() + $(window).height();
  //Если скролл до конца елемента
  var offset = $element.offset().top + $element.height();
  //Если скролл до начала елемента
  // var offset = $element.offset().top

  if (scroll > offset && counter == 0) {
    $('.about-num__number').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
    counter = 1;
  }
}));
