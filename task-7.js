const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', event => {
  const value = event.target.value;
  textEl.style.fontSize = value + 'px';
});
