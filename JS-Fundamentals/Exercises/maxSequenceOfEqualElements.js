function maxSequence(arr) {
    let firstSequence = [];
    let secondSquence = [];

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];

        if (i == 0) {
            if (arr[0] == arr[1]) {
                firstSequence.push(curNum);
            }
        }

        if (curNum == arr[i - 1]) {
            firstSequence.push(curNum);
        }

    }
    console.log(firstSequence);
}


maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);