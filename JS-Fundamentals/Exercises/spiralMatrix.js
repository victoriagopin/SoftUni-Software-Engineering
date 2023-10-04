// Write a function that generates a Spirally filled matrix with numbers, with given dimensions.
// Input
// The input comes as 2 numbers that represent the dimension of the matrix.
// Output
// The output is the matrix filled spirally starting from 1. You need to print every row on a new line, with the cells
// separated by a space. Check the examples below.

function generateSpiralMatrix(rows, cols) {
    const matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));

    let left = 0,
        right = cols - 1,
        top = 0,
        bottom = rows - 1;
    let num = 1;

    while (num <= rows * cols) {
        // Fill the top row from left to right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num;
            num++;
        }
        top++;

        // Fill the rightmost column from top to bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num;
            num++;
        }
        right--;

        // Fill the bottom row from right to left
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num;
            num++;
        }
        bottom--;

        // Fill the leftmost column from bottom to top
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num;
            num++;
        }
        left++;
    }

    // Print the matrix
    matrix.forEach(row => console.log(row.join(' ')));
}

// Example usage:
generateSpiralMatrix(3, 3);
