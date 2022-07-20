class Calculator {
    constructor(prevOut, currOut) {
        this.prevOut = prevOut;
        this.currOut = currOut;
        this.clear();
    }
    // this function clear the display
    clear() {
        this.currOperand = '';
        this.prevOperand = '';
        this.operation = undefined;
    }
    //this function works as backspace while entering input
    delete() {
        this.currOperand = this.currOperand.toString().slice(0, -1);

    }
    //this function appends each digit one after another
    appendNumber(number) {
        console.log(prevOut, currOut)
        if (number === '.' && this.currOperand.includes('.')) return;
        this.currOperand = this.currOperand.toString() + number.toString();

    }
    chooseOperation(operation) {
        if (this.currOperand === '') return;
        if (this.prevOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.prevOperand = this.currOperand;
        this.currOperand = '';

    }
    compute() {
        let result;
        const prev = parseFloat(this.prevOperand);
        const curr = parseFloat(this.currOperand);
        if (isNaN(prev) || isNaN(curr)) return;
        switch (this.operation) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            default:
                return

        }
        this.currOperand = result;
        this.operation = undefined;
        this.prevOperand = '';


    }
    //this function formats the number with comma as delimitter
    formatNumber(number) {
        const stringNum = number.toString();
        const intPart = parseFloat(stringNum.split('.')[0]);
        const decPart = stringNum.split('.')[1];
        let intDisplay;
        if (isNaN(intPart)) {
            intDisplay = ''
        }
        else {
            intDisplay = intPart.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decPart != null) {
            return `${intDisplay}.${decPart}`
        }
        else {
            return intDisplay;
        }

    }
    updateDisplay() {
        this.currOut.innerText = this.formatNumber(this.currOperand);
        if (this.operation != null) {
            this.prevOut.innerText = `${this.formatNumber(this.prevOperand)} ${this.operation}`;
        }
        else { this.prevOut.innerText = this.prevOperand; }
    }

}



const operandBtns = document.querySelectorAll("[data-operand]");
const operatorBtns = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const allClearBtn = document.querySelector("[data-all-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const prevOut = document.querySelector("[data-previous]");
const currOut = document.querySelector("[data-current]");

const calculator = new Calculator(prevOut, currOut);

operandBtns.forEach(button => {
    button.addEventListener('click', () => {
        //console.log(button.innerText)
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()
    })
})
operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        //console.log(button.innerText)
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay()
    })
})
equalsBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();

})
allClearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();

})
deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();

})
