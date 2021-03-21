const display = document.querySelector(".ress"); //Select o Display.
const numbers = document.querySelectorAll("[id*=button]"); //Select all Buttons.
const operators = document.querySelectorAll("[id*=operators]"); //Select all Operators

let newNumber = true;
let operator;
let beforeNumber;

const operacaoPendente = () => operator !== undefined;

const calcular = () => {
    if (operacaoPendente()) { // Valida se ja tem um Operator pendente. Se tiver ele nao calcula.
        newNumber = true;
        const numeroAtual = parseFloat(display.textContent); // Aqui fica o text atual salvo no insertNumber.

        const resultado = eval(`${beforeNumber} ${operator} ${numeroAtual}`);
        updateDisplay(resultado);



        // if (operator == "+") {
        //     updateDisplay(beforeNumber + numeroAtual);
        // } else if (operator == "-") {
        //     updateDisplay(beforeNumber - numeroAtual);
        // } else if (operator == "x") {
        //     updateDisplay(beforeNumber * numeroAtual);
        // } else if (operator == "/") {
        //     updateDisplay(beforeNumber / numeroAtual);
        // }
    }
}

const activeIgual = () => {
    calcular();
    operator = undefined;
}

const igual = document.querySelector("#igual").addEventListener("click", activeIgual); //Select the Igual button.

const limparDisplay = () => { // Aqui vai zerar toda a operacao.
    display.textContent = "";
    operator = undefined;
    beforeNumber = undefined;
    newNumber = true;
}

const limpar = document.querySelector("#limpar").addEventListener("click", limparDisplay) //Select the limpar button.

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
        calcular();
        newNumber = true;
        operator = event.target.textContent;
        beforeNumber = parseFloat(display.textContent);
    }
}

operators.forEach(operator => operator.addEventListener("click", selectOperator)); //Percorre todos os Ids com nome operators[] add o evento Click.