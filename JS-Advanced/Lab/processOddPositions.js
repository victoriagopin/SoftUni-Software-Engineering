function processOddPositions(arr) {
    let newArr = [];

    for (let i = 1; i < arr.length; i += 2) {
        newArr.push(arr[i]);
    }

    let result = newArr.map(el => (el * 2)).reverse().join(' ');
    console.log(result);
}

processOddPositions([10, 15, 20, 25]);