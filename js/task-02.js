const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liElem = document.querySelector('#ingredients')

const element = ingredients.map(optional => {
  const liElement = document.createElement('li');
  liElement.textContent = optional;
  liElement.classList.add('item');
  return liElement;
})
liElem.append(...element);
console.log(element);