function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const elementsСollection = document.getElementById('boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i*10;
    const element = `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`;
    elements.push(element);
  }

  const div = elements.join('');

  elementsСollection.insertAdjacentHTML('beforeend', div);
}

function destroyBoxes() {
  elementsСollection.innerHTML = '';
  input.value = '';
}