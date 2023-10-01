function maxNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (currNum <= nextNum) {
                isTop = false;
                break;
            }

        }
        if (isTop) {
            newArr.push(currNum);
        }
    }
    console.log(newArr.join(' '));
}

maxNumber([41, 41, 34, 20]);