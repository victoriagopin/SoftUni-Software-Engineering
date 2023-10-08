// A palindrome is a number, which reads the same backward as
// forward, such as 323 or 1001. Write a function, which receives
// an array of positive integers and checks if each integer is a palindrome or not.
// Output
// If the current integer is a palindrome, print: "true"
// Otherwise, print: "false"


function palindromeInt(arr) {


    for (let num of arr) {
        let numAsString = num.toString();
        let isTrue = true;
        let newNum = '';

        for (let i = numAsString.length - 1; i >= 0; i--) {
            let curNum = numAsString[i];
            newNum += curNum;
        }

        if (newNum == numAsString) {
            isTrue = true;
            console.log(isTrue);
        } else {
            isTrue = false;
            console.log(isTrue);
        }
    }

}

palindromeInt([32, 2, 232, 1010]);