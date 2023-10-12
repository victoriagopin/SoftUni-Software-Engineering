// You are given an array of numbers. Write a function that prints the elements at odd positions from the array,
// doubled and in reverse order.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space

function processOddNums(arr) {
    let oddIndxs = arr.filter((x, i) => i % 2 != 0);
    let doubled = oddIndxs.map(x => x * 2);
    let reversed = doubled.reverse();
    console.log(reversed.join(' '));
}

processOddNums([3, 0, 10, 4, 7, 3])
