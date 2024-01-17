/*

Write a JS function that takes two numbers and a string as an input. 

The string may be one of the following: '+', '-', '*', '/', '%', '**'.

Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
The input comes as two numbers and a string argument passed to your function.
The output should be printed on the console.
*/

function mathOpeartions(num1, num2, operator) {
    if (operator == '+') {
        console.log(num1 + num2);
    } else if (operator == '-') {
        console.log(num1 - num2);
    } else if (operator == '*') {
        console.log(num1 * num2);
    } else if (operator == '/') {
        console.log(num1 / num2);
    } else if (operator == '%') {
        console.log(num1 % num2);
    } else {
        console.log(num1 ** num2);
    }
}

mathOpeartions(5, 6, '+');