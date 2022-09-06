const buttonMinus = document.querySelector( "[data-action=decrement]");
const buttonPlus = document.querySelector( "[data-action=increment]");
const buttonValue = document.querySelector( "#value" );

buttonMinus.addEventListener("click", () => {
    buttonValue.textContent = Number(buttonValue.innerHTML) - 1;
});

buttonPlus.addEventListener("click", () => {
    buttonValue.textContent = Number(buttonValue.innerHTML) + 1;
});

