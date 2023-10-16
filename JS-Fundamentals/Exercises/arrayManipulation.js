// Write a function that receives an array of integers and an array of string commands and executes them over the
// array.The commands are as follows:
//         • add < index > <element> – adds element at the specified index (elements right from this position
//         inclusively are shifted to the right).
//         • addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the
//         specified index.
//         • contains <element> – prints the index of the first occurrence of the specified element (if exists) in the
//         array or -1 if the element is not found.
//         • remove <index> – removes the element at the specified index.
//         • shift <positions> – shifts every element of the array the number of positions to the left (with
//         rotation).
//         o For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
//         • sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
//         o For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
//         • print – stop receiving more commands and print the last state of the array in the following format:
//          `[ {element1}, {element2}, …elementN} ]`
//          Note: The elements in the array must be joined by comma and space (, ).

function arrayManipulation(arr, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');

        if (tokens[0] == 'add') {
            let indx = Number(tokens[1]);
            let el = Number(tokens[2]);
            arr.splice(indx, 0, el);
        } else if (tokens[0] == 'addMany') {
            let indx = tokens[1];
            for (let j = 2; j < tokens.length; j++) {
                let el = Number(tokens[j]);
                arr.splice(indx, 0, el);
                indx++;
            }
        } else if (tokens[0] == 'contains') {
            let el = Number(tokens[1]);
            let curIndx = arr.indexOf(el);
            console.log(curIndx);
        } else if (tokens[0] == 'remove') {
            let indx = Number(tokens[1]);
            arr.splice(indx, 1);
        } else if (tokens[0] == 'shift') {
            let rotations = Number(tokens[1]);
            for (let z = 0; z < rotations; z++) {
                let curEl = arr.shift();
                arr.push(curEl);
            }
        } else if (tokens[0] == 'sumPairs') {
            let newArr = [];
            for (let y = 0; y < arr.length; y += 2) {
                let sum = arr[y] + arr[y + 1];

                if (y + 1 == arr.length) {
                    newArr.push(arr[y]);
                } else {
                    newArr.push(sum);
                }

            }
            arr = newArr;
        } else if (tokens[0] == 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
        }
    }
}

arrayManipulation([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',
        'sumPairs', 'print']);