// Let`s take a break and visit the game bar at SoftUni. It is about time for the people behind the bar to go home and
// you are the person who has to draw the line and calculate the money from the products that were sold throughout
// the day. Until you receive a line with the text "end of shift" you will be given lines of input. But before
// processing that line you have to do some validations first.
// Each valid order should have a customer, product, count, and a price:
// • Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lowercase letters
// • Valid product contains any word character and must be surrounded by '<' and '>'
// • Valid count is an integer, surrounded by '|'
// • Valid price is any real number followed by '$'
// The parts of a valid order should appear in the order given: customer, product, count, and price.
// Between each part there can be other symbols, except ('|', '$', '%' and '.')
// For each valid line print on the console: "{customerName}: {product} - {totalPrice}"
// When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in
// the following format: "Total income: {income}".
// Input / Constraints
// • Strings that you have to process until you receive text "end of shift".
// Output
// • Print all of the valid lines in the format "{customerName}: {product} - {totalPrice}"
// • After receiving "end of shift" print the total amount of money for the day rounded to 2 decimal places
// in the following format: "Total income: {income}"

function barIncome(arr) {
    let command = arr.shift();
    let totalPrice = 0;
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|%$.]*<(?<product>\w+)>[^|%$.]*\|(?<count>\d+)\|[^|%$.\d]*(?<price>\d+\.?\d*)\$/;

    while (command != 'end of shift') {
        let matches = command.match(pattern);

        if (matches) {
            let { customer, product, count, price } = matches.groups;

            let curPrice = Number(count) * Number(price);
            totalPrice += curPrice;
            console.log(`${customer}: ${product} - ${curPrice.toFixed(2)} `);
        }
        command = arr.shift();

    }

    console.log(`Total income: ${totalPrice.toFixed(2)} `);
}

barIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);