const display = document.querySelector(".ress"); //Select o Display.
const numbers = document.querySelectorAll("[id*=button]"); //Select all Buttons.
const operators = document.querySelectorAll("[id*=operators]")
let newNumber = true;
let operator;
let beforeNumber;

const insertNumber = (event) => updateDisplay(event.target.textContent); // it call updateDisplay's arrow function (Recebendo o texto contido no alvo do evento).

numbers.forEach(numero => numero.addEventListener("click", insertNumber)); //Percorre todos os Ids com nome button[] add o evento Click.

const updateDisplay = (text) => {
    if (newNumber) {
        display.textContent = text // add valores no display
        newNumber = false;
    } else {
        display.textContent += text // concatena valores no display.
    }
};
let selectOperator = () => {
    if (!newNumber) {
        newNumber = true;
        operator = event.target.textContent;
        beforeNumber = display.textContent;
    }
}

operators.forEach(operator => operator.addEventListener("click", selectOperator)); //Percorre todos os Ids com nome operators[] add o evento Click.