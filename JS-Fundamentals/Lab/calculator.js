function calculator(a, operator, b) {
    let result = 0;
    if (operator == '+') {
        result = a + b;
        console.log(result.toFixed(2));
    } else if (operator == '-') {
        result = a - b;
        console.log(result.toFixed(2));
    } else if (operator == '/') {
        result = a / b;
        console.log(result.toFixed(2));
    } else {
        result = a * b;
        console.log(result.toFixed(2));
    }
}

calculator(5, '+', 10);