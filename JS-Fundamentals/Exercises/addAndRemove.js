// Write a function that adds and removes numbers to/from an array. You will receive a command, which can either
// be "add" or "remove".
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// • Upon receiving an "add" command, you should add the current number to your array.
// • Upon receiving the "remove" command, you should remove the last entered number, currently existent in
// the array.

function addAndRemove(commands) {
    let newArr = [];
    let initialNum = 1;

    for (let i = 0; i < commands.length; i++) {
        let curCommand = commands[i];

        if (curCommand == 'add') {
            newArr.push(initialNum);
        } else if (curCommand == 'remove') {
            newArr.pop(newArr[newArr.length - 1]);
        }
        initialNum++;
    }
    if (newArr.length <= 0) {
        console.log(`Empty`);
    } else {
        console.log(newArr.join(' '));
    }
}

addAndRemove(['remove', 'remove', 'remove']);