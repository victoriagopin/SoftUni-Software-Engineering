function maxSequence(arr) {
    let currSequence = [];
    let newArr = [];
    let longestArr = [];
    let best = ;

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];

        if (curNum == arr[i - 1] || curNum == arr[i + 1]) {
            currSequence.push(curNum);
        }
    }
    for (let i = currSequence.length - 1; i >= 0; i--) {
        let curDigit = currSequence[i];


    }
    console.log(newArr.join(' '));
}


maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);


// for (let j = i - 1; j >= 0; j--) {
//     let curJ = currSequence[j]
//     if (curDigit == curJ) {
//         newArr.push(curDigit);
//         newArr.push(currSequence[j]);
//     }
//     if (curDigit == newArr[j]) {
//         newArr.push(curDigit);
//         longestArr = newArr;
//         newArr = [];
//     }
// }