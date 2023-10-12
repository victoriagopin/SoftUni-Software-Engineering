// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

function smallestTwoNums(arr) {

    let sorted = arr.sort((a, b) => {
        return a - b;
    });
    let result = sorted.slice(0, 2);
    console.log(result.join(' '));
}

smallestTwoNums([30, 15, 50, 5])