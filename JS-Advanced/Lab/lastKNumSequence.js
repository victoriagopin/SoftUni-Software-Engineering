function lastKNumSequence(nu, ku) {
    let arr = [1];
    let counter = ku;

    while (arr.length < nu) {
        if (arr.length == 1) {
            arr.push(1);
        }

        if (arr.length < counter) {
            let newNum = arr.slice();
            let num = 0;
            for (let z = 0; z < newNum.length; z++) {
                num += newNum[z];
            }
            arr.push(num);
        } else {
            let newNum = arr.slice(-counter);
            let num = 0;

            for (let y = 0; y < newNum.length; y++) {
                num += newNum[y];
            }
            arr.push(num);
        }
    }
    return arr;
}




lastKNumSequence(6, 3)