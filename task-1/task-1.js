const categories = document.querySelector('ul#categories');
const categoriesItem = categories.querySelectorAll('li.item');
console.log(`В списке ${categoriesItem.length} категории.`);

categoriesItem.forEach(element => {
  console.log(`Категория: ${element.querySelector('h2').innerText}`);
  console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);
});
