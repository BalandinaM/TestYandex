// const sliderTourneyContainer = document.querySelector('.itemsTourney__slider-container');
// const sliderTourney = document.querySelector('.itemsTourney__slider');
// const sliderTourneyItems = document.querySelectorAll('.itemsTourney__item');
// const buttonTourneyPrev = document.querySelector('#btnPrevTourney');
// const buttonTourneyNext = document.querySelector('#btnNextTourney');
// const currentValueCounter = document.querySelector('#current');
// const totalValueCounter = document.querySelector('#total');

// let sliderTourneyCount = 0;
// let sliderTourneyWidth;
// totalValueCounter.textContent = sliderTourneyItems.length;

// setInterval(() => {
//     nextSlideTourney()
//  }, 3000);


// buttonTourneyNext.addEventListener('click', nextSlideTourney);
// buttonTourneyPrev.addEventListener('click', prevSlideTourney);

// function showSlideTourney() {
//   sliderTourneyWidth = sliderTourneyContainer.offsetWidth;
//   sliderTourney.style.width = sliderTourneyWidth * sliderTourneyItems.length + 'px';
//   sliderTourneyItems.forEach(item => item.style.width = sliderTourneyWidth + 'px');

//   rollSliderTourney();
// }

// showSlideTourney();

// function rollSliderTourney() {
//   sliderTourney.style.transform = `translateX(${-sliderTourneyCount * sliderTourneyWidth}px)`;
// }

// function nextSlideTourney() {
//   sliderTourneyCount++;
//   console.log(sliderTourneyCount);
//   if (sliderTourneyCount > sliderTourneyItems.length - 1) {
//     sliderTourney.style.transform = `translateX(0)`;
//     sliderTourneyCount = 0;
//     currentValueCounter.textContent = `${sliderTourneyCount + 1}`;
//     return;
//   }

//   rollSliderTourney();
//   currentValueCounter.textContent = `${sliderTourneyCount + 1}`;
// }

// console.log('ddddd', sliderTourneyCount)

// function prevSlideTourney() {
//   sliderTourneyCount--;
//   rollSliderTourney();
//   currentValueCounter.textContent = `${sliderTourneyCount + 1}`;
// }

// function showNumberCurrentSlide(index) {
//   currentValueCounter.textContent = `${index + 1}`
// }

const itemsTourney = document.querySelectorAll('.itemsTourney__item');
console.log(itemsTourney);

for (let i = 0; i <= itemsTourney.length; i++) {
  console.log(itemsTourney[i]);
}

async function delayedLoop() {
  for (elem of itemsTourney) {
    elem.classList.remove('itemsTourney__item--current');
  };

  for (let i = 0; i < itemsTourney.length; i++) {
    itemsTourney[i].classList.add('itemsTourney__item--current');

  await new Promise(resolve => setTimeout(resolve, 2000));
    //console.log(itemsTourney[i]);
      itemsTourney[i].classList.remove('itemsTourney__item--current');
  }
}

delayedLoop();

setInterval(() => {
  delayedLoop()
}, itemsTourney.length * 2000);

// запускается цикл который добавляет класс каррент, через 4 секунды класс каррент удаляется у элемента и следом добавляется класс на следующий эдемент, через 4 секунды он удаляеся
