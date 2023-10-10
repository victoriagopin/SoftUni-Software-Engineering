// You will receive an initial list with groceries separated by an exclamation mark "!".
// After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
// "Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
// "Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
// "Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
// "Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
// Constraints
// There won't be any duplicate items in the initial list.
// Output
// Print the list with all the groceries, joined by ", ":
// "{firstGrocery}, {secondGrocery}, … {nthGrocery}"

function shoppingList(arr) {
    let newArr = arr.shift().split('!');

    for (let el of arr) {
        let tokens = el.split(' ');

        let command = tokens[0];
        let product = tokens[1];

        if (command == 'Urgent' && !newArr.includes(product)) {
            newArr.unshift(product);
        } else if (command == "Unnecessary" && newArr.includes(product)) {
            let index = newArr.indexOf(product);
            newArr.splice(index, 1);
        } else if (command == 'Correct' && newArr.includes(product)) {
            let product2 = tokens[2];
            let index = newArr.indexOf(product);
            newArr.splice(index, 1, product2);

        } else if (command == 'Rearrange' && newArr.includes(product)) {
            let elementToMove = product;
            let index = newArr.indexOf(elementToMove);

            newArr.splice(index, 1);
            arr.push(elementToMove);

        }
    }
    console.log(newArr.join(', '));
}

shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]))