function cookingByNums(numAsStr, ...operations) {
    let num = Number(numAsStr);

    for (let operation of operations) {
        if (operation == 'chop') {
            num = num / 2;
            console.log(num);
        } else if (operation == 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (operation == 'spice') {
            num += 1;
            console.log(num);
        } else if (operation == 'bake') {
            num *= 3;
            console.log(num);
        } else if (operation == 'fillet') {
            num *= 0.80;
            console.log(num.toFixed(1));
        }
    }
}

cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');