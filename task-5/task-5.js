const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  console.log('event.target', event.target.value);
  console.log('inputEl.value', inputEl.value);
  const curentValue = inputEl.value;
  outputEl.innerText = curentValue || 'незнакомец';
});
