// Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of
// every row and every column are equal.
// Input
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be
// positive.
// Output
// The output is a Boolean result indicating whether the matrix is magical or not.

function magicMatrices(arr) {
    let arr1 = arr[0];
    let arr2 = arr[1];
    let arr3 = arr[2];
    let startingSum = arr1[0] + arr2[0] + arr3[0];
    let sum = 0;
    let isTrue = true;

    for (let i = 1; i < arr.length; i++) {
        let curNum = arr1[i];
        let curNum2 = arr2[i];
        let curNum3 = arr3[i];

        sum = curNum + curNum2 + curNum3;

        if (sum != startingSum) {
            isTrue = false;
        }

    }

    if (isTrue) {
        console.log('true');
    } else {
        console.log('false');
    }
}

magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);