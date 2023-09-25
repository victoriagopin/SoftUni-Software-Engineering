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