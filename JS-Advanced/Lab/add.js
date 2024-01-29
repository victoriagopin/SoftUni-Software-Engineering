function solution(initialValue) {

    let total = initialValue;


    function addToTotal(number) {
        let newTot = total + number;

        return newTot;
    }


    return addToTotal;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

