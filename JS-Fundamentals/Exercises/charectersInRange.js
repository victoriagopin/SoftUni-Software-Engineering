// Write a function that receives two characters and prints on a
// single line all the characters in between them according to the
// ASCII code. Keep in mind that the second character code might be
// before the first one inside the ASCII table.


function charectersInRange(a, b) {
    let finalResult = symbols(a, b);
    console.log(finalResult.join(' '));

    function symbols(a, b) {
        let startingPoint = a.charCodeAt(0);
        let endingPoint = b.charCodeAt(0);
        let result = [];
        if (endingPoint < startingPoint) {
            let curStartingPoint = startingPoint;
            startingPoint = endingPoint;
            endingPoint = curStartingPoint;
        }
        for (let i = startingPoint + 1; i < endingPoint; i++) {
            let curSymbol = String.fromCharCode(i);

            result.push(curSymbol);
        }
        return result;
    }


}

charectersInRange('C',
    '#');