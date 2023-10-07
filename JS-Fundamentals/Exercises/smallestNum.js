//Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function.

function smallestNum(num1, num2, num3) {
    let minNum = Math.min(num1, num2, num3);
    console.log(minNum);
}

smallestNum(2, 5, 3)