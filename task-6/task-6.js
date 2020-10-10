const inputEl = document.querySelector('#validation-input');
const neededLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', event => {
  const currentValue = event.target.value.length;
  if (currentValue === neededLength) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
});

inputEl.addEventListener('focus', event => {
  inputEl.classList = '';
});
