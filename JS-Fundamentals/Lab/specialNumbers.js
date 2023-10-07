// Write a program that receives a number n. For all numbers in 
// the range [1…n] print the number and if it is special or
// not (True / False).
// • A number is special when its sum of digits is 5, 7 or 11

function specialNumbers(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        let currNum = i;
        curNumAsString = String(currNum);
        for (let y = 0; y < curNumAsString.length; y++) {
            let currSymbol = curNumAsString[y];
            sum += Number(currSymbol);

        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${currNum} -> True`);
        } else {
            console.log(`${currNum} -> False`);
        }
        sum = 0;
    }
}

specialNumbers(15);