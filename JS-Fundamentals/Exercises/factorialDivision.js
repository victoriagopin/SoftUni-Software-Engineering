// Write a function that receives two integer numbers. Calculate the factorial 
// of each number. Divide the first result by the second and print the division 
// formatted to the second decimal point.


function factorialDivision(num1, num2) {

    let fact = findFactorial(num1);
    let fact2 = findFactorial(num2);
    let result = division(fact, fact2);
    console.log(result.toFixed(2));


    function findFactorial(num) {
        let factoria = 1;
        let sum = num;
        while (factoria < num) {
            sum *= factoria;
            factoria++;
        }
        return sum;
    }

    function division(a, b) {
        return a / b;
    }
}

factorialDivision(5, 2)