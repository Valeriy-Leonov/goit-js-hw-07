const ingredientsUl = document.querySelector('ul#ingredients');
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsLi = ingredients.map(element => {
  const li = document.createElement('li');
  li.innerText = element;
  return li;
});

ingredientsUl.append(...ingredientsLi);
