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

mathOpeartions(5, 6, '+')