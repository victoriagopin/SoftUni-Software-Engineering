/*
Write a JS function that takes three string arguments as an input. Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.
The input comes as three string arguments passed to your function.
The output should be printed on the console in two lines.

*/

function stringLeng(a, b, c) {
    let total = a.length + b.length + c.length;
    let avg = total / 3;

    console.log(total);
    console.log(Math.floor(avg));
}

stringLeng('pasta', '5', '22.3')