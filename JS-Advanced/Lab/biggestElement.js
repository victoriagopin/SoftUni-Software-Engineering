function biggesetElement(arr) {
    let biggest = Number.NEGATIVE_INFINITY;
    let n = arr[0].length;

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i][0];
        if (curNum > biggest) {
            biggest = curNum;
        }

        for (let z = 1; z < n; z++) {
            let num = arr[i][z];
            if (num > biggest) {
                biggest = num;
            }
        }
    }
    console.log(biggest);
}

biggesetElement([[-3, -5, -7, -12],
[-1, -3, -2, -2],
[-8, -4, -22, -2]]);