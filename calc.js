const calculator = document.querySelector('#calculator');
const display = calculator.querySelector('.display');
const buttons = calculator.querySelector('.buttons');

let operand1 = null;
let operand2 = null;
let operator = null;

buttons.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        const value = target.textContent;
        if (value === 'C') {
            // Clear the display and reset the calculator
            display.textContent = '0';
            operand1 = null;
            operand2 = null;
            operator = null;

        }
    }
})



