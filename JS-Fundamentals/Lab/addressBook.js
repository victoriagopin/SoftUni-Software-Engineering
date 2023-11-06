// Write a function that stores information about a person’s name and his address. The input comes as an array of
// strings. Each string contains the name and the address separated by a colon. If you receive the same name twice
// just replace the address. In the end, print the full list, sorted alphabetically by the person’s name.

function addressBook(arr) {
    let adrBook = {};

    for (let el of arr) {
        let tokens = el.split(':');
        let name = tokens[0];
        let address = tokens[1];

        adrBook[name] = address;
    }

    let entries = Object.entries(adrBook);
    let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of sorted) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);