function reverse(n, arr) {

    let newArr = [];
    for (let i = 0; i < n; i++) {

        newArr[i] = arr[i];

    }


    let finalArr = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        finalArr.push(newArr[i]);
    }
    console.log(finalArr.join(' '));


}

reverse(3, [66, 43, 75, 89, 47]);