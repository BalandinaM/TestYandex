//Изменение наполнения карточек в upgrade в зависимости от ширины экрана

const wrapItems = Array.from(document.querySelectorAll('.slider__wrap-items'));
const items = Array.from(document.querySelectorAll('.wrap-items__item'));
const sliderControl = document.querySelector('.upgrade__sliderControl');
let sizeDesktop = 1366;

// это можно сделать через css

// let hiddenControlSlider = () => {
//   if (window.screen.width >= sizeDesktop) {
//     sliderControl.style.display = "none";
//   } else if (window.screen.width < sizeDesktop) {
//     sliderControl.style.display = "flex";
//   }
// };


let setClassDepScreenWidth = () => {
  //hiddenControlSlider();
  if (window.screen.width >= sizeDesktop) {
    for (let elem of wrapItems) {
      //console.log('!!!');
      // elem.classList.remove("slider__wrap-items");
      elem.classList.remove("slider__item");
    }
    // for (let elem of items) {
    //   //elem.classList.remove("wrap-items__item");
    //   //elem.classList.add("slider__item");
    // }
  } else {
    for (let elem of wrapItems) {
      //console.log('---');
      //elem.classList.add("slider__wrap-items");
      elem.classList.add("slider__item");
    }
    // for (let elem of items) {
    //   elem.classList.add("wrap-items__item");
    //   elem.classList.remove("slider__item");
    // }
  }
};

setClassDepScreenWidth();

window.addEventListener('resize', (e) => {
  //hiddenControlSlider();
  setClassDepScreenWidth();
  showSlide();

})


//Слайдер Upgrade

const sliderContainer = document.querySelector('.upgrade__slider-container');
const slider = document.querySelector('.upgrade__slider');
const sliderItems = document.querySelectorAll('.slider__item');
const buttonPrev = document.querySelector('#btnPrev');
const buttonNext = document.querySelector('#btnNext');
const dots = document.querySelectorAll('.sliderControl__dot');

let sliderCount = 0;
let sliderWidth;

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);


function showSlide() {
  if (window.screen.width >= sizeDesktop) {
    slider.style.width = '1222px';
    sliderItems.forEach((item) => (item.style.width = 'auto'));
    return;
  } else {
    sliderWidth = sliderContainer.offsetWidth;
    slider.style.width = sliderWidth * sliderItems.length + "px";
    sliderItems.forEach((item) => (item.style.width = sliderWidth + "px"));

    rollSlider();
  }
}

showSlide();


function rollSlider() {
  if (window.screen.width >= sizeDesktop) {
    slider.style.transform = 'translateX(0)';
    return;
  } else {
    slider.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  }
}

function nextSlide() {
  sliderCount++;
  if (buttonPrev.hasAttribute('disabled') === true) {
    buttonPrev.removeAttribute('disabled');
  } else if (sliderCount >= sliderItems.length - 1) {
    buttonNext.setAttribute('disabled', '');
  }

  rollSlider();
  thisSlide(sliderCount);
}

function prevSlide() {
  sliderCount--;
  if (buttonNext.hasAttribute('disabled') === true) {
    buttonNext.removeAttribute('disabled');
  } else if (sliderCount <= 0) {
    buttonPrev.setAttribute('disabled', '');
  }
  rollSlider();
  thisSlide(sliderCount);
}

function thisSlide(index) {
  dots.forEach(item => item.classList.remove('sliderControl__dot--activ'));
  dots[index].classList.add('sliderControl__dot--activ');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  })
})

