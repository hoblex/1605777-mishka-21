//Обработка событий кнопки открытия/закрытия главного меню в мобильном режиме

var navMain = document.querySelector('.header-nav');
var navToggle = document.querySelector('.header-nav__toggle');

navMain.classList.remove('header-nav--nojs');
navMain.classList.add('header-nav--closed');

  navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header-nav--closed')) {
  navMain.classList.remove('header-nav--closed');
  navMain.classList.add('header-nav--opened');
} else {
  navMain.classList.add('header-nav--closed');
  navMain.classList.remove('header-nav--opened');
}
});

//Обработка событий модального окна "Заказ товара дня"

var buttonProductToBuy = document.querySelectorAll('.form-to-order');
var displayModalProductToBuy = document.querySelector('.modal-cart');

for (var i = 0; i < buttonProductToBuy.length; i++) {
  buttonProductToBuy[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    displayModalProductToBuy.classList.add('modal-cart--show');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (displayModalProductToBuy.classList.contains('modal-cart--show')) {
      evt.preventDefault();
      displayModalProductToBuy.classList.remove('modal-cart--show');
    }
  }
});
