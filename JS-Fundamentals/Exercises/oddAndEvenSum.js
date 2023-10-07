// You will receive a single number. You have to write a function, 
// that returns the sum of all even and all odd digits from that 
// number. 


function oddAndEvenSum(num) {

    let [odd, even] = evenOddSum(num);
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

    function evenOddSum(n) {
        let numAsString = n.toString();
        let even = 0;
        let odd = 0;
        let arr = [];
        for (let i = 0; i < numAsString.length; i++) {
            let nAsNum = Number(numAsString[i]);
            if (nAsNum % 2 == 0) {
                even += nAsNum;
            } else {
                odd += nAsNum;
            }
        }
        arr.push(odd);
        arr.push(even);
        return arr;
    }
}

oddAndEvenSum(1000435)