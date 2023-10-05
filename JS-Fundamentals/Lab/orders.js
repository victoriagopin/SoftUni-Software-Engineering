// Write a function that calculates the total price of an order and prints it on the console. The function should receive
// one of the following products: coffee, coke, water, snacks; and a quantity of the product. The prices for a single
// piece of each product are:
// • coffee - 1.50
// • water - 1.00
// • coke - 1.40
// • snacks - 2.00
// Print the result formatted to the second decimal place.

function orders(product, quantity) {
    if (product == 'coffee') {
        let result = 1.50 * quantity;
        console.log(result.toFixed(2));
    } else if (product == 'water') {
        let result = 1 * quantity;
        console.log(result.toFixed(2));
    } else if (product == 'coke') {
        let result = 1.40 * quantity;
        console.log(result.toFixed(2));
    } else if (product == 'snacks') {
        let result = 2 * quantity;
        console.log(result.toFixed(2));
    }
}

orders('water', 5);