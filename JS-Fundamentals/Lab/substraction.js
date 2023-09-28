function substraction(arr) {
    let even = 0;
    let odd = 0;
    for (let num of arr) {
        let curNum = Number(num);
        if (num % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }


    }
    let total = even - odd;
    console.log(total);
}

substraction([2, 4, 6, 8, 10]);