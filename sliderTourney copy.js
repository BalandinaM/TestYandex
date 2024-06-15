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
const currentValueCounter = document.querySelector('#current');
const totalValueCounter = document.querySelector('#total');

totalValueCounter.textContent = itemsTourney.length;

function showNumberCurrentSlide(index) {
  currentValueCounter.textContent = `${index + 1}`
}

async function delayedLoop() {
  for (elem of itemsTourney) {
    elem.classList.remove('itemsTourney__item--current');
  };

  for (let i = 0; i < itemsTourney.length; i++) {
    itemsTourney[i].classList.add('itemsTourney__item--current');
    showNumberCurrentSlide(i);

    await new Promise(resolve => setTimeout(resolve, 2000));
      itemsTourney[i].classList.remove('itemsTourney__item--current');
  }
}

delayedLoop();

setInterval(() => {
  delayedLoop()
}, itemsTourney.length * 2000);

