// Write a function that takes a certain number of items and their quantity. If the same item appears more than once,
// add the new amount to the existing one. In the end, print all the items and their amount without sorting them. The
// input comes as an array of strings. Try using a Map().

function storage(arr) {
    let map = new Map();

    for (let el of arr) {
        let tokens = el.split(' ');
        let product = tokens[0];
        let qty = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, +qty);
        } else {
            let curQty = map.get(product);
            let newQty = curQty += qty;
            map.set(product, newQty);
        }
    }

    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);