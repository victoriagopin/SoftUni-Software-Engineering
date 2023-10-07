// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function sum() and the third integer.

function addAndSubtract(n1, n2, n3) {
    let result1 = sum(n1, n2);
    let finalResult = subtract(result1, n3);
    console.log(finalResult);

    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }
}

addAndSubtract(23, 6, 10)