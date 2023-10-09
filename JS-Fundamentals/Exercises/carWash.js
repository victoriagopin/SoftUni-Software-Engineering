// Write a JS function that receives some commands. Depending on the command, add or subtract a percentage of
// how much the car is cleaned or dirty. Start from 0. The first command will always be 'soap':
// • soap – add 10 to the value
// • water – increase the value by 20%
// • vacuum cleaner – increase the value by 25%
// • mud – decrease the value by 10%
// The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format:
//  `The car is {value}% clean.`
// Note: The value should be rounded to the second decimal point.

function carWash(arr) {
    let value = 0;
    for (let command of arr) {
        if (command == 'soap') {
            value += 10;
        } else if (command == 'water') {
            let percentage = 20;
            value += (value * percentage) / 100;
        } else if (command == 'vacuum cleaner') {
            let percentage = 25;
            value += (value * percentage) / 100;
        } else if (command == 'mud') {
            let percentage = 10;
            value -= (value * percentage) / 100;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud",
    "vacuum cleaner"]);