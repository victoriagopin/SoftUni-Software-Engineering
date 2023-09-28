function sumEvenNumbers(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currNum = Number(arr[i]);
        if (currNum % 2 == 0) {
            sum += currNum;
        }
    }
    console.log(sum);
}

sumEvenNumbers(['2', '4', '6', '8', '10']);