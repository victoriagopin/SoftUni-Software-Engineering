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