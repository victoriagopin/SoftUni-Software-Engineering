// Write a function that receives a string and a repeat count n. The function should return a new string (the old one
// repeated n times).

function repeatString(str, n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += str;
    }
    console.log(result);
}

repeatString('abc', 3)