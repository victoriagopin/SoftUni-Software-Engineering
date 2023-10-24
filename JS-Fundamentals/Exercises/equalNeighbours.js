// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or
//     strings).
//     The input comes as an array of arrays, containing string elements (2D matrix of strings).
//     The output is the return value of your function. Save the number of equal pairs, you find and return it.

function neighbours(arr) {
    let curArr = arr.shift();

    let counter = 0;

    while (arr.length > 0) {
        for (let i = 0; i < curArr.length; i++) {
            let curEl = curArr[i];
            if (curEl == curArr[i + 1]) {
                counter++;
            }


            for (let j = 0; j < curArr.length; j++) {
                let nextArr = arr[0];

                let el = nextArr[j];
                if (el == curEl && i == j) {
                    counter++;
                }

            }

        }
        curArr = arr.shift();


    }
    for (let i = 0; i < curArr.length; i++) {
        let curEl = curArr[i];
        if (curEl == curArr[i + 1]) {
            counter++;
        }
    }
    console.log(counter);
}

neighbours([['test', 'yo', 'yo',
    'ho'],
['well', 'done', 'no',
    '6'],
['not', 'done', 'yet',
    '5']])