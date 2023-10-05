// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result
// depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this
// task using arrow functions.

function simpleCalculator(n1, n2, action) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (action) {
        case 'multiply':
            return multiply(n1, n2);
        case 'divide':
            return divide(n1, n2);
        case 'add':
            return add(n1, n2);
        case 'subtract':
            return subtract(n1, n2)
    }

}

console.log(simpleCalculator(5, 5, 'multiply'));