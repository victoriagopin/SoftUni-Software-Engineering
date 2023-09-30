function addAndSubtract(arr) {
    let sum = 0;
    let newArr = [];
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];


        let currNum = arr[i];
        if (currNum % 2 == 0) {
            let total = currNum + i;
            newArr.push(total);
            newSum += total;
        } else {
            let total2 = currNum - i;
            newArr.push(total2);
            newSum += total2;
        }

    }
    console.log(newArr);
    console.log(sum);
    console.log(newSum);
}

addAndSubtract([-5, 11, 3, 0, 2])