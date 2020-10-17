const numberEl = document.querySelector('input');
const createBtn = document.querySelector('[data-action="render"]');
const clearBtn = document.querySelector('[data-action="destroy"]');
const boxEl = document.querySelector('#boxes');

function createBoxes(amount) {
  let curentPx = 30;
  const stepPx = 10;
  const result = [];

  for (let i = 0; i < amount; i++) {
    const element = document.createElement('div');
    element.innerText = i;
    element.style.backgroundColor = `rgb(${randomNumber(0, 255)},${randomNumber(
      0,
      255,
    )},${randomNumber(0, 255)})`;
    element.style.width = `${curentPx}px`;
    element.style.height = `${curentPx}px`;
    curentPx += stepPx;
    result.push(element);
  }
  return result;
}

function randomNumber(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function clearElementChild(el) {
  el.innerHTML = '';
}

createBtn.addEventListener('click', event => {
  clearElementChild(boxEl);
  boxEl.append(...createBoxes(numberEl.value));
});

clearBtn.addEventListener('click', event => {
  clearElementChild(boxEl);
});
