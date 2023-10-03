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