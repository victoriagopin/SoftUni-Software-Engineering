// You will receive two arrays of integers. The second array is containing exactly three numbers.
// The first number represents the number of elements you have to take from the first array (starting from the first
// one).
// The second number represents the number of elements you have to delete from the numbers you took (starting
// from the first one).
// The third number is the number we search in our collection after the manipulations.
// As output print how many times that number occurs in our array in the following format:
// "Number {number} occurs {count} times."

function searchForNum(arr1, arr2) {
    let [elToTake, elToDelete, searchedNum] = arr2;
    let newArr = [];

    for (let i = 0; i < elToTake; i++) {
        newArr.push(arr1[i]);

    }



    for (let i = 0; i < elToDelete; i++) {
        newArr.shift();
    }


    let count = 0;

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == searchedNum) {
            count++;
        }
    }
    console.log(`Number ${searchedNum} occurs ${count} times.`);
}

searchForNum([7, 1, 5, 8, 2, 7],
    [3, 1, 5])