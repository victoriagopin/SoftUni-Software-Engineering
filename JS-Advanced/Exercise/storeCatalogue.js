function storeCatalogue(arr) {
    let result = [];

    for (let el of arr) {
        let [product, price] = el.split(' : ');

        let concat = product + ':' + " " + price;
        result.push(concat);
    }

    let sorted = result.sort((a, b) => a.localeCompare(b));

    let firstDigit = '';
    for (let i = 0; i < sorted.length; i++) {
        let curProduct = sorted[i];


        if (i == 0) {
            console.log(curProduct[0]);
            firstDigit = curProduct[0];
        }

        if (firstDigit != curProduct[0]) {
            console.log(curProduct[0]);
            firstDigit = curProduct[0];
        }

        console.log(sorted[i]);
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);