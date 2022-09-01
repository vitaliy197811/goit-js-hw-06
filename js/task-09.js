const color = document.querySelector( ".color");
const buttonСhangeСolor = document.querySelector( ".change-color");
console.log(color);

buttonСhangeСolor.addEventListener("click", changeСolor);

function changeСolor (even) {
  const changeColor = getRandomHexColor();
  document.body.style.backgroundColor = changeColor;
  color.textContent = changeColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}