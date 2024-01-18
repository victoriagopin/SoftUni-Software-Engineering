function sameNums(num) {
    let numAsStr = num.toString();
    let arr = numAsStr.split('');
    let firstNum = Number(arr[0]);
    let sum = 0;
    sum += firstNum;
    let isSame = true;

    for (let i = 1; i < arr.length; i++) {
        let curNum = Number(arr[i]);
        if (curNum !== firstNum) {
            isSame = false;
        }
        sum += curNum;
    }
    console.log(isSame);
    console.log(sum);
}

sameNums(1234);