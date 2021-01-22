//Обработка событий кнопки открытия/закрытия главного меню в мобильном режиме

let navMain = document.querySelector('.header-nav');
  let navToggle = document.querySelector('.header-nav__toggle');

  navMain.classList.remove('header-nav--nojs');

  navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header-nav--closed')) {
  navMain.classList.remove('header-nav--closed');
  navMain.classList.add('header-nav--opened');
} else {
  navMain.classList.add('header-nav--closed');
  navMain.classList.remove('header-nav--opened');
}
});

//Обработка событий слайдера
// const sliderNext = document.querySelector('.slider-nav__button--next');
// const sliderPrev = document.querySelector('.slider-nav__button--prev');
//
// const sliderItems = document.querySelectorAll('.slider__item');
//
// sliderNext.onclick = function () {
//   if (sliderItems[0].classList.contains('slider__item--current')) {
//     sliderItems[0].classList.remove('slider__item--current')
//     sliderItems[1].classList.add('slider__item--current')
//     sliderItems[2].classList.remove('slider__item--current')
//   } else if (sliderItems[1].classList.contains('slider__item--current')) {
//     sliderItems[0].classList.remove('slider__item--current')
//     sliderItems[1].classList.remove('slider__item--current')
//     sliderItems[2].classList.add('slider__item--current')
//   } else {
//     sliderItems[0].classList.add('slider__item--current')
//     sliderItems[1].classList.remove('slider__item--current')
//     sliderItems[2].classList.remove('slider__item--current')
//   }
// };
//
// sliderPrev.onclick = function () {
//   if (sliderItems[0].classList.contains('slider__item--current')) {
//     sliderItems[0].classList.remove('slider__item--current')
//     sliderItems[1].classList.remove('slider__item--current')
//     sliderItems[2].classList.add('slider__item--current')
//   } else if (sliderItems[1].classList.contains('slider__item--current')) {
//     sliderItems[0].classList.add('slider__item--current')
//     sliderItems[1].classList.remove('slider__item--current')
//     sliderItems[2].classList.remove('slider__item--current')
//   } else {
//     sliderItems[0].classList.remove('slider__item--current')
//     sliderItems[1].classList.add('slider__item--current')
//     sliderItems[2].classList.remove('slider__item--current')
//   }
// };


//Обработка событий модального окна "Заказ товара дня"

const buttonProductToBuy = document.querySelectorAll('.form-to-order');
const displayModalProductToBuy = document.querySelector('.modal-cart');

for (let i = 0; i < buttonProductToBuy.length; i++) {
  buttonProductToBuy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    displayModalProductToBuy.classList.add("modal-cart--show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (displayModalProductToBuy.classList.contains("modal-cart--show")) {
      evt.preventDefault();
      displayModalProductToBuy.classList.remove("modal-cart--show");
    }
  }
});
