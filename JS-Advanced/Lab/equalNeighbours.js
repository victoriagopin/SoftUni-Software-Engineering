function equalNeighbours(matrix) {
    let equals = 0;

    for (let i = 0; i < matrix.length - 1; i++) {
        let el = matrix[i][0];
        let el2 = matrix[i + 1][0];

        if (el == el2) {
            equals++;
        }

        if (matrix[i][i] == matrix[i][i + 1]) {
            equals++;
        }

        for (let z = 1; z < matrix.length; z++) {
            let curEl = matrix[i][z];
            let curEl2 = matrix[i + 1][z];

            if (curEl == curEl2) {
                equals++;
            } else if (matrix[i][z] == matrix[i][z + 1]) {
                equals++;
            }
        }
    }

    let leng = matrix.length;

    while (matrix.length == leng) {
        let arr = matrix[leng - 1];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == arr[i + 1]) {
                equals++;
            }
        }

        leng = leng + 1;
    }



    console.log(equals);
}

equalNeighbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);