function magicMatrices(matrix) {
    let isTrue = true;
    if (matrix.length !== matrix[0].length) {
        console.log(false);
    } else {


        let sum = 0;

        for (let i = 0; i < matrix[0].length; i++) {
            sum += matrix[0][i];
        }
        for (let row = 1; row <= matrix.length; matrix++) {
            let curSum = 0;
            for (let col = 0; col < matrix[row].length; col++) {
                curSum += matrix[row][col];
            }

            if (curSum != sum) {
                isTrue = false;
                break;
            }
        }

        if (isTrue) {
            for (let col = 0; col < matrix.length - 1; col++) {
                let curSum = 0;

                for (let row = 0; row < matrix.length; row++) {
                    curSum += matrix[row][col];
                }

                if (curSum != sum) {
                    isTrue = false;
                    break;
                }
            }
        }
        console.log(isTrue);
    }


}

magicMatrices([[4, 5, 6],
[6, 5, 4]]);