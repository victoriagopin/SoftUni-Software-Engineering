function lowestPricesInCity(arr) {
    let list = {};

    for (let el of arr) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (product in list) {
            if (list[product].value > price) {
                list[product] = {
                    city: town,
                    value: price
                }
            }
        } else {
            list[product] = {
                city: town,
                value: price
            }
        }
    }

    let entries = Object.entries(list);

    for (let entry of entries) {
        let product = entry[0];
        let { city, value } = entry[1];

        console.log(`${product} -> ${value} (${city})`);
    }
}

lowestPricesInCity(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])