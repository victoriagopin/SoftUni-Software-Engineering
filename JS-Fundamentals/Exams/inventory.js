// Input / Constraints
// You will receive a journal with some collecting items, separated with a comma and a space (", "). After that, until receiving "Craft!" you will be receiving different commands split by " - ":
// "Collect - {item}" - you should add the given item to your inventory. If the item already exists, you should skip this line.
// "Drop - {item}" - you should remove the item from your inventory if it exists.
// "Combine Items - {old_item}:{new_item}" - you should check if the old item exists. If so, add the new item after the old one. Otherwise, ignore the command.
// "Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.
// Output
// After receiving "Craft!" print the items in your inventory, separated by ", ".

function inventory(arr) {
    let journal = arr.shift().split(', ');

    for (let command of arr) {
        let tokens = command.split(' - ');
        let curCommand = tokens.shift();

        if (curCommand == 'Collect') {
            let item = tokens.shift();
            if (!journal.includes(item)) {
                journal.push(item);
            }
        } else if (curCommand == 'Drop') {
            let item = tokens.shift();
            if (journal.includes(item)) {
                indx = journal.indexOf(item);
                journal.splice(indx, 1);
            }
        } else if (curCommand == 'Combine Items') {
            let items = tokens[0];
            let splittedItems = items.split(':');
            let oldItem = splittedItems[0];
            let newItem = splittedItems[1];

            if (journal.includes(oldItem)) {
                let indx = journal.indexOf(oldItem);
                journal.splice(indx + 1, 0, newItem);
            }
        } else if (curCommand == 'Renew') {
            let item = tokens.shift();
            let indx = journal.indexOf(item);
            let toRemove = journal.splice(indx, 1);
            journal.push(toRemove);
        } else if (curCommand == 'Craft!') {
            console.log(journal.join(', '));
        }
    }
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);