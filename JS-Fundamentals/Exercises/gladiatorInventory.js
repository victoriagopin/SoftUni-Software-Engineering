// As a gladiator, Peter has a cool Inventory.He loves to buy new equipment.You are given Peter’s inventory with all
// of his equipment -> strings, separated by whitespace.
// You may receive the following commands:
// • Buy { equipment }
// • Trash { equipment }
// • Repair { equipment }
// • Upgrade { equipment } -{ upgrade }
// If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it
// isn't bought already.
// If you receive the Trash command, delete the equipment if it exists.
// If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.
// If you receive the Upgrade command, you should check if the equipment exists and insert after it the upgrade in
//     the following format: "{equipment}:{upgrade}".
//         Input / Consrtaints
//     You will receive an array of strings.Each element of the array is a command.
//     • In the first input element, you will receive Peter's inventory – a sequence of equipment names, separated
//     by space.
//     Output
//     As output, you must print Peter's inventory on one line, separated by a space.
//     Constraints
//     • The command will always be valid.
//     • The equipment and Upgrade will be strings and will contain any character, except '-'.

function gladiatorInevntory(arr) {
    let inventory = arr.shift().split(' ');

    for (let command of arr) {
        let tokens = command.split(' ');
        let action = tokens[0];
        let el = tokens[1];

        if (action == 'Buy') {
            if (!inventory.includes(el)) {
                inventory.push(el);
            }
        } else if (action == 'Trash') {
            if (inventory.includes(el)) {
                let indx = inventory.indexOf(el);
                inventory.splice(indx, 1);
            }
        } else if (action == 'Repair') {
            if (inventory.includes(el)) {
                let indx = inventory.indexOf(el);
                inventory.splice(indx, 1);
                inventory.push(el);
            }
        } else if (action == 'Upgrade') {
            let upgrade = el.split('-');
            let elToUpgrade = upgrade[0];
            let newUpgrade = upgrade[1];
            if (inventory.includes(elToUpgrade)) {
                let indx = inventory.indexOf(elToUpgrade);
                inventory.splice(indx + 1, 0, `${elToUpgrade}:${newUpgrade}`);
            }
        }

    }
    console.log(inventory.join(' '));
}


gladiatorInevntory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'])