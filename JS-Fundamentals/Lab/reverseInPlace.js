function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let j = arr.length - 1 - i;
        let t = arr[i]
        arr[i] = arr[j];
        arr[j] = t;

    }
    console.log(arr.join(' '));

}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);