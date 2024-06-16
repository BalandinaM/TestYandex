const itemsTourney = document.querySelectorAll('.itemsTourney__item');
const currentValueCounter = document.querySelector('#current');
const totalValueCounter = document.querySelector('#total');
const buttonTourneyPrev = document.querySelector('#btnPrevTourney');
const buttonTourneyNext = document.querySelector('#btnNextTourney');

const INTERVAL = 2000;

totalValueCounter.textContent = itemsTourney.length;

function showNumberCurrentSlide(index) {
  currentValueCounter.textContent = `${index + 1}`
}

async function delayedLoop() {
  for (elem of itemsTourney) {
    elem.classList.remove("itemsTourney__item--current");
  }

  for (let i = 0; i < itemsTourney.length; i++) {
    itemsTourney[i].classList.add("itemsTourney__item--current");
    showNumberCurrentSlide(i);

    await new Promise((resolve) => setTimeout(resolve, INTERVAL));
    itemsTourney[i].classList.remove("itemsTourney__item--current");
  }
}

delayedLoop();

setInterval(() => {
  delayedLoop()
}, itemsTourney.length * INTERVAL);
