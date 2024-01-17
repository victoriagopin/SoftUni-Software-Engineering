/*
Write a function that takes three number arguments as input and finds the largest of them. Print the following text on the console:  `The largest number is {number}.`.
The input comes as three number arguments passed to your function.
The output should be printed to the console.

*/

function largestNum(num1, num2, num3) {
    let max = Math.max(num1, num2, num3);
    console.log(`The largest number is ${max}.`);
}

largestNum(5, -3, 16);