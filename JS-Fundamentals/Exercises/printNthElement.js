function printNthElement(arr) {
    let num = Number(arr.pop([arr.length - 1]));

    let newArr = [];
    for (let i = 0; i < arr.length; i += num) {
        newArr.push(arr[i]);


    }

    console.log(newArr.join(' '));
}

printNthElement(['1', '2', '3', '4', '5', '6'])