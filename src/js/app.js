// import $ from "jquery";
import Swiper from 'swiper/bundle';
import mixitup from 'mixitup';
import { Fancybox } from "@fancyapps/ui";
import noUiSlider from 'nouislider';


import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

document.addEventListener('DOMContentLoaded', () => {
  // swiper index.html
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

  // swiper related ptoducts
  var swiperRelatedProducts = new Swiper(".related-products__slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      // mobile first
      300: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      650: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    }
    
  })

  // swiper product
  var swiperThumb = new Swiper(".swiperThumb", {
    slidesPerView: 3,
    direction: "vertical",
  });
  var swiperBig = new Swiper(".swiperBig", {
    slidesPerView: 1,
    loop: true,
    thumbs: {
      swiper: swiperThumb,
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


  // noUiSlider
  var rangeSlider = document.getElementById('range-slider');

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [100, 500],
      step: 1,
      connect: true,
      range: {
        'min': 0,
        'max': 900
      }
    });
  
    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      rangeSlider.noUiSlider.set(arr);
    }

    inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  }

  

  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    }
  };

  if (isMobile.any()) {
    document.body.classList.add('_touch')

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function (e) {
          menuArrow.parentElement.classList.toggle('_active');
        });
      }
    }


  } else {
    document.body.classList.add('_pc')
  }
});



$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  // Form styler
  const $stylerForm = $('.product-page__content-num');
  if ($stylerForm.length > 0) {
    $($stylerForm).styler();
  }


  // footer-top__nav
  $('.footer-top__title').on('click', function () {
    $(this).siblings('.footer-top__list--hidden').slideToggle();
    $(this).toggleClass('title-show--active');
  });

  // stars
  let $star = $('.stars');
  let $starBig = $('.product-stars');
  if ($star.length > 0) {
    $star.rateYo({
      starWidth: "12px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      spacing: "7px",
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1" > <g id="surface1"> <path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 9.902344 0.5625 C 9.738281 0.21875 9.386719 0 9.003906 0 C 8.617188 0 8.273438 0.21875 8.101562 0.5625 L 6.09375 4.695312 L 1.605469 5.359375 C 1.230469 5.414062 0.917969 5.679688 0.804688 6.039062 C 0.6875 6.398438 0.78125 6.792969 1.050781 7.058594 L 4.304688 10.28125 L 3.539062 14.835938 C 3.476562 15.210938 3.632812 15.589844 3.941406 15.8125 C 4.25 16.035156 4.660156 16.0625 4.996094 15.882812 L 9.007812 13.742188 L 13.015625 15.882812 C 13.351562 16.0625 13.761719 16.039062 14.070312 15.8125 C 14.382812 15.585938 14.539062 15.210938 14.476562 14.835938 L 13.703125 10.28125 L 16.960938 7.058594 C 17.226562 6.792969 17.324219 6.398438 17.207031 6.039062 C 17.085938 5.679688 16.777344 5.414062 16.402344 5.359375 L 11.914062 4.695312 Z M 9.902344 0.5625 " /> </g> </svg>'
    });
  }

  if ($starBig.length > 0) {
    $starBig.rateYo({
      starWidth: "18px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      spacing: "13px",
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1" > <g id="surface1"> <path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 9.902344 0.5625 C 9.738281 0.21875 9.386719 0 9.003906 0 C 8.617188 0 8.273438 0.21875 8.101562 0.5625 L 6.09375 4.695312 L 1.605469 5.359375 C 1.230469 5.414062 0.917969 5.679688 0.804688 6.039062 C 0.6875 6.398438 0.78125 6.792969 1.050781 7.058594 L 4.304688 10.28125 L 3.539062 14.835938 C 3.476562 15.210938 3.632812 15.589844 3.941406 15.8125 C 4.25 16.035156 4.660156 16.0625 4.996094 15.882812 L 9.007812 13.742188 L 13.015625 15.882812 C 13.351562 16.0625 13.761719 16.039062 14.070312 15.8125 C 14.382812 15.585938 14.539062 15.210938 14.476562 14.835938 L 13.703125 10.28125 L 16.960938 7.058594 C 17.226562 6.792969 17.324219 6.398438 17.207031 6.039062 C 17.085938 5.679688 16.777344 5.414062 16.402344 5.359375 L 11.914062 4.695312 Z M 9.902344 0.5625 " /> </g> </svg>'
    });
  }

  // shop__filter-btn
  $('.product-grid__filter-btn').on('click', function () {
    $('.product-grid__filters').slideToggle();
  });

  // add class 'product-tabs__top-item--active' on click
  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

});

// счетчик цифр
let $element = $('.about-num__number');
let counter = 0;

if ($element.length > 0) {
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
}

