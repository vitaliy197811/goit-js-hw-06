const input = document.querySelector( "#validation-input");

input.addEventListener(`blur`, () => {
    input.classList.add("invalid");
    const inputLength = Number(input.dataset.length);
    if (input.value.length === inputLength) {
        input.classList.toggle("invalid");
        input.classList.add("valid");
    } 
});