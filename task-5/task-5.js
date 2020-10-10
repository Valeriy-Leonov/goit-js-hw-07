const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  const curentValue = inputEl.value;
  outputEl.innerText = curentValue || 'незнакомец';
});
