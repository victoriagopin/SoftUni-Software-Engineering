function biggerHalf(arr) {
    let sortedArr = arr.sort((a, b) => a - b);

    let middle = arr.length / 2;
    let finalArr = sortedArr.slice(middle);
    return finalArr;
}

biggerHalf([4, 7, 2, 5]);