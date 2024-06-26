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

async function Function() {
  for (let j = 1; j <= 2; j++) {
    let currentItem = [];

    if (j === 1) {
      for (let i = 0; i < 3; i++) {
        currentItem.push(itemsTourney[i]);
      }
      currentItem.forEach((item) => {
        item.classList.add("itemsTourney__item--current");
      });

      currentValueCounter.textContent = '3'

      await new Promise((resolve) => setTimeout(resolve, 3000));
      currentItem.forEach((item) => {
        item.classList.remove("itemsTourney__item--current");
      });
    } else if (j === 2) {
      for (let i = 3; i < 6; i++) {
        currentItem.push(itemsTourney[i]);
      }
      currentItem.forEach((item) => {
        item.classList.add("itemsTourney__item--current");
      });

      currentValueCounter.textContent = '6'

      await new Promise((resolve) => setTimeout(resolve, 3000));
      currentItem.forEach((item) => {
        item.classList.remove("itemsTourney__item--current");
      });
    }
  }
}

const checkWidth = () => {
  let width = document.documentElement.clientWidth;
  if (width >= 1366) {
    console.log("Большой экран, большой экран!!!");
    Function();
  } else {
    console.log("Маааленький экран");
    delayedLoop();
  }
};

checkWidth();

const bigViewport = setInterval(() => {
  if (document.documentElement.clientWidth >= 1366) {
    Function();
  } else {
    clearInterval(bigViewport);
  }
}, 6000);

const smallViewport = setInterval(() => {
  if (document.documentElement.clientWidth < 1366) {
    delayedLoop();
  } else {
    clearInterval(smallViewport);
  }
}, itemsTourney.length * INTERVAL);
