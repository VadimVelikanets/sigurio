// JS
import './js/'


// SCSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './assets/scss/main.scss';
const $ = require( "jquery" );

// Open/close menu
$('.btn-hamburger').on('click',
  function (e){
    e.preventDefault();
    $('.main-menu').addClass('main-menu_active')
  })

$('.btn-close-menu').on('click',
  function (e){
    e.preventDefault();
    $('.main-menu').removeClass('main-menu_active')

  })

// Open/close popup

$('.btn-login').on('click',
  function (e){
    $('.popup-login').addClass('popup_active');
    $('.popup-container').addClass('popup-container_active')
  })

$('.btn-close-popup, .popup-container').on('click',
  function (e){
    $('.popup').removeClass('popup_active');
    $('.popup-container').removeClass('popup-container_active')
  })

$('.btn-register').on('click',
  function (e){
    $('.popup-register').addClass('popup_active');
    $('.popup-container').addClass('popup-container_active')
  })


//Change password
$('.btn-password').on('click',
  function (e){
    const inputType = $(this).parent().find('input').attr('type')
    console.log(inputType)
    if(inputType == 'text'){
      $(this).parent().find('input').attr('type', 'password')
      $(this).find('.btn-password_on').show()
      $(this).find('.btn-password_off').hide()
    } else{
      $(this).parent().find('input').attr('type', 'text')
      $(this).find('.btn-password_on').hide()
      $(this).find('.btn-password_off').show()
    }
  })

//Message about register
$('.popup-register button').on(
  'click',
  function (e){
    e.preventDefault();
    $('.popup-register').removeClass('popup_active');
    $('.popup-register-success').addClass('popup_active');
  }
)

$('.faq__links-item').on(
  'click',
  function (e){
    e.preventDefault();
    $('.faq__links-item').removeClass('faq__links-item_active')
    $(this).addClass('faq__links-item_active')

    const tabId = $(this).attr('data-id')
    $('.faq__info').removeClass('faq__info_active')
    $(`.faq__info[data-id=${tabId}]`).addClass('faq__info_active')
  }
)
