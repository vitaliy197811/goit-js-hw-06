const input = document.querySelector( "#validation-input");

input.addEventListener(`blur`, () => {
    input.classList.add("invalid");
    if (input.value.length === 6) {
        input.classList.toggle("invalid");
        input.classList.add("valid");
    } 
});