function maxSequence(arr) {
    let currSequence = [];
    let newArr = [];
    let longestArr = [];


    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];

        if (curNum == arr[i - 1] || curNum == arr[i + 1]) {
            currSequence.push(curNum);
        }
    }
    for (let i = currSequence.length - 1; i >= 0; i--) {
        let curDigit = currSequence.pop(currSequence[i]);

        newArr.push(curDigit);

        for (let j = currSequence.length - 1; j >= 0; j--) {
            if (currSequence[j] != curDigit) {
                break;
            }
            let curDigitOfj = currSequence.pop(currSequence[j]);


            if (curDigit == curDigitOfj) {

                newArr.push(curDigitOfj);
            }
        }
        if (newArr.length >= longestArr.length) {
            longestArr = newArr;
            newArr = [];
        } else {
            newArr = [];
        }
    }



    console.log(longestArr.join(' '));
}


maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);


