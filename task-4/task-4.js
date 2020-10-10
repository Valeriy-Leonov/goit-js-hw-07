const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementEl.addEventListener('click', event => {
  let curentValue = Number(valueEl.innerText);
  valueEl.innerText = --curentValue;
});

incrementEl.addEventListener('click', event => {
  let curentValue = Number(valueEl.innerText);
  valueEl.innerText = ++curentValue;
});
