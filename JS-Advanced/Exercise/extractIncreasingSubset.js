function extractIncreasingSubset(arr) {
    let result = [];
    let biggest = arr.shift();
    result.push(biggest);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            biggest = arr[i];
            result.push(arr[i]);
        }

    }
    return result;

}

extractIncreasingSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);