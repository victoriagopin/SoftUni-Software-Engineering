function diagonalSum(arr) {
    let newArr = [];
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        firstDiagonal += arr[i][i];
        secondDiagonal += arr[i][arr.length - 1 - i];
    }

    newArr.push(firstDiagonal);
    newArr.push(secondDiagonal);
    console.log(newArr.join(' '));
}

diagonalSum([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);