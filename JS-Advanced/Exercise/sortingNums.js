function sortingNums(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let result = [];
    let leng = arr.length

    for (let i = 0; i < leng; i++) {
        if (arr.length == 0) {
            break;
        }
        if (arr.length == 1) {
            result.push(sorted.shift());
        } else {
            result.push(sorted.shift());
            result.push(sorted.pop());
        }



    }

    return result;
}

sortingNums([22, 9, 100, 63])