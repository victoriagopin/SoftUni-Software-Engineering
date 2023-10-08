// Write a function that receives a single integer number n and prints
// nxn matrix with that number.


function nXnMatrix(n) {
    for (let i = 1; i <= n; i++) {
        let curRow = (n.toString() + " ").repeat(n);
        console.log(curRow);
    }
}

nXnMatrix(3)