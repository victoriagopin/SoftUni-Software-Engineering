// There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to
// the party check if he/she contains in any of the two reservation lists.
// The input will come as an array of strings. You will be given the list with the guests before you receive a command
// "PARTY".
// All VIP numbers start with a digit.
// When you receive the command "PARTY", the guests start coming.
// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first).
// Hint: Guest names are not unique. Only the first match is removed when receiving a name.

function partyTime(arr) {
    let guests = [];
    let VIPguests = [];

    let command = arr.shift();
    while (command !== 'PARTY') {
        if (isNaN(command[0])) {
            guests.push(command);
        } else {
            VIPguests.push(command);
        }
        command = arr.shift();
    }

    for (let guest of arr) {
        let index = guests.indexOf(guest);
        if (index !== -1) {
            guests.splice(index, 1);
        } else {
            index = VIPguests.indexOf(guest);
            if (index !== -1) {
                VIPguests.splice(index, 1);
            }
        }
    }

    let notComing = VIPguests.concat(guests);
    console.log(notComing.length);
    for (let notComingGuest of notComing) {
        console.log(notComingGuest);
    }
}


partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
]);