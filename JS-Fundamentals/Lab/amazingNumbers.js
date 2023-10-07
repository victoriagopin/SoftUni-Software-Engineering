// Write a function, which as input will receive a number.
// Check and print if it is amazing or not into the following format:
// "{number} Amazing? {True or False}"
// An amazing number includes the digit 9 the sum of its digits.
// Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 
// 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)

function amazingNumbers(num) {
    let sum = 0;
    let numAsString = String(num);

    for (let i = 0; i < numAsString.length; i++) {
        let currNumber = numAsString[i];
        sum += Number(currNumber);
    }

    let sumAsString = String(sum);
    let isNine = false

    for (let i = 0; i < sumAsString.length; i++) {
        let currentSymbol = sumAsString[i];

        if (currentSymbol == '9') {
            isNine = true;
        }

    }
    isNine ? console.log(`${num} Amazing? True`) : console.log(`${num} Amazing? False`);
}



amazingNumbers(999);