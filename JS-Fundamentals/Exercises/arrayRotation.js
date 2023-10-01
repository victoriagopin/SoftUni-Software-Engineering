function arrayRotation(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let currNum = arr[0];
        arr.shift(currNum);
        arr.push(currNum);

    }
    console.log(arr.join(' '));
}


arrayRotation([32, 21, 61, 1], 4);