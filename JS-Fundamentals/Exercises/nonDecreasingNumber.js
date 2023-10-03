// Write a function that extracts only those numbers that form a non-decreasing subset. In other words, you start from
// the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the
// current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the
// current biggest one and you continue to the next number.

function nonDecreasingSubset(arr) {
    let newArr = [];
    let biggest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];

        if (curNum >= biggest) {
            biggest = curNum;
            newArr.push(curNum);
        }

    }
    console.log(newArr.join(' '));
}

nonDecreasingSubset([20, 30, 10, 40, 20])