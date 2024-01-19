function negativeAndPositiveNums(arr) {
    let modifiedArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            modifiedArr.unshift(arr[i]);
        } else {
            modifiedArr.push(arr[i]);
        }
    }
    console.log(modifiedArr.join('\n'));
}

negativeAndPositiveNums([7, -2, 8, 9]);