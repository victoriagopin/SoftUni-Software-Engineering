// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain
// power.
// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors
// from left and right. Detonations are performed from left to right and all detonated numbers disappear.
// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the
// special bomb number and its power.
// The output is the sum of the remaining elements in the sequence.

function bombNums(arr1, arr2) {
    let [bombNum, power] = arr2;

    while (arr1.includes(bombNum)) {
        let index = arr1.indexOf(bombNum);
        arr1.splice(Math.max(0, index - power), power * 2 + 1);
    }

    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    console.log(sum);
}

bombNums([1, 1, 2, 1, 1, 1,
    2, 1, 1, 1],
    [2, 1]);