function solution() {
    let result = '';

    let func = {
        append: function (str) {
            result += str;
            return result;
        },
        removeStart: function (numsToRemove) {
            result = result.substring(numsToRemove);
            return result;
        },
        removeEnd: function (numsToRemove) {
            let leng = result.length;
            let indx = leng - numsToRemove;
            result = result.substring(0, indx);
            return result;
        },
        print: function () {
            console.log(result);
        }
    }


    return func;
}




let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();