/*
Write a JS program that changes a number until the average of all its digits is not higher than 5. To modify the number, your program should append a 9 to the end of the number, when the average value of all its digits is higher than 5 the program should stop appending. 
The input is a single number.
The output should consist of a single number - the final modified number which has an average value of all its digits higher than 5. The output should be printed on the console.
Constraints
The input number will consist of no more than 6 digits.
The input will be a valid number (there will be no leading zeroes).

*/

function numberModification(nums) {
    let sum = 0;
    let numsAsStr = nums.toString();
    let count = 0;

    for (let num of numsAsStr) {
        count++;
        sum += Number(num);
    }

    if ((sum / count) > 5) {
        console.log(nums);
    } else {
        numsAsStr += 9;
        sum += 9;
        count++;
        while ((sum / count) < 5) {
            numsAsStr += 9;
            sum += 9;
            count++;
        }

        console.log(numsAsStr);

    }
}

numberModification(5835);