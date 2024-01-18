function greatestCommonDivisior(num1, num2) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let GCD = 0;

    for (let i = end; i >= 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            GCD = i;
            break;
        }
    }
    console.log(GCD);
}

greatestCommonDivisior(2154, 458);