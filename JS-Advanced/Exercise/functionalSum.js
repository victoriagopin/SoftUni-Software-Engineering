function add(initialSum) {
    let sum = initialSum || 0;

    function addNumber(number) {
        sum += number;
        return addNumber;
    }

    addNumber.toString = function () {
        return sum;
    };

    return addNumber;
}

// Example usage
console.log(add(4)(3).toString()); // Outputs: 7
console.log(add(5)(10)(2).toString()); // Outputs: 17
