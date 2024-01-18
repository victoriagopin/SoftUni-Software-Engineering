function aggregateElements(arr) {
    let sum = 0;
    let inverseValuesSum = 0;


    for (let el of arr) {
        let num = Number(el);
        sum += num;
    }
    console.log(sum);

    for (let el of arr) {
        let num = Number(el);
        inverseValuesSum += 1 / num;
    }
    console.log(inverseValuesSum);

    console.log(arr.join(''));
}

aggregateElements([2, 4, 8, 16]);