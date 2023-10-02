function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let curNum2 = arr[j];
            let total = curNum2 + currNum;
            if (total == num) {
                console.log(`${currNum} ${curNum2}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)