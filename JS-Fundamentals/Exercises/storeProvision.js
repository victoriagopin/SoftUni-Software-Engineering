// You will receive two arrays. The first array represents the current stock of the local store. The second array will
// contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd index will hold the quantity of that product.
// The second array could contain products that are already in the local store. If that happens increase the quantity for
// the given product. You should store them into an object, and print them in the following format: (product ->
// quantity)
// All of the arrays’ values will be strings.

function storeProvision(curStock, orderedProducts) {
    let products = {};

    for (let i = 0; i < curStock.length; i += 2) {
        let curProduct = curStock[i];
        let qty = Number(curStock[i + 1]);

        products[curProduct] = qty;

    }

    for (let j = 0; j < orderedProducts.length; j += 2) {
        let curProduct = orderedProducts[j];
        let qty = Number(orderedProducts[j + 1]);

        if (curProduct in products) {
            products[curProduct] += qty;
        } else {
            products[curProduct] = qty;
        }
    }

    let products1 = Object.keys(products);

    for (let product of products1) {
        console.log(`${product} -> ${products[product]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]);