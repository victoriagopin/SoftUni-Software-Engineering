function numbers(arr) {
    let sequence = arr.shift().split(' ').map(Number);

    for (let el of arr) {
        let tokens = el.split(' ');
        let command = tokens.shift();

        if (command == 'Add') {
            let value = Number(tokens[0]);
            sequence.push(value);
        } else if (command == 'Remove') {
            let value = Number(tokens[0]);
            if (sequence.includes(value)) {
                let indx = sequence.indexOf(value);
                sequence.splice(indx, 1);
            }
        } else if (command == 'Replace') {
            let value = Number(tokens[0]);
            let replacement = Number(tokens[1]);
            if (sequence.includes(value)) {
                let indx = sequence.indexOf(value);
                sequence.splice(indx, 1, replacement);
            }
        } else if (command == 'Collapse') {
            let value = Number(tokens[0])

            for (let j = sequence.length - 1; j >= 0; j--) {

                if (sequence[j] < value) {
                    sequence.splice(j, 1);
                }
            }
        } else if (command == 'Finish') {
            console.log(sequence.join(' '));
            break;
        }
    }
}

numbers(['5 9 70 -56 9 9',
    'Replace 9 10',
    'Remove 9',
    'Finish']);