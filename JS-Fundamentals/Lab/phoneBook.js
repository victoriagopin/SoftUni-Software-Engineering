// Write a function that stores information about a person’s name and phone number. The input is an array of strings
// with space-separated name and number. Replace duplicate names. Print the result as shown.

function phoneBook(arr) {
    let persons = {};

    for (let el of arr) {
        let tokens = el.split(' ');
        let name = tokens[0];
        let phNum = tokens[1];

        persons[name] = phNum;
    }

    let entries = Object.entries(persons);

    for (let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);